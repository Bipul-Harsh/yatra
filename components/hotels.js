app.component('hotel',{
    props:{
        locations:{
            type:Array,
            required:true
        }
    },
    template:
    /*html*/
    `
    <h3 class="text-center heading display-6 my-5">Book hotel of your choice</h3>
    <div class="container-lg mt-4">
        <div v-for="(location,locind) in locations" class="row container-lg p-2 rounded-3 shadow my-4 gx-0">
            <div class="row">
                <div class="col-3 col-md-1 "><img :src="location.image" alt="location view" width="64" height="64"></div>
                <div class="col-9 col-md-11 d-flex align-items-center"><h4 class="display-7 heading">{{location.location}}</h4></div>
            </div>
            <hr class="my-2">
            <div class="row gx-0 shadow-sm my-2" v-for="(hotel,hotelind) in location.hotels">
                <div class="col-12 col-lg-4 d-flex align-items-center p-2 justify-content-center"><img :src="hotel.image" alt="hotel image" class="img-fluid"></div>
                <div class="col-12 col-lg-8 d-flex align-items-start pt-3 p-2 row gx-0">
                    <h4 class="fw-bold h-auto col-12">{{hotel.hotel}}</h4>
                    <div class="col-12 col-lg-8 px-4">
                        <h5 class="fw-bold">Location</h5>
                        <p>{{hotel.address}}</p>
                        <h5 class="fw-bold">Facilities</h5>
                        <ul>
                            <li v-for="facility in hotel.facilities">{{facility}}</li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
                        <h5>Fare/night</h5>
                        <h5 class="display-6">&#8377;{{hotel.fare}}</h5>
                        <div class="d-flex justify-content-center align-items-center container-fluid rounded py-4" :class="[!hotel.booked?'a blue-button': 'gray-button']" @click="checkouthotel(locind,hotelind)">
                            Add to cart  <img v-if="hotel.booked" src="assets/images/green_check.svg" alt="booked" width="20" height="20">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        checkouthotel(locind,hotelind){
            this.$emit('checkouthotel',locind,hotelind);
        }
    }
})