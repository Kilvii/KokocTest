import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/main',
        component: layout('DefaultLayout'),
        children: [
            {
                path: '/resume', name: 'main.resume', component: page('Resume'),
            },
            {
                path: '/calculator', name: 'main.calculator', component: page('Calculator'),
            },
        ]
    },
]

function page(path) {
    return () => import(`../views/${path}.vue`).then(m => m.default || m)
}

function layout(path) {
    return () => import(`../layouts/${path}.vue`).then(m => m.default || m)
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;