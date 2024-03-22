export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user', routes: [
          { name: '登录', path: '/user/login', component: './User/Login' },
          { name: '注册', path: '/user/register', component: './User/Register' }
        ]},
      {component: './404'},
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {  name: '用户管理',path: '/admin/user-manage', icon: 'smile', component: './Admin/UserManage'},
      {  component: './404'},
    ],
  },

  {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {component: './404'},

];


