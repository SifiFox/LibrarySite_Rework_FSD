import { Link } from 'react-router-dom';

import { items as socialLinks } from '../model/items';

import cls from './socials-list.module.scss';

export const SocialsList = () => (
        <div className={cls.SocialsList}>
            {
                socialLinks.map((socialLink) => (
                    <Link key={socialLink.key} to={socialLink.url}><socialLink.icon className={cls.SocialIcon}/></Link>
                ))
            }
        </div>
    )