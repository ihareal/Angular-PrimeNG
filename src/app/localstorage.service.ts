import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  getInfo(): any[] {
    return JSON.parse(localStorage.getItem('type'));
  }
  setInfo() {
    const tableInfo = [{
      id: 0,
      name: 'name 1',
      type: 'type 1',
      number: 1
    },
    {
      id: 1,
      name: 'name 2',
      type: 'type 2',
      number: 2
    }];

    return localStorage.setItem('type', JSON.stringify(tableInfo));
  }
  public updateEntity(entity) {
    const entities = this.getInfo();
    let original = entities.find(e => e.id === entity.id);
    original.name = entity.name;
    original.type = entity.type;
    original.number = entity.number;
    localStorage.setItem('type', JSON.stringify(tableInfo));
  }
  public deleteEntity(entityID) {
    const entities = this.getInfo();
    let original = entities.find(e => e.id === entityID);
    /// remove js array
    localStorage.setItem('type', JSON.stringify(tableInfo));
  }
  public createEntity(entity) {
    const entities = this.getInfo();
    entities.push(entity);
    localStorage.setItem('type', JSON.stringify(tableInfo));
  }
}
