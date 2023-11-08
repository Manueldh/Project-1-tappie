// Hier is een functie geschreven wat ervoor zorgt dat het checkt of het element zichtbaar is op de telefoon
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  // Deze code is voor de functie, de class wordt hiermee opgeroepen en de tijd wordt hier aangegeven.
  let valueDisplays = document.querySelectorAll(".number-up");
  let interval = 2000;
  
  // Dit zorgt ervoor dat de functie pas begint wanneer het element zichtbaar is.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const valueDisplay = entry.target;
        let startValue = 0;
        let endValue = valueDisplay.getAttribute("data-eind-num");
        let duration = Math.floor(interval / endValue);

        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue >= endValue) {
            clearInterval(counter);
          }
        }, duration);
        observer.unobserve(valueDisplay); // Dit stukje zorgt ervoor dat de code stopt wanneer het eenmaal zichtbaar is geweest en de functie heeft gewerkt.
      }
    });
  });
  
  // Observe each valueDisplay element
  valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
  });



  // Ik heb hiervoor een tutorial van Coding Artist gevolgd: https://www.youtube.com/watch?v=FaMW-CtExrs&ab_channel=CodingArtist
  // Na deze tutorial heb ik met behulp van chatGPT ervoor gezorgt dat de functie pas begint wanneer het in beeld is. Dit is gedaan met de observer API.