using System.Linq;
using DAL;
using Entity;

namespace BLL
{
    public class UserService
    {
        private readonly SecondParcialContext _context;
        public UserService(SecondParcialContext context)=> _context = context;
        public User Validate(string userName, string password) 
        {
            return _context.Users.FirstOrDefault(t => t.UserName == userName && t.Password == password && t.Status == "Activo");
        }

        

    }
}