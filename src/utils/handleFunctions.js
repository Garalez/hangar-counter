export const addTenPercent = (numb, round) => {
  return (numb + numb * .1).toFixed(round);
}

export const getPifagorGypotenuse = (triangleWidth, height, round) => {
  return (Math.sqrt(triangleWidth ** 2 + height ** 2)).toFixed(round);
}
