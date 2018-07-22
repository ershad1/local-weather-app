import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/typings/toolbar';
import {MatButtonModule} from '@angular/material/typings/button';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule {
}
