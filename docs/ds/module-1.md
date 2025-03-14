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

