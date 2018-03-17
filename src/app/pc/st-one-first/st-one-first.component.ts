import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-st-one-first',
  templateUrl: './st-one-first.component.html',
  styleUrls: ['./st-one-first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StOneFirstComponent implements OnInit {
  td = 'wolla';
  sampleArr: Array<string> = [];
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    //this.cd.detach();
    setInterval(() => this.sampleArr.push('st-one-first'), 1000);
    //setTimeout(() => this.cd.detectChanges(), 3000);
    setTimeout(() => this.cd.detectChanges(), 3000);
  }

}
