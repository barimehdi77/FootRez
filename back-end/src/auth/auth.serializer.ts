import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "@prisma/client";


// @Injectable()
// export class SessionSerializer extends PassportSerializer {
// 	constructor() {}

// 	serializeUser(user: User, done: (err: Error, user: User) => void) {

// 	}
// 	deserializeUser(user: User, done: (err: Error, user: User) => void) {

// 	}
// }
