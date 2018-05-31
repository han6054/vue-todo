import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id', // /app/xxx
    path: '/app',
    component: Todo,
    // component: () => import('../views/todo/todo.vue'),
    // props: (route) => ({ id: route.query.b }),
    meta: {
      title: 'app',
      description: 'hjhsdhsa'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
  },
  {
    path: '/login',
    component: Login
  }
]
