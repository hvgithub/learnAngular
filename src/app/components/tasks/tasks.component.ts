import { Component, OnInit, Input } from '@angular/core'
import { TaskService } from 'src/app/services/task.service'
import { TaskDefn } from '../../interfaces/Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  comptasks: TaskDefn[] = []
  constructor (private localTaskService: TaskService) {}

  ngOnInit (): void {
    this.localTaskService
      .getTasks()
      .subscribe(tasks => (this.comptasks = tasks))
  }

  deleteTask (task: TaskDefn) {
    console.log('I am here', task.id)
    this.localTaskService.deleteTasksSrv(task).subscribe(() =>
      this.comptasks.filter(item => {
        item.id !== task.id
      })
    )
  }
  updateReminder (task: TaskDefn) {
    task.reminder = !task.reminder
    this.localTaskService.updateTaskSrv(task).subscribe()
  }
}
