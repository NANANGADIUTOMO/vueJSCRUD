<template>
    <div class="slider">
        <center>
        <h3 >Complete Your Room </h3>
        <h3 >With What we Design</h3></center>
        <div class="d-flex justify-content-around mt-4">
            <card v-for="(item, index) in arrcardTitle"
            :key="index" :cardTitle="item"
            :cardPrice="arrcardPrice[index]"
            :cardimage="arrcardImage[index]"  
            @changepicture="changepictureFunc">
        </card> 
        </div>

    </div>
</template>

<script>
import card from './card.vue'
export default {
    name : 'sliderComponent',
    components : {
        card
    },
    methods : {
        changepictureFunc : function(cardimage, cardTitle, cardPrice){
            this.$emit('changepicture', cardimage, cardTitle, cardPrice)
            
        }
    },
    data () {
        return {
            arrcardTitle : ["canggkir mauttiea","samman kaka","lino dino","syail ammeno"],
            arrcardPrice : ["12.000.000","10.000.000","20.000.000","30.000.000"],
            arrcardImage : ["chair-1","chair-2","chair-3","chair-4"]
        }
    }

}
</script>

<style scoped>
.slider{
    
    margin-top: 3%;
    height: 100%;
    width: 100%;
}
.complet{
    margin-bottom: 10px;
}

</style>