# Exercise 1

cars_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars_list = cars_string.split(", ")

print(f"There are {len(cars_list)} manufacturers in the list.")

print("Manufacturers in reverse order:")
print(sorted(cars_list, reverse=True))
count_with_o = sum(1 for car in cars_list if 'o' in car.lower())
print(f"Number of manufacturers with 'o': {count_with_o}")

count_without_i = sum(1 for car in cars_list if 'i' not in car.lower())
print(f"Number of manufacturers without 'i': {count_without_i}")
# Bonus 1 
duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_companies = list(set(duplicates))
print("Companies without duplicates:")
print(", ".join(unique_companies))
print(f"There are now {len(unique_companies)} unique companies.")
#Bonus 2

sorted_cars = sorted(cars_list)

reversed_names = [car[::-1] for car in sorted_cars]
print("Names reversed (A-Z order):")
print(reversed_names)
# Exercise 2
def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    
    return full_name.title()
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))
# Exercise 3

morse_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    ' ': '/' 
}

reverse_morse_dict = {v: k for k, v in morse_dict.items()}

def text_to_morse(text):
    text = text.upper()
    return " ".join(morse_dict.get(char, '') for char in text)

def morse_to_text(morse):
    words = morse.split(" / ")
    decoded_words = []
    
    for word in words:
        letters = word.split()
        decoded_word = "".join(reverse_morse_dict.get(letter, '') for letter in letters)
        decoded_words.append(decoded_word)
    
    return " ".join(decoded_words)
    
print(text_to_morse("Hello World"))
print(morse_to_text(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))
# Exercise 4