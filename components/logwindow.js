app.component("logwindow", {
    props: {
    },
    template:
    /*html*/
    `<div class="alert alert-info alert-dismissible fade show my-4" role="alert">
        <strong>Please Note:</strong> This is a Demo website Sign In option is not available.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <h4 class="text-center p-2 text-danger">Sign Up</h4>
    <form class="row g-3 needs-validation mt-2" @submit.prevent="onSubmit" novalidate>
        <div class="col-12 col-md-4">
        <label for="firstname" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstname" v-model="firstname" required>
        <div class="invalid-feedback">
            {{nameError}}
        </div>
        </div>
        <div class="col-12 col-md-4">
        <label for="lastname" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastname" v-model="lastname" required>
        <div class="invalid-feedback">
            {{nameError}}
        </div>
        </div>
        <div class="col-12 col-md-4">
        <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" required>
            <div class="invalid-feedback">
            {{usernameError}}
            </div>
        </div>
        <div class="col-12 col-md-6">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
        <div class="invalid-feedback">
            {{emailError}}
        </div>
        </div>
        <div class="col-12 col-md-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input type="tel" class="form-control" id="phone" v-model.number="phone" required>
        <div class="invalid-feedback">
            {{phoneError}}
        </div>
        </div>
        <div class="col-12 col-md-3">
        <label for="gender" class="form-label">Gender</label>
        <select id="gender" class="form-select" v-model="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="otehr">Other</option>
        </select>
        <div class="invalid-feedback">
            {{genderError}}
        </div>
        </div>
        <div class="col-12 col-md-6">
            <label for="password" class="form-label">Enter Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
            <div class="invalid-feedback">
                {{passwordError}}
            </div>
        </div>
        <div class="col-12 col-md-6">
            <label for="repassword" class="form-label">Re-Enter Password</label>
            <input type="password" class="form-control" id="repassword" v-model="repassword" required>
            <div class="invalid-feedback">
                {{passwordError}}
            </div>
        </div>
        <div class="col-12 col-12 mt-4">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
            {{termsError}}
            </div>
        </div>
        </div>
        <div class="col-12 col-12 mt-2">
        <button class="btn btn-primary" type="submit">Submit</button>
        </div>
    </form>`,
    data(){
        return {
            nameError: '',
            emailError: '',
            passwordError: '',
            termsError: '',
            genderError: '',
            phoneError: '',
            usernameError: '',
            firstname: '',
            lastname: '',
            gender: '',
            phone: null,
            password: '',
            email: '',
            username: '',
            repassword: ''
        }
    },
    methods: {
        onSubmit(){
            if(this.firstname=='' || this.lastname=='' || this.username=='' || this.gender=='' || this.phone==null || this.email=='' || this.password!=this.repassword){
                alert("Wrong Input")
                return
            }

            let authUser = {
                username: this.username,
                firstname: this.firstname,
                lastname: this.lastname,
                gender: this.gender,
                phone: this.phone,
                password: this.password,
                email: this.email,
                checkoutItems: []
            }
            this.$emit('userdata-submitted', authUser);
            this.$emit('handle-logwindow');
            this.firstname = '';
            this.lastname = '';
            this.username = '';
            this.phone = null;
            this.email = '';
            this.gender = '';
            this.password = '';
            this.repassword = ''
        }
    },
})