<template>
    <div>
        <form novalidate class="login-form md-layout md-alignment-center-center" @submit.prevent="validateUser">
            <md-card>
                <md-card-header>
                    <div class="md-title">Login form</div>
                    <div class="md-subhead">
                        <router-link :to="{ name: 'user-registration' }">Don't have an account yet?</router-link>
                    </div>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-size-100">
                            <md-field :class="getValidationClass('email')">
                                <label for="email">Email</label>
                                <md-input name="email"
                                          id="email"
                                          autocomplete="given-name"
                                          v-model="form.email" :disabled="sending"/>
                                <span class="md-error"
                                      v-if="!$v.form.email.required">The email is required</span>
                                <span class="md-error"
                                      v-else-if="!$v.form.email.email">The email has invalid format</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-size-100">
                            <md-field :class="getValidationClass('password')">
                                <label for="password">Password</label>
                                <md-input name="password"
                                          id="password"
                                          autocomplete="family-name"
                                          v-model="form.password" :disabled="sending"/>
                                <span class="md-error"
                                      v-if="!$v.form.password.required">The password is required</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending"/>

                <md-card-actions>
                    <md-button type="submit" class="md-raised md-primary" :disabled="sending">Login</md-button>
                </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved">The login was success!</md-snackbar>
        </form>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {
        required,
        email
    } from 'vuelidate/lib/validators'

    export default {
        name: 'LoginForm',
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    email: 'asd@gmail.com',
                    password: '123123',
                },
                userSaved: false,
                sending: false,
                lastUser: null
            }
        },
        validations: {
            form: {
                password: {
                    required
                },
                email: {
                    required,
                    email
                }
            }
        },
        methods: {
            getValidationClass(fieldName) {
                const field = this.$v.form[fieldName];

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            clearForm() {
                this.$v.$reset();
                this.form.firstName = null;
                this.form.lastName = null;
                this.form.age = null;
                this.form.gender = null;
                this.form.email = null;
            },
            saveUser() {
                this.sending = true;

                this.$server.user.login({
                    email: this.form.email,
                    password: this.form.password
                }).then(() => {
                    this.userSaved = true;
                    this.sending = false;
                    this.clearForm();
                    this.$router.push({name: 'user-profile'});
                }).catch(() => this.sending = false);
            },
            validateUser() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.saveUser()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-form {
        margin-top: 70px;
    }
</style>