<template>
    <div>
        <md-card>
            <md-card-header>
                <div class="md-title">Games</div>
            </md-card-header>
            <md-card-content>
                <md-list v-if="games.length > 0"
                         class="md-triple-line">
                    <template v-for="(game, index) in games">
                        <md-list-item :key="game.id">
                            <md-avatar>
                                <img v-if="game.iconUrl"
                                     :src="game.iconUrl"
                                     :alt="game.title">
                                <md-icon class="md-size-2x" v-else>gamepad</md-icon>
                            </md-avatar>

                            <div class="md-list-item-text">
                                <span class="md-title">{{ game.title }} <small>highest score - {{ game.score }}</small></span>
                                <p v-show="game.description" class="md-caption">{{ game.description }}</p>
                            </div>

                            <md-button :to="{ name: 'play-game', params: { id: game.id } }"
                                       class="play-button md-icon-button md-list-action md-fab md-fab-bottom-right">
                                <md-icon class="md-size-2x">play_circle_filled</md-icon>
                            </md-button>
                        </md-list-item>
                        <md-divider v-if="(index + 1) !== games.length"
                                    :key="game.id"
                                    class="md-inset"></md-divider>
                    </template>
                </md-list>
                <md-list v-else
                         class="md-triple-line">
                    <md-list-item>
                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/1" alt="People">
                        </md-avatar>

                        <div class="md-list-item-text">
                            <span>No games</span>
                            <p>Come here later...</p>
                        </div>
                    </md-list-item>
                </md-list>
            </md-card-content>
            <md-card-actions>

            </md-card-actions>
        </md-card>
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

<style>
    .play-button {
        position: relative !important;
        bottom: -12px !important;
    }
</style>