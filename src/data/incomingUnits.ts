import type { IncomingUnit } from '../types/incomingUnit'
import { getCloudinaryUrl } from '../lib/cloudinary'

const leaderPhoto = (publicId: string) =>
  getCloudinaryUrl(publicId, {
    width: 600,
    height: 750,
    crop: 'fill',
  })

export const incomingUnits: IncomingUnit[] = [
  {
    id: 'sound',
    name: 'Sound Unit',
    leaders: [
      {
        id: 'sound-head',
        name: 'Uwadia Joshua',
        position: 'Head of Sound',
        photoUrl: leaderPhoto('Uwadia_Joshua_-_Head_of_Sound'),
      },
      {
        id: 'sound-assistant-1',
        name: 'Enitan Daniel',
        position: 'Assistant Head of Sound I',
        photoUrl: leaderPhoto(
          'Enitan_Daniel_-_Assistant_Head_of_Sound_1'
        ),
      },
      {
        id: 'sound-assistant-2',
        name: 'Gbolade Dadeola',
        position: 'Assistant Head of Sound II',
        photoUrl: leaderPhoto(
          'Gbolade_Dadeola_-_Assistant_Head_of_Sound_2'
        ),
      },
      {
        id: 'sound-assistant-3',
        name: 'Ojo Oluwadarasimi',
        position: 'Assistant Head of Sound III',
        photoUrl: leaderPhoto(
          'Ojo_Oluwadarasimi_-_Assistant_Head_of_Sound_3'
        ),
      },
    ],
  },
  {
    id: 'livestream',
    name: 'Livestream / Backend',
    leaders: [
      {
        id: 'livestream-head',
        name: 'To Be Added',
        position: 'Head of Livestream',
      },

      {
        id: 'livestream-assistant-1',
        name: 'Adewunmi Jesupelumi',
        position: 'Assistant Head of Livestream I',
        photoUrl: leaderPhoto(
          'Adewunmi_Jesupelumi_-_Assistant_Head_of_Unit_Livestream_2'
        ),
      },
      {
        id: 'livestream-assistant-2',
        name: 'Ojo Kehinde',
        position: 'Assistant Head of Livestream II',
        photoUrl: leaderPhoto(
          'AHOU_livestream_ii_-_Ojo_kehinde'
        ),
      },
      
    ],
  },
  {
    id: 'photography',
    name: 'Photography',
    leaders: [
      {
        id: 'photography-head',
        name: 'Boboye Katherine',
        position: 'Head of Photography',
        photoUrl: leaderPhoto(
          'Boboye_Katherine_-_Head_Photography'
        ),
      },
      {
        id: 'photography-assistant',
        name: 'Bankole Oluwatomiyin',
        position: 'Assistant Head of Photography',
        photoUrl: leaderPhoto(
          'Assistant_Head_of_Unit_Photography_-_Bankole_Oluwatomiyin'
        ),
      },
    ],
  },
  {
    id: 'videography',
    name: 'Videography',
    leaders: [
      {
        id: 'videography-head',
        name: 'Johnson Similoluwa',
        position: 'Head of Videography',
        photoUrl: leaderPhoto(
          'Head_Videography_Unit_-_Similoluwa_Johnson'
        ),
      },
      {
        id: 'videography-assistant',
        name: 'Josiah Adetiloye',
        position: 'Assistant Head of Videography',
        photoUrl: leaderPhoto(
          'Assistant_Head_of_Unit_Videography_-_Josiah_Adetiloye'
        ),
      },
    ],
  },
  {
    id: 'graphics',
    name: 'Graphics Design',
    leaders: [
      {
        id: 'graphics-head',
        name: 'Akinola Daniel',
        position: 'Head of Graphics Design',
        photoUrl: leaderPhoto(
          'Head_-_Graphic_Design_Unit_-_Akinola_Daniel'
        ),
      },
      {
        id: 'graphics-assistant',
        name: 'Daniels Babfimihan',
        position: 'Assistant Head of Graphics Design',
        photoUrl: leaderPhoto(
          'Assistant_Head_of_Unit_-_Graphic_Design_-_Daniels_Babfimihan'
        ),
      },
    ],
  },
  {
    id: 'content',
    name: 'Content / Post-Production',
    leaders: [
      {
        id: 'content-head',
        name: 'Sheke Bawo',
        position: 'Head of Content',
        photoUrl: leaderPhoto(
          'Head_of_Content_Unit_-_Sheke_Bawo'
        ),
      },
      {
        id: 'content-assistant',
        name: 'To Be Added',
        position: 'Assistant Head of Content',
      },
      {
        id: 'post-production-lead',
        name: 'Emmanuel Williams',
        position: 'Lead Editor, Post-Production',
        photoUrl: leaderPhoto(
          'Lead_Editor_-_Post_Production_-_Emmanuel_Williams'
        ),
      },
    ],
  },
]