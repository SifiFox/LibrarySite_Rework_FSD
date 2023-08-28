
import { memo } from 'react'

import cls from './burger.module.scss'

export const Burger = memo(() => (
    <div className={cls.Burger}>
         <div className={cls.BurgerInner}>
              <div className={cls.line}>{' '}</div>
              <div className={cls.line}>{' '}</div>
              <div className={cls.line}>{' '}</div>
         </div>
    </div>
))