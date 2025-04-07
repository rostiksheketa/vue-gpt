<script setup>
import { RouterLink, useRoute } from "vue-router";
import router from "@/router";

const isActiveLink = (routePath, shouldIncludePath = false) => {
  const route = useRoute();

  if (shouldIncludePath) {
    return route.path.includes(routePath);
  }

  return route.path === routePath;
};

const logOut = () => {
  localStorage.removeItem("accessToken");
  router.push("/log-in");
};
</script>

<template>
  <nav class="flex bg-green-700 border-b border-green-500">
    <div class="w-full px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-between md:items-stretch">
          <div>
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md'
                ]"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/jobs"
                :class="[
                  isActiveLink('/jobs', true)
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md'
                ]"
              >
                Jobs
              </RouterLink>
              <RouterLink
                to="/add-job"
                :class="[
                  isActiveLink('/add-job') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md'
                ]"
              >
                Add Job
              </RouterLink>
            </div>
          </div>
          <span
            @click="logOut"
            class="text-white px-3 py-2 rounded-md cursor-pointer"
            >Log out</span
          >
        </div>
      </div>
    </div>
  </nav>
</template>
