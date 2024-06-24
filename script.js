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



//tenho que imprementar o codigo de mostrar em quais banners estao atraver da classe checked no html