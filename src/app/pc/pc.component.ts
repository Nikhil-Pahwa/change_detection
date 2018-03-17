import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PcComponent implements OnInit {

  sampleArr: Array<string> = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // this.cd.detach();
    setInterval(() => this.sampleArr.push('pc-root'), 1000);
    // setTimeout(() => this.cd.detectChanges(), 3000);
  }

}
