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

    public class VaccineController: ControllerBase
    {
        private readonly VaccineService vaccineService;

        public VaccineController(SecondParcialContext context)
        {
            vaccineService = new VaccineService(context);
        }

         // POST: api/Person
        [HttpPost]
        public ActionResult<VaccineViewModel> Save(VaccineInputModel vaccineInput)
        {   
            Vaccine vaccine = MapVaccine(vaccineInput);
            var  response = vaccineService.Save(vaccine);

            if(response.Error) return BadRequest(response.Message);
            return Ok(response.Vaccine);

        }

        private Vaccine MapVaccine(VaccineInputModel vaccineInput)
        {
            var vaccine = new Vaccine
            {
               IdVaccine = vaccineInput.IdVaccine,
                VaccineType = vaccineInput.VaccineType,
                DateOfVaccine = vaccineInput.DateOfVaccine,
                Age  = vaccineInput.Age,
                IdStudent = vaccineInput.IdStudent
            };
            return vaccine;
        }
    }
}