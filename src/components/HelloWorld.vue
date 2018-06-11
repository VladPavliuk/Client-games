<template>
   <div>
       <div id="wrapper"></div>
   </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                script: '',
            }
        },
        props: {
            msg: String
        },
        mounted() {
            this.$game.get()
                .then(res => {
                    let ckeditor = document.createElement('script');
                    ckeditor.setAttribute('src', "http://www.ping-pong.vladdev.com");
                    document.getElementById('wrapper').appendChild(ckeditor);
                });
            this.$server.test.test()
                .then(res => console.log(res))
                .catch(res => console.log(res))
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
