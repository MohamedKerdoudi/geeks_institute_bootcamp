import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";
import CelebrityCard from "./CelebrityCard";

function App() {

  const myElement = <h1>I Love JSX!</h1>;

  const sum = 5 + 5;

  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

 
  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl:
        "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description:
        "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
    },
    {
      title: "Paul McCartney",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
      description:
        "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
    },
  ];

  
  const planets = [
    "Mars",
    "Venus",
    "Jupiter",
    "Earth",
    "Saturn",
    "Neptune",
  ];

  return (
    <div>

     
      <p>Hello World!</p>

      {myElement}

      <p>React is {sum} times better with JSX</p>

      
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      
      <Exercise />

      
      <div className="flex flex-wrap justify-center mt-10">
        {celebrities.map((celebrity, index) => (
          <CelebrityCard
            key={index}
            title={celebrity.title}
            imageUrl={celebrity.imageUrl}
            description={celebrity.description}
            buttonLabel={celebrity.buttonLabel}
            buttonUrl={celebrity.buttonUrl}
          />
        ))}
      </div>

      
      <ul className="max-w-md mx-auto mt-10">
        {planets.map((planet, index) => (
          <li
            key={index}
            className="border p-3 mb-2 rounded bg-gray-100"
          >
            {planet}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;