/** @users.repository.ts | */
import { UserEntity } from "auth/entities/user.entity"
import { EntityRepository, Repository } from "typeorm"
import { AuthCredentialsDto } from "auth/dto/auth-credentials.dto"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
	/// ======== <> Member methods <> ========
	
	/** @PostRequest | */
	async userRepoCreateUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
		//..........
		const { username, password } = authCredentialsDto
		
		const newUser = this.create({ username, password })
		await this.save(newUser)
	}
}
/// - END OF: UsersRepository
