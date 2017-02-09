import Configure from './Configure';
import Settings from './setting/Settings';
import Profile from './profile/Profile';

export default {
  routes: [
    { path: '/configure', component: Configure,
      children: [
        // an empty path will be treated as the default, e.g.
        // components rendered at /parent: Root -> Parent -> Default
        { path: '', redirect: 'profile'},

        // components rendered at /parent/foo: Root -> Parent -> Foo
        { path: 'profile', component: Profile, name: 'Profile'},

        // components rendered at /parent/bar: Root -> Parent -> Bar
        { path: 'settings', component: Settings, name: 'Settings'}
      ]
    }
  ]
};
