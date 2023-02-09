# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued Development](#continued-development)
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

## Continued Development

**February 9, 2023**
I reworked the website a little bit to make it as responsive as possible without the bugginess from certain widths. I wanted to make sure the image didn't get too large at certain widths (particularly aroung 768px to 1200px), so added a second media query to have a maximum width on the image. I then added a `max-width: 100%` to allow the image to grow, and added `width: 50%` so it would stay within the screen space. I would love to know if there's an easy way to accomplish it without relying on grid. I also made the social media icons slightly larger to accommodate the larger screen sizes.

For a while, I was trying to avoid using `grid` in the `body` in favour of margin and padding. However, using `grid` with `place-content: center` provides a different, but more accurate width of the content than using `margin-inline: auto`. I resolved myself to using it.

## Author

- Website - [https://gabrielmontplaisir.com](https://gabrielmontplaisir.com)
- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
