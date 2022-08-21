<template>
    <div>
        <h3>We have these amazing books for you</h3> 
        <ul>
            <li v-for="book in bookList " :key="book.id">
                <router-link :to="{name:'singlebook', params: {id: book.id}}">
                    <h3>{{ book.title.toUpperCase() }}</h3>
                </router-link>
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
            fetch('https://booksbackendapi.herokuapp.com/api/books/')
            .then(res => res.json())
            .then(data => this.bookList = data)
            .catch(err => console.log(err.message))
        }
    }
</script>

