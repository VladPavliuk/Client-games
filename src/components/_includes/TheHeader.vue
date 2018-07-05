<template>
    <div>
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

                    <md-list-item :to="{ name: 'user-profile' }">
                        <md-icon>videogame_asset</md-icon>
                        <span class="md-list-item-text">Games</span>
                    </md-list-item>

                    <md-list-item :to="{ name: 'user-profile' }">
                        <md-icon>list_alt</md-icon>
                        <span class="md-list-item-text">Scores</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
    </div>
</template>

<style lang="scss" scoped>
    .md-app {
        max-height: 400px;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>

<script>
    export default {
        name: 'Reveal',
        data() {
            return {
                appTitle: 'Lucror Games',
                menuVisible: false
            }
        }
    }
</script>