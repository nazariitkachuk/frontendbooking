import { Component, OnInit, ViewChild,AfterContentInit, Input, ElementRef } from '@angular/core';

import {MatDatepickerModule, MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatGridList,MatFormFieldModule } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import {FormControl, Validators, FormGroup, AbstractControl} from '@angular/forms';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-celebrations',
  templateUrl: './celebrations.component.html',
  styleUrls: ['./celebrations.component.scss']
})
export class CelebrationsComponent implements OnInit {
  

  constructor(private observableMedia: ObservableMedia) { }
  ngOnInit() {
  }


}
