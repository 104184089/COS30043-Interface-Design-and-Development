const vuetify = Vuetify.createVuetify();
const app = Vue.createApp({
    data: () => ({
        fname: "",
        lname: "",
        uname: "",
        pwsd: "",
        repwsd: "",
        email: "",
        address: "",
        sub: "",
        post: "",
        mobile: "",
        show: false,
        nameRules: [
            (v) => !!v || "Required",
            v => /^[a-zA-Z]+$/.test(v) || "Letters only"
        ],
        userNameRules: [
            (v) => !!v || "Required",
            (v) => (v && v.length >= 3) || "User name must be at least 3 characters",
        ],
        pwsdRules: [
            (v) => !!v || "Password required",
            (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            (v) => /[$%^&*]/.test(v) ||
                "Password must contain at least 1 special character ($, %, ^, &, or *)",
        ],
        emailRules: [
            (v) => !!v || "Email required",
            (v) =>
                /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) ||
                "Email must be valid",
        ],
        postRules: [
            (v) => !!v || "Postcode required",
            (v) => (v && v.length == 4) || "Postcode must be exactly 4 digits",
            (v) => /[0-9]/.test(v) || "Postcode must be numeric",
        ],
        mobileRules: [
            (v) => !!v || "Mobile number required",
            (v) => (v && v.length == 10) || "Mobile number must be exactly 10 digits",
            (v) => /[0-9]/.test(v) || "Mobile number must be numeric",
            (v) => v.startsWith("04") || "Mobile number must start with 04",
        ],
        addressRules: [
            (v) => !!v || "Street Address is required!"
        ]
    }),

    methods: {
        validate() {
            // alert("Some Information is wrong!");
            this.$refs.myForm.validate();
        },
        toggle() {
            this.show = !this.show;
        },
    },

});
app.use(vuetify);
app.mount("#app");