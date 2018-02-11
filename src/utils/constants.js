export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/michele-mazzucco-meta-image.jpg',
  },
  index: {
    title: 'Michele Mazzucco | Interdisciplinary designer',
    description: 'Michele Mazzucco, interdisciplinary designer based in Brescia, Italy. I focus primarily on building user interfaces that are usable and scalable.'
  },
  profile: {
    title: 'Michele Mazzucco | Profile',
    description: 'Over the last 4+ years, I have been working with small- and medium-size companies all over the world.'
  },
  works: {
    title: 'Michele Mazzucco | Works',
    description: 'A selection of the work carried out over 4+ years of work. Among which: Websites, Web applications, coordinated images and more.'
  }
}
