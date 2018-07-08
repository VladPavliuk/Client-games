<template>
    <div>
        <div>
            <games-header></games-header>
        </div>
        <div v-if="game">
            <game-view :game-url="url"></game-view>
        </div>
    </div>
</template>


<script>
    import GamesHeader from '@/components/auth/games/_includes/TheGamesHeader'
    import GameView from '@/components/auth/games/GameView'
    import io from 'socket.io-client';

    export default {
        components: {
            GamesHeader,
            GameView
        },
        data() {
            return {
                socket: io(process.env.VUE_APP_LUCROR_GAMES_SOCKETS_SERVER_URL),
                gameId: this.$route.params.id
            }
        },
        computed: {
            token() {
                return this.$store.state.game['token'];
            },
            game() {
                return this.$store.state.game['game'];
            },
            url() {
                return this.game ? this.game.url + '?token=' + this.token : '';
            }
        },
        mounted() {
            this.$server.games.play(this.gameId)
                .then(() => {
                    this.socket.emit('subscribe', this.token);
                    this.socket.on('new message', data => {
                        this.$router.push({name: 'games-list'});
                        this.$flashMessage.show('Your score in `' + this.game.title + '` is ' + data.score);
                    });
                });
        }
    }
</script>