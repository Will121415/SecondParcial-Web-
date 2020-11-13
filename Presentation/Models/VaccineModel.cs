using System.Security.Principal;
using Entity;
namespace Presentation.Models
{
    public class VaccineInputModel
    {
        public string IdVaccine { get; set; }
        public string VaccineType { get; set; }
        public string DateOfVaccine { get; set; }
        public string Age { get; set; }
        public string IdStudent { get; set; }
    }

    public class VaccineViewModel: VaccineInputModel
    {
        public VaccineViewModel() {}

        public VaccineViewModel(Vaccine vaccine) {
            IdVaccine = vaccine.IdVaccine;
            VaccineType = vaccine.VaccineType;
            DateOfVaccine = vaccine.DateOfVaccine;
            Age  = vaccine.Age;
            IdStudent = vaccine.IdStudent;
        }


    }
}