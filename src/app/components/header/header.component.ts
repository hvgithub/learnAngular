import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'sriramajayam'

  constructor () {}

  ngOnInit (): void {}

  toggleAddTaskDefn () {
    alert('I am here')
  }
  helloWorld () {
    alert('2nd button func - hello wrold')
  }
}
