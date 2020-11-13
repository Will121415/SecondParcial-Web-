using System.Reflection.Metadata.Ecma335;
using BLL;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using DAL;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]  // api/Student
    [ApiController]
    public class StudentController: ControllerBase
    {
        private readonly StudentService studentService;

        public StudentController(SecondParcialContext context)
        {
            studentService = new StudentService(context);
        }

        // POST: api/Person
        [HttpPost]
        public ActionResult<StudentViewModel> Save(StudentImputModel studentInput)
        {   
            Student student = MapStudent(studentInput);
            var  response = studentService.Save(student);

            if(response.Error) return BadRequest(response.Message);
            return Ok(response.Student);

        }

        private Student MapStudent(StudentImputModel studentInput)
        {
            var student = new Student
            {
                DocumentType = studentInput.DocumentType,
                Identification = studentInput.Identification,
                Name = studentInput.Name,
                DateOfBorn = studentInput.DateOfBorn,
                NameInstitute = studentInput.NameInstitute,
                NameGuardian = studentInput.NameGuardian
            };
            return student;
        }

        [HttpGet("{identification}")]
        public ActionResult<StudentViewModel> SearchById(string identification)
        {
            var response =  studentService.SearchById(identification);

            if(response.Student == null) return NotFound("Estudiante no encontrado!");
            var student = new StudentViewModel(response.Student);
            return Ok(student);
        }
        
    }
}
