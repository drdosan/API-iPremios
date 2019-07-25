require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./home/home.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./login/login.component.ts");



var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "home", loadChildren: "./home/home.module#HomeModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/orange.css"), "");

// Module
exports.push([module.i, "/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n*/\n.btn {\n    font-size: 18;\n}\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./login/login.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./shared/user.service.ts");









var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__["NativeScriptHttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            providers: [
                _shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                { provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".page {\n  align-items: center;\n  flex-direction: column;\n}\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.logo {\n  margin-bottom: 12;\n  height: 90;\n  font-weight: bold;\n}\n.header {\n  horizontal-align: center;\n  font-size: 25;\n  font-weight: 600;\n  margin-bottom: 70;\n  text-align: center;\n  color: #D51A1A;\n}\n\n.input-field {\n  margin-bottom: 25;\n}\n.input {\n  font-size: 18;\n  placeholder-color: #A8A8A8;\n}\n\n.btn-primary {\n  height: 50;\n  margin: 30 5 15 5;\n  background-color: #f36f21;\n  border-radius: 5;\n  font-size: 20;\n  font-weight: 600;\n  color: #ffffff;\n}\n.login-label {\n  horizontal-align: center;\n  color: #A8A8A8;\n  font-size: 16;\n}\n.sign-up-label {\n  margin-bottom: 20;\n}\n.bold {\n  color: #000000; \n}\n"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout class=\"page\">\n\t<StackLayout class=\"form\">\n\t\t<Image class=\"logo\" src=\"~/images/logo.png\"></Image>\n\n\n\t\t<StackLayout class=\"input-field\">\n\t\t\t<TextField class=\"input\" hint=\"E-mail\" keyboardType=\"email\" autocorrect=\"false\" autocapitalizationType=\"none\" [(ngModel)]=\"user.email\"></TextField>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\t\t<StackLayout class=\"input-field\">\n\t\t\t<TextField class=\"input\" hint=\"Senha\" secure=\"true\" [(ngModel)]=\"user.password\"></TextField>\n\t\t\t<StackLayout class=\"hr-light\"></StackLayout>\n\t\t</StackLayout>\n\n\n\t\t<Button text=\"Entrar\" (tap)=\"submit()\" class=\"btn btn-primary m-t-20\"></Button>\n\t\t\n\t</StackLayout>\n\n\n</FlexboxLayout>"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/user.model.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/user.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        this.page.actionBarHidden = true;
        this.user = new _shared_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    LoginComponent.prototype.submit = function () {
        this.login();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (data) {
            _this.router.navigate(["/home"]);
        }, function (error) {
            console.log(error);
            _this.alert("Infelizmente não conseguimos encontrar sua conta.");
        });
    };
    LoginComponent.prototype.alert = function (message) {
        return Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"])({
            title: "iPremios",
            okButtonText: "OK",
            message: message
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"] },
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__("./login/login.component.html"),
            styles: [__webpack_require__("./login/login.component.css")]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"], _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ }),

/***/ "./shared/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_0__);

var tokenKey = "token";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!Object(application_settings__WEBPACK_IMPORTED_MODULE_0__["getString"])("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return Object(application_settings__WEBPACK_IMPORTED_MODULE_0__["getString"])("token");
        },
        set: function (theToken) {
            Object(application_settings__WEBPACK_IMPORTED_MODULE_0__["setString"])("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService.baseUrl = "https://ipremios-app-test.herokuapp.com/api/v1/sessions";
    return BackendService;
}());



/***/ }),

/***/ "./shared/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs/Observable");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/add/operator/do");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rxjs/add/operator/map");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rxjs/add/observable/throw");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rxjs/add/operator/catch");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./shared/backend.service.ts");








__webpack_require__("../node_modules/nativescript-localstorage/localstorage.js");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.headers = this.getCommonHeaders();
    }
    UserService.prototype.login = function (user) {
        console.log(user);
        return this.http.post(_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"].baseUrl, JSON.stringify({
            'session': {
                'email': user.email,
                'password': user.password
            }
        }), { headers: this.headers }).map(function (data) {
            if (data !== null) {
                var dados = JSON.stringify(data);
                localStorage.setItem('token_session', dados);
            }
        });
    };
    UserService.prototype.logoff = function () {
        _backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"].token = "";
    };
    UserService.prototype.getCommonHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        // let headers = new HttpHeaders();
        // headers = headers.append("Content-Type", "application/json");
        // headers = headers.append("Authorization", BackendService.appUserHeader);
        // return headers;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/http-client":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/http-client");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "rxjs/Observable":
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),

/***/ "rxjs/add/observable/throw":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/throw");

