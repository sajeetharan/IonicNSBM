import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { NewsDetailPageModule } from '../news-detail/news-detail.module';
import { NewsPageModule } from '../news/news.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NewsPageModule,
    NewsDetailPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
