using Microsoft.EntityFrameworkCore;
using Persistence;
using Presistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});


var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseAuthorization();
app.MapControllers();

var scope = app.Services.CreateScope();
var Services = scope.ServiceProvider;
try
{
    var context = Services.GetRequiredService<DataContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
}
catch (Exception EX)
{
    var logger = Services.GetRequiredService<ILogger<Program>>();
    logger.LogError(EX,"Error accured while migration");
}

await app.RunAsync();