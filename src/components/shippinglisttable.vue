<template>
  <div class="table table-striped table-bordered table-hover" cellspacing="0">
    <h1 class="text-center my-4">SHIPPING LIST TABLE</h1>
        <table class="table table-striped table-border">
            <thead>
                <tr class="table-success ">
                    <th scope="col-3">No</th>
                    <th scope="col">ID</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">City</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in shippingData" :key="item.id">
                    <th>{{ index + 1 }}</th>
                    <td>{{ item.id }}</td>
                    <td>{{ item.first_name + " " + item.last_name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone_number }}</td>
                    <td>{{ item.city }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.postal_code }}</td>
                    <td class="d-flex">
                        <button class="btn btn-sm btn-warning mr-2 text-white" @click="$emit('updateShippingFunc', item)">Update</button>
                        <button class="btn btn-sm btn-danger" @click="deleteShippingFunc(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import shippingService from "../service/shippingService"
export default {
    name: 'shiipinglisttableComponent',
methods : {
        getShipping(){
            shippingService.getAll()
                .then(response => {
                    this.shippingData = response.data;
                    console.log(this.shippingData);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        deleteShippingFunc(id){
            if(confirm("Apakah anda yakin hapus?")){
                shippingService.deleteShipping(id)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                location.reload();
            }else{
                alert("Hapus dibatalkan!")
            }
        }
    },
    mounted(){
        this.getShipping();
    },
    data(){
        return{
            shippingData : null,
        }
    }
}
</script>

<style>

</style>