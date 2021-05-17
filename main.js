const app = Vue.createApp({
    data(){
        return {
            navItems: [
                {name: "Flights", alt:"flight icon", icon: "/assets/images/flight.png"},
                {name: "Hotels", alt:"hotel icon", icon: "/assets/images/hotel.png"},
                {name: "Packages", alt:"packages icon", icon: "/assets/images/package.png"}
            ],
            checkoutItems: [],
            authUser: [
                {userName: "bipul"}
            ],
            currUser: 0
        }
    },
    methods: {

    },
    computed: {

    }
})