/** @UpdateTaskStatus.dto.ts | */
import { EnumTaskStatus } from "tasks/models/task-status.enum"
import { IsEnum } from "class-validator"

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class UpdateTaskStatusDto {
	//: - ©PROPERTIES
	@IsEnum(EnumTaskStatus)
	status: EnumTaskStatus
	
}
/// - END OF: UpdateTaskStatusDto
