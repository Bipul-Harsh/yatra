app.component('footernav',{
    props:{
        route:{
            type:String,
            required:true
        },
        navitems:{
            type:Array,
            required:true
        }
    },
    template:
    /*html*/
    `
    <footer class="mt-4">
        <nav class="container-lg">
            <div class="row d-flex justify-content-end">
                <a href="#" class="nav-link w-auto" id="back-to-top">
                    Back to top&nbsp;&nbsp;&nbsp;<img src="assets/images/back_to_top.svg" width="24" height="24" alt="">
                </a>
            </div>
            <hr>
            <div class="row d-flex nav-link">
                <a href="#" class="w-auto foot-link" @click="changeRoute('landing')" :class="{'foot-link-active':route=='landing'}">Home</a>
                <a href="#" v-for="navItem in navItems" class="w-auto foot-link" @click="changeRoute(navItem.route)" :class="{'foot-link-active':route==navItem.route}">{{navItem.name}}</a>
            </div>
            <div class="row d-flex justify-content-center">
                <a href="https://github.com/Bipul-Harsh/yatra" class="a nav-link foot-link w-auto" target="_blank"> <img src="assets/images/github.svg" height="24" width="24" alt="github icon"> You can check its Source Code here</a>
            </div>
            <hr>
            <div class="row d-flex justify-content-between align-items-center">
                <span href="/" class="navbar-brand a w-auto col-12 col-md-6" @click="changeRoute('landing')">
                    <img src="assets/images/suitcases.svg" alt="logo" width="40" height="40" class="d-inline-block align-top">
                    <h1 class="display-6 d-inline-block mx-2">Yatra</h1>
                </span>
                <span class='w-auto'>Copyright &copy; 2021 Bipul Harsh</span>
            </div>
        </nav>
    </footer>
    `,
    data(){
        return {
            navItems: this.navitems
        }
    },
    methods:{
        changeRoute(x){
            this.$emit("changeroute",x)
        },
    }
})