import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow, ServicePortfolioApi, ModelTechnology } from './../../services'

@Component({
    selector: 'np-technology-view',
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

    returnUrl: string;

    _mTechAndroidList: Array<ModelTechnology>;
    _mTechBackendList: Array<ModelTechnology>;
    _mTechWebList: Array<ModelTechnology>;
    nativeWindow: any;

    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService,
        private route: ActivatedRoute,
        private router: Router,
        private servicePortfolioApi: ServicePortfolioApi,
        private serviceWindow: ServiceWindow) {
           this.nativeWindow= this.serviceWindow.getNativeWindow();
        this.resetItems();
    }

    ngOnInit() {

        setTimeout(() => {
            this.requestServer();
            
        });


        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    resetItems() {
        this._mTechAndroidList = new Array<ModelTechnology>();
        this._mTechBackendList = new Array<ModelTechnology>();
        this._mTechWebList = new Array<ModelTechnology>();

    }

    onClickOpenlink(link:string){
        this.nativeWindow.open(link);
       //this.Service.assignActivity(type).subscribe(res => {

       //newWindow.location = '/#/link/' + res;
       //console.log(res);
    }


    requestServer() {

        this.servicePortfolioApi.getTechnologies()
            .subscribe((values: ModelTechnology[]) => {
                //console.log(this);
                if (values) {
                    this.arrangeItems(values);
                }
            },
            (error) => {

                console.log(error);
                //toast('Error: '+ "server side", 4000);

            });

    }

    arrangeItems( modelTechnologies: ModelTechnology[]){
        if(modelTechnologies && modelTechnologies.length>0){
            for (var i = 0; i < modelTechnologies.length; i++) {
                var element = modelTechnologies[i];
                if(element.tab=="android"){
                    this._mTechAndroidList.push(element);
                }else if(element.tab=="back-end"){
                    this._mTechBackendList.push(element);
                }else if(element.tab=="web"){
                    this._mTechWebList.push(element);
                }
                
            }
        }

    }

    public test() {
        this.dialogService.alert("test");
    }
}