<template>
    <div class="alert">
        <h5 class="card-title">Success!</h5>
        <p class="card-text" >Data Anda berhasil di Submit!</p>
        <router-link to="/home" class="btn btn-succes text-white mr-3">Oke</router-link>
        <router-link to="/shiping" class="btn btn-secondary text-white ">Masukkan data lagi</router-link>
    </div>
</template>

<script>
export default {
    name: 'succesComponent'
}
</script>

<style scoped>
    .btn-succes{
        background-color: blue;
        justify-content: center;
    }
    .alert{
        margin-top: 3%;
        margin-left: 35%;
        width: 30%;
        border: 2px solid green;
    }
</style>