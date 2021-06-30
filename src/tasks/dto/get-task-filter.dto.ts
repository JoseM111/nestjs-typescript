/** @get-task-filter.dto.ts | */
import { EnumTaskStatus } from "tasks/models/tasks.model"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export class GetTaskFilterDto {
	//: - ©PROPERTIES
	status?: EnumTaskStatus
	search?: string
}
/// - END OF: GetTaskFilterDto
