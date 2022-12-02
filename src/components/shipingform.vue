<template>
<div>
     <div class="content2" id="idcontent" v-show="!success">
            <div class="isicontent" >
                <form @submit.prevent="inputShipping">
                <div class="textshiping"><p><center><strong>Shiping Form</strong></center></p></div>
                    <div class="isi">

                        <div class="first">
                            <p>First Name</p>
                            <div>
                                <input 
                                v-model="shippingData.first_name"
                                type="text" 
                                placeholder="Your First Name" 
                                required id="firstname"
                                >
                            </div><p></p>
                            <p>Last Name</p>
                            <div>
                                <input 
                                v-model="shippingData.last_name"
                                type="text" 
                                placeholder="Your Last Name Number" 
                                required id="lastname" >
                            </div><p></p>
                            <p>Email Adress</p>
                            <div>
                                <input 
                                v-model="shippingData.email"
                                type="email" 
                                placeholder="Your Email Adress" >
                            </div>
                        </div>

                        <div class="second">
                            <p>Phone Number</p>
                            <div>
                                <input
                                v-model="shippingData.phone_number" 
                                type="number" 
                                placeholder="Your Phone Number" >
                            </div><p></p>
                            <p>City</p>
                            <div>
                                <input 
                                v-model="shippingData.city"
                                type="text"
                                 placeholder="Input City" >
                            </div><p></p>
                            <p>Postal Code</p>
                            <div>
                                <input 
                                v-model="shippingData.postal_code"
                                type="number" 
                                placeholder="Input PostaL Code" >
                            </div>
                        </div>
                    </div><p></p>

                    <div class="adress">
                    <p>Address</p>
                        <p><textarea
                        v-model="shippingData.address" 
                        type="text" 
                        name="" 
                        id="alamatrumah" 
                        cols="52" rows="3" 
                        placeholder="Input Your Address"  
                        required></textarea></p>
                    </div>
                    <div class="buttonsubmit">
                        <center><button type="submit" class="buttonvalue" role="button">{{ buttonValue }}</button></center>
                    </div>
                </form>
            </div>
        </div>
        <!-- <success v-show="success"></success> -->
</div>
</template>

<script>
import shippingService from '../service/shippingService.js'
// import success from '../components/succes.vue'
export default {
    name: 'shippingformComponents',
        data(){
            return{
                shippingData:{
                    "first_name" : null,
                    "last_name" : null,
                    "email" : null,
                    "phone_number" : null,
                    "city" : null,
                    "postal_code" : null,
                    "address" : null
                },
                success : false,
                buttonValue : "Submit"
            }
        },
        methods : {
            inputShipping(){
                let data = this.shippingData;

                if(this.buttonValue === "Submit"){
                    shippingService.create(data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }else{
                    shippingService.updateShipping(data.id, data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                        location.reload();
                }
            },
        },
        components : {
            // success,
        },
        props: ["shippingDataProps"],
        watch: {
            'shippingDataProps'(newValue) {
                this.shippingData = newValue;
                console.log(this.shippingData);
                this.buttonValue = "Update"
            }
        }
    }
</script>

<style scoped>
.content2{
    height: 550px;
    display: flex  ;
    justify-content: space-around;
    border: 2px solid greenyellow;
    border-radius: 2%;
    width: 550px;
    margin-left: 30%; 
    background-color:whitesmoke;
}
.isi{
    display: flex;
    justify-content: space-around;
}
.textshiping{
    margin-top: 4%;
    font-family: sans-serif;
    font-size: 26px;
    font-style: bold;
}
.buttonvalue{
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 400;
  font-size: 15px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: #ad5389;
  background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.buttonvalue{
     box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}
.buttonvalue{
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}
.isi input{
    border-radius: 4px;
}
.adress textarea{
   border-radius: 4px;   
}
</style>