function moneyFormat(price, sign = 'IDR') {
  const pieces = parseFloat(price).toFixed(2).split('');
  let ii = pieces.length - 3;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ',');
  }
  return `${sign} ` + pieces.join('');
}
export default moneyFormat;
