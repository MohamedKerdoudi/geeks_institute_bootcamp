

board = [" " for _ in range(9)]  


def display_board():
    """Displays the current state of the board."""
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")


def player_input(player):
    """Gets valid input from the player."""
    while True:
        try:
            move = int(input(f"Player {player}, enter position (1-9): ")) - 1
            if move < 0 or move > 8:
                print("Invalid position. Choose 1-9.")
            elif board[move] != " ":
                print("That spot is already taken. Try again.")
            else:
                return move
        except ValueError:
            print("Please enter a number between 1 and 9.")


def check_win(player):
    """Checks if the current player has won."""
    win_combinations = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8), 
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  
        (0, 4, 8), (2, 4, 6)              
    ]

    for combo in win_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] == player:
            return True
    return False


def check_tie():
    """Checks if the game is a tie."""
    return " " not in board


def play():
    """Main game loop."""
    current_player = "X"

    while True:
        display_board()

        move = player_input(current_player)
        board[move] = current_player

        if check_win(current_player):
            display_board()
            print(f"🎉 Player {current_player} wins!")
            break

        if check_tie():
            display_board()
            print("🤝 It's a tie!")
            break

        
        current_player = "O" if current_player == "X" else "X"



play()