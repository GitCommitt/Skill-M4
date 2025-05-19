const data = [
  {
    id: '0',
    src: 'https://cdn1.epicgames.com/offer/fn/FNBR_35-00_C6MS1_EGS_Launcher_KeyArt_FN_Blade_2560x1440_2560x1440-8fd35061502b51f1df276474d28e7f59'
  },
  {
    id: '1',
    src: 'https://cdn-0001.qstv.on.epicgames.com/RDFbbSzbAFQuelARyV/image/landscape_comp.jpeg'
  },
  {
    id: '2',
    src: 'images/pc2.png'
  },
  {
    id: '3',
    src: 'images/pc1.png'
  }]


const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");
let imgCount = 0;

function fetchImage() {
  if (imgCount !== 20) {
    setTimeout(() => {
      for (let i = imgCount; i < imgCount + 5; i++) {
        const image = document.createElement("img");
        image.src = data[i].src;
        rootElement.append(image);
      }
      imgCount += 5;
    }, 500)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  };

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchImage()
      }
    });
  }

  let observer = new IntersectionObserver(handleIntersect, options);

  observer.observe(loader);
})