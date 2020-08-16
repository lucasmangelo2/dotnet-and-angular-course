using AmazingStore.Models;
using Microsoft.EntityFrameworkCore;

namespace AmazingStore.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Product { get; set; }
    }
}
