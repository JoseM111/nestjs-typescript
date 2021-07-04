/** @user.entity.ts | */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Entity() export class UserEntity {
	//: - ©PROPERTIES
	@PrimaryGeneratedColumn('uuid')
	id: string
	@Column() username: string
	@Column() password: string
}
/// - END OF: UserEntity
