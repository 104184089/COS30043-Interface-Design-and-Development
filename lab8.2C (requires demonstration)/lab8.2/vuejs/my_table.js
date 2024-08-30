var readJSON = "units.json"

const { createApp } = Vue
const app = createApp({
    data() {
        return {
            title: "My Table",
        }
    }
})

app.component('my-table',
    {
        components: {
            paginate: VuejsPaginateNext,
        },
        data() {
            return {
                currentPage: 1,
                perPage: 5,
                unit: {
                    code: '',
                    desc: '',
                    cp: '',
                    type: ''
                },
                units: []
            }
        },


        // store data from JSON file
        mounted() {
            var self = this

            fetch(readJSON)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    self.units = data;
                })
                .catch((error) => {
                    self.err = error;
                });
        },

        // template for component
        template:
            `
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th id="th-code" scope="col">Unit Code</th>
                        <th id="th-desc" scope="col">Description</th>
                        <th id="th-cp" scope="col">Credit Points</th>
                        <th id="th-type" scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="unit in getUnits">
                        <td headers="th-code">{{ unit.code }}</td>
                        <td headers="th-desc">{{ unit.desc }}</td>
                        <td headers="th-cp">{{ unit.cp }}</td>
                        <td headers="th-type">{{ unit.type }}</td>
                    </tr>
                </tbody>
            </table>

            <!-- Vue Paginate template -->
            <div class="row">
                <div class="col-md-9 mx-auto">
	                <paginate 
		                :page-count="pageCount"    
		                :page-range="5" 
		                :margin-pages="1"
		                :click-handler="clickCallback" 
		                :prev-text=" 'Prev Page' " 		
		                :next-text="'Next Page'" 
		                :container-class="'pagination'" 
		                :active-class="'currentPage'"
                        :page-class="'page-item'"
                        :page-link-class="'page-link'"
		                >
	                </paginate>
                </div>
            </div>
        </div>
        `,
        computed: {
            getUnits() {
                let current = this.currentPage * this.perPage;
                let start = current - this.perPage;
                return this.units.slice(start, current);
            },
            pageCount() {
                return Math.ceil(this.units.length / this.perPage);
            }
        },
        methods: {
            clickCallback(pageNum) {
                this.currentPage = Number(pageNum);
            }
        }
    }
);
app.mount('#app');