const CLOUD_NAME = 'dtyen7i4'

interface ImageOptions {
  width?: number
  height?: number
  crop?: 'fill' | 'fit' | 'crop' | 'scale'
}

export function getCloudinaryUrl(publicId: string, options: ImageOptions = {}) {
  const { width, height, crop = 'fill' } = options

  const transformations: string[] = ['f_auto', 'q_auto', 'dpr_auto']

  if (width) transformations.push(`w_${width}`)
  if (height) transformations.push(`h_${height}`)
  if (width || height) transformations.push(`c_${crop}`)

  const transformString = transformations.join(',')

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}/${publicId}`
}