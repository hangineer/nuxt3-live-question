export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  // API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
  // 使用 ES6 fetch() 或是 axios.get() 串接 API
  // 切換 isLoading 狀態
  async function getData() {
    const res = await fetch("https://nuxr3.zeabur.app/api/v1/home/news/");
    if (!res.ok) {
      throw new Error(res.status);
    }
    try {
      const data = await res.json();
      newsList.value = data.result;
      isLoading.value = true;
    } catch (err) {
      console.error(err.message);
    } finally {
      isLoading.value = false;
    }
  };
  return {
    newsList,
    isLoading,
    getData,
  };
};
