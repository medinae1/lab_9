
import './App.css';


const drinks = [
  {name: 'Espresso', isDecaf: true, price:'5.89'},
  {name: 'Cappuccino', isDecaf: false, price:'6.49'},
  {name: 'Latte', isDecaf: false, price:'5.99'},
  {name: 'Mocha', isDecaf: true, price:'6.79'},
  {name: 'Americano', isDecaf: false, price:'4.99'}
];

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
};

function Cafe(){
  
    const listDrinks = drinks.map(drink =>
      <li
      key={drink.name}
      style={{
        color: drink.isDecaf ? 'brown' : 'grey'
      }}
      >
      {drink.name}  $
      {drink.price}
    </li> );
     return (
      <ul>{listDrinks}</ul>
    )
  
}



function Bookshelf() {
  return (
    <div>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

function TipJar(){
  return (
    <div>
      <h3>All and any tips are appreciated!</h3>
      <button>Tip</button>
    </div> 
  );
}
function CafeSign(){
  return(
    <div>
      <h2>Welcome to the Cafe!</h2>
      <p>Drinks in brown have a decaf option!</p>
    </div>

  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <CafeSign />
        <Cafe />
        <Bookshelf />
        <ZineRack />
        <TipJar />
      </header>
      
    </div>
  );
}

export default App;
