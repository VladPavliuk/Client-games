<template>
    <div>
        <game-view game-url="https://ping-pong-js-game.herokuapp.com"></game-view>
    </div>
</template>


<script>
    import HeaderLayout from '@/components/_includes/TheHeader'
    import GameView from '@/components/auth/GameView'

    export default {
        components: {
            HeaderLayout,
            GameView
        }
    }
</script>