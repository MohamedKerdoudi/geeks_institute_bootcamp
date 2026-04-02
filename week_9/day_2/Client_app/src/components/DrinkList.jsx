import DrinkItem from "./DrinkItem";

function DrinkList({ drinks, selectedDrink, onSelect }) {
  return (
    <div>
      <h3>Select your drink:</h3>
      {drinks.map((drink) => (
        <DrinkItem
          key={drink}
          name={drink}
          isSelected={selectedDrink === drink}
          onClick={() => onSelect(drink)}
        />
      ))}
    </div>
  );
}

export default DrinkList;