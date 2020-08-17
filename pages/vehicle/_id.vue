<template>
    <div :class="$style.container">
        <div>
            <img :src="vehicle.image" :class="$style.image" />
        </div>
        <div :class="$style.vehicleDetails">
            <div :class="$style.name" >{{vehicle.name}}</div>
            <div :class="$style.tabs" >
                <div :class="$style.tabTitle">
                    <nuxt-link 
                        :to="'/vehicle/' + vehicle.id + '/specification'" 
                        tag="section"
                        :active-class="$style.activeTab">
                        Specifications</nuxt-link>
                </div>
                <div :class="$style.tabTitle">
                    <nuxt-link 
                        :to="'/vehicle/' + vehicle.id + '/team'" 
                        tag="section"
                        :active-class="$style.activeTab">
                        Team</nuxt-link>
                </div>
                <div :class="$style.tabTitle">
                    <nuxt-link 
                        :to="'/vehicle/' + vehicle.id + '/termofrent'" 
                        tag="section"
                        :active-class="$style.activeTab">
                        Rent terms</nuxt-link>
                </div>
            </div>
            <div :class="$style.tabText">
                <nuxt-child :vehicle="vehicle" />
            </div>
            <div>
                <div :class="$style.features">
                    Features:
                </div>
                <div :class="$style.featureCard">
                    <div>
                        <span :class="$style.cup"></span>
                    </div>
                    <div :class="$style.featuteDescription">
                        <div :class="$style.featuteTitle">A challenge for a true champion</div>
                        <div :class="$style.featuteDetails">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                    </div>
                </div>
                <div :class="$style.featureCard">
                    <div>
                        <span :class="$style.pilot"></span>
                    </div>
                    <div :class="$style.featuteDescription">
                        <div :class="$style.featuteTitle">Pilot's sweaty hands</div>
                        <div :class="$style.featuteDetails">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
                    </div>
                </div>
            <div :class="$style.rentCard">
                <div :class="$style.rentPrice">Rent for <span style="color: #F84AB3;">{{vehicle.rent}} $/h</span></div>
                <div :class="$style.rentBtn">Rent now</div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data:() => ({
        vehicle: null,
    }),
    created(){
        this.vehicle = this.$store.getters.getVehicleById(this.$route.params.id)
    }
}
</script>

<style module>
.container{
    margin-top: 48px;
    margin-left: 64px;
    margin-right: 64px;
    margin-bottom: 56px;
    max-width: 1248px;
    display: flex;
    flex-direction: row;
}

.image{
    width: 712px;
    height: 700px;
    border-radius: 24px;
}

.vehicleDetails{
    margin-left: 64px;
    margin-top: 48px;
}

.name{
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #012345;
    margin-bottom: 32px;
}

.tabs{
    margin-bottom: 32px;
    display: flex;
    align-items: center;
}

.tabTitle{
    margin-right: 32px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: #677B8F;
    cursor: pointer;
}
.activeTab{
    color: #4959FF;
}

.tabText{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #677B8F;
}

.features{
    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
    color: #012345;
    margin-top: 32px;
    margin-bottom: 32px;
}

.cup{
    background: url('../../assets/Cup.svg') no-repeat center;
    display: inline-block;
    width: 80px;
    height: 96px;
    margin: 0px;
}

.pilot{
    background: url('../../assets/pilot.svg') no-repeat center;
    display: inline-block;
    width: 80px;
    height: 96px;
    margin: 0px;
}

.featuteTitle{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
    color: #012345;
}

.featureCard{
    display: flex;
    margin-top: 16px;
}

.featuteDescription{
    margin-left: 24px;
}

.featuteDetails{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #677B8F;
}

.rentCard{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F3F4F7;
    border-radius: 16px;
    margin-top: 45px;
}

.rentPrice{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #012345;
    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 32px;
}

.rentBtn{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 17px 32px;
    margin-right: 32px;
    background: #4959FF;
    border-radius: 12px;
    color: #FCFCFC;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    cursor: pointer;
}

@media screen and (max-width: 1160px) {
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 8px 16px;
    }

    .image{
        width: 343px;
        height: 332px;
        border-radius: 16px;
    }

    .vehicleDetails{
        margin: 0;
    }

    .name{
        font-size: 24px;
        line-height: 29px;
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .tabs{
        margin-bottom: 20px;
    }


    .rentCard{
        position: sticky;
        width: 100%;
        margin-right: 16px;
        bottom: 50px;
    }

    .rentPrice{
        font-size: 16px;
        line-height: 22px;
        padding-top: 23px;
        padding-bottom: 23px;
        padding-left: 24px;
    }

    .rentBtn{
        font-size: 14px;
        line-height: 12px;
        border-radius: 12px;
        padding: 16px 24px;
        margin-right: 24px;
    }
}
</style>