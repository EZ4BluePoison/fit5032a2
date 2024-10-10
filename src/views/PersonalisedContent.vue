<script setup>
import { ref, onMounted, nextTick } from 'vue'
import $ from 'jquery'
import 'datatables.net'
import mockData from '@/assets/MOCK_DATA.json' // 导入 JSON 数据

// 响应式数据存储
const personalisedContent = ref([])

onMounted(async () => {
  try {
    // 直接使用导入的数据初始化内容
    personalisedContent.value = mockData

    // 等待 Vue 完成 DOM 渲染
    await nextTick()

    // 初始化 DataTables
    $('#personalisedContentTable').DataTable({
      paging: true,
      searching: true,
      ordering: true,
      pageLength: 10
    })
  } catch (error) {
    console.error('Error loading data:', error)
  }
})
</script>

<template>
  <div>
    <!-- Header with Navigation -->
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/help">Help</router-link>
        <router-link to="/personalized-content">Personalized Content</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/resources">Resource Center</router-link>
        <router-link to="/FireLogin">Firebase Login</router-link>
      </nav>
    </header>

    <!-- Main Content (Personalized Content) -->
    <main>
      <h2>Your Personalised Content</h2>

      <!-- 使用 DataTables 的表格来显示个性化内容 -->
      <table id="personalisedContentTable" class="display">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="content in personalisedContent" :key="content.id">
            <td>{{ content.id }}</td>
            <td>{{ content.title }}</td>
          </tr>
        </tbody>
      </table>
    </main>

    <!-- Footer -->
    <footer>
      <p>
        &copy; If you need any help, please contact
        <a href="mailto:zhee0056@student.monash.edu">zhee0056@student.monash.edu</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* Header and Navigation Styles */
header {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
}

/* Personalized Content Styles */
h2 {
  color: #2e86c1;
}

main {
  padding: 20px;
  line-height: 1.6;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

/* Footer Styles */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
}
</style>
