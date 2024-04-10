interface IHeaderAvatarMenuItem {
  key: number;
  title: string;
  route: string;
}

const MenuItems: IHeaderAvatarMenuItem[] = [
  {
    key: 1,
    title: 'Profile',
    route: '/profile'
  },
  {
    key: 2,
    title: 'Settings',
    route: '/settings'
  },
  {
    key: 3,
    title: 'Sign Out',
    route: '/sign-out'
  }
];

const HeaderAvatarMenuArray = { MenuItems };

export default HeaderAvatarMenuArray;
