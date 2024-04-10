import '../App.css';
import Header from '../components/landingpage/header';
import Items from '../components/landingpage/items';
import Welcome from '../components/landingpage/welcome';
import Places from '../components/landingpage/places';
import Footer from '../components/landingpage/footer';

export default function Home() {
    return (
        <main>
            <Header></Header>
            <Items></Items>
            <Welcome></Welcome>
            <Places></Places>
            <Footer></Footer>
        </main>
    );
}
