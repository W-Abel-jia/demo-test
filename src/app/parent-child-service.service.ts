import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentChildServiceService {
  private transformData = new Subject<string>();
  transform = this.transformData.asObservable();

  constructor() {
  }

  setTransformData(data: string) {
    this.transformData.next(data);
  }
}
