const PostManagement = {
    // defining data to be used in the component
    data() {
        return {
            statPosts: [],
            strStatus: ''
        };
    },

    // define the template for the component
    template: `
        


        <div id="post">
        <h2>Status Post App</h2>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <input type="text" v-model="strStatus">&nbsp;
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <button class="btn btn-primary" @click="add(strStatus)">Post</button>
            </div>
        </div>
        <hr>    
        <div class="row">
            <div class="col-md-6 mx-auto" v-for="post in statPosts">
                <h2>Status Updates</h2>
                <br>
                <p> {{ post }} <button @click="remove(index)">Delete</button> </p>
            </div>
        </div>
    </div>
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
}