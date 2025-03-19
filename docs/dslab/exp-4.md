---
outline: deep
---

# Singly linked List

<!-- [[toc]] -->

## Linked List Overview

- A linked list is a linear data structure storing elements of the same type in non-contiguous memory.

- It consists of nodes, each containing:

  1. **Data field** (stores the value).
  2. **Next pointer** (stores the address of the next node).

- Only the current node knows the location of the next node.
- So, We can traverse the Singly Linked List only in the forward direction.

## Creation

```c
// Function to create a new node
struct node* createNode(int data) {
    struct node *newNode = (struct node*)malloc(sizeof(struct node)); // Allocate memory
    newNode->data = data; // Assign data to the data part
    newNode->link = NULL; // Assign NULL to the link part
    return newNode;
}
```

## Insertion

### Insertion at the beginning.

```c
// Function to add a node at the beginning
struct node* addAtBeginning(struct node *head, int data) {
    struct node *ptr = (struct node*)malloc(sizeof(struct node));
    ptr->data = data;
    ptr->link = head;
    head = ptr;

    return head;
}
```

### Insertion at the end

```c
// Function to add a node at the end
void addAtEnd(struct node *head, int data) {
    struct node *ptr, *temp;
    ptr = head;

    temp = (struct node*)malloc(sizeof(struct node));
    temp->data = data;
    temp->link = NULL;

    while (ptr->link != NULL) {
        ptr = ptr->link;
    }
    ptr->link = temp;
}

```

### Insertion at a specific position

```c
// Function to add a node at the Nth position
struct node* addAtNthPosition(struct node *head, int data, int position) {
    struct node *ptr = head;

    // Create a new node
    struct node *temp = (struct node*) malloc(sizeof(struct node));
    temp->data = data;
    temp->link = NULL;

    if(position == 1){
        temp->link = head;
        head = temp;
        return head;
    }

    for (int i = 1; i < position-1 && ptr != NULL; i++) {
        ptr = ptr->link;
    }

    temp->link = ptr->link;
    ptr->link = temp;

    return head;
}
```

## Deletion

### Deletion at the beginning

```c
// Function to delete a node at the beginning
struct node* deleteAtBeginning(struct node *head) {
    struct node *ptr = head;
    head = head->link;
    free(ptr);

    return head;
}
```

### Deletion at the end

```c
// Function to delete a node at the end
struct node* deleteAtEnd(struct node *head) {
    struct node *ptr = head;
    struct node *ptr2 = head;

    while (ptr->link != NULL) {
        ptr = ptr->link;
        ptr2 = ptr2->link;
    }
    ptr2->link = NULL;
    free(ptr);

    return head;
}
```

### Deletion at a specific position

```c
// Function to delete a node at the Nth position
struct node* deleteAtNthPosition(struct node *head, int position) {
    struct node *ptr = head;
    struct node *ptr2 = head;

    if(position == 1){
        head = head->link;
        free(ptr);
        return head;
    }

    for (int i = 1; i < position-1 && ptr != NULL; i++) {
        ptr = ptr->link;
    }

    ptr2 = ptr->link;
    ptr->link = ptr2->link;
    free(ptr2);

    return head;
}
```

## Traversal

### Display the linked list

```c
// Function to display the linked list
void display(struct node *head){

   if(head == NULL){
     printf("Linked list is empty");
   }
   else{
    // Take a temporary pointer ptr
     struct node *ptr = NULL;
     ptr = head;

     while(ptr != NULL){
       printf("%d -> ",ptr->data);
       ptr = ptr->link;
     }
     printf("NULL\n");
   }
}
```

### Count the number of nodes

```c
// Function to count the number of nodes in the linked list
void count (struct node *head){

  int count = 0;
  if(head == NULL){
     printf("Linked list is empty");
   }
  else{
    // Take a temporary pointer ptr
    struct node *ptr = NULL;
    ptr = head;

    while(ptr != NULL){
       count++;
       ptr = ptr->link;
    }
    printf("\nNumber of nodes: %d\n",count);
   }

}
```

## Final Code

```c
#include <stdio.h>
#include <stdlib.h>

// Define the structure
struct node {
    int data;
    struct node *link;
};

// Function to create a new node
struct node* createNode(int data) {
    struct node *newNode = (struct node*)malloc(sizeof(struct node));
    newNode->data = data;
    newNode->link = NULL;
    return newNode;
}

// Function to add a node at the beginning
struct node* addAtBeginning(struct node *head, int data) {
    struct node *ptr = (struct node*)malloc(sizeof(struct node));
    ptr->data = data;
    ptr->link = head;
    head = ptr;

    return head;
}


// Function to add a node at the Nth position
struct node* addAtNthPosition(struct node *head, int data, int position) {
    struct node *ptr = head;

    // Create a new node
    struct node *temp = (struct node*) malloc(sizeof(struct node));
    temp->data = data;
    temp->link = NULL;

    if(position == 1){
        temp->link = head;
        head = temp;
        return head;
    }

    for (int i = 1; i < position-1 && ptr != NULL; i++) {
        ptr = ptr->link;
    }

    temp->link = ptr->link;
    ptr->link = temp;

    return head;
}

// Function to delete a node at the beginning
struct node* deleteAtBeginning(struct node *head) {
    struct node *ptr = head;
    head = head->link;
    free(ptr);

    return head;
}

// Function to delete a node at the end
struct node* deleteAtEnd(struct node *head) {
    struct node *ptr = head;
    struct node *ptr2 = head;

    while (ptr->link != NULL) {
        ptr = ptr->link;
        ptr2 = ptr2->link;
    }
    ptr2->link = NULL;
    free(ptr);

    return head;
}

// Function to delete a node at the Nth position
struct node* deleteAtNthPosition(struct node *head, int position) {
    struct node *ptr = head;
    struct node *ptr2 = head;

    if(position == 1){
        head = head->link;
        free(ptr);
        return head;
    }

    for (int i = 1; i < position-1 && ptr != NULL; i++) {
        ptr = ptr->link;
    }

    ptr2 = ptr->link;
    ptr->link = ptr2->link;
    free(ptr2);

    return head;
}

// Function to display the linked list
void display(struct node *head){

   if(head == NULL){
     printf("Linked list is empty");
   }
   else{
    // Take a temporary pointer ptr
     struct node *ptr = NULL;
     ptr = head;

     while(ptr != NULL){
       printf("%d -> ",ptr->data);
       ptr = ptr->link;
     }
     printf("NULL\n");
   }
}

// Function to count the number of nodes in the linked list
void count (struct node *head){

  int count = 0;
  if(head == NULL){
     printf("Linked list is empty");
   }
  else{
    // Take a temporary pointer ptr
    struct node *ptr = NULL;
    ptr = head;

    while(ptr != NULL){
       count++;
       ptr = ptr->link;
    }
    printf("\nNumber of nodes: %d\n",count);
   }

}

```

## More

Learn more about [Single Linked List](../ds/module-1).
