<template>
    <h2>Author</h2>

    <div v-if="author">
        {{ author.first_name }} {{ author.last_name }}
        {{ author.email }}

        <router-link :to="{ name: 'updateauthor' }">
            Update author data
        </router-link>
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
        fetch('https://booksbackendapi.herokuapp.com/api/authors/' +
            this.$route.params.id)
            .then(res => res.json())
            .then(data => this.author = data)
            .catch(err => console.log(err.message))
    }
}
</script>

