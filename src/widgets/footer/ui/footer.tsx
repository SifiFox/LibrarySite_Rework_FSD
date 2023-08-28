import { memo } from 'react';
import { Link } from 'react-router-dom';

import fb from '../../../shared/assets/icons/fb.svg'
import inst from '../../../shared/assets/icons/inst.svg'
import ln from '../../../shared/assets/icons/linkedin.svg'
import vk from '../../../shared/assets/icons/vk.svg'

import cls from './footer.module.scss';



export const Footer = memo(()=>(
        <div className={cls.footer}>
            <div className={cls.footer_content}>
                <div>© 2020-2023 Cleverland. Все права защищены.</div>
                <div className={cls.socials}>
                    <Link to="/">sad</Link>
                    
                </div>    
            </div>      
        </div>
))