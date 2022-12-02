<template>
    <nav>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/img/logo.png" alt="">
            <p><small>your partner Room Design</small></p>
            
        </div>
        <div class="text">
                <router-link to="/home" class="nav-link text-dark" href="">Home</router-link>
                <router-link to="/shiping" class="nav-link text-dark">Shiping</router-link>
                <router-link to="/catalog" class="nav-link text-dark">Catalog</router-link>
                <a class="nav-link text-dark" href="">Delivery</a>
                <router-link to="/shippinglist" class="nav-link text-dark">Shipping List</router-link>
                <a href=""><img src="../assets/img/cart-icon.png" alt="" class="mt-2 mr-3" width="20px" height="20px"></a>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name : 'navbarComponent'
}
</script> 

<style scoped>
.navbar{
    background-color: whitesmoke;
    height: 70px;
}
.text{
    display: flex;
    font-size: 12px;
    font-family:'Lucida Sans Typewriter';

}

</style>