<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import io from 'socket.io-client';

    export default {
        data() {
            return {
                socket: io(process.env.VUE_APP_LUCROR_GAMES_SOCKETS_SERVER_URL)
            }
        },
        mounted() {
            this.socket.on('new message', (data) => {
                console.log(data);
            });
        },
    }
</script>

<!--<style lang="scss">-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--}-->
<!--#nav {-->
<!--padding: 30px;-->
<!--a {-->
<!--font-weight: bold;-->
<!--color: #2c3e50;-->
<!--&.router-link-exact-active {-->
<!--color: #42b983;-->
<!--}-->
<!--}-->
<!--}-->
<!--</style>-->
