import type { Award } from '../types/award'
import { getCloudinaryUrl } from '../lib/cloudinary'

const awardPhoto = (publicId: string) =>
  getCloudinaryUrl(publicId, {
    width: 700,
    height: 875,
    crop: 'fill',
  })

export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Most Active Tech-Savvy',
    recipient: 'Esan Odunayo Caleb',
    unit: 'Livestream',
    photoUrl: awardPhoto(
      'Most_Active_Tech_Savvy_in_Livestream_-_Esan_Odunayo_Caleb'
    ),
  },
  {
    id: 'award-2',
    title: 'Most Hardworking',
    recipient: 'Akinyemi Oluwakorede',
    unit: 'Videography',
    photoUrl: awardPhoto(
      'Most_Hardworking_in_Videography_Unit_-_Akinyemi_Oluwakorede'
    ),
  },
  {
    id: 'award-3',
    title: 'Rising Star',
    recipient: 'Daniels Babafimihan',
    unit: 'Graphics Design',
    photoUrl: awardPhoto(
      'Rising_Star_in_Graphics_Design_-_Daniels_Babafimihan'
    ),
  },
  {
    id: 'award-4',
    title: 'Most Punctual Award',
    recipient: 'Abiodun Mercy',
    photoUrl: awardPhoto(
      'Most_Punctual_Award_-_abiodun_Mercy'
    ),
  },
  {
    id: 'award-5',
    title: 'Most Dedicated',
    recipient: 'Bankole Oluwatomiyin',
    unit: 'Photography',
    photoUrl: awardPhoto(
      'Most_Dedicated_in_Photography_-_Bankole_Oluwatomiyin'
    ),
  },
  {
    id: 'award-6',
    title: 'Most Dedicated',
    recipient: 'Sowechukwu Ogbonnaya',
    unit: 'Content Team',
    photoUrl: awardPhoto(
      'Most_Dedicated_in_Content_Team_-_Sowechukwu_Ogbonnaya'
    ),
  },
  {
  id: 'award-7',
  title: 'Outstanding Contribution',
  recipient: 'Ifeanyichukwu Jane',
  unit: 'Sound Unit',
  photoUrl: awardPhoto(
    'Ifeanyichukwu_Jane_-_Outstanding_contribution_in_sound_unit'
  ),
},
]