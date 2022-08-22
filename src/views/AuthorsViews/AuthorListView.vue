<template>
    <div class="list-container">
        <h2>Authors</h2>
        <ul>
            <li v-for="author in authors" :key="author.id">
                <router-link :to="{ name: 'singleauthor', params: { id: author.id } }">
                    <div class="list">
                        {{ author.first_name }} {{ author.last_name }}
                    </div>
                </router-link>

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
        fetch('https://booksbackendapi.herokuapp.com/api/authors/')
            // fetch('http://127.0.0.1:8000/api/authors/')
            .then(res => res.json())
            .then(data => this.authors = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>
ul .list {
    border: 1px solid grey;
    border-radius: 12px;
    margin-bottom: 2em;
    padding: 1.2em;
}

a .list {
    font-size: 1.4em;
    background-color: black;
    color: white;
    width: 80%;
}

a .list:hover {
    font-size: 1.5em;
}

@media screen and (min-width:800px) {
    .list-container {
        display: flex;
        /* width:: */
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .list {
        
        width: 80%;
    }

    ul {
        /* text-align: center; */
        /* background-color: aqua; */
        width: 50%;
    }
}
</style>