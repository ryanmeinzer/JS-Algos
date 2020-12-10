/*

Phrase              Big-O               Input Range                 Popular Algorigthm                  Description
______              _____               ___________                 __________________                  ___________

Contant             0(1)                1 to ∞                      Hashing, Two Pointers               same work regardless
                                                                                                        of input



Logarithmic         0(log n)            1 to ~∞                     Binary Search                       iterates through fraction
                                                                                                        of input, usually recursively


Linear              0(n)                1 to 1M                     DFS, BFS, Linear Search             time increase at same rate  
                                                                                                        as input increases


Linearithmic        0(n log n)          1 to 1M                     Merge Sort and Quick Sort           when depth of recursion is 
                                                                                                        logarithmic, but input size
                                                                                                        at each recursion is same

Polynomial-         0(n^2)              1 to 5K                     Bubble Sort                         when comparing each element
Quadratic                                                                                               to all other elements



Polynomial-         0(n^3)              1 to 500                    Dynamic Programming                 when 0(n^2) subproblems with
Cubic                                                                                                   each having inner loop



Exponential         0(c^n)              1 to 20-30                  Subsets                             each input increase causes 
                                                                                                        time increase by factor of c



Factorial           0(n!)               1 to 12                     Permutations, Travelling Salesman   time increases by n!

*/

