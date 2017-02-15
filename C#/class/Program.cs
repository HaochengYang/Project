using System;

namespace ConsoleApplication
{
    public class Vehicle
    {
        public int passager =2;
        public int wheel =4;
        public int window;
        public double weight = 6.0;
        public double distance =0.0;
        public Vehicle(int val =0){
            window = val;
        }
          public Vehicle(int val, double odo)
        {
        passager = val;
        distance = odo;
        }
        public int move(double miles){
            distance += miles;
            return (int)distance;
        }
        public int move(double miles, bool km)
        {
         if (km == true)
        {
            miles = miles * 0.62;
        }
        return move(miles);
        }
            }

    public class program{
            public static void Main(string[] args)
        {
            Vehicle audi = new Vehicle(6);
            audi.move(80);
           Console.WriteLine($"This car brand is Audi it has {audi.wheel} wheels, and it can take {audi.passager} passagers." + $" It has {audi.window} windows");
           Console.WriteLine($"The car can move more than {audi.distance} miles");
        }
      }
    }

