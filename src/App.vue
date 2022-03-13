<template>
  <div class="wrapper">
    <TheHeader :links="links" />
    <div class="wrapper-content">
      <div class="container">
        <h1>{{ title }}</h1>
        <router-view />
      </div>
    </div>
    <TheFooter :links="links" />
  </div>
</template>

<script>
import TheHeader from "@/components/Header";
import TheFooter from "@/components/Footer";
import { links } from "@/_cinfig";

export default {
  data() {
    return {
      links: links,
    };
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss"></style>
