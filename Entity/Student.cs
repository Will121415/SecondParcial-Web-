using System.Collections;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Entity
{
    public class Student
    {
        [Key]
        public string DocumentType { get; set; }
        public string Identification { get; set; }
        public string Name { get; set; }
        public string DateOfBorn { get; set; }
        public string NameInstitute { get; set; }
        public string NameGuardian { get; set; }

        
        
        
        
        
        
        
        
        
        
        
        
    }
}
