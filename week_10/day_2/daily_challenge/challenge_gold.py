from datetime import datetime

birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")

today = datetime.today()
age = today.year - birthdate.year

if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

candles = age % 10

candle_line = " " * (11 - candles // 2) + "i" * candles

def print_cake():
    print(candle_line)
    print("       ___iiiii___")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

year = birthdate.year
is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

print_cake()

if is_leap:
    print()  
    print_cake()