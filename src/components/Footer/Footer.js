import React from 'react'
import styles from './Footer.module.scss'
import {Link} from 'react-router-dom'

const Footer = () => {
    const menu = [{title: 'Legal', path: '/legal'}, {title: 'Privacy Policy', path: '/provacy_policy'}, {title: 'Cookie Policy', path: '/cookie_policy'}, {title: 'Accessibility', path: '/accessibility'}, {title: 'Glossary of terms', path: '/glossary'},{title: 'Sitemap', path: '/sitemap'}];
    const footerMenu = menu.map((item, index) => {
        return <li key={`${item}_${index}`}><Link to={item.path}>{item.title}</Link></li>
    })
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_menu}>
                   <ul>{footerMenu}</ul> 
                </div>
            </div>
        </footer>
    )
}

export default Footer