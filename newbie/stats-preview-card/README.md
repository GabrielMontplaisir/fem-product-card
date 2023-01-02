# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

## Links

- Solution URL: [https://www.frontendmentor.io/solutions/stats-preview-card-component-MP8lxBGZc3](https://www.frontendmentor.io/solutions/stats-preview-card-component-MP8lxBGZc3)
- Live Site URL: [https://gabrielmontplaisir.com/frontend-mentor/newbie/stats-preview-card/](https://gabrielmontplaisir.com/frontend-mentor/newbie/stats-preview-card)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Gridbox
- [Vite](https://vitejs.dev/)
- [Google Fonts](https://fonts.google.com/)

## What I learned

I learned to play w/ multiple media queries in order to make the card truly responsive to the width of the page. The image would distort in funny ways, which required me to play with margins for the info text.

I was trying to find a way to use calc(), max(), min() or clamp() to play with margins, but it didn´t seem to want to play nicely. My biggest problem with this challenge was to make the card responsive to the width of the page. More specifically:

- The desktop `.info {margin: 4rem}`. When you start shrinking the page width, the `img` starts shrinking in height.
- When that starts happening (around 990px) I want to make the `.info { margin: auto 4rem}`. I was looking for a way to do this while avoiding creating a second media query. I eventually gave up and simply created the second media query.

Then, the `img` started distorting AGAIN around 880px. At this point, I revert to the mobile version of the website, which is not ideal. Ideally, I would like to STOP the vertical `margin: auto` and have it stay at that value, but then reduce the horizontal `margin` instead.

As the mobile image was too small, I had to play with margins again and set a max width to the card when it's the mobile version. This seemed to work well.

As an added "challenge", I opted to use gridbox for the statistics. I hadn't played with them yet, and it worked quite well to create identical columns, in a way that Flexbox didn't. However, I did revert to Flexbox for the mobile version, as gridbox didn't want to play nicely. **May return to this later to try again.**

## Continued Development

- Find a way to adjust the margin vertically automatically without relying on media queries (ideally with min(), max(), calc() or clamp())

- Once the image starts distorting again, find a way to adjust the horizontal margin instead and preserve the vertical margin.

**If anyone has a way to accomplish this, please let me know! As it stands, the card is still functional and complete. I just feel like there are better ways to accomplish my goals. For now, I solved the problem by creating a second media query when it's 990px, then turn it into the mobile version at 880px.**

## Author

- Website - [https://gabrielmontplaisir.com](https://gabrielmontplaisir.com)
- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
