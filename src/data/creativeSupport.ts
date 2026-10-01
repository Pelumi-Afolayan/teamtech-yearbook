import type { CreativeSupportMember } from '../types/creativeSupport'
import { getCloudinaryUrl } from '../lib/cloudinary'

const creativeSupportPhoto = (publicId: string) =>
  getCloudinaryUrl(publicId, {
    width: 600,
    height: 750,
    crop: 'fill',
  })

export const creativeSupport: CreativeSupportMember[] = [
  {
    id: 'creative-support-1',
    name: 'Damilola Sijuade',
    nickname: 'Bluey Sama',
    contribution: 'Graphics Design',
    photoUrl: creativeSupportPhoto(
      'Damilola_Sijuade_Bluey_Sama'
    ),
  },
  {
    id: 'creative-support-2',
    name: 'PK Ayeni',
    contribution: 'Graphics Design',
    photoUrl: creativeSupportPhoto('PK_Ayeni'),
  },
  {
    id: 'creative-support-3',
    name: 'Nuel',
    contribution: 'Graphics Design',
    photoUrl: creativeSupportPhoto('Nuel'),
  },
]