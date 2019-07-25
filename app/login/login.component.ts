import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: User;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
    }


    submit() {
       this.login();
    }

    login() {

        this.userService.login(this.user)
            .subscribe(
            data => {
                this.router.navigate(["/home"]);
            },
            (error) => {
                console.log(error);
                this.alert("Infelizmente não conseguimos encontrar sua conta.");
            }
            );
            
    }


    alert(message: string) {
        return alert({
            title: "iPremios",
            okButtonText: "OK",
            message: message
        });
    }
}
