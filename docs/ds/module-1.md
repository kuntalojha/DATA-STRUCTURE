---
outline: deep
---

# Day 1 (6/2 P-3)

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

## Data Structure:

- Data Structure is a way to store and organize data in a computer so that it can be used
  efficiently.
- A data structure is seen as a logical concept that address two fundamental concerns.

  1.  How the data will be stored, and
  2.  What operations will be performed on it.

- There are two types of data structures-Linear and Non-Linear Data Structures.
- Examples: Arrays,Stack,Queues,Trees, etc.

## Algorithm:

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

