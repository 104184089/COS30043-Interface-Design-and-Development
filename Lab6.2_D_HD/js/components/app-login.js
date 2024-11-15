const Login = {

    data() {
        return {
            err: "",
            input: {
                username: "",
                password: "",
            },
            //defining username rules for validation
            usernameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            //defining username rules for validation
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password must be more than 8 characters',
            ],


        }
    },
    methods: {
        login() {

            if (this.$refs.myForm.validate()) {

                var self = this;

                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.input.username,
                        password: this.input.password
                    })
                };

                fetch("api-database/login.php/", requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        localStorage.setItem('authenticated', true);
                        this.$root.setAuthenticated(true);
                        this.$router.replace({ name: "home" });
                    } else {
                        this.err = data.message || "Username or Password incorrect.";
                    }
                })
                .catch(error => {
                    this.err = "Error: " + error;
                });


            }
        },
        goToSignup() {
            this.$router.replace({ name: "signup" });
        },
        checkAuth() {
            const isAuthenticated = localStorage.getItem('authenticated');
            if (isAuthenticated) {
                this.$root.setAuthenticated(true);
                this.$router.replace({ name: "home" });
            }
        }
    },
    created() {
        this.checkAuth();
    },
    template: `
    <v-container>
        <v-card class="form-container">
            <v-form ref="myForm" class="loginForm">
                <h2 class="text-center mb-4">Login</h2>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="input.username" :counter="10" :rules="usernameRules" label="Username" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="input.password" label="Password" type="password" :rules="passwordRules" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p style="color: red;">{{err}}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="btn-container">
                        <v-btn @click="login()" color="success">Log In</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center mt-2">
                        <p>Don't have an account? <router-link to="/signup">Sign up here</router-link></p>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
    `,
}