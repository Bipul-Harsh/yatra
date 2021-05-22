app.component('flight',{
    props:{
        flights:{
            type:Array,
            requied:true
        }
    },
    template:
    /*html*/
    `
    <h3 class="text-center heading my-5">Available Flights</h3>
    <div class="container-lg">
        <div class="row p-3 rounded-3">
            <div class="col-2 d-flex justify-content-center"><strong>Airline</strong></div>
            <div class="col-2 d-flex justify-content-center"><strong>Depart</strong></div>
            <div class="col-2 d-flex justify-content-center"><strong>Arrive</strong></div>
            <div class="col-2 d-flex justify-content-center"><strong>Price</strong></div>
            <div class="col-1 d-flex justify-content-center"><strong>Avial</strong></div>
            <div class="col-3 d-flex justify-content-center"><strong>Checkout</strong></div>
        </div>
        <div v-for="(flight,index) in flights" class="row tile-shadow p-3 my-4 rounded-3" :class="{'gray-tab' : flight.booked}">
            <div class="col-2 d-flex justify-content-center row gx-0">
                <div class="col-12 col-lg-3 align-self-center"><img :src="flight.logo" width="30" height="30" alt="logo"></div>
                <div class="col-12 col-lg-9 d-flex flex-column">
                    <span class="w-100">{{flight.airline}}</span>
                    <span class="w-100 d-none d-lg-inline">{{flight.flightno}}</span>
                </div>
            </div>
            <div class="col-2 d-flex flex-column text-center">
                <span class="w-100"><strong>{{flight.departtime}}</strong></span>
                <span class="w-100">{{flight.departstn}}</span>
            </div>
            <div class="col-2 d-flex flex-column text-center">
                <span class="w-100"><strong>{{flight.arrivetime}}</strong></span>
                <span class="2-100">{{flight.arrivestn}}</span>
            </div>
            <div class="col-2 d-flex text-center align-items-center">
                <span class="w-100"><strong>&#8377;{{flight.fare}}</strong></span>
            </div>
            <div class="col-1 d-flex px-0 text-center align-items-center">
                <span class="w-100"><strong>{{flight.avail}}</strong></span>
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center rounded" :class="[!flight.booked?'a blue-button': 'gray-button']" @click="checkoutflight(index)">
                Checkout&nbsp;&nbsp;<img v-if="flight.booked" src="/assets/images/green_check.svg" alt="booked" width="20" height="20">
            </div>
        </div>
    </div>
    `,
    methods:{
        checkoutflight(ind){
            this.$emit('checkoutflight',ind);
        }
    }
})