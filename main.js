const app = Vue.createApp({
    data(){
        return {
            authUser: [],
            currUser: 0,
            logwindowShow: false,
            route: 'landing',
            navItems: [
                {name: "Flights", alt:"flight icon", icon: "assets/images/flight.svg", route: "flight"},
                {name: "Hotels", alt:"hotel icon", icon: "assets/images/hotel.svg", route: "hotel"},
                {name: "Packages", alt:"packages icon", icon: "assets/images/package.svg", route: "package"}
            ],
            cart:[],
            flights:[
                {airline:'SpiceJet', logo:'assets/images/spicejet.png', flightno:'SG-8191/3233', departtime:'06:15', departstn:'New Delhi', arrivetime:'11:05', arrivestn:'Goa', fare:4008, date:'20-Jun-2021', avail:123,booked:false},
                {airline:'IndiGo', logo:'assets/images/indigo.png', flightno:'6E-2331/581', departtime:'07:10', departstn:'New Delhi', arrivetime:'13:55', arrivestn:'Goa', fare:4008, date:'20-Jun-2021', avail:24, booked:false},
                {airline:'Air Asia', logo:'assets/images/airasia.png', flightno:'I5-926/1322', departtime:'09:15', departstn:'New Delhi', arrivetime:'16:35', arrivestn:'Goa', fare:4008, date:'21-Jun-2021', avail:45, booked:false},
                {airline:'Go Air', logo:'assets/images/goair.png', flightno:'G8-368/353', departtime:'12:15', departstn:'Mumbai', arrivetime:'19:45', arrivestn:'New Delhi', fare:4435, date:'27-May-2021', avail:56, booked:false},
                {airline:'IndiGo', logo:'assets/images/indigo.png', flightno:'6T-2451/551', departtime:'09:10', departstn:'Chandigarh', arrivetime:'11:55', arrivestn:'New Delhi', fare:3002, date:'25-Jun-2021', avail:133, booked:false},
                {airline:'Air Asia', logo:'assets/images/airasia.png', flightno:'R5-326/5622', departtime:'13:15', departstn:'New Delhi', arrivetime:'15:35', arrivestn:'Mumbai', fare:5008, date:'12-May-2021', avail:165, booked:false},
                {airline:'Go Air', logo:'assets/images/goair.png', flightno:'H5-234/433', departtime:'11:15', departstn:'Mumbai', arrivetime:'17:45', arrivestn:'Chandigarh', fare:3556, date:'02-Jun-2021', avail:34, booked:false},
                {airline:'SpiceJet', logo:'assets/images/spicejet.png', flightno:'MK-U1T1/2945', departtime:'12:00', departstn:'New Delhi', arrivetime:'13:10', arrivestn:'Patna', fare:6000, date:'30-Jun-2021', avail:56, booked:false},
                {airline:'IndiGo', logo:'assets/images/indigo.png', flightno:'7Y-2367/581', departtime:'23:07', departstn:'Chandigarh', arrivetime:'00:55', arrivestn:'Agra', fare:2000, date:'14-May-2021', avail:56, booked:false},
                {airline:'Air Asia', logo:'assets/images/airasia.png', flightno:'R5-926/1722', departtime:'12:30', departstn:'Srinagar', arrivetime:'16:05', arrivestn:'Mumbai', fare:5302, date:'27-Jun-2021', avail:74, booked:false},
                {airline:'Go Air', logo:'assets/images/goair.png', flightno:'L8-999/003', departtime:'10:10', departstn:'Pune', arrivetime:'12:45', arrivestn:'New Delhi', fare:3515, date:'13-June-2021', avail:45, booked:false},
                {airline:'IndiGo', logo:'assets/images/indigo.png', flightno:'6P-2671/581', departtime:'09:00', departstn:'Coimbatore', arrivetime:'13:55', arrivestn:'Chandigarh', fare:2389, date:'28-Jun-2021', avail:33, booked:false},
                {airline:'IndiGo', logo:'assets/images/indigo.png', flightno:'9Y-2247/671', departtime:'10:00', departstn:'Chandigarh', arrivetime:'12:20', arrivestn:'Mumbai', fare:3456, date:'01-June-2021', avail:34, booked:false},
                {airline:'Go Air', logo:'assets/images/goair.png', flightno:'U7-368/903', departtime:'06:25', departstn:'Mumbai', arrivetime:'09:45', arrivestn:'Chandigarh', fare:2935, date:'27-May-2021', avail:66, booked:false},
                {airline:'Air Asia', logo:'assets/images/airasia.png', flightno:'K9-926/1412', departtime:'10:30', departstn:'New Delhi', arrivetime:'16:35', arrivestn:'Chandigarh', fare:2008, date:'30-Jun-2021', avail:25, booked:false},
                {airline:'SpiceJet', logo:'assets/images/spicejet.png', flightno:'UH-L1T2/2945', departtime:'12:00', departstn:'Mumbai', arrivetime:'13:20', arrivestn:'Goa', fare:2199, date:'12-Jun-2021', avail:23, booked:false},
                {airline:'IndiGo', logo:'assets/images/indigo.png', flightno:'7G-2567/9021', departtime:'06:00', departstn:'Goa', arrivetime:'07:35', arrivestn:'Mumbai', fare:3109, date:'25-May-2021', avail:14, booked:false},
            ],
            locations:[
                {location:'New Delhi',image:'assets/images/delhi.jpg',hotels:[
                    {hotel:'Holiday Inn',address:'Hospitality District Asset Area 12 Aerocity, New Delhi international Airport, New Delhi 110002 India',fare:2872,facilities:['Free WiFi','Free parking','Pool','Restaurant','Taking Safety Measures'],image:'assets/images/holiday-inn-new-delhi.jpg',booked:false,avail:204},
                    {hotel:'Roseate House New Delhi',address:'Roseate House New Delhi',fare:4596,facilities:['Free WiFi','Free parking','Taking Safety Measures'],image:'assets/images/roseate-house-exterior.jpg',booked:false,avail:312},
                    {hotel:'Radisson Blu Plaza Delhi Airport',address:'National Highway 8, New Delhi 110017 India',fare:2351,facilities:['Free WiFi','Free parking','Taking Safety Measures'],image:"assets/images/radisson.jpg",booked:false,avail:133}
                ]},
                {location:'Goa',image:'assets/images/goa.jpg',hotels:[
                    {hotel:'Holiday Inn Resort Goa',address:'Mobor Beach South Goa, Cavelossim 403731 India',fare:7669,facilities:['Free parking','Pool','Beach','Restaurant','Taking safety measure'],image:'assets/images/holiday-inn-goa.jpg',booked:false,avail:167},
                    {hotel:'Royal Orchid Beach Resort & Spa, Goa',address:'Uttorda Beach Salcette, Utorda 403713 India',fare:6271,facilities:['Free WiFi, Free Parking, Taking safety measures'],image:'assets/images/royal-orchid-beach-resort.jpg',booked:false,avail:145},
                    {hotel:'Sterling Goa- Varca',address:'605/D Pedda - Colva Rd Varca, Fatrade, Salcette, Varca 403721 India',fare:5645,facilities:['Free parking','Pool','Taking safety measures'],image:'assets/images/sterling-goa-varca.jpg',booked:false,avail:298}
                ]},
                {location:"Mumbai",image:'assets/images/mumbai.jpg',hotels:[
                    {hotel:'ITC Maratha, Mumbai - a Luxury Collection Hotel',address:'Sahar Airport Road, Near International Airport Andheri, Mumbai 400099 India',fare:4360,facilities:['Free parking','Pool','Taking safety measures'],image:'assets/images/itc-maratha-mumbai.jpg',booked:false,avail:376},
                    {hotel:'Goldfinch Mumbai',address:'21 Central Road MIDC, Andheri, Mumbai 400093 India',fare:3719,facilities:['Free parking','Restaurant','Taking safety measures'],image:'assets/images/goldfinch-mumbai.jpg',booked:false,avail:267}
                ]}
            ],
            packages:[
                {departflight:5,arriveflight:3,from:0,to:2,booked:false},
                {departflight:15,arriveflight:16,from:2,to:1,booked:false},
                {departflight:3,arriveflight:5,from:2,to:0,booked:false}
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
                alert("You are sucessfully logged out");
            }
        },
        changeRoute(route){
            this.route = route
        },
        checkoutflight(ind){
            let flight = this.flights[ind];
            flight['type'] = 'flight';
            flight['qty']=1;
            this.checkoutItems.push(flight);
            this.flights[ind].booked=true;
        },
        checkouthotel(locind,hotelind){
            var hotel = this.locations[locind].hotels[hotelind];
            hotel['location']=this.locations[locind].location;
            hotel['locimage']=this.locations[locind].image;
            hotel['type']='hotel';
            hotel['person']=1;
            hotel['day']=1;
            hotel['qty']=1;
            this.checkoutItems.push(hotel);
            this.locations[locind].hotels[hotelind].booked=true;
        },
        checkoutpackage(ind, hotelsind){
            var pkg = this.packages[ind];
            pkg['type']='package';
            pkg['fare']=Math.round((this.flights[pkg.departflight].fare + this.flights[pkg.arriveflight].fare + this.locations[pkg.to].hotels[0].fare)*0.85);
            pkg['booked']=true;
            pkg['person']=1;
            pkg['day']=1;
            pkg['qty']=1;
            pkg['hotel']=0;
            this.checkoutItems.push(pkg);
        },
        removeitem(index){
            this.checkoutItems[index].booked = false;
            this.checkoutItems.splice(index,1);
        },
        increaseqty(ind){
            this.checkoutItems[ind].qty+=1;
        },
        reduceqty(ind){
            this.checkoutItems[ind].qty-=1;
        },
        personincrease(ind){
            this.checkoutItems[ind].person+=1;
            this.checkoutItems[ind].qty=this.checkoutItems[ind].person*this.checkoutItems[ind].day;
        },
        persondecrease(ind){
            this.checkoutItems[ind].person-=1;
            this.checkoutItems[ind].qty=this.checkoutItems[ind].person*this.checkoutItems[ind].day;
        },
        dayincrease(ind){
            this.checkoutItems[ind].day+=1;
            this.checkoutItems[ind].qty=this.checkoutItems[ind].person*this.checkoutItems[ind].day;
        },
        daydecrease(ind){
            this.checkoutItems[ind].day-=1;
            this.checkoutItems[ind].qty=this.checkoutItems[ind].person*this.checkoutItems[ind].day;
        },
        makeorder(){
            alert("Note: \nThis is a demo website, all operations are for demonstration purposes only.")
        },
        
    },
    computed: {
        checkoutItems(){
            if(this.currUser.length > 0)
                return this.authUser[this.currUser].checkoutItems
            else
                return this.cart
        },
        grandtotal(){
            var totalamount = 0;
            for(var i=0; i<this.cart.length; i++){
                totalamount += this.cart[i].fare*this.cart[i].qty;
            }
            return totalamount;
        }
    }
})