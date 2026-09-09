import type { OrgLevel } from '../types/orgChart'
import { getCloudinaryUrl } from '../lib/cloudinary'

const portrait = (publicId: string) =>
  getCloudinaryUrl(publicId, {
    width: 500,
    height: 625,
    crop: 'fill',
  })

export const orgChart: OrgLevel[] = [
  {
    id: 'chaplain',
    label: 'University Leadership',
    roles: [
      {
        id: 'pastor-oluseyi-alakija',
        name: 'Pastor Oluseyi Alakija',
        position: 'University Chaplain',
        photoUrl: portrait('Pastor_Oluseyi_Alakija'),
      },
    ],
  },
  {
    id: 'coordinators',
    label: 'Department Coordinators',
    roles: [
      {
        id: 'pastor-jerry',
        name: 'Pastor Jerry',
        position: 'Senior Technical Coordinator',
      },
      {
        id: 'mr-paul',
        name: 'Mr Paul',
        position: 'Sound Coordinator',
        photoUrl: portrait('Mr.Paul'),
      },
    ],
  },
  {
    id: 'unit-heads',
    label: 'Unit Leadership',
    roles: [
      {
        id: 'areo-israel',
        name: 'Areo Israel',
        position: 'Head of Sound',
        unit: 'Sound Unit',
        photoUrl: portrait('Areo_Israel_-_Head_of_Sound'),
      },
      {
        id: 'memeh-favour',
        name: 'Memeh Favour',
        position: 'Assistant Head of Sound I',
        unit: 'Sound Unit',
        photoUrl: portrait(
          'Memeh_Favour_-_Assistant_Head_of_Sound_I'
        ),
      },
      {
        id: 'idowu-paul',
        name: 'Idowu Paul',
        position: 'Assistant Head of Sound II',
        unit: 'Sound Unit',
        photoUrl: portrait(
          'Idowu_Paul_-_Assistant_Head_of_Sound_II'
        ),
      },
      {
        id: 'ajobiewe-olatunbosun',
        name: 'Ajobiewe Olatunbosun',
        position: 'Head of Livestream',
        unit: 'Livestream / Backend',
        photoUrl: portrait(
          'Ajobiewe_Olatunbosun_-_Head_Livestream'
        ),
      },
      {
        id: 'lasaki-ayomiposi',
        name: 'Lasaki Ayomiposi',
        position: 'Assistant Head of Livestream',
        unit: 'Livestream / Backend',
        photoUrl: portrait(
          'Lasaki_Ayomiposi_-_Assiatn_Head_Livestream_Unit'
        ),
      },
      {
        id: 'afolayan-jesupelumi',
        name: 'Afolayan Jesupelumi',
        position: 'Head of Photography',
        unit: 'Photography',
        photoUrl: portrait(
          'Afolayan_Jesupelumi_-_Head_Photography'
        ),
      },

      {
        id: 'boboye-katherine-photography',
        name: 'Boboye Katherine',
        position: 'Assistant Head of Photography',
        unit: 'Photography',
        photoUrl: portrait(
          'Boboye_Katherine_-_Assistant_Head_Photography'
        ),
      },

      {
        id: 'medo-uwa-chidera',
        name: 'Medo-Uwa Chidera',
        position: 'Head of Videography',
        unit: 'Videography',
        photoUrl: portrait(
          'Medo-uwa_Chidera_-_Head_Videography'
        ),
      },
      {
        id: 'johnson-similoluwa',
        name: 'Johnson Similoluwa',
        position: 'Assistant Head of Videography',
        unit: 'Videography',
        photoUrl: portrait(
          'Johnson_Similoluwa_-_Assistant_Head_Videography_Unit'
        ),
      },
      {
        id: 'olotu-nifemi',
        name: 'Olotu Nifemi',
        position: 'Head of Graphics Design',
        unit: 'Graphics Design',
        photoUrl: portrait(
          'Olotu_Nifemi_-_Head_-_Graphics_Design'
        ),
      },
      {
        id: 'alli-daniel',
        name: 'Alli Daniel',
        position: 'Assistant Head of Graphics Design',
        unit: 'Graphics Design',
        photoUrl: portrait(
          'Alli_Daniel_-_Assistant_Head_-_Graphic_Design'
        ),
      },
      {
        id: 'sowechukwu-ogbonnaya',
        name: 'Sowechukwu Ogbonnaya',
        position: 'Lead Editor',
        unit: 'Post-Production',
        photoUrl: portrait(
          'Sowechukwu_Ogbonnaya_-_Lead_Editor_-_Post_Production'
        ),
      },
     {
        id: 'sheke-bawo',
        name: 'Sheke Bawo',
        position: 'Head of Content Team',
        unit: 'Content Team',
        photoUrl: portrait('Sheke_Bawo_-_Head_Content_Team'),
      },
    {
      id: 'ojo-heritage',
      name: 'Ojo Heritage',
      position: 'Assistant Head of Content Team',
      unit: 'Content Team',
      photoUrl: portrait(
        'Ojo_Heritage_-_Assistant_Head_Content_Team'
      ),
    },
    ],
  },
]