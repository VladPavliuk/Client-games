<template>
    <div>
        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Your account</div>
                    <div class="md-subhead">Normal size</div>
                </md-card-header-text>

                <md-card-media>
                    <img :src="serverURL + '/images/users/'" alt="People">
                    <input type="file"
                           ref="avatar-file-input"
                           @input="onAvatarInput">
                </md-card-media>
            </md-card-header>
            <md-card-content>

            </md-card-content>
            <md-card-actions>
                <md-button class="md-raised md-primary">Update</md-button>
                <md-button @click="logout" class="md-raised md-accent">Logout</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                serverURL: process.env.VUE_APP_LUCROR_GAMES_APP_SERVER_URL
            }
        },
        methods: {
            onAvatarInput(event) {
                let file = event.target.files[0];
                let formData = new FormData();
                formData.set('image', file);

                this.$server.user.uploadAvatar(formData);

                this.getBase64(file, fileBase64 => {
                    let formData = new FormData();
                    formData.set('image', fileBase64);
                    this.$server.user.uploadAvatar({image: fileBase64})
                });
            },
            logout() {
                this.$server.user.logout()
                    .then(_ => this.$router.push({name: 'user-login'}));
            },

            getBase64(file, callback) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    callback(reader.result);
                };
            }
        }
    }
</script>
