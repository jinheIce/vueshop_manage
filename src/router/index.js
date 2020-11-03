import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () =>
            import ('../views/Login')
    },
    {
        path: '/home',
        component: () =>
            import ("../views/Home")
    }
]

const router = new VueRouter({
    routes
})

//挂载路由导航守卫 控制访问权限
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next();
    const tokenstr = window.sessionStorage.getItem('token');
    if (!tokenstr) return next('/login');
    next();
})

export default router