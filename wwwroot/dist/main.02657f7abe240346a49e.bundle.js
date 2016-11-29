!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,a){for(var i,c,s=0,l=[];s<e.length;s++)c=e[s],o[c]&&l.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(n&&n(e,r,a);l.length;)l.shift()()};var r={},o={5:0};return e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(i);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}if(0===o[t])return Promise.resolve();if(o[t])return o[t][2];var r=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,a.src=e.p+""+t+"."+{0:"e8b1d864b5b65bc91d02",1:"30976cae09d81d74bd20",2:"1c167c19ad49a7e32943",3:"db3ab9ed6537b920e0f8",4:"9827c4dd0d57c806a395"}[t]+".chunk.js";var i=setTimeout(n,12e4);a.onerror=a.onload=n,r.appendChild(a);var c=new Promise(function(e,n){o[t]=[e,n]});return o[t][2]=c},e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e.oe=function(t){throw console.error(t),t},e(e.s=56)}([function(t,e,n){t.exports=n(1)(0)},function(t,e){t.exports=vendor_c5bca05bcde036daaab1},function(t,e,n){t.exports=n(1)(387)},function(t,e,n){t.exports=n(1)(222)},function(t,e,n){t.exports=n(1)(44)},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(10),c=function(){function t(t){this.http=t}return t.prototype.get=function(t,e){return this.http.get(t,void 0)},t.prototype.post=function(t,e,n){return this.http.post(t,e,n)},t=r([a.Injectable(),o("design:paramtypes",[i.ApiGatewayService])],t)}();e.DataService=c},function(t,e){"use strict";var n=function(){function t(){}return t.getValidatorErrorMessage=function(t,e){var n={required:"This is a required field",minlength:"Minimum length is "+e,maxlength:"Maximum length is "+e,invalidCreditCard:"Invalid credit card number",invalidEmailAddress:"Invalid email address",invalidPassword:"Password must be at least 6 characters long, and contain a number and special character."};return n[t]},t.creditCardValidator=function(t){return t.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)?void 0:{invalidCreditCard:!0}},t.emailValidator=function(t){return t.value.match(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)?void 0:{invalidEmailAddress:!0}},t.passwordValidator=function(t){return t.value.match(/^(?=.*[0-9])[a-zA-Z0-9!"@#$%^&*]{6,100}$/)?void 0:{invalidPassword:!0}},t}();e.ValidationService=n},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(2),c=n(34),s=function(){function t(t){this.router=t}return t.prototype.logout=function(){sessionStorage.clear(),this.router.navigate(["/login"])},t.prototype.isLoggedIn=function(){return void 0!==this.user(void 0)},t.prototype.user=function(t){t&&sessionStorage.setItem("user",JSON.stringify(t));var e=JSON.parse(sessionStorage.getItem("user"));return e&&(t=new c.User(e.displayName,e.roles)),t?t:void 0},t.prototype.setAuth=function(t){t&&t.user&&sessionStorage.setItem("user",JSON.stringify(t.user))},t=r([a.Injectable(),o("design:paramtypes",[i.Router])],t)}();e.AuthService=s},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=function(){function t(){}return t.prototype.ngOnInit=function(){console.log("home component loaded")},t=r([a.Component({selector:"appc-home",styles:[n(46)],template:n(39)}),o("design:paramtypes",[])],t)}();e.HomeComponent=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(4),c=n(6),s=function(){function t(){}return t.prototype.toControlGroup=function(t){var e={};return t.forEach(function(t){var n=[];t.required&&n.push(i.Validators.required),t.minlength&&n.push(i.Validators.minLength(t.minlength)),t.maxlength&&n.push(i.Validators.minLength(t.maxlength)),"email"===t.type&&n.push(c.ValidationService.emailValidator),"password"===t.type&&n.push(c.ValidationService.passwordValidator),e[t.key]=new i.FormControl(t.value||"",n)}),new i.FormGroup(e)},t=r([a.Injectable(),o("design:paramtypes",[])],t)}();e.FormControlService=s},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};n(50),n(53),n(54);var a=n(0),i=n(3),c=n(49),s=n(55),l=n(12),u=function(){function t(){this.headers={},this.params={},this.data={}}return t}();e.ApiGatewayOptions=u;var f=function(){function t(t,e){this.http=t,this.httpErrorHandler=e,this.pendingCommandsSubject=new s.Subject,this.pendingCommandCount=0,this.pendingCommands$=this.pendingCommandsSubject.asObservable()}return t.prototype.get=function(t,e){var n=new u;return n.method=i.RequestMethod.Get,n.url=t,n.params=e,this.request(n)},t.prototype.post=function(t,e,n){e||(e=n,n={});var r=new u;return r.method=i.RequestMethod.Post,r.url=t,r.params=n,r.data=e,this.request(r)},t.prototype.request=function(t){var e=this;t.method=t.method||i.RequestMethod.Get,t.url=t.url||"",t.headers=t.headers||{},t.params=t.params||{},t.data=t.data||{},this.interpolateUrl(t),this.addXsrfToken(t),this.addContentType(t);var n=new i.RequestOptions;n.method=t.method,n.url=t.url,n.headers=t.headers,n.search=this.buildUrlSearchParams(t.params),n.body=JSON.stringify(t.data);var r=t.method!==i.RequestMethod.Get;r&&this.pendingCommandsSubject.next(++this.pendingCommandCount);var o=this.http.request(t.url,n).catch(function(t){return e.httpErrorHandler.handle(t),c.Observable.throw(t)}).map(this.unwrapHttpValue).catch(function(t){return c.Observable.throw(e.unwrapHttpError(t))}).finally(function(){r&&e.pendingCommandsSubject.next(--e.pendingCommandCount)});return o},t.prototype.addContentType=function(t){return t.method!==i.RequestMethod.Get&&(t.headers["Content-Type"]="application/json; charset=UTF-8"),t},t.prototype.addAuthToken=function(t){return t.headers.Authorization="Bearer "+JSON.parse(sessionStorage.getItem("accessToken")),t},t.prototype.extractValue=function(t,e){var n=t[e];return delete t[e],n},t.prototype.addXsrfToken=function(t){var e=this.getXsrfCookie();return e&&(t.headers["X-XSRF-TOKEN"]=e),t},t.prototype.getXsrfCookie=function(){var t=document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);try{return t&&decodeURIComponent(t[1])}catch(t){return""}},t.prototype.addCors=function(t){return t.headers["Access-Control-Allow-Origin"]="*",t},t.prototype.buildUrlSearchParams=function(t){var e=new i.URLSearchParams;for(var n in t)t.hasOwnProperty(n)&&e.append(n,t[n]);return e},t.prototype.interpolateUrl=function(t){var e=this;return t.url=t.url.replace(/:([a-zA-Z]+[\w-]*)/g,function(n,r){return t.params.hasOwnProperty(r)?e.extractValue(t.params,r):t.data.hasOwnProperty(r)?e.extractValue(t.data,r):""}),t.url=t.url.replace(/\/{2,}/g,"/"),t.url=t.url.replace(/\/+$/g,""),t},t.prototype.unwrapHttpError=function(t){try{return t.json()}catch(t){return{code:-1,message:"An unexpected error occurred."}}},t.prototype.unwrapHttpValue=function(t){return t.json()},t=r([a.Injectable(),o("design:paramtypes",[i.Http,l.HttpErrorHandlerService])],t)}();e.ApiGatewayService=f},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(5),c=function(){function t(t){this.dataService=t}return t.prototype.get=function(t){return this.dataService.get("api/content?lang="+(t?t:"en"))},t=r([a.Injectable(),o("design:paramtypes",[i.DataService])],t)}();e.ContentService=c},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(2),c=function(){function t(t){this._router=t}return t.prototype.handle=function(t){401===t.status&&(sessionStorage.clear(),this._router.navigate(["Login"]))},t=r([a.Injectable(),o("design:paramtypes",[i.Router])],t)}();e.HttpErrorHandlerService=c},function(t,e,n){"use strict";var r=n(52);n.d(e,"translateLoaderFactory",function(){return r.translateLoaderFactory}),n.d(e,"TranslateModule",function(){return r.TranslateModule}),n.d(e,"TranslatePipe",function(){return r.TranslatePipe}),n.d(e,"MissingTranslationHandler",function(){return r.MissingTranslationHandler}),n.d(e,"TranslateLoader",function(){return r.TranslateLoader}),n.d(e,"TranslateStaticLoader",function(){return r.TranslateStaticLoader}),n.d(e,"TranslateService",function(){return r.TranslateService}),n.d(e,"Parser",function(){return r.Parser})},function(t,e,n){t.exports=n(1)(89)},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(14),c=n(3),s=n(23),l=n(24),u=n(22),f=n(19),p=n(25),d=function(){function t(){}return t=r([a.NgModule({declarations:[u.AppComponent],imports:[i.BrowserModule,s.routing,c.HttpModule,f.SharedModule.forRoot(),p.HomeModule],providers:[l.AppService],bootstrap:[u.AppComponent]}),o("design:paramtypes",[])],t)}();e.AppModule=d},function(t,e,n){t.exports=n(1)(386)},function(t,e,n){t.exports=n(1)(393)},function(t,e,n){t.exports=n(1)(395)},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(21),c=n(4),s=n(2),l=n(3),u=n(51),f=n(13),p=n(27),d=n(29),h=n(28),m=n(30),v=n(31),g=n(9),y=n(33),b=n(32),R=n(5),j=n(10),C=n(7),_=n(12),O=n(36),w=n(11),S=n(37),P=n(35),x=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[_.HttpErrorHandlerService,j.ApiGatewayService,C.AuthService,R.DataService,w.ContentService,g.FormControlService,S.UtilityService]}},t=r([a.NgModule({imports:[i.CommonModule,c.FormsModule,c.ReactiveFormsModule,s.RouterModule,u.NgbModule.forRoot(),l.HttpModule,l.JsonpModule,f.TranslateModule.forRoot({provide:f.TranslateLoader,useClass:O.ApiTranslationLoader})],declarations:[d.DynamicFormComponent,h.DynamicFormControlComponent,m.ErrorMessageComponent,v.ErrorSummaryComponent,b.FooterComponent,y.HeaderComponent,p.PageHeadingComponent,P.UppercasePipe],exports:[i.CommonModule,c.FormsModule,c.ReactiveFormsModule,s.RouterModule,u.NgbModule,f.TranslateModule,d.DynamicFormComponent,h.DynamicFormControlComponent,v.ErrorSummaryComponent,m.ErrorMessageComponent,b.FooterComponent,y.HeaderComponent,p.PageHeadingComponent,P.UppercasePipe]}),o("design:paramtypes",[])],t)}();e.SharedModule=x},function(t,e){"use strict";var n=function(){function t(t){void 0===t&&(t={}),this.value=t.value,this.key=t.key||"",this.label=t.label||"",this.placeholder=t.placeholder||"",this.required=!!t.required,this.minlength=t.minlength,this.maxlength=t.maxlength,this.order=void 0===t.order?1:t.order,this.type=t.type||"",this.class=t.class||""}return t}();e.ControlBase=n},function(t,e,n){t.exports=n(1)(16)},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(14),i=n(0),c=n(13),s=function(){function t(t,e){this.translate=t,this.titleService=e,t.setDefaultLang("en"),t.use("en")}return t.prototype.ngOnInit=function(){var t=this;this.translate.get("title").subscribe(function(e){return t.setTitle(e)})},t.prototype.setTitle=function(t){this.titleService.setTitle(t)},t=r([i.Component({selector:"appc-app",styles:[n(45)],template:n(38)}),o("design:paramtypes",[c.TranslateService,a.Title])],t)}();e.AppComponent=s},function(t,e,n){"use strict";var r=n(2),o=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"login",loadChildren:function(){return new Promise(function(t){n.e(1).then(function(e){t(n(59).LoginModule)}.bind(null,n)).catch(n.oe)})}},{path:"register",loadChildren:function(){return new Promise(function(t){n.e(3).then(function(e){t(n(61).RegisterModule)}.bind(null,n)).catch(n.oe)})}},{path:"profile",loadChildren:function(){return new Promise(function(t){n.e(2).then(function(e){t(n(60).ProfileModule)}.bind(null,n)).catch(n.oe)})}},{path:"admin",loadChildren:function(){return new Promise(function(t){n.e(4).then(function(e){t(n(57).AdminModule)}.bind(null,n)).catch(n.oe)})}},{path:"examples",loadChildren:function(){return new Promise(function(t){n.e(0).then(function(e){t(n(58).ExamplesModule)}.bind(null,n)).catch(n.oe)})}}];e.routing=r.RouterModule.forRoot(o)},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=function(){function t(){}return t=r([a.Injectable(),o("design:paramtypes",[])],t)}();e.AppService=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(8),c=n(26),s=function(){function t(){}return t=r([a.NgModule({imports:[c.routing],declarations:[i.HomeComponent]}),o("design:paramtypes",[])],t)}();e.HomeModule=s},function(t,e,n){"use strict";var r=n(2),o=n(8),a=[{path:"home",component:o.HomeComponent}];e.routing=r.RouterModule.forChild(a)},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=function(){function t(){}return r([a.Input(),o("design:type",String)],t.prototype,"text",void 0),t=r([a.Component({selector:"appc-page-heading",template:"<h4>{{text}}</h4>"}),o("design:paramtypes",[])],t)}();e.PageHeadingComponent=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=function(){function t(){this.control=void 0,this.form=void 0}return Object.defineProperty(t.prototype,"valid",{get:function(){return this.form.controls[this.control.key].valid},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"invalid",{get:function(){return!this.form.controls[this.control.key].valid&&this.form.controls[this.control.key].touched},enumerable:!0,configurable:!0}),r([a.Input(),o("design:type",Object)],t.prototype,"control",void 0),r([a.Input(),o("design:type",Object)],t.prototype,"form",void 0),t=r([a.Component({selector:"appc-dynamic-control",template:n(40)}),o("design:paramtypes",[])],t)}();e.DynamicFormControlComponent=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(9),c=function(){function t(t){this._controlService=t,this.controls=[],this.btnText="Submit",this.formClass="form-horizontal",this.formsubmit=new a.EventEmitter}return t.prototype.ngOnInit=function(){var t=this.controls.sort(function(t,e){return t.order-e.order});this.form=this._controlService.toControlGroup(t)},t.prototype.onSubmit=function(){this.formsubmit.emit(this.form.value)},r([a.Input(),o("design:type",Array)],t.prototype,"controls",void 0),r([a.Input(),o("design:type",String)],t.prototype,"btnText",void 0),r([a.Input(),o("design:type",String)],t.prototype,"formClass",void 0),r([a.Output(),o("design:type",a.EventEmitter)],t.prototype,"formsubmit",void 0),t=r([a.Component({selector:"appc-dynamic-form",template:n(41)}),o("design:paramtypes",[i.FormControlService])],t)}();e.DynamicFormComponent=c},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(4),c=n(20),s=n(6),l=function(){function t(){}return Object.defineProperty(t.prototype,"errorMessage",{get:function(){var t=this.form.form.get(this.control.key);for(var e in t.errors)if(t.errors.hasOwnProperty(e)&&t.touched)return s.ValidationService.getValidatorErrorMessage(e,this.control.minlength||this.control.maxlength)},enumerable:!0,configurable:!0}),r([a.Input(),o("design:type",c.ControlBase)],t.prototype,"control",void 0),r([a.Input(),o("design:type",i.FormGroupDirective)],t.prototype,"form",void 0),t=r([a.Component({selector:"appc-control-error-message",template:'<div *ngIf="errorMessage" class="form-control-feedback"> {{errorMessage}} </div>'}),o("design:paramtypes",[])],t)}();e.ErrorMessageComponent=l},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=function(){function t(){}return r([a.Input(),o("design:type",Object)],t.prototype,"errors",void 0),t=r([a.Component({selector:"appc-error-summary",template:n(42)}),o("design:paramtypes",[])],t)}();e.ErrorSummaryComponent=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=function(){function t(){}return t=r([a.Component({selector:"appc-footer",styles:[n(47)],template:n(43)}),o("design:paramtypes",[])],t)}();e.FooterComponent=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(2),c=n(7),s=function(){function t(t,e){this.router=t,this.authService=e,this.isCollapsed=!0}return t.prototype.toggleNav=function(){this.isCollapsed=!this.isCollapsed},t=r([a.Component({selector:"appc-header",styles:[n(48)],template:n(44)}),o("design:paramtypes",[i.Router,c.AuthService])],t)}();e.HeaderComponent=s},function(t,e){"use strict";var n=function(){function t(t,e){this.displayName=t,this.roles=e}return t}();e.User=n},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=function(){function t(){}return t.prototype.transform=function(t){return t.toUpperCase()},t=r([a.Pipe({name:"appfUppercase"}),o("design:paramtypes",[])],t)}();e.UppercasePipe=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(11),c=function(){function t(t){this.cs=t}return t.prototype.getTranslation=function(t){return this.cs.get(t)},t=r([a.Injectable(),o("design:paramtypes",[i.ContentService])],t)}();e.ApiTranslationLoader=c;var s=function(){function t(){}return t.prototype.handle=function(t){return t.key},t=r([a.Injectable(),o("design:paramtypes",[])],t)}();e.CustomMissingTranslationHandler=s},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=n(0),i=n(2),c=function(){function t(t){this._router=t}return t.prototype.convertDateTime=function(t){var e=new Date(t.toString());return e.toDateString()},t.prototype.navigate=function(t){this._router.navigate([t])},t.prototype.navigateToSignIn=function(){this.navigate("/login")},t=r([a.Injectable(),o("design:paramtypes",[i.Router])],t)}();e.UtilityService=c},function(t,e){t.exports='<!-- header component -->\r\n<appc-header></appc-header>\r\n\r\n<div class="container">\r\n    <!-- component routing placeholder -->\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n<div class="container">\r\n    <!-- footer component -->\r\n    <appc-footer></appc-footer>\r\n\r\n</div>'},function(t,e){t.exports='<div class="jumbotron">\r\n    <div class="container">\r\n        <h2>Asp.Net Core &hearts; Angular 2 &hearts; Bootstrap 4 &hearts; Webpack</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Asp.Net Core\r\n        </h4>\r\n        <p>\r\n            ASP.NET is an open source web framework for building modern web applications and services.\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="http://www.asp.net/">More info »</a>\r\n        </p>\r\n    </div>\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Angular 2\r\n        </h4>\r\n        <p>\r\n            One Framework Mobile and desktop\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="https://angular.io/">More info »</a>\r\n        </p>\r\n    </div>\r\n\r\n    <div class="col-md-4">\r\n        <h4>\r\n            ng-bootstrap\r\n        </h4>\r\n        <p>\r\n            Angular 2, powered by Bootstrap 4 written by the angular-ui Team.\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="https://ng-bootstrap.github.io/#/home">More info »</a>\r\n        </p>\r\n    </div>\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Bootstrap 4\r\n        </h4>\r\n        <p>\r\n            Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="http://v4-alpha.getbootstrap.com/">More info »</a>\r\n        </p>\r\n    </div>\r\n    <div class="col-md-4">\r\n        <h4>\r\n            Webpack\r\n        </h4>\r\n        <p>\r\n            Module bundler\r\n        </p>\r\n        <p>\r\n            <a class="btn btn-outline-info" target="_blank" href="https://webpack.github.io/">More info »</a>\r\n        </p>\r\n    </div>\r\n</div>'},function(t,e){t.exports='<!--{{f.controls[control.key]  | json}}-->\r\n<div #f="ngForm" [formGroup]="form" [ngSwitch]="control.type" class="form-group {{control.class}}" [class.has-danger]="invalid"\r\n    [class.has-success]="valid" [class.form-check]="control.type === \'checkbox\'">\r\n\r\n    <label *ngSwitchCase="\'dropdown\'" [attr.for]="control.key" class="col-form-label">{{control.label}}</label>\r\n    <select *ngSwitchCase="\'dropdown\'" [id]="control.key" [formControlName]="control.key" [class.form-control-success]="valid"\r\n        [class.form-control-danger]="invalid" class="form-control">\r\n            <option *ngFor="let opt of control.options" [value]="opt.key">{{opt.value}}</option>\r\n    </select>\r\n\r\n    <label *ngSwitchCase="\'checkbox\'" [attr.for]="control.key" class="form-check-label">\r\n    <input #ck *ngSwitchCase="\'checkbox\'" (change)="control.value = ck.checked" [id]="control.key" [formControlName]="control.key"\r\n        [type]="control.type" class="form-check-input">\r\n        {{control.label}}\r\n    </label>\r\n\r\n    <!--This is not the switch case because of multiple control types-->\r\n    <label *ngIf="control.type === \'textbox\' || control.type === \'email\' || control.type === \'password\'" [attr.for]="control.key" class="col-form-label">{{control.label}}</label>\r\n    <input *ngIf="control.type === \'textbox\' || control.type === \'email\' || control.type === \'password\'" [id]="control.key" [formControlName]="control.key" [type]="control.type"\r\n        [placeholder]="control.placeholder" [class.form-control-success]="valid" [class.form-control-danger]="invalid" class="form-control">\r\n\r\n\r\n\r\n    <appc-control-error-message [form]="f" [control]="control"></appc-control-error-message>\r\n\r\n</div>'},function(t,e){t.exports='<form class="{{formClass}}" (ngSubmit)="onSubmit()" [formGroup]="form" novalidate role="form">\r\n    <appc-dynamic-control *ngFor="let ctrl of controls" [control]="ctrl" [form]="form"></appc-dynamic-control>\r\n\r\n    <button type="submit" class="btn btn-primary pull-right" [disabled]="!form.valid">{{btnText}}</button>\r\n</form>';
},function(t,e){t.exports='<div class="alert alert-danger" *ngIf="errors?.length > 0">\r\n    <ul>\r\n        <li *ngFor="let error of errors">\r\n            {{error}}\r\n        </li>\r\n    </ul>\r\n</div>'},function(t,e){t.exports='<footer class="text-muted">\r\n  <div class="container">\r\n      <hr>\r\n    <p class="text-muted">\r\n        &copy; 2015-2016 {{\'title\' | translate}} Company\r\n    </p>\r\n  </div>\r\n</footer>\r\n'},function(t,e){t.exports='<header class="navbar navbar-light navbar-static-top">\r\n    <div class="container">\r\n        <nav>\r\n            <div class="clearfix">\r\n                <button class="navbar-toggler float-xs-right hidden-sm-up collapsed" type="button" data-toggle="collapse" data-target="#bd-main-nav"\r\n                    aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation" (click)="toggleNav()">\r\n                    ☰\r\n                </button>\r\n                <a class="navbar-brand hidden-sm-up" routerLink="home">\r\n                    Ng2fbBootstrap\r\n                </a>\r\n            </div>\r\n            <div class="navbar-toggleable-xs collapse" [class.in]="!isCollapsed" id="bd-main-nav" aria-expanded="false" style="height: 0px;">\r\n                <ul class="nav navbar-nav">\r\n                    <li class="nav-item">\r\n                        <a class="nav-item nav-link" routerLinkActive="active" routerLink="home">Home</a>\r\n                    </li>\r\n                    <li class="nav-item">\r\n                        <a class="nav-item nav-link" routerLinkActive="active" routerLink="examples">Examples</a>\r\n                    </li>\r\n                    <li>\r\n                        <ul class="nav float-xs-left float-md-right">\r\n\r\n                            <li class="nav-item" *ngIf="authService.isLoggedIn() && authService.user()">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="profile">\r\n                                    <i class="fa fa-user"></i> {{authService.user().displayName}}\r\n                                </a>\r\n                            </li>\r\n\r\n                            <li class="nav-item" *ngIf="!authService.isLoggedIn()">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="register">\r\n                                    <i class="fa fa-user"></i> Register\r\n                                </a>\r\n                            </li>\r\n\r\n                            <li class="nav-item" *ngIf="!authService.isLoggedIn()">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="login">\r\n                                    <i class="fa fa-sign-in"></i>Login\r\n                                </a>\r\n                            </li>\r\n                            <li class="nav-item" *ngIf="authService.isLoggedIn() && authService.user()?.roles?.indexOf(\'Admin\') > -1">\r\n                                <a class="nav-item nav-link" routerLinkActive="active" routerLink="admin">\r\n                                    <i class="fa fa-gear"></i> Admin\r\n                                </a>\r\n                            </li>\r\n                            <li class="nav-item" *ngIf="authService.isLoggedIn()">\r\n                                <a class="nav-item nav-link" (click)="authService.logout()" routerLinkActive="active" href="javascript:void(null);">\r\n                                    <i class="fa fa-sign-out"></i> Logout\r\n                                </a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</header>'},function(t,e){t.exports=""},function(t,e){t.exports="\r\n"},function(t,e){t.exports=".footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 40px;\n  border-top: 1px solid #eee; }\n"},function(t,e){t.exports=""},function(t,e,n){t.exports=n(1)(1)},function(t,e,n){t.exports=n(1)(358)},function(t,e,n){t.exports=n(1)(388)},function(t,e,n){t.exports=n(1)(392)},function(t,e,n){t.exports=n(1)(538)},function(t,e,n){t.exports=n(1)(562)},function(t,e,n){t.exports=n(1)(8)},function(t,e,n){"use strict";n(17),n(18);var r=n(16),o=n(0),a=n(15);o.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(a.AppModule)}]);
//# sourceMappingURL=main.02657f7abe240346a49e.bundle.map