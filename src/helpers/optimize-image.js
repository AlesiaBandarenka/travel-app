// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');

const imagesArray = ['20230322_121938'];

const imageCompressed = (imgTitle, size) => {
  sharp(`../assets/${imgTitle}.jpg`)
    .resize({
      width: size,
      fit: 'contain',
      position: 'center',
    })
    .jpeg({ lossless: true, quality: 80 })
    .rotate()
    .toFile(`${__dirname}/../assets/${imgTitle}-${size}.jpg`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const compressAllImages = (arr, size) => {
  arr.forEach((img) => imageCompressed(img, size));
};
compressAllImages(imagesArray, 1920);
