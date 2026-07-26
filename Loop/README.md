What is loop

A loop is used to execute a block of code repeatedly until a condition becomes false.

Types of Loops

# For Loop in JavaScript

The for loop is used to execute a block of code repeatedly until a specified condition becomes false

 Parts of a for Loop
1️⃣ Initialization
let i = 0;
Runs only once before the loop starts.
Declares and initializes the loop variable.
Sets the starting point of the loop.
2️⃣ Condition
i <= 5
Checked before every iteration.
If the condition is true, the loop body executes.
If the condition is false, the loop terminates.
3️⃣ Update (Increment / Decrement)
i++

Equivalent to:

i = i + 1;
Executes after every iteration.
Updates the loop variable for the next iteration.

A `for` loop follows this execution order:

```
Initialization
      ↓
Condition
      ↓
Loop Body
      ↓
Update
      ↓
Condition
      ↓
Repeat...
```

Understanding this execution flow is the foundation for solving array traversal, pattern printing, searching, sorting, and many DSA problems.