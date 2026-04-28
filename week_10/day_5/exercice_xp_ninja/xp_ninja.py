# Part I: Basic Game (Fixed Grid)

import time
import copy


class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols

        if initial_state:
            self.grid = initial_state
        else:
            self.grid = [[0 for _ in range(cols)] for _ in range(rows)]

    def display(self):
        for row in self.grid:
            print(" ".join("■" if cell else "." for cell in row))
        print("\n" + "-" * 20)

    def count_neighbors(self, r, c):
        directions = [-1, 0, 1]
        count = 0

        for dr in directions:
            for dc in directions:
                if dr == 0 and dc == 0:
                    continue

                nr, nc = r + dr, c + dc

                if 0 <= nr < self.rows and 0 <= nc < self.cols:
                    count += self.grid[nr][nc]

        return count

    def next_generation(self):
        new_grid = copy.deepcopy(self.grid)

        for r in range(self.rows):
            for c in range(self.cols):
                neighbors = self.count_neighbors(r, c)

                if self.grid[r][c] == 1:
                    # Live cell rules
                    if neighbors < 2 or neighbors > 3:
                        new_grid[r][c] = 0
                else:
                    # Dead cell rule
                    if neighbors == 3:
                        new_grid[r][c] = 1

        self.grid = new_grid

    def run(self, generations=10, delay=0.5):
        for _ in range(generations):
            self.display()
            self.next_generation()
            time.sleep(delay)

blinker = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
]

glider = [
    [0,1,0,0,0],
    [0,0,1,0,0],
    [1,1,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
]

game = GameOfLife(5, 5, glider)
game.run(15, 0.3)
# Part II: Bonus – Expandable Grid

class ExpandingGameOfLife(GameOfLife):
    def expand_grid(self):
        # Add empty border around grid
        new_cols = self.cols + 2

        new_grid = [[0] * new_cols]

        for row in self.grid:
            new_grid.append([0] + row + [0])

        new_grid.append([0] * new_cols)

        self.grid = new_grid
        self.rows += 2
        self.cols += 2

    def next_generation(self):
        self.expand_grid()
        super().next_generation()

game = ExpandingGameOfLife(5, 5, glider)
game.run(20, 0.3)