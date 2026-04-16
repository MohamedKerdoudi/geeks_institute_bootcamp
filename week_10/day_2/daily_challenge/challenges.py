#challenge1
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print(multiples)
#challenge2
word = input("Enter a word: ")

result = ""

for i in range(len(word)):
    if i == 0 or word[i] != word[i - 1]:
        result += word[i]

print(result)