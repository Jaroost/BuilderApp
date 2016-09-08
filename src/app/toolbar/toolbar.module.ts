import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdGridListModule} from '@angular2-material/grid-list';
import { ToolbarComponent } from './toolbar.component';
import {AuthService} from '../auth/auth.service';

@NgModule({
    imports: [MdToolbarModule, MdIconModule ,MdButtonModule, MdGridListModule],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent],
    providers: [AuthService]
})
export class ToolbarModule {
 }
