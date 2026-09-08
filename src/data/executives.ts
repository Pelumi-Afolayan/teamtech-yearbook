import type { Person } from '../types/person'
import { getCloudinaryUrl } from '../lib/cloudinary'

export const executives: Person[] = [
  {
    id: 'exec-1',
    name: 'Afolayan Jesupelumi',
    position: 'HOD Team Tech, Head of Media',
    photoUrl: getCloudinaryUrl(
      'Afolayan_Jesupelumi_-_HOD_Team_Tech_Head_of_Media',
      {
        width: 600,
        height: 750,
        crop: 'fill',
      }
    ),
  },
  {
    id: 'exec-2',
    name: 'Areo Israel',
    position: 'Head of Sound',
    photoUrl: getCloudinaryUrl(
      'Areo_Israel_-_Head_of_Sound',
      {
        width: 600,
        height: 750,
        crop: 'fill',
      }
    ),
  },
  {
    id: 'exec-3',
    name: 'Oladapo Dorcas',
    position: 'General Secretary',
    photoUrl: getCloudinaryUrl(
      'Oladapo_Dorcas_-_General_Secretary',
      {
        width: 600,
        height: 750,
        crop: 'fill',
      }
    ),
  },
  {
    id: 'exec-4',
    name: 'Boboye Katherine',
    position: 'Assistant General Secretary',
    photoUrl: getCloudinaryUrl(
      'Boboye_Katherine_-_Assistant_General_Secretary',
      {
        width: 600,
        height: 750,
        crop: 'fill',
      }
    ),
  },
  {
    id: 'exec-5',
    name: 'Akinola Mofiyinfoluwa',
    position: 'Assistant Head of Media',
    photoUrl: getCloudinaryUrl(
      'Akinola_Mofiyinfoluwa_-_Assistant_Head_of_Media',
      {
        width: 600,
        height: 750,
        crop: 'fill',
      }
    ),
  },
  {
    id: 'exec-6',
    name: 'Memeh Favour',
    position: 'Assistant Head of Sound I',
    photoUrl: getCloudinaryUrl(
      'Memeh_Favour_-_Assistant_Head_of_Sound_I',
      {
        width: 600,
        height: 750,
        crop: 'fill',
      }
    ),
  },
  {
    id: 'exec-7',
    name: 'Idowu Paul',
    position: 'Assistant Head of Sound II',
    photoUrl: getCloudinaryUrl(
      'Idowu_Paul_-_Assistant_Head_of_Sound_II',
      {
        width: 600,
        height: 750,
        crop: 'fill',
      }
    ),
  },
]