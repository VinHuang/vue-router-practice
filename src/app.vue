<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>
<script>
    //es6
    export default {
        el:"#app",
         data: {
            name:"guowenfh",
            age:"2q1"
        }
    }
</script>
<style lang="sass">
 body{ background: #ccc;h1 { color: #dcadca; }}
</style>