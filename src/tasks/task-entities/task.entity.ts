/** @task.entity.ts | */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { EnumTaskStatus } from "tasks/models/task-status.enum"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Entity() export class TaskEntity {
	//: - ©PROPERTIES
	@PrimaryGeneratedColumn('uuid')
	id: string
	@Column() title: string
	@Column() description: string
	@Column() status: EnumTaskStatus
}
/// - END OF: TaskEntity
