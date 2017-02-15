using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Jagged array declaration
int[][] jaggedArray = new int[3][];
jaggedArray[0] = new int[5];
jaggedArray[1] = new int[4]; 
jaggedArray[2] = new int[2];
int[][] jaggedArray2 = new int[][] {
    new int[] {1,3,5,7,9},
    new int[] {0,2},
    new int[] {11,22,33,44}
};
// Short-hand form
int[][] jaggedArray3 = {
    new int[] {1,3,5,7,9},
    new int[] {0,2},
    new int[] {11,22,33,44}
};
// You can even mix jagged and multi-dimensional arrays
int[][,] jaggedArray4 = new int[3][,] 
{
    new int[,] { {1,3}, {5,7} },
    new int[,] { {0,2}, {4,6}, {8,10} },
    new int[,] { {11,22}, {99,88}, {0,9} } 
};
// Working through each array in a jagged array
foreach(int[] innerArr in jaggedArray){
    Console.WriteLine("Inner array length is {0}", innerArr.Length);
}
// Accessing a jagged array
Console.WriteLine(jaggedArray2[0][1]); // 3
Console.WriteLine(jaggedArray3[2][3]); // 44

               }
            }
        }


