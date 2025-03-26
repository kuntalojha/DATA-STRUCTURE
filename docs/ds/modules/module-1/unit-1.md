---
outline: deep
---

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

### 1. Space Complexity

- It is a function of the space needed by the algorithm to run to completion.
- It is calculated as sum of following two components:

  1.  **Fixed Component-** This includes space of simple variables, constants and instruction
      space . It does not depend on input and output characteristics.
  2.  **Variable Component-** This includes space of reference variables and the recursion
      stack space. It depend on input and output characteristics
      ```md
      Space(A)=Fixed Component(A) + Variable Component(A)
      ```

### 2. Time Complexity

- It is a function of time needed by the algorithm to complete its execution.
- It is calculated by counting the no. of elementary steps performed by algorithm to
  completes its execution.

Example:1

- Computing Space and Time complexity of an algorithm:
  ```md
  1. Algorithm Swap(a,b){
  2. temp = a;
  3. a = b;
  4. b = temp;
  5. }
  ```
  **Space Complexity:**
- Fixed Components are:

```md
Variable Components are:
a - 1 word  
 b - 1 word
temp - 1 word
Total = 3 words
```

Space Complexity=S(n) = 3 words <br>
So, Space Complexity = O(1)

**Time Complexity:**

```md
1.  Algorithm Swap(a,b){ ------- 1 unit of time
2.  temp = a; ----------------- 1 unit of time
3.  a = b; ------------------- 1 unit of time
4.  b = temp; ---------------- 1 unit of time
5.  } -------------------------- 1 unit of time

        Time Complexity = T(n) = (1+1+1+1) = 4
        Time Complexity = O(1)
```

Example:2

- Computing Space and Time complexity of an algorithm:

```md
1. Algorithm Sum(a,n)
2. {
3. s=0.0;
4. for i=1 to n do
5. s=s+a[i];
6. return s;
7. }
```

**Space Complexity:**

- Fixed Components are:

```md
Variable Components are:
s - 1 word
i - 1 word
n - 1 word
Total = 3 words
```

Space Complexity=S(n) = 3 words <br>
So, Space Complexity = O(1)

**Time Complexity:**

```md
1.  Algorithm Sum(a,n){ ------- 1 unit of time
2.  s=0.0; ------------------- 1 unit of time
3.  for i=1 to n do ---------- n+1 unit of time
4.  s=s+a[i]; ---------------- n unit of time
5.  return s; ---------------- 1 unit of time
6.  } ------------------------- 1 unit of time

        Time Complexity = T(n) = (2n+5)
        Time Complexity = O(n)
```

<hr>


Example:3

- Computing Space and Time complexity of an algorithm:

```md
1.  Algorithm Add(A,B,n){ No. of elementary steps
2.  for(i=0;i< n;i++){ ------------------- n+1
3.  for(j=0;j< n;j++){ ------------------- n\*(n+1)
4.                C[i,j]=A[i,j]+B[i,j] -------------   n*n
5.             }
6.  }
7.  }
```

**Time Complexity** = T(n) = (n+1) + n*(n+1) + n*n = 2n<sup>2</sup> + 2n + 1 = O(n<sup>2</sup>)
So, Time Complexity = O(n<sup>2</sup>)

**Space Complexity is** Fixed components are i,j,n------each 1 word=3 words Variable components are A-n*n,B-n*n and C-n\*n=3n<sup>2</sup>  
Total=3n<sup>2</sup>+3
Space complexity=O(n<sup>2</sup>)

## Asymptotic Notations

- Asymptomatic analysis of an algorithm refers to defining the mathematical boundation of its
  runtime performance.
- Using this we can conclude the best case, average case and worst case scenario of an algorithm.
- The time required by an algorithm falls under three types:
  - **Best case:** Minimum time required for program execution (Ω).
  - **Average case:** Average time required for program execution (Θ).
  - **Worst case:** Maximum time required for program execution (O).
- Asymptomatic notations are the expressions that are used to represent the complexity of an
  algorithm.
- **Types of Asymptomatic notations are:**
  1. Big-Oh Notation (O)
  2. Big-Omega Notation (Ω)
  3. Big-Theta Notation (Θ)

