<!-- App.vue is our main Vue component which will build most of the HTML.
Since we're using our JSON file to generate the data in our website, we need to import it.
Since some of our HTML elements are repeated (like the Summary items), we create a Vue component (this one is called category).
-->

<script>
import json from "../assets/data/data.json";
import category from "./components/category.vue";

export default {
  // Name of this component, and we return the json.
  name: "app",
  data() {
    return { json };
  },

  // We imported our category component. Now we have to call it to use it.
  components: { category },

  // I thought I'd push the bar a little further and use the JSON data to calculate the average.
  // Created a function to sum the JSON scores, then return it by the JSON length.
  // This function is called "average", which we can call in the template as {{ average }}
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

<!-- Any HTML we want to feed to feed into our webpage must be wrapped around a <template> element. -->

<template>
  <section class="result-section">
    <h1>Your Result</h1>

    <!-- Call our {{ average }} function as outline above. -->
    <p class="score">
      <span>{{ average }}</span> of 100
    </p>
    <p class="rank">Great</p>
    <p>You scored higher than 65% of the people who have taken these tests.</p>
  </section>
  <section class="summary-section">
    <h2>Summary</h2>
    <ul class="categories-container">
      <!-- We use our <category> component, and repeat it by the amount of data in our JSON (using v-for).
        Since the <category> component takes three properties, we're going to use some v-bind to pass our JSON into it.

        For the icon images, keep in mind that it is relative to the index.html which will be built into the PWD folder (./results-summary-component-card/)
      -->
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
