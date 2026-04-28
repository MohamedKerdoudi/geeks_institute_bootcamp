# Part I & II & III: BankAccount + MinimumBalanceAccount
class BankAccount:
    def __init__(self, balance=0, username="", password=""):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        return False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Deposit amount must be positive")

        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")

        if amount > self.balance:
            raise Exception("Insufficient funds")

        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, username="", password="", minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")

        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot go below minimum balance")

        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")
# Part IV: ATM Class (BONUS)
class ATM:
    def __init__(self, account_list, try_limit):
        # Validate account_list
        if not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("All items must be BankAccount or its subclasses")

        # Validate try_limit
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit. Setting to 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- ATM MENU ---")
            print("1. Log in")
            print("2. Exit")

            choice = input("Choose an option: ")

            if choice == "1":
                username = input("Username: ")
                password = input("Password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Goodbye!")
                break
            else:
                print("Invalid option")

    def log_in(self, username, password):
        for account in self.account_list:
            if account.authenticate(username, password):
                print("Login successful!")
                self.current_tries = 0
                self.show_account_menu(account)
                return

        self.current_tries += 1
        print("Invalid credentials")

        if self.current_tries >= self.try_limit:
            print("Max login attempts reached. Shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\n--- ACCOUNT MENU ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")

            choice = input("Choose an option: ")

            try:
                if choice == "1":
                    amount = int(input("Enter amount: "))
                    account.deposit(amount)

                elif choice == "2":
                    amount = int(input("Enter amount: "))
                    account.withdraw(amount)

                elif choice == "3":
                    print("Logging out...")
                    account.authenticated = False
                    break

                else:
                    print("Invalid option")

            except Exception as e:
                print("Error:", e)
# Example Usage
acc1 = BankAccount(100, "user1", "pass1")
acc2 = MinimumBalanceAccount(200, "user2", "pass2", minimum_balance=50)

atm = ATM([acc1, acc2], try_limit=3)