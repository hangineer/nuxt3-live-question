<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <!-- 在 app.vue 以 <NuxtPage /> 顯示新增的 page -->
      <NuxtPage />
    </NuxtLayout>

    <!-- 以下為額外練習 -->
    <!-- <ul class="list">
      <li>
        <NuxtLink to="/about" target="_blank">
          關於 ( 使用 <code>target="_blank"</code> )
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://www.google.com/" external>
          關於 ( 使用 <code>外部連結</code> )
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>
