import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { NavComponent } from './public/components/nav/nav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {NewsApiService} from "./news/services/news-api.service";
import {LogoApiService} from "./shared/services/logo-api.service";
import { MatIconModule} from "@angular/material/icon";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatListModule, MatNavList} from "@angular/material/list";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {LayoutModule} from "@angular/cdk/layout";
import { ArticleListComponent } from './news/components/article-list/article-list.component';
import {

  MatCardModule
} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable} from "rxjs";

export class TranslateHttpLoader implements TranslateLoader{
  constructor(private http: HttpClient,
              public prefix: string = '/assets/i18n/',
              public suffix: string = '.json') {

  }

  public  getTranslation(lang: string): Observable<any> {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }

}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    NavComponent,
    ArticleListComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgOptimizedImage,
    MatCardModule,
    MatMenuModule,
    TranslateModule.forRoot( {
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideAnimationsAsync(), NewsApiService, LogoApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
