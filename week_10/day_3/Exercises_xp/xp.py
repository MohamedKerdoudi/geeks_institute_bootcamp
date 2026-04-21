#Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))
print(result)
# Output:

{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
# Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name} has to pay ${price}")
    total_cost += price

print(f"Total cost: ${total_cost}")
#Bonus (user input)
family = {}

while True:
    name = input("Enter name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input("Enter age: "))
    family[name] = age
# Exercise 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2
brand["number_stores"] = 2

# 3
print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}")

# 4
brand["country_creation"] = "Spain"

# 5
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6
del brand["creation_date"]

# 7
print(brand["international_competitors"][-1])

# 8
print(brand["major_color"]["US"])

# 9
print(len(brand))

# 10
print(brand.keys())

# 11
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12
brand.update(more_on_zara)

# 13
print(brand["number_stores"])
# What happened?
#The value was overwritten from 2 to 10000.

# Exercise 4
def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}")

describe_city("Reykjavik")
describe_city("Paris", "France")
# Exercise 5
import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Success! Numbers match.")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

compare_numbers(50)
# Exercise 6
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'")

make_shirt()
make_shirt("medium")
make_shirt("small", "Hello World")

make_shirt(size="large", text="Custom message")
# Exercise 7
import random

def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(5, 23)
    elif season == "summer":
        return random.randint(20, 40)
    elif season == "autumn":
        return random.randint(0, 25)

def main():
    season = input("Enter season (winter, spring, summer, autumn): ").lower()
    temp = get_random_temp(season)

    print(f"The temperature right now is {temp}°C")

    if temp < 0:
        print("Brrr, that's freezing!")
    elif temp <= 16:
        print("Quite chilly!")
    elif temp <= 23:
        print("Nice weather.")
    elif temp <= 32:
        print("Warm!")
    else:
        print("It's hot!")

main()
# Exercise 8
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def play_quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for q in data:
        user_answer = input(q["question"] + " ")
        if user_answer.lower() == q["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({
                "question": q["question"],
                "your_answer": user_answer,
                "correct_answer": q["answer"]
            })

    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print(f"\nCorrect: {correct}")
    print(f"Incorrect: {incorrect}")

    if wrong_answers:
        print("\nWrong answers:")
        for wa in wrong_answers:
            print(f"Q: {wa['question']}")
            print(f"Your answer: {wa['your_answer']}")
            print(f"Correct answer: {wa['correct_answer']}\n")

correct, incorrect, wrong_answers = play_quiz()
show_results(correct, incorrect, wrong_answers)

if incorrect > 3:
    print("You should try again!")