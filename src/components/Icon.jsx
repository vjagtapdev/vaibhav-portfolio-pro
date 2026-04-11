import { SiTailwindcss, SiExpress, SiMongodb, SiGithub, SiVercel } from 'react-icons/si'
import { HiOutlineCloud } from 'react-icons/hi2'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaCode } from 'react-icons/fa6'

const icons = {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaCode,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiVercel,
  HiOutlineCloud,
}

export function Icon({ name, className = '' }) {
  const Comp = icons[name]
  if (!Comp) return null
  return <Comp className={className} />
}

