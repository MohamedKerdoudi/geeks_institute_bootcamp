# Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


# Instantiate cats
cat1 = Cat("Whiskers", 3)
cat2 = Cat("Milo", 5)
cat3 = Cat("Luna", 2)


# Function to find oldest cat
def find_oldest_cat(cat_list):
    oldest = cat_list[0]
    for cat in cat_list:
        if cat.age > oldest.age:
            oldest = cat
    return oldest


# Use the function
oldest_cat = find_oldest_cat([cat1, cat2, cat3])

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
# Exercise 2: Dogs
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


# Create dogs
davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

# Print details and actions
print(f"David's dog: {davids_dog.name}, height: {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()

print()

print(f"Sarah's dog: {sarahs_dog.name}, height: {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

# Compare dogs
if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}")
else:
    print(f"The bigger dog is {sarahs_dog.name}")
# Exercise 3: Song
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


# Create song object
stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

# Sing the song
stairway.sing_me_a_song()
# Exercise 4: Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped = {}

        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter not in grouped:
                grouped[first_letter] = [animal]
            else:
                grouped[first_letter].append(animal)

        return grouped

    def get_groups(self):
        groups = self.sort_animals()
        for letter, animals in groups.items():
            print(f"{letter}: {animals}")


# Create zoo object
new_york_zoo = Zoo("New York Zoo")

# Add animals
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Emu")

# Display animals
new_york_zoo.get_animals()

print()

# Sell an animal
new_york_zoo.sell_animal("Bear")

# Display again
new_york_zoo.get_animals()

print()

# Show grouped animals
new_york_zoo.get_groups()