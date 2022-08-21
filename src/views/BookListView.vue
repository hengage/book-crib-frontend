<template>
    <div>
        <h3>We have these amazing books for you</h3> 
        <ul>
            <li v-for="book in bookList " :key="book.id">
                <h3>{{ book.title }}</h3>
                <p>{{ book.author }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'BookListView',
        data() {
            return {
                bookList: []
            
            }
        },
        mounted() {
            // fetch('http://127.0.0.1:8000/api/books/')
            fetch('https://booksbackendapi.herokuapp.com/api/books/')
            .then(res => res.json())
            .then(data => this.bookList = data)
            .catch(err => console.log(err.message))
        }
    }
</script>

