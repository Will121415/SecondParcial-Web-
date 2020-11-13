using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using Entity;

namespace BLL
{
    public class StudentService
    {
        private readonly SecondParcialContext context;

        public StudentService(SecondParcialContext SecondParcialContext)
        {
            context = SecondParcialContext;            
        }

        public ServiceResponseStudent Save(Student student)
        {
            try
            {
                context.Students.Add(student);
                context.SaveChanges();
                return new ServiceResponseStudent(student);

            }catch(Exception e)
            {
                return new ServiceResponseStudent($"Error del aplicacion: {e.Message}");
            }
        }

        public ConsultResponseStudent GetConsult()
        {
            try
            {
                IList<Student> students = context.Students.ToList();
                return new ConsultResponseStudent(students);
            }catch(Exception e)
            {
                return new ConsultResponseStudent($"Error de aplicacion: {e.Message}");
            }
        }

        public ServiceResponseStudent SearchById(string identification)
        {
            try 
            {
                Student student = context.Students.Find(identification);
                return new ServiceResponseStudent(student);
            }
            catch (Exception e)
            {
                
                return new ServiceResponseStudent($"Error de la Aplicacion: {e.Message}");
            }
        }



    }

    public class ServiceResponseStudent
    {
        public ServiceResponseStudent(Student student)
        {
            Error = false;
            Student = student;
        }

        public ServiceResponseStudent(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public Student Student { get; set; }
    }

    public class ConsultResponseStudent
    {
        public ConsultResponseStudent(IList<Student> students)
        {
            Error = false;
            Students = students;
        }

        public ConsultResponseStudent(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public IList<Student> Students { get; set; }
    }
}