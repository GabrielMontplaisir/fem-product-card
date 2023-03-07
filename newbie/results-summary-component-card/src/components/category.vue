<!-- This is the category component, which will generate list items for our categories container.
Imagine that this is a "continuation" of our HTML, which can be reused multiple times in its parent component.

In App.vue for example, we could add multiple category components by calling <category> <category>, etc.
In this case however, we use a v-for to repeat it by the amount of data we have in our JSON.
-->

<!-- For our component, we're going to take three properties: category, score and icon. These will be fed into category component via App.vue -->
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

<!-- This template is for the list items only, which will be repeated in App.vue. Imagine that this is a continuation of our HTML from App.vue 
  Notice how I use the "category" from the JSON to add a class to <li> (for the background-color and color attributes)
  Then, I can call {{ category }} and {{ score }} which will be fed to the component via App.vue.
-->
<template>
  <li v-bind:class="category">
    <img class="icon" v-bind:src="icon" alt="" aria-hidden="true" />
    <h3 class="category-title">{{ category }}</h3>
    <p class="category-score">{{ score }} <span> / 100</span></p>
  </li>
</template>

<!-- Use "scoped" if it only affects this component 
This could be styled in style.css, but since these styles only affect these list items, it's simpler to add it here.
-->
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
