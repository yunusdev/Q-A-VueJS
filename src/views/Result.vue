<template>
    <div>
        <div v-if="Object.keys(result).length === 0" class="m-auto mt-70">

            <h1 class="text-center display-3 mt-5">
                <i class="fa fa-spinner fa-spin"></i>
            </h1>

        </div>

        <div class="container" v-if="Object.keys(result).length > 0">

            <header class="section-header" style="margin-top: 100px; margin-bottom: 20px">
                <small>Result</small>
                <h2>Test Score {{result.score}} / {{result.questions_count}}</h2>
                <h6 class="text-dark text-center">{{result.created_at}}</h6>

                <hr>
                <p class="lead">Topics - {{result.topic}}</p>
            </header>

            <table class="table table-bordered table-striped" v-for="answer, i in result.test_answers" >
                <tbody><tr class="test-option-true">
                    <th style="width: 10%">Question #{{i + 1}}</th>
                    <th>{{answer.question}}?</th>
                </tr>
                <tr>
                    <td>Options</td>
                    <td>
                        <ul>
                            <li class="list-group-item" v-for="option in answer.question_options">

                                <h5 class="text-dark mr-10" style="margin-top: -5px">

                                    <i v-if="answer.userAnsId == option.id && option.isCorrect == 1" class="fa fa-check" style="color: green"></i>
                                    <i v-if="answer.userAnsId == option.id && option.isCorrect !== 1" class="fa fa-close" style="color: red"></i>

                                    {{option.option}}
                                </h5>

                                <h6 v-if="answer.userAnsId == option.id" class="mr-10" style="font-weight: bolder">(Your answer)</h6>
                                <h6 v-if="option.isCorrect == 1"  style="font-weight: bolder">(Correct Answer)</h6>

                            </li>

                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Answer Explanation</td>
                    <td>
                        {{answer.answer_explanation}}
                        <br>
                        <br>
                        <!--<a href="https://laravel.com/docs/5.5/artisan#generating-commands" target="_blank">https://laravel.com/docs/5.5/artisan#generating-commands</a>-->
                    </td>
                </tr>
                </tbody></table>

        </div>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {

        props: ['slug', 'test'],

        data(){

            return {

                result: {},
            }
        },

        mounted(){

            Axios.get(`http://127.0.0.1:8000/api/topic/${this.slug}/result/${this.test}`).then(res => {

                console.log(res.data[0]);
                this.result = res.data[0];

            }).catch(err => {

                console.log(err);
            })
        }


    }
</script>

<style scoped>

</style>