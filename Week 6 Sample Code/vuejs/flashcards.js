// import { accounts } from './data.js';
const vuetify = Vuetify.createVuetify();
// define component
//==================================== Home component ====================================//
const Home = {
    template: `
        <div class="col-md-12">
            <h2>Home</h2>
            <p class="home_title">This is Home page</p>
            <p class="home_title">Welcome to the Flash Card App. Please sign in or sign up to start learning with flashcards.</p>
 
            <div class="row justify-content-center">
                <div class="col-md-3">
                    <router-link class="btn btn-primary w-100" to="/signin">Sign In</router-link>
                </div>
                <div class="col-md-3">
                    <router-link class="btn btn-primary w-100" to="/signup">Sign Up</router-link>
                </div>
            </div>
            <br>

            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Student Information</h5>
                            <p class="card-text"><strong>Name:</strong> Vu Minh Quang</p>
                            <p class="card-text"><strong>Student ID:</strong> 104184089</p>
                            <p class="card-text"><strong>Course:</strong> COS30043-Interface Design and Development</p>
                            <p class="card-text"><strong>Instructor:</strong> Dr. Van Cong Nguyen</p>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
        `
}

//==================================== Flashcard component ====================================//
const FlashCard = {
    data() {
        return {
            title_flashcard: "display",
            cards,
            index: 0,
            opened: false,
        }
    },
    methods: {
        change(change) {
            if (this.cards[this.index + change]) {
                this.index += change;
                this.opened = false;
            }
        },
    },
    template: `
            <div id="flashcard_page">
                            <div class="row">
                                <div class="col-md-12 mx-auto">
                                    <h2>Flash Cards</h2>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-10 mx-auto">
                                    <div id="fl_card" class="card text-center" @click="opened = !opened">
                                        <div class="card-body">
                                            <p id="keyword" v-text="opened ? '' : cards[index].keyword"></p>
                                            <p id="define" v-text="opened ? cards[index].define : ''"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4 mx-auto">
                                    <div class="navigation d-flex justify-content-between">
                                        <button id="previous" class="change_btn" @click="change(-1)"
                                            type="button">Previous</button>
                                        <button id="next" class="change_btn" @click="change(+1)"
                                            type="button">Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>`
}

//==================================== About component ====================================//
const About = {
    template: `
            <h3>About</h3>
            <p>This is about page</p>`
}

//==================================== Sign in component ====================================//
const Signin = {
    data() {
        return {
            username: '',
            password: '',
            accounts: [
                { username: 'quang', password: '123456' },
                { username: 'quangden', password: '123456' }
            ],
            errorMessage: ''
        }
    },
    template: `
            <div id="signInPage">
                <v-app>
                    <v-main>
                        <v-container>
                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    <h2>Sign In</h2>
                                </div>
                            </div>

                            <v-form @submit.prevent="validate">
                                <div class="row">
                                    <div class="col-md-6 mx-auto">
                                        <v-text-field v-model="username" label="Username"></v-text-field>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mx-auto">
                                        <v-text-field v-model="password" label="Password"
                                            type="password"></v-text-field>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 text-right mx-auto">
                                        <v-btn type="submit" color="primary">Sign In</v-btn>
                                    </div>
                                </div>
                            </v-form>
                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    <v-alert v-if="errorMessage" type="error" id="sign_in_error">{{ errorMessage }}</v-alert>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    <router-link to="/" class="sign_up_link">If you do not have an account, <span class="sign_up_text">Sign Up</span> first!</router-link>
                                </div>
                            </div>
                        </v-container>
                    </v-main>
                </v-app>
            </div>`,
    methods: {
        validate() {
            const found = this.accounts.some(account => {
                return account.username === this.username && account.password === this.password;
            });
            if (found) {
                alert('Sign in successful!');
                // Redirect to another page or perform other actions after successful sign in
            } else {
                this.errorMessage = 'Invalid username or password';
            }
        }
    }
}

// map route
const routes = [
    { path: '/', component: Home },
    { path: '/flashcard', component: FlashCard },
    { path: '/about', component: About },
    { path: '/signin', component: Signin },
]

//Create Router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
// Create App
const app = Vue.createApp({});
app.use(router);
app.use(vuetify);
app.mount("#app");
