<template>
    <div  class="mh-fullscreen bg-img center-vh p-20" style="background-image: url(assets/img/bg-girl.jpg); " data-aos-easing="ease" data-aos-duration="1500" data-aos-delay="0">


        <div class="card card-shadowed p-50 w-400 mb-0" style="max-width: 100%;margin-top: 100px">
            <h5 class="text-uppercase text-center" style="margin-bottom: -30px">Login</h5>

            <hr>
            <!--<app-message></app-message>-->
            <br>

            <div class="form-type-material">

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email address" v-model = "user.email">
                </div>

                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" v-model = "user.password">
                </div>

                <br>
                <button class="btn btn-bold btn-block btn-primary" @click="login()" :disabled="btnDisabled" type="submit">Login</button>
            </div>

            <hr class="w-30">

            <p class="text-center text-muted fs-13 mt-20">Already have an account?
                <router-link to="/register">
                    <a >Register</a>
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
            this.password = user.password || ''
        }
    }
    export default {
        name: "Login",
        data(){

            return{

                btnDisabled: false,
                user: new User({})
            }
        },

        methods: {


            login(){

                Axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'myspecialpassword',
                    'Access-Control-Allow-Origin': '*',
                }

                Axios.post('http://127.0.0.1:8000/api/login', this.user).then(res => {

                   const data = res.data[0];
                   console.log(data);
                   localStorage.setItem('token', data['access_token']);
                   router.push({name: 'Home'});

                    location.reload();


                }).catch(err => {

                    console.log(err);
                })

            }
        }
    }
</script>

<style scoped>

</style>