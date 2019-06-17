import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string,serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string,serverContent: string}>();
  // newServerName = "";
  // newServerContent = "";
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  
  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }
}
