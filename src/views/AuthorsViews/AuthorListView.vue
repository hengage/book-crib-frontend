<template>
    <div class="">
        <h2>Authors</h2>
        <ul>
             <li v-for="author in authors" :key="author.id">
                <p>{{ author.first_name}} {{ author.last_name }}</p>
                <p>{{ author.book}}</p>

            </li>
        </ul>
       

    </div>
</template>

<script>
    export default {
        name: 'AuthorListView',
        data() {
            return {
                authors: []
            }
        },
        mounted() {
            fetch('http://127.0.0.1:8000/api/authors/')
            .then(res => res.json())
            .then(data => this.authors = data)
            .catch(err => console.log(err.message))
        }
    }
</script>