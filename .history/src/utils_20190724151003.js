const TARGET_HEIGHT = 200;
const BORDER_OFFSET = 5;

function makeSmaller(image, amount) {
    amount = amount || 1;
    const newHeight = image.height - amount;
    image.width = image.width * (newHeight / image.height);
    image.height = newHeight;

    return image;
}
function getCumulativeWidth(images) {
    let width = 0;
    for(let i = 0; i < images.length; i++) {
       width += images[i].width;
    }

    width += 
}