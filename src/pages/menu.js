import '../App.css';
import Header from '../components/menu/header';
import Favorites from '../components/menu/favorites';
import Products from '../components/menu/products';
import Footer from '../components/landingpage/footer';

export default function Menu() {
    return (
        <main>
            <Header></Header>
            <Favorites></Favorites>
            <Products></Products>
            <Footer></Footer>
        </main>
    );
}