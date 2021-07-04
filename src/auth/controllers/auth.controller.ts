import { Body, Controller, Post } from '@nestjs/common'
import { AuthCredentialsDto } from "auth/dto/auth-credentials.dto"
import { AuthService } from "auth/services/auth.service"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Controller('auth')
export class AuthController {
	/// ======== <> Constructor <> ========
	constructor(private authService: AuthService) {}
	
	/// ======== <> Member methods <> ========
	
	@Post('/signup')
	signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
		//..........
		return this.authService.signUpService(authCredentialsDto)
	}
}
/// - END OF: AuthController

