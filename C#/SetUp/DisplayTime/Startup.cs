using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Logging;

namespace DisplayTime
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
        public void Configure(IApplicationBuilder app, ILoggerFactory LoggerFactory)
        {   
            LoggerFactory.AddConsole();
            app.UseDeveloperExceptionPage();
            app.UseStaticFiles();

            app.UseMvc();
        }
    }
}