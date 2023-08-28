import { useMemo } from 'react';
import classNames from 'classnames';

import cls from './avatar.module.scss';

interface AvatarProps{
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, size, src, alt,
    } = props;

    const styles = useMemo(() => ({
        width: size || 58,
        height: size || 58,
    }), [size]);

    return (
        <img
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
        />
    );
};
