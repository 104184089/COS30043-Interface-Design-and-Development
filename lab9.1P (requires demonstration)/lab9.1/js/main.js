// Creating the VueRouter

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/name-test',
            component: NameTest,
            name: "name-test"
        },
        {
            path: '/post-management',
            component: PostManagement,
            name: 'signup'
        },
        {
            path: '/student-mark',
            component: StudentMark,
            name: "student-mark",
        },
        
    ],
});

const app = Vue.createApp({});

app.component('nav-bar', {
    template: 
    `
    <div class="container-fluid" id="nav-bar">
        <div class="row">
            <nav id="nav_bar" class="w-100">
                <div class="nav-content">
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/name-test">Name Test</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/post-management">Post Management</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/student-mark">Student Mark</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    `,
    data() {
        return {
           
        }
    },
   
});

app.use(router)
app.mount('#app')