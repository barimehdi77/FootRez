import { Injectable } from "@nestjs/common";
import { TeamsResponseDto } from "./dto/teams.dto";
import { PrismaClient } from "@prisma/client";
// import { Teams } from "src/db";

const prisma = new PrismaClient()


@Injectable()
export class TeamService {
	// private teams = Teams;

	async getTeams() : Promise<TeamsResponseDto[]> {
		const teams = await prisma.teams.create({
			select: prisma.teams
		})
		return (this.teams);
	}

	getTeamById(TeamId: number ) : TeamsResponseDto {
		return (this.teams.find( team => {
			return (team.TeamId == TeamId);
		}))
	}

	CreateNewTeam(Team : TeamsResponseDto) : TeamsResponseDto {
		let NewTeam = {
			TeamId: Math.floor(100000 + Math.random() * 900000),
			...Team
		}
		this.teams.push(NewTeam);
		return (NewTeam);
	}
}
