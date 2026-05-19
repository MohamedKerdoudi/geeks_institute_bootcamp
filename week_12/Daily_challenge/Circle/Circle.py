import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is None and diameter is None:
            raise ValueError("You must provide either radius or diameter")

        if radius is not None and diameter is not None:
            
            if radius * 2 != diameter:
                raise ValueError("Radius and diameter are inconsistent")
            self._radius = radius
        elif radius is not None:
            self._radius = radius
        else:
            self._radius = diameter / 2

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2


    def area(self):
        return math.pi * self._radius ** 2

    def __repr__(self):
        return f"Circle(radius={self._radius})"

    def __str__(self):
        return f"Circle with radius {self._radius} and diameter {self.diameter}"


    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self._radius + other._radius)

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return math.isclose(self._radius, other._radius)

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self._radius < other._radius

    def __le__(self, other):
        return self < other or self == other

    def __gt__(self, other):
        return not self <= other

    def __ge__(self, other):
        return not self < other


c1 = Circle(radius=3)
c2 = Circle(diameter=10)
c3 = Circle(radius=2)

print(c1)                 
print(c1.area())         


c4 = c1 + c2
print(c4)

print(c1 > c2)
print(c1 == Circle(radius=3))

circles = [c1, c2, c3]
circles.sort()
print(circles)