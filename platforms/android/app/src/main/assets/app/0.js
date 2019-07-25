(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".action-bar{\r\n  text-align: center;\r\n  background-color: #f36f21;\r\n  color:#fff;\r\n}\r\n.page {\r\n  flex-direction: column;\r\n}\r\n.texto-resumo{\r\n  height: 85;                   \r\n  overflow: hidden;              /* \"overflow\" value must be different from \"visible\" */ \r\n  text-overflow: ellipsis;\r\n}\r\n.titulonoticias {\r\n  font-size:26;\r\n  color:#666;\r\n  overflow: none;  \r\n  margin-bottom:40;\r\n}\r\n.estrutura-noticia {\r\n  margin-left: 30;\r\n  margin-right: 30;\r\n  flex-grow: 2;\r\n  padding-top:20;\r\n}\r\n\r\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\" title=\"{{titulo}}\">\n    <NavigationButton text=\"Volta\" android.systemIcon=\"ic_menu_back\" *ngIf=\"FichaNoticia\" (tap)=\"fechaNoticia()\"></NavigationButton>\n    <NavigationButton text=\"Sair\" android.systemIcon=\"ic_menu_close_clear_cancel\" *ngIf=\"ListaNoticias\" (tap)=\"Logout()\"></NavigationButton>\n</ActionBar>\n\n<FlexboxLayout class=\"page\" *ngIf=\"ListaNoticias\">\n    <ListView id=\"lista-noticias\" [items]=\"itensjson\" (itemTap)=\"onItemTap($event)\" class=\"list-group\">\n        <ng-template let-titulo=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n            <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\n            <StackLayout orientation=\"horizontal\" class=\"list-group-item\">\n                <Image width=\"105\" height=\"105\" stretch=\"aspectFill\" [src]=\"titulo.image_thumb.replace('http', 'https')\" class=\"thumb m-b-20\"></Image>\n                <StackLayout>\n                    <Label [text]=\"titulo.title\"></Label>\n                    <Label [text]=\"titulo.description\" textWrap=\"true\" WidthRequest=\"50\"  class=\"body texto-resumo\"></Label>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n    </ListView>\n</FlexboxLayout>\n\n<GridLayout class=\"page\" *ngIf=\"FichaNoticia\">\n        <ScrollView #scrollView (scroll)=\"onScroll($event, scrollView, topView)\">\n                <StackLayout>\n                    <StackLayout #topView height=\"250\" style=\"background-image: url('{{imagem_noticia.replace('http', 'https')}}'); background-repeat: no-repeat; background-position: center; background-size: cover;\">\n                    </StackLayout>\n                    <StackLayout width=\"100%\" backgroundColor=\"white\" padding=\"10\">\n                        <!--Add your page content here-->\n                        <Label textWrap=\"true\" text=\"{{titulo_noticia}}\" class=\"h2 description-label\"></Label>\n                        <Label textWrap=\"true\" class=\"p-10\" text=\"{{texto_noticia}}.\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </ScrollView>\n</GridLayout>\n\n"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/add/operator/do");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rxjs/add/operator/map");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rxjs/add/observable/throw");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rxjs/add/operator/catch");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__);







