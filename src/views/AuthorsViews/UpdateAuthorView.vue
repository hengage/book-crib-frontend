<template>
    <h2>Update Author</h2>
    <div class="" v-if="author">

        <div class="form-container">
            <form class="author-form" @submit.prevent="handleSubmit">
                <div class="container">
                    <label for="">Email</label>
                    <input type="email" name="" v-model="formData.email">
                </div>

                <div class="container">
                    <label for="firstName">First name</label>
                    <input type="text" v-model="formData.first_name">
                </div>

                <div class="container">
                    <label for="lastName">Last name</label>
                    <input type="text" v-model="formData.last_name">
                </div>

                <div class="container">
                    <label for="password">Password</label>
                    <input type="password" name="" v-model="formData.password">
                </div>

                <button type="submit">Update </button>
            </form>
        </div>
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
                'https://booksbackendapi.herokuapp.com/api/authors/' +
                this.$route.params.id + '/',
                this.formData, {
            })
                .then(response => console.log(response))
                .catch(err => console.log(err));

            console.log(this.formData)
        }
    },
    mounted() {
        axios.get('https://booksbackendapi.herokuapp.com/api/authors/' + this.$route.params.id,)
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

