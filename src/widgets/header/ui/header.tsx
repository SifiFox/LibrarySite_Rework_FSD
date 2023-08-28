import { memo } from 'react';
import classNames from 'classnames';

import { useDeviceSize } from '../../../app/services/use-device-size/ui/use-device-size';
import AvatarImage from '../../../shared/assets/icons/avatar.png';
import { ReactComponent as LogoSmall } from '../../../shared/assets/icons/logo_small.svg';
import { ReactComponent as LogoText } from '../../../shared/assets/icons/logo_text.svg';
import { Avatar } from '../../../shared/ui/avatar/avatar';
import { Burger } from '../../../shared/ui/burger/burger';
import { Text, TextAlign } from '../../../shared/ui/text/text';

import cls from './header.module.scss';

export const Header = memo(() => {
  const [width] = useDeviceSize();

  return (
    <div className={classNames(cls.header)}>
      <div className={cls.HeaderContent}>
        <div className={cls.HeaderLeft}>
          {width <= 768 && 
            <Burger />
          }
          {width > 768 && (
            <div className={cls.LogoWrapper}>
              <LogoSmall className={cls.LogoSmall} />
              <LogoText className={cls.LogoText} />
            </div>
          )}
          <h3 className={cls.h3}>Библиотека</h3>
        </div>

        {width > 768 && (
          <div className={cls.HeaderRight}>
            <Text align={TextAlign.LEFT} className={cls.Greet} text='Привет, Иван!' />
            <Avatar src={AvatarImage} />
          </div>
        )}
      </div>
    </div>
  );
});
