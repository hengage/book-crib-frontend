<template>
    <form >
        <label for="">Email</label>
        <input type="email" name="" >

        <label for="firstName">First name</label>
        <input type="text">

        <label for="lastName">Last name</label>
        <input type="text">

        <label for="password">Password</label>
        <input type="password" name="" >

        <button type="submit">{{ submitAction }}</button>
    </form>
</template>

<script>
    export default {
        props: {
            submitAction: {required: true}
        }
    }
</script>