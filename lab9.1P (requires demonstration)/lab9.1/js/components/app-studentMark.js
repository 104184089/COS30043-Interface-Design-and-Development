const StudentMark = {
    components: {
        paginate: VuejsPaginateNext,
    },
    data() {
        return {
            currentPage: 1,
            perPage: 3,
            stuData: {
                name: '',
                mark: ''
            },
            students: []
        }
    },

    // store data from JSON file
    mounted() {
        var readJSON = "js/components/student_marks.json"
        var self = this
        $.getJSON(readJSON, function(data) {
            self.students = data;
        })
    },

    // template for component
    template: 
    `
    <h2>Student Mark</h2>
    <div class="col-md-8 mx-auto">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th id="th-name" scope="col">Student Name</th>
                    <th id="th-mark" scope="col">Marks</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stu in getStu">
                    <td headers="th-name">{{ stu.name }}</td>
                    <td headers="th-mark">{{ stu.mark }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Vue Paginate template -->
        <paginate 
            :page-count="pageCount"    
            :page-range="3" 
            :margin-pages="1"
            :click-handler="clickCallback"
            :prev-text=" 'Prev Page' "	
            :next-text="'Next Page'" 
            :container-class="'pagination'" 
            :active-class="'currentPage'"
            >
        </paginate>
    </div>
    `,
    computed: {
        getStu() {
            let current = this.currentPage * this.perPage;
            let start = current - this.perPage;
            return this.students.slice(start, current);
        },
        pageCount() {
            return Math.ceil(this.students.length / this.perPage);
        }
    },
    methods: {
        clickCallback(pageNum) {
            this.currentPage = Number(pageNum);
        }
    }
}