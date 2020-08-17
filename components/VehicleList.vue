<template>
    <div>
    <div :class="$style.container" v-if="vehicles.length > 0">
        <div :class="$style.containerMenu">
            <div :class="$style.dropdownWrapper">
                <div @click="dropdown = !dropdown">
                    Rent 
                    <span style="color: #4959FF; cursor: pointer;">{{selectedType === '' ? 'whatever' : selectedType}}</span>
                    <span :class="$style.arrow" ></span>
                </div>
                <div v-if="dropdown" :class="$style.dropdownOpen">
                    <div @click="selectType('')">whatever</div>
                    <div v-for="type in types" :key="types.indexOf(type)" @click="selectType(type)">{{type}}</div>
                </div>
            </div>
            <div :class="$style.addGroup">
                <div :class="$style.addText">Add new</div>
                <span :class="$style.plusBtn" ></span>
            </div>
        </div>
        <div :class="$style.cardsContainer">
            <section v-for="vehicle in vehicles" :key="vehicle.id">
                <div v-if="vehicle.type === selectedType || selectedType === ''">
                    <VehicleCard :vehicle="vehicle" />
                </div>
            </section>
        </div>
    </div>
    <div :class="$style.container" v-else>
        <VehicleLoadingError />
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import VehicleCard from '../components/VehicleCard'
import VehicleLoadingError from '../components/VehicleLoadingError'

export default {
    data: () =>({
        types: [],
        selectedType: '',
        dropdown: false,
    }),
    methods:{
        selectType(type){
            this.selectedType = type;
            this.dropdown = false;
        }
    },
    components:{
        VehicleCard,
        VehicleLoadingError
    },
    created(){
        this.$store.dispatch('pullVehicles');
    },
    beforeUpdate(){
        for(let i=0; i<this.vehicles.length; i++){
            if(this.types.indexOf(this.vehicles[i].type) === -1){
                this.types.push(this.vehicles[i].type)
            }
        }
    },
    computed:{
        ...mapGetters({
        vehicles: 'getVehicles',
        error: 'getError',
        })
    },
}
</script>

<style module>

.container{
    margin-top: 48px;
    margin-left: 64px;
    margin-right: 64px;
    margin-bottom: 40px;
    padding-top: 56px !important;
    padding-bottom: 56px !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
    max-width: 1248px;
    padding: 0px;
    background: #F3F4F7;
    border-radius: 48px;
}

.cardsContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.dropdownWrapper{
    position: relative;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #012345;
}

.dropdownOpen{
    position: absolute;
    cursor: pointer;
    background: white;
    padding: 12px;
    border: solid  #4959FF;
}

.arrow{
    background: url('../assets/Arrow.svg') no-repeat center;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0px;
    margin-left: 12px;
    cursor: pointer;
}

.plusBtn{
    background: url('../assets/Plus.svg') no-repeat center;
    display: inline-block;
    width: 48px;
    height: 48px;
    margin: 0px;
    margin-left: 12px;
    cursor: pointer;
}

.addText{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    cursor: pointer;
    color: #4959FF;
}

.containerMenu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 32px;
    margin-right: 32px;
    padding-bottom: 24px;
}
.addGroup{
    display: flex;
    align-items: center;
}

@media screen and (max-width: 1160px) {
    .container{
        background: #F3F4F7;
        border-radius: 24px;
        margin: 0;
        margin-bottom: 20px;
        padding-top: 26px !important;
        padding-bottom: 24px !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
    }

    .containerMenu{
        margin: 0 16px;
        margin-bottom: 19px;
        padding: 0;
    }

    .dropdownWrapper{
        font-size: 24px;
        line-height: 29px;
        margin: 0;
    }
    .addText{
        font-size: 16px;
        line-height: 22px;
    }
    .arrow{
        background: url('../assets/ArrowMobile.svg') no-repeat center;
        margin-left: 4px;
        width: 16px;
        height: 16px;
    }
    .plusBtn{
        background: url('../assets/PlusMobile.svg') no-repeat center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
    }
}

</style>