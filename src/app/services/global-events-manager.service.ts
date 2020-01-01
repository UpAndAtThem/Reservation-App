import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsManagerService {
  // tslint:disable-next-line: variable-name
  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public showNavBarEmitter: Observable<
    boolean
  > = this._showNavBar.asObservable();

  constructor() {}

  showNBar(ifShow: boolean) {
    this._showNavBar.next(ifShow);
  }
}
