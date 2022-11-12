app.component('package',{
    props:{
        flights:{
            type:Array,
            requried:true
        },
        locations:{
            type:Array,
            requried:true
        },
        packages:{
            type:Array,
            requried:true
        }
    },
    template:
    /*html*/
    `
    <h3 class="text-center heading display-6 my-5">Suggested Packages</h3>
    <div class="container-lg gx-0 mt-4">
        <div v-for="(package,index) in packages" class="row container-lg rounded-3 my-5 gx-0 shadow responsive-text overflow-hidden">
            <div class="row gx-0 my-2">
                <div class="row gx-0 col-5 d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-2 overflow-hidden d-flex justify-content-center"><img :src="locations[package.from].image" alt="location view" width="64" height="64"></div>
                    <div class="col-12 col-md-10 d-flex flex-column align-items-center mt-2">
                        <h5 class="text-secondary fs-6">Trip from</h5>
                        <h4 class="fs-4 heading">{{locations[package.from].location}}</h4>
                    </div>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center display-6">&#8651;</div>
                <div class="row gx-0 col-5 d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-10 d-flex flex-column align-items-center mt-2">
                        <h5 class="text-secondary fs-6">Trip to</h5>
                        <h4 class="fs-4 heading">{{locations[package.to].location}}</h4>
                    </div>
                    <div class="col-12 col-md-2 overflow-hidden d-flex justify-content-center"><img :src="locations[package.to].image" alt="location view" width="64" height="64"></div>
                </div>
            </div>
            <hr>
            <div class="row gx-0 container-lg mb-2">
                <div class="col-12 col-lg-8 d-flex align-items-center justify-content-center responsive-font">
                    <h5 class="mx-2 w">Starts at <span class="fs-6">(-<strong>15%</strong>)</span></h5>
                    <h5 class="text-decoration-line-through me-2">&#8377;{{flights[package.departflight].fare + flights[package.arriveflight].fare + locations[package.to].hotels[0].fare}} </h5>
                    <h5 class="display-6"> = &#8377;{{Math.round((flights[package.departflight].fare + flights[package.arriveflight].fare + locations[package.to].hotels[0].fare)*0.85)}}</h5>
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div class="d-flex justify-content-center align-items-center rounded py-4 mx-1 container-fluid" :class="[!package.booked?'a blue-button': 'gray-button']" @click="checkoutpackage(index, 0)">
                        Add to cart  <img v-if="package.booked" src="assets/images/green_check.svg" alt="booked" width="20" height="20">
                    </div>
                </div>
            </div>
            <hr>
            <div class="row gx-0 d-flex flex-column">
                <h5 class="fs-5 text-center">{{locations[package.from].location}} &#8594; {{locations[package.to].location}}</h5>
                <hr class="mx-2 w-auto">
                <div class="row p-2 responsive-padding gx-0 responsive-font">
                    <div class="col-2 d-flex justify-content-center"><strong>Airline</strong></div>
                    <div class="col-3 d-flex justify-content-center"><strong>Depart</strong></div>
                    <div class="col-3 d-flex justify-content-center"><strong>Arrive</strong></div>
                    <div class="col-2 d-flex justify-content-center"><strong>Price</strong></div>
                    <div class="col-2 d-flex justify-content-center"><strong>Avial</strong></div>
                </div>
                <div class="row gx-0 p-3 my-2 rounded-3 responsive-padding responsive-font">
                    <div class="col-2 d-flex justify-content-center row gx-0">
                        <div class="col-12 col-lg-3 align-self-center"><img :src="flights[package.departflight].logo" width="30" height="30" alt="logo"></div>
                        <div class="col-12 col-lg-9 d-flex flex-column px-0">
                            <span class="w-100">{{flights[package.departflight].airline}}</span>
                            <span class="w-100 d-none d-lg-inline">{{flights[package.departflight].flightno}}</span>
                        </div>
                    </div>
                    <div class="col-3 d-flex flex-column text-center px-0">
                        <span class="w-100"><strong>{{flights[package.departflight].departtime}}</strong></span>
                        <span class="w-100 text-break">{{flights[package.departflight].departstn}}</span>
                    </div>
                    <div class="col-3 d-flex flex-column text-center px-0">
                        <span class="w-100"><strong>{{flights[package.departflight].arrivetime}}</strong></span>
                        <span class="2-100 text-break">{{flights[package.departflight].arrivestn}}</span>
                    </div>
                    <div class="col-2 d-flex text-center align-items-center px-0">
                        <span class="w-100"><strong>&#8377;{{flights[package.departflight].fare}}</strong></span>
                    </div>
                    <div class="col-2 d-flex px-0 text-center align-items-center">
                        <span class="w-100">{{flights[package.departflight].avail}}</span>
                    </div>
                </div>
                <hr class="mx-2 w-auto">
                <h5 class="fs-5 text-center">{{locations[package.to].location}} &#8594; {{locations[package.from].location}}</h5>
                <hr class="mx-2 w-auto">
                <div class="row p-2 rounded-3 responsive-padding gx-0 responsive-font">
                    <div class="col-2 d-flex justify-content-center"><strong>Airline</strong></div>
                    <div class="col-3 d-flex justify-content-center"><strong>Depart</strong></div>
                    <div class="col-3 d-flex justify-content-center"><strong>Arrive</strong></div>
                    <div class="col-2 d-flex justify-content-center"><strong>Price</strong></div>
                    <div class="col-2 d-flex justify-content-center"><strong>Avial</strong></div>
                </div>
                <div class="row gx-0 p-3 my-2 rounded-3 responsive-padding responsive-font">
                    <div class="col-2 d-flex justify-content-center row gx-0">
                        <div class="col-12 col-lg-3 align-self-center"><img :src="flights[package.arriveflight].logo" width="30" height="30" alt="logo"></div>
                        <div class="col-12 col-lg-9 d-flex flex-column px-0">
                            <span class="w-100">{{flights[package.arriveflight].airline}}</span>
                            <span class="w-100 d-none d-lg-inline">{{flights[package.arriveflight].flightno}}</span>
                        </div>
                    </div>
                    <div class="col-3 d-flex flex-column text-center px-0">
                        <span class="w-100"><strong>{{flights[package.arriveflight].departtime}}</strong></span>
                        <span class="w-100 text-break">{{flights[package.arriveflight].departstn}}</span>
                    </div>
                    <div class="col-3 d-flex flex-column text-center px-0">
                        <span class="w-100"><strong>{{flights[package.arriveflight].arrivetime}}</strong></span>
                        <span class="2-100 text-break">{{flights[package.arriveflight].arrivestn}}</span>
                    </div>
                    <div class="col-2 d-flex text-center align-items-center px-0">
                        <span class="w-100"><strong>&#8377;{{flights[package.arriveflight].fare}}</strong></span>
                    </div>
                    <div class="col-2 d-flex px-0 text-center align-items-center">
                        <span class="w-100">{{flights[package.arriveflight].avail}}</span>
                    </div>
                </div>
                <hr class="mx-2 w-auto">
                <h4 class="display-5 text-center mt-2 mb-4">Stay</h4>
                <hr class="mx-2 w-auto">
                <div class="row container-lg p-2 rounded-3 my-1 gx-0">
                    <div class="row gx-0 shadow-sm">
                        <div class="col-12 col-lg-4 d-flex align-items-center p-2 justify-content-center"><img :src="locations[package.to].hotels[0].image" alt="hotel image" class="img-fluid"></div>
                        <div class="col-12 col-lg-8 d-flex align-items-start pt-3 p-2 row gx-0">
                            <h4 class="fw-bold h-auto col-12">{{locations[package.to].hotels[0].hotel}}</h4>
                            <div class="col-12 col-lg-8 px-4">
                                <h5 class="fw-bold">Location</h5>
                                <p>{{locations[package.to].hotels[0].address}}</p>
                                <h5 class="fw-bold">Facilities</h5>
                                <ul>
                                    <li v-for="facility in locations[package.to].hotels[0].facilities">{{facility}}</li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
                                <h5>Fare/night</h5>
                                <h5 class="display-6">&#8377;{{locations[package.to].hotels[0].fare}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        checkoutpackage(ind,hotelind){
            this.$emit('checkoutpackage',ind,hotelind);
        }
    }
})