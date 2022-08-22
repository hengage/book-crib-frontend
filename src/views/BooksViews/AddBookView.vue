<template>
    <div>
        <h2>Add Your Book</h2>

        <form @submit.prevent="handleSubmit">
            <label for="title">title</label>
            <input type="text" v-model="formData.title">

            <label for="isbn">isbn</label>
            <input type="text" name="isbn" v-model="formData.isbn">

            <label for="author">Author</label>
            <input type="number" name="author" v-model="formData.author">

            <button type="submit">Save</button>
        </form>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddBookView',
    data() {
        return {
            formData: {
                title: '',
                isbn: '',
                author: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            axios.post('https://booksbackendapi.herokuapp.com/api/books/', 
            this.formData, {})
                .then(response =>{
                    console.log(response)
                    this.$router.push({name:'home'})
                })
                .catch(err => {
                    console.log(err)
                });

            (console.log('Added book', this.formData))

        }
    }

}
</script>
<style lang="">
    
</style>