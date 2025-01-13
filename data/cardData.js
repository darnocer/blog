import LaptopIcon from '@/components/icons/LaptopIcon'
import SparklesIcon from '@/components/icons/SparklesIcon'
import MicrodoseIcon from '@/components/icons/MicrodoseIcon'
import SoulScienceIcon from '@/components/icons/SoulScienceIcon'

const cardData = [
  { title: 'Project Leadership', link: '/work/management', icon: <LaptopIcon /> },
  { title: 'Transformational Wellness', link: '/work/spiritual', icon: <SparklesIcon /> },
  { title: 'Microdose.wiki', link: 'https://microdose.wiki', icon: <MicrodoseIcon /> },
  {
    title: 'Soul Science',
    link: 'https://soulsciencehq.com',
    icon: <SoulScienceIcon />,
    status: 'disabled',
  },
]

export default cardData
