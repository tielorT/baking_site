import Head from 'next/head'
import Image from 'next/image'
import {Button, Card} from 'react-bootstrap'
import About from '../components/About'

//images
import mainImg from '../public/Images/cake.jpg'

//styles
import styles from '../styles/Home.module.css'

export default function Home({ data }) {

  console.log(data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Baking</title>
        <meta name='keywords' content='baking, social, blog'/>
      </Head>
      <header className={styles.header} style={{backgroundImage: `url(${mainImg.src})`}}>
            <div style={{padding: '10px'}}>
              <h2>Preheat the oven and enjoy something sweet</h2>
            </div>
      </header>

      <div className={styles.popularRecipeContent}>
        <div>
          <h2>Favorite Recipes</h2>
        </div>
        <div className={styles.popularRecipeCards}>
          {data.map(recipe => {
            if(recipe.popular){
              return <Card style={{ width: '18rem' }} className={styles.card} key={recipe.title}>
                      <Image layout='responsive' width={200} height={200} src={recipe.img} alt='img'/>
                      <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>
                        {recipe.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
            }
          })}
            
        </div>
      </div>
      <About />
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch('https://baking-site-rho.vercel.app/api/recipes');
  const data = await res.json();

  return { props: { data }}
   
}
