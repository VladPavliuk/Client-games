<template>
    <div>
        <div class="medium-12 cell">
            <h4 class="text-center">Login form</h4>
        </div>
        <div class="medium-12 cell">
            <p class="text-center">
                Don't have an account?
                <router-link :to="{ name: 'user-registration' }">Click here</router-link>
            </p>
        </div>
        <div class="medium-12 cell">
            <label>Email
                <input v-validate="'required|email'"
                       v-model="email"
                       name="email"
                       type="text">
            </label>
        </div>

        <div class="medium-12 cell">
            <label>Password
                <input v-validate="'required'"
                       v-model="password"
                       name="password"
                       type="password">
            </label>
        </div>

        <div class="medium-12 cell">
            <button @click="submit"
                    type="button"
                    class="success float-right button">Login
            </button>
        </div>
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
                }).then(_ => this.$router.push({name: 'user-profile'}));
            }
        }
    }
</script>