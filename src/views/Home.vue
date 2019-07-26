<template>
  <div class="container">

    <div class="text-center mb-70 mt-40">
      <h2>Topics</h2>
      <p>Choose from any of this topic and take a test</p>
    </div>

    <div v-if="topics.length === 0" class="m-auto">

      <h1 class="text-center display-3 mt-5">
        <i class="fa fa-spinner fa-spin"></i>
      </h1>

    </div>

    <div class="row gap-y" v-if="topics.length > 0">

      <div class="col-12 col-lg-4" v-for="topic in topics" >
        <div class="card card-bordered text-center">
          <div class="card-block">
            <p><i class="icon-layers fs-50 text-muted"></i></p>
            <h4 class="card-title">{{topic.title}}</h4>
            <p class="card-text"  style="height: 180px">{{topic.description}}</p>
             <router-link :to="{name: 'Questions', params: { slug: topic.slug }}">
               <a class="fw-600 fs-12"  >Take Test <i class="fa fa-chevron-right fs-9 pl-5"></i></a>
             </router-link>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from 'axios'

export default {
  name: 'home',
  data(){

      return{

          topics: []

      }

  },

  mounted(){

      Axios.defaults.headers = {
          'Content-Type': 'application/json',
          // 'Authorization': 'myspecialpassword',
          'Access-Control-Allow-Origin': '*',
      }

      Axios.get('http://127.0.0.1:8000/api/topic').then(res => {

          console.log(res);
          this.topics = res.data;

      }).catch(err => {

          console.log(err);
      })
  }

}
</script>
