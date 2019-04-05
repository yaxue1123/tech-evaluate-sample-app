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
export default {
  name: 'product-list',
  data () {
    return {
      msg: 'Product list',
      products: [
          {
              "id": 1,
              "title": "Peter Millar Stretch Tattersall Woven Sport Shirt",
              "description": "This premier sport shirt is made from a unique performance fabric that offers stretch for optimum mobility and ideal comfort on the course or around town. The innovative fabric construction allows for exceptional breathability and moisture management that keeps the garment fresh throughout wear. Styled with a button down collar, French placket, left chest pocket and double button barrel cuffs. 94% nylon 6% spandex sport shirt. Imported.",
              "product_photo": "../static/img/products/product_1.jpg",
              "price": 152.98,
              "likes": 5
          },
          {
              "id": 2,
              "title": "Nike Tech Quarter Zip Vest",
              "description": "185g stretch woven. Decoupled lower body for enhanced mobility, inner hand warmer connected to sleeve, side zip pockets, printed center front zipper. Wear for training or practice. Imported.",
              "product_photo": "../static/img/products/product_2.jpg",
              "price": 150,
              "likes": 0
          },
          {
              "id": 3,
              "title": "Nike Long Sleeve",
              "description": "DRI FIT DOUBLE KNIT ENGINEERED FABRICATION PROVIDES VISUAL QUES TO TECHNOLOGY, SPECIFICALLY IN THE SLEEVES WHERE LARGER HOLE MESH ALLOWS BREATHABILITY, ELBOW AREA IS ARTICULATED FOR MOBILITY, AND TAPERED SLEEVE FOR ZERO DISTRACTIONS. MOTION VENT ALLOWS THE TOP TO MOVE WITH YOU AND SHOULDER MOBILITY SEAM WITH BONDED BEMIS TAPING, FIT TO PROVIDE OPTIMAL RANGE OF MOTION WHEN PUTTING UP SHOTS. SOFT HAND KNIT WITH PLENTY OF STRETCH PROVIDES OPTIMUM COMFORT. SCHOOL NAME PRINTED ACROSS THE FRONT CHEST. CRAFTED FOR THE BASKETBALL ATHLETE. Imported.",
              "product_photo": "../static/img/products/product_3.jpg",
              "price": 120,
              "likes": 0
          },
          {
              "id": 4,
              "title": "Peter Millar College Stripe Stretch Jersey Polo",
              "description": "Lightweight, breathable, quick dry performance fabric stretches four ways for maximum comfort. 92% polyester, 8% spandex with a knit collar and UPF 50 sun protection. This solid polo shirt delivers no matter how hot the matchup. Imported.",
              "product_photo": "../static/img/products/product_4.jpg",
              "price": 112.98,
              "likes": 0
          },
          {
              "id": 5,
              "title": "Nike Game Jersey",
              "description": "100% Polyester. Imported.",
              "product_photo": "../static/img/products/product_5.jpg",
              "price": 100,
              "likes": 0
          }
      ]
    }
  },
  methods: {
   
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
