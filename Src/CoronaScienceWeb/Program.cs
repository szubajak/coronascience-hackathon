namespace CoronaScienceWeb
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using CoronaScienceWeb.Core;
    using CoronaScienceWeb.Core.Statics;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Serilog;
    using Serilog.Events;
    using Serilog.Sinks.SystemConsole.Themes;

    public sealed class Program
    {
        public static string Name { get; } = System.Reflection.Assembly.GetEntryAssembly().GetName().Name;

        public static int Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
                .Enrich.FromLogContext()
                .MinimumLevel.Information()
                .WriteTo.Console(theme: AnsiConsoleTheme.Code)
                .CreateLogger();

            AppDomain.CurrentDomain.ProcessExit += (_, __) =>
            {
                Log.Information($"{Name} => terminated");
                Log.CloseAndFlush();
            };

            try
            {
                Log.Information($"Initiate => {Name}");
                CreateHost(args).Run();
                return 0;
            }
            catch (Exception e)
            {
                Log.Fatal(e, $"{Name} => terminated unexpectedly");
                return 1;
            }
        }

        public static IHost CreateHost(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(SetupWebHost).Build();

        private static void SetupWebHost(IWebHostBuilder builder) =>
            builder.ConfigureServices(SetupServices)
                   .Configure(SetupApp)
                   .UseUrls(Environment.GetEnvironmentVariable(AppEnvironment.ASPNETCORE_URLS));

        private static void SetupServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(c =>
            {
                c.RootPath = "App/dist";
            });
        }

        private static void SetupApp(WebHostBuilderContext c, IApplicationBuilder app)
        {
            app.UseStaticFiles()
               .UseSpaStaticFiles();
            app.UseSpa(b =>
            {
                b.Options.SourcePath = "App";

                if (c.HostingEnvironment.IsDevelopment())
                {
                    b.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}