import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  serverElements = [{type:'server',name:'testServer',content:'Just a test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  loadedFeature = 'recipe';

  onServerAdded(serverData:{serverName: string,serverContent: string}) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    })
  }

  onBlueprintAdded(blueprintData:{serverName: string,serverContent: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestoryFirst() {
    this.serverElements.splice(0,1);
  }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