/***/ }),

/***/ "rxjs/add/operator/catch":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ }),

/***/ "rxjs/add/operator/do":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ }),

/***/ "rxjs/add/operator/map":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/debugger/devtools-elements":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/debugger/devtools-elements");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/file-system/file-system-access":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system/file-system-access");

/***/ }),

/***/ "tns-core-modules/ui/dialogs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/dialogs");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2JhY2tlbmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2RlYnVnZ2VyL2RldnRvb2xzLWVsZW1lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW0tYWNjZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5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QUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sMERBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBL0N5QiwrREFBVTs7SUFIM0IsV0FBVztRQUR2QixnRUFBVSxFQUFFO3lDQUlpQiwrREFBVTtPQUgzQixXQUFXLENBbUR2QjtJQUFELGtCQUFDO0NBQUE7QUFuRHVCOzs7Ozs7OztBQ2R4QixpRDs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEsNEM7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7QUNBQSxpRDs7Ozs7OztBQ0FBLGtEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLHdFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSw0RTs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSwrRDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hvbWUvaG9tZS5tb2R1bGVcIjogW1xuXHRcdFwiLi9ob21lL2hvbWUubW9kdWxlLnRzXCIsXG5cdFx0MFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZCA9IGlkc1swXTtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL29yYW5nZS5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBVSVxcbmNvbXBvbmVudHMgdGhhdCBoYXZlIHRoZSBidG4gY2xhc3MgbmFtZS5cXG4qL1xcbi5idG4ge1xcbiAgICBmb250LXNpemU6IDE4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybSB7XFxuICBtYXJnaW4tbGVmdDogMzA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgZmxleC1ncm93OiAyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICBoZWlnaHQ6IDkwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXIge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRDUxQTFBO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dCB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBoZWlnaHQ6IDUwO1xcbiAgbWFyZ2luOiAzMCA1IDE1IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM2ZjIxO1xcbiAgYm9yZGVyLXJhZGl1czogNTtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5sb2dpbi1sYWJlbCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0E4QThBODtcXG4gIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZCB7XFxuICBjb2xvcjogIzAwMDAwMDsgXFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG5cXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcblxcdFxcdDxJbWFnZSBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJ+L2ltYWdlcy9sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXG5cXG5cXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG5cXHRcXHRcXHQ8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRS1tYWlsXFxcIiBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIj48L1RleHRGaWVsZD5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuXFx0XFx0XFx0PFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIlNlbmhhXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIj48L1RleHRGaWVsZD5cXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuXFx0XFx0PEJ1dHRvbiB0ZXh0PVxcXCJFbnRyYXJcXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiPjwvQnV0dG9uPlxcblxcdFxcdFxcblxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuXG4gICAgc3VibWl0KCkge1xuICAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcblxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJJbmZlbGl6bWVudGUgbsOjbyBjb25zZWd1aW1vcyBlbmNvbnRyYXIgc3VhIGNvbnRhLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICB9XG5cblxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiaVByZW1pb3NcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5jb25zdCB0b2tlbktleSA9IFwidG9rZW5cIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG4gICAgc3RhdGljIGJhc2VVcmwgPSBcImh0dHBzOi8vaXByZW1pb3MtYXBwLXRlc3QuaGVyb2t1YXBwLmNvbS9hcGkvdjEvc2Vzc2lvbnNcIjtcbiAgIFxuXG4gICAgc3RhdGljIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQgdG9rZW4odGhlVG9rZW46IHN0cmluZykge1xuICAgICAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0aGVUb2tlbik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vYmFja2VuZC5zZXJ2aWNlXCI7XG5cbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBoZWFkZXJzOiBIdHRwSGVhZGVycztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSB0aGlzLmdldENvbW1vbkhlYWRlcnMoKTtcblxuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBCYWNrZW5kU2VydmljZS5iYXNlVXJsLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnc2Vzc2lvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH1cbiAgICAgICAgKS5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBkYWRvcyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpOyAgIFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbl9zZXNzaW9uJywgZGFkb3MpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbG9nb2ZmKCkge1xuICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb21tb25IZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICAvLyBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICAvLyBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIEJhY2tlbmRTZXJ2aWNlLmFwcFVzZXJIZWFkZXIpO1xuICAgICAgICAvLyByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBMb2dpblJlc3BvbnNlIHtcbiAgICBfa21kOiBhbnlcbn1cbmludGVyZmFjZSBLTUQge1xuICAgIGFjY2Vzc190b2tlbjogc3RyaW5nXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGVidWdnZXIvZGV2dG9vbHMtZWxlbWVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtLWFjY2Vzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==