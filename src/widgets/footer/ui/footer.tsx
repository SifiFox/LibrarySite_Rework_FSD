import { memo } from 'react';

import { SocialsList } from '../../socials-list';

import cls from './footer.module.scss';



export const Footer = memo(()=>(
        <footer className={cls.footer}>
            <div className={cls.footer_content}>
                <span className={cls.copyright}>© 2020-2023 Cleverland. Все права защищены.</span>
                <SocialsList /> 
            </div>      
        </footer>
))