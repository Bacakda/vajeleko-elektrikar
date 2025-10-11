export interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
  iconBg: string
  iconColor: string
  detailsUrl?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  text: string
  rating: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  image?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  image?: string
  date: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  description: string
  image?: string
  email?: string
  phone?: string
}

export interface NavItem {
  name: string
  href: string
  external?: boolean
}

