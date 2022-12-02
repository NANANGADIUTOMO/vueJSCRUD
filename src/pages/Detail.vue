<template>
  <div>
    <navbar></navbar>
      <breadcrumb></breadcrumb>
      <gallery :thisimg="cardimage" :thistext="cardTitle" :thistext2="cardPrice"></gallery>
      <slider @changepicture="gantigambarfunc" ></slider>
     <Footer></Footer>
     <copyright></copyright>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import breadcrumb from '../components/breadcrumb.vue'
import gallery from '../components/gallery.vue'
import slider from '../components/slider.vue'
import Footer from '../components/footer.vue'
import copyright from '../components/copyright.vue'
export default {
  name: 'DetailPage',
  components: {
    navbar,
    breadcrumb,
    gallery,
    slider,
    Footer,
    copyright
  },
  methods : {
    gantigambarfunc : function(cardimage, cardTitle, cardPrice){
      this.cardimage = cardimage
      this.cardTitle = cardTitle
      this.cardPrice = cardPrice
      window.scrollTo({
        top: 175,
        behavior: 'smooth',
      });
    }
  },
  data(){
    return{
      cardimage: "chair",
      cardTitle : "chair thaty",
      cardPrice : "12.000.000"
    }
  }
}
</script>

<style>

</style>