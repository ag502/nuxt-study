import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword) {
  return instance.get('/products', { params: { name_like: keyword } })
}

export { fetchProductById, fetchProductsByKeyword }
