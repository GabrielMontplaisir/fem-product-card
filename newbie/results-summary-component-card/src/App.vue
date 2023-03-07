<script>
import json from "../assets/data/data.json";
import category from "./components/category.vue";

export default {
  name: "app",
  data() {
    return { json };
  },
  components: { category },
  computed: {
    average: function () {
      var sum = 0;
      json.forEach((e) => {
        sum += e.score;
      });
      return Math.floor(sum / json.length);
    },
  },
};
</script>

<template>
  <section class="result-section">
    <h1>Your Result</h1>
    <p class="score">
      <span>{{ average }}</span> of 100
    </p>
    <p class="rank">Great</p>
    <p>You scored higher than 65% of the people who have taken these tests.</p>
  </section>
  <section class="summary-section">
    <h2>Summary</h2>
    <ul class="categories-container">
      <category
        v-for="data in json"
        v-bind:category="data.category"
        v-bind:score="data.score"
        v-bind:icon="data.icon"
      />
    </ul>
    <button>Continue</button>
  </section>
</template>
