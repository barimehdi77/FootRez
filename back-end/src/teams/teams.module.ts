import { Module } from "@nestjs/common";
import { ExpressAdapter } from "@nestjs/platform-express";
import { PrismaService } from "src/app/prisma.service";
import { TeamService } from "./team.service";
import { TeamsController } from "./teams.controller";



@Module({
	controllers: [ TeamsController ],
	providers: [ TeamService, PrismaService ],
	exports: [ TeamService ]
})
export class TeamsModule {}
