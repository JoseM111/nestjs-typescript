/** @tasks.repository.ts | */
import { EntityRepository, Repository } from "typeorm"
import { Task } from "tasks/task-entities/task.entity"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
	//: - ©PROPERTIES
	
	
	
}
/// - END OF: TasksRepository
