import { Injectable, Inject } from '@angular/core';
import { SharedPreferences } from '@project-fmps/sunbird-sdk';
import { PreferenceKey, StoreRating } from '../app/app.constant';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FilePathService } from '../services/file-path/file.service';
import { FilePaths } from '../services/file-path/file';

@Injectable()
export class AppRatingService {

  constructor(
    @Inject('SHARED_PREFERENCES') private preference: SharedPreferences,
    private fileCtrl: File,
    private filePathService: FilePathService,
  ) { }

  async checkInitialDate() {
    let res = await this.preference.getString(PreferenceKey.APP_RATING_DATE).toPromise()
    if (!res) {
      await this.setInitialDate();
    }
  }

  private async setInitialDate() {
    const presentDate = window.dayjs().format();
    await this.preference.putString(PreferenceKey.APP_RATING_DATE, String(presentDate)).toPromise();
  }

  async setEndStoreRate(rate) {
    await this.createFolder(rate);
  }

  private async createFolder(rate) {
    const filePath =  FilePaths.CACHE; 
    const folderPath = await this.filePathService.getFilePath(filePath);


    await this.fileCtrl.createDir(folderPath, StoreRating.FOLDER_NAME, true)
    await this.writeFile(rate);
    
  }

  private async writeFile(rate) {
    const filePath =  FilePaths.DATA; 
    const folderPath = await this.filePathService.getFilePath(filePath);
    await this.fileCtrl.writeFile(folderPath + StoreRating.FOLDER_NAME,
      StoreRating.FILE_NAME, StoreRating.FILE_TEXT + ' = ' + rate, { replace: true });
    }

  async rateLaterClickedCount() {
    return await this.checkRateLaterCount();
  }

  private async checkRateLaterCount() {
    return this.preference.getString(PreferenceKey.APP_RATE_LATER_CLICKED).toPromise().then(async (val) => {
      if (val) {
        const incrementValue = Number(val) + 1;
        await this.increaseRateLaterClickedCount(incrementValue);
        return incrementValue;
      }
      return this.increaseRateLaterClickedCount(1);
    });
  }

  private async increaseRateLaterClickedCount(value) {
    return await this.preference.putString(PreferenceKey.APP_RATE_LATER_CLICKED, String(value)).toPromise().then(() => value);
  }
}
