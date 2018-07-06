<template>
    <div>
        <form novalidate class="login-form md-layout md-alignment-center-center" @submit.prevent="validateUser">
            <md-card>
                <md-card-header>
                    <div class="md-title">Registration form</div>
                    <div class="md-subhead">
                        <router-link :to="{ name: 'user-login' }">Already have an account?</router-link>
                    </div>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-size-100">
                            <md-field :class="getValidationClass('firstName')">
                                <label for="first-name">First name</label>
                                <md-input name="first-name"
                                          id="first-name"
                                          autocomplete="given-name"
                                          v-model="form.firstName" :disabled="sending"/>
                                <span class="md-error"
                                      v-if="!$v.form.firstName.required">The first name is required</span>
                                <span class="md-error"
                                      v-else-if="!$v.form.firstName.minLength">The first name has invalid min length</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-size-100">
                            <md-field :class="getValidationClass('lastName')">
                                <label for="last-name">Last name</label>
                                <md-input name="last-name"
                                          id="last-name"
                                          autocomplete="given-name"
                                          v-model="form.lastName" :disabled="sending"/>
                                <span class="md-error"
                                      v-if="!$v.form.lastName.required">The last name is required</span>
                                <span class="md-error"
                                      v-else-if="!$v.form.lastName.minLength">The last name has invalid min length</span>
                            </md-field>
                        </div>

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

                        <div class="md-layout-item md-size-100">
                            <md-field :class="getValidationClass('password')">
                                <label for="password">Password</label>
                                <md-input name="password"
                                          id="password"
                                          autocomplete="family-name"
                                          v-model="form.password" :disabled="sending"/>
                                <span class="md-error"
                                      v-if="!$v.form.password.minLength">The password has invalid length</span>
                                <span class="md-error"
                                      v-if="!$v.form.password.required">The password is required</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending"/>

                <md-card-actions>
                    <md-button type="submit" class="md-raised md-primary" :disabled="sending">Registration</md-button>
                </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved">The login was success!</md-snackbar>
        </form>

        <!--<div class="medium-12 cell">-->
            <!--<h4 class="text-center">Registration form</h4>-->
        <!--</div>-->
        <!--<div class="medium-12 cell">-->
            <!--<p class="text-center">-->
                <!--Already have an account?-->
                <!--<router-link :to="{ name: 'user-login' }">Click here</router-link>-->
            <!--</p>-->
        <!--</div>-->
        <!--<div class="medium-12 cell">-->
            <!--<label>First name-->
                <!--<input v-validate="'required'"-->
                       <!--v-model="firstName"-->
                       <!--name="firstName"-->
                       <!--type="text">-->
            <!--</label>-->
        <!--</div>-->
        <!--<div class="medium-12 cell">-->
            <!--<label>Last name-->
                <!--<input v-validate="'required'"-->
                       <!--v-model="lastName"-->
                       <!--name="lastName"-->
                       <!--type="text">-->
            <!--</label>-->
        <!--</div>-->
        <!--<div class="medium-12 cell">-->
            <!--<label>phone number-->
                <!--<input v-validate="'required'"-->
                       <!--v-model="phoneNumber"-->
                       <!--name="phoneNumber"-->
                       <!--type="text">-->
            <!--</label>-->
        <!--</div>-->
        <!--<div class="medium-12 cell">-->
            <!--<label>Email-->
                <!--<input v-validate="'required|email'"-->
                       <!--v-model="email"-->
                       <!--name="email"-->
                       <!--type="text">-->
            <!--</label>-->
        <!--</div>-->
        <!--<div class="medium-12 cell">-->
            <!--<label>Password-->
                <!--<input v-validate="'required'"-->
                       <!--v-model="password"-->
                       <!--name="password"-->
                       <!--type="password">-->
            <!--</label>-->
        <!--</div>-->
        <!--<button @click="submit"-->
                <!--type="button"-->
                <!--class="success button float-right">Registration-->
        <!--</button>-->
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {
        required,
        email,
        minLength
    } from 'vuelidate/lib/validators'

    export default {
        name: 'RegistrationForm',
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    firstName: this.getRandom(),
                    lastName: this.getRandom(),
                    phoneNumber: '123123',
                    email: this.getRandom() + '@gmail.com',
                    password: '123123'
                },
                userSaved: false,
                sending: false,
            }
        },
        validations: {
            form: {
                firstName: {
                    required,
                    minLength: 5
                },
                lastName: {
                    required,
                    minLength: 5
                },
                phoneNumber: {
                    required,
                    minLength: 5
                },
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
                this.form.email = null;
                this.form.phoneNumber = null;
                this.form.password = null;
            },
            getRandom(length = 7) {
                let i, alphabet = 'qwertyuiopasdfghjklzxcvbnm',
                    output = [];

                for (i = 0; i < length; i++) {
                    output[i] = alphabet[Math.floor(Math.random() * alphabet.length)];
                }

                return output.join('');
            },
            register() {
                this.sending = true;

                this.$server.user.registration({
                    firstName: this.form.firstName,
                    lastName: this.form.lastName,
                    phoneNumber: this.form.phoneNumber,
                    email: this.form.email,
                    password: this.form.password
                }).then(() => this.$router.push({name: 'user-login'}))
                    .catch(() => this.sending = false);
            },
            validateUser() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.register()
                }
            }
        }
    }
</script>