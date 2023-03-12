# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Links

- Solution URL: [https://www.frontendmentor.io/solutions/faq-accordion-challenge-semantic-html-cssonly-solution-NyHJnM2wfJ](https://www.frontendmentor.io/solutions/faq-accordion-challenge-semantic-html-cssonly-solution-NyHJnM2wfJ)
- Live Site URL: [https://gabrielmontplaisir.com/frontend-mentor/newbie/faq-accordion-card](https://gabrielmontplaisir.com/frontend-mentor/newbie/faq-accordion-card)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- [Vite](https://vitejs.dev/)
- [Google Fonts](https://fonts.google.com/)

## What I learned

I decided to try to tackle the **bonus challenge** to only create this in CSS. I feel like I've added an extra day's worth of work to myself by attempting a CSS-only accordion when it could have been done in a quarter with JS. Anyways, here are some things that stuck out:

Many of the resources for CSS-only accordions use DIVs, Lists, and in some cases Checkbox / Radio button inputs. However, I really wanted to attempt this with the semantic use of `<detail>` and `<summary>`, as they're a "built-in" HTML accordion box.

I've learned you can't really style `::marker` in CSS, so I had to add the custom arrow image to the `::after` pseudo-element, and style that one. As pseudo-elements are `position: inline` by default, you have to change it to `inline-block`.

This is also one of the first times where I've had to play with negative margins, which is a little weird to think about, as items typically stay within a container. Otherwise, I would usually opt for `position: absolute` and play with the element with the directional `top, bottom, right and left` attributes.

I also learned to use the `filter: drop-shadow()` attribute for the cube image, as typically shadows are created with `box-shadow`. However, in this case, the `box-shadow` was appearing behind the transparent background and not producing the desired result.

Lastly, I wanted to animate the accordion a little bit. I made the arrow rotate 180 degrees when the element opens, and made the answer text slide downwards. This effect is much harder to achieve when using CSS-only options. I therefore had to "limit" the size of the answer box. If I tried using a `max-height: 99rem`, then the animation sometimes only worked one out of five times, or became "choppy". For that reason, I had to limit it to about 10rem, with the caveat that if a question was added later, the developer would have to increase the `max-height` value. If there's a way to make it a little more responsive, I'm all ears!

## Continued Development

**March 11, 2023**

Been wanting to learn SASS / SCSS for a little while. Decided this would be a good project to try it out. Converted my CSS files to `.scss` and create some template functions / mixins.

## Author

- Website - [https://gabrielmontplaisir.com](https://gabrielmontplaisir.com)
- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
