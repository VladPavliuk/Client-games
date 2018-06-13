<template>
    <div>
        <router-view/>
    </div>
</template>


<script>
    import HeaderLayout from '@/components/_includes/TheHeader'

    export default {
        components: {
            HeaderLayout
        }
    }
</script>