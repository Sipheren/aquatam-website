const sharp = require('sharp');

sharp('public/images/header.jpg')
  .extract({ left: 0, top: 0, width: 500, height: 150 })
  .toFile('public/images/logo.jpg')
  .then(() => console.log('✅ Logo cropped successfully'))
  .catch(err => console.error('❌ Error:', err));
