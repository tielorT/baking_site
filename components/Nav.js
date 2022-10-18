import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>Home</li>
            </ul>
            <ul>
                <li>Account</li>
            </ul>
            <ul>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Nav