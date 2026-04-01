import { useState } from "react";
import UserWelcome from "./components/UserWelcome";
import RobotStatus from "./components/RobotStatus";
import DrinkList from "./components/DrinkList";
import BrewButton from "./components/BrewButton";

function CoffeeOrderScreen() {
  const [userName] = useState("Yassine");
  const [status, setStatus] = useState("Ready"); // Ready | Busy
  const [selectedDrink, setSelectedDrink] = useState(null);

  const drinks = ["Espresso", "Americano", "Latte"];

  const handleBrew = () => {
    if (!selectedDrink || status === "Busy") return;

    setStatus("Busy");

    setTimeout(() => {
      alert(`${selectedDrink} is ready! ☕`);
      setStatus("Ready");
      setSelectedDrink(null);
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <UserWelcome userName={userName} />

      <RobotStatus status={status} />

      <DrinkList
        drinks={drinks}
        selectedDrink={selectedDrink}
        onSelectDrink={setSelectedDrink}
      />

      <BrewButton
        disabled={!selectedDrink || status === "Busy"}
        onClick={handleBrew}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
};

export default CoffeeOrderScreen;