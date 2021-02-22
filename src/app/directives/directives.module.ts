import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directives.routes';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';

@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVES_ROUTES)
  ]
})
export class DirectivesModule { }
