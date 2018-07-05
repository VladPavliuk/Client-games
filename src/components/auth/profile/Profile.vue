<template>
    <div>
        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">Your account</div>
                    <div class="md-subhead">Normal size</div>
                </md-card-header-text>

                <md-card-media>
                    <img src="/assets/examples/avatar-2.jpg" alt="People">
                </md-card-media>
            </md-card-header>
            <md-card-content>

            </md-card-content>
            <md-card-actions>
                <md-button class="md-raised md-primary">Update</md-button>
                <md-button @click="logout" class="md-raised md-accent">Logout</md-button>
            </md-card-actions>
        </md-card>

        <!--<div class="media-object">-->
            <!--<div class="media-object-section">-->
                <!--<div class="thumbnail">-->
                    <!--<img src= "assets/img/media-object/avatar-1.jpg">-->
                <!--</div>-->
            <!--</div>-->

            <!--&lt;!&ndash;<iframe src="https://ping-pong-js-game.herokuapp.com"&ndash;&gt;-->
                    <!--&lt;!&ndash;style="width: 100%; height: 800px;"&ndash;&gt;-->
                    <!--&lt;!&ndash;frameborder="1"></iframe>&ndash;&gt;-->
            <!---->
            <!--<div class="media-object-section main-section">-->
                <!--Profile-->
                <!--<button type="button"-->
                        <!--class="button"-->
                       <!--&gt;logout-->
                <!--</button>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$server.user.logout()
                    .then(_ => this.$router.push({name: 'user-login'}));
            }
        }
    }
</script>
