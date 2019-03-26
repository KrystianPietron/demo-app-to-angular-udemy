import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: './servers.component.html',
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = 'Demo App Test'
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {

  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was Created! Name is '+this.serverName
  }
  onUpddateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
