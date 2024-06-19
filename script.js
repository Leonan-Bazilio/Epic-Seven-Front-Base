/* <section>
      <div class="container">
        <h1 class="titleBanners">Banners atuais</h1>
        <div class="carousel-container">
          <div class="carouselBanner">
            <img src="./img/characters/epic-sseven.webp" alt="" />
          </div>
        </div>
        <div class="carouselArrows">
          <button class="prev">&lt;</button>
          <button class="next">&gt;</button>
        </div>
      </div>
    </section>*/

const carouselBanners = document.querySelectorAll(".carouselBanner")


console.log(carouselBanners)
let count = 0

function updateCarouselBanners() {
  carouselBanners.forEach((banner, index) => {
    banner.style.transform = `translateX(${(count) * 100}%`
  })
}

document.querySelector(".next").addEventListener("click", () => {
  if (count > -2) {
    count -= 1
  } else {
    count = 0
  }
  updateCarouselBanners()
})

document.querySelector(".prev").addEventListener("click", () => {
  if (count < 0) {
    count += 1
  } else {
    count = -2
  }
  updateCarouselBanners()
})



updateCarouselBanners()