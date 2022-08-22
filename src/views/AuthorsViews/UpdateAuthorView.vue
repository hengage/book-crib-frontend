<template>
    <h2>Update Author</h2>
    <div class="" v-if="author">
        <h3>
           {{author.data.email}}
        </h3>

        <form @submit.prevent="handleSubmit">
            <label for="">Email</label>
            <input type="email" name=""  v-model="formData.email" >

            <label for="firstName">First name</label>
            <input type="text" v-model="formData.first_name">

            <label for="lastName">Last name</label>
            <input type="text" v-model="formData.last_name">

            <label for="password">Password</label>
            <input type="password" name="" v-model="formData.password">

            <button type="submit">Update</button>

        </form>
        </div>

    <div v-else>
        <h3>Fetching data...</h3>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SignUpView',
        // components: { AuthorForm },
        data() {
            return {
                author: '',
                formData: {
                    email: '',
                    first_name: '',
                    last_name: '',
                    password: ''
                },
                 
               
            }
        },
        methods: {
            handleSubmit() {
                 axios.put(
                    'https://booksbackendapi.herokuapp.com/api/authors'+ this.$route.params.id + '/',  
                    this.formData, {
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
            axios.get('https://booksbackendapi.herokuapp.com/api/authors/'+ this.$route.params.id, )
                .then(data => this.author = data)
                .catch(err => console.log(err.message))

            setTimeout(() => {
                // this.formData.email = this.author.data.email,
                this.formData = this.author.data
            }, 1000)

            }
            //
        
    }

</script>

