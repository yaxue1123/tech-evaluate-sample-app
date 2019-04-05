<template>
  <div class="product-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="product in products">
        <span> 
          <img :src="product.product_photo"> 
        </span>
        <span> {{product.title}} </span>
        <span class="price"> ${{product.price}} </span>
        <button>
          <router-link :to="{path: '/item',query: product}">View</router-link>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'product-list',
  data () {
    return {
      msg: 'Product list',
      products: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/products')
      .then(response => (this.products = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
    display: grid;
    grid-template-columns: 20% 50% 15% 15%;
    align-items: center;
    background: #FFF;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
    padding: 15px;
    margin-bottom: 15px;
    color: #3f3f3f;
}

a {
  color: #35495E;
  text-decoration: none;
}

img {
  width: 100px;
  height: 100px;
}

button {
  margin: .5em;
}

.product-list {
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
}

.price {
  color: #99badd ;
  font-size: 1.2em;
  font-weight: 600;
}
</style>
