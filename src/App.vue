<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->

      <nav class="topbar topbar-inverse topbar-expand-sm topbar-sticky main " style="background-color: white; ">
        <div class="container">

          <div class="topbar-left">
            <button class="topbar-toggler">☰</button>
            <span class="topbar-brand fs-18 fw-400">
            <router-link to="/">
                  <a class="logo-default" style="color: #563d7c">Quiz</a>
            </router-link>
            <router-link to="/">
              <a class="logo-inverse"  style="color: #563d7c">Quiz</a>
            </router-link>
          </span>
          </div>


          <div class="topbar-right">
            <ul class="topbar-nav nav" style="color: black">
                <li class="nav-item"><a class="nav-link"  href="#">Getting started</a></li>
                <li class="nav-item"><a class="nav-link" href="#">CSS</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My Quiz</a></li>
                <li v-if="!isToken" class="nav-item">
                    <router-link to="/login">
                        <a class="nav-link" >Login</a>
                    </router-link>
                </li>
                <li v-if="!isToken" class="nav-item">
                    <router-link to="/register">
                        <a class="nav-link">Register</a>
                    </router-link>
                </li>
              <li v-if="isToken" @click="logout()"  class="nav-item">
                <a class="nav-link" >Logout</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    <!--</div>-->
    <div class="mt-100">
      <router-view/>

    </div>

    <footer class="site-footer mt-50" style="">
      <div class="container">
        <div class="row gap-y align-items-center">
          <div class="col-12 col-lg-3">
            <p class="text-center text-lg-left">
              <a href="index.html"><img src="assets/img/logo.png" alt="logo"></a>
            </p>
          </div>

          <div class="col-12 col-lg-6">
            <ul class="nav nav-primary nav-hero">
              <li class="nav-item">
                <a class="nav-link" >Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="block-feature.html">User Quiz</a>
              </li>
              <li class="nav-item hidden-sm-down">
                <a class="nav-link" >Login</a>
              </li>
              <li class="nav-item hidden-sm-down">
                <a class="nav-link" >Register</a>
              </li>
              <li v-if="isToken" class="nav-item hidden-sm-down">
                <a class="nav-link"  @click="logout()"  >Logout</a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-lg-3">
            <div class="social text-center text-lg-right">
              <a class="social-facebook" href="https://www.facebook.com/thethemeio"><i class="fa fa-facebook"></i></a>
              <a class="social-twitter" href="https://twitter.com/thethemeio"><i class="fa fa-twitter"></i></a>
              <a class="social-instagram" href="https://www.instagram.com/thethemeio/"><i class="fa fa-instagram"></i></a>
              <a class="social-dribbble" href="https://dribbble.com/thethemeio"><i class="fa fa-dribbble"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>


<script>

  import router from './router'

  export default {

      data(){

          return{

              token: null

          }
      },

      mounted(){

          this.token = localStorage.getItem('token') ? localStorage.getItem('token') : null

      },

      computed: {

          isToken(){

              return this.token;

          }

      },

      methods: {

          logout(){

              localStorage.clear();
              router.push('/');
              location.reload();

          }

      }

  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.topbar.topbar-inverse .topbar-nav>.nav-item>.nav-link, .topbar.topbar-inverse .topbar-toggler, .topbar.topbar-inverse .drawer-toggler{
  color: grey;
}

.topbar>.container, .topbar>.container-wide, .topbar>.container-fluid{

  height: 40px;
}

.main{
//margin: 30px 50px 100px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
  border: 1px solid #ebebeb;

}

  nav{

    /*margin-bottom: 100px;*/
  }
</style>
