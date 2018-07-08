<template>
    <div>
        <md-button type="submit" @click="openSnackbar" class="md-primary md-raised">Open Snackbar</md-button>

        <md-snackbar :md-position="position"
                     :md-duration="isInfinity ? Infinity : duration"
                     :md-active.sync="showSnackbar"
                     md-persistent>
            <span>{{ message }}</span>
            <md-button class="md-primary" @click="closeSnackbar">Close</md-button>
        </md-snackbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: '',
                showSnackbar: false,
                position: 'center',
                duration: 4000,
                isInfinity: false
            }
        },
        mounted() {
            this.$flashMessage.subscribe(data => this.openSnackbar(data.message));
        },
        methods: {
            openSnackbar(message) {
                this.message = message;
                this.showSnackbar = true;
            },
            closeSnackbar() {
                this.showSnackbar = false;
            }
        }
    }
</script>
