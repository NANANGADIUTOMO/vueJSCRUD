<template>
    <gallery class="gallery">
        <div class="kotak">
          <div class="kotak1"><img src="../assets/img/side-1.png" alt=""></div>
          <div class="kotak2"><img src="../assets/img/side-2.png" alt=""></div>
          <div class="kotak3"><img src="../assets/img/side-3.png" alt=""></div>
          <div class="kotak4"><img src="../assets/img/side-2.png" alt=""></div>
          <div class="kotak5"><img src="../assets/img/side-1.png" alt=""></div>
        </div>
    
        <div class="gambar">
            <img :src="require('@/assets/img/' + thisimg + '.png' )" alt="" id="imgkursi">
        </div>
    
        <div class="ket">
            <h2>{{thistext}}</h2>
            <p id="chartIDR">IDR. {{thistext2}}</p>
            <router-link to="/shiping" class="btn" style="background-color: pink;"><img src="../assets/img/cart-icon.png" alt="" class="mr-3 mb-1" id="addtochart">Add to Chart</router-link>
                    <br><br><br><br>
                <h3>About The Product:</h3>
                <p>Tailored ta a level of perfection Synonimous with that <br> 
                    of a savile row suit and with understand quality in the<br>
                    detail, jetty has been influenced by timeles 1950s style<br>
                </p>
                <br>
                <p>
                    providing a subtle nod to the past, jetty also provides<br>
                    a perfect solution for the way we work today. <br>
                    A comprehensif product family, jetty features a variety<br>
                    of elegant chairs and sofas.
                </p>
        </div>
    </gallery>
  
</template>

<script>
export default {
    name : 'galleryComponent',
    props : ['thisimg', 'thistext', 'thistext2'],
    
}
</script>

<style scoped>
.gallery{
    display: flex;
    justify-content: center;
    background-color: azure;
    width: 100%;
    height: 100%;
}

.gallery .kotak1{
    margin-left: 30px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 7%;
}
.gallery .kotak1:hover{
    transform: scale(1.5);
    border: 1px solid;
    background-color: azure;
}
.gallery .kotak2{
    margin-left: 30px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 7%;
}
.gallery .kotak2:hover{
    transform: scale(1.5);
    border: 1px solid;
    background-color: azure;
}
.gallery .kotak3{
    margin-left: 30px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 7%;
}
.gallery .kotak3:hover{
    transform: scale(1.5);
    border: 1px solid;
    background-color: azure;
}
.gallery .kotak4{
    margin-left: 30px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 7%;
}
.gallery .kotak4:hover{
    transform: scale(1.5);
    border: 1px solid;
    background-color: azure;
}
.gallery .kotak5{
    margin-left: 30px;
    margin-top: 10px;
    border: 1px solid;
    border-radius: 7%;
}
.gallery .kotak5:hover{
    transform: scale(1.5);
    border: 1px solid;
    background-color: azure;
}
.gambar{
    border: 1px solid;
    border-radius: 2%;
    margin-left: 10px;
    margin-right: 3%;
    margin-top: 10px;
    width: 460px;
    height: 580px;

}
.gambar:hover{
    transform: scale(1.1);
    border: 2px solid;
    background-color: azure;
}
.gallery .ket{
    margin-top: 5%;
}
.gambar img{
    width: 500px;
    height: 500px;
}
.kotak{
    margin-right: 2%;
}

</style>