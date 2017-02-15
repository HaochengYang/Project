﻿using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace FormApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IWebHost host= new WebHostBuilder()
            .UseKestrel()
            .UseContentRoot(Directory.GetCurrentDirectory()) 
            .UseStartup<Startup>()
            .Build();
        host.Run();
        }
    }
}
