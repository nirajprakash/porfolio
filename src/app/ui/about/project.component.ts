import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow, ServicePortfolioApi, ModelProject } from './../../services'

@Component({
    selector: 'np-project-view',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    returnUrl: string;

    _mProjectList: Array<ModelProject>;
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
        setTimeout(() => {
            this.requestServer();
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    resetItems() {
        this._mProjectList = new Array<ModelProject>();
    }

    onClickOpenlink(link: string) {
        this.nativeWindow.open(link);
        //this.Service.assignActivity(type).subscribe(res => {

        //newWindow.location = '/#/link/' + res;
        //console.log(res);
    }

    requestServer() {

        this.servicePortfolioApi.getProjects()
            .subscribe((values: ModelProject[]) => {
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

    arrangeItems(modelProject: ModelProject[]) {
        if (modelProject && modelProject.length > 0) {
            for (var i = 0; i < modelProject.length; i++) {
                this._mProjectList.push(modelProject[i]);
            }
        }
    }

    public test() {
        this.dialogService.alert("test");
    }
}