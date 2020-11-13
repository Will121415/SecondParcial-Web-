using Entity;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class SecondParcialContext : DbContext
    {
        public SecondParcialContext(DbContextOptions options): base(options){}
        public DbSet<Vaccine> Vaccines { get; set; }
         public DbSet<Student> Students { get; set; }
        
    }
}