/** @task.entity.ts | */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { EnumTaskStatus } from "tasks/models/tasks.model"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@Entity() export class Task {
	//: - ©PROPERTIES
	@PrimaryGeneratedColumn('uuid')
	id: string
	@Column() title: string
	@Column() description: string
	@Column() status: EnumTaskStatus
}
/// - END OF: Task
