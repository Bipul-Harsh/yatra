app.component('navbar', {
    props: {
        authuser:{
            type:Array,
            required:true
        },
        curruser:{
            type:Number,
            required:true
        },
        checkoutitems:{
            type:Array,
            required:true
        }
    },
    template:
    /*html*/
    `<header class="position-relative">
        <nav class="navbar navbar-light navbar-expand-lg fixed-top container-fluid shadow-sm p-0 px-3">
            <div class="navbar-brand px-lg-5">
                <a href="/" class="navbar-brand">
                    <img src="/assets/images/suitcases.svg" alt="logo" width="40" height="40" class="d-inline-block align-top">
                    <h1 class="display-6 d-inline-block mx-2">Yatra</h1>
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-lg-start" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li v-for="navItem in navItems" class="nav-item active">
                        <button href="#" class="nav-link active px-3 rounded btn btn-default mt-1 w-100 text-start" id="navButton">
                            <img :src="navItem.icon" :alt="navItem.alt" width="24" height="24">
                            <h6 class="d-inline d-lg-block p-3 p-lg-0">{{navItem.name}}</h6>
                        </button>
                    </li>
                </ul>
            </div>
            <!-- for signin and signup -->
            <div class="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
                <h5 class="d-block d-lg-none">Account and Settings</h5>
                <ul class="navbar-nav mr-auto">
                    <li v-if="authUser.length == 0" class="nav-item active me-2">
                        <button type="button" class="btn btn-danger" @click="handlelogwindow()">Log in</button>
                    </li>
                    <li v-else class="nav-item active me-2">
                        <div class="dropdown rounded">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{{authUser[currUser].username}}</button>
                            <ul class="dropdown-menu rounded px-3 me-bg-8" aria-labelledby="dropdownMenuButton1">
                                <li><a href="#" class="dropdown-item py-2">Profile</a></li>
                                <li><a href="#" class="dropdown-item py-2">Orders</a></li>
                                <li><a href="#" class="dropdown-item py-2">Wishlist</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><button type="button" class="btn btn-danger container-fluid" @click="signout()">SignOut</button></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item active">
                        <button type="button" class="btn btn-default position-relative mt-1"><img src="/assets/images/checkout.svg" alt="checkout icon" width="24" height="24"> <span v-show="checkoutItems.length > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">+{{checkoutItems.length}}</span></button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>`,
    data(){
        return{
            navItems: [
                {name: "Flights", alt:"flight icon", icon: "/assets/images/flight.svg"},
                {name: "Hotels", alt:"hotel icon", icon: "/assets/images/hotel.svg"},
                {name: "Packages", alt:"packages icon", icon: "/assets/images/package.svg"}
            ],
            authUser:this.authuser,
            checkoutItems:this.checkoutitems,
            currUser:this.curruser
        }
    },
    methods: {
        handlelogwindow(){
            this.$emit('handle-logwindow');
        },
        signout(){
            this.$emit('signout')
        }
    }
})