<template>
    <div>
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="medium-6 cell">
                    <label>Email
                        <input v-validate="'required|email'"
                               v-model="email"
                               name="email"
                               type="text">
                    </label>
                </div>
                <div class="medium-6 cell">
                    <label>Password
                        <input v-validate="'required'"
                               v-model="password"
                               name="password"
                               type="password">
                    </label>
                </div>
            </div>
            <button @click="submit"
                    type="button"
                    class="success button">Submit</button>
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