#Exercise 1
# Exercise 1: Outputs (Predictions)
#3 <= 3 < 9
 #True
#(3 ≤ 3 AND 3 < 9 → both true)

#3 == 3 == 3
 #True
#(All values are equal)

#bool(0)
 #False
#(0 is considered False in Python)

#bool(5 == "5")
#False
#(Integer 5 is NOT equal to string "5")
#bool(4 == 4) == bool("4" == "4")
# True
#(True == True → True)
#bool(bool(None))
#False
#(None → False → bool(False) → False)
#Final block:
#x = (1 == True)   # True
#y = (1 == False)  # False
#a = True + 4      # 5
#b = False + 10    # 10
print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)
 #Output:
#x is True
#y is False
#a: 5
#b: 10
#(Reason: True = 1, False = 0 in Python)
#Exercise 2
longest_sentence = ""

while True:
    sentence = input("Enter a sentence without the letter 'A' (or type 'quit'): ")
    
    if sentence.lower() == "quit":
        break
    
    if "a" in sentence.lower():
        print(" Your sentence contains the letter 'A'!")
        continue
    
    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! That's the longest sentence so far!")
#Exercise 3
paragraph = """Learning to code is a valuable skill in today's world.
It helps you solve problems and think logically.
With practice, anyone can become a good programmer."""

num_chars = len(paragraph)

sentences = [s for s in paragraph.split('.') if s.strip() != ""]
num_sentences = len(sentences)

words = paragraph.split()
num_words = len(words)

unique_words = set(word.strip(".,").lower() for word in words)
num_unique_words = len(unique_words)

non_whitespace_chars = len(paragraph.replace(" ", "").replace("\n", ""))

avg_words = num_words / num_sentences if num_sentences > 0 else 0
non_unique_words = num_words - num_unique_words

# Output
print(f"Characters: {num_chars}")
print(f"Sentences: {num_sentences}")
print(f"Words: {num_words}")
print(f"Unique words: {num_unique_words}")
print(f"Non-whitespace characters: {non_whitespace_chars}")
print(f"Average words per sentence: {avg_words}")
print(f"Non-unique words: {non_unique_words}")