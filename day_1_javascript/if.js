const number = 5;

// if the expression given to the `if` statement returns true then the code
// within the brackets will be executed, otherwise, it will be ignored
if(number > 10) {
  console.log('The number is big');
}


if(number > 10) {
  console.log('The number is big');
} else {
  console.log('The number is small');
}


if(number > 10) {
  console.log('The number is big');
} else if(number > 5) {
  console.log('The number is medium');
} else {
  console.log('The number is small');
}

/*
- You must have at least one `if` that takes an expression, the expression should
ideally return true or false.
- You can optionally have as many `else if` as you wish and you must also suplly
an expression to the `else if`
- You can optionally have an `else` statement that should not take any expression
if none of the conditions in the `if` and `else if` have been meet then it will
execute what inside the `else` block

*/
