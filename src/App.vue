<template>
    <div id="app">
        <router-view/>
        <flash-message></flash-message>
    </div>
</template>

<script>
    import FlashMessage from '@/components/_includes/FlashMessage'

    export default {
        components: {
            FlashMessage
        }
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
