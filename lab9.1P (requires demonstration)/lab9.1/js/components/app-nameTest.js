const NameTest = {
    data() {
        return {
            userName: "",
        }
    },
    template: 
    `
    <div id="nametest">
        <h2>String Test</h2>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <p>Please enter your name:</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <input type="text" v-model="userName">  
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <p id="success" v-if="userName.toLowerCase() == 'vu minh quang'">Awesome name!</p>
                <p v-else-if="userName == ''"></p>
                <p v-else> {{ userName }} is not my name!</p>
            </div>
        </div>
    </div>


        
    `,
}