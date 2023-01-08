// Calculate the factorial of a given number recursively and find its time and space analysis
function factorial(x)
{
    if (x === 0)
    {
        return 1;
    }
    return x * factorial(x-1);
}
console.log(factorial(5));


   /**
 * factorial(0) is only one comparison (1 unit of time)
   From the above analysis we can write:
   T(n)= T(n-1) + 3
   T(0) = 1
   
   T(n) = T(n-1) + 3
   = T(n-2) + 6
   = T(n-3) + 9
   = T(n-4) + 12
   = ...
   = T(n-k) + 3k
   as we know T(0) = 1
   We need to find the value of k for which n - k = 0, k = n
   T(n) = T(0) + 3n, k = n
   = 1 + 3n
   This gives us a time complexity of O(n)
   Space Complexity:
   For every call to the recursive function, the state is saved onto the call stack, till the value is computed
   and returned to the called function.
   
   Here we don’t assign an explicit stack, but an implicit call stack is maintained
   f(6) -> f(5) -> f(4) -> f(3) -> f(2) -> f(1) -> f(0)
   f(6) -> f(5) -> f(4) -> f(3) -> f(2) -> f(1)
   f(6) -> f(5) -> f(4) -> f(3) -> f(2)
   f(6) -> f(5) -> f(4) -> f(3)
   f(6) -> f(5) -> f(4)
   f(6) -> f(5)
   f(6)
   The function in bold is the one currently being executed. As you can see for f(6) a stack of 6 is
   required till the call is made to f(0) and a value is finally computed. Hence for factorial of N, a stack of
   size N will be implicitly allocated for storing the state of function calls.
   The space complexity of recursive factorial implementation is O(n)
   */
