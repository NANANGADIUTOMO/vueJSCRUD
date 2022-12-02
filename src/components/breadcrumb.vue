<template>
<breadcrumb>
    <div class="breadcrumb">
        <nav class="navbar navbar-expand-lg"  >
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"  aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                            <li class="nav-item active" type="option">
                                <router-link to="/home" class="nav-link text-dark"><b>Home</b><span class="sr-only">(current)</span></router-link>
                            </li>
                            <li class="nav-item active">
                                <router-link to="/detail" class="nav-link text-dark" style="display: none;" v-show="tampungan != '/shiping'"><b>/ Detail</b>
                                <span class="sr-only">(current)</span></router-link>
                            </li>
                            <li class="nav-item active">
                                <router-link to="/shiping" class="nav-link text-dark" v-show="tampungan == '/shiping'"><b>/ shiping </b>
                                <span class="sr-only">(current)</span></router-link>
                            </li>
                            <li class="nav-item active">
                                <router-link to="/shiping" class="nav-link text-dark" v-show="tampungan == '/detail'"><b>/ shiping </b>
                                \<span class="sr-only">(current)</span></router-link>
                            </li>
                            <li class="nav-item active">
                                <router-link to="/catalog" class="nav-link text-dark" v-show="tampungan == '/catalog'"><b>/ catalog </b>
                                <span class="sr-only">(current)</span></router-link>
                            </li>
                            
                            </ul>
                        </div>
                        
            </nav>
    </div>
</breadcrumb>
</template>

<script>
export default {
    name : 'breadcrumbComponent',
    data (){
        return{
            tampungan:this.$route.path
        }
    }
}

</script>

<style scoped>
.breadcrumb{
    margin-top: 5px;
    height: 80px;
}
</style>