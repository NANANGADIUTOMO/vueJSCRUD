<template>
    <div class="kursi">
        <a href="" v-on:click.prevent="$emit('changepicture', cardimage, cardTitle, cardPrice )">
            <img :src="require('@/assets/img/' + cardimage + '.png')" alt="">
        </a><p></p>
        <div class="text">
        <b><center>{{cardTitle}}</center></b>
        <div class="IDR">
        <center> Rp. <b>{{cardPrice}}</b> </center>
        <button type="button" class="btn">Beli</button>
        </div>
        </div>
    </div>
  
</template>

<script>
export default {

    name : 'cardComponent',
    props : ["cardTitle", "cardPrice", "cardimage"]
}

</script>

<style scoped>
.kursi{
    background-color:antiquewhite;
    border: 1px solid;
    border-radius: 5px;
}
.IDR{
    display: flex;
    margin-top: 5%;
    margin-left: 5%;
}
.IDR b{
    font-size: larger;
}
.text b{
    font-size: 20px; 
}
.btn{
    background-color: #ee4d2d;
    margin-left: 7%;
    margin-bottom: 10px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    width: 80px;
}

</style>