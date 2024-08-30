const app = Vue.createApp({})


app.component('app-mypost', // indicating the component tag
    {
        // defining data to be used in the component
        data() {
            return {
                statPosts: [],
                strStatus: ''
            };
        },

        // define the template for the component
        template: `
            <div>
                <input type="text" v-model="strStatus">&nbsp;
                <button @click="add(strStatus)">Post</button>
                
                <div v-for="(post, index) in statPosts" :key="index">
                    <br>
                    <p> {{ post }} <button @click="remove(index)">Delete</button> </p>
                    
                </div>
            </div >
        `,

        // defining the methods for add and remove status 

        methods: {
            add(status) {
                //push status into statPosts array
                this.statPosts.unshift(status);
                this.strStatus = ''
            },
            remove(index) {
                //delete status from statPost using index
                this.statPosts.splice(index, 1);
            }
        }
    });
app.mount('#app')