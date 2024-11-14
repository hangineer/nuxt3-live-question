<template>
  <h2>產品內頁 productA</h2>
</template>

<script setup lang="ts">
// useRoute 用於取得目前路由的詳細資訊，包括路由參數、查詢參數、路由名稱等
const route = useRoute();

// 獲取路由查詢參數
// 例如 : 路由路徑為 /product/productA ， route.query 為空物件
// 例如 : 路由路徑為 /product/productA?q=產品名稱 ， route.query 為 { q:'產品名稱' }
console.log('route',route.query);

// 獲取包含路由路徑 ( path ) 、查詢參數 ( query ) 和 hash 的完整 URL
console.log('route.fullPath',route.fullPath);

// 獲取路由唯一名稱
console.log('route.name',route.name);
</script>

<style scoped></style>
