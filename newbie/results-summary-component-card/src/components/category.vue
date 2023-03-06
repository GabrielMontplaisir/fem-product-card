<script>
export default {
  name: "Category",
  props: {
    category: String,
    score: Number,
    icon: String,
  },
};
</script>

<template>
  <li v-bind:class="category">
    <img class="icon" v-bind:src="icon" />
    <h3 class="category-title">{{ category }}</h3>
    <p class="category-score">{{ score }} <span> / 100</span></p>
  </li>
</template>

<!-- Use "scoped" if it only affects this component -->
<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
}

li p {
  margin-left: auto;
}

li span {
  padding-left: 0.25rem;
}
</style>
