<template>
    <div :class="$style.container">
        <div :class="$style.logoContainer">
            <div>
                <span :class="$style.logo"></span>
            </div>
            <div>
                <span :class="$style.companyName"></span>
            </div>
            <div :class="$style.slogan">
                World's first affordable airsharing
            </div>
        </div>
        <div :class="$style.rightContainer">
            <div :class="$style.nightModeContainer">
                <span :class="$style.nightModeIcon"></span>
                <div :class="$style.nightModeLabel">Night mod</div>
            </div>
            <div :class="$style.iconsContainer">
                <span :class="$style.messageIcon"></span>
                <span :class="$style.bellIcon"></span>
            </div>
            <div :class="$style.profileContainer">
                <div :class="$style.userName">Bessie Cooper</div>
                <span :class="$style.avatar"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style module>
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
    margin-left: 64px;
    margin-right: 64px;
    margin-bottom: 40px;
    max-width: 1312px;
    padding: 0px;
}

.logo{
    background: url('../assets/Logo.svg') no-repeat center;
    display: inline-block;
    width: 48px;
    height: 48px;
    margin: 0px;
    cursor: pointer;
}

.companyName{
    background: url('../assets/Pepelane.svg') no-repeat center;
    display: inline-block;
    width: 106px;
    height: 22px;
    margin: 0px;
    cursor: pointer;
}

.nightModeContainer{
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #677B8F;
    margin-right: 107px;  
}

.nightModeIcon{
    background: url('../assets/NightModeIcon.svg') no-repeat center;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0px;
    cursor: pointer;
    margin-right: 16px;
}

.iconsContainer{
    display: flex;
    align-items: center;
    margin-right: 56px;  
}

.messageIcon{
    background: url('../assets/MessageIcon.svg') no-repeat center;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0px;
    cursor: pointer;
    margin-right: 24px;
}

.bellIcon{
    background: url('../assets/BellIcon.svg') no-repeat center;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0px;
    cursor: pointer;
}
.avatar{
    background: url('../assets/Avatar.svg') no-repeat center;
    display: inline-block;
    width: 56px;
    height: 56px;
    margin: 0px;
    cursor: pointer;
}

.userName{
    margin-right: 16px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #012345;
}

.profileContainer{
    display: flex;
    align-items: center;
}

.logoContainer{
    display: flex;
    align-items: center;
}
.rightContainer{
    display: flex;
    align-items: center;
}

.slogan{
    margin-left: 64px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #677B8F;
}

@media screen and (max-width: 1160px) {

    .slogan, .nightModeLabel, .userName{
        display:none;
        margin: 0px;
    }
    .nightModeContainer{
        margin-right: 0px;
        justify-content: flex-end;
    }
    .nightModeIcon, .bellIcon, .messageIcon{
        margin-right: 20px;
        width: 20px;
        height: 20px;
    }
    .bellIcon{
        background: url('../assets/BellIconMobile.svg') no-repeat center;
    }
    .nightModeIcon{
        background: url('../assets/NightModeIconMobile.svg') no-repeat center;
    }
    .messageIcon{
        background: url('../assets/MessageIconMobile.svg') no-repeat center;
    }
    .avatar{
        background: url('../assets/AvatarMobile.svg') no-repeat center;
        width: 32px;
        height: 32px;
        border-radius: 16px;
    }
    .iconsContainer{
        margin-right: 24px;
    }

    .logo{
        background: url('../assets/LogoMobile.svg') no-repeat center;
        height: 32px;
        width: 32px;
    }

    .companyName{
        background: url('../assets/PepelaneMobile.svg') no-repeat center;
    }

    .container{
        margin: 12px 16px;
    }

}
</style>