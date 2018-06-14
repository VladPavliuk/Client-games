<template>
    <div>
        <div class="medium-12 cell">
            <h4 class="text-center">Registration form</h4>
        </div>
        <div class="medium-12 cell">
            <p class="text-center">
                Already have an account?
                <router-link :to="{ name: 'user-login' }">Click here</router-link>
            </p>
        </div>
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
                class="success button float-right">Registration
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: this.getRandom(),
                lastName: this.getRandom(),
                phoneNumber: '123123',
                email: this.getRandom() + '@gmail.com',
                password: '123123'
            }
        },
        methods: {
            getRandom(length = 7) {
                let i, alphabet = 'qwertyuiopasdfghjklzxcvbnm',
                    output = [];

                for (i = 0; i < length; i++) {
                    output[i] = alphabet[Math.floor(Math.random() * alphabet.length)];
                }

                return output.join('');
            },
            submit() {
                this.$server.user.registration({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    password: this.password
                }).then(_ => this.$router.push({name: 'user-login'}));
            }
        }
    }
</script>