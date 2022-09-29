const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
    addNewImage()
});

function addNewImage() {

    for (let index = 0; index < 12; index++) {
        const imgTag = document.createElement("img");
        imgTag.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(imgTag);

    }
}