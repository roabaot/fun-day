/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

export default [
  {
    path: '/',
    view: 'Home'
  },
  {
    path: '/dashboard',
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  },
  {
    path: '/signup',
    view: 'SignUp',
    name: 'Sign Up'
  },
  {
    path: '/signin',
    view: 'SignIn',
    name: 'Sign In'
  },
  {
    path: '/home&art',
    view: 'HomeAndArt',
    name: 'Home And Art'
  },
  {
    path: '/home&art/art',
    view: 'Art',
  },
  {
    path: '/home&art/home-decor',
    view: 'HomeDecor',
    name: 'Home Décor'
  }
]

