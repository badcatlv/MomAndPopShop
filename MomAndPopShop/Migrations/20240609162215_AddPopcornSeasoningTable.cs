using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MomAndPopShop.Migrations
{
    public partial class AddPopcornSeasoningTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PopcornSeasonings",
                columns: table => new
                {
                    PopcornsId = table.Column<int>(type: "int", nullable: false),
                    SeasoningsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PopcornSeasonings", x => new { x.PopcornsId, x.SeasoningsId });
                    table.ForeignKey(
                        name: "FK_PopcornSeasonings_Popcorns_PopcornsId",
                        column: x => x.PopcornsId,
                        principalTable: "Popcorns",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PopcornSeasonings_Seasonings_SeasoningsId",
                        column: x => x.SeasoningsId,
                        principalTable: "Seasonings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PopcornSeasonings_SeasoningsId",
                table: "PopcornSeasonings",
                column: "SeasoningsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PopcornSeasonings");
        }
    }
}
