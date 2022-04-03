import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { TaskDefn } from 'src/app/interfaces/Task'
import { UiService } from 'src/app/services/ui.service'
import { Observable, Subscription, Subject } from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string
  day!: string
  reminder: boolean = false

  showAddTask: boolean = false
  subscription: Subscription

  @Output() onSubmitUpdateSrv: EventEmitter<TaskDefn> = new EventEmitter()
  constructor (private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => (this.showAddTask = value))
  }

  ngOnInit (): void {}
  onSubmit () {
    if (!this.text) {
      alert('Please add a task')
      return
    }

    const newTask: TaskDefn = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onSubmitUpdateSrv.emit(newTask)
    //Clear the form after submit
    this.text = ''
    this.day = ''
    this.reminder = false
  }
}
