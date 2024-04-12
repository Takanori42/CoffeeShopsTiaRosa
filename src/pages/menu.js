import '../App.css';
import Header from '../components/menu/header';
import Favorites from '../components/menu/favorites';
import Products from '../components/menu/products';
import Footer from '../components/menu/footer';

export default function Home() {
    return (
        <main>
            <Header></Header>
            <Favorites></Favorites>
            <Products></Products>
            <Footer></Footer>
        </main>
    );
}