__webpack_require__("../node_modules/nativescript-localstorage/localstorage.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, router) {
        this.http = http;
        this.router = router;
        this.itensjson = [];
        this.titulo = "LISTA";
        this.titulo_noticia = "";
        this.imagem_noticia = "";
        this.texto_noticia = "";
        this.ListaNoticias = true;
        this.FichaNoticia = false;
        this.headers = this.getCommonHeadersList();
    }
    HomeComponent.prototype.list = function () {
        var _this = this;
        return this.http.get('https://ipremios-app-test.herokuapp.com/api/v1/lists', { headers: this.headers })
            .subscribe(function (data) {
            var dados = JSON.stringify(data);
            var dados2 = JSON.parse(dados);
            _this.itensjson = dados2.itens;
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.onItemTap = function (args) {
        var tappedNoticiaItem = args.view.bindingContext;
        console.log("Item Tapped at cell index: " + tappedNoticiaItem.uuid);
        this.ListaNoticias = !this.ListaNoticias;
        this.FichaNoticia = true;
        this.titulo = "DETALHE";
        this.titulo_noticia = tappedNoticiaItem.title;
        this.imagem_noticia = tappedNoticiaItem.image_medium;
        this.texto_noticia = tappedNoticiaItem.description;
    };
    HomeComponent.prototype.getCommonHeadersList = function () {
        var dados = JSON.parse(localStorage.getItem('token_session'));
        console.log(dados.response.access_token);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            "Authorization": "Bearer " + dados.response.access_token
        });
    };
    HomeComponent.prototype.fechaNoticia = function () {
        this.FichaNoticia = !this.FichaNoticia;
        this.ListaNoticias = true;
        this.titulo = "LISTA";
        this.titulo_noticia = "";
        this.imagem_noticia = "";
        this.texto_noticia = "";
    };
    HomeComponent.prototype.Logout = function () {
        localStorage.setItem('token_session', '');
        this.router.navigate(["/login"]);
    };
    HomeComponent.prototype.onScroll = function (event, scrollView, topView) {
        // If the header content is still visiible
        // console.log(scrollView.verticalOffset);
        if (scrollView.verticalOffset < 250) {
            var offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect. 
                topView.animate({ translate: { x: 0, y: offset } }).then(function () { }, function () { });
            }
            else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.list();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__("./home/home.component.html"),
            styles: [__webpack_require__("./home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/home.component.ts");





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUV0QjtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUU7Q0FDekMsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZDlCLDhCQUE4Qix5QkFBeUIsZ0NBQWdDLGlCQUFpQixLQUFLLFdBQVcsNkJBQTZCLEtBQUssa0JBQWtCLGlCQUFpQiwwQ0FBMEMsd0dBQXdHLEtBQUsscUJBQXFCLG1CQUFtQixpQkFBaUIscUJBQXFCLHlCQUF5QixLQUFLLHdCQUF3QixzQkFBc0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsS0FBSyxTOzs7Ozs7O0FDQWxqQiw0REFBNEQsUUFBUSxxZ0RBQXFnRCx5Q0FBeUMsR0FBRyw4QkFBOEIsNkJBQTZCLHdCQUF3Qix5UEFBeVAsZ0JBQWdCLHFIQUFxSCxlQUFlLCtIOzs7Ozs7OztBQ0FybEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUEyRDtBQUNZO0FBQ0Y7QUFFWDtBQUNUO0FBZWpEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFidEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLGtGQUF1QjtnQkFDdkIsc0VBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZEQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhEQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBO0FBQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuYWN0aW9uLWJhcntcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzZmMjE7XFxyXFxuICBjb2xvcjojZmZmO1xcclxcbn1cXHJcXG4ucGFnZSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4udGV4dG8tcmVzdW1ve1xcclxcbiAgaGVpZ2h0OiA4NTsgICAgICAgICAgICAgICAgICAgXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuOyAgICAgICAgICAgICAgLyogXFxcIm92ZXJmbG93XFxcIiB2YWx1ZSBtdXN0IGJlIGRpZmZlcmVudCBmcm9tIFxcXCJ2aXNpYmxlXFxcIiAqLyBcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG4udGl0dWxvbm90aWNpYXMge1xcclxcbiAgZm9udC1zaXplOjI2O1xcclxcbiAgY29sb3I6IzY2NjtcXHJcXG4gIG92ZXJmbG93OiBub25lOyAgXFxyXFxuICBtYXJnaW4tYm90dG9tOjQwO1xcclxcbn1cXHJcXG4uZXN0cnV0dXJhLW5vdGljaWEge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXHJcXG4gIGZsZXgtZ3JvdzogMjtcXHJcXG4gIHBhZGRpbmctdG9wOjIwO1xcclxcbn1cXHJcXG5cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiB0aXRsZT1cXFwie3t0aXR1bG99fVxcXCI+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIlZvbHRhXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKm5nSWY9XFxcIkZpY2hhTm90aWNpYVxcXCIgKHRhcCk9XFxcImZlY2hhTm90aWNpYSgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIlNhaXJcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9jbG9zZV9jbGVhcl9jYW5jZWxcXFwiICpuZ0lmPVxcXCJMaXN0YU5vdGljaWFzXFxcIiAodGFwKT1cXFwiTG9nb3V0KClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG48L0FjdGlvbkJhcj5cXG5cXG48RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgKm5nSWY9XFxcIkxpc3RhTm90aWNpYXNcXFwiPlxcbiAgICA8TGlzdFZpZXcgaWQ9XFxcImxpc3RhLW5vdGljaWFzXFxcIiBbaXRlbXNdPVxcXCJpdGVuc2pzb25cXFwiIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdGl0dWxvPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcbiAgICAgICAgICAgIDwhLS0gVGhlIGl0ZW0gdGVtcGxhdGUgY2FuIG9ubHkgaGF2ZSBhIHNpbmdsZSByb290IHZpZXcgY29udGFpbmVyIChlLmcuIEdyaWRMYXlvdXQsIFN0YWNrTGF5b3V0LCBldGMuKS0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cXFwiMTA1XFxcIiBoZWlnaHQ9XFxcIjEwNVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgW3NyY109XFxcInRpdHVsby5pbWFnZV90aHVtYi5yZXBsYWNlKCdodHRwJywgJ2h0dHBzJylcXFwiIGNsYXNzPVxcXCJ0aHVtYiBtLWItMjBcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcInRpdHVsby50aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcInRpdHVsby5kZXNjcmlwdGlvblxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFdpZHRoUmVxdWVzdD1cXFwiNTBcXFwiICBjbGFzcz1cXFwiYm9keSB0ZXh0by1yZXN1bW9cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvTGlzdFZpZXc+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAqbmdJZj1cXFwiRmljaGFOb3RpY2lhXFxcIj5cXG4gICAgICAgIDxTY3JvbGxWaWV3ICNzY3JvbGxWaWV3IChzY3JvbGwpPVxcXCJvblNjcm9sbCgkZXZlbnQsIHNjcm9sbFZpZXcsIHRvcFZpZXcpXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICN0b3BWaWV3IGhlaWdodD1cXFwiMjUwXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCd7e2ltYWdlbV9ub3RpY2lhLnJlcGxhY2UoJ2h0dHAnLCAnaHR0cHMnKX19Jyk7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiMTAwJVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCIgcGFkZGluZz1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdGV4dD1cXFwie3t0aXR1bG9fbm90aWNpYX19XFxcIiBjbGFzcz1cXFwiaDIgZGVzY3JpcHRpb24tbGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwicC0xMFxcXCIgdGV4dD1cXFwie3t0ZXh0b19ub3RpY2lhfX0uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBJbWcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuXG5cbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBwcml2YXRlIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuXG4gICAgcHVibGljIGl0ZW5zanNvbiA9IFtdO1xuXG4gICAgcHVibGljIHRpdHVsbyA9IFwiTElTVEFcIjtcblxuICAgIHB1YmxpYyB0aXR1bG9fbm90aWNpYSA9IFwiXCI7XG4gICAgcHVibGljIGltYWdlbV9ub3RpY2lhID0gXCJcIjtcbiAgICBwdWJsaWMgdGV4dG9fbm90aWNpYSA9IFwiXCI7XG5cblxuXG4gICAgbGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9pcHJlbWlvcy1hcHAtdGVzdC5oZXJva3VhcHAuY29tL2FwaS92MS9saXN0cycsXG4gICAgICAgIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZGFkb3MgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgICAgICB2YXIgZGFkb3MyID0gSlNPTi5wYXJzZShkYWRvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVuc2pzb24gPSBkYWRvczIuaXRlbnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHRoaXMuZ2V0Q29tbW9uSGVhZGVyc0xpc3QoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnN0IHRhcHBlZE5vdGljaWFJdGVtID0gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgdGFwcGVkTm90aWNpYUl0ZW0udXVpZCk7XG4gICAgICAgIHRoaXMuTGlzdGFOb3RpY2lhcyA9ICF0aGlzLkxpc3RhTm90aWNpYXM7XG4gICAgICAgIHRoaXMuRmljaGFOb3RpY2lhID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aXR1bG8gPSBcIkRFVEFMSEVcIjtcbiAgICAgICAgdGhpcy50aXR1bG9fbm90aWNpYSA9IHRhcHBlZE5vdGljaWFJdGVtLnRpdGxlO1xuICAgICAgICB0aGlzLmltYWdlbV9ub3RpY2lhID0gdGFwcGVkTm90aWNpYUl0ZW0uaW1hZ2VfbWVkaXVtO1xuICAgICAgICB0aGlzLnRleHRvX25vdGljaWEgPSB0YXBwZWROb3RpY2lhSXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29tbW9uSGVhZGVyc0xpc3QoKTogSHR0cEhlYWRlcnMge1xuXG4gICAgICAgIHZhciBkYWRvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuX3Nlc3Npb24nKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGFkb3MucmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcblxuICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IGBhcHBsaWNhdGlvbi9qc29uYCxcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7ZGFkb3MucmVzcG9uc2UuYWNjZXNzX3Rva2VufWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmVjaGFOb3RpY2lhKCl7XG4gICAgICAgIHRoaXMuRmljaGFOb3RpY2lhID0gIXRoaXMuRmljaGFOb3RpY2lhO1xuICAgICAgICB0aGlzLkxpc3RhTm90aWNpYXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpdHVsbyA9IFwiTElTVEFcIjtcbiAgICAgICAgdGhpcy50aXR1bG9fbm90aWNpYSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW1hZ2VtX25vdGljaWEgPSBcIlwiO1xuICAgICAgICB0aGlzLnRleHRvX25vdGljaWEgPSBcIlwiO1xuXG4gICAgfVxuICAgIExvZ291dCgpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW5fc2Vzc2lvbicsJycpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgIH1cbiAgICBvblNjcm9sbChldmVudDogU2Nyb2xsRXZlbnREYXRhLCBzY3JvbGxWaWV3OiBTY3JvbGxWaWV3LCB0b3BWaWV3OiBWaWV3KSB7XG4gICAgICAgIC8vIElmIHRoZSBoZWFkZXIgY29udGVudCBpcyBzdGlsbCB2aXNpaWJsZVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0KTtcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgPCAyNTApIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgLyAyO1xuICAgICAgICAgICAgaWYgKHNjcm9sbFZpZXcuaW9zKSB7XG4gICAgICAgICAgICAgICAgLy8gaU9TIGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aCBhbiBhbmltYXRpb24gdG8gY3JlYXRlIGEgc21vdGhlciBzY3JvbGxpbmcgZWZmZWN0LiBcbiAgICAgICAgICAgICAgICB0b3BWaWV3LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0gfSkudGhlbigoKSA9PiB7IH0sICgpID0+IHsgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFuZHJvaWQsIGFuaW1hdGlvbnMgYXJlIGplcmt5IHNvIGluc3RlYWQganVzdCBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgICAgICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBMaXN0YU5vdGljaWFzOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBGaWNoYU5vdGljaWE6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMubGlzdCgpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==