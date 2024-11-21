<script setup>
// navigateTo("/register");

// ❌ $fetch 會造成重複請求的問題，SSR 與 CSR 都會發送，且結果還不同（因 randomuser.me 每次打的結果是隨機的）
// const data = await $fetch("https://randomuser.me/api/");
// const [ result ] = data.results;
// console.log("result", result);

// ✅ 可以使用 useFetch, useAsyncData 替代
// useAsyncData + $fetch
const { data } = await useAsyncData("getRandomuser", () => $fetch("https://randomuser.me/api/"));
// console.log("data", data);
const [result] = data.value.results;
console.log('result', result);

// useFetch
// const { data } = await useFetch("https://randomuser.me/api/");
// const [result1] = data.value.results;
// const result2 = data.value.results;
// console.log('result 1',result1)
// console.log('result 2',result2)
</script>

<template>
  <div>
    <img
      :src="result.picture?.large"
      :alt="`${result.name.first} ${result.name?.last}`"
    />
    <h1>{{ result.name?.first }} {{ result.name?.last }}</h1>
    <h3>Email: {{ result.email }}</h3>
  </div>
</template>

<style scoped></style>
