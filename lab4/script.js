const variant = 105
const a = (variant % 10) + 1

const firstElem = document.querySelector(`body`).children[a]
const secondElem = document.querySelector(`body`).children[a+1]

console.log(firstElem)
console.log(secondElem)

const toggleFistElemAction = () => {
    firstElem.classList.toggle('active-first')
}
const toggleSecondElemAction = () => {
    secondElem.classList.toggle('active-second')
}

const photoParent = document.querySelector('.photo-parent')
const onClickAddPhoto = () => {
    const image = document.createElement('img')
    image.src = 'https://i1.poltava.to/uploads/2022/10/03/lubny.jpg'
    image.id = `photo-${Math.round(Math.random()*100, 2)}`
    photoParent.appendChild(image)
}
const onClickRemovePhoto = () => {
    photoParent.children[photoParent.children.length-1].remove()
}
const onClickEnlargePhoto = () => {
    const lastPhoto = photoParent.children[photoParent.children.length-1]
    lastPhoto.classList.remove("reduce")
    lastPhoto.classList.add("enlarge")

}
const onClickReducePhoto = () => {
    const lastPhoto = photoParent.children[photoParent.children.length-1]
    lastPhoto.classList.remove("enlarge")
    lastPhoto.classList.add("reduce")

}

firstElem.addEventListener('click', toggleFistElemAction)
secondElem.addEventListener('click', toggleSecondElemAction)