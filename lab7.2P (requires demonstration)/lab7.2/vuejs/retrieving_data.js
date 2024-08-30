const app = Vue.createApp({
    data() {
        return {
            message: "Unit",
            units: [],
            err: "",
        }
    },
    mounted() {
        var self = this;
        var url = "units.json";
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                self.units = data;
            })
            .catch(error => {
                self.err = error;
            })
    }
});
app.mount("#app");