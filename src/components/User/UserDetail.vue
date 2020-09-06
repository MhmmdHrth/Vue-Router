<template>
    <div>
        <h1>Some user details</h1>
        <p>User Loaded Id: {{$route.params.id}}</p>
        <router-link tag="button" class="btn btn-primary" :to="link">Edit</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link: {
                name:'userEdit',
                params:{id:this.$route.params.id}, 
                query:{
                    locale:'en',
                    q:100
                    },
                hash:"#data"
            },
        }
    },

    // beforeRouteEnter(to,from,next){
    //     if(true){
    //         next()
    //     }
    //     else{
    //         next(false)
    //     }
    // }
}
</script>