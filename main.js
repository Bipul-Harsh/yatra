const app = Vue.createApp({
    data(){
        return {
            checkoutItems: [],
            authUser: [],
            currUser: 0,
            logwindowShow: false,
            route: 'landing',
            image: '/assets/images/airport_terminal.png',
            cards: [
                {color: 'rgb(134 180 255)', image: ''},
                {color: 'rgb(255 218 134)', image: ''},
            ]
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