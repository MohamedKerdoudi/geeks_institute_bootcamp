# Ask the user for a word
word = input("Enter a word: ")
result = {}

for index, letter in enumerate(word):

    if letter not in result:
        result[letter] = []

    result[letter].append(index)

print(result)