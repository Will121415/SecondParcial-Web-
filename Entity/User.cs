using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class User
    {
        [Key]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Status { get; set; }
        public string Role { get; set; }

    }
}