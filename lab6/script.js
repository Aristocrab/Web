const API_URL = "https://randomuser.me/api"

const downloadBtn = document.querySelector(".btn")
const parentElement = document.querySelector(".main")
const loadUsers = async () => {

    for (let i = 0; i < 5; i++) {
        const response = await fetch(API_URL)
        const data = await response.json()
        const user = data.results[0]

        const { cell, location,  phone, picture } = user
        const card = `
            <img width="img" src="${picture.large}" alt="${name.first}">
            <div class="user-info">
                <p>Cell: ${cell}</p>
                <p>Country: ${location.country}</p>
                <p>Postcode:  ${location.postcode}</p>
                <p>Phone: ${phone}</p>
            </div>
    `
        const el = document.createElement("div")
        el.classList.add("card")
        el.innerHTML = card
        parentElement.appendChild(el)

    }

}



downloadBtn.addEventListener("click", loadUsers)