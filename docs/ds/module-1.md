---
outline: deep
---

# Day 1 (6/2 P-3)

## Swap two numbers

**Q.1 Write a program to swap two numbers.**

```c
#include <stdio.h>
int main() {
  int a, b, temp;
  printf("Enter first numbers: ");
  scanf("%d", &a);
  printf("Enter second numbers: ");
  scanf("%d", &b);
  printf("Before swapping: a = %d, b = %d", a, b);
  temp = a;
  a = b;
  b = temp;
  printf("After swapping: a = %d, b = %d", a, b);
  return 0;
}
```

**Q.2 Write a program to swap two numbers without using third variable.**

- **Method 1**

```c
#include <stdio.h>
int main() {
  int a, b;
  printf("Enter first numbers: ");
  scanf("%d", &a);
  printf("Enter second numbers: ");
  scanf("%d", &b);
  printf("Before swapping: a = %d, b = %d", a, b);
  a = a + b;
  b = a - b;
  a = a - b;
  printf("After swapping: a = %d, b = %d", a, b);
  return 0;
}
```

- **Method 2**

```c
#include <stdio.h>
int main() {
  int a, b;
  printf("Enter first numbers: ");
  scanf("%d", &a);
  printf("Enter second numbers: ");
  scanf("%d", &b);
  printf("Before swapping: a = %d, b = %d", a, b);
  a = a * b;
  b = a / b;
  a = a / b;
  printf("After swapping: a = %d, b = %d", a, b);
  return 0;
}
```

- **Method 3**

```c
#include <stdio.h>
int main() {
  int a, b;
  printf("Enter first numbers: ");
  scanf("%d", &a);
  printf("Enter second numbers: ");
  scanf("%d", &b);
  printf("Before swapping: a = %d, b = %d", a, b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  printf("After swapping: a = %d, b = %d", a, b);
  return 0;
}
```

## Data Structure

- Data Structure is a way to store and organize data in a computer so that it can be used
  efficiently.
- A data structure is seen as a logical concept that address two fundamental concerns.

  1.  How the data will be stored, and
  2.  What operations will be performed on it.

- There are two types of data structures-Linear and Non-Linear Data Structures.
- Examples: Arrays,Stack,Queues,Trees, etc.

## Algorithm

- An Algorithm is a finite set of instructions that, if followed, accomplishes a particular
  task or purpose.
- **Characteristics of an Algorithm:**

  1.  **INPUT:** Zero or more quantities are externally supplied.
  2.  **OUTPUT:** At least one quantity is produced.
  3.  **DEFINITENESS:** Each instruction is clear and unambiguous.
  4.  **FINITENESS:** If we trace out the instructions of an algorithm, then for all cases,
      the algorithm terminates after a finite number of steps.
  5.  **EFFECTIVENESS:** An algorithm is also generally expected to be effective. This
      means that all of the operations to be performed in the algorithm must be sufficiently basic that they can in principle be done exactly and in a finite length of
      time.

# Day 2 (11/2 P-4)

## Algorithm can be described in three ways

- **Natural language like English:** In this any natural language is used to describe the
  algorithm. This is informal way of describing the algorithm.
- **Graphic representation called flowchart:** This method will work well when the
  algorithm is small and simple.
- **Pseudo-code Method:** In this method, we should typically describe algorithms as
  program, It uses the structural conventions of a normal programming language, but is
  intended for human reading rather than machine reading. There is no need to follow all
  the syntax rules of a programming language. It is also called as flow diagram.

## Data Abstraction

- Abstraction means displaying only essential information and hiding the details. Data
  abstraction refers to providing only essential information about the data to the outside world,
  hiding the background details or implementation.

**Performance analysis** of an **algorithm** depends upon two factors i.e. amount of memory used
and amount of compute time consumed on any CPU.

**It can done using following two complexities:**

## 1. Space Complexity

- It is a function of the space needed by the algorithm to run to completion.
- It is calculated as sum of following two components:

  1.  **Fixed Component-** This includes space of simple variables, constants and instruction
      space . It does not depend on input and output characteristics.
  2.  **Variable Component-** This includes space of reference variables and the recursion
      stack space. It depend on input and output characteristics
      ```md
      Space(A)=Fixed Component(A) + Variable Component(A)
      ```

## 2. Time Complexity

- It is a function of time needed by the algorithm to complete its execution.
- It is calculated by counting the no. of elementary steps performed by algorithm to
  completes its execution.
