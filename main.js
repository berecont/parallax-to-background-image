/**
 * paRallax
 */
document.addEventListener("scroll", function() {
  var scrolledHeight = document.documentElement.scrollTop || document.body.scrollTop;
  var parallaxElement = document.querySelector('.parallax');
  var startPosition = 100; // Startposition für den Parallax-Effekt bei 100px

  if (parallaxElement) {
      var yPos;

      if (scrolledHeight > startPosition) {
          yPos = (scrolledHeight - startPosition) * 0.5; // Parallax-Effekt ab 100px Scroll-Position
      } else {
          yPos = 0; // Vor 100px bleibt yPos auf 0
      }

      parallaxElement.style.backgroundPosition = 'center calc(-100px + ' + yPos + 'px)'; // Beginnt bei 100px und bewegt sich ab 101px
  }
});
