using System;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static void number(){
            for(int i =1; i< 55; i++){
                Console.WriteLine(i);
            }
        }

        public static void oddNumber(){
            for(int i= 1; i < 255; i++){
                if(i %2 ==0){
                    Console.WriteLine(i);
                }
            }
        }
        public static void print(int[] arr){
           for(int j=arr[0]; j<arr.Length; j++){
               Console.WriteLine(j);
           }
        }
        public static void sumNumber(){
            int sum =0;
            for(int i =0; i< 50; i++){
                sum += i;
                Console.WriteLine("The new number is: " + i + " the sum number is: " + sum);
            }
        }
        public static int findMax(int[] arr){
          int max = 0;
          for(int i =0; i< arr.Length; i++){
              if(arr[i] > max){
                  max =arr[i];
              }
              Console.WriteLine(max);
          }
          return max;
        }

        public static void average(int[] arr){
          int sum = 0;
          int aver = 0;
          for(int i =0; i<arr.Length; i++){
              sum += arr[i];
          }
          aver = sum/ arr.Length;
          Console.WriteLine(aver);
        }

        public static void Square(int[] arr){
        for(int i =0; i<arr.Length; i++){
            arr[i] = arr[i]*arr[i];
            Console.WriteLine(arr[i]);
           }
           
        }

        public static void replace(int[] arr){
        for(int i =0; i<arr.Length; i++){
            if(arr[i] < 0){
                arr[i] = 0;
            }
            Console.WriteLine(arr[i]);
           }
        }

        public static void odd(int[] arr){
          List<int> newlist = new List<int>(arr);
          Random rand = new Random();
          for(int j =0; j < 2; j++){
              int randNumber = rand.Next(1,newlist.Count);   
            for(int i =0; i<newlist.Count; i++){
              if( newlist[i] < randNumber){
                newlist.RemoveAt(newlist[i]);
                Console.WriteLine(newlist);
            }
          }
            }
        }

        public static void Main(string[] args)
        {
            int[] array = {2,3,4,5,6,7,8,9,10};
            int[] array1 = {-2,-3,4,5,6,7,8,9};
           // number();
           // oddNumber();
           // sumNumber();
           // print(array);
           // findMax(array);
           // average(array);
           // Square(array);
           // replace(array1);
           // odd(array);
        }
    }
}
