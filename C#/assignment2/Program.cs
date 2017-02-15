using System;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int[] array1 = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            string[] array2 = new string[] { "Tim", "Martin", "Niki", "sara" };
            bool[] array3 = new bool[10];
            for (int e = 0; e < array3.Length; e++)
            {
                if (e % 2 == 0)
                {
                    array3[e] = false;
                }
                else
                {
                    array3[e] = true;
                }
            }
            int[,] array4 = new int[3, 10]
            {
                {1,2,3,4,5,6,7,8,9,10},
                {2,3,4,5,6,7,8,9,10,11},
                {3,4,5,6,7,8,9,10,11,12}
            };

            List<string> flavors = new List<string>();
            flavors.Add("spicy");
            flavors.Add("sweat");
            flavors.Add("bite");
            flavors.Add("sour");
            flavors.Add("joicy");
            Console.WriteLine(flavors.Count);

            for (var i = 0; i < flavors.Count; i++)
            {
                Console.WriteLine("The third value of the flavors list is: " + flavors[2]);
                flavors.RemoveAt(2);
                Console.WriteLine("right now the index 2 of flavors list is: " + flavors[2]);
                Console.WriteLine("the length of the flavors list is: " + flavors.Count);
            };

            Dictionary<string, string> profile = new Dictionary<string, string>();
            {
                Random rand = new Random();
                for(var j=0; j<2; j++){
                    int value = rand.Next(1,5);
                    profile.Add("name",flavors[value]);
                    
                foreach (var entry in profile){
                    Console.WriteLine(entry.Key + " - " + entry.Value);
            }
                }
        }

        }
    }
}
