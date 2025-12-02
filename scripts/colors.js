// kleuren
const kleurSection = document.querySelector('section.kleuren');
const kleuren = ['groen', 'blauw', 'rood', 'roze', 'oranje', 'creme'];
const buttons = document.querySelectorAll('.kleur-button');

const tekstEl = document.getElementById('kleur-tekst');
const img1 = document.getElementById('kleur-img-1');
const img2 = document.getElementById('kleur-img-2');
const img3 = document.getElementById('kleur-img-3');

const contentByColor = {
  groen: {
    text: 'Waterhouse zijn schilderijen zijn bijna altijd afgebeeld in een open lucht, en dan vooral in een bos of bij de zee. We zien daarom vaak de groene kleuren terugkomen in de voor of achtergrond van zijn schilderijen. Deze kleur heb ik dan ook op de website als hoofd kleur gebruikt.',
    images: [
      'images/stijl/kleuren/groen/groen1.png',
      'images/stijl/kleuren/groen/groen2.png',
      'images/stijl/kleuren/groen/groen3.png'
    ]
  },
  blauw: {
    text: 'De donkerblauwe kleur zie je veel terugkomen op de schilderijen waar Waterhouse een zee heeft geschildert, met bijvoorbeeld sirenes. Ook maakt hij zijn achtergronden een stuk donkerder, zodat de aandacht naar de voorgrond gaat. ',
    images: [
      'images/stijl/kleuren/blauw/blauw1.png',
      'images/stijl/kleuren/blauw/blauw2.png',
      'images/stijl/kleuren/blauw/blauw3.png'
    ]
  },
  rood: {
    text: 'Je denkt bij Waterhouse misschien niet meteen aan de rode kleur, maar als je kijkt naar zijn schilderijen, zie je dat de vrouwen die hij schildert heel vaak iets fel roods hebben, bijvoorbeeld rode lippen, een bloem of een stuk textiel. Hierdoor gaat je oog direct naar het onderwerp dat het belangrijkst is.',
    images: [
      'images/stijl/kleuren/rood/rood1.png',
      'images/stijl/kleuren/rood/rood2.png',
      'images/stijl/kleuren/rood/rood3.png'
    ]
  },
  roze: {
    text: 'Waterhouse beeldde vaak roze bloemen af op zijn werk. Het geeft een sterk contrast met de groene natuur en de donkere achtergronden. Er is geen duidelijke reden te vinden voor Waterhouse zijn voorkeur naar roze bloemen, maar de roze roos staat wel symbool voor intense emoties en liefde.',
    images: [
      'images/stijl/kleuren/roze/roze1.png',
      'images/stijl/kleuren/roze/roze2.png',
      'images/stijl/kleuren/roze/roze3.png'
    ]
  },
  oranje: {
    text: 'Bij bijna alle vrouwelijke figuren die Waterhouse maakt, zijn hun haren oranje gekleurd. Waterhouse was getrouwd met Esther Kenworthy, zelf ook kunstenares. Zij is door Waterhouse vaak geschildert, soms met donker en soms met rossig haar. Het zou dus kunnen zijn dat ze voor veel van Waterhouse zijn schilderijen de inspiratie is geweest',
    images: [
      'images/stijl/kleuren/oranje/oranje1.png',
      'images/stijl/kleuren/oranje/oranje2.png',
      'images/stijl/kleuren/oranje/oranje3.png'
    ]
  },
  creme: {
    text: 'Waterhouse leefde in het eind van de 19e en het begin van de 20e eeuw. In deze tijd was de industriële revolutie nog bezig. Hier werd je als blanke dame als ideale schoonheid gezien. Waterhouse beeldt enkel alleen de meest blanke huidskleuren af op zijn werken. Het zou goed kunnen dat dit hiermee te maken had.',
    images: [
      'images/stijl/kleuren/creme/creme1.png',
      'images/stijl/kleuren/creme/creme2.png',
      'images/stijl/kleuren/creme/creme3.png'
    ]
  }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const kleur = button.dataset.kleur;

    kleurSection.classList.remove(...kleuren);
    kleurSection.classList.add(kleur);

    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    tekstEl.classList.add('fade-out');
    img1.classList.add('fade-out');
    img2.classList.add('fade-out');
    img3.classList.add('fade-out');

    setTimeout(() => {
      const data = contentByColor[kleur];
      if (!data) return;

      tekstEl.textContent = data.text;
      img1.src = data.images[0];
      img2.src = data.images[1];
      img3.src = data.images[2];

      tekstEl.classList.remove('fade-out');
      img1.classList.remove('fade-out');
      img2.classList.remove('fade-out');
      img3.classList.remove('fade-out');
    }, 300);
  });
});


// analyse
const analyseCarousel = document.querySelector('.analyse-carousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const analyseItems = document.querySelectorAll('.analyse-carousel li');
const analyseImg = document.getElementById('analyse-img');

prevBtn.addEventListener('click', () => {
  if (analyseCarousel.scrollLeft <= 0) {
    const maxScrollLeft = analyseCarousel.scrollWidth - analyseCarousel.clientWidth;
    analyseCarousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
  } else {
    analyseCarousel.scrollBy({ left: -300, behavior: 'smooth' });
  }
});


nextBtn.addEventListener('click', () => {
  const maxScrollLeft = analyseCarousel.scrollWidth - analyseCarousel.clientWidth;
  const currentScrollLeft = analyseCarousel.scrollLeft;

  if (currentScrollLeft + 300 >= maxScrollLeft) {
    analyseCarousel.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    analyseCarousel.scrollBy({ left: 300, behavior: 'smooth' });
  }
});

function changeImageSmooth(imgElement, newSrc) {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = newSrc;
    imgElement.style.opacity = 1;
  }, 500);
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const imgFile = entry.target.dataset.image;
      if (imgFile) {
        changeImageSmooth(analyseImg, `images/stijl/analyse/${imgFile}`);
      }
    }
  });
}, {
  root: analyseCarousel,
  threshold: 0.5
});

analyseItems.forEach(item => {
  observer.observe(item);
});
