// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');

const imagesArray = ['20230324_115101', '20230324_115144', '20230324_115442', '20230324_115843', '20230324_130653', '20230324_130658', '20230324_191032', '20230324_191043', '20230324_203210', '20230324_203237', '20230324_203257', '20230325_085354', '20230325_104036', '20230325_105701', '20230325_105711', '20230325_105851', '20230325_115442', '20230325_115644', '20230325_123312', '20230325_162552', '20230325_165432', '20230325_165535', '20230325_165727', '20230325_173419', '20230326_202336'];

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
