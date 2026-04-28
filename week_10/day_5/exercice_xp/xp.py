# Exercise 1: Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return sounds


class Chartreux(Cat):
    def sing(self, sounds):
        return sounds

class Siamese(Cat):
    def sing(self, sounds):
        return sounds

cat1 = Bengal("Leo", 2)
cat2 = Chartreux("Milo", 3)
cat3 = Siamese("Luna", 1)

all_cats = [cat1, cat2, cat3]

sara_pets = Pets(all_cats)

sara_pets.walk()
# Exercise 2: Dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} wins the fight"
        else:
            return f"{other_dog.name} wins the fight"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Max", 4, 18)

print(dog1.bark())
print(dog1.fight(dog2))
print(dog2.fight(dog3))
# Exercise 3: PetDog (Inheritance)
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dogs):
        names = [self.name] + [dog.name for dog in dogs]
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet")

pet = PetDog("Rocky", 3, 20)
pet.train()
pet.play(dog1, dog2)
pet.do_a_trick()
# Exercise 4: Family
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations on the new family member: {kwargs.get('name')}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(member)

members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

family = Family("Smith", members)

family.family_presentation()
print(family.is_18("Michael"))

family.born(name="Baby", age=0, gender="Male", is_child=True)
family.family_presentation()
# Exercise 5: The Incredibles
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] < 18:
                    raise Exception(f"{name} is not over 18 years old")
                print(f"{name}'s power is: {member['power']}")

    def incredible_presentation(self):
        print("Here is our powerful family ⚡")
        super().family_presentation()

members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles = TheIncredibles("Incredibles", members)

incredibles.incredible_presentation()

incredibles.born(
    name="Baby Jack",
    age=1,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="JackJack"
)

incredibles.incredible_presentation()

incredibles.use_power("Michael")

try:
    incredibles.use_power("Baby Jack")
except Exception as e:
    print("Error:", e)