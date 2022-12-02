<template>
  <div>
    <navbar></navbar>
    <breadcrumb class="bread"></breadcrumb>
    <div class="catalog">
        <div class="search">
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </div>
    <Footer class="foot"></Footer>
    <copyright></copyright>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import breadcrumb from '../components/breadcrumb.vue';
import Footer from '../components/footer.vue';
import copyright from '../components/copyright.vue';
export default {
    name: 'catalogPage',
    components: {
        navbar,
        breadcrumb,
        Footer,
        copyright
    }
}
</script>

<style scoped>
.catalog{
    margin-top: 0%;
    width: 100%;
    height: 500px;
    background-color: whitesmoke;
}
.foot{
    margin-top: 0;
}
.bread{
    margin-bottom: 0;
}
.search{
    justify-content: center;
    margin-left: 20%;
}

</style>