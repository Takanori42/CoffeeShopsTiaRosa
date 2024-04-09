import './App.css';
import Header from './components/landingpage/header';
import Items from './components/landingpage/items';
import Welcome from './components/landingpage/welcome';
import Places from './components/landingpage/places';

function App() {
  return (
    <main>
      <Header></Header>
      <Items></Items>
      <Welcome></Welcome>
      <Places></Places>
    </main>
  );
}

export default App;
