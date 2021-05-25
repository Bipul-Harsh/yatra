app.component('cart',{
    props:{
        checkoutitems:{
            type:Array,
            required:true
        },
        flights:{
            type:Array,
            requried:true
        },
        locations:{
            type:Array,
            required:true
        },
        packages:{
            type:Array,
            required:true
        },
        cart:{
            type:Array,
            required:true
        },
        grandtotal:{
            type:Number,
            required:true
        }
    },
    template:
    /*html*/
    `
    <h3 class="text-center h-auto heading my-4">My Cart</h3>
    <div class="container-lg gx-0">
        <div v-if="checkoutItems.length==0" class="d-flex flex-column align-items-center justify-content-center vh-100 shadow rounded-3">
            <h2>Your cart is Empty!</h2>
        </div>
        <div v-else class="row gx-0 container-fluid">
            <div class="row container-lg gx-0 py-1 shadow mb-4">
                <div class="col-12 col-lg-8 d-flex align-items-center justify-content-center responsive-font">
                    <h5 class="me-2 fs-4">Subtotal <span class="fs-5">(-<strong>10%</strong>)</span></h5>
                    <h5 class="text-decoration-line-through me-2 fs-4">&#8377;{{grandtotal}} </h5>
                    <h5 class="display-6"> = &#8377;{{Math.round(grandtotal*0.9)}}</h5>
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div class="d-flex justify-content-center align-items-center rounded py-4 mx-1 container-fluid btn btn-outline-primary a" @click="makeorder()">
                        Make Order
                    </div>
                </div>
            </div>
            <div v-for="(item,index) in cart" class="row gx-0 container mt-3">
                <!-- flight -->
                <div v-if="item.type=='flight'" class="shadow row gx-0 rounded-3 d-flex justify-content-between">
                    <div class="row gx-0">
                        <h3 class="display-6 p-2 fs-4 col-3 d-flex align-items-center">Flight</h3>
                        <div class="p-2 col-9 d-flex justify-content-end align-items-center">
                            <h5 class="mx-1">Qty: </h5>
                            <span class="btn btn-outline-danger px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':(item.qty<=1)}" @click="reduceqty(index)">-</span>
                            <span class="border border-secondary px-3 py-1 d-flex justify-content-center align-items-center mx-1"><strong>{{item.qty}}</strong></span>
                            <span class="btn btn-outline-success px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':item.qty>=item.avail}" @click="increaseqty(index)">+</span>
                        </div>
                    </div>
                    <div class="row gx-0 p-3 responsive-padding">
                        <div class="col-2 d-flex justify-content-center"><strong>Airline</strong></div>
                        <div class="col-2 d-flex justify-content-center"><strong>Depart</strong></div>
                        <div class="col-2 d-flex justify-content-center"><strong>Arrive</strong></div>
                        <div class="col-2 d-flex justify-content-center"><strong>Price</strong></div>
                        <div class="col-1 d-flex justify-content-center"><strong>Avial</strong></div>
                        <div class="col-3 d-flex justify-content-center"><strong>Checkout</strong></div>
                    </div>
                    <div class="row gx-0 p-3 my-2 responsive-padding">
                        <div class="col-2 d-flex justify-content-center row gx-0">
                            <div class="col-12 col-lg-3 align-self-center"><img :src="item.logo" width="30" height="30" alt="logo"></div>
                            <div class="col-12 col-lg-9 d-flex flex-column px-0">
                                <span class="w-100">{{item.airline}}</span>
                                <span class="w-100 d-none d-lg-inline">{{item.flightno}}</span>
                            </div>
                        </div>
                        <div class="col-2 d-flex flex-column text-center px-0">
                            <span class="w-100"><strong>{{item.departtime}}</strong></span>
                            <span class="w-100 text-break">{{item.departstn}}</span>
                        </div>
                        <div class="col-2 d-flex flex-column text-center px-0">
                            <span class="w-100"><strong>{{item.arrivetime}}</strong></span>
                            <span class=" text-break">{{item.arrivestn}}</span>
                        </div>
                        <div class="col-2 d-flex text-center align-items-center px-0">
                            <span class="w-100"><strong>&#8377;{{item.fare*item.qty}}</strong></span>
                        </div>
                        <div class="col-1 d-flex px-0 text-center align-items-center">
                            <span class="w-100">{{item.avail}}</span>
                        </div>
                        <div class="col-3 d-flex justify-content-center align-items-center container-fluid rounded btn btn-outline-danger" @click="removeitem(index)">
                            Remove
                        </div>
                    </div>
                </div>
                <!-- hotel -->
                <div v-else-if="item.type=='hotel'" class="shadow row gx-0 rounded-3 d-flex justify-content-between">
                    <div class="row gx-0">
                        <h3 class="display-6 p-2 fs-4 col-3 d-flex align-items-center">Hotel</h3>
                        <div class="p-2 col-9 d-flex justify-content-end align-items-center">
                            <h5 class="mx-1">Day: </h5>
                            <span class="btn btn-outline-danger px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':(item.qty<=1)}" @click="daydecrease(index)">-</span>
                            <span class="border border-secondary px-3 py-1 d-flex justify-content-center align-items-center mx-1"><strong>{{item.day}}</strong></span>
                            <span class="btn btn-outline-success px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':item.qty>=item.avail}" @click="dayincrease(index)">+</span>
                        </div>
                        <div class="row container-lg p-2 rounded-3 gx-0">
                            <div class="row">
                                <div class="col-3 col-md-1 "><img :src="item.locimage" alt="location view" width="64" height="64"></div>
                                <div class="col-9 col-md-11 d-flex align-items-center"><h4 class="display-7 heading">{{item.location}}</h4></div>
                            </div>
                            <hr class="my-2">
                            <div class="row gx-0 shadow-sm my-2">
                                <div class="col-12 col-lg-2 d-flex align-items-center p-2 justify-content-center"><img :src="item.image" alt="hotel image" class="img-fluid"></div>
                                <div class="col-12 col-lg-10 d-flex align-items-start pt-3 p-2 row gx-0">
                                    <h4 class="fw-bold h-auto col-12">{{item.hotel}}</h4>
                                    <div class="col-12 col-lg-8 px-4">
                                        <h5 class="fw-bold">Location</h5>
                                        <p>{{item.address}}</p>
                                        <div class="p-2 col-9 d-flex align-items-center">
                                            <h5 class="mx-1">Person: </h5>
                                            <span class="btn btn-outline-danger px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':(item.qty<=1)}" @click="persondecrease(index)">-</span>
                                            <span class="border border-secondary px-3 py-1 d-flex justify-content-center align-items-center mx-1"><strong>{{item.person}}</strong></span>
                                            <span class="btn btn-outline-success px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':item.qty>=item.avail}" @click="personincrease(index)">+</span>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
                                        <h5>Fare/night</h5>
                                        <h5 class="display-6">&#8377;{{item.fare*item.qty}}</h5>
                                        <div class="btn btn-outline-danger d-flex justify-content-center align-items-center container-fluid rounded py-4" @click="removeitem(index)">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Package -->
                <div v-else-if="item.type=='package'" class="shadow row gx-0 rounded-3 d-flex justify-content-between">
                    <div class="row gx-0">
                        <h3 class="display-6 p-2 fs-4 col-3 d-flex align-items-center">Package</h3>
                        <div class="p-2 col-9 d-flex justify-content-end align-items-center">
                            <h5 class="mx-1">Person: </h5>
                            <span class="btn btn-outline-danger px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':(item.person<=1)}" @click="persondecrease(index)">-</span>
                            <span class="border border-secondary px-3 py-1 d-flex justify-content-center align-items-center mx-1"><strong>{{item.person}}</strong></span>
                            <span class="btn btn-outline-success px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':item.person>=Math.min(flights[item.arriveflight].avail,flights[item.departflight].avail,locations[item.to].hotels[item.hotel].avail)}" @click="personincrease(index)">+</span>
                        </div>
                        <div class="row container-lg my-1 gx-0 responsive-text overflow-hidden">
                            <div class="row gx-0 my-2">
                                <div class="row gx-0 col-5 d-flex justify-content-center align-items-center">
                                    <div class="col-12 col-md-2 overflow-hidden d-flex justify-content-center"><img :src="locations[item.from].image" alt="location view" width="64" height="64"></div>
                                    <div class="col-12 col-md-10 d-flex flex-column align-items-center mt-2">
                                        <h5 class="text-secondary fs-6">Trip from</h5>
                                        <h4 class="fs-4 heading">{{locations[item.from].location}}</h4>
                                    </div>
                                </div>
                                <div class="col-2 d-flex justify-content-center align-items-center display-6">&#8651;</div>
                                <div class="row gx-0 col-5 d-flex justify-content-center align-items-center">
                                    <div class="col-12 col-md-10 d-flex flex-column align-items-center mt-2">
                                        <h5 class="text-secondary fs-6">Trip to</h5>
                                        <h4 class="fs-4 heading">{{locations[item.to].location}}</h4>
                                    </div>
                                    <div class="col-12 col-md-2 overflow-hidden d-flex justify-content-center"><img :src="locations[item.to].image" alt="location view" width="64" height="64"></div>
                                </div>
                            </div>
                            <hr>
                            <div class="row gx-0 container-lg mb-2">
                                <div class="col-12 col-lg-8 d-flex align-items-center justify-content-center responsive-font">
                                    <h5 class="mx-2 w">Starts at <span class="fs-6">(-<strong>15%</strong>)</span></h5>
                                    <h5 class="text-decoration-line-through me-2">&#8377;{{flights[item.departflight].fare*item.person + flights[item.arriveflight].fare*item.person + locations[item.to].hotels[item.hotel].fare*item.qty}}</h5>
                                    <h5 class="display-6"> = &#8377;{{Math.round((flights[item.departflight].fare*item.person + flights[item.arriveflight].fare*item.person + locations[item.to].hotels[item.hotel].fare*item.qty)*0.85)}}</h5>
                                </div>
                                <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                                    <div class="d-flex justify-content-center align-items-center rounded py-4 mx-1 container-fluid btn btn-outline-danger" @click="removeitem(index)">
                                        Remove
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row gx-0 d-flex flex-column">
                                <h5 class="fs-5 text-center">{{locations[item.from].location}} &#8594; {{locations[item.to].location}}</h5>
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
                                        <div class="col-12 col-lg-3 align-self-center"><img :src="flights[item.departflight].logo" width="30" height="30" alt="logo"></div>
                                        <div class="col-12 col-lg-9 d-flex flex-column px-0">
                                            <span class="w-100">{{flights[item.departflight].airline}}</span>
                                            <span class="w-100 d-none d-lg-inline">{{flights[item.departflight].flightno}}</span>
                                        </div>
                                    </div>
                                    <div class="col-3 d-flex flex-column text-center px-0">
                                        <span class="w-100"><strong>{{flights[item.departflight].departtime}}</strong></span>
                                        <span class="w-100 text-break">{{flights[item.departflight].departstn}}</span>
                                    </div>
                                    <div class="col-3 d-flex flex-column text-center px-0">
                                        <span class="w-100"><strong>{{flights[item.departflight].arrivetime}}</strong></span>
                                        <span class="2-100 text-break">{{flights[item.departflight].arrivestn}}</span>
                                    </div>
                                    <div class="col-2 d-flex text-center align-items-center px-0">
                                        <span class="w-100"><strong>&#8377;{{flights[item.departflight].fare*item.person}}</strong></span>
                                    </div>
                                    <div class="col-2 d-flex px-0 text-center align-items-center">
                                        <span class="w-100">{{flights[item.departflight].avail}}</span>
                                    </div>
                                </div>
                                <hr class="mx-2 w-auto">
                                <h5 class="fs-5 text-center">{{locations[item.to].location}} &#8594; {{locations[item.from].location}}</h5>
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
                                        <div class="col-12 col-lg-3 align-self-center"><img :src="flights[item.arriveflight].logo" width="30" height="30" alt="logo"></div>
                                        <div class="col-12 col-lg-9 d-flex flex-column px-0">
                                            <span class="w-100">{{flights[item.arriveflight].airline}}</span>
                                            <span class="w-100 d-none d-lg-inline">{{flights[item.arriveflight].flightno}}</span>
                                        </div>
                                    </div>
                                    <div class="col-3 d-flex flex-column text-center px-0">
                                        <span class="w-100"><strong>{{flights[item.arriveflight].departtime}}</strong></span>
                                        <span class="w-100 text-break">{{flights[item.arriveflight].departstn}}</span>
                                    </div>
                                    <div class="col-3 d-flex flex-column text-center px-0">
                                        <span class="w-100"><strong>{{flights[item.arriveflight].arrivetime}}</strong></span>
                                        <span class="2-100 text-break">{{flights[item.arriveflight].arrivestn}}</span>
                                    </div>
                                    <div class="col-2 d-flex text-center align-items-center px-0">
                                        <span class="w-100"><strong>&#8377;{{flights[item.arriveflight].fare*item.person}}</strong></span>
                                    </div>
                                    <div class="col-2 d-flex px-0 text-center align-items-center">
                                        <span class="w-100">{{flights[item.arriveflight].avail}}</span>
                                    </div>
                                </div>
                                <hr class="mx-2 w-auto">
                                <h4 class="display-5 text-center mt-1 mb-2">Stay</h4>
                                <hr class="mx-2 w-auto">
                                <div class="row container-lg p-2 rounded-3 my-1 gx-0">
                                    <div class="row gx-0 shadow-sm">
                                        <div class="col-12 col-lg-2 d-flex align-items-center p-2 justify-content-center"><img :src="locations[item.to].hotels[item.hotel].image" alt="hotel image" class="img-fluid"></div>
                                        <div class="col-12 col-lg-10 d-flex align-items-start pt-3 p-2 row gx-0">
                                            <h4 class="fw-bold h-auto col-12">{{locations[item.to].hotels[item.hotel].hotel}}</h4>
                                            <div class="col-12 col-lg-8 px-4">
                                                <h5 class="fw-bold">Location</h5>
                                                <p>{{locations[item.to].hotels[item.hotel].address}}</p>
                                                <div class="p-2 col-9 d-flex align-items-center">
                                                    <h5 class="mx-1">Day: </h5>
                                                    <span class="btn btn-outline-danger px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':(item.day<=1)}" @click="daydecrease(index)">-</span>
                                                    <span class="border border-secondary px-3 py-1 d-flex justify-content-center align-items-center mx-1"><strong>{{item.day}}</strong></span>
                                                    <span class="btn btn-outline-success px-3 d-flex justify-content-center align-items-center mx-1" :class="{'disabled':item.qty>=item.avail}" @click="dayincrease(index)">+</span>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
                                                <h5>Fare/night</h5>
                                                <h5 class="display-6">&#8377;{{locations[item.to].hotels[item.hotel].fare*item.qty}}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            checkoutItems: this.checkoutitems,
        }
    },
    methods:{
        removeitem(index){
            this.$emit('removeitem',index)
        },
        increaseqty(ind){
            this.$emit('increaseqty',ind)
        },
        reduceqty(ind){
            this.$emit('reduceqty',ind)
        },
        personincrease(ind){
            this.$emit('personincrease',ind)
        },
        persondecrease(ind){
            this.$emit('persondecrease',ind)
        },
        dayincrease(ind){
            this.$emit('dayincrease',ind)
        },
        daydecrease(ind){
            this.$emit('daydecrease',ind)
        },
        makeorder(){
            alert("Note: \nThis is a demo website, all operations are for demonstration purposes only.")
        },
    }
})