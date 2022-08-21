<template>
    <div class="">
        <AuthorForm submitAction='Create account'/>
    </div>
</template>

<script>
    // import AuthorFormVue from "@/components/AuthorForm.vue";
import AuthorForm from "@/components/AuthorForm.vue";

    export default {
        name: 'SignUpView',
        components: { AuthorForm }
    }
</script>

