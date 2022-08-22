<template>
    <div class="">
        <form @submit.prevent="handleSubmit">
            <label for="">Email</label>
            <input type="email" name="" v-model="formData.email">

            <label for="firstName">First name</label>
            <input type="text" v-model="formData.first_name">

            <label for="lastName">Last name</label>
            <input type="text" v-model="formData.last_name">

            <label for="password">Password</label>
            <input type="password" name="" v-model="formData.password">

            <button type="submit">Create account</button>

           
        </form>
        </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SignUpView',
        // components: { AuthorForm },
        data() {
            return {
                formData: {
                    email: '',
                    first_name: '',
                    last_name: '',
                    password: ''
                }
               
            }
        },
        methods: {
            handleSubmit() {
                 axios.post('http://127.0.0.1:8000/api/authors/', this.formData, {
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
            .catch((error) => console.log( error.response.request._response ) );
                console.log('form submitted')
                console.log(
                    this.formData
                )
            }
        },
        mounted() {
           
        }
    }

</script>

