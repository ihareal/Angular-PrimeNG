import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  localId;
  localEntityObject: any[];
  localEntityName: any[];
  localEntityNumber: any[];
  localEntityType: any[];
  constructor() { }
  // delete in future
  tableInfo = [{
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
  getInfo(): any[] {
    return JSON.parse(localStorage.getItem('type'));
  }
  setInfo() {
    return localStorage.setItem('type', JSON.stringify(this.tableInfo));
  }
  public findEntity() {
    const allEntities = this.getInfo();
    const currentEntity = allEntities.find(e => e.id === this.localId);
    return currentEntity;
  }
  ////
  public updateEntity(entity, id) {
    const entities = this.getInfo();
    const original = entities.find(e => e.id === this.localId);
    // original.name = entity.name;
    // original.type = entity.type;
    // original.number = entity.number;
    entities.splice(this.localId, 1, entity);
    localStorage.setItem('type', JSON.stringify(entities));
  }
  public deleteEntity(id) {
    const entities = this.getInfo();
    const entity = entities.find(e => e.id === id);
    const index = entities.indexOf(entity);
    entities.splice(index, 1);
    localStorage.setItem('type', JSON.stringify(entities));
  }
  public createEntity(entity) {
    const entities = this.getInfo();
    entities.push(entity);
    localStorage.setItem('type', JSON.stringify(entities));
  }
  // add tipification getId:Entity
  public getId(entityID) {
    this.localId = entityID;
    const entities = this.getInfo();
    const data = entities.find(i => i.id === this.localId);
    this.localEntityObject = data;
    return this.localEntityObject;
  }
  public getEntityFromTable(entity) {
    this.localEntityName = entity.name;
    this.localEntityNumber = entity.number;
    this.localEntityType = entity.type;
    return this.localEntityObject;
  }
  public setEntity(name, number, type) {
    this.localEntityName = name;
    this.localEntityNumber = number;
    this.localEntityType = type;
    console.log(this.localEntityName, this.localEntityNumber, this.localEntityType);
  }
}
