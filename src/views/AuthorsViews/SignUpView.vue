<template>
    <div class="form-container">
        <h2>Create An Account</h2>

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

            <button type="submit">Register </button>
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
            axios.post('https://booksbackendapi.herokuapp.com/api/authors/',
                this.formData, {})
                .then(response => {
                    console.log(response)
                    this.$router.push({ name: 'home' })
                })
                .then()
                .catch(err => {
                    console.log(err);
                });

            console.log(this.formData)
        }
    },
    mounted() {

    }
}

</script>

