const app = Vue.createApp({
    data(){
        return {
            checkoutItems: [],
            authUser: [],
            currUser: 0,
            logwindowShow: false,
            route: 'landing'
        }
    },
    methods: {
        handlelogwindow(){
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
        }
    },
    computed: {

    }
})