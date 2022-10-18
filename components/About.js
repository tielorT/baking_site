import styles from '../styles/About.module.css'
import Image from 'next/image'
//image
import img1 from '../public/Images/cake-balls.jpg'
import img2 from '../public/Images/womancake.jpg'

const About = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div className={styles.container}>
                <div className={styles.section1}>
                        <div className={styles.sectionAbout}>
                            <h4>The Mission</h4>
                            <h2>About Me</h2>
                            <p>A Front-end developer with a sweet tooth and a purpose</p>
                        </div>
                        <div className={styles.imgDiv}>
                        <Image layout='fill' src={img1}/>
                        </div>
                    </div> 
                    <div className={styles.sectionBlock}>
                    </div>
                </div>
                </div>
                <div className={styles.about_content}>
                    <div className={styles.content}>
                        <div style={{ width: '50%'}}>
                            <h2>Coding The Sweet Life</h2>
                            <p>This site is an expression of my love for sweets and coding. 
                            Using Nextjs/React i have built this site to show case my front-end abilities </p>
                        </div>
                    </div>
                    <div style={{ width: '50%', display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                        <div>
                           <Image src={img2} height={300} width={300} />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About;