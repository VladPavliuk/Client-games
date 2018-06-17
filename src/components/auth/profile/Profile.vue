<template>
    <div>
        <div class="media-object">
            <div class="media-object-section">
                <div class="thumbnail">
                    <img src= "assets/img/media-object/avatar-1.jpg">
                </div>
            </div>
            <div class="media-object-section main-section">
                Profile
                <button type="button"
                        class="button"
                        @click="logout">logout
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$server.user.logout()
                    .then(_ => this.$router.push({name: 'user-login'}));
            }
        }
    }
</script>
