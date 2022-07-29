import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedFolderService } from './services/shared-folder.service';
@NgModule({
  imports: [HttpClientModule],
  providers: [SharedFolderService],
})
export class ApiModule {}
