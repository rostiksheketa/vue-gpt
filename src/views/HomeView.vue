<script setup>
import HeroSection from "@/components/HeroSection.vue";
import JobsListing from "@/components/JobsListing.vue";
</script>

<template>
  <HeroSection />
  <JobsListing :limit="3" :showButton="true" />
</template>
