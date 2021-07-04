import { Injectable } from '@nestjs/common'
import { InjectRepository } from "@nestjs/typeorm"
import { UsersRepository } from "auth/repositories/users.repository"
import { AuthCredentialsDto } from "auth/dto/auth-credentials.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Injectable()
export class AuthService {
	/// ======== <> Constructor <> ========
	constructor(
		@InjectRepository(UsersRepository)
		private usersRepository: UsersRepository
	) {}
	
	/// ======== <> Member methods <> ========
	
	/** @PostRequest | */
	async signUpService(authCredentialsDto: AuthCredentialsDto): Promise<void> {
		//..........
		return this.usersRepository.userRepoCreateUser(authCredentialsDto)
	}
	
}
/// - END OF: AuthService
