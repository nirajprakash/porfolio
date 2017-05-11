import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow, ServicePortfolioApi, ModelPortfolio } from './../../services'

@Component({
    selector: 'portfolio-item-view',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

    returnUrl: string;
    _mPortfolioList: Array<ModelPortfolio>;

    nativeWindow: any;

    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService,
        private route: ActivatedRoute,
        private router: Router,
        private servicePortfolioApi: ServicePortfolioApi,
        private serviceWindow: ServiceWindow) {
        this.nativeWindow = this.serviceWindow.getNativeWindow();
        this.resetItems();
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        setTimeout(() => {
            this.requestServer();
        });

    }

    onClickOpenlink(link: string) {
        this.nativeWindow.open(link);
        //this.Service.assignActivity(type).subscribe(res => {
        //newWindow.location = '/#/link/' + res;
        //console.log(res);
    }

    resetItems() {
        this._mPortfolioList = new Array<ModelPortfolio>();
    }

    requestServer() {

        this.servicePortfolioApi.getPorfolios()
            .subscribe((values: ModelPortfolio[]) => {
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

    arrangeItems(modelPortfolio: ModelPortfolio[]) {
        if (modelPortfolio && modelPortfolio.length > 0) {
            this._mPortfolioList = modelPortfolio;
        }

    }

}