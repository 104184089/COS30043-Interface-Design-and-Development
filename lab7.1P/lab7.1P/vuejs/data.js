const app = Vue.createApp({
    data() {
        return {
            message: "Lab 7.1 - Requesting External Data",
            posts: []
        }
    },
    mounted() {
        var self = this;
        $.getJSON('https://jsonplaceholder.typicode.com/posts',
            function (data) {
                self.posts = data;
            })
            .fail(function () {
                alert('getJSON request failed!');

            })
    }
});

app.mount("#app");
