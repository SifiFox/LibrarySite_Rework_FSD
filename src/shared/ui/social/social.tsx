import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SocialProps{
    url: string,
    children: ReactNode
}

export const social = (props: SocialProps) => {
    const {children, url} = props;

    return(
        <Link to={url}>{children}</Link>
    )
}