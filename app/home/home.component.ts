import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Router } from "@angular/router";
import { Image } from 'tns-core-modules/ui/image';
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "tns-core-modules/ui/page";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Observable } from "rxjs/Observable";
import { Img } from "nativescript-image";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";


require( "nativescript-localstorage" );

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    private headers: HttpHeaders;

    public itensjson = [];

    public titulo = "LISTA";

    public titulo_noticia = "";
    public imagem_noticia = "";
    public texto_noticia = "";



    list(){
        return this.http.get('https://ipremios-app-test.herokuapp.com/api/v1/lists',
        { headers: this.headers })
        .subscribe(
            data => {
                var dados = JSON.stringify(data);
                var dados2 = JSON.parse(dados);
                this.itensjson = dados2.itens;
            },
            (error) => {
                console.log(error);
            }
            );
    }    

    constructor(private http: HttpClient, private router: Router) {
        this.headers = this.getCommonHeadersList();
        
    }

    public onItemTap(args) {
        const tappedNoticiaItem = args.view.bindingContext;
        console.log("Item Tapped at cell index: " + tappedNoticiaItem.uuid);
        this.ListaNoticias = !this.ListaNoticias;
        this.FichaNoticia = true;
        this.titulo = "DETALHE";
        this.titulo_noticia = tappedNoticiaItem.title;
        this.imagem_noticia = tappedNoticiaItem.image_medium;
        this.texto_noticia = tappedNoticiaItem.description;

    }

    private getCommonHeadersList(): HttpHeaders {

        var dados = JSON.parse(localStorage.getItem('token_session'));

        console.log(dados.response.access_token);

        return new HttpHeaders({
            "Content-Type": `application/json`,
            "Authorization": `Bearer ${dados.response.access_token}`
        });
    }

    fechaNoticia(){
        this.FichaNoticia = !this.FichaNoticia;
        this.ListaNoticias = true;
        this.titulo = "LISTA";
        this.titulo_noticia = "";
        this.imagem_noticia = "";
        this.texto_noticia = "";

    }
    Logout(){
        localStorage.setItem('token_session','');
        this.router.navigate(["/login"]);
    }
    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
        // If the header content is still visiible
        // console.log(scrollView.verticalOffset);
        if (scrollView.verticalOffset < 250) {
            const offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect. 
                topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
            } else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    }

    public ListaNoticias: boolean = true;

    public FichaNoticia: boolean = false;

    ngOnInit(): void {

        this.list();
        
        
    }
}
