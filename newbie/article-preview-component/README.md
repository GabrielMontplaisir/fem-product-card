# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Links

- Solution URL: []()
- Live Site URL: [https://gabrielmontplaisir.com/frontend-mentor/newbie/article-preview-component](https://gabrielmontplaisir.com/frontend-mentor/newbie/article-preview-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS / SCSS
- Javascript
- [Vite](https://vitejs.dev/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com)

## What I learned

Second project using SASS and SCSS. I decided to try using a `@mixin` for the headers and the author name.

I wanted the tooltip to be "super-responsive" and make it scroll horizontally based on the size of the screen. This worked well when there wasn't enough padding on the right side. However, I wanted to make the arrow "stick" in one spot, and have the rest of the tooltip scroll horizontally once there was enough space (about `900px`). I eventually resolved myself to create multiple media queries and make it jump from one spot to the next. If anyone could guide me on how I could make it scroll horizontally from smaller screens to overlapping on larger ones, I'm all ears.

Styling the tooltip properly was also a bit of a struggle as the reference images actually shrink the card when the tooltip is toggled. Instead, I wanted to maintain the same height while centering the text to the button. I eventually found a "happy middle".

I took advantage of the different "roles" and attributes (`aria-expanded`) applied to the Share section and the buttons for `transitions` and the JS, instead of creating a `.hidden` class.

The Javascript was surprisingly the simple part. I added a couple event listeners to check whether the user clicks on the button, or outside the tooltip. For accessibilility reasons, tooltips also need to be allowed to be toggled "off" by pressing the `ESC` key.

## Author

- Website - [https://gabrielmontplaisir.com](https://gabrielmontplaisir.com)
- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
