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
}
