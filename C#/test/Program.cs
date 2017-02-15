using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int num =42;
            if(num <= 42){
                Console.WriteLine("You are just equal to 42");
            }
            else if(num > 30){
                Console.WriteLine("You are greater than 30");
            } else {
                Console.WriteLine("you are less than 30");
            }
        }
    }
}
