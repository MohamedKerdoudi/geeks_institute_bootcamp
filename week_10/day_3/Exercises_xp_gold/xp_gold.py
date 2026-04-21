# Exercise 1 
birthdays = {
    "Alice": "1995/06/15",
    "Bob": "1990/09/23",
    "Charlie": "1988/12/01",
    "Diana": "1992/03/08",
    "Ethan": "1999/11/30"
}

print("Welcome! 🎉")
print("You can look up the birthdays of the people in the list!")

# Exercise 2 
print("\nHere are the people you can choose from:")
for name in birthdays:
    print("-", name)
person = input("\nEnter a person's name: ")
if person in birthdays:
    print(f"{person}'s birthday is {birthdays[person]}")
else:
    print(f"Sorry, we don’t have the birthday information for {person}.")

# Exercise 3
def special_sum(X):
    X = str(X)
    total = int(X) + int(X*2) + int(X*3) + int(X*4)
    return total
print(special_sum(3))  
# Exercise 4
import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
        
        if dice1 == dice2:
            break
    
    return count

def main():
    results = []  
    
    for _ in range(100):
        result = throw_until_doubles()
        results.append(result)
    
    total_throws = sum(results)
    average = total_throws / len(results)
    
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average:.2f}")

main()