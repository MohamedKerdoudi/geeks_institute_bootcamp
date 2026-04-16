#Exercise 1
month = int(input("Enter a month (1-12): "))

if 3 <= month <= 5:
    print("Spring ")
elif 6 <= month <= 8:
    print("Summer ")
elif 9 <= month <= 11:
    print("Autumn ")
elif month == 12 or 1 <= month <= 2:
    print("Winter ")
else:
    print("Invalid month")
#Exercise 2
for i in range(1, 21):
    print(i)
for i in range(1, 21):
    if i % 2 == 0:
        print(i)
#Exercise 3
my_name = "Med"  
while True:
    name = input("Enter your name: ")
    if name == my_name:
        print("That's my name too! ")
        break
#Exercise 4
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Enter a name: ")
if user_name in names:
    print(names.index(user_name))
else:
    print("Name not found")
#Exercise 5
num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3rd number: "))
greatest = max(num1, num2, num3)
print("The greatest number is:", greatest)
#Exercise 6
import random

wins = 0
losses = 0

while True:
    user_input = input("Guess a number (1-9) or 'q' to quit: ")
    
    if user_input.lower() == 'q':
        break
    
    user_number = int(user_input)
    random_number = random.randint(1, 9)
    
    if user_number == random_number:
        print("Winner 🎉")
        wins += 1
    else:
        print(f"Better luck next time. The number was {random_number}")
        losses += 1

print(f"Games won: {wins}")
print(f"Games lost: {losses}")