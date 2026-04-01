import DrinkItem from "./DrinkItem";

function DrinkList({ drinks, selectedDrink, onSelectDrink }) {
  return (
    <div>
      <h3>Select Your Drink</h3>
      {drinks.map((drink) => (
        <DrinkItem
          key={drink}
          name={drink}
          isSelected={selectedDrink === drink}
          onClick={() => onSelectDrink(drink)}
        />
      ))}
    </div>
  );
}

export default DrinkList;