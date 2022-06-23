/*=============== SCROLL REVEAL ANIMATION ===============*/
Speech bubble SVG code:

<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 132 136">
<defs>
<style>
	path { 
		fill: white;
		stroke: #000;
		stroke-width: 4;
		stroke-linejoin: bevel;
		vector-effect: non-scaling-stroke;
	}
</style>
</defs>
<path d="M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z"/></svg>

Whisper bubble SVG code:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" preserveAspectRatio="none">
	<defs>
<style>
	path { 
		fill: white;
		stroke: #ccc;
		stroke-width: 4;
		stroke-linejoin: bevel;
		stroke-dasharray: 20,10;
		vector-effect: non-scaling-stroke;
	}
</style>
</defs>
<path d="M372.8,14.3c-196.9,0-356.2,84.9-356.2,176.6c0,71.8,98.7,132.9,236,156C260.8,405.6,269,439,312,471c-22-49-30-78-13-118
c6.6,0,66.6,3.3,73.8,3.3c196.9,0,356.2-74.2,356.2-165.9S569.7,14.3,372.8,14.3z"/>
</svg>

Electric speech bubble:




const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 900,
  delay: 200,
  // reset: true
})

sr.reveal(`.home__img, .new__container, .footer__container`)
sr.reveal(`.home__data`, {delay: 300})
sr.reveal(`.giving__content, .gift__card`,{interval: 70})
sr.reveal(`.celebrate__data, .message__form, .accordion__container, .footer__img1`,{origin: 'left'})
sr.reveal(`.celebrate__img, .message__img, .footer__img2`,{origin: 'right'})