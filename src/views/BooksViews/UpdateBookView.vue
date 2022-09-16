<template>
    <h2>Update Book</h2>
    <div class="" v-if="book">

        <div class="form-container">
            <form @submit.prevent="handleSubmit" class="book-form">
                <div class="container">
                    <label for="title">Title</label>
                    <input type="text" v-model="formData.title">
                </div>

                <div class="container">
                    <label for="isbn">ISBN</label>
                    <input type="text" name="isbn" v-model="formData.isbn">
                </div>

                <div class="container">

                    <label for="author">Author</label>
                    <input type="number" name="author" v-model="formData.author">
                </div>

                <button type="submit">Save</button>
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
    name: 'UpdateBookView',
    data() {
        return {
            book: '',
            formData: {
                title: '',
                isbn: '',
                author: '',
            },


        }
    },
    methods: {
        handleSubmit() {
            axios.put(
                'https://booksbackendapi.herokuapp.com/api/books/' +
                this.$route.params.id + '/',
                this.formData, {
            })
                .then(response => {
                    console.log('RESPONSE:', response);
                    this.$router.push({ name: 'singlebook' })
                })
                .catch(err => {
                    console.log(err)
                });

            console.log('FORMDATA:', this.formData)
        },
        
    },
    mounted() {
        axios.get(
            'https://booksbackendapi.herokuapp.com/api/books/' +
            this.$route.params.id
            )
            .then(data =>{
                this.book = data
                this.formData = this.book.data
            } )
            .catch(err => console.log(err.message))
    }
}

</script>

