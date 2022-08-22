<template>
    <div class="list-container">
        <h3>We have these amazing books for you</h3>
        <ul class="book-list">
            <li v-for="book in bookList " :key="book.id">
                <router-link :to="{ name: 'singlebook', params: { id: book.id } }">
                    <div class="list">
                        {{ book.title.toUpperCase() }}
                    </div>
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

<style>
.book-list .list {
    font-size: 1.2em;
}

.book-list .list:hover {
    font-size: 1.3em;
}
</style>