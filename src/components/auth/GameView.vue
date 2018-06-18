<template>
    <div>
        <iframe :src="gameUrl"
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
        }

    }
</script>

<style lang="scss">
    .game-iframe {
        width: 100%;
    }
</style>