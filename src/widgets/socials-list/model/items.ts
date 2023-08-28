import {ReactComponent as FbImage} from '../../../shared/assets/icons/fb.svg'
import {ReactComponent as InstImage} from '../../../shared/assets/icons/inst.svg'
import {ReactComponent as LnImage} from '../../../shared/assets/icons/linkedin.svg'
import {ReactComponent as VkImage} from '../../../shared/assets/icons/vk.svg'

export interface SocialLink {
    key: number,
    icon: React.FC<React.SVGProps<SVGSVGElement>> ,
    url: string
}

export const items: SocialLink[] = [
    {
        key: 1,
        icon: FbImage,
        url: 'https://facebook.com'
    },
    {
        key: 2,
        icon: InstImage,
        url: 'https://instagram.com'
    },
    {
        key: 3,
        icon: VkImage,
        url: 'https://vk.com'
    },
    {
        key: 4,
        icon: LnImage,
        url: 'https://linkedin.com'
    },
]