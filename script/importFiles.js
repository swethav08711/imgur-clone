let contest = document.querySelector(".sectio_main_one")
let button = document.querySelector(".button")
let more = document.querySelector(".button .show-more")
let less = document.querySelector(".button .show-less")
const inital = {
  showAll: true,
}

button.addEventListener("click", () => {
  console.log("clicked")
  if (inital.showAll) {
    showButton(less)
    showButton(more, false)
    contest.classList.remove("gradient", "maxHeight")
  } else {
    showButton(less, false)
    showButton(more)
    contest.classList.add("gradient", "maxHeight")
  }
  inital.showAll = !inital.showAll
})
function showButton(button, visible = true) {
  !visible ? button.classList.add("d-none") : button.classList.remove("d-none")
}
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
let itemCount1 = 1

window.addEventListener("scroll", () => {
  console.log(
    window.scrollY,
    window.innerHeight,
    document.documentElement.scrollHeight
  )
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    itemCount1++
    get(itemCount1)
  }
})
get(itemCount1)
async function get(itemCount) {
  let g = await fetch(
    `https://api.imgur.com/3/gallery/top/top/day/${itemCount}?showViral=true&mature=true&album_previews=true`,
    {
      method: "GET",
      headers: {
        Authorization: "Client-ID 546c25a59c58ad7",
        //   "Content-Type": "application/json",
        //   Accept: "application/json",
      },
      mode: "cors",
    }
  )
  let data = await g.json()
  newD(data.data)
}
let x = 0

function newD(data) {
  let sec = document.getElementById("sect")

  data.forEach(ele => {
    x++
    let div = document.createElement("div")
    div.setAttribute("class", "main_contain_card ")
    let img = document.createElement("img")
    img.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC"
    img.setAttribute("class", "img_conti_main")
    let h1 = document.createElement("h1")
    h1.innerText = `${ele.title}`
    h1.setAttribute("class", "main_contain_h1")
    let div2 = document.createElement("div")
    div2.setAttribute("class", "contain_card_div2")
    let p1 = document.createElement("p")
    p1.innerText = `${(ele.views / 1000).toFixed(1)}k`
    let p = document.createElement("p")
    p.innerText = `${ele.score}`
    div2.append(p1, p)
    div.append(img, h1, div2)
    sec.append(div)

    if (x % 5 == 0) {
      one.append(div)
    }
    if (x % 5 == 1) {
      two.append(div)
    }
    if (x % 5 == 2) {
      three.append(div)
    }
    if (x % 5 == 3) {
      four.append(div)
    }
    if (x % 5 == 4) {
      five.append(div)
    }
  })
}
