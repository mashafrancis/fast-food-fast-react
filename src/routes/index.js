/* eslint import/no-named-as-default: 0 */
import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    exact: false,
  },
  {
    path: '/signup',
    name: 'Register',
    component: Signup,
    exact: false,
  }
];

export default routes;