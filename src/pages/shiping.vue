<template>
    <div>
    <navbar></navbar>
    <breadcrumb></breadcrumb>
    <shipingform></shipingform>
    <Footer></Footer>
    <copyright></copyright>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import breadcrumb from '../components/breadcrumb.vue';
import shipingform from '../components/shipingform.vue';
import Footer from '../components/footer.vue'
import copyright from '@/components/copyright.vue';
export default {
    name: 'ShipingComponent',
    components: {
        navbar,
        breadcrumb,
        shipingform,
        Footer,
        copyright
    }

}
</script>

<style>

</style>