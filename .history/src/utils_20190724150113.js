const TARGET_HEIGHT = 200;
const BORDER_OFFSET = 5;

function makeSmaller(image, amount) {
    amount = amount || 1;
    const newHeight = image.height - amount;
    image.width = image.width * (newHeight / image.height);
    image.height = newHeight;

    return image;
}
function getCumulative