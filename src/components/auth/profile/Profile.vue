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
    import io from 'socket.io-client';

    export default {
        data() {
            return {
                socket : io('https://games-sockets-server.herokuapp.com')
            }
        },
        mounted() {
            this.socket.on('new message', (data) => {
                console.log(data);
            });
        },
        methods: {
            logout() {
                this.$server.user.logout()
                    .then(_ => this.$router.push({name: 'user-login'}));
            }
        }
    }
</script>
