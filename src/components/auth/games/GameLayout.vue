<template>
    <div>
        <!--<div>-->
            <!--<games-header></games-header>-->
        <!--</div>-->
        <div v-if="game">
            <game-view :game-url="url"></game-view>
        </div>
    </div>
</template>


<script>
    import GamesHeader from '@/components/auth/games/_includes/TheGamesHeader'
    import GameView from '@/components/auth/games/GameView'
    import {HubConnectionBuilder} from '@aspnet/signalr';

    export default {
        components: {
            GamesHeader,
            GameView
        },
        data() {
            return {
                connection: new HubConnectionBuilder()
                    .withUrl(process.env.VUE_APP_LUCROR_GAMES_SOCKETS_SERVER_URL + "/chatHub")
                    .build(),
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
            this.$server.games.openSession(this.gameId)
                .then(() => {
                    this.connection
                        .start()
                        .then(() => this.connection.invoke("joinRoom", this.token))
                        .catch(err => console.error(err));

                    this.connection.on("CloseSession", (data) => {
                        this.$server.games.closeSession(data.room, data.score);
                        this.$router.back();
                    });
                });
        }
    }
</script>