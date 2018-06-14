<template>
    <div>
        games
        <ul>
            <li v-for="game in games">{{ game.title }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$server.games.index();
        },
        computed: {
            games() {
                return this.$store.state.games;
            }
        }
    }
</script>