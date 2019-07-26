<template>
    <div  class="mh-fullscreen bg-img center-vh p-20" style="background-image: url(assets/img/bg-girl.jpg); " data-aos-easing="ease" data-aos-duration="1500" data-aos-delay="0">

        <div class="card card-shadowed p-50 w-400 mb-0" style="max-width: 100%;margin-top: 100px">
            <h5 class="text-uppercase text-center" style="margin-bottom: -30px">Register</h5>

            <hr>
            <!--<app-message></app-message>-->


            <br>

            <div class="form-type-material">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" v-model = "user.name">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email address" v-model = "user.email">
                </div>

                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" v-model = "user.password">
                </div>

                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password (confirm)" v-model = "user.password_confirmation">
                </div>

                <div class="form-group">
                    <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">I agree to all <a class="text-primary" href="#">terms</a></span>
                    </label>
                </div>

                <br>
                <button class="btn btn-bold btn-block btn-primary" @click="register()" :disabled="btnDisabled" type="submit">Register</button>
            </div>

            <hr class="w-30">

            <p class="text-center text-muted fs-13 mt-20">Already have an account?
                <router-link to="/login">
                    <a href="page-login.html">Sign in</a>
                </router-link>
            </p>
        </div>

    </div>

</template>

<script>

    import Axios from 'axios'
    import router from '../router'

    class User{

        constructor(user){

            this.email = user.email || '',
            this.name = user.name || '',
            this.password = user.password || '',
            this.password_confirmation = user.password_confirmation || ''
        }
    }

    export default {
        name: "Register",

        data(){

            return{

                btnDisabled: false,
                user: new User({})
            }
        },

        methods: {

            register(){

                Axios.post('http://127.0.0.1:8000/api/register', this.user).then(res => {

                    const data = res.data;
                    localStorage.setItem('token', data['access_token']);
                    // router.push({name: 'Home'});

                    window.location('/');


                }).catch(err => {

                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>