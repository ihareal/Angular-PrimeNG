import { Injectable } from '@angular/core';
import {Data} from './_models/data';
import {DataArray} from './_models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  getData(): Data[] {
    return DataArray;
  }
}


