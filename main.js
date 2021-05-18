const app = Vue.createApp({
    data(){
        return {
            navItems: [
                {name: "Flights", alt:"flight icon", icon: "/assets/images/flight.svg"},
                {name: "Hotels", alt:"hotel icon", icon: "/assets/images/hotel.svg"},
                {name: "Packages", alt:"packages icon", icon: "/assets/images/package.svg"}
            ],
            checkoutItems: [],
            authUser: [{username: "hellow"}],
            currUser: 0,
            logwindowShow: false,
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