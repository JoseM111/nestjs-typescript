/** @auth-credentials.dto | */
import { IsString, Matches, MaxLength, MinLength } from "class-validator"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

class MatchPwd {
	static regex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
	static errorMsg = '[ PASSWORD IS TO WEAK PASSWORD ]: Please try again...'
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class AuthCredentialsDto {
	//: - ©PROPERTIES
	@MinLength(4)
	@MaxLength(20)
	@IsString() username: string
	
	@MinLength(8)
	@MaxLength(32)
	@Matches(MatchPwd.regex, { message: MatchPwd.errorMsg })
	@IsString() password: string
}
/// - END OF: AuthCredentialsDto
