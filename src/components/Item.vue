<template>
    <div class="single-product">
        <h2> {{product.title}} </h2>
        <img :src="product.product_photo">
        <div class="price"> ${{product.price}} </div>
        <div> {{product.description}} </div>
        <div class="likes"> <i class="far fa-heart"></i> {{product.likes}} likes </div>
        <button @click="product.likes += 1">Like</button>
        <button>
          <router-link to="/">Back</router-link>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'single-product', 
        data() {
           return {
               product: this.$route.query
           }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}


a {
  color: #35495E;
  text-decoration: none;
}

img {
  width: 300px;
  height: 300px;
}

button {
  margin: .5em;
}

.single-product {
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
}

.likes {
    color: tomato;
}

.price {
  color: #99badd ;
  font-size: 1.5em;
  font-weight: 600;
}
</style>