<template>
    <h2>Author</h2>

    <div v-if="author">
        {{ author.first_name }} {{ author.last_name }}
    </div>
    <div v-else>
        <h3>Fetching data...</h3>
    </div>
</template>

<script>
    export default {
        name: 'SingleAuthorView',
        data() {
            return {
                author: null
            }
        },
        mounted() {
            fetch('https://booksbackendapi.herokuapp.com/api/authors/' + this.$route.params.id)
            // fetch('http://127.0.0.1:8000/api/authors/' + this.$route.params.id)
            .then(res => res.json())
            .then(data => this.author = data)
            .catch(err => console.log(err.message))
        }
    }
</script>

