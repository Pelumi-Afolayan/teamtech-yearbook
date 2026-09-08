import type { Graduate } from '../types/person'
import { getCloudinaryUrl } from '../lib/cloudinary'

const graduatePhoto = (publicId: string) =>
  getCloudinaryUrl(publicId, {
    width: 600,
    height: 750,
    crop: 'fill',
  })

export const graduates: Graduate[] = [
  {
    id: 'grad-1',
    name: 'Esan Caleb',
    unit: 'Livestream',
    photoUrl: graduatePhoto('Esan_Caleb_-_Livestream'),
  },
  {
    id: 'grad-2',
    name: 'Ajobiewe Olatunbosun',
    unit: 'Livestream',
    photoUrl: graduatePhoto('Ajobiewe_Olatunbosun_-_Livestream'),
  },
  {
    id: 'grad-3',
    name: 'Medo-Uwa Chidera',
    unit: 'Videography',
    photoUrl: graduatePhoto('Medo-uwa_Chidera_-_Videography'),
  },
  {
    id: 'grad-4',
    name: 'Fayemiwo Ifeoluwa',
    unit: 'Photography',
    photoUrl: graduatePhoto('Fayemiwo_Ifeoluwa_-_Photography'),
  },
  {
    id: 'grad-5',
    name: 'Alli Daniel',
    unit: 'Graphics Design',
    photoUrl: graduatePhoto('Alli_Daniel_-_Graphic_Design'),
  },
  {
    id: 'grad-6',
    name: 'Haastrup Micheal',
    unit: 'Graphics Design',
    photoUrl: graduatePhoto('Haastrup_Micheal_-_Graphic_Design'),
  },
  {
    id: 'grad-7',
    name: 'Enoch Abe',
    unit: 'Photography',
    photoUrl: graduatePhoto('Enoch_Abe_-_Photography'),
  },
  {
    id: 'grad-8',
    name: 'Oladapo Dorcas',
    unit: 'Content Team',
    photoUrl: graduatePhoto('Oladapo_Dorcas_-_Content_Team'),
  },
  {
    id: 'grad-9',
    name: 'Adewale Adeoluwa',
    unit: 'Livestream',
    photoUrl: graduatePhoto('Adewale_Adeoluwa_-_Livestream'),
  },
  {
    id: 'grad-10',
    name: 'Ajayi Favour',
    unit: 'Videography',
    photoUrl: graduatePhoto('Ajayi_Favour_-_Videography'),
  },
  {
    id: 'grad-11',
    name: 'Sowechukwu Ogbonnaya',
    unit: 'Post-Production',
    photoUrl: graduatePhoto(
      'Sowechukwu_Ogbonnaya_-_Post_Production'
    ),
  },
  {
    id: 'grad-12',
    name: 'Akinola Boluwatife',
    unit: 'Graphics Design',
    photoUrl: graduatePhoto(
      'Akinola_Boluwatife_-_Graphics_Design'
    ),
  },
  {
    id: 'grad-13',
    name: 'Afolabi Joseph',
    unit: 'Content Team',
    photoUrl: graduatePhoto('Afolabi_Joseph_-_Content_Team'),
  },
  {
    id: 'grad-14',
    name: 'Adetayo Toluwanimi',
    unit: 'Videography',
    photoUrl: graduatePhoto('Adetayo_Toluwanimi_-_Videography'),
  },
  {
    id: 'grad-15',
    name: 'Olotu Bukunmi',
    unit: 'Graphics Design',
    photoUrl: graduatePhoto('Olotu_Bukunmi_-_Graphics_Design'),
  },
  {
    id: 'grad-16',
    name: 'Adedayo David',
    unit: 'Sound',
    photoUrl: graduatePhoto('Adedayo_David_-_Sound'),
  },
  {
    id: 'grad-17',
    name: 'Areo Israel',
    unit: 'Sound',
    photoUrl: graduatePhoto('Areo_Israel_-_Sound'),
  },
  {
    id: 'grad-18',
    name: 'Badejo David',
    unit: 'Photography',
    photoUrl: graduatePhoto('Badejo_David_-_Photography'),
  },
  {
    id: 'grad-19',
    name: 'Omehe Joshua',
    unit: 'Videography',
    photoUrl: graduatePhoto('Omehe_Joshua_-_Videography'),
  },
  {
    id: 'grad-20',
    name: 'Adebayo David',
    unit: 'Videography',
    photoUrl: graduatePhoto('Adebayo_David_-_Videography'),
  },
  {
    id: 'grad-21',
    name: 'Erinle Oluwatobiloba',
    unit: 'Photography',
    photoUrl: graduatePhoto('Erinle_Oluwatobiloba_-_Photography'),
  },
  {
    id: 'grad-22',
    name: 'Arukhame-Sanusi Timothy',
    unit: 'Photography',
    photoUrl: graduatePhoto(
      'Arukhame-Sanusi_Timothy_-_Photography'
    ),
  },
  {
    id: 'grad-23',
    name: 'Banjo Moyosoreoluwa',
    unit: 'Sound',
    photoUrl: graduatePhoto('Banjo_Moyosoreoluwa_-_Sound'),
  },
  {
    id: 'grad-24',
    name: 'Ale Florish',
    unit: 'Livestream',
    photoUrl: graduatePhoto('Ale_Florish_-_Livestream'),
  },
  {
    id: 'grad-25',
    name: 'Bakare Daniel',
    unit: 'Sound',
    photoUrl: graduatePhoto('Bakare_Daniel_-_Sound'),
  },
  {
    id: 'grad-26',
    name: 'Afolayan Jesupelumi',
    unit: 'Photography',
    photoUrl: graduatePhoto('Afolayan_Jesupelumi_-_Photography'),
  },
  {
    id: 'grad-27',
    name: 'Munachimso Enabulele',
    unit: 'Photography',
    photoUrl: graduatePhoto(
      'Munachimso_Enabulele_-_Photography'
    ),
  },
  {
    id: 'grad-28',
    name: 'Memeh Favour',
    unit: 'Sound',
    photoUrl: graduatePhoto('Memeh_Favour_-_Sound'),
  },
  {
    id: 'grad-29',
    name: 'Olatoye Victoria',
    unit: 'Content Team',
    photoUrl: graduatePhoto('Olatoye_Victoria_-_Content_Team'),
  },
  {
    id: 'grad-30',
    name: 'Onjewu Solomon',
    unit: 'Content Team',
    photoUrl: graduatePhoto('Onjewu_Solomon_-_Content_Team'),
  },
  {
    id: 'grad-31',
    name: 'Olotu Nifemi',
    unit: 'Graphics Design',
    photoUrl: graduatePhoto('Olotu_Nifemi_-_Graphics_Design'),
  },
  {
    id: 'grad-32',
    name: 'Treasure Bobade',
    unit: 'Content Team',
    photoUrl: graduatePhoto('Treasure_Bobade_-_Content_Team'),
  },
  {
    id: 'grad-33',
    name: 'Ogunniyi Moyinoluwa',
    unit: 'Videography',
    photoUrl: graduatePhoto('Ogunniyi_Moyinoluwa_-_Videography'),
  },
  {
    id: 'grad-34',
    name: 'Ogunbiyi Kofoworola',
    unit: 'Sound',
    photoUrl: graduatePhoto('Ogunbiyi_Kofoworola_-_Sound'),
  },
  {
    id: 'grad-35',
    name: 'Praise Ajibola',
    unit: 'Livestream',
    photoUrl: graduatePhoto('Praise_Ajibola_-_Livestream'),
  },
  {
    id: 'grad-36',
    name: 'Onobun Isimeme',
    unit: 'Livestream',
    photoUrl: graduatePhoto('Onobun_Isimeme_-_Livestream'),
  },
  {
    id: 'grad-37',
    name: 'Abioye Erioluwa',
    unit: 'Photography',
    photoUrl: graduatePhoto('Abioye_Erioluwa_-_Photography'),
  },
  {
    id: 'grad-38',
    name: 'Ademola Oluwabori',
    unit: 'Sound',
    photoUrl: graduatePhoto('Ademola_Oluwabori_-_Sound'),
  },
  {
    id: 'grad-39',
    name: 'Ajala Adedoyin',
    unit: 'Sound',
    photoUrl: graduatePhoto('Ajala_Adedoyin_-_Sound'),
  },
  {
    id: 'grad-40',
    name: 'Babatope Ayomide',
    unit: 'Sound',
    photoUrl: graduatePhoto('Babatope_Ayomide_-_Sound'),
  },
]