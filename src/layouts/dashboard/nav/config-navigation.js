// routes
import { PATH_DASHBOARD }from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  chatbot: icon('chatbot'),
  home: icon('home'),
};

const navConfig = [
  {
    items: [
      {
        title: 'User',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.home,
      },
     
    ],
  },
];

export default navConfig;
