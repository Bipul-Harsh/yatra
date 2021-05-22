app.component('cart',{
    props:{
        checkoutitems:{
            type:Array,
            required:true
        }
    },
    template:
    /*html*/
    `
    <h3 class="text-center h-auto">My Cart</h3>
    <div v-else-if="route=='cart'" class="container-lg vh-100">
        <div v-if="checkoutItems.length==0" class="d-flex flex-column align-items-center justify-content-center h-100 shadow">
            <h2>Your cart is Empty!</h2>
        </div>
        <div v-else></div>
    </div>
    `,
    data(){
        return{
            checkoutItems: this.checkoutitems,
        }
    }
})