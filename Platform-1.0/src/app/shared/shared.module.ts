import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnLinkComponent } from './components/return-link/return-link.component';
import { MetadataComponent } from './components/metadata/metadata.component';



@NgModule({
    declarations: [
        ReturnLinkComponent,
        MetadataComponent
    ],
    exports: [
        ReturnLinkComponent,
        MetadataComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
