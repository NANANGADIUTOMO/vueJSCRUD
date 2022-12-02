<template>
    <div>
        <navbar class="mb-2"></navbar>
        <div>
            <shippinglisttable v-show="!viewForm" @updateShippingFunc="updateShippingFunc" class="table"></shippinglisttable>
            <shippingform v-show="viewForm" :shippingDataProps="shippingData"></shippingform>
        </div>
        <Footer></Footer>
        <copyright></copyright>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import copyright from '../components/copyright.vue'
import shippinglisttable from '../components/shippinglisttable.vue'
import shippingform from '../components/shipingform.vue'
export default {
    name: 'shipppingListPage',
    components:{
        navbar,
        Footer,
        copyright,
        shippinglisttable,
        shippingform
    },
    methods: {
            updateShippingFunc(item){
                this.shippingData = item
                this.viewForm = true;
            }
        },
        data(){
            return{
                viewForm : false,
                shippingData: null
            }
        }
}
</script>

<style scoped>
    .table{
        width: 90%;
        margin-left: 5%;
        margin-top: 10px;
    }
</style>