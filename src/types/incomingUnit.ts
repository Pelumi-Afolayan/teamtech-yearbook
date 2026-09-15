export interface IncomingUnitLeader {
  id: string
  name: string
  position: string
  photoUrl?: string
}

export interface IncomingUnit {
  id: string
  name: string
  leaders: IncomingUnitLeader[]
}