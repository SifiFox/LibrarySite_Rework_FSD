import { memo } from 'react';
import classNames from 'classnames';

import cls from './header.module.scss'


export const Header = memo(()=>(
        <div className={classNames(cls.header)}>
            <div className="header-content">
                header
            </div>         
        </div>
    ))