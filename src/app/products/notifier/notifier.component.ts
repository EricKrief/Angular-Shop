import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

  @Input() productName: string;

  constructor() { }

  ngOnInit() { }

}
