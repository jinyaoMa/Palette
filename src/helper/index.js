import Color from "./Color";

export function findTargetColors(colors) {
  if (colors.length < 16) {
    return colors.sort();
  } else {
    let newColors = [];
    for (let i = 0; i < colors.length; i += 1) {
      // get average for every pair of colors
      let left = colors[i];
      let right = colors[++i];
      if (right) {
        newColors.push(new Color(
          (left.R + right.R) / 2,
          (left.G + right.G) / 2,
          (left.B + right.B) / 2
        ));
      } else {
        newColors.push(left);
      }
    }
    return findTargetColors(newColors);
  }
}

export function getImageColors(imgObj) {
  let canvas = document.createElement('canvas');
  canvas.width = imgObj.naturalWidth;
  canvas.height = imgObj.naturalHeight;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(imgObj, 0, 0);
  let imgDataObj = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let imageData = imgDataObj.data;

  let colors = [];
  for (let i = 0; i < imageData.length; i += 1) {
    // every 3 r/g/b values are filled into colors and every alpha value was skiped by the loop
    let r = imageData[i++];
    let g = imageData[i++];
    let b = imageData[i++];
    let a = imageData[i];
    if (a > 0) { // remove transparent colors
      colors.push(new Color(r, g, b));
    }
  }

  return findTargetColors(colors);
}

export function getImage(data, callback) {
  let img = document.createElement('img');
  img.onload = e => {
    typeof callback === 'function' && callback(img);
  };
  img.src = data;
}