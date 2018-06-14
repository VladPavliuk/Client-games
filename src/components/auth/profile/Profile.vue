<template>
    <div>
        Profile
        <button type="button"
                class="button"
                @click="logout">logout
        </button>
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
