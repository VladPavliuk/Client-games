<template>
    <div>
        <input v-validate="'required|email'"
               v-model="email"
               name="email"
               type="text">
        <span>{{ errors.first('email') }}</span>
        <input v-validate="'required'"
               v-model="password"
               name="password"
               type="password">
        <span>{{ errors.first('password') }}</span>
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: 'asd@gmail.com',
                password: '123123'
            }
        },
        methods: {
            submit() {
                this.$server.user.login({
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
</script>