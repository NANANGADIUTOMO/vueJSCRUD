<template>
 <div class="body">
  <navbar></navbar>
  <breadcrumb class="bread"></breadcrumb>
  <div class="content" >
                <div><br><br>
                        <center><h2>Selamat Datang Di Website
                            <p>LuxSpace Room Design</p></h2>
                    </center>
                </div>
                <div class="logotengah">
                     <center><img src="../assets/img/logo.png" alt="" class="mt-3" width="300px"></center>
                     <br><center><small><b>Support By:</b></small></center>
                     <center><img src="../assets/img/informa.jpg" alt=""></center>
                </div>
            </div>
  <Footer class="foot"></Footer>
  <copyright></copyright>
</div>
</template>

<script>
import navbar from '../components/navbar.vue'
import breadcrumb from '../components/breadcrumb.vue';
import Footer from '../components/footer.vue'
import copyright from '../components/copyright.vue';
export default {
    name: 'HomePage',
    components: {
        navbar,
        breadcrumb,
        Footer,
        copyright
    }
}
</script>


<style scoped>
.content{
    background-color: 	whitesmoke;
    width: 100%;
    height: 400px;
    margin-top: 0;
}
.foot{
    margin-top: 0;
}
</style>