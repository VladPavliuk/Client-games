<template>
    <div>
        <iframe :src="gameUrl"
                ref="game-iframe"
                class="game-iframe"
                :style="{ height: gameHeight + 'px'}"
                frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        props: {
            gameUrl: {
                type: String,
                required: true
            },
            gameHeight: {
                type: Number,
                default: 800
            }
        },
        mounted() {
           this.addAutoFocusToIframe();
        },
        methods: {
            addAutoFocusToIframe() {
                let vueInstance = this;
                this.$refs['game-iframe'].contentWindow.top.onload = function() {
                    vueInstance.$refs['game-iframe'].contentWindow.focus();
                };
            }
        }
    }
</script>

<style lang="scss">
    // TODO: add ability to dynamically define height of iframe
    .game-iframe {
        width: 100%;
    }
</style>