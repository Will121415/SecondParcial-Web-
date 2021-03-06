﻿// <auto-generated />
using DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DAL.Migrations
{
    [DbContext(typeof(SecondParcialContext))]
    partial class SecondParcialContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entity.Student", b =>
                {
                    b.Property<string>("Identification")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("DateOfBorn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DocumentType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NameGuardian")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NameInstitute")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identification");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("Entity.User", b =>
                {
                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserName");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Entity.Vaccine", b =>
                {
                    b.Property<string>("IdVaccine")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Age")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateOfVaccine")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IdStudent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VaccineType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdVaccine");

                    b.ToTable("Vaccines");
                });
#pragma warning restore 612, 618
        }
    }
}
