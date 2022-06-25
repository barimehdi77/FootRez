import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { TeamInfoDto, TeamsResponseDto } from "./dto/teams.dto";
import { TeamService } from "./team.service";


@Controller('teams')
export class TeamsController {

	constructor (private readonly teamService: TeamService) {};

	@Get()
	getTeams() {
		return (this.teamService.getTeams());
	}

	@Get('/:TeamId')
	getTeamById(
		@Param('TeamId') TeamId: number,
	) {
		return (this.teamService.getTeamById({id: +TeamId}));
	}

	@Post()
	CreateNewTeam(
		@Body() TeamInfo: Prisma.TeamCreateInput,
	) {
		return (this.teamService.CreateNewTeam(TeamInfo));
	}

	@Delete(':TeamId')
	DeleteTeam(
		@Param('TeamId') TeamId: number,
	) {
		return (this.teamService.DeleteTeam({id: +TeamId}));
	}
}
