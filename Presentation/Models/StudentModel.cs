using System.Security.Principal;
namespace Presentation.Models
{
    public class StudentImputModel
    {
        public string DocumentType { get; set; }
        public string Identification { get; set; }
        public string Name { get; set; }
        public string DateOfBorn { get; set; }
        public string NameInstitute { get; set; }
        public string NameGuardian { get; set; }
    }

    public class StudentViewModel: StudentImputModel
    {
        public StudentViewModel() {}

        public StudentViewModel(Student student) {
            
            DocumentType = student.DocumentType;
            Identification = student.Identification;
            Name = student.Name;
            DateOfBorn = student.DateOfBorn;
            NameInstitute = student.NameInstitute;
            NameGuardian = student.NameGuardian;
        }

    }
}