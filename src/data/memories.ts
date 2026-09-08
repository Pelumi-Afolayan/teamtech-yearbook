import type { Memory } from '../types/memory'
import { getCloudinaryUrl } from '../lib/cloudinary'

export const memories: Memory[] = Array.from(
  { length: 406 },
  (_, index) => {
    const imageNumber = String(index + 1).padStart(3, '0')

    return {
      id: imageNumber,

      photoUrl: getCloudinaryUrl(imageNumber, {
        width: 1000,
      }),

      fullPhotoUrl: getCloudinaryUrl(imageNumber, {
        width: 1800,
      }),

      alt: `Technical Department memory ${imageNumber}`,
    }
  }
)