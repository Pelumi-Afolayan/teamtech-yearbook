import type { Unit } from '../types/unit'
import { getCloudinaryUrl } from '../lib/cloudinary'

const unitPhoto = (publicId: string) =>
  getCloudinaryUrl(publicId, {
    width: 1400,
  })

export const units: Unit[] = [
  {
    id: 'sound',
    name: 'Sound Unit',
    groupPhotoUrl: unitPhoto('Sound'),
    description:
      'Responsible for managing and delivering clear, quality audio during Chapel services, programmes and events, ensuring that every voice and sound is heard as intended.',
    leaders: [
      {
        name: 'Areo Israel',
        role: 'Head of Sound',
      },
      {
        name: 'Memeh Favour',
        role: 'Assistant Head of Sound I',
      },
      {
        name: 'Idowu Paul',
        role: 'Assistant Head of Sound II',
      },
    ],
  },
  {
    id: 'livestream',
    name: 'Livestream / Backend',
    groupPhotoUrl: unitPhoto('Livetsream'),
    description:
      'Manages livestream and backend operations, ensuring that Chapel services and programmes are delivered smoothly to audiences online.',
    leaders: [
      {
        name: 'Ajobiewe Olatunbosun',
        role: 'Head of Livestream',
      },
      {
        name: 'Lasaki Ayomiposi',
        role: 'Assistant Head of Livestream',
      },
    ],
  },
  {
    id: 'photography',
    name: 'Photography',
    groupPhotoUrl: unitPhoto('Photography'),
    description:
      'Captures and preserves the people, worship, service and meaningful moments that make up the story of the Chapel.',
    leaders: [
      {
        name: 'Afolayan Jesupelumi',
        role: 'Head of Photography',
      },
      {
        name: 'Boboye Katherine',
        role: 'Assistant Head of Photography',
      },
    ],
  },
  {
    id: 'videography',
    name: 'Videography',
    groupPhotoUrl: unitPhoto('Videography'),
    description:
      'Captures Chapel services, programmes and events through motion, transforming important moments into lasting visual stories.',
    leaders: [
      {
        name: 'Medo-Uwa Chidera',
        role: 'Head of Videography',
      },
      {
        name: 'Johnson Similoluwa',
        role: 'Assistant Head of Videography',
      },
    ],
  },
  {
    id: 'graphics-design',
    name: 'Graphics Design',
    groupPhotoUrl: unitPhoto('Graphic_Design'),
    description:
      'Creates visual materials that communicate Chapel programmes, announcements and messages with clarity, creativity and excellence.',
    leaders: [
      {
        name: 'Olotu Nifemi',
        role: 'Head of Graphics Design',
      },
      {
        name: 'Alli Daniel',
        role: 'Assistant Head of Graphics Design',
      },
    ],
  },
  {
    id: 'content-post-production',
    name: 'Content / Post-Production',
    groupPhotoUrl: unitPhoto('Content'),
    description:
      'Shapes raw media into finished stories through content development, editing and post-production for Chapel platforms.',
    leaders: [
      {
        name: 'To Be Added',
        role: 'Head of Content Team',
      },
      {
        name: 'Ojo Heritage',
        role: 'Assistant Head of Content Team',
      },
      {
        name: 'Sowechukwu Ogbonnaya',
        role: 'Lead Editor, Post-Production',
      },
    ],
  },
]