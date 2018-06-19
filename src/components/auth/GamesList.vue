<template>
    <div>
        <h3 class="text-center">Games</h3>
        <ul v-if="games.length > 0">
            <li v-for="game in games"
                :key="game.id">
                {{ game.title }} -
                <router-link :to="{ name: 'play-game', params: { id: game.id } }">Play</router-link>
            </li>
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