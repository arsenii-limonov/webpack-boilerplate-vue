<template>
    <div id="app">
        <h1 class="app_headline">{{ this.greeting }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                greeting: 'Hi again',
            }
        },
    }
</script>


<style scoped>
    @import './styles.scss';
</style>
