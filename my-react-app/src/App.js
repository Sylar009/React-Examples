import logo from './logo.svg';
import './App.css';

let name = "Sanyam"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello ! {name} </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sed rem. Porro dolorem accusamus aut sit molestiae beatae! Perspiciatis quo illo fugit optio voluptatibus ad atque itaque nesciunt ipsam deleniti!
      </p>
    </div>
    </>
  ); 
}

export default App;
