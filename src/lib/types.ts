export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'whatsapp'
  | 'instagram'
  | 'menu'
  | 'close'
  | 'check'
  | 'home'
  | 'building'
  | 'hardhat'
  | 'blueprint'
  | 'document'
  | 'search'
  | 'compass'
  | 'bolt'
  | 'tile'
  | 'wall'
  | 'paint'
  | 'shield'
  | 'users'
  | 'calendar'
  | 'clipboard'
  | 'message'
  | 'pin'
  | 'layers'
  | 'ruler'
  | 'key'

export type NavLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  items: string[]
  icon: IconName
  message: string
}

export type ServiceGroup = {
  id: string
  number: string
  title: string
  intro: string
  services: Service[]
}

export type Modality = {
  id: string
  name: string
  label: string
  description: string
  highlights: string[]
  cta: string
  message: string
  featured?: boolean
  icon: IconName
}

export type Segment = {
  title: string
  description: string
  image: string
  alt: string
  width: number
  height: number
}

export type GalleryItem = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type Differential = {
  title: string
  description: string
  icon: IconName
}

export type ProcessStep = {
  number: string
  title: string
  description: string
  icon: IconName
}

export type FaqItem = {
  question: string
  answer: string
}
