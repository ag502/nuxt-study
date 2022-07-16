<template>
  <div>
    <p>메인 페이지 입니다</p>
    <ProductList />
  </div>
</template>

<script>
import axios from 'axios'
import ProductList from '~/components/ProductList.vue'

export default {
  name: 'MainPage',

  components: { ProductList },

  async asyncData() {
    const { data } = await axios.get('http://localhost:8000/products')
    return { products: data }
  },
}
</script>

<style></style>
