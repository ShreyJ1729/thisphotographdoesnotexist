const getRandomImageUrl= () => {
    return Math.floor(9601 * Math.random()) + 1;
}

const num_images = 6

const generateNewImages = () => {
    imageUrls = []
    for (let i = 0; i < num_images; i ++)
    {
        imageUrls.push(getRandomImageUrl());
    }
    console.log(imageUrls)
    for (let i = 0; i < num_images; i ++) {
        document.getElementById(`img${i}`).src = `./images/${imageUrls[i]}.png`;
    }
}

window.onload = generateNewImages;