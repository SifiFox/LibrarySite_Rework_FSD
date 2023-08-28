import { memo } from 'react';

import cls from './sidebar.module.scss'

export const Sidebar = memo(()=>(
    <div className={cls.sidebar}>sidebar</div>
))