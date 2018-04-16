/**
 * Hacky, bad function for generating image URLs in the demo data.
 * Not used in the real product.
 *
 * @return {function} A function generating the appropriate URL.
 */
export const sourceUrlGenerator = () => {
  let odd = true;
  let index = 1;
  let countingUp = true;
  return () => {
    let url;
    if (odd) {
      url = `/demo/src/images/300x200-${index}.jpg`;
    } else {
      url = `/demo/src/images/1024x683-${index}.jpg`;
    }

    odd = !odd;
    if (odd === true) {
      if (countingUp) {
        index += 1;
      } else {
        index -= 1;
      }
    }

    if (index > 7) {
      index = 7;
      countingUp = false;
    }

    return url;
  };
};
