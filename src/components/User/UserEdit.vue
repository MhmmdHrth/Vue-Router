<template>
    <div>
        <h2>User Edit Page</h2>
        <p>User Loaded Id {{$route.params.id}}</p>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Q: {{$route.query.q}}</p>
        <button @click="confirmed = true" class="btn btn-primary">Confirm</button>
        <div style="height:1000px;"></div>
        <p id="data">Some extra data</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },

    beforeRouteLeave(to,from,next){
        if(this.confirmed && confirm("Are you sure to leave ?")){
            next();
        }
        else{
            next(false)
        }
    }
}
</script>