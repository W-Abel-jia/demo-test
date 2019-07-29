import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoNameAsyncValidatorService implements AsyncValidator {

  constructor(private httpService: HttpClient) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const validatorUrl = `/Nest/demo?param=${control.value}`;
    return control.dirty ? this.httpService.get(validatorUrl).pipe(map(isTrue => {
      return (isTrue && control.dirty ? {demoNameValidator: true} : null);
    }), catchError(() => null)) : of(null);
  }
}
