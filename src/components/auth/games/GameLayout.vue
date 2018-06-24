<template>
    <div>
        <div>
            <games-header></games-header>
        </div>
        <div v-if="game">
            <game-view :game-url="game.url"></game-view>
        </div>
    </div>
</template>


<script>
    import GamesHeader from '@/components/auth/games/_includes/TheGamesHeader'
    import GameView from '@/components/auth/games/GameView'

    export default {
        components: {
            GamesHeader,
            GameView
        },
        data() {
            return {
                gameId: this.$route.params.id
            }
        },
        computed: {
            game() {
                return this.$store.state.game['game'];
            }
        },
        mounted() {
            this.$server.games.play(this.gameId);
        }
    }
</script>