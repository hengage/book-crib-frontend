<template>
    <div class="add-book">
        <h2>Add Your Book</h2>

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
                .then(response => {
                    console.log(response)
                    this.$router.push({ name: 'home' })
                })
                .catch(err => {
                    console.log(err)
                });

            (console.log('Added book', this.formData))

        }
    }

}
</script>
<style >
    .add-book {
        margin-bottom: 3em;
    }
    .book-form .container {
        margin: 1em 1em 2.5em 1em;
    }

    .book-form label {
        display: block;
        margin-bottom: 0.5em;
    }
    
    .book-form input{
        width: 90%;
        padding: 12px;
        border: none;
        border-radius: 0.5em;
    }

    .book-form button {
        /* display: block; */
        background-color: green;
        color: white;
        font-size: 1.6em;
        border-radius: 0.4em;
        margin-top: 1em;
        padding: 0.44em 1.0em;
      }

</style>