import MainView from "./views/MainView.vue";
import {createRouter, createWebHistory} from "vue-router";
import LoginView from "./views/LoginView.vue";
import RegistrationView from "./views/RegistrationView.vue";
import ProfileView from "./views/ProfileView.vue";

const routes = [
    {
        path: '/',
        component: MainView,
        name: 'main',
        meta: {
            title: "Main"
        }
    },
    {
        path: '/accounts/login',
        name: 'login',
        component: LoginView,
        meta: {
            title: "Login"
        }
    },
    {
        path: '/accounts/register',
        name: 'register',
        component: RegistrationView,
        meta: {
            title: "Registration"
        }
    },
    {
        path: '/accounts/profile/:username',
        name: 'profile',
        component: ProfileView,
        meta: {
            title: '$username$',
            pathVariables: ['username']
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    if (Array.isArray(to.meta.pathVariables)){
        let title: string = to.meta.title as string;

        to.meta.pathVariables.forEach((item: string) => {
            title = title.replace('$' + item + '$', to.params[item] as string);
        });

        document.title = title;
    } else {
        document.title = to.meta.title as string;
    }
    next();
})
export default router