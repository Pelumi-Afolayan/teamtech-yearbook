import type { Person } from '../types/person'
import { getCloudinaryUrl } from '../lib/cloudinary'

const executivePhoto = (publicId: string) =>
  getCloudinaryUrl(publicId, {
    width: 600,
    height: 750,
    crop: 'fill',
  })

export const newExecutives: Person[] = [
  {
    id: 'new-exec-1',
    name: 'Lasaki Ayomiposi',
    position: 'HOD Team Tech, Head of Media',
    photoUrl: executivePhoto(
      'Lasaki_Ayomiposi_-_HOD_Team_Tech_Head_of_Media'
    ),
  },
  {
    id: 'new-exec-2',
    name: 'Uwadia Joshua',
    position: 'Head of Sound',
    photoUrl: executivePhoto('Uwadia_Joshua_-_Head_of_Sound'),
  },
  {
    id: 'new-exec-3',
    name: 'Johnson Similoluwa',
    position: 'General Secretary',
    photoUrl: executivePhoto(
      'Johnson_Similoluwa_-_General_Secretary'
    ),
  },
  {
    id: 'new-exec-4',
    name: 'Adebiyi Oluwajuwuralo',
    position: 'Assistant General Secretary',
    photoUrl: executivePhoto(
      'Adebiyi_Oluwajuwuralo_-_Assistant_General_Secretary'
    ),
  },
  {
    id: 'new-exec-5',
    name: 'Akinola Mofiyinfoluwa',
    position: 'Assistant Head of Media I',
    photoUrl: executivePhoto(
      'Akinola_Mofiyinfoluwa_-_Assistant_Head_of_Media_1'
    ),
  },
  {
    id: 'new-exec-6',
    name: 'Boboye Katherine',
    position: 'Assistant Head of Media II',
    photoUrl: executivePhoto(
      'Boboye_Katherine_-_Assistant_Head_of_Media_2'
    ),
  },
  {
    id: 'new-exec-7',
    name: 'Enitan Daniel',
    position: 'Assistant Head of Sound I',
    photoUrl: executivePhoto(
      'Enitan_Daniel_-_Assistant_Head_of_Sound_1'
    ),
  },
  {
    id: 'new-exec-8',
    name: 'Gbolade Dadeola',
    position: 'Assistant Head of Sound II',
    photoUrl: executivePhoto(
      'Gbolade_Dadeola_-_Assistant_Head_of_Sound_2'
    ),
  },
  {
    id: 'new-exec-9',
    name: 'Ojo Oluwadarasimi',
    position: 'Assistant Head of Sound III',
    photoUrl: executivePhoto(
      'Ojo_Oluwadarasimi_-_Assistant_Head_of_Sound_3'
    ),
  },
]