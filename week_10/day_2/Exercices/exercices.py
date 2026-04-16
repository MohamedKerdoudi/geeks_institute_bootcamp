#Exercise 1
print("Hello world\nHello world\nHello world\nHello world")
#Exercise 2
result = (99 ** 3) * 8
print(result)
#Exercise 3
my_name = "Med"  
user_name = input("What is your name? ")

if user_name == my_name:
    print("Whoa, we have the same name! Are we twins?")
else:
    print(f"Nice to meet you, {user_name}! Cool name!")
#Exercise 4
height = int(input("Enter your height in cm: "))

if height > 145:
    print("You are tall enough to ride!")
else:
    print("Sorry, you need to grow a bit more to ride.")
#Exercise 5
my_fav_numbers = {3, 7, 9}
my_fav_numbers.add(11)
my_fav_numbers.add(15)

my_fav_numbers.remove(15)  

friend_fav_numbers = {2, 4, 6}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)
#Exercise 6
# No, you cannot add elements to a tuple because tuples are immutable.
#Exercise 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)
#Exercise 8
sandwich_orders = [
    "Tuna sandwich",
    "Pastrami sandwich",
    "Avocado sandwich",
    "Pastrami sandwich",
    "Egg sandwich",
    "Chicken sandwich",
    "Pastrami sandwich"
]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")