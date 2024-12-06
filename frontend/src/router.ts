import {createRouter, createWebHistory} from "vue-router";
import MainView from "./components/views/MainView.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: MainView,
        meta: {
            title: "Main"
        }
    }
   /* {
        path: '/accounts/profile/:username',
        name: 'profile',
        component: ProfileView,
        meta: {
            title: '$username$',
            pathVariables: ['username']
        }
    }*/
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