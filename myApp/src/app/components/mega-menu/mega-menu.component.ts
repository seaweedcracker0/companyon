import { Component, OnInit, Input } from '@angular/core';

//Header Observable
import { Store } from '@ngrx/store';
import { close } from '../../store/header/header.actions';

@Component({
  selector: 'comp-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent implements OnInit {

  constructor(
    private store: Store<{ headerOpenState: boolean }>
  ) { }

  ngOnInit() { }

  closeHeader() {
    this.store.dispatch(close());
  }
}
