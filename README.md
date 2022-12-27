# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://gabrielmontplaisir.github.io/frontend-mentor/](https://gabrielmontplaisir.github.io/frontend-mentor/)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Vite](https://vitejs.dev/)
- [Google Fonts](https://fonts.google.com/)

## What I learned

As this was my first challenge for Frontend Mentor, I admittedly thought reproducing a component was going to be much easier. There seems to be a "clear cut" way to reproduce a challenge perfectly. I'm also not sure whether the goal is to perfectly reproduce the component either. When I first attempted the challenge, I managed to create the desktop version quite easily. However, transforming it to the mobile version proved challenging. Afterwards, creating the mobile version would also occasionally make the desktop version break (I have a tendency to try to make things as efficient as possible). To some extent, they still are (See [Continued Development](#continued-development)).

## Continued development

December 26, 2022 (v1): I finally finished creating the mobile version, and I believe this is as close as I will get to the final product. I'm not sure whether the following is "correct" usage of `aria-label` however:

```
<del><span aria-label="Previous Price">$169.99</span></del>
```

My other challenge seems to revolve around when to transition to the mobile version of the component. It's fairly obvious that 375px is too small as reducing the screen size really crunches the picture and the writing. Perhaps as soon as the screen reaches 600px, then it should transition to mobile?

December 26, 2022 (v2): I added a <span></span> to the `aria-label` as I got an HTML validation error. Hoping this will solve the problem. Otherwise, I did comment out an `.sr-only` class in my css file. I will probably use that. I also made the media query transition to the mobile version at 600px. I couldn't stand the crunching!

## Useful resources

- After tackling this challenge myself, I decided to "search" for some previous solutions submitted by users on Frontend Mentors. I found a lot of helpful information from [vcarames](https://www.frontendmentor.io/profile/vcarames) on the following solution: [https://www.frontendmentor.io/solutions/product-preview-card-component-O-qdX1G_xZ](https://www.frontendmentor.io/solutions/product-preview-card-component-O-qdX1G_xZ)

## Author

- Frontend Mentor - [@GabrielMontplaisir](https://www.frontendmentor.io/profile/GabrielMontplaisir)
- LinkedIn - [@GabrielMontplaisir](https://www.linkedin.com/in/gabriel-montplaisir/)
