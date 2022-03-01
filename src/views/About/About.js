import './About.css'
import picture from './cats-and-dogs.jpg'

const About = () => {
    return(
        <section className="clearBoth sectionAboutUs">
            <article className="articleAboutUs">
            <div className="articleAboutUs__content">
                <h1>About Us</h1>
                <p>Inspired by cat and dog lovers, CatDog decided to build a company that can provide you with the best ideas for your pets.</p>
                <p>The best part is that we have already selected between the last trends, so you just have to scroll and get amazed.</p><br />
                <h2>What we believe</h2>
                <p>Here at CatDog, we believe that every cat and dog deserve a forever home, and our mission is to help these amazing animals in any way we can. To give back to them, we try to make everyone aware about the fact that they can always adopt. To make this possible, we donate essential supplies to communities that care about them and put them in adoption. </p>
            </div>
            <div className="articleAboutUs__img">
                <img src={picture} alt="Cats and dogs side to side" className="animate__animated animate__backInRight borderRadius" />
            </div>
            </article>
        </section>
    )
}

export default About