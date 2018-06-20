<template>
    <div>
        <div @mouseover="showGamesHeader"
             @mouseleave="hideGamesHeader"
             class="show-header-trigger"></div>

        <div :class="activeClass"
             @mouseover="showGamesHeader"
             @mouseleave="hideGamesHeader">
            <div class="clearfix">
                <a href="javascript:void(0)" class="float-left pause-button">Pause</a>
                <a href="javascript:void(0)" class="float-right exit-button">Exit</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeClass: 'games-header'
            }
        },
        methods: {
            showGamesHeader() {
                this.activeClass = 'games-header show-games-header';
            },

            hideGamesHeader() {
                this.activeClass = 'games-header hide-games-header';
            },

            stopPropagation(event) {
                event.stopPropagation();
            }
        }
    }
</script>

<style lang="scss">

    .pause-button, .exit-button {
        font-size: 20pt;
        margin: 0 10px;
        text-transform: uppercase;
    }

    .show-header-trigger {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        z-index: 100;
    }

    .games-header {
        background-color: rgba(0, 0, 255, 0.09);
        position: fixed;
        top: -100px;
        left: 0;
        width: 100%;
        height: 40px;
        z-index: 110;
        transition: top .15s;
    }

    .show-games-header {
        top: 0px;
    }
    .hide-games-header {
        top: -100px;
    }

</style>