<template>
    <div v-if="book">
        <h2>Title: {{ book.title.toUpperCase()}}</h2>
        <h2>Author: {{ book.author}}</h2>
        <h2>ISBN: {{ book.isbn}}</h2>
    </div>
    <div v-else>
        <h3>Fetching data...</h3>
    </div>
</template>

<script>
    export default {
        name: 'SingleBookView',
        data() {
            return {
                book: null
            
            }
        },
        mounted() {
            fetch('https://booksbackendapi.herokuapp.com/api/books/' + this.$route.params.id)
            .then(res => res.json())
            .then(data => this.book = data)
            .catch(err => console.log(err.message))
        }
    }
</script>

