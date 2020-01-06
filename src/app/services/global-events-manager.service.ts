import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

import { SharingService } from './sharing.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsManagerService {
  // tslint:disable-next-line: variable-name
  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.sharingService.getNavSettings() || false
  );

  public showNavBarEmitter: Observable<
    boolean
  > = this._showNavBar.asObservable();

  constructor(private sharingService: SharingService) {}

  showNBar(ifShow: boolean) {
    this._showNavBar.next(ifShow);
  }
}
