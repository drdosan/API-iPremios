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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2E7QUFFdEI7QUFPWDtBQUNDO0FBQ0k7QUFDRjtBQUdqQyxtQkFBTyxDQUFFLDJEQUEyQixDQUFFLENBQUM7QUFRdkM7SUE2QkksdUJBQW9CLElBQWdCLEVBQVUsTUFBYztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXpCckQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFFakIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUF3RW5CLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBdERqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBRS9DLENBQUM7SUFsQkQsNEJBQUksR0FBSjtRQUFBLGlCQWFDO1FBWkcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsRUFDM0UsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3pCLFNBQVMsQ0FDTixjQUFJO1lBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNsQyxDQUFDLEVBQ0QsVUFB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aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBJbWcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuXG5cbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBwcml2YXRlIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuXG4gICAgcHVibGljIGl0ZW5zanNvbiA9IFtdO1xuXG4gICAgcHVibGljIHRpdHVsbyA9IFwiTElTVEFcIjtcblxuICAgIHB1YmxpYyB0aXR1bG9fbm90aWNpYSA9IFwiXCI7XG4gICAgcHVibGljIGltYWdlbV9ub3RpY2lhID0gXCJcIjtcbiAgICBwdWJsaWMgdGV4dG9fbm90aWNpYSA9IFwiXCI7XG5cblxuXG4gICAgbGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9pcHJlbWlvcy1hcHAtdGVzdC5oZXJva3VhcHAuY29tL2FwaS92MS9saXN0cycsXG4gICAgICAgIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZGFkb3MgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgICAgICB2YXIgZGFkb3MyID0gSlNPTi5wYXJzZShkYWRvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVuc2pzb24gPSBkYWRvczIuaXRlbnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHRoaXMuZ2V0Q29tbW9uSGVhZGVyc0xpc3QoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnN0IHRhcHBlZE5vdGljaWFJdGVtID0gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgdGFwcGVkTm90aWNpYUl0ZW0udXVpZCk7XG4gICAgICAgIHRoaXMuTGlzdGFOb3RpY2lhcyA9ICF0aGlzLkxpc3RhTm90aWNpYXM7XG4gICAgICAgIHRoaXMuRmljaGFOb3RpY2lhID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aXR1bG8gPSBcIkRFVEFMSEVcIjtcbiAgICAgICAgdGhpcy50aXR1bG9fbm90aWNpYSA9IHRhcHBlZE5vdGljaWFJdGVtLnRpdGxlO1xuICAgICAgICB0aGlzLmltYWdlbV9ub3RpY2lhID0gdGFwcGVkTm90aWNpYUl0ZW0uaW1hZ2VfbWVkaXVtO1xuICAgICAgICB0aGlzLnRleHRvX25vdGljaWEgPSB0YXBwZWROb3RpY2lhSXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29tbW9uSGVhZGVyc0xpc3QoKTogSHR0cEhlYWRlcnMge1xuXG4gICAgICAgIHZhciBkYWRvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuX3Nlc3Npb24nKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGFkb3MucmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcblxuICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IGBhcHBsaWNhdGlvbi9qc29uYCxcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7ZGFkb3MucmVzcG9uc2UuYWNjZXNzX3Rva2VufWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmVjaGFOb3RpY2lhKCl7XG4gICAgICAgIHRoaXMuRmljaGFOb3RpY2lhID0gIXRoaXMuRmljaGFOb3RpY2lhO1xuICAgICAgICB0aGlzLkxpc3RhTm90aWNpYXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpdHVsbyA9IFwiTElTVEFcIjtcbiAgICAgICAgdGhpcy50aXR1bG9fbm90aWNpYSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW1hZ2VtX25vdGljaWEgPSBcIlwiO1xuICAgICAgICB0aGlzLnRleHRvX25vdGljaWEgPSBcIlwiO1xuXG4gICAgfVxuICAgIG9uU2Nyb2xsKGV2ZW50OiBTY3JvbGxFdmVudERhdGEsIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXcsIHRvcFZpZXc6IFZpZXcpIHtcbiAgICAgICAgLy8gSWYgdGhlIGhlYWRlciBjb250ZW50IGlzIHN0aWxsIHZpc2lpYmxlXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQpO1xuICAgICAgICBpZiAoc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCA8IDI1MCkge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCAvIDI7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcbiAgICAgICAgICAgICAgICAvLyBpT1MgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRoIGFuIGFuaW1hdGlvbiB0byBjcmVhdGUgYSBzbW90aGVyIHNjcm9sbGluZyBlZmZlY3QuIFxuICAgICAgICAgICAgICAgIHRvcFZpZXcuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBvZmZzZXQgfSB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQW5kcm9pZCwgYW5pbWF0aW9ucyBhcmUgamVya3kgc28gaW5zdGVhZCBqdXN0IGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aG91dCBhbmltYXRpb24uXG4gICAgICAgICAgICAgICAgdG9wVmlldy50cmFuc2xhdGVZID0gTWF0aC5mbG9vcihvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIExpc3RhTm90aWNpYXM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIEZpY2hhTm90aWNpYTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5saXN0KCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9