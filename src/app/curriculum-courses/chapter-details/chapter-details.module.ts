import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChapterDetailsPage } from './chapter-details.page';
import { CommonConsumptionModule } from '@project-fmps/common-consumption';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../../app/components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { TocCurriculumComponent} from "../../../app/enrolled-course-details-page/toc-curriculum/toc-curriculum.component";
import { TocCardComponent} from "../../../app/enrolled-course-details-page/toc-card/toc-card.component";

const routes: Routes = [
  {
    path: '',
    component: ChapterDetailsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommonConsumptionModule,
        ComponentsModule,
        PipesModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes),

    ],
    exports: [TocCardComponent],
    declarations: [ChapterDetailsPage, TocCurriculumComponent, TocCardComponent],
    providers: [DatePipe]
})
export class ChapterDetailsPageModule {}
