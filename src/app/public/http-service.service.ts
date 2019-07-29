import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }

  public validatorName(name: string): any {
    const getNameUrl = 'assets/nameList.json';
    this.http.get(getNameUrl).subscribe((nameResult: any) => {
      console.log(nameResult);
      if (nameResult) {
        return nameResult.result.indexOf(name) === -1 ? true : false;
      }
    });

  }
}
