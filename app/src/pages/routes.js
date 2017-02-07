// this file define all the routing information
import Error404 from './Error';
import Home from './home/Home';
import SecurityModule from './security';
// extra setting
const ExtraModule = {
  name: 'Extra',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Welcome',
      redirect: '/home'
    },
    {
      path: '/error',
      name: 'Error404',
      component: Error404
    }
  ]
};
// constenate the modules' routes into an array

export default
{
  routes: [].concat(ExtraModule.routes, SecurityModule.routes),

  modules: [ExtraModule]
};
