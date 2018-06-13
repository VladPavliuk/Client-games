<template>
    <div>
        <header-layout></header-layout>
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