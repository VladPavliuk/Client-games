<template>
    <div>
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell small-6 small-offset-3">
                    <h4 class="text-center">Registration form</h4>
                </div>
                <div class="cell small-6 small-offset-3">
                    <div class="medium-12 cell">
                        <label>First name
                            <input v-validate="'required'"
                                   v-model="firstName"
                                   name="firstName"
                                   type="text">
                        </label>
                    </div>
                    <div class="medium-12 cell">
                        <label>Last name
                            <input v-validate="'required'"
                                   v-model="lastName"
                                   name="lastName"
                                   type="text">
                        </label>
                    </div>
                    <div class="medium-12 cell">
                        <label>phone number
                            <input v-validate="'required'"
                                   v-model="phoneNumber"
                                   name="phoneNumber"
                                   type="text">
                        </label>
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
                    <button @click="submit"
                            type="button"
                            class="success button">Registration</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: 'sfasd',
                lastName: 'sfasd',
                phoneNumber: '123123',
                email: 'asd@gmail.com',
                password: '123123'
            }
        },
        methods: {
            submit() {
                this.$server.user.registration({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    password: this.password
                }).then(_ => this.$router.push({ name: 'user-login' }));
            }
        }
    }
</script>