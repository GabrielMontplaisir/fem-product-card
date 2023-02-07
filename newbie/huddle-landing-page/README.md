# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-and-accessible-huddle-landing-page-using-flex-and-grid-nTX4v0rMkY](https://www.frontendmentor.io/solutions/responsive-and-accessible-huddle-landing-page-using-flex-and-grid-nTX4v0rMkY)
- Live Site URL: [https://gabrielmontplaisir.com/frontend-mentor/newbie/huddle-landing-page](https://gabrielmontplaisir.com/frontend-mentor/newbie/huddle-landing-page)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

## What I learned

Implemented some [Font Awesome](https://fontawesome.com/) icons. Instead of applying my own CSS styles to the border, I decided to try to override the `--fa-border-<style>` defaults. This worked well. However, you quickly realize that the icons aren't all the same size. I then tried to apply the `fa-fw` class, which gives a constant width to all icons, but it doesn´t play well with the `fa-border` class. Instead, I set a constant `width: 2.125rem` (around 34px) and this fixed the border issues.

I was having trouble having everything blend nicely at certain widths (from 860px to 1200px mostly). I was trying to avoid having the image scale to 100%, but I also didn't want to limit the desktop version. I ended up creating two separate media queries, and then setting everything in a grid and adjusting the font-sizes to be quasi-pixel perfect with my dimensions. I'm sure there's a better way to do this, but I haven't practiced my HTML + CSS in a while, so I may leave it for later.

## Author

- Website - [https://gabrielmontplaisir.com](https://gabrielmontplaisir.com)
- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
