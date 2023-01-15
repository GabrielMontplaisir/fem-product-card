# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## Links

- Solution URL: [https://www.frontendmentor.io/solutions/single-price-grid-component-4CRAqvgRKL](https://www.frontendmentor.io/solutions/single-price-grid-component-4CRAqvgRKL)
- Live Site URL: [https://gabrielmontplaisir.com/frontend-mentor/newbie/single-price-grid](https://gabrielmontplaisir.com/frontend-mentor/newbie/single-price-grid)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/)
- [Google Fonts](https://fonts.google.com/)

## What I learned

As the title implies that it's the component is a "grid", I chose to do the whole challenge while only using `grid` to organize item position. It was a little tougher than I was expecting (as I often rely on `flexbox`), but I think it was worth it.

I designed the whole thing to be mobile-first. After some experimenting, the natural spot to expand into the desktop version was around 700px. I learned to span the top row by two using `grid-column: 1 / span 2`, and modifying the `grid` (template) into a 2x2 box as opposed to solely making the `grid-auto-flow: column`.

From there, everything else just fell into place. I'm used to using clamp() at this point to play with font-sizes without needing to call them again in the media queries. I also challenged myself to **NOT** use `px` units whatsoever.

## Author

- Website - [https://gabrielmontplaisir.com](https://gabrielmontplaisir.com)
- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
