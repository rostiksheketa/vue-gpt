<script setup>
import router from "@/router";

const login = () => {
  localStorage.setItem("accessToken", "111");
  router.push("/");
};
</script>

<template>
  <div class="flex justify-center">
    <button
      @click="login"
      class="mt-10 bg-green-500 w-[100px] mx-auto hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
    >
      Login
    </button>
  </div>
</template>
