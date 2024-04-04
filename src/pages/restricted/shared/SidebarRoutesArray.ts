interface IRouteArrayObject {
  key: number;
  path: string;
  name: string;
  acronym: string;
}

const TopRoutes: IRouteArrayObject[] = [
  {
    key: 1,
    path: '/',
    name: 'Dashboard',
    acronym: 'D'
  },
  {
    key: 2,
    path: '/products',
    name: 'Products',
    acronym: 'P'
  }
];

const BottomRoutes: IRouteArrayObject[] = [
  {
    key: 1,
    path: '/',
    name: 'Settings',
    acronym: 'S'
  },
  {
    key: 2,
    path: '/',
    name: 'Logout',
    acronym: 'L'
  }
];

const SidebarRoutesArray = { TopRoutes, BottomRoutes };

export default SidebarRoutesArray;
