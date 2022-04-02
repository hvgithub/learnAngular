import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { TaskDefn } from '../../interfaces/Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes
  @Input() task!: TaskDefn

  @Output() onDeleteTask: EventEmitter<TaskDefn> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<TaskDefn> = new EventEmitter()
  constructor () {}

  onDelete (task: TaskDefn): void {
    console.log(task)
    this.onDeleteTask.emit(task)
  }
  onToggle (task: TaskDefn) {
    console.log()
    this.onToggleReminder.emit(task)
  }
  ngOnInit (): void {}
}
