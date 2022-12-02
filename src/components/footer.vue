<template>
<div class="footer">
        <center><img src="../assets/img/logo.png" alt="" class="mt-5"></center>
        <center><small>Your Partner Room Design</small></center> 
        <br>
        <div class="foot">
            <div >
                <a class="nav-link text-dark" href=""><b>Overview</b></a>
                <a class="nav-link text-dark" href="">Shipping</a>
                <a class="nav-link text-dark" href="">Refund</a>
                <a class="nav-link text-dark" href="">Promotion</a>
            </div>
            <div>
                <a class="nav-link text-dark" href=""><b>Company</b></a>
                <a class="nav-link text-dark" href="">About</a>
                <a class="nav-link text-dark" href="">Career</a>
                <a class="nav-link text-dark" href="">Contact Us</a>
            </div>
            <div>
                <a class="nav-link text-dark" href=""><b>Explore</b></a>
                <a class="nav-link text-dark" href="">Term & Condition</a>
                <a class="nav-link text-dark" href="">Privacy Police</a>
                <a class="nav-link text-dark" href="">For Developer</a>
            </div>
            <div>
                <p><b>Special Letter</b></p>
                <div class="input-group mb-2">
                        <input 
                        type="text" 
                        class="form-control"
                        placeholder="Your Email Address" 
                        aria-describedby="basic-addon2"
                        id="valnama">
                        <button class="btnclose" type="submit"><img src="../assets/img/tele-icon.png" alt="" ></button>
                    </div>  
            </div>
        </div>
        <center><small><p class="mt-3">Pengiriman Via :</p></small></center>
            <div class="kirim">
               <div class="satu"><p><img src="../assets/img/logo-Indoexpress.png" alt=""></p></div>
               <div class="dua"><img src="../assets/img/anter.png" alt=""></div>
               <div class="tiga"><img src="../assets/img/cargo.png" alt=""></div>
               <div class="empat" ><img src="../assets/img/jne.jpg" alt=""></div>
               <div class="lima"><img src="../assets/img/jnt ex.png" alt=""></div>
            </div><br>
            <center><small><p>Pembayaran Via :</p></small></center>
            <div class="ctn">
                <div class="ctn1"><img src="../assets/credit/american-express.png" alt=""></div>
                <div class="ctn2"><img src="../assets/credit/cirrus.png" alt=""></div>
                <div class="ctn3"><img src="../assets/credit/mastercard.png" alt=""></div>
                <div class="ctn4"><img src="../assets/credit/mestro.png" alt=""></div>
                <div class="ctn5"><img src="../assets/img/BRI.png" alt=""></div>
                <div class="ctn6"><img src="../assets/credit/visa.png" alt=""></div>
            </div>
    </div>
</template>

<script>
export default {
    name : 'footerComponent'

}
</script>

<style scoped>
.footer{
    background-color: blanchedalmond;
    margin-top: 5%;
}
.footer .foot{
    display: flex;
    justify-content: space-around;
}
.btnclose{
    background-color: pink;
}
.kirim{
    display: flex;
    justify-content: center;
    
}
.ctn{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.satu{
    background-color: white;
    margin-right: 5px;
    
}
.satu img{
    margin-top: 12px;
}
.tiga img{
    margin-top: 9px;
}
.empat img{
    margin-top: 8px;
}
.lima img{
    margin-top: 6px;
}
.dua{
    background-color: white;
    margin-right: 5px;
}
.tiga{
    background-color: white;
    margin-right: 5px;
}
.empat{
    background-color: white;
    margin-right: 5px;
}
.lima{
    background-color: white;
    margin-right: 5px;
}
.ctn1{
    background-color: white;
    margin-right: 5px;
}
.ctn2{
    background-color: white;
    margin-right: 5px;
}
.ctn3{
    background-color: white;
    margin-right: 5px;
}
.ctn4{
    background-color: white;
    margin-right: 5px;
}
.ctn5{
    background-color: white;
    margin-right: 5px;
}

</style>