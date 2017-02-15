using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
           for(int i = 0; i < 2; i++){
               Random rand = new Random();
               Console.WriteLine(rand.Next(2,9));
           }
        }
    }
}
