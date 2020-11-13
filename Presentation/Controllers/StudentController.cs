namespace Presentation.Controllers
{
    [Route("api/[controller]")]  // api/Student
    [ApiController]
    public class StudentController: ControllerBase
    {
        private readonly StudentService studentService;
        public PersonController(SecondParcialContext context)
        {
            studentService = new StudentService(context);
        }

        // POST: api/Person
        [HttpPost]
        public ActionResult<StudentViewModel> Save(StudentInputModel studentInput)
        {   
            Student student = MapStudent(studentInput);
            var  response = studentService.Save(student);

            if(response.Error) return BadRequest(response.Message);
            return Ok(response.Student);

        }

        private Student MapStudent(StudentInputModel studentInput)
        {
            var student = new Student
            {
                DocumentType = studentInput.DocumentType;
                Identification = studentInput.Identification;
                Name = studentInput.Name;
                DateOfBorn = studentInput.DateOfBorn;
                NameInstitute = studentInput.NameInstitute;
                NameGuardian = studentInput.NameGuardian;
            };
            return student;
        }
        
    }
}