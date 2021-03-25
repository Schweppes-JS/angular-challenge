import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { FilterTermPipe } from './filter-term/filter-term.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    BannerCutOutComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    FilterTermPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ],
  exports: [FilterTermPipe]
})
export class PipesModule { }
