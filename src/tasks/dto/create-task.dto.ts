/** @create-task.dto.ts | */
import { IsNotEmpty } from "class-validator"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class CreateTaskDto {
	//: - ©PROPERTIES
	@IsNotEmpty() title: string
	@IsNotEmpty() description: string
}
/// - END OF: CreateTaskDto



