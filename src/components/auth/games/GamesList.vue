<template>
    <div>
        <h3 class="text-center">Games</h3>
        <md-list v-if="games.length > 0">
            <md-list-item v-for="game in games"
                          :key="game.id">
                <span class="md-list-item-text">{{ game.title }}</span>
                <router-link :to="{ name: 'play-game', params: { id: game.id } }">Play</router-link>
            </md-list-item>
        </md-list>
        <md-list v-else>
            <md-list-item>
                <span class="md-list-item-text">No games</span>
            </md-list-item>
        </md-list>

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