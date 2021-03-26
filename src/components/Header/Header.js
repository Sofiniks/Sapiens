import React from 'react'
import styles from './Header.module.scss'
import {useMediaQuery} from 'react-responsive';
import {Link} from 'react-router-dom'

const Header = () => {
    const isMobile = useMediaQuery({maxWidth: 767});
    const menu = [{title: 'About us', path: '/about'}, {title: 'Our cover', path: '/cover'}, {title: 'Contact us', path: '/contacts'}, {title: 'Help', path: '/help'}];
    const menuList = menu.map((item, index) => {
        return <li key={`${item}_${index}`}><Link to={item.path}>{item.title}</Link></li>
    })
    return (
        <header className={styles.header}>
            {!isMobile ? <div className={styles.header_container}>
                <div className={styles.header_left}>
                    <div className={styles.header_logo}>MyLogo</div>
                    <div className={styles.header_menu}>
                        <ul>
                            {menuList}
                        </ul>
                    </div>
                </div>
                <div className={styles.header_right}>
                    <div className={styles.header_link}>
                        <Link to="/">Back to your policies</Link>
                    </div>
                </div>
            </div> :
            <div className={styles.header_container}>
                <div className={styles.header_logo}>MyLogo</div>
            </div>
            }
        </header>
    )
}

export default Header
