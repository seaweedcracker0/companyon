import { Component, OnInit, Input } from '@angular/core';

//Header Observable
import { Store } from '@ngrx/store';
import { open } from '../../store/header/header.actions';

@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store<{ headerOpenState: boolean }>
  ) { }

  ngOnInit() { }

  openHeader() {
    this.store.dispatch(open());
  }
}
