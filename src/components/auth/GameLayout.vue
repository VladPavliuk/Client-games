<template>
    <div v-if="game">
        <game-view :game-url="game.url"></game-view>
    </div>
</template>


<script>
    import HeaderLayout from '@/components/_includes/TheHeader'
    import GameView from '@/components/auth/GameView'

    export default {
        components: {
            HeaderLayout,
            GameView
        },
        data() {
            return {
                gameId: this.$route.params.id
            }
        },
        computed: {
            game() {
                return this.$store.state.game;
            }
        },
        mounted() {
            this.$server.games.show(this.gameId);
        }
    }
</script>