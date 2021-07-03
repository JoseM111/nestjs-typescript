/** @get-task-filter.dto.ts | */
import { EnumTaskStatus } from "tasks/models/task-status.enum"
import { IsEnum, IsOptional, IsString } from "class-validator"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class GetTaskFilterDto {
	//: - ©PROPERTIES
	@IsEnum(EnumTaskStatus)
	@IsOptional() status?: EnumTaskStatus
	
	@IsString()
	@IsOptional() search?: string
}
/// - END OF: GetTaskFilterDto
