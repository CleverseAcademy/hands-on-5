const app = () => {
  const list = document.querySelector("ul")

  list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked")
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  app()
})

const newElement = () => {
  const input = document.getElementById("myInput")
  const inputValue = input.value

  const li = document.createElement("li")

  li.textContent = inputValue

  if (inputValue === "") {
    alert("You must write something!")
  } else {
    document.getElementById("myUL").appendChild(li)
  }

  // * clear
  document.getElementById("myInput").value = ""
}
