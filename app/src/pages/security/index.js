import Security from './Security';
import Groups from './group/Groups';
import Users from './user/Users';

export default {
  routes: [
    { path: '/security', component: Security,
      children: [
        // an empty path will be treated as the default, e.g.
        // components rendered at /parent: Root -> Parent -> Default
        { path: '', redirect: 'users'},

        // components rendered at /parent/foo: Root -> Parent -> Foo
        { path: 'users', component: Users, name: 'Users'},

        // components rendered at /parent/bar: Root -> Parent -> Bar
        { path: 'groups', component: Groups, name: 'Groups'}
      ]
    }
  ]
};
