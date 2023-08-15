import AuthPage from '../views/Auth/AuthPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginFrom from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'

const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: About },
  { 
    path: '/auth',
   component: AuthPage,
   children:[
    {
      path:'login',
      component:LoginFrom
    },
    {
      path:'register',
      component:RegisterForm
    }
   ]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
