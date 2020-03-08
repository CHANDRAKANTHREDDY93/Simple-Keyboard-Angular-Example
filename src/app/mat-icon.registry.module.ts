import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
const iconPath = './assets/icons/'
@NgModule({
    imports: [HttpClientModule],
    exports: []
})

export class MatIconRegistryModule {
    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
      //  this.iconRegistry.addSvgIcon('home', this.sanitizer.bypassSecurityTrustResourceUrl(iconPath + 'home.svg'));
        this.iconRegistry.addSvgIcon('ics-image-ready', this.sanitizer.bypassSecurityTrustResourceUrl(iconPath + 'ics-img-ready.svg'));
    }
}