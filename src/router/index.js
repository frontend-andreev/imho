import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            layout: 'Empty'
        }
    },
    {
        path: '/admin',
        name: 'MainAdmin',
        component: () =>
            import ('../layouts/AdminLayout.vue'),
        children: [{
                path: 'employees',
                name: 'AdminEmployees',
                component: () =>
                    import ('../views/AdminPages/EmployeesPages/Main'),
                children: [{
                        path: 'list',
                        name: 'AdminEmployeesTable',
                        component: () =>
                            import ('../views/AdminPages/EmployeesPages/List'),
                        meta: {
                            layout: 'Default'
                        }
                    },
                    {
                        path: 'view/:id',
                        name: 'AdminEmployeesView',
                        component: () =>
                            import ('@/views/AdminPages/EmployeesPages/View'),
                        meta: { layout: 'Default' }
                    },
                    {
                        path: 'create',
                        name: 'AdminEmployeesCreateEmployeer',
                        component: () =>
                            import ('../views/AdminPages/EmployeesPages/CreateNew'),
                        meta: { layout: 'Default' }
                    },
                ]

            },
            {
                path: 'analytics',
                name: 'AdminAnalyticsMain',
                component: () =>
                    import ('../views/AdminPages/AnalyticsPages/Main'),
                children: [{
                        path: 'graph',
                        name: 'AdminAnalyticsPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Graph'),
                        meta: { layout: 'Default' }

                    },
                    {
                        path: 'authors',
                        name: 'AdminAnalyticsAuthorsPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Authors'),
                        meta: { layout: 'Default' }

                    },
                    {
                        path: 'publications',
                        name: 'AdminAnalyticsPublicationsPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Publications'),
                        meta: { layout: 'Default' }

                    },
                    {
                        path: 'users',
                        name: 'AdminAnalyticsUsersPage',
                        component: () =>
                            import ('../views/AdminPages/AnalyticsPages/Users'),
                        meta: { layout: 'Default' }

                    },
                ]
            }
        ]
    },
    {
        path: '/article/:id',
        name: 'PublicationsArticle',
        component: () =>
            import ('../views/ModeratorPages/PublicationsPages/View'),
        meta: { layout: 'Default' }

    },
    {
        path: '/publications/table',
        name: 'PublicationsTable',
        component: () =>
            import ('../views/ModeratorPages/PublicationsPages/Table/Main'),
        children: [{
                path: 'new',
                name: 'ModeratorPublicationsTableNew',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/New'),
                meta: { layout: 'Default' }
            },
            {
                path: 'approved',
                name: 'ModeratorPublicationsTableApproved',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/Approved'),
                meta: { layout: 'Default' }
            },
            {
                path: 'rejected',
                name: 'ModeratorPublicationsTableRejected',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/Rejected'),
                meta: { layout: 'Default' }
            },
            {
                path: 'archive',
                name: 'ModeratorPublicationsTableArchive',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/Archive'),
                meta: { layout: 'Default' }
            },
            {
                path: 'editorial',
                name: 'ModeratorPublicationsTableEditorial',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/Editorial'),
                meta: { layout: 'Default' }
            },
            {
                path: 'hot',
                name: 'ModeratorPublicationsTableHot',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/Hot'),
                meta: { layout: 'Default' }
            },
            {
                path: 'all',
                name: 'ModeratorPublicationsTableAll',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Table/All'),
                meta: { layout: 'Default' }
            },
        ]
    },
    {
        path: '/publications/calendar',
        name: 'PublicationsCalendar',
        component: () =>
            import ('../views/ModeratorPages/PublicationsPages/Calendar/Main'),
        children: [{
                path: 'new',
                name: 'ModeratorPublicationsCalendarNew',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/New'),
                meta: {
                    layout: 'Default'
                },
            },
            {
                path: 'approved',
                name: 'ModeratorPublicationsCalendarApproved',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/Approved'),
                meta: {
                    layout: 'Default'
                },
            },
            {
                path: 'rejected',
                name: 'ModeratorPublicationsCalendarRejected',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/Rejected'),
                meta: {
                    layout: 'Default'
                },
            },
            {
                path: 'archive',
                name: 'ModeratorPublicationsCalendarArchive',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/Archive'),
                meta: {
                    layout: 'Default'
                },
            },
            {
                path: 'editorial',
                name: 'ModeratorPublicationsCalendarEditorial',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/Editorial'),
                meta: {
                    layout: 'Default'
                },

            },
            {
                path: 'hot',
                name: 'ModeratorPublicationsCalendarHot',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/Hot'),
                meta: {
                    layout: 'Default'
                },

            },
            {
                path: 'all',
                name: 'ModeratorPublicationsCalendarAll',
                component: () =>
                    import ('../views/ModeratorPages/PublicationsPages/Calendar/All'),
                meta: {
                    layout: 'Default'
                },

            },
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () =>
            import ('../views/ModeratorPages/UserPages/Main'),
        children: [{
                path: 'settings',
                name: 'UserSettings',
                component: () =>
                    import ('../views/ModeratorPages/UserPages/Settings'),
                meta: {
                    layout: 'Default'
                },
            },
            {
                path: 'kpi',
                name: 'UserKpi',
                component: () =>
                    import ('../views/ModeratorPages/UserPages/Kpi'),
                meta: {
                    layout: 'Default'
                },
            }
        ]

    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    let mainPage = user ? user.roles.includes('администратор') ? 'AdminEmployeesTable' : 'ModeratorPublicationsTableNew' : null;
    if (to.name != 'Login' && user == null) {
        next({ name: 'Login' });
    } 
    else if (to.name == 'Login' && user != null) {
        next({name: mainPage})
    }
    else if (user != null && user.roles.includes('администратор') && to.name != null) {
        window.scrollTo(0, 0);
        next()
    } else if ((user != null && !user.roles.includes('администратор') && to.name.includes('Admin')) || to.name == null) {
        next({ name: mainPage });
    } else {
        window.scrollTo(0, 0);
        next()
    }

})

export default router