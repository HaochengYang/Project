using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
namespace SurveyApplication
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}