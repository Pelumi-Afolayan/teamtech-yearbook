export interface UnitLeader {
  name: string
  role: string
}

export interface Unit {
  id: string
  name: string
  groupPhotoUrl: string
  description: string
  leaders: UnitLeader[]
}