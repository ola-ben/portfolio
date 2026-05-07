// Drop your handles here as you confirm them. Set href to null to hide a link.
import GithubIcon from '../components/GithubIcon'
import LinkedinIcon from '../components/LinkedinIcon'
import XIcon from '../components/XIcon'
import { Mail } from 'lucide-react'

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ola-ben', Icon: GithubIcon },
  { label: 'LinkedIn', href: null, Icon: LinkedinIcon },
  { label: 'X / Twitter', href: null, Icon: XIcon },
  { label: 'Email', href: 'mailto:benjaminsolaben@gmail.com', Icon: Mail },
]
