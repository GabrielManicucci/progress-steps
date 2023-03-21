const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")
const firstCicle = document.querySelector('.circle')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll(".circle")

prevButton.disabled = true
firstCicle.classList.add('active')



let comparisonNumber = 1

nextButton.addEventListener("click", () => {
  comparisonNumber++
  console.log(comparisonNumber)
  update()
})

prevButton.addEventListener("click", () => {
  comparisonNumber--
  update()
})

function update() {
  circles.forEach((circle, indice) => {
    if (indice < comparisonNumber) {
      circle.classList.add("active")
    } else {
      circle.classList.remove("active")
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`



  if (comparisonNumber === 1) {
    prevButton.disabled = true
  } else if (comparisonNumber === circles.length) {
    nextButton.disabled = true
  } else {
    prevButton.disabled = false
    nextButton.disabled = false
  }
}
