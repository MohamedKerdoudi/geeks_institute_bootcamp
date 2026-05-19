import random


class Game:
    def get_user_item(self):
        """Ask user for rock/paper/scissors with validation."""
        valid_choices = ["rock", "paper", "scissors"]

        while True:
            user_input = input("Select (rock/paper/scissors): ").strip().lower()

            if user_input in valid_choices:
                return user_input
            else:
                print("Invalid choice. Please try again.")

    def get_computer_item(self):
        """Randomly select rock/paper/scissors for computer."""
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        """Determine win/draw/loss."""
        if user_item == computer_item:
            return "draw"

        if (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "paper" and computer_item == "rock") or
            (user_item == "scissors" and computer_item == "paper")
        ):
            return "win"

        return "loss"

    def play(self):
        """Play one round of the game."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        if result == "win":
            message = "You win"
        elif result == "loss":
            message = "You lose"
        else:
            message = "You drew"

        print(f"You selected {user_item}. The computer selected {computer_item}. Result: {message}")

        return result