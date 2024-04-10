interface IRouteArrayObject {
  key: number;
  path: string;
  name: string;
  acronym: string;
}

const TopRoutes: IRouteArrayObject[] = [
  {
    key: 1,
    path: '/dashboard',
    name: 'Dashboard',
    acronym: 'D'
  },
  {
    key: 2,
    path: '/products',
    name: 'Products',
    acronym: 'P'
  },
  {
    key: 3,
    path: '/orders',
    name: 'Orders',
    acronym: 'O'
  },
  {
    key: 4,
    path: '/customers',
    name: 'Customers',
    acronym: 'C'
  }
];

const BottomRoutes: IRouteArrayObject[] = [
  {
    key: 1,
    path: '/settings',
    name: 'Settings',
    acronym: 'S'
  },
  {
    key: 2,
    path: '/help',
    name: 'Help',
    acronym: 'H'
  },
  {
    key: 3,
    path: '/sign-out',
    name: 'Sign Out',
    acronym: 'S'
  }
];

const SidebarRoutesArray = { TopRoutes, BottomRoutes };

export default SidebarRoutesArray;
