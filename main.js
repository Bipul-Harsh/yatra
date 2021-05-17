const app = Vue.createApp({
    data(){
        return {
            navItems: [
                {name: "Flights", alt:"flight icon", icon: "/assets/images/flight.svg"},
                {name: "Hotels", alt:"hotel icon", icon: "/assets/images/hotel.svg"},
                {name: "Packages", alt:"packages icon", icon: "/assets/images/package.svg"}
            ],
            checkoutItems: [

            ],
            authUser: [
                // {userName: "bipul"}
            ],
            currUser: 0,
            logwindowShow: false,
        }
    },
    methods: {
        handlelogwindow(){
            this.logwindowShow = this.logwindowShow?false:true;
        }
    },
    computed: {

    }
})