<template>
    <div>
        <header-layout></header-layout>
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell small-6 small-offset-3">
                    <router-view/>
                </div>
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