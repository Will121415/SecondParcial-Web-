using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Identification = table.Column<string>(nullable: false),
                    DocumentType = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    DateOfBorn = table.Column<string>(nullable: true),
                    NameInstitute = table.Column<string>(nullable: true),
                    NameGuardian = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Identification);
                });

            migrationBuilder.CreateTable(
                name: "Vaccines",
                columns: table => new
                {
                    IdVaccine = table.Column<string>(nullable: false),
                    VaccineType = table.Column<string>(nullable: true),
                    DateOfVaccine = table.Column<string>(nullable: true),
                    Age = table.Column<string>(nullable: true),
                    IdStudent = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaccines", x => x.IdVaccine);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Vaccines");
        }
    }
}
