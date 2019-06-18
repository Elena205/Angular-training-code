export class MyServersService {
  private servers: {id: number, name: string, status: string}[] = [
    {id: 1, name: 'Productionserver', status: 'online'},
    {id: 2, name: 'Testserver', status: 'offline'},
    {id: 3, name: 'Devserver', status: 'offline'},
  ];

  getServers() {
    return this.servers;
  }
}