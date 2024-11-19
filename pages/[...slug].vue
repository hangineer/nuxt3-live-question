<template>
  <div>
    <h1>404 Not Found</h1>
    <p>你所請求的頁面：{{ route.params.slug.join('/') }}，不存在</p>
  </div>
</template>

<script setup>
const route = useRoute();

const event = useRequestEvent(); // 獲取當前請求的事件
console.log('event', event);

// 設定 HTTP 404 狀態碼
setResponseStatus(event, 404);

// useRequestEvent 和 setResponseStatus 只能在伺服器端使用
// 例如在 server/ 文件夾中的 API 路由或 Middleware

</script>

<style scoped>
h1 {
  color: red;
  text-align: center;
}
p {
  text-align: center;
}
</style>