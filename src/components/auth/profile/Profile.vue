<template>
    <div>
        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Your account</div>
                    <div class="md-subhead">Normal size</div>
                </md-card-header-text>

                <md-card-media>
                    <img :src="serverURL + '/'" alt="People">
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
                serverURL: this.$http.options.root
            }
        },
        methods: {
            onAvatarInput(event) {
                let file = event.target.files[0];
                let formData = new FormData();
                formData.set('image', file);

                this.$server.user.uploadAvatar(formData);
            },
            logout() {
                this.$server.user.logout()
                    .then(() => this.$router.push({name: 'user-login'}));
            }
        }
    }
</script>
