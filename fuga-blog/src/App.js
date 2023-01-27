
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to Fuga blog';
  // const likes = 50;

  // const link = "https://www.youtube.com/watch?v=WklEO8WVeyI"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        <p>{ "you are the" } { Math.round(Math.random() * 300)}{"th visitor"}</p>
        <a href= { link }> lol very funi plz clik </a> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
