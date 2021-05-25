app.component('landingpage', {
    template:
    /*html*/
    `<section class="container-lg" id="intro">
        <a href="#" class="row w-100 h-100 nav-link" id="card-frame" @click="handlelogwindow()">
            <div class="col-lg-4 col-12" id="animation-container">
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_WAMQ5G.json"  background="transparent" speed="1" loop  autoplay></lottie-player>
            </div>
            <div class="col-12 col-lg-8 text-center vw-90" id="card-text">
                <p>Make your trip plan easy, effortless and convenient<br>with our most secure and rewarding interface</p>
                <h1 class="display-6 d-inline">Yatra</h1>
                <p id="card-final">SignUp and explore with us</p>
            </div>
        </a>
    </section>
    <section class="container-lg" id="flight">
        <a href="#" class="row w-100 h-100 nav-link" id="card-frame" @click="changeRoute('flight')">
            <div class="col-lg-4 col-12" id="animation-container">
                <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_ZL8df8.json" mode="bounce" background="transparent" speed="1" loop  autoplay></lottie-player>
            </div>
            <div class="col-12 col-lg-8 text-center vw-90" id="card-text">
                <p>Get upto 30%&nbsp;off on international&nbsp;flights, make the best and cheapest air travel with us.</p>
                <p id="card-final">Checkout flights we offer</p>
            </div>
        </a>
    </section>
    <section class="container-lg" id="hotel">
        <a href="#" class="row w-100 h-100 nav-link" id="card-frame" @click="changeRoute('hotel')">
            <div class="col-lg-4 col-12" id="animation-container">
                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_fxvz0c.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <div class="col-12 col-lg-8 text-center vw-90" id="card-text">
                <p>Our connections with more than <b>5000+</b> hotels around the globe ensure you providing every possible choice and help small business to grow.</p>
                <p id="card-final">Search what best fit your need</p>
            </div>
        </a>
    </section>
    <section class="container-lg" id="package">
        <a href="#" class="row w-100 h-100 nav-link" id="card-frame" @click="changeRoute('package')">
            <div class="col-lg-4 col-12" id="animation-container">
                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_Jos3jH.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <div class="col-12 col-lg-8 text-center vw-90" id="card-text">
                <p>Getting tired planning where to go, see our packages for different destinations you would like to go.</p>
                <p id="card-final">See your desitnations</p>
            </div>
        </a>
    </section>`,
    data(){
        return{

        }
    },
    methods: {
        handlelogwindow(){
            return this.$emit('handlelogwindow')
        },
        changeRoute(route){
            this.$emit('changeroute', route)
        }
    }
})