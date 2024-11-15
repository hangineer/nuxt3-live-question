<script setup>
import axios from "axios";
const route = useRoute();
const router = useRouter();
const roomsList = ref([]);

// 使用 fetch 或 axios 串接 前台房型 API ( GET )
// $fetch: CLient 端打 API 可以用
// useFetch, useAsyncData(useFetch + $fetch 包裝起來的 composable) 也可以
const apiUrl = "https://nuxr3.zeabur.app/api/v1/rooms"

// ES6 Fetch
// fetch(apiUrl)
// .then((res) => {
//   if (!res.ok) {
//     throw new Error("取得房型資料失敗");
//   }
//   return res.json();
// })
// .then((data) => {
//   const { result } = data;
//   console.log('result',result)
//   roomsList.value = result;
//   console.log('roomsList',roomsList.value);
// })
// .catch((err) => {
//   console.log('發生錯誤',err);
// })

// axios
axios.get(apiUrl)
.then((res) => {
  console.log('res',res)
  roomsList.value = res.data.result;
})
.catch((err) => {
  console.log('發生錯誤',err);
})

</script>

<template>
  <div>
    <h1>房型頁面：{{ route.path }}</h1>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6 col-lg-3" v-for="room in roomsList" :key="room.id">
          <div class="card h-100 shadow-sm" @click="router.push('/room/_id')">
            <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
            <div class="card-body d-flex flex-column">
              <h3 class="card-title">{{ room.name }}</h3>
              <p class="card-text flex-grow-1">{{ room.description }}</p>
              <ul class="list-unstyled">
                <li><strong>面積:</strong> {{ room.areaInfo }}</li>
                <li><strong>床型:</strong> {{ room.bedInfo }}</li>
                <li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
                <li><strong>價格:</strong> {{ room.price }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
  max-width: 100%;
}
</style>
