import { Component, Input } from '@angular/core';
import {ContentData} from '@project-fmps/sunbird-sdk';
import { CommonUtilService } from '../../../services/common-util.service';

@Component({
    selector: 'app-relevant-content-card',
    templateUrl: './relevant-content-card.component.html',
    styleUrls: ['./relevant-content-card.component.scss'],
    standalone: false
})
export class RelevantContentCardComponent {
  @Input() contentData: ContentData;
  @Input() isAlreadyEnrolled: boolean;
  @Input() isCertifiedCourse: boolean;
  @Input() certificateDescription: string;
  @Input() batchEndDate;
  @Input() enrollmentEndDate;
  @Input() frameworkCategories;

  constructor(public commonUtil: CommonUtilService) {
  }

}
