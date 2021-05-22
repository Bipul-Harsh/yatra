const app = Vue.createApp({
    data(){
        return {
            authUser: [],
            currUser: 0,
            logwindowShow: false,
            route: 'landing',
            navItems: [
                {name: "Flights", alt:"flight icon", icon: "/assets/images/flight.svg", route: "flight"},
                {name: "Hotels", alt:"hotel icon", icon: "/assets/images/hotel.svg", route: "hotel"},
                {name: "Packages", alt:"packages icon", icon: "/assets/images/package.svg", route: "package"}
            ]
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
        },
        navItems(){
            return this.navItems
        }
    }
})