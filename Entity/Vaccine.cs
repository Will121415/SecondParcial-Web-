using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Vaccine
    {
        [Key]
        public string VaccineType { get; set; }
        public string DateOfVaccine { get; set; }
        public string Age { get; set; }
        public string IdStudent { get; set; }
        
        
         
    }
}