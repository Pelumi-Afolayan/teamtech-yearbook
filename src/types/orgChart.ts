export interface OrgRole {
  id: string
  name: string
  position: string
  unit?: string
  photoUrl?: string
}

export interface OrgLevel {
  id: string
  label: string
  roles: OrgRole[]
}