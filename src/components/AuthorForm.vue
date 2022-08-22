<template>
    <form >
        <label for="">Email</label>
        <input type="email" name="" v-model="formData.email">

        <label for="firstName">First name</label>
        <input type="text" v-model="formData.first_name">

        <label for="lastName">Last name</label>
        <input type="text" v-model="formData.last_name">

        <label for="password">Password</label>
        <input type="password" name="" v-model="formData.password">

        <button type="submit">{{ submitAction }}</button>

    </form>
</template>

<script>
    export default {
        props: {
            submitAction: {required: true}
        },
         data() {
            return {
               formData: {
                    email: 'email',
                    first_name: '',
                    last_name: '',
                    password: ''
                }
            };
        },
    }
</script>