import './Home.css'
import catVideo from '../../media/videos/catfurniture.mp4'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const Home = () => {
    return(
        <>
            <header className="headerHome">
                <video src={catVideo} autoPlay muted loop preload="auto" width="1200" className="borderRadius headerHome__video"></video>
            </header>
            <ItemListContainer 
                heading="Hi, we are CatDog!"
                subheading1="Here we love joy, style and design, so if you are looking for your pet to be comfortable and have fun while your house looks great, you are in the right place!"
                subheading2="We offer you a wide range of pet furniture and toys, and also some trendy pet clothing. Feel free to take a look and choose what suits your pet."
            />
        </>
    )
}

export default Home;