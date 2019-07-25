webpackHotUpdate(0,{

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
    HomeComponent.prototype.Logout = function () {
        localStorage.setItem('token_session', '');
        this.router.navigate(["/login"]);
    };
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2E7QUFFdEI7QUFPWDtBQUNDO0FBQ0k7QUFDRjtBQUdqQyxtQkFBTyxDQUFFLDJEQUEyQixDQUFFLENBQUM7QUFRdkM7SUFnQ0ksdUJBQW9CLElBQWdCLEVBQVUsTUFBYztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTVCckQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFFakIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUEyRW5CLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBdERqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBRS9DLENBQUM7SUF2QkQsOEJBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUFBLGlCQWFDO1FBWkcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsRUFDM0UsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3pCLFNBQVMsQ0FDTixjQUFJO1lBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FB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QUFDO3lDQWlDNEIsK0RBQVUsRUFBa0Isc0RBQU07T0FoQ25ELGFBQWEsQ0ErRnpCO0lBQUQsb0JBQUM7Q0FBQTtBQS9GeUIiLCJmaWxlIjoiMC4zNmZlNzk1NWFjNTRmOTg3N2U2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBJbWcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuXG5cbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBwcml2YXRlIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuXG4gICAgcHVibGljIGl0ZW5zanNvbiA9IFtdO1xuXG4gICAgcHVibGljIHRpdHVsbyA9IFwiTElTVEFcIjtcblxuICAgIHB1YmxpYyB0aXR1bG9fbm90aWNpYSA9IFwiXCI7XG4gICAgcHVibGljIGltYWdlbV9ub3RpY2lhID0gXCJcIjtcbiAgICBwdWJsaWMgdGV4dG9fbm90aWNpYSA9IFwiXCI7XG5cbiAgICBMb2dvdXQoKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuX3Nlc3Npb24nLCcnKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICB9XG5cbiAgICBsaXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2lwcmVtaW9zLWFwcC10ZXN0Lmhlcm9rdWFwcC5jb20vYXBpL3YxL2xpc3RzJyxcbiAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBkYWRvcyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgICAgIHZhciBkYWRvczIgPSBKU09OLnBhcnNlKGRhZG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW5zanNvbiA9IGRhZG9zMi5pdGVucztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH0gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gdGhpcy5nZXRDb21tb25IZWFkZXJzTGlzdCgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgdGFwcGVkTm90aWNpYUl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyB0YXBwZWROb3RpY2lhSXRlbS51dWlkKTtcbiAgICAgICAgdGhpcy5MaXN0YU5vdGljaWFzID0gIXRoaXMuTGlzdGFOb3RpY2lhcztcbiAgICAgICAgdGhpcy5GaWNoYU5vdGljaWEgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpdHVsbyA9IFwiREVUQUxIRVwiO1xuICAgICAgICB0aGlzLnRpdHVsb19ub3RpY2lhID0gdGFwcGVkTm90aWNpYUl0ZW0udGl0bGU7XG4gICAgICAgIHRoaXMuaW1hZ2VtX25vdGljaWEgPSB0YXBwZWROb3RpY2lhSXRlbS5pbWFnZV9tZWRpdW07XG4gICAgICAgIHRoaXMudGV4dG9fbm90aWNpYSA9IHRhcHBlZE5vdGljaWFJdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb21tb25IZWFkZXJzTGlzdCgpOiBIdHRwSGVhZGVycyB7XG5cbiAgICAgICAgdmFyIGRhZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW5fc2Vzc2lvbicpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYWRvcy5yZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xuXG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogYGFwcGxpY2F0aW9uL2pzb25gLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtkYWRvcy5yZXNwb25zZS5hY2Nlc3NfdG9rZW59YFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmZWNoYU5vdGljaWEoKXtcbiAgICAgICAgdGhpcy5GaWNoYU5vdGljaWEgPSAhdGhpcy5GaWNoYU5vdGljaWE7XG4gICAgICAgIHRoaXMuTGlzdGFOb3RpY2lhcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGl0dWxvID0gXCJMSVNUQVwiO1xuICAgICAgICB0aGlzLnRpdHVsb19ub3RpY2lhID0gXCJcIjtcbiAgICAgICAgdGhpcy5pbWFnZW1fbm90aWNpYSA9IFwiXCI7XG4gICAgICAgIHRoaXMudGV4dG9fbm90aWNpYSA9IFwiXCI7XG5cbiAgICB9XG4gICAgb25TY3JvbGwoZXZlbnQ6IFNjcm9sbEV2ZW50RGF0YSwgc2Nyb2xsVmlldzogU2Nyb2xsVmlldywgdG9wVmlldzogVmlldykge1xuICAgICAgICAvLyBJZiB0aGUgaGVhZGVyIGNvbnRlbnQgaXMgc3RpbGwgdmlzaWlibGVcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCk7XG4gICAgICAgIGlmIChzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IDwgMjUwKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IC8gMjtcbiAgICAgICAgICAgIGlmIChzY3JvbGxWaWV3Lmlvcykge1xuICAgICAgICAgICAgICAgIC8vIGlPUyBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGggYW4gYW5pbWF0aW9uIHRvIGNyZWF0ZSBhIHNtb3RoZXIgc2Nyb2xsaW5nIGVmZmVjdC4gXG4gICAgICAgICAgICAgICAgdG9wVmlldy5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9IH0pLnRoZW4oKCkgPT4geyB9LCAoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBbmRyb2lkLCBhbmltYXRpb25zIGFyZSBqZXJreSBzbyBpbnN0ZWFkIGp1c3QgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICAgICAgICAgICAgICB0b3BWaWV3LnRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgTGlzdGFOb3RpY2lhczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgRmljaGFOb3RpY2lhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmxpc3QoKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=