from game import Game


def get_user_menu_choice():
    """Display menu and get user choice (no looping here)."""
    print("\nMenu:")
    print("(g) Play a new game")
    print("(s) Show scores and exit")
    print("(x) Quit")

    choice = input("Enter choice: ").strip().lower()
    return choice


def print_results(results):
    """Print summary of all games."""
    print("\nGame Results:")
    print(f"You won {results.get('win', 0)} times")
    print(f"You lost {results.get('loss', 0)} times")
    print(f"You drew {results.get('draw', 0)} times")
    print("\nThank you for playing!")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "g":
            game = Game()
            result = game.play()

            if result in results:
                results[result] += 1

        elif choice == "s" or choice == "x":
            print_results(results)
            break

        else:
            print("Invalid menu choice. Try again.")


if __name__ == "__main__":
    main()  