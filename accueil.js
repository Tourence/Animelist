// stock les differents elements dans des variables
const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelector(".logo");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");

// instruction pour attendre que la page soit chargée
window.addEventListener("load", () => {
  // permet de gerer l ordre des animations dans le temps
  const TL = gsap.timeline({ paused: true });

  // affiche le titre avec une durée de 1 seconde pour chaque mot, descend le titre de 50,
  // passe d une opacité de 0 a 1 avec une courbe d acceleration ("ease") de type "power2.out".
  // le dernier parametre permet d attendre 0.3 sec entre chaque mot
  TL.staggerFrom(
    titreSpans,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3
  )
    // a la place de power2.out on peut avoir power1,3,4.out ou back, elastic, bounce et on peut aussi faire une courbe d acceleration custom
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
    .from(l1, 1, { width: 0, ease: "power2.out" }, "-=2")
    .from(l2, 1, { width: 0, ease: "power2.out" }, "-=2");

  TL.play();
});

const customCurve = (time) => {
  return time * time; // courbe de type power2.out
};
