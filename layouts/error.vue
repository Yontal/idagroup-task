<template>
    <div :class="$style.wrapper">
        <div :class="$style.header">
            An error has occurred
        </div>
        <a href="/">
            <div :class="$style.refreshBtn" >
                Go home
            </div>
        </a>
    </div>
</template>
<style module>
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.header{
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #012345;
    margin-bottom: 24px;
    margin-top: 264px;
    margin-left: 416px;
    margin-right: 416px;
}

.subHeader{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #677B8F;
    margin-bottom: 40px;
}

.refreshBtn{
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    padding: 17px 32px;
    background: #4959FF;
    color: #FCFCFC;
    border-radius: 12px;
    cursor: pointer;
    margin-bottom: 264px;
}
</style>