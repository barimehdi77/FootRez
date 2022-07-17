import { Strategy, profile } from "passport-42";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { expand } from "rxjs";
import { Profile } from "passport";
import { ValidationDecoratorOptions } from "class-validator";


@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super(
			{
				clientID: process.env.FORTYTWO_CLIENT_ID,
				clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
				callbackURL: process.env.CALLBACK_URL,
				scope: 'public',
			},

		);
	}

	async validate(accessToken: string, refreshToken: string, profile: Profile, done: any)
	{
		const { username, displayName, provider } = profile;
		console.log(accessToken);
		console.log(refreshToken);
	}
}
