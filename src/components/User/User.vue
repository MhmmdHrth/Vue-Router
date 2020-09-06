<template>
    <div>
        <h1>User Page</h1>
        <button @click="backToHome" class="btn btn-primary">Back To Home</button>
        <hr>
        
        <!-- children view -->
        <router-view></router-view> 
    </div>
</template>

<script>
    export default {
        methods: {
            backToHome() {
                this.$router.push({name: "home"})
            }
        },
      
    }
</script> 
  
<style>

</style>