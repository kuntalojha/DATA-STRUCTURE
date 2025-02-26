---
outline: deep
---

# Singly linked List

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>
```

## Creation

```c
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




### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
```
