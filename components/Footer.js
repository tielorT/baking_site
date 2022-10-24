import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <a id='contact'></a>
            <p style={{ paddingLeft: '32px', fontSize: '20px'}}>Contact Me</p>
            <div className={styles.listContainer}>
                <ul>
                    <li><a href='mailto: tielorboon@gmail.com'>Email</a></li>
                </ul>
                <ul>
                    <li><a href='https://www.linkedin.com/in/tielor-tomlinson-29742624b/' 
                           target='_blank' rel='noreferrer'>Linkedin</a></li>
                </ul>
                <ul>
                    <li><a href='https://github.com/tielorT?tab=repositories'
                           target='_blank' rel='noreferrer'>Github</a></li>
                </ul>
            </div>
            <div style={{ alignSelf: 'flex-end'}}>
                <h4>Site made by Tielor Tomlinson using the power of react</h4>
            </div>
        </div>
    )
};

export default Footer