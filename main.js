const app = Vue.createApp({
    data(){
        return {
            authUser: [],
            currUser: 0,
            logwindowShow: false,
            route: 'flight',
        }
    },
    methods: {
        handlelogwindow(){
            if(this.authUser.length == 0 || this.logwindowShow)
                this.logwindowShow = this.logwindowShow?false:true;
        },
        addUser(userProfile){
            this.authUser.push(userProfile);
        },
        signout(){
            if(confirm("Are you sure to log out?")){
                this.authUser.pop()
                alert("You are sucessfully logged out")
            }
        },
        changeRoute(route){
            this.route = route
        }
    },
    computed: {
        checkoutItems(){
            if(this.currUser.length > 0)
                return this.authUser[this.currUser].checkoutItems
            else
                return []
        }
    }
})