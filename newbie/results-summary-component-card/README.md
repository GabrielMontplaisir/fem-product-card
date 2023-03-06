# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)
- [Author](#author)

## Links

- Solution URL: []()
- Live Site URL: [https://gabrielmontplaisir.com/frontend-mentor/newbie/results-summary-component-card](https://gabrielmontplaisir.com/frontend-mentor/newbie/results-summary-component-card)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Variable Fonts (Hanken Grotesk, provided by FEM)
- JSON Data (Provided by FEM)
- [Vite](https://vitejs.dev/)
- [VueJS](https://vuejs.org/)
- [Google Fonts](https://fonts.google.com/)

## What I learned

For a "newbie" project, I feel like this is the most complex project I've undertaken thus far.

I really wanted to take advantage of implementing the data.json file provided by FEM and use it in the project instead of hard-coding the data in the HTML. At first, I was going to use some vanilla JS with some Jquery to get it done. Then, I was thinking of using the JS `FetchAPI()` to get the JSON data and add it to my HTML. This too proved to be a little more complex than inticipated. After considerable research, it almost felt simpler to use a JS framework. And honestly, I'm glad I did. I used VueJS, and it was easier than I thought.

In the initial HTML file, in the `<body>` tag, you want to add the following:

```
<main id="app"></main>
<script type="module" src="./src/main.js"></script>
```

Then, in the `main.js` file, you want to add the following:

```
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");
```

Everything else is done via the `App.vue` file.

Any HTML you want to add from a `Vue` file is added inside `<template>` elements. This is regular HTML, until you want to add components (HTML you want to repeat on your website). In this case, it's pretty clear you want to repeat the "Summary" items, as these are the data elements you're pulling from the JSON file.

I created a `<category>` component, and added `v-bind` attributes for each of the data.json objects. `v-bind` designates attributes, while `v-html` designates actual text or html you want to add to your element.

I wanted to push the bar a little bit further and make the result also be representative of the JSON data. I created a Math function in the `computed` section and called it `average`, so it could be called in the template.

In the `Category.vue` file, this was going to be where I could get repeated list items to be referenced in the `App.vue` file. I started by exporting the JSON data, then created my template for `<li>` items. You can see my use of `v-bind` to reference the `src` for the image. (I had to cheat a little bit and change the file path slightly for the icons in the JSON file to work properly). **Keep in mind that the image source is relative to the index.html file, not the Vue file.** To make it easier to implement CSS later for the different categories, I also added a `v-bind:class="category"`. Then, I call the `{{ category }}` and `{{ score }}`.

As the list items were mostly similar asides for the colours, I added the `<style scoped>`. Scoped simply means it ONLY affects that component, and styled my list items, minus the colours which would be added later in the `style.css` file.

Lastly, I noticed that the project also came with some variable fonts. I wanted to try it out (it was really overkill as this project didn´t need variable fonts), just to learn how to use it a little bit. As they're still fairly new, but only supported for modern browsers, you still want to link the "static" version in the html file:

```
<link
      href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap"
      rel="stylesheet"
    />
```

Then, in your CSS, you want to call a `@Font Face`, and check for `@support` for font variation settings:

```
@supports (font-variation-settings: normal) {
  @font-face {
    font-family: "Hanken Grotesk", sans-serif;
    src: url("./assets/fonts/HankenGrotesk-VariableFont_wght.woff2")
        format("woff2") tech("variations"),
      url("./assets/fonts/HankenGrotesk-VariableFont_wght.woff2")
        format("woff2-variations");
    font-weight: 500 800;
  }
}
```

Even though the project came with a `.ttf` font, it's very heavy. You can compress it by converting it to a `woff2` font. See below for conversion tools.

The src has a `tech("variations")` option and a `woff2-variations` option because some browsers support one, but not the other. This is a fallback.

The font-weight varies from one variable font to the next. However, this project only required between the values of 500 and 800, so only input those.

## Useful resources

List of useful resources:

- [Introduction to Variable Fonts](https://web.dev/variable-fonts/)
- [Variable Fonts Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
- [Wakamaifondue](https://wakamaifondue.com/) -- Useful to see what variations are supported in your variable font.
- [Vfonts](https://v-fonts.com/) -- To download more variable fonts
- [TTF to WOFF2 Converter](https://everythingfonts.com/ttf-to-woff2) -- To maintain the variable fonts options, this is a good converter.
- [CLI compression for fonts](https://github.com/google/woff2)

## Author

- Website - [https://gabrielmontplaisir.com](https://gabrielmontplaisir.com)
- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
