export const getCurrentYear = () => {
  const d = new Date()
  return d.getFullYear()
}

export const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min)
