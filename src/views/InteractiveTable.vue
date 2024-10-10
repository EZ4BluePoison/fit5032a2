<template>
  <div>
    <h2>Table 1: User Data</h2>
    <table id="userTable" class="display">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>

    <h2>Table 2: Product Data</h2>
    <table id="productTable" class="display">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productData" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'datatables.net-dt/css/jquery.dataTables.css'
import $ from 'jquery'
import 'datatables.net'

// Mock 用户和产品数据（你可以用 Mockaroo 生成）
const userData = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
])

const productData = ref([
  { id: 1, productName: 'Product A', price: '$100' },
  { id: 2, productName: 'Product B', price: '$200' },
  { id: 3, productName: 'Product C', price: '$300' }
])

onMounted(() => {
  $('#userTable').DataTable({
    paging: true,
    searching: true,
    ordering: true,
    pageLength: 10 // 每页显示10条
  })

  $('#productTable').DataTable({
    paging: true,
    searching: true,
    ordering: true,
    pageLength: 10 // 每页显示10条
  })
})
</script>

<style scoped>
table {
  width: 100%;
  margin-bottom: 20px;
}

h2 {
  margin-top: 30px;
}
</style>
