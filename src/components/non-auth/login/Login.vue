<template>
    <div>
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell small-6 small-offset-3">
                    <h4 class="text-center">Login form</h4>
                </div>
                <div class="cell small-6 small-offset-3">
                    <label>Email
                        <input v-validate="'required|email'"
                               v-model="email"
                               name="email"
                               type="text">
                    </label>
                </div>
                <div class="cell small-6 small-offset-3">
                    <label>Password
                        <input v-validate="'required'"
                               v-model="password"
                               name="password"
                               type="password">
                    </label>
                </div>
            </div>
            <div class="cell small-6 small-offset-3">
                <button @click="submit"
                        type="button"
                        class="success button">Login</button>
            </div>
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
                }).then(_ => this.$router.push({ name: 'user-profile' }));
            }
        }
    }
</script>