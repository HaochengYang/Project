using System;
namespace ConsoleApplication
{
    
    public class dojodachi
    {

         public int Fullness = 20;
         public int Energy = 50;
         public int Meals = 3;
         public int Happiness = 20;

    public static void Feeding(int Meals, int Happiness){
        Meals -= 1; 
        Random rand = new Random();
        for(int i =0; i<2; i++){
            Fullness += rand.Next(5,10);
        }
      }

      public static void Play(int Energy, int Happiness){
          Energy -= 5;
          for(int i =0; i<2; i++){
            Happiness += rand.Next(5,10);
        }
      }

      public static void Work(int Energy, int Meals){
          Energy -= 5;
          for(int i =0; i<2; i++){
            Meals += rand.Next(1,3);
        }
      }

      public static void Sleep(int Energy, int Happiness, int Fullness){
          Energy += 15;
          Happiness -= 5;
          Fullness -= 5;
      }

    }


    public class Program
    {
        public static void Main(string[] args)
        {
  
            dojodachi newDochi = new dojodachi();
            Console.WriteLine($"My Dochi has {newDochi.Happiness}");
        }
    }
}