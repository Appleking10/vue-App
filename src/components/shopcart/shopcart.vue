<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                        <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
                    </div>
                    <div class="num">{{totalCount}}</div>
                </div>
                <div class="price">￥{{totalPrice}}</div>
                <div class="desc">另需配送费{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay">￥{{minPrice}}起送</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    
        props: {
            selectFoods: {
                type: Array,
                default() {
                    return [];
                }
            },
            deliveryPrice: {
                type: Number,
                default: 0
            },
            minPrice: {
                type: Number,
                default: 0
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                this.selectFoods.forEach((food) => {
                    total += food.price * food.count;
                });
                return total;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .shopcart
        position: fixed
        bottom: 0
        z-index: 50
        width: 100%
        height 48px
        .content
            display: flex
            background: #141d27
            font-size: 0
            color: rgba(255,255,255,0.4)
            
            .content-left
                flex: 1
                .logo-wrapper
                    display: inline-block
                    position: relative
                    top: -10px
                    margin: 0 12px
                    padding: 6px
                    width: 56px
                    height: 56px
                    box-sizing: border-box
                    vertical-align: top
                    background: #141d27                    
                    border-radius: 50%
                    .logo
                        width: 100%
                        height: 100%
                        border-radius: 50%
                        background: #2b343c
                        text-align: center
                        .icon-shopping_cart
                            font-size: 24px
                            color: #80858a
                            line-height: 44px
                            &.highlight
                                color: #ffffff
                            
                    .num
                        position: absolute
                        top: 0
                        right: 0
                        width: 24px
                        height: 16px
                        line-height: 16px
                        text-align: center
                        border-radius: 16px
                        font-size: 9px
                        font-weight: 700
                        background: rgb(240,20,20)
                        color: #ffffff
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4)
                .price
                    display: inline-block
                    vertical-align: top
                    line-height: 24px
                    margin-top: 12px
                    box-sizing: border-box
                    padding-right: 12px
                    border-right: 1px solid rgba(255,255,255,0.1)
                    font-size: 16px
                    font-weight: 700
                .desc
                    display: inline-block
                    vertical-align: top
                    line-height: 24px
                    margin: 12px 0 0 12px
                    font-size: 10px
                    
            .content-right
                flex: 0 0 105px
                width 105px
                text-align: center
                background: #2b333b
                .pay
                    line-height: 48px
                    height: 48px
                    font-size: 12px
                    font-weight: 700
                    
                    
</style>
