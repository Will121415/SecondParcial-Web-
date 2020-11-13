using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace BLL
{
    public class VaccineService
    {
        private readonly SecondParcialContext context;

        public VaccineService(SecondParcialContext SecondParcialContext)
        {
            context = SecondParcialContext;            
        }


        public ServiceResponse Save(Vaccine vaccine)
        {
            try
            {
                context.Vaccines.Add(vaccine);
                context.SaveChanges();
                return new ServiceResponse(vaccine);

            }catch(Exception e)
            {
                return new ServiceResponse($"Error del aplicacion: {e.Message}");
            }
        }

        public ConsultResponse GetConsult()
        {
            try
            {
                IList<Vaccine> vaccines = context.Vaccines.ToList();
                return new ConsultResponse(vaccines);
            }catch(Exception e)
            {
                return new ConsultResponse($"Error de aplicacion: {e.Message}");
            }
        }
    }



    public class ServiceResponse
    {
        public ServiceResponse(Vaccine vacine)
        {
            Error = false;
            Vaccine = vacine;
        }

        public ServiceResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public Vaccine Vaccine { get; set; }
    }

    public class ConsultResponse
    {
        public ConsultResponse(IList<Vaccine> vaccines)
        {
            Error = false;
            Vaccines = vaccines;
        }

        public ConsultResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public IList<Vaccine> Vaccines { get; set; }
    }
}
