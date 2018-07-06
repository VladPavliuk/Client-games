<template>
    <div>
        <div class="md-layout md-alignment-center-center">
            <div class="md-layout-item md-large-size-66 md-small-size-100">
                    <router-view/>
            </div>
        </div>
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