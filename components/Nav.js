import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>Home</li>
            </ul>
            <ul>
                <li><a href='#about'>About</a></li>
            </ul>
            <ul>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav