import { useState } from "react";
import UserWelcome from "./UserWelcome";
import DrinkList from "./DrinkList";
import RobotStatus from "./RobotStatus";
import BrewButton from "./BrewButton";

const drinksData = ["Espresso", "Americano", "Latte"];

function CoffeeOrderScreen() {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [robotStatus, setRobotStatus] = useState("Ready");
  const userName = "Yassine";

  const handleBrew = () => {
    if (!selectedDrink) {
      alert("Please select a drink first!");
      return;
    }

    setRobotStatus("Busy");

    setTimeout(() => {
      alert(`${selectedDrink} is ready! Enjoy!`);
      setRobotStatus("Ready");
      setSelectedDrink(null);
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <UserWelcome name={userName} />

      <RobotStatus status={robotStatus} />

      <DrinkList
        drinks={drinksData}
        selectedDrink={selectedDrink}
        onSelect={setSelectedDrink}
      />

      <BrewButton onClick={handleBrew} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
};

export default CoffeeOrderScreen;