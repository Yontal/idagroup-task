<template>
    <nuxt-link tag="section" no-prefetch :to="'/vehicle/' + vehicle.id + '/specification'">
        <div :class="$style.cardWrapper">
            <div :class="$style.card">
                <div>
                    <img :class="$style.preview" :src="vehicle.preview" />
                </div>
                <div :class="$style.details">
                    <div :class="$style.name">{{vehicle.name}}</div>
                    <div :class="$style.description">{{vehicle.description}}</div>
                </div>
            </div>
            <div :class="$style.rent">{{vehicle.rent}} $/h</div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        vehicle: Object,
    }
}
</script>

<style module>
.cardWrapper{
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
    padding-bottom: 25px;
    margin: 0px;
    width: 300px;
    background: #FCFCFC;
    border-radius: 32px;
    margin-left: 16px;
    margin-right: 16px; 
    margin-top: 16px;
    margin-bottom: 16px;
    cursor: pointer;   
}

.card{
    display: flex; 
}

.preview{
    height: 88px;
    width: 88px;
    border-radius: 24px;
    margin-right: 24px;
}

.name{
    margin-top: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: #012345;
}

.rent{
    margin-top: 6px;
    margin-left: 112px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #F84AB3;
}

.description{
    margin-top: 12px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #677B8F;
}

@media screen and (max-width: 800px) {
    .cardWrapper{
        margin: 6px 16px;
    }
}
</style>