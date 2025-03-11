import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addUserAsync, deleteUserAsync, getUsersAsync, updateUserAsync } from '../services';

const initialState = {
  isLoading: false,
  isSubmitting: false,
  isDeleting: false,
  alert: {
    type: '',
    message: '',
  },
  users: [],
  totalCount: 0,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearAlert(state) {
      state.alert = {
        type: '',
        message: '',
      };
    },
  },
  extraReducers: (builder) => {
    // Get Users ----------
    builder.addMatcher(isAnyOf(getUsersAsync.pending), (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(getUsersAsync.fulfilled), (state, { payload }) => {
      state.isLoading = false;
      state.alert = {
        type: 'success',
        message: 'Users data fetched successfully.',
      };
      state.totalCount = 62;
      state.users = payload;
    });
    builder.addMatcher(isAnyOf(getUsersAsync.rejected), (state, { payload }) => {
      state.isLoading = false;
      state.alert = {
        type: 'error',
        message: 'Something went wrong.',
      };
      state.users = [];
    });
    // -------------

    // Add User ----------
    builder.addMatcher(isAnyOf(addUserAsync.pending), (state, { payload }) => {
      state.isSubmitting = true;
    });
    builder.addMatcher(isAnyOf(addUserAsync.fulfilled), (state, { payload }) => {
      state.isSubmitting = false;
      state.alert = {
        type: 'success',
        message: 'User added successfully.',
      };
    });
    builder.addMatcher(isAnyOf(addUserAsync.rejected), (state, { payload }) => {
      state.isSubmitting = false;
      state.alert = {
        type: 'error',
        message: 'Something went wrong.',
      };
    });
    // -------------

    // Update User ----------
    builder.addMatcher(isAnyOf(updateUserAsync.pending), (state, { payload }) => {
      state.isSubmitting = true;
    });
    builder.addMatcher(isAnyOf(updateUserAsync.fulfilled), (state, { payload }) => {
      state.isSubmitting = false;
      state.alert = {
        type: 'success',
        message: 'User updated successfully.',
      };
    });
    builder.addMatcher(isAnyOf(updateUserAsync.rejected), (state, { payload }) => {
      state.isSubmitting = false;
      state.alert = {
        type: 'error',
        message: 'Something went wrong.',
      };
    });
    // -------------

    // Delete User ----------
    builder.addMatcher(isAnyOf(deleteUserAsync.pending), (state, { payload }) => {
      state.isDeleting = true;
    });
    builder.addMatcher(isAnyOf(deleteUserAsync.fulfilled), (state, { payload }) => {
      state.isDeleting = false;
      state.alert = {
        type: 'success',
        message: 'User deleted successfully.',
      };
    });
    builder.addMatcher(isAnyOf(deleteUserAsync.rejected), (state, { payload }) => {
      state.isDeleting = false;
      state.alert = {
        type: 'error',
        message: 'Something went wrong.',
      };
    });
    // -------------
  },
});

export const { clearAlert } = usersSlice.actions;
export default usersSlice.reducer;
