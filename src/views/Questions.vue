<template>

    <div>

    <hr>

    <header v-if="questions.length > 0"  class="section-header" style="margin-top: 100px">
        <small>Questions</small>
        <h2>{{questions[0].topic}}</h2>
        <hr>
        <p class="lead">{{questions[0].topic_desc}}</p>
    </header>

    <div v-if="questions.length === 0" class="m-auto mt-100">

        <h1 class="text-center display-3 mt-5">
            <i class="fa fa-spinner fa-spin"></i>
        </h1>

    </div>



    <div v-if="questions.length > 0"  class="container-fluid m-auto col-lg-6 col-lg-offset-6" style="margin: 150px auto; width: 100%" >


        <table v-for=" question, key in questions" class="table table-striped  table-responsive table-question main">

            <thead>
            <tr style="border: 1px solid #ebebeb;"><th class="text-left" width="20%"><strong>(#{{key+1}})</strong></th>
                <th class="text-left">
                    <strong class="" style="color: #563d7c">
                        {{question.title}}
                    </strong>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <!--<input type="hidden" [(ngModel)] ="questions_arr[question.id]" [value]="question.id">-->
                <td class="text-left">Options</td>
                <td class="text-left">
                    <div class="icheck">
                        <div v-for="option in question.question_options">
                            <label class="radio-inline">
                                <input type="radio" name="option.id" v-model = "answers[question.id]" :value="option.id">
                                {{ option.option }} <em v-if="option.isCorrect">Correct</em>
                            </label>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <br>

        <button class="btn btn-bold btn-block btn-primary col-3 col-lg-offset-3" @click="submit()"
                :disabled="btnDisabled"  type="submit">Submit!</button>
    </div>

    <br>

    </div>

</template>

<script>
    import Axios from 'axios'
    import router from '../router'

    export default {

        props: ['slug'],

        data(){

            return{

                questions: [],
                btnDisabled: false,
                answers: []

            }
        },

        mounted(){

            Axios.get(`http://127.0.0.1:8000/api/topic/${this.slug}/questions`).then(res => {

                console.log(res);
                this.questions = res.data;

            }).catch(err => {

                console.log(err);
            })

        },

        methods:{

            async submit(){


                this.btnDisabled = true;

                try {


                    const entries = Object.entries(this.answers);
                    const ans = {};
                    for (const [key, val] of entries) {
                        ans[`answers[${key}]`] = val;
                    }

                    console.log(ans);

                    Axios.post(`http://127.0.0.1:8000/api/topic/${this.slug}/test`, ans).then(res => {
                        //
                        const data = res.data[0];
                        console.log(data);
                        router.push({name: 'Result', params: {slug: data.topic_slug, test: data.id }});
                        //
                    }).catch(err => {
                        //
                        console.log(err);
                    });

                }catch (e) {

                    console.log(e);

                }

                this.btnDisabled = false


            }
        }
    }
</script>

<style scoped>

</style>