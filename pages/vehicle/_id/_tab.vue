<template>
    <div>
        {{text}}
    </div>
</template>

<script>
export default {
    props:{
        vehicle: Object
    },
    computed:{
        text: function (){
            if(this.$route.params.tab === 'specification'){return this.vehicle.specifications_text}
            if(this.$route.params.tab === 'team'){return this.vehicle.team_text}
            if(this.$route.params.tab === 'termofrent'){return this.vehicle.term_text}
        }
    }
}
</script>