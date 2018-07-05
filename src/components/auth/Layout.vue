<template>
    <div>
        <template>
            <div class="page-container">
                <md-app md-mode="fixed">
                    <md-app-toolbar class="md-primary">
                        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                            <md-icon>menu</md-icon>
                        </md-button>
                        <span class="md-title">{{ appTitle }}</span>
                    </md-app-toolbar>

                    <md-app-drawer :md-active.sync="menuVisible">
                        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

                        <md-list>
                            <md-list-item :to="{ name: 'user-profile' }">
                                <md-icon>account_circle</md-icon>
                                <span class="md-list-item-text">Profile</span>
                            </md-list-item>

                            <md-list-item :to="{ name: 'games-list' }">
                                <md-icon>videogame_asset</md-icon>
                                <span class="md-list-item-text">Games</span>
                            </md-list-item>

                            <md-list-item :to="{ name: 'user-profile' }">
                                <md-icon>list_alt</md-icon>
                                <span class="md-list-item-text">Scores</span>
                            </md-list-item>
                        </md-list>
                    </md-app-drawer>

                    <md-app-content>
                        <div class="md-layout md-alignment-top-center">
                            <div class="md-layout-item md-large-size-66 md-small-size-100">
                                <router-view/>
                            </div>
                        </div>
                    </md-app-content>
                </md-app>
            </div>
        </template>
    </div>
</template>


<script>
    import HeaderLayout from '@/components/_includes/TheHeader'

    export default {
        name: 'Normal',
        components: {
            HeaderLayout
        },
        data() {
            return {
                appTitle: 'Lucror Games',
                menuVisible: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-app {
        min-height: 100vh;
        border: 1px solid rgba(#000, .12);
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>