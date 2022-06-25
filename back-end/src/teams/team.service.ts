import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/app/prisma.service";
import { TeamsResponseDto } from "./dto/teams.dto";
// import { Teams } from "src/db";

@Injectable()
export class TeamService {
	constructor (private prisma: PrismaService) {}
	// private teams = Teams;

	getTeams() {
		return (this.prisma.team.findMany({
			include: {
				players: {
					select: {
						name: true,
						age: true,
					}
				}
			}
		}));
	}

	getTeamById(where: Prisma.TeamWhereUniqueInput ) {
		return (this.prisma.team.findUnique({
			where,
			include: {
				players: {
					select: {
						name: true,
						age: true,
					}
				}
			}
		}));
	}

	CreateNewTeam(data: Prisma.TeamUncheckedCreateInput) {
		return (this.prisma.team.create({
			data,
		}));
	}

	DeleteTeam ( where: Prisma.TeamWhereUniqueInput) {
		return (this.prisma.team.delete({
			where,
		}))
	}
}
