webpackJsonp(["main"],{

/***/ "../../../../../../../../../../../../npn_common/common/cache-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CacheService = (function () {
    function CacheService(config) {
        this.config = config;
        this.ttl = (60 * 60 * 1000); // default 1 hour
        if ((typeof (config.cacheTTL)) === 'number') {
            this.ttl = config.cacheTTL * 60 * 1000; // value in minutes
        }
        console.log("CacheService Time To Live " + this.ttl / 60000 + " minutes");
        if (this.ttl === 0) {
            console.log('Caching disabled clearing local session storage');
            sessionStorage.clear();
        }
    }
    CacheService.prototype.cacheKey = function (key) {
        if (typeof (key) !== 'string') {
            key = JSON.stringify(key);
        }
        // not sure about the .toString() on the end since Md=5.hashStr returns string Int32Array
        return __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(key).toString();
    };
    CacheService.prototype.get = function (key) {
        if (this.ttl <= 0) {
            return null; // caching disabled
        }
        var ck = this.cacheKey(key), entry = sessionStorage.getItem(ck);
        if (entry) {
            entry = JSON.parse(entry);
            if (Date.now() < entry.expiry) {
                console.log('cache hit', ck, key);
                return entry.data;
            }
            console.log('cache expired', ck);
            window.sessionStorage.removeItem(ck);
        }
        else {
            console.log('cache miss', ck);
        }
        return null;
    };
    CacheService.prototype.set = function (key, data) {
        if (this.ttl <= 0) {
            return null; // caching disabled
        }
        var ck = this.cacheKey(key);
        if (data) {
            var entry = {
                expiry: (Date.now() + this.ttl),
                data: data
            };
            console.log('caching', ck, data);
            try {
                sessionStorage.setItem(ck, JSON.stringify(entry));
            }
            catch (ex) {
                console.log('error storing item in cache', ex);
                // the assumption here is that this has happened because
                // we've stored too much, do the simplest thing
                // wipe it clean and try again.
                console.log('clearing');
                sessionStorage.clear();
                try {
                    sessionStorage.setItem(ck, JSON.stringify(entry));
                }
                catch (ex) {
                    console.log('error on second store attempt (giving up).', ex);
                }
            }
        }
        else {
            console.log('removing from cache', ck);
            sessionStorage.removeItem(ck);
        }
    };
    return CacheService;
}());
CacheService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config__["b" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config__["b" /* NpnConfiguration */]) === "function" && _a || Object])
], CacheService);

var CacheEntry = (function () {
    function CacheEntry() {
    }
    return CacheEntry;
}());
var _a;
//# sourceMappingURL=cache-service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NpnConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NPN_CONFIGURATION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var NpnConfiguration = (function () {
    function NpnConfiguration() {
    }
    return NpnConfiguration;
}());

var NPN_CONFIGURATION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('NpnConfiguration');
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/doy.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ONE_DAY_MILLIS = (24 * 60 * 60 * 1000);
var DoyPipe = (function () {
    function DoyPipe() {
    }
    DoyPipe.prototype.transform = function (date, ignoreLeapYear) {
        if (typeof (date) === 'string') {
            var parts = date.split('-');
            if (parts.length === 3) {
                var year = parseInt(parts[0]), month = parseInt(parts[1]), day = parseInt(parts[2]);
                if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month < 13 && day < 32) {
                    date = new Date(year, (month - 1), day);
                }
            }
        }
        if (date instanceof Date) {
            date = new Date(date.getTime());
            if (ignoreLeapYear) {
                // ignore leap years, using 2010 which is known to be a non-leap year
                date.setFullYear(2010);
            }
            var doy = date.getDate();
            while (date.getMonth() > 0) {
                // back up to the last day of the last month
                date.setDate(1);
                date.setTime(date.getTime() - ONE_DAY_MILLIS);
                doy += date.getDate();
            }
            return doy;
        }
        return date;
    };
    return DoyPipe;
}());
DoyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'doy' })
], DoyPipe);

//# sourceMappingURL=doy.pipe.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/guid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
// https://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());

//# sourceMappingURL=guid.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NPN_BASE_HREF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NpnCommonModule; });
/* harmony export (immutable) */ __webpack_exports__["p"] = detectIE;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/cache-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__species_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/species.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__species_title_pipe__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/species-title.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doy_pipe__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/doy.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__legend_doy_pipe__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/legend-doy.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__npn_service_utils_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/npn-service-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__species__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/species.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_10__species__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__phenophase__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/phenophase.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__phenophase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__cache_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__species_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__network_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__window__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/window.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_12__window__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__species_title_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__doy_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__legend_doy_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guid__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/guid.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_13__guid__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__config__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__config__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__npn_service_utils_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var NPN_BASE_HREF = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('npnBaseHref');
var NpnCommonModule = (function () {
    function NpnCommonModule() {
    }
    return NpnCommonModule;
}());
NpnCommonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__species_title_pipe__["a" /* SpeciesTitlePipe */],
            __WEBPACK_IMPORTED_MODULE_6__legend_doy_pipe__["a" /* LegendDoyPipe */],
            __WEBPACK_IMPORTED_MODULE_5__doy_pipe__["a" /* DoyPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__species_title_pipe__["a" /* SpeciesTitlePipe */],
            __WEBPACK_IMPORTED_MODULE_6__legend_doy_pipe__["a" /* LegendDoyPipe */],
            __WEBPACK_IMPORTED_MODULE_5__doy_pipe__["a" /* DoyPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */],
            __WEBPACK_IMPORTED_MODULE_2__species_service__["a" /* SpeciesService */],
            __WEBPACK_IMPORTED_MODULE_3__network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_9__npn_service_utils_service__["a" /* NpnServiceUtils */],
            __WEBPACK_IMPORTED_MODULE_4__species_title_pipe__["a" /* SpeciesTitlePipe */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_5__doy_pipe__["a" /* DoyPipe */],
            __WEBPACK_IMPORTED_MODULE_6__legend_doy_pipe__["a" /* LegendDoyPipe */],
            { provide: NPN_BASE_HREF, useValue: '/' },
            { provide: __WEBPACK_IMPORTED_MODULE_8__config__["a" /* NPN_CONFIGURATION */], useValue: {
                    apiRoot: '//www-dev.usanpn.org',
                    dataApiRoot: '//data-dev.usanpn.org:3006',
                    geoServerRoot: '//geoserver-dev.usanpn.org/geoserver'
                } }
        ]
    })
], NpnCommonModule);













/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;
    // Test values; Uncomment to check result …
    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    // IE 12 / Spartan
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    // Edge (IE 12+)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/legend-doy.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendDoyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JAN_ONE_2010 = new Date(2010 /*(new Date()).getFullYear()*/, 0);
var JAN_ONE_THIS_YEAR = new Date((new Date()).getFullYear(), 0);
var ONE_DAY = (24 * 60 * 60 * 1000);
/**
 * Simplified version of thirtyYearAvgDayOfYear that simply takes a number day of year
 * and returns a formatted date.  The optional second argument defines the date format
 * which defaults to 'MMM d'.  The optional third argument defines whether or not the
 * current year should be used as oposed to one known to have 365 days (2010).
 *
 * This filter equates doy 0 with doy 1 since legend scales are inconsistent in this regard.
 */
var LegendDoyPipe = (function () {
    function LegendDoyPipe(datePipe) {
        this.datePipe = datePipe;
    }
    LegendDoyPipe.prototype.transform = function (doy, fmt, current_year) {
        doy = Math.round(doy);
        if (doy === 0) {
            doy = 1;
        }
        fmt = fmt || 'MMM d'; // e.g. Jan 1
        return this.datePipe.transform(new Date((current_year ? JAN_ONE_THIS_YEAR : JAN_ONE_2010).getTime() + ((doy - 1) * ONE_DAY)), fmt);
    };
    return LegendDoyPipe;
}());
LegendDoyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'legendDoy' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === "function" && _a || Object])
], LegendDoyPipe);

var _a;
//# sourceMappingURL=legend-doy.pipe.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/cache-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/*
TODO
What this service is doing is very boiler plate and should be consolidated in a shared injectable service.
I.e.
Many service inject Http/CacheService/NpnConfiguration and then contain logic very very similar to
what is done in getNetworks.  These three injectables should be wrapped up in a common service class
that avoids everyone needing to inject those three things (I.e. exposes Http/CacheService/NpnConfiguration as public members)
and contains utility functions ala ClippedWmsMapSelection.cachedGet in which case getStations becomes just a few lines.
 */
var NetworkService = (function () {
    function NetworkService(http, cache, config) {
        this.http = http;
        this.cache = cache;
        this.config = config;
    }
    NetworkService.prototype.getStations = function (networkId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.config.apiRoot + "/npn_portal/stations/getStationsForNetwork.json", params = {
                network_id: networkId
            }, cacheKey = {
                u: url,
                params: params
            }, data = _this.cache.get(cacheKey);
            if (data) {
                resolve(data);
            }
            else {
                _this.http.get(url, { params: params })
                    .toPromise()
                    .then(function (response) {
                    data = response.json();
                    _this.cache.set(cacheKey, data);
                    resolve(data);
                })
                    .catch(reject);
            }
        });
    };
    return NetworkService;
}());
NetworkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__config__["b" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__config__["b" /* NpnConfiguration */]) === "function" && _c || Object])
], NetworkService);

var _a, _b, _c;
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/npn-service-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NpnServiceUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/cache-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NpnServiceUtils = (function () {
    function NpnServiceUtils(http, cache, config) {
        this.http = http;
        this.cache = cache;
        this.config = config;
    }
    NpnServiceUtils.prototype.apiUrl = function (suffix) {
        return "" + this.config.apiRoot + suffix;
    };
    NpnServiceUtils.prototype.dataApiUrl = function (suffix) {
        return "" + this.config.dataApiRoot + suffix;
    };
    NpnServiceUtils.prototype.geoServerUrl = function (suffix) {
        return "" + this.config.geoServerRoot + suffix;
    };
    Object.defineProperty(NpnServiceUtils.prototype, "dataApiUseStatisticsCache", {
        get: function () {
            return typeof (this.config.dataApiUseStatisticsCache) === 'boolean' ?
                this.config.dataApiUseStatisticsCache : false;
        },
        enumerable: true,
        configurable: true
    });
    NpnServiceUtils.prototype.get = function (url, params, asText) {
        var _this = this;
        params = params || {};
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { params: params })
                .toPromise()
                .then(function (response) {
                var data = asText ? response.text() : response.json();
                resolve(data);
            })
                .catch(reject);
        });
    };
    NpnServiceUtils.prototype.cachedGet = function (url, params, asText) {
        var _this = this;
        params = params || {};
        return new Promise(function (resolve, reject) {
            var cacheKey = {
                u: url,
                params: params
            }, data = _this.cache.get(cacheKey);
            if (data) {
                resolve(data);
            }
            else {
                _this.http.get(url, { params: params })
                    .toPromise()
                    .then(function (response) {
                    data = asText ? response.text() : response.json();
                    _this.cache.set(cacheKey, data);
                    resolve(data);
                })
                    .catch(reject);
            }
        });
    };
    return NpnServiceUtils;
}());
NpnServiceUtils = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cache_service__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__config__["b" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__config__["b" /* NpnConfiguration */]) === "function" && _c || Object])
], NpnServiceUtils);

var _a, _b, _c;
//# sourceMappingURL=npn-service-utils.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/phenophase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phenophase; });
var Phenophase = (function () {
    function Phenophase() {
    }
    return Phenophase;
}());

//# sourceMappingURL=phenophase.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/species-title.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesTitlePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../../../../../../../../npn_common/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SpeciesTitlePipe = (function () {
    function SpeciesTitlePipe() {
    }
    SpeciesTitlePipe.prototype.transform = function (item, format) {
        if (item) {
            format = format || __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].appConfig.tagSpeciesTitle;
            if (format === 'common-name') {
                if (item.common_name) {
                    var lower = item.common_name.toLowerCase();
                    return lower.substring(0, 1).toUpperCase() + lower.substring(1);
                }
                return item.common_name;
            }
            else if (format === 'scientific-name') {
                return item.genus + " " + item.species;
            }
        }
        return item;
    };
    return SpeciesTitlePipe;
}());
SpeciesTitlePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'speciesTitle' })
], SpeciesTitlePipe);

//# sourceMappingURL=species-title.pipe.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/species.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/cache-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HEADERS = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
var SpeciesService = (function () {
    function SpeciesService(http, cache, datePipe, config) {
        this.http = http;
        this.cache = cache;
        this.datePipe = datePipe;
        this.config = config;
    }
    SpeciesService.prototype.getAllSpecies = function (params) {
        var _this = this;
        // NOTE: when there are multiple species phenophase controls on the screen the result can
        // be multiple simultaneous queries...
        return new Promise(function (resolve, reject) {
            console.log('SpeciesService.getAllSpecies:params', params);
            var url = _this.config.apiRoot + "/npn_portal/species/getSpeciesFilter.json", cacheKey = {
                u: url,
                params: params
            }, data = _this.cache.get(cacheKey);
            if (data) {
                resolve(data);
            }
            else {
                var uParams_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
                Object.keys(params).forEach(function (key) { return uParams_1.set("" + key, "" + params[key]); });
                _this.http.post(url, uParams_1.toString(), { headers: HEADERS })
                    .toPromise()
                    .then(function (response) {
                    data = response.json();
                    _this.cache.set(cacheKey, data);
                    resolve(data);
                })
                    .catch(reject);
            }
        });
    };
    SpeciesService.prototype._getPhenophases = function (species, date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.config.apiRoot + "/npn_portal/phenophases/getPhenophasesForSpecies.json", params = {
                species_id: species.species_id
            };
            if (date) {
                params.date = _this.datePipe.transform(date, 'y-MM-dd');
            }
            else {
                params.return_all = true;
            }
            var cacheKey = {
                u: url,
                params: params
            }, data = _this.cache.get(cacheKey);
            if (data) {
                resolve(data);
            }
            else {
                _this.http.get(url, { params: params })
                    .toPromise()
                    .then(function (response) {
                    var phases = response.json();
                    data = phases[0].phenophases;
                    data = _this.removeRedundantPhenophases(data);
                    _this.cache.set(cacheKey, data);
                    resolve(data);
                })
                    .catch(reject);
            }
        });
    };
    SpeciesService.prototype.getAllPhenophases = function (species) {
        return this._getPhenophases(species);
    };
    SpeciesService.prototype.getPhenophasesForDate = function (species, date) {
        return this._getPhenophases(species, date);
    };
    SpeciesService.prototype.getPhenophasesForYear = function (species, year) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var jan1 = new Date(year, 0, 1), dec31 = new Date(year, 11, 31);
            Promise.all([
                _this.getPhenophasesForDate(species, jan1),
                _this.getPhenophasesForDate(species, dec31)
            ]).then(function (lists) {
                resolve(_this.mergeRedundantPhenophaseLists(lists));
            })
                .catch(reject);
        });
    };
    SpeciesService.prototype.getPhenophasesForYears = function (species, startYear, endYear) {
        var _this = this;
        if (startYear && !endYear) {
            throw new Error('Missing end year.');
        }
        if (startYear > endYear) {
            throw new Error('start year cannot be greater than end');
        }
        var years = [startYear], i = startYear;
        while (i++ < endYear) {
            years.push(i);
        }
        return new Promise(function (resolve, reject) {
            Promise.all(years.map(function (y) { return _this.getPhenophasesForYear(species, y); }))
                .then(function (lists) {
                resolve(_this.mergeRedundantPhenophaseLists(lists));
            })
                .catch(reject);
        });
    };
    SpeciesService.prototype.getPhenophases = function (species, startYear, endYear) {
        return startYear ?
            this.getPhenophasesForYears(species, startYear, endYear) :
            this.getAllPhenophases(species);
    };
    SpeciesService.prototype.removeRedundantPhenophases = function (list) {
        var seen = [];
        return list.filter(function (pp) {
            if (seen[pp.phenophase_id]) {
                return false;
            }
            seen[pp.phenophase_id] = pp;
            return true;
        });
    };
    SpeciesService.prototype.mergeRedundantPhenophaseLists = function (lists) {
        return this.removeRedundantPhenophases(lists.reduce(function (arr, l) {
            return arr.concat(l);
        }, []));
    };
    return SpeciesService;
}());
SpeciesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cache_service__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__config__["b" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__config__["b" /* NpnConfiguration */]) === "function" && _d || Object])
], SpeciesService);

var _a, _b, _c, _d;
//# sourceMappingURL=species.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/species.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Species; });
var Species = (function () {
    function Species() {
    }
    return Species;
}());

//# sourceMappingURL=species.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/common/window.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Window; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Window = (function () {
    function Window() {
    }
    return Window;
}());
Window = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Window);

//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/*
IMPORTANT: use of environment needs to be reviewed entirely.  For some reason an
ng build --env=prod is NOT picking up this file vs the dev version so for
now toggling the production flag in environment.ts which is frustrating.
 */
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    googleMapsApiKey: 'AIzaSyAsTM8XaktfkwpjEeDMXkNrojaiB2W5WyE',
    appConfig: {
        // this stuff is "system wide" and may need to be rolled into how an individual visualization is displayed
        // i.e. what someone wants one visualization on their dashbord with filterLqdSummary:true and another false
        // or a different # of days quality filter?
        num_days_quality_filter: 30,
        filterLqdSummary: true,
        filterLqdDisclaimer: 'For quality assurance purposes, only onset dates that are preceded by negative records are included in the visualization.',
        tagSpeciesTitle: 'common-name',
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/date-extent-util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateExtentUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FMT_REGEX = /^(\d\d\d\d)-0?(\d+)-0?(\d+)/;
var DateExtentUtil = (function () {
    function DateExtentUtil() {
    }
    DateExtentUtil.prototype.parse = function (s) {
        var match = FMT_REGEX.exec(s.replace(/T.*$/, '')), year = parseInt(match[1]), month = parseInt(match[2]) - 1, day = parseInt(match[3]);
        return new Date(year, month, day);
    };
    return DateExtentUtil;
}());
DateExtentUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DateExtentUtil);

//# sourceMappingURL=date-extent-util.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/gridded-common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAP_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WMS_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BOX_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_WMS_ARGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GriddedUrls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MAP_LAYERS = {
    "geo_server": {
        "url": "//geoserver-dev.usanpn.org/geoserver"
    },
    "description": "",
    "categories": [{
            "name": "Temperature Accumulations, Daily 30-year Average",
            "supports_data": false,
            "legend_label_filter": {
                "name": "legendGddUnits",
                "args": [false]
            },
            "gridded_label_filter": {
                "name": "legendGddUnits",
                "args": [true]
            },
            "extent_default_filter": {
                "name": "agddDefaultTodayElevation"
            },
            "legend_units": "Growing Degree Days",
            "legend_delimiter_every": 2000,
            "layers": [{
                    "name": "gdd:30yr_avg_agdd"
                }, {
                    "name": "gdd:30yr_avg_agdd_50f"
                }]
        }, {
            "name": "Temperature Accumulations, Current Day",
            "supports_data": false,
            "legend_label_filter": {
                "name": "legendGddUnits",
                "args": [false]
            },
            "gridded_label_filter": {
                "name": "legendGddUnits",
                "args": [true]
            },
            "extent_default_filter": {
                "name": "agddDefaultTodayTime"
            },
            "legend_units": "Growing Degree Days",
            "legend_delimiter_every": 2000,
            "supports_time_series": true,
            "layers": [{
                    "name": "gdd:agdd"
                }, {
                    "name": "gdd:agdd_50f"
                }]
        }, {
            "name": "Temperature Accumulations, Current Day, Alaska",
            "supports_data": false,
            "legend_label_filter": {
                "name": "legendGddUnits",
                "args": [false]
            },
            "gridded_label_filter": {
                "name": "legendGddUnits",
                "args": [true]
            },
            "extent_values_filter": {
                "name": "extentDates",
                "args": [null, "today"]
            },
            "legend_units": "Growing Degree Days",
            "legend_delimiter_every": 2000,
            "layers": [{
                    "name": "gdd:agdd_alaska"
                }, {
                    "name": "gdd:agdd_alaska_50f"
                }]
        }, {
            "name": "Temperature Accumulations, Daily Anomaly",
            "supports_data": false,
            "legend_label_filter": {
                "name": "legendAgddAnomaly",
                "args": [false]
            },
            "gridded_label_filter": {
                "name": "legendAgddAnomaly",
                "args": [true]
            },
            "extent_default_filter": {
                "name": "agddDefaultTodayTime"
            },
            "legend_units": "Growing Degree Days",
            "legend_delimiter_every": 100,
            "layers": [{
                    "name": "gdd:agdd_anomaly"
                }, {
                    "name": "gdd:agdd_anomaly_50f"
                }]
        }, {
            "name": "Spring Indices, Historical Annual",
            "legend_label_filter": {
                "name": "legendDoy"
            },
            "current_year_only": true,
            "layers": [{
                    "name": "si-x:average_leaf_prism"
                }, {
                    "name": "si-x:average_bloom_prism"
                }, {
                    "name": "si-x:arnoldred_leaf_prism"
                }, {
                    "name": "si-x:arnoldred_bloom_prism"
                }, {
                    "name": "si-x:lilac_leaf_prism"
                }, {
                    "name": "si-x:lilac_bloom_prism"
                }, {
                    "name": "si-x:zabelli_leaf_prism"
                }, {
                    "name": "si-x:zabelli_bloom_prism"
                }]
        }, {
            "name": "Spring Indices, Current Year",
            "legend_label_filter": {
                "name": "legendDoy"
            },
            "extent_default_filter": {
                "name": "agddDefaultTodayTime"
            },
            "current_year_only": true,
            "layers": [{
                    "name": "si-x:average_leaf_ncep"
                }, {
                    "name": "si-x:average_bloom_ncep"
                }, {
                    "name": "si-x:arnoldred_leaf_ncep"
                }, {
                    "name": "si-x:arnoldred_bloom_ncep"
                }, {
                    "name": "si-x:lilac_leaf_ncep"
                }, {
                    "name": "si-x:lilac_bloom_ncep"
                }, {
                    "name": "si-x:zabelli_leaf_ncep"
                }, {
                    "name": "si-x:zabelli_bloom_ncep"
                }]
        }, {
            "name": "Spring Indices, Current Year, Alaska",
            "legend_label_filter": {
                "name": "legendDoy"
            },
            "extent_values_filter": {
                "name": "extentDates",
                "args": [null, "today"]
            },
            "current_year_only": true,
            "layers": [{
                    "name": "si-x:average_leaf_ncep_alaska"
                }, {
                    "name": "si-x:average_bloom_ncep_alaska"
                }, {
                    "name": "si-x:arnoldred_leaf_ncep_alaska"
                }, {
                    "name": "si-x:arnoldred_bloom_ncep_alaska"
                }, {
                    "name": "si-x:lilac_leaf_ncep_alaska"
                }, {
                    "name": "si-x:lilac_bloom_ncep_alaska"
                }, {
                    "name": "si-x:zabelli_leaf_ncep_alaska"
                }, {
                    "name": "si-x:zabelli_bloom_ncep_alaska"
                }]
        }, {
            "name": "Spring Indices, Daily Anomaly",
            "supports_data": false,
            "legend_label_filter": {
                "name": "legendSixAnomaly"
            },
            "extent_default_filter": {
                "name": "agddDefaultTodayTime"
            },
            "layers": [{
                    "name": "si-x:leaf_anomaly"
                }, {
                    "name": "si-x:bloom_anomaly"
                }]
        }, {
            "name": "Spring Indices, 30-Year Average",
            "legend_label_filter": {
                "name": "legendDoy"
            },
            "extent_default_filter": {
                "name": "agddDefaultTodayElevation"
            },
            "layers": [{
                    "name": "si-x:30yr_avg_six_leaf"
                }, {
                    "name": "si-x:30yr_avg_six_bloom"
                }]
        }]
};
// not safe to change since the capabilities document format changes based on version
// so a version change -may- require code changes wrt interpreting the document
var WMS_VERSION = '1.1.1';
var BOX_SIZE = 256;
var BASE_WMS_ARGS = {
    service: 'WMS',
    request: 'GetMap',
    version: WMS_VERSION,
    layers: undefined,
    styles: '',
    format: 'image/png',
    transparent: true,
    height: BOX_SIZE,
    width: BOX_SIZE,
    srs: 'EPSG:3857' // 'EPSG:4326'
};
var GriddedUrls = (function () {
    function GriddedUrls(config) {
        this.config = config;
        this.geoServerUrl = config.geoServerRoot;
        this.wmsBaseUrl = this.geoServerUrl + "/wms";
        this.wmsCapabilitiesUrl = this.wmsBaseUrl + "?service=wms&version=" + WMS_VERSION + "&request=GetCapabilities";
    }
    return GriddedUrls;
}());
GriddedUrls = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__common__["f" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common__["i" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["i" /* NpnConfiguration */]) === "function" && _a || Object])
], GriddedUrls);

var _a;
//# sourceMappingURL=gridded-common.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NpnGriddedModule; });
/* harmony export (immutable) */ __webpack_exports__["e"] = googleFeatureBounds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wms_pipe_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-pipe-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wms_map_layer_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wms_map_legend_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-legend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__date_extent_util_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/date-extent-util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wms_map_legend_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-legend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wms_map_opacity_control_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-opacity-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gridded_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/gridded-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wcs_data_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wcs-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/pipes.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wms_map_legend__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-legend.ts");
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__wms_map_legend_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__wcs_data_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_14__wcs_data_service__["b"]; });
/* unused harmony reexport WmsMapSupportsOpacity */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var NpnGriddedModule = (function () {
    function NpnGriddedModule() {
    }
    return NpnGriddedModule;
}());
NpnGriddedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_9__common__["h" /* NpnCommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__wms_map_legend_component__["a" /* WmsMapLegendComponent */],
            __WEBPACK_IMPORTED_MODULE_12__wms_map_opacity_control_component__["a" /* WmsMapOpacityControl */],
            __WEBPACK_IMPORTED_MODULE_15__pipes__["f" /* LegendGddUnitsPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["a" /* AgddDefaultTodayElevationPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["d" /* LegendAgddAnomalyPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pipes__["b" /* AgddDefaultTodayTimePipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["g" /* LegendSixAnomalyPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["e" /* LegendDoyPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["c" /* ExtentDatesPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__wms_map_legend_component__["a" /* WmsMapLegendComponent */],
            __WEBPACK_IMPORTED_MODULE_12__wms_map_opacity_control_component__["a" /* WmsMapOpacityControl */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */],
            __WEBPACK_IMPORTED_MODULE_10__date_extent_util_service__["a" /* DateExtentUtil */],
            __WEBPACK_IMPORTED_MODULE_15__pipes__["f" /* LegendGddUnitsPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["a" /* AgddDefaultTodayElevationPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["d" /* LegendAgddAnomalyPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pipes__["b" /* AgddDefaultTodayTimePipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["g" /* LegendSixAnomalyPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["e" /* LegendDoyPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes__["c" /* ExtentDatesPipe */],
            __WEBPACK_IMPORTED_MODULE_6__wms_pipe_factory_service__["a" /* WmsPipeFactory */],
            __WEBPACK_IMPORTED_MODULE_7__wms_map_layer_service__["a" /* WmsMapLayerService */],
            __WEBPACK_IMPORTED_MODULE_8__wms_map_legend_service__["a" /* WmsMapLegendService */],
            __WEBPACK_IMPORTED_MODULE_13__gridded_common__["c" /* GriddedUrls */],
            __WEBPACK_IMPORTED_MODULE_14__wcs_data_service__["b" /* WcsDataService */]
        ]
    })
], NpnGriddedModule);

//export * from './wms-map-layer';





// this may not be the best or final home for this functionality...
function googleFeatureBounds(feature) {
    var geo = feature.getGeometry(), type = geo.getType();
    /*if(!type || /LineString/.test(type)) {
        // TODO ? generate bounds of a [Multi]LineString?
    } else {*/
    if (type && /Polygon/.test(type)) {
        var bounds = new google.maps.LatLngBounds(), arr = geo.getArray(), rings = type === 'Polygon' ?
            arr :
            arr.reduce(function (c, p) {
                c.push(p.getArray()[0]);
                return c;
            }, []), i, j;
        for (i = 0; i < rings.length; i++) {
            var ringArr = rings[i].getArray();
            for (j = 0; j < ringArr.length; j++) {
                bounds.extend(new google.maps.LatLng(ringArr[j].lat(), ringArr[j].lng()));
            }
        }
        return bounds;
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LegendGddUnitsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgddDefaultTodayElevationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LegendAgddAnomalyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AgddDefaultTodayTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LegendSixAnomalyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LegendDoyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ExtentDatesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_extent_util_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/date-extent-util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ONE_DAY = (24 * 60 * 60 * 1000);
var JAN_ONE_2010 = new Date(2010, 0);
var JAN_ONE_THIS_YEAR = new Date((new Date()).getFullYear(), 0);
var LegendGddUnitsPipe = (function () {
    function LegendGddUnitsPipe(decimalPipe) {
        this.decimalPipe = decimalPipe;
    }
    LegendGddUnitsPipe.prototype.transform = function (n, includeUnits) {
        return this.decimalPipe.transform(n, '1.0') + (includeUnits ? ' AGDD' : '');
    };
    return LegendGddUnitsPipe;
}());
LegendGddUnitsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'legendGddUnits' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */]) === "function" && _a || Object])
], LegendGddUnitsPipe);

var AgddDefaultTodayElevationPipe = (function () {
    function AgddDefaultTodayElevationPipe(datePipe) {
        this.datePipe = datePipe;
    }
    AgddDefaultTodayElevationPipe.prototype.transform = function (values) {
        var todayLabel = this.datePipe.transform(new Date(), 'MMMM d');
        return (values || []).reduce(function (dflt, v) {
            return dflt || (v.label == todayLabel ? v : undefined);
        }, undefined);
    };
    return AgddDefaultTodayElevationPipe;
}());
AgddDefaultTodayElevationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'agddDefaultTodayElevation' }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === "function" && _b || Object])
], AgddDefaultTodayElevationPipe);

var LegendAgddAnomalyPipe = (function () {
    function LegendAgddAnomalyPipe(decimalPipe) {
        this.decimalPipe = decimalPipe;
    }
    LegendAgddAnomalyPipe.prototype.transform = function (n, includeUnits) {
        if (n === 0) {
            return 'No Difference';
        }
        var lt = n < 0;
        return this.decimalPipe.transform(Math.abs(n), '1.0') + (includeUnits ? ' AGDD ' : ' ') + (lt ? '<' : '>') + ' Avg';
    };
    return LegendAgddAnomalyPipe;
}());
LegendAgddAnomalyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'legendAgddAnomaly' }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */]) === "function" && _c || Object])
], LegendAgddAnomalyPipe);

var AgddDefaultTodayTimePipe = (function () {
    function AgddDefaultTodayTimePipe(datePipe) {
        this.datePipe = datePipe;
    }
    AgddDefaultTodayTimePipe.prototype.transform = function (values) {
        var todayLabel = this.datePipe.transform(new Date(), 'MMMM d, y');
        return (values || []).reduce(function (dflt, v) {
            return dflt || (v.label == todayLabel ? v : undefined);
        }, undefined);
    };
    ;
    return AgddDefaultTodayTimePipe;
}());
AgddDefaultTodayTimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'agddDefaultTodayTime' }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === "function" && _d || Object])
], AgddDefaultTodayTimePipe);

var LegendSixAnomalyPipe = (function () {
    function LegendSixAnomalyPipe() {
    }
    LegendSixAnomalyPipe.prototype.transform = function (n) {
        if (n === 0) {
            return 'No Difference';
        }
        var lt = n < 0, abs = Math.abs(n);
        return abs + ' Days ' + (lt ? 'Early' : 'Late');
    };
    ;
    return LegendSixAnomalyPipe;
}());
LegendSixAnomalyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'legendSixAnomaly' })
], LegendSixAnomalyPipe);

var LegendDoyPipe = (function () {
    function LegendDoyPipe(datePipe) {
        this.datePipe = datePipe;
    }
    LegendDoyPipe.prototype.transform = function (doy, fmt, current_year) {
        doy = Math.round(doy);
        if (doy === 0) {
            doy = 1;
        }
        fmt = fmt || 'MMM d'; // e.g. Jan 1
        return this.datePipe.transform(new Date((current_year ? JAN_ONE_THIS_YEAR : JAN_ONE_2010).getTime() + ((doy - 1) * ONE_DAY)), fmt);
    };
    return LegendDoyPipe;
}());
LegendDoyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'legendDoy' }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === "function" && _e || Object])
], LegendDoyPipe);

var ExtentDatesPipe = (function () {
    function ExtentDatesPipe(datePipe, dateExtentUtil) {
        this.datePipe = datePipe;
        this.dateExtentUtil = dateExtentUtil;
    }
    ExtentDatesPipe.prototype.toTime = function (s) {
        var d = new Date();
        if (s === 'yesterday' || s === 'today' || s === 'tomorrow') {
            if (s === 'yesterday') {
                d.setTime(d.getTime() - ONE_DAY);
            }
            else if (s === 'tomorrow') {
                d.setTime(d.getTime() + ONE_DAY);
            }
            s = this.datePipe.transform(d, 'yyyy-MM-dd 00:00:00');
        }
        else if (s.indexOf('T') === -1) {
            s = d.getFullYear() + '-' + s + ' 00:00:00';
        }
        return this.dateExtentUtil.parse(s).getTime();
    };
    ExtentDatesPipe.prototype.transform = function (arr, after, before) {
        var _this = this;
        var a = after ? this.toTime(after) : undefined, b = before ? this.toTime(before) : undefined;
        if (a || b) {
            arr = arr.filter(function (d) {
                var t = _this.dateExtentUtil.parse(d).getTime();
                return (!a || (a && t > a)) && (!b || (b && t < b));
            });
        }
        return arr;
    };
    return ExtentDatesPipe;
}());
ExtentDatesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'extentDates' }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__date_extent_util_service__["a" /* DateExtentUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__date_extent_util_service__["a" /* DateExtentUtil */]) === "function" && _g || Object])
], ExtentDatesPipe);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wcs-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DESTINATION_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WcsDataService; });
/* unused harmony export GriddedInfoWindowHandler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TO_RADIANS = function (degrees) { return degrees * Math.PI / 180; };
var TO_DEGREES = function (radians) { return radians * 180 / Math.PI; };
var DESTINATION_POINT = function (latLng, brng, dist) {
    // 0=N,90=E,180=S,270=W dist in km
    dist = dist / 6371;
    brng = TO_RADIANS(brng);
    var lat1 = TO_RADIANS(latLng.lat()), lon1 = TO_RADIANS(latLng.lng());
    var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) +
        Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
    var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
        Math.cos(lat1), Math.cos(dist) - Math.sin(lat1) *
        Math.sin(lat2));
    if (isNaN(lat2) || isNaN(lon2)) {
        return null;
    }
    return new google.maps.LatLng(TO_DEGREES(lat2), TO_DEGREES(lon2));
};
var WcsDataService = (function () {
    function WcsDataService(serviceUtils) {
        this.serviceUtils = serviceUtils;
    }
    WcsDataService.prototype.newInfoWindowHandler = function (map) {
        return new GriddedInfoWindowHandler(this, map);
    };
    // NOTE: the original from the npn-vis-tool passed in a layer object and augmented
    // WCS parameters based on its extent.  At the moment full layers are not in use
    // and don't exist for the set of current components.  All usage at the moment
    // ties back to the ClippedWmsMapSelection class so look there when the time comes
    WcsDataService.prototype.getGriddedData = function (layerName, latLng, gridSize, paramsAugment) {
        var edges = [0, 80, 180, 270].map(function (bearing) {
            return DESTINATION_POINT(latLng, bearing, (gridSize / 2));
        }), wcsArgs = {
            service: 'WCS',
            request: 'GetCoverage',
            version: '2.0.1',
            coverageId: layerName.replace(':', '__'),
            format: 'application/gml+xml',
            subset: []
        }, url;
        // add edges
        wcsArgs.subset.push('http://www.opengis.net/def/axis/OGC/0/Long(' + [edges[3].lng(), edges[1].lng()].join(',') + ')');
        wcsArgs.subset.push('http://www.opengis.net/def/axis/OGC/0/Lat(' + [edges[2].lat(), edges[0].lat()].join(',') + ')');
        // date extent example...
        // http://www.opengis.net/def/axis/OGC/0/time("2018-01-31T00:00:00.000Z")
        if (paramsAugment) {
            paramsAugment(wcsArgs);
        }
        console.log('wcsArgs', wcsArgs);
        // see: https://github.com/angular/angular/issues/11058
        // will need to change when upgrading Angular version and moving to HttpClient
        var urlParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]('', new GhQueryEncoder());
        Object.keys(wcsArgs).filter(function (key) { return key !== 'subset'; }).forEach(function (key) { return urlParams.set(key, wcsArgs[key]); });
        wcsArgs.subset.forEach(function (v) { return urlParams.append('subset', v); });
        return this.serviceUtils.http.get(this.serviceUtils.config.geoServerRoot + "/wcs", { params: urlParams })
            .map(function (response) {
            var wcsData = __WEBPACK_IMPORTED_MODULE_2_jquery__(__WEBPACK_IMPORTED_MODULE_2_jquery__["parseXML"](response.text())), tuples = wcsData.find('tupleList').text();
            return tuples ?
                tuples.trim().split(' ').map(function (t) { return parseFloat(t); }) :
                [];
        });
    };
    return WcsDataService;
}());
WcsDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common__["j" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common__["j" /* NpnServiceUtils */]) === "function" && _a || Object])
], WcsDataService);

var GhQueryEncoder = (function (_super) {
    __extends(GhQueryEncoder, _super);
    function GhQueryEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GhQueryEncoder.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    GhQueryEncoder.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeKey.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return GhQueryEncoder;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* QueryEncoder */]));
var GriddedInfoWindowHandler = (function () {
    function GriddedInfoWindowHandler(dataService, map) {
        this.dataService = dataService;
        this.map = map;
    }
    GriddedInfoWindowHandler.prototype.open = function (latLng, layerName, legend, paramsAugment) {
        var _this = this;
        this.dataService.getGriddedData(layerName, latLng, 5, paramsAugment)
            .subscribe(function (tuples) {
            console.log('GriddedInfoWindowHandler.tuples', tuples);
            var point = tuples && tuples.length ? tuples[0] : undefined;
            if (point === -9999 || isNaN(point)) {
                console.log("GriddedInfoWindowHandler: received -9999 or Nan (" + point + ") ignoring");
                return;
            }
            var html = "<div id=\"griddedPointInfoWindow\">";
            var legendPoint = legend.getPointData(point);
            if (legendPoint) {
                html += "<div class=\"gridded-legend-color\" style=\"background-color: " + legendPoint.color + ";\">&nbsp;</div>";
            }
            html += "<div class=\"gridded-point-data\">" + legend.formatPointData(point) + "</div>";
            html += "</div>";
            if (!_this.infoWindow) {
                _this.infoWindow = new google.maps.InfoWindow({
                    maxWidth: 200,
                    content: 'contents'
                });
            }
            _this.infoWindow.setContent(html);
            _this.infoWindow.setPosition(latLng);
            _this.infoWindow.open(_this.map);
        });
    };
    GriddedInfoWindowHandler.prototype.close = function () {
        if (this.infoWindow) {
            this.infoWindow.close();
        }
    };
    return GriddedInfoWindowHandler;
}());

var _a;
//# sourceMappingURL=wcs-data.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wms-map-layer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmsMapLayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_extent_util_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/date-extent-util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gridded_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/gridded-common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wms_map_layer__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-layer.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DEEP_COPY = function (o) { return JSON.parse(JSON.stringify(o)); };
var WmsMapLayerService = (function () {
    function WmsMapLayerService(serviceUtils, dateExtentUtil, urls) {
        this.serviceUtils = serviceUtils;
        this.dateExtentUtil = dateExtentUtil;
        this.urls = urls;
    }
    WmsMapLayerService.prototype.getLayers = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getLayerDefinitions()
                .then(function (definitions) {
                var copy = DEEP_COPY(definitions);
                copy.categories.forEach(function (cat) {
                    // replace layer definitions with actual layers
                    cat.layers = cat.layers.map(function (l) { return new __WEBPACK_IMPORTED_MODULE_5__wms_map_layer__["a" /* WmsMapLayer */](map, l, _this.urls.wmsBaseUrl); });
                });
                resolve(copy);
            })
                .catch(reject);
        });
    };
    WmsMapLayerService.prototype.getLayerDefinitions = function () {
        var _this = this;
        function mergeLayersIntoConfig(wms_layer_defs) {
            var result = DEEP_COPY(__WEBPACK_IMPORTED_MODULE_4__gridded_common__["d" /* MAP_LAYERS */]), base_description = result.description;
            result.categories.forEach(function (category) {
                // layers can inherit config like filters (if all in common) from
                // the base category
                var base_config = DEEP_COPY(category);
                delete base_config.name;
                delete base_config.layers;
                base_config.description = base_config.description || base_description;
                category.layers = category.layers.map(function (l) {
                    var base_copy = DEEP_COPY(base_config);
                    return __assign({}, base_copy, wms_layer_defs[l.name], l);
                });
            });
            return result;
        }
        return new Promise(function (resolve, reject) {
            if (_this.layerDefs) {
                resolve(_this.layerDefs);
            }
            else {
                _this.serviceUtils.cachedGet(_this.urls.wmsCapabilitiesUrl, null, true /*as text*/)
                    .then(function (xml) {
                    var wms_capabilities = __WEBPACK_IMPORTED_MODULE_1_jquery__(__WEBPACK_IMPORTED_MODULE_1_jquery__["parseXML"](xml));
                    console.debug('WmsMapLayerService:capabilities', wms_capabilities);
                    var wms_layer_defs = _this._getLayers(wms_capabilities.find('Layer'));
                    console.debug('WmsMapLayerService:wms layer definitions', wms_layer_defs);
                    _this.layerDefs = mergeLayersIntoConfig(wms_layer_defs);
                    console.debug('WmsMapLayerService:layer definitions', _this.layerDefs);
                    resolve(_this.layerDefs);
                })
                    .catch(reject);
            }
        });
    };
    WmsMapLayerService.prototype.getLayerDefinition = function (layerName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getLayerDefinitions()
                .then(function (definitions) {
                var layerMap = definitions.categories.reduce(function (map, c) {
                    c.layers.forEach(function (l) {
                        map[l.name] = l;
                    });
                    return map;
                }, {});
                resolve(layerMap[layerName]);
            })
                .catch(reject);
        });
    };
    // returns an associative array of machine name layer to layer definition
    WmsMapLayerService.prototype._getLayers = function (layers) {
        var _this = this;
        if (!layers || layers.length < 2) {
            return;
        }
        // make it a normal array, not a jQuery one
        var ls = [];
        layers.slice(1).each(function (i, o) {
            ls.push(o);
        });
        return ls.map(function (l) { return _this._layerToObject(l); }).reduce(function (map, l) {
            map[l.name] = l;
            return map;
        }, {});
    };
    WmsMapLayerService.prototype._layerToObject = function (layer) {
        var l = __WEBPACK_IMPORTED_MODULE_1_jquery__(layer), o = {
            name: l.find('Name').first().text(),
            // redmine #761
            title: l.find('Title').first().text().replace(/\((.+?)\)/g, ''),
            abstract: l.find('Abstract').first().text(),
            bbox: this._parseBoundingBox(l.find('EX_GeographicBoundingBox').first()),
            style: this._parseStyle(l.find('Style').first()),
        };
        if (!o.bbox) {
            o.bbox = this._parseLatLonBoundingBox(l.find('LatLonBoundingBox').first());
        }
        return o;
    };
    WmsMapLayerService.prototype._parseStyle = function (style) {
        var s = __WEBPACK_IMPORTED_MODULE_1_jquery__(style);
        return {
            name: s.find('Name').first().text(),
            // redmine #761
            title: s.find('Title').first().text().replace(/\((.+?)\)/g, ''),
            legend: s.find('OnlineResource').attr('xlink:href') // not very specific...
        };
    };
    WmsMapLayerService.prototype._parseLatLonBoundingBox = function (bb) {
        if (bb.length) {
            var bbox_1 = {
                westBoundLongitude: parseFloat(bb.attr('minx')),
                eastBoundLongitude: parseFloat(bb.attr('maxx')),
                southBoundLatitude: parseFloat(bb.attr('miny')),
                northBoundLatitude: parseFloat(bb.attr('maxy')),
                getBounds: function () {
                    return new google.maps.LatLngBounds(new google.maps.LatLng(bbox_1.southBoundLatitude, bbox_1.westBoundLongitude), // sw
                    new google.maps.LatLng(bbox_1.northBoundLatitude, bbox_1.eastBoundLongitude) // ne
                    );
                }
            };
            return bbox_1;
        }
    };
    WmsMapLayerService.prototype._parseBoundingBox = function (bb) {
        if (bb.length) {
            var bbox_2 = {
                westBoundLongitude: parseFloat(bb.find('westBoundLongitude').text()),
                eastBoundLongitude: parseFloat(bb.find('eastBoundLongitude').text()),
                southBoundLatitude: parseFloat(bb.find('southBoundLatitude').text()),
                northBoundLatitude: parseFloat(bb.find('northBoundLatitude').text()),
                getBounds: function () {
                    return new google.maps.LatLngBounds(new google.maps.LatLng(bbox_2.southBoundLatitude, bbox_2.westBoundLongitude), // sw
                    new google.maps.LatLng(bbox_2.northBoundLatitude, bbox_2.eastBoundLongitude) // ne
                    );
                }
            };
            // some bounding boxes seem to be messed up with lat/lons of 0 && -1
            // so if any of those numbers occur throw away the bounding box.
            return ![bbox_2.westBoundLongitude, bbox_2.eastBoundLongitude, bbox_2.southBoundLatitude, bbox_2.northBoundLatitude].reduce(function (v, n) {
                return v || (n === 0 || n === -1);
            }, false) ? bbox_2 : undefined;
        }
    };
    return WmsMapLayerService;
}());
WmsMapLayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common__["j" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common__["j" /* NpnServiceUtils */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__date_extent_util_service__["a" /* DateExtentUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__date_extent_util_service__["a" /* DateExtentUtil */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__gridded_common__["c" /* GriddedUrls */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__gridded_common__["c" /* GriddedUrls */]) === "function" && _c || Object])
], WmsMapLayerService);

var _a, _b, _c;
//# sourceMappingURL=wms-map-layer.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wms-map-layer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmsMapLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gridded_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/gridded-common.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

// this is incomplete (obviously).  after starting down this path
// realized that WmsMapLegend could be migrated without Layer which isn't initially needed
// leaving the current state of things as is.
// this will compile but is useless...
function $filter(name) { }
var WmsMapLayer = (function () {
    function WmsMapLayer(map, layer_def, wmsBaseUrl) {
        var _this = this;
        this.map = map;
        this.layer_def = layer_def;
        this.wmsBaseUrl = wmsBaseUrl;
        if (layer_def.extent_values_filter) {
            console.debug('layer ' + layer_def.name + ' has an extent_values_filter, processing', layer_def.extent_values_filter);
            var valuesFilter = $filter(layer_def.extent_values_filter.name), extentValues = layer_def.extent.values.map(function (e) { return e.value; }), filterArgs = [extentValues].concat(layer_def.extent_values_filter.args || []), filteredValues_1;
            filteredValues_1 = valuesFilter.apply(undefined, filterArgs);
            console.debug('filteredValues', (filteredValues_1.length > 1 ? (filteredValues_1[0] + '...' + filteredValues_1[filteredValues_1.length - 1]) : filteredValues_1));
            layer_def.extent.values = layer_def.extent.values.filter(function (v) {
                return filteredValues_1.indexOf(v.value) !== -1;
            });
            if (layer_def.extent.current && filteredValues_1.indexOf(layer_def.extent.current.value) === -1) {
                console.debug('current extent value has become invalid, replacing with last option');
                layer_def.extent.current = layer_def.extent.values.length ? layer_def.extent.values[layer_def.extent.values.length - 1] : undefined;
            }
        }
        if (layer_def.extent_default_filter) {
            console.debug('layer ' + layer_def.name + ' has an extent_default_filter, processing', layer_def.extent_default_filter);
            var defaultFilter = $filter(layer_def.extent_default_filter.name), defaultFilterArgs = [layer_def.extent.values].concat(layer_def.extent_default_filter.values || []);
            layer_def.extent.current = defaultFilter.apply(undefined, defaultFilterArgs) || layer_def.extent.current;
            console.debug('resulting default value', layer_def.extent.current);
        }
        /*
        if(layer_def.description) {
            layer_def.$description = $sce.trustAsHtml(layer_def.description);
        }*/
        this.wmsArgs = __assign({}, __WEBPACK_IMPORTED_MODULE_0__gridded_common__["a" /* BASE_WMS_ARGS */], { layers: layer_def.name });
        this.googleLayer = new google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                var proj = map.getProjection(), zfactor = Math.pow(2, zoom), top = proj.fromPointToLatLng(new google.maps.Point(coord.x * __WEBPACK_IMPORTED_MODULE_0__gridded_common__["b" /* BOX_SIZE */] / zfactor, coord.y * __WEBPACK_IMPORTED_MODULE_0__gridded_common__["b" /* BOX_SIZE */] / zfactor)), bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * __WEBPACK_IMPORTED_MODULE_0__gridded_common__["b" /* BOX_SIZE */] / zfactor, (coord.y + 1) * __WEBPACK_IMPORTED_MODULE_0__gridded_common__["b" /* BOX_SIZE */] / zfactor)), ctop = srsConversion(top), cbot = srsConversion(bot), base = {};
                if (_this.extent && _this.extent.current) {
                    _this.extent.current.addToWmsParams(base);
                }
                var args = { bbox: [ctop.lng, cbot.lat, cbot.lng, ctop.lat].join(',') };
                if (_this.sldBody) {
                    args.sld_body = _this.sldBody;
                }
                var all_args = __assign({}, base, _this.wmsArgs, args);
                return _this.wmsBaseUrl + '?' + encodeHttpParams(all_args);
            },
            tileSize: new google.maps.Size(__WEBPACK_IMPORTED_MODULE_0__gridded_common__["b" /* BOX_SIZE */], __WEBPACK_IMPORTED_MODULE_0__gridded_common__["b" /* BOX_SIZE */]),
            //isPng: true,
            name: (layer_def.title || layer_def.name)
        });
        // the original created a scoped object and copied all the layer_def properties onto it and
        // added the functions to that, copy the properties onto the WmsMapLayer instance
        Object.keys(layer_def).forEach(function (key) {
            _this[key] = layer_def[key];
        });
    }
    return WmsMapLayer;
}());

function encodeHttpParams(params) {
    if (!params) {
        return '';
    }
    var parts = [];
    Object.keys(params).forEach(function (k) {
        if (params[k]) {
            var ok = encodeURIComponent(k), ov = encodeURIComponent(params[k]);
            parts.push(ok + "=" + ov);
        }
    });
    return parts.join('&');
}
// this code converts coordinates from ESPG:4326 to ESPG:3857, it originated @
// http://gis.stackexchange.com/questions/52188/google-maps-wms-layer-with-3857
// that author stated it came from StackOverflow which I tried to find to attribute properly but could not.
// the issue here is that if requests are sent to the map service with ESPG:4326 coordinates everything
// appears accurate when tightly zoomed however as you zoom out beyond a certain point the layers begin to
// migrate north, the farther zoomed out the more drastic the migration (e.g. from Mexico into N. Canada)
// while dealing in traditional lat/lng for google maps they are actually projected in 3857 (metres, not meters).
// the main thing is that 4326 coordinates are projected onto a sphere/ellipsoid while 3857 are translated to
// a flat surface.
// unfortunately while google maps projection must be performing such transformations it doesn't expose this ability.
function srsConversion(latLng) {
    if ((Math.abs(latLng.lng()) > 180 || Math.abs(latLng.lat()) > 90)) {
        return;
    }
    var num = latLng.lng() * 0.017453292519943295;
    var x = 6378137.0 * num;
    var a = latLng.lat() * 0.017453292519943295;
    return { lng: x, lat: 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a))) };
}
//# sourceMappingURL=wms-map-layer.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wms-map-legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmsMapLegendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wms_map_legend__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-legend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WmsMapLegendComponent = (function () {
    function WmsMapLegendComponent(window, rootElement) {
        this.window = window;
        this.rootElement = rootElement;
    }
    WmsMapLegendComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.debug('WmsMapLegendComponent.ngAfterViewInit');
        this.resizeSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
            .debounceTime(500)
            .subscribe(function (event) { return _this.redraw(); });
        this.svg = __WEBPACK_IMPORTED_MODULE_6_d3__["q" /* select */](this.rootElement.nativeElement).select('svg');
        console.debug('WmsMapLegendComponent:SVG', this.svg);
    };
    WmsMapLegendComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.debug('WmsMapLegendComponent.ngOnChanges', changes);
        setTimeout(function () { return _this.redraw(); }); // all that can change at the moment is the reference to legend
    };
    WmsMapLegendComponent.prototype.ngOnDestroy = function () {
        console.debug('WmsMapLegendComponent.ngOnDestroy');
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    };
    WmsMapLegendComponent.prototype.redraw = function () {
        console.debug('WmsMapLegendComponent.redraw');
        var svg = this.svg, legend = this.legend;
        if (svg) {
            svg.selectAll('g').remove();
        }
        if (!legend || !svg) {
            return;
        }
        var width = parseFloat(svg.style('width').replace('px', '')), height = parseFloat(svg.style('height').replace('px', '')), data = legend.getData(), mid_idx = Math.floor(data.length / 2), cell_width = width / data.length, cell_height = 30, top_pad = 2;
        console.debug('WmsMapLegendComponent.svg dimensions', width, height);
        console.debug('WmsMapLegendComponent.legend cell width', cell_width);
        var g = svg.append('g'), cell = g.selectAll('g.cell')
            .data(data)
            .enter()
            .append('g')
            .attr('class', function (d, i) {
            return 'cell' +
                ((i === 0) ? ' first' :
                    ((i === mid_idx) ? ' middle' :
                        ((i === data.length - 1) ? ' last' : '')));
        })
            .attr('transform', function (d, i) { return 'translate(' + (i * cell_width) + ',' + top_pad + ')'; })
            .append('rect')
            .attr('height', cell_height)
            .attr('width', cell_width)
            .style('stroke', 'black')
            .style('stroke-width', '1px')
            .style('fill', function (d, i) { return d.color; });
        if (legend.ldef.legend_delimiter_every) {
            var every_1 = legend.ldef.legend_delimiter_every, first_every = false, running_total_1 = 0, separators_1 = data.map(function (d, i) {
                if ((i + 1) === data.length) {
                    return true;
                }
                running_total_1 += (data[i + 1].quantity - data[i].quantity);
                if (running_total_1 >= every_1) {
                    running_total_1 = 0;
                    return true;
                }
                return false;
            }), top_bottom_1 = [(cell_width + 1), cell_height, (cell_width + 1), cell_height].join(','), //{ stroke-dasharray: $w,$h,$w,$h }
            top_right_bottom_1 = [((cell_width * 2) + cell_height), cell_height].join(','), //{ stroke-dasharray: (($w*2)+$h),$h }
            top_left_bottom_1 = [(cell_width + 1), cell_height, (cell_width + cell_height + 1), 0].join(','); ////{ stroke-dasharray: $w,$h,($w+$h),0 }
            console.debug('WmsMapLegendComponent.legend_delimiter_every', every_1);
            cell.style('stroke-dasharray', function (d, i) {
                if (i === 0) {
                    return separators_1[i] ? undefined : top_left_bottom_1;
                }
                return separators_1[i] ? top_right_bottom_1 : top_bottom_1;
            })
                .attr('width', function (d, i) {
                var w = parseFloat(__WEBPACK_IMPORTED_MODULE_6_d3__["q" /* select */](this).attr('width'));
                if (i === 0) {
                    return separators_1[i] ? w : w + 1;
                }
                return separators_1[i] ? w : w + 1;
            });
            g.selectAll('g.cell').append('line')
                .attr('stroke', function (d, i) { return separators_1[i] ? 'black' : 'none'; })
                .attr('stroke-width', 2)
                .attr('x1', cell_width - 1)
                .attr('x2', cell_width - 1)
                .attr('y1', 0)
                .attr('y2', cell_height);
        }
        cell.append('title').text(function (d) { return d.label; });
        var tick_length = 5, tick_padding = 3;
        function label_cell(cell, label, anchor) {
            var tick_start = (top_pad + cell_height + tick_padding);
            cell.append('line')
                .attr('x1', (cell_width / 2))
                .attr('y1', tick_start)
                .attr('x2', (cell_width / 2))
                .attr('y2', tick_start + tick_length)
                .attr('stroke', 'black')
                .attr('stroke-width', '1');
            cell.append('text')
                .attr('dx', (cell_width / 2))
                .attr('dy', '4em' /*cell_height+tick_length+(2*tick_padding)*/) // need to know line height of text
                .style('text-anchor', anchor)
                .text(label);
        }
        label_cell(svg.select('g.cell.first'), data[0].label, 'start');
        label_cell(svg.select('g.cell.middle'), data[mid_idx].label, 'middle');
        label_cell(svg.select('g.cell.last'), data[data.length - 1].label, 'end');
        if (legend.ldef.legend_units) {
            svg.append('g')
                .append('text')
                .attr('dx', (width / 2))
                .attr('dy', 75 + top_pad)
                .attr('text-anchor', 'middle')
                .text(legend.ldef.legend_units);
        }
        var legend_title = legend.ldef.title;
        if (legend.ldef.extent && legend.ldef.extent.current) {
            legend_title += ", " + legend.ldef.extent.current.label;
        }
        svg.append('g').append('text').attr('dx', 5)
            .attr('dy', 100 + top_pad)
            .attr('font-size', '18px')
            .attr('text-anchor', 'right').text(legend_title);
        svg.append('g').append('text').attr('dx', 5)
            .attr('dy', 118 + top_pad)
            .attr('font-size', '11px')
            .attr('text-anchor', 'right').text('USA National Phenology Network, www.usanpn.org');
    };
    return WmsMapLegendComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__wms_map_legend__["a" /* WmsMapLegend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wms_map_legend__["a" /* WmsMapLegend */]) === "function" && _a || Object)
], WmsMapLegendComponent.prototype, "legend", void 0);
WmsMapLegendComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'wms-map-legend',
        template: "\n    <svg class=\"gridded-legend\"></svg>\n    ",
        styles: ["\n        :host {\n            display: block;\n        }\n        .gridded-legend {\n            width: 100%;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common__["o" /* Window */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["o" /* Window */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object])
], WmsMapLegendComponent);

var _a, _b, _c;
//# sourceMappingURL=wms-map-legend.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wms-map-legend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmsMapLegendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wms_pipe_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-pipe-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wms_map_layer_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wms_map_legend__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/wms-map-legend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gridded_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/gridded-common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WmsMapLegendService = (function () {
    function WmsMapLegendService(wmsPipeFactory, serviceUtils, layerService, urls) {
        this.wmsPipeFactory = wmsPipeFactory;
        this.serviceUtils = serviceUtils;
        this.layerService = layerService;
        this.urls = urls;
        this.legends = {};
    }
    WmsMapLegendService.prototype.getLegend = function (layerName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.legends[layerName]) {
                return resolve(_this.legends[layerName]);
            }
            _this.layerService.getLayerDefinition(layerName)
                .then(function (layerDefinition) {
                if (!layerDefinition) {
                    return reject("layer definition for " + layerName + " not found.");
                }
                _this.serviceUtils.cachedGet(_this.urls.wmsBaseUrl, {
                    service: 'wms',
                    request: 'GetStyles',
                    version: __WEBPACK_IMPORTED_MODULE_6__gridded_common__["e" /* WMS_VERSION */],
                    layers: layerName
                }, true /* as text*/)
                    .then(function (xml) {
                    var legend_data = __WEBPACK_IMPORTED_MODULE_1_jquery__(__WEBPACK_IMPORTED_MODULE_1_jquery__["parseXML"](xml)), color_map = legend_data.find('ColorMap');
                    if (color_map.length === 0) {
                        // FF
                        color_map = legend_data.find('sld\\:ColorMap');
                    }
                    var l = color_map.length !== 0 ?
                        new __WEBPACK_IMPORTED_MODULE_5__wms_map_legend__["a" /* WmsMapLegend */](_this.wmsPipeFactory, __WEBPACK_IMPORTED_MODULE_1_jquery__(color_map.toArray()[0]), layerDefinition, legend_data) : undefined;
                    _this.legends[layerName] = l;
                    resolve(l);
                })
                    .catch(reject);
            });
        });
    };
    return WmsMapLegendService;
}());
WmsMapLegendService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__wms_pipe_factory_service__["a" /* WmsPipeFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wms_pipe_factory_service__["a" /* WmsPipeFactory */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common__["j" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common__["j" /* NpnServiceUtils */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__wms_map_layer_service__["a" /* WmsMapLayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__wms_map_layer_service__["a" /* WmsMapLayerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__gridded_common__["c" /* GriddedUrls */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__gridded_common__["c" /* GriddedUrls */]) === "function" && _d || Object])
], WmsMapLegendService);

var _a, _b, _c, _d;
//# sourceMappingURL=wms-map-legend.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wms-map-legend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmsMapLegend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var IDENTITY = function (d) { return d; };
var WmsMapLegend = (function () {
    function WmsMapLegend(wmsPipeFactory, color_map, 
        /*
        NOTE: per the original implementation which binds extents directly into the definition this is public
        may want to later revisit some abstraction, used externally via WmsMapLegendComponent
         */
        ldef, styleDefinition) {
        var _this = this;
        this.wmsPipeFactory = wmsPipeFactory;
        this.color_map = color_map;
        this.ldef = ldef;
        this.styleDefinition = styleDefinition;
        console.log('WmsMapLegend.color_map', color_map);
        console.log('WmsMapLegend.ldef', ldef);
        console.log('WmsMapLegend.styleDefinition', styleDefinition);
        var get_filter = function (filter_def) {
            var pipe = _this.wmsPipeFactory.getPipe(filter_def.name);
            if (!pipe) {
                console.error("WmsMapLegend: Unable to find pipe named " + filter_def.name);
            }
            return function (l, q) {
                var args = [q];
                if (filter_def.args) {
                    args = args.concat(filter_def.args);
                }
                return pipe.transform.apply(pipe, args);
            };
        };
        this.lformat = ldef.legend_label_filter ? get_filter(ldef.legend_label_filter) : IDENTITY;
        this.gformat = ldef.gridded_label_filter ? get_filter(ldef.gridded_label_filter) : undefined;
        var entries = color_map.find('ColorMapEntry');
        if (entries.length === 0) {
            entries = color_map.find('sld\\:ColorMapEntry');
        }
        var data = entries.toArray().reduce(function (arr, entry, i) {
            var e = __WEBPACK_IMPORTED_MODULE_0_jquery__(entry), q = parseFloat(e.attr('quantity')), l = e.attr('label');
            arr.push({
                color: e.attr('color'),
                quantity: q,
                original_label: l,
                label: i === 0 ? l : _this.lformat(l, q) // why the special case for index 0?
            });
            return arr;
        }, []);
        this.title_data = data[0];
        this.data = data.slice(1);
        this.length = this.data.length;
    }
    WmsMapLegend.prototype.setLayer = function (l) {
        this.layer = l;
        return this;
    };
    WmsMapLegend.prototype.getData = function () {
        return this.data;
    };
    WmsMapLegend.prototype.getStyleDefinition = function () {
        return this.styleDefinition;
    };
    WmsMapLegend.prototype.getTitle = function () {
        return this.title_data.label;
    };
    WmsMapLegend.prototype.getColors = function () {
        return this.data.map(function (d) { return d.color; });
    };
    WmsMapLegend.prototype.getQuantities = function () {
        return this.data.map(function (d) { return d.quantity; });
    };
    WmsMapLegend.prototype.getLabels = function () {
        return this.data.map(function (d) { return d.label; });
    };
    WmsMapLegend.prototype.getOriginalLabels = function () {
        return this.data.map(function (d) { return d.original_label; });
    };
    WmsMapLegend.prototype.formatPointData = function (q) {
        return (this.gformat || this.lformat)(q, q);
    };
    WmsMapLegend.prototype.getPointData = function (q) {
        var i, d, n;
        for (i = 0; i < this.data.length; i++) {
            d = this.data[i];
            n = (i + 1) < this.data.length ? this.data[i + 1] : undefined;
            if (q == d.quantity) {
                return d;
            }
            if (n && q >= d.quantity && q < n.quantity) {
                return d;
            }
        }
    };
    return WmsMapLegend;
}());

//# sourceMappingURL=wms-map-legend.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wms-map-opacity-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmsMapOpacityControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WmsMapOpacityControl = (function () {
    function WmsMapOpacityControl() {
        this.opacity = 100;
    }
    WmsMapOpacityControl.prototype.opacityChanged = function () {
        if (this.supportsOpacity) {
            this.supportsOpacity.setOpacity(this.opacity / 100.0);
        }
    };
    WmsMapOpacityControl.prototype.ngOnChanges = function (changes) {
        console.log('WmsMapOpacityControl.ngOnchanges', changes);
        if (changes.supportsOpacity && changes.supportsOpacity.currentValue) {
            this.opacity = Math.round(changes.supportsOpacity.currentValue.getOpacity() * 100);
        }
    };
    return WmsMapOpacityControl;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], WmsMapOpacityControl.prototype, "supportsOpacity", void 0);
WmsMapOpacityControl = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'wms-map-opacity-control',
        template: "\n    <label>Opacity\n        <mat-slider min=\"0\" max=\"100\" step=\"1\" tickInterval=\"25\" [thumbLabel]=\"opacity\" [(ngModel)]=\"opacity\" (change)=\"opacityChanged()\" [disabled]=\"!supportsOpacity\"></mat-slider>\n    </label>\n    "
    })
], WmsMapOpacityControl);

//# sourceMappingURL=wms-map-opacity-control.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/gridded/wms-pipe-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmsPipeFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/pipes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// since there is no $filter to magically discover filters/pipes
// this class exist to catch all pipes that are used by WmsMapLayer/Legend
// per the layer definitions so they can be retrived by "name" abstractly
var WmsPipeFactory = (function () {
    function WmsPipeFactory(legendGddUnits, agddDefaultTodayElevation, legendAgddAnomaly, agddDefaultTodayTime, legendSixAnomaly, legendDoy, extentDates) {
        this.legendGddUnits = legendGddUnits;
        this.agddDefaultTodayElevation = agddDefaultTodayElevation;
        this.legendAgddAnomaly = legendAgddAnomaly;
        this.agddDefaultTodayTime = agddDefaultTodayTime;
        this.legendSixAnomaly = legendSixAnomaly;
        this.legendDoy = legendDoy;
        this.extentDates = extentDates;
        this.pipes = {};
        this.pipes.legendGddUnits = legendGddUnits;
        this.pipes.agddDefaultTodayElevation = agddDefaultTodayElevation;
        this.pipes.legendAgddAnomaly = legendAgddAnomaly;
        this.pipes.agddDefaultTodayTime = agddDefaultTodayTime;
        this.pipes.legendSixAnomaly = legendSixAnomaly;
        this.pipes.legendDoy = legendDoy;
        this.pipes.extentDates = extentDates;
    }
    WmsPipeFactory.prototype.getPipe = function (pipeName) {
        return this.pipes[pipeName];
    };
    return WmsPipeFactory;
}());
WmsPipeFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pipes__["f" /* LegendGddUnitsPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pipes__["f" /* LegendGddUnitsPipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pipes__["a" /* AgddDefaultTodayElevationPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pipes__["a" /* AgddDefaultTodayElevationPipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__pipes__["d" /* LegendAgddAnomalyPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pipes__["d" /* LegendAgddAnomalyPipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__pipes__["b" /* AgddDefaultTodayTimePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pipes__["b" /* AgddDefaultTodayTimePipe */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__pipes__["g" /* LegendSixAnomalyPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pipes__["g" /* LegendSixAnomalyPipe */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__pipes__["e" /* LegendDoyPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pipes__["e" /* LegendDoyPipe */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__pipes__["c" /* ExtentDatesPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pipes__["c" /* ExtentDatesPipe */]) === "function" && _g || Object])
], WmsPipeFactory);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=wms-pipe-factory.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NpnLibModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizations__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_window__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/window.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__common__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__common__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__common__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__common__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__common__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__visualizations__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__visualizations__["c"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NpnLibModule = (function () {
    function NpnLibModule() {
    }
    return NpnLibModule;
}());
NpnLibModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__common__["h" /* NpnCommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__visualizations__["c" /* VisualizationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__common_window__["a" /* Window */], useValue: window },
        ]
    })
], NpnLibModule);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INTERPOLATE; });
/* unused harmony export ACTIVITY_CURVE_KINGDOM_METRICS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityCurve = (function () {
    function ActivityCurve() {
        this.dataPoints = true;
    }
    Object.defineProperty(ActivityCurve.prototype, "external", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_0__vis_selection__["a" /* GET_EXTERNAL */].apply(this, arguments); },
        set: function (o) { __WEBPACK_IMPORTED_MODULE_0__vis_selection__["f" /* SET_EXTERNAL */].apply(this, arguments); },
        enumerable: true,
        configurable: true
    });
    ActivityCurve.prototype.reset = function () {
        delete this.$data;
        delete this.$metricData;
    };
    ActivityCurve.prototype.updateCheck = function (requiresUpdate) {
        if (this.selection && this.isValid()) {
            if (!this.plotted() || requiresUpdate) {
                this.selection.update();
            }
            else {
                this.selection.redraw();
            }
        }
    };
    Object.defineProperty(ActivityCurve.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (y) {
            this.reset();
            this._year = y;
            this.updateCheck(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityCurve.prototype, "phenophase", {
        get: function () {
            return this._phenophase;
        },
        set: function (p) {
            this.reset();
            this._phenophase = p;
            this.updateCheck(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityCurve.prototype, "metric", {
        get: function () {
            return this._metric;
        },
        set: function (m) {
            this.reset();
            this._metric = m;
            this.updateCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityCurve.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (s) {
            this.reset();
            this._species = s;
            this.phenophase = undefined;
            this._metrics = this._species && this._species.kingdom ? (ACTIVITY_CURVE_KINGDOM_METRICS[this._species.kingdom] || []) : [];
            if (this._metric && this._metrics.indexOf(this._metric) === -1) {
                // previous metric has become invalid
                delete this.metric;
            }
            if (this._metrics.length && !this._metric) {
                this.metric = this._metrics[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityCurve.prototype, "validMetrics", {
        get: function () {
            return (this._metrics || []);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return The metric label for the curve axis.
     */
    ActivityCurve.prototype.axisLabel = function () {
        return this.metric ? this.metric.label : '?';
    };
    ActivityCurve.prototype.doyDataValue = function () {
        var self = this, data = self.data(), value, d, i;
        if (self.doyFocus && data) {
            for (i = 0; i < data.length; i++) {
                d = data[i];
                if (self.doyFocus >= d.start_doy && self.doyFocus <= d.end_doy) {
                    value = (self.metric.valueFormat || IDENTITY)(d[self.metric.id]);
                    if (d[self.metric.sampleSize] !== -9999) {
                        value += ' N:' + d[self.metric.sampleSize];
                    }
                    return value;
                }
            }
        }
    };
    /**
     * @return Formatted label for the legend.
     */
    ActivityCurve.prototype.legendLabel = function (includeMetric) {
        var doyFocusValue = this.doyDataValue();
        return this.year + ': ' + SPECIES_TITLE(this.species) + ' - ' + this.phenophase.phenophase_name +
            (includeMetric ? (' (' + this.metric.label + ')') : '') +
            (typeof (doyFocusValue) !== 'undefined' ? (' [' + doyFocusValue + ']') : '');
    };
    /**
     * @return The metric id.
     */
    ActivityCurve.prototype.metricId = function () {
        return this.metric ? this.metric.id : undefined;
    };
    ActivityCurve.prototype.data = function (_) {
        if (arguments.length) {
            delete this.$data;
            delete this.$metricData;
            if (_) {
                _.forEach(function (d) {
                    d.start_doy = DOY(d.start_date);
                    d.end_doy = DOY(d.end_date);
                });
                _.sort(function (a, b) {
                    return a.start_doy - b.start_doy;
                });
                this.$data = _;
            }
            return this;
        }
        var self = this, data = self.$data;
        if (data && self.metric) {
            // avoid re-filtering with UI updates, store the result and re-use until
            // something changes
            if (!self.$metricData) {
                if (!self.metric.sampleSize) {
                    console.warn('Metric does not define a sampleSize property, cannot filter out invalid data points.');
                }
                data = data.filter(function (d) {
                    if (self.metric.sampleSize && d[self.metric.sampleSize] === -9999) {
                        //console.log('SAMPLE_SIZE filter.');
                        return false;
                    }
                    return d[self.metric.id] !== -9999;
                });
                if (data.length !== self.$data.length) {
                    console.debug('filtered out ' + (self.$data.length - data.length) + '/' + self.$data.length + ' of -9999 records for metric ', self.metric);
                }
                /*
                if(data.length === 26) { // simulate situation for development bi-weekly data
                    //console.log('DEBUG CODE MODIFYING DATA!!');
                    // create a single isolated data point and three separate curves
                    // [0-9] [11] [13-19] [21-25]
                    data = data.filter(function(d,i) {
                        return (i !== 10 && i !== 12 && i !== 20);
                    });
                }*/
                self.$metricData = data;
            }
            else {
                data = self.$metricData;
            }
        }
        return data;
    };
    ActivityCurve.prototype.axis = function () {
        var y = this.y(), ticks = y.ticks(), // default is ~10 ticks
        orient = this.orient || 'left', axis = orient === 'left' ? __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* axisLeft */](y) : __WEBPACK_IMPORTED_MODULE_2_d3__["c" /* axisRight */](y);
        if (ticks.length) {
            // replace the final tick with the top of the y domain
            // that -would- have been generated and use them explicitly
            // this can result in ticks stacked on on another if too close
            //ticks.push(y.domain()[1]);
            // this often results in a larger space between the two topmost ticks
            ticks[ticks.length - 1] = y.domain()[1];
            axis.tickValues(ticks);
        }
        return axis;
    };
    ActivityCurve.prototype.x = function (_) {
        if (arguments.length) {
            this.$x = _;
            return this;
        }
        return this.$x;
    };
    ActivityCurve.prototype.y = function (_) {
        if (arguments.length) {
            this.$y = _;
            return this;
        }
        return this.$y;
    };
    ActivityCurve.prototype.isValid = function () {
        return this.species && this.phenophase && this.year && this.metric;
    };
    ActivityCurve.prototype.plotted = function () {
        // not keeping track of a flag but curves are plotted if they
        // are valid and have data
        return this.isValid() && this.data();
    };
    ActivityCurve.prototype.shouldRevisualize = function () {
        return this.isValid() && !this.data();
    };
    ActivityCurve.prototype.domain = function () {
        var self = this, data = self.data(), extents;
        if (data && self.metric) {
            extents = __WEBPACK_IMPORTED_MODULE_2_d3__["j" /* extent */](data, function (d) {
                return d[self.metric.id];
            });
            if (extents[0] > 0) {
                // typically data sets will contain 0 but really always want the
                // lower extent of any y axis to be zero so make it so
                extents[0] = 0;
            }
            else if (extents[0] < 0) {
                // this shouldn't happen but don't futz with the domain in this
                // case or the graph would go wonky
                console.warn('negative domain start for metric', extents, self.metric);
            }
            return extents;
        }
    };
    ActivityCurve.prototype.draw = function (chart) {
        var self = this, data = self.data(), datas = [[]], x, y, i, d, dn, line, r = 3;
        chart.selectAll('path.curve.curve-' + self.id).remove();
        chart.selectAll('circle.curve-point.curve-point-' + self.id).remove();
        if (data && data.length) {
            // detect any gaps in the data, break it into multiple curves/points
            // to plot
            for (i = 0; i < data.length; i++) {
                d = data[i];
                dn = (i + 1) < data.length ? data[i + 1] : undefined;
                datas[datas.length - 1].push(d);
                if (dn && dn.start_doy !== (d.end_doy + 1)) {
                    datas.push([]); // there's a gap in the data, start another curve or point
                }
            }
            x = self.x();
            y = self.y();
            var x_functor_1 = function (d) { return x(d.start_doy + Math.round((d.end_doy - d.start_doy) / 2)); }, y_functor_1 = function (d) { return y(d[self.metric.id]); };
            line = __WEBPACK_IMPORTED_MODULE_2_d3__["l" /* line */]();
            switch (self.interpolate) {
                case INTERPOLATE.monotone:
                    console.log('MONOTONE');
                    line.curve(__WEBPACK_IMPORTED_MODULE_2_d3__["g" /* curveMonotoneX */]);
                    break;
                case INTERPOLATE.stepAfter:
                    console.log('STEP AFTER');
                    line.curve(__WEBPACK_IMPORTED_MODULE_2_d3__["h" /* curveStepAfter */]);
                    break;
                case INTERPOLATE.linear:
                    console.log('LINEAR');
                    line.curve(__WEBPACK_IMPORTED_MODULE_2_d3__["f" /* curveLinear */]);
                    break;
            }
            line.x(x_functor_1);
            line.y(y_functor_1);
            console.debug('ActivityCurve.draw', self.species, self.phenophase, self.year, self.metric, self.domain(), y.domain());
            console.debug('draw.datas', datas);
            datas.forEach(function (curve_data, i) {
                if (curve_data.length === 1 || self.dataPoints) {
                    curve_data.forEach(function (d) {
                        chart.append('circle')
                            .attr('class', 'curve-point curve-point-' + self.id)
                            .attr('r', r)
                            .attr('fill', self.color)
                            .attr('cx', x_functor_1(d))
                            .attr('cy', y_functor_1(d));
                    });
                }
                if (curve_data.length > 1) {
                    chart.append('path')
                        .attr('class', 'curve curve-' + self.id)
                        .attr('fill', 'none')
                        .attr('stroke', self.color)
                        .attr('stroke-linejoin', 'round')
                        .attr('stroke-linecap', 'round')
                        .attr('stroke-width', 1.5)
                        .attr('d', line(curve_data));
                }
            });
        }
    };
    return ActivityCurve;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], ActivityCurve.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common__["l" /* Species */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["l" /* Species */]) === "function" && _a || Object)
], ActivityCurve.prototype, "_species", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Object)
], ActivityCurve.prototype, "_metric", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common__["k" /* Phenophase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["k" /* Phenophase */]) === "function" && _b || Object)
], ActivityCurve.prototype, "_phenophase", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], ActivityCurve.prototype, "_year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ActivityCurve.prototype, "color", void 0);
var INTERPOLATE;
(function (INTERPOLATE) {
    INTERPOLATE[INTERPOLATE["linear"] = 0] = "linear";
    INTERPOLATE[INTERPOLATE["stepAfter"] = 1] = "stepAfter";
    INTERPOLATE[INTERPOLATE["monotone"] = 2] = "monotone";
})(INTERPOLATE || (INTERPOLATE = {}));
;
var DECIMAL = function (v) { return v.toFixed(2); };
var IDENTITY = function (o) { return o; };
var SPECIES_TITLE_PIPE = new __WEBPACK_IMPORTED_MODULE_1__common__["n" /* SpeciesTitlePipe */]();
var SPECIES_TITLE = function (item, format) {
    return SPECIES_TITLE_PIPE.transform(item, format);
};
var DOY_PIPE = new __WEBPACK_IMPORTED_MODULE_1__common__["b" /* DoyPipe */]();
var DOY = function (date, ignoreLeapYear) {
    return DOY_PIPE.transform(date, ignoreLeapYear);
};
var COMMON_METRICS = [{
        id: 'num_yes_records',
        sampleSize: 'status_records_sample_size',
        label: 'Total Yes Records'
    }, {
        id: 'proportion_yes_records',
        sampleSize: 'status_records_sample_size',
        label: 'Proportion Yes Records',
        valueFormat: DECIMAL,
        proportion: true
    }];
var ACTIVITY_CURVE_KINGDOM_METRICS = {
    Plantae: COMMON_METRICS.concat([{
            id: 'numindividuals_with_yes_record',
            sampleSize: 'individuals_sample_size',
            label: 'Total Individuals with Yes Records'
        }, {
            id: 'proportion_individuals_with_yes_record',
            sampleSize: 'individuals_sample_size',
            label: 'Proportion Individuals with Yes Records',
            valueFormat: DECIMAL,
            proportion: true
        }]),
    Animalia: COMMON_METRICS.concat([{
            id: 'numsites_with_yes_record',
            sampleSize: 'sites_sample_size',
            label: 'Total Sites with Yes Records'
        }, {
            id: 'proportion_sites_with_yes_record',
            sampleSize: 'sites_sample_size',
            label: 'Proportion Sites with Yes Records',
            valueFormat: DECIMAL,
            proportion: true
        }, {
            id: 'total_numanimals_in-phase',
            sampleSize: 'in-phase_site_visits_sample_size',
            label: 'Total Animals In Phase'
        },
        {
            id: 'mean_numanimals_in-phase',
            sampleSize: 'in-phase_per_hr_sites_sample_size',
            label: 'Animals In Phase',
            valueFormat: DECIMAL
        }, {
            id: 'mean_numanimals_in-phase_per_hr',
            sampleSize: 'in-phase_per_hr_sites_sample_size',
            label: 'Animals In Phase per Hour',
            valueFormat: DECIMAL
        }, {
            id: 'mean_numanimals_in-phase_per_hr_per_acre',
            sampleSize: 'phase_per_hr_per_acre_sites_sample_size',
            label: 'Animals In Phase per Hour per Acre',
            valueFormat: DECIMAL
        }])
};
var _a, _b;
//# sourceMappingURL=activity-curve.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCurvesControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_curve__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_curves_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityCurvesControlComponent = (function () {
    function ActivityCurvesControlComponent() {
        this.frequencies = __WEBPACK_IMPORTED_MODULE_2__activity_curves_selection__["a" /* ACTIVITY_FREQUENCIES */];
        this.interpolates = [{
                value: __WEBPACK_IMPORTED_MODULE_1__activity_curve__["b" /* INTERPOLATE */].linear,
                label: 'Linear'
            }, {
                value: __WEBPACK_IMPORTED_MODULE_1__activity_curve__["b" /* INTERPOLATE */].monotone,
                label: 'Monotone',
            }, {
                value: __WEBPACK_IMPORTED_MODULE_1__activity_curve__["b" /* INTERPOLATE */].stepAfter,
                label: 'Step after'
            }];
    }
    return ActivityCurvesControlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__activity_curves_selection__["b" /* ActivityCurvesSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__activity_curves_selection__["b" /* ActivityCurvesSelection */]) === "function" && _a || Object)
], ActivityCurvesControlComponent.prototype, "selection", void 0);
ActivityCurvesControlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'activity-curves-control',
        template: "\n    <div class=\"curve one\">\n        <label [ngStyle]=\"{'color': selection.curves[0].color}\">Curve 1</label>\n        <curve-selection-control [selection]=\"selection\" [curve]=\"selection.curves[0]\"></curve-selection-control>\n    </div>\n    <div class=\"curve two\">\n        <label [ngStyle]=\"{'color': selection.curves[1].color}\">Curve 2</label>\n        <curve-selection-control [selection]=\"selection\"  [curve]=\"selection.curves[1]\" [disabled]=\"!selection.curves[0].isValid()\" [required]=\"false\"></curve-selection-control>\n    </div>\n    <div class=\"curve-common\">\n        <mat-form-field class=\"date-interval\">\n            <mat-select placeholder=\"Date Interval\" [(ngModel)]=\"selection.frequency\">\n                <mat-option *ngFor=\"let f of frequencies\" [value]=\"f\">{{f.label}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"line-interpolateion\">\n            <mat-select placeholder=\"Line Interpolation\" [(ngModel)]=\"selection.interpolate\">\n                <mat-option *ngFor=\"let i of interpolates\" [value]=\"i.value\">{{i.label}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    ",
        styles: ["\n        .curve >label:after {\n            content: ':';\n            margin-right: 10px;\n        }\n        .date-interval {\n            width: 125px;\n        }\n        .line-interpolateion {\n            width: 150px;\n        }\n    "]
    })
], ActivityCurvesControlComponent);

var _a;
//# sourceMappingURL=activity-curves-control.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCurvesSelectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_curves_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ActivityCurvesSelectionFactory = (function () {
    function ActivityCurvesSelectionFactory(http, cacheService, datePipe, config) {
        this.http = http;
        this.cacheService = cacheService;
        this.datePipe = datePipe;
        this.config = config;
    }
    ActivityCurvesSelectionFactory.prototype.newSelection = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__activity_curves_selection__["b" /* ActivityCurvesSelection */](this.http, this.cacheService, this.datePipe, this.config);
    };
    return ActivityCurvesSelectionFactory;
}());
ActivityCurvesSelectionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__common__["f" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common__["i" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common__["i" /* NpnConfiguration */]) === "function" && _d || Object])
], ActivityCurvesSelectionFactory);

var _a, _b, _c, _d;
//# sourceMappingURL=activity-curves-selection-factory.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ActivityFrequency */
/* unused harmony export ACTIVITY_FREQUENCY_MONTHLY */
/* unused harmony export ACTIVITY_FREQUENCY_BIWEEKLY */
/* unused harmony export ACTIVITY_FREQUENCY_WEEKLY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITY_FREQUENCIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActivityCurvesSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_curve__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityFrequency = (function () {
    function ActivityFrequency() {
    }
    return ActivityFrequency;
}());

var ACTIVITY_FREQUENCY_MONTHLY = {
    value: 'months',
    label: 'Monthly'
};
var ACTIVITY_FREQUENCY_BIWEEKLY = {
    value: 14,
    label: 'Bi-weekly'
};
var ACTIVITY_FREQUENCY_WEEKLY = {
    value: 7,
    label: 'Weekly'
};
var ACTIVITY_FREQUENCIES = [
    ACTIVITY_FREQUENCY_MONTHLY,
    ACTIVITY_FREQUENCY_BIWEEKLY,
    ACTIVITY_FREQUENCY_WEEKLY
];
var ActivityCurvesSelection = (function (_super) {
    __extends(ActivityCurvesSelection, _super);
    function ActivityCurvesSelection(http, cacheService, datePipe, config) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.cacheService = cacheService;
        _this.datePipe = datePipe;
        _this.config = config;
        _this.$class = 'ActivityCurvesSelection';
        _this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        _this._interpolate = __WEBPACK_IMPORTED_MODULE_2__activity_curve__["b" /* INTERPOLATE */].monotone;
        _this._dataPoints = true;
        _this._frequency = ACTIVITY_FREQUENCIES[0];
        _this.curves = [{ color: '#0000ff', orient: 'left' }, { color: 'orange', orient: 'right' }].map(function (o, i) {
            var c = new __WEBPACK_IMPORTED_MODULE_2__activity_curve__["a" /* ActivityCurve */]();
            c.id = i;
            c.color = o.color;
            c.orient = o.orient;
            return c;
        });
        return _this;
    }
    ActivityCurvesSelection.prototype.isValid = function () {
        return this.curves[0].isValid();
    };
    ActivityCurvesSelection.prototype.updateCheck = function (requiresUpdate) {
        var anyValid = this.curves[0].isValid() || this.curves[1].isValid(), anyPlotted = this.curves[0].plotted() || this.curves[1].plotted();
        if (requiresUpdate) {
            if (anyValid) {
                this.update();
            }
        }
        else {
            if (anyValid && anyPlotted) {
                this.redraw();
            }
            else if (anyValid) {
                this.update();
            }
        }
    };
    Object.defineProperty(ActivityCurvesSelection.prototype, "frequency", {
        get: function () {
            return this._frequency;
        },
        set: function (f) {
            this._frequency = f;
            // any change in frequency invalidates any data held by curves
            (this._curves || []).forEach(function (c) { return c.data(null); });
            this.updateCheck(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityCurvesSelection.prototype, "interpolate", {
        get: function () {
            return this._interpolate;
        },
        set: function (i) {
            this._interpolate = i;
            (this._curves || []).forEach(function (c) { return c.interpolate = i; });
            this.updateCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityCurvesSelection.prototype, "dataPoints", {
        set: function (dp) {
            this._dataPoints = dp;
            (this._curves || []).forEach(function (c) { return c.dataPoints = dp; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityCurvesSelection.prototype, "curves", {
        get: function () {
            return this._curves;
        },
        set: function (cs) {
            var _this = this;
            this._curves = cs;
            cs.forEach(function (c) {
                c.selection = _this;
                c.interpolate = _this._interpolate;
                c.dataPoints = _this._dataPoints;
            });
        },
        enumerable: true,
        configurable: true
    });
    ActivityCurvesSelection.prototype.endDate = function (year) {
        var now = new Date();
        if (year === now.getFullYear()) {
            return this.datePipe.transform(now, 'yyyy-MM-dd');
        }
        return year + '-12-31';
    };
    ActivityCurvesSelection.prototype.loadCurveData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.working = true;
            var promises = _this.curves
                .filter(function (c) { return c.data(null).isValid(); })
                .map(function (c) {
                return new Promise(function (loaded) {
                    var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
                    params.set('request_src', 'npn-vis-activity-curves');
                    params.set('start_date', c.year + "-01-01");
                    params.set('end_date', _this.endDate(c.year));
                    params.set('frequency', "" + _this.frequency.value);
                    params.set('species_id[0]', "" + c.species.species_id);
                    params.set('phenophase_id[0]', "" + c.phenophase.phenophase_id);
                    _this.addNetworkParams(params);
                    var url = _this.config.apiRoot + "/npn_portal/observations/getMagnitudeData.json", cacheKey = {
                        u: url,
                        params: params.toString()
                    }, data = _this.cacheService.get(cacheKey);
                    if (data) {
                        loaded(c.data(data));
                    }
                    else {
                        _this.http.post(url, params.toString(), { headers: _this.headers })
                            .toPromise()
                            .then(function (response) {
                            var arr = response.json();
                            _this.cacheService.set(cacheKey, arr);
                            loaded(c.data(arr));
                        })
                            .catch(_this.handleError);
                    }
                });
            });
            Promise.all(promises).then(function () {
                _this.working = false;
                resolve();
            });
        });
    };
    ActivityCurvesSelection.prototype.handleError = function (error) {
        console.error('ERROR', error);
    };
    return ActivityCurvesSelection;
}(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["g" /* StationAwareVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ActivityCurvesSelection.prototype, "$class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__activity_curve__["b" /* INTERPOLATE */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__activity_curve__["b" /* INTERPOLATE */]) === "function" && _a || Object)
], ActivityCurvesSelection.prototype, "_interpolate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Boolean)
], ActivityCurvesSelection.prototype, "_dataPoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", ActivityFrequency)
], ActivityCurvesSelection.prototype, "_frequency", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["j" /* selectionProperty */])({
        ser: function (d) { return d.external; },
        des: function (d) {
            var ac = new __WEBPACK_IMPORTED_MODULE_2__activity_curve__["a" /* ActivityCurve */]();
            ac.external = d;
            return ac;
        }
    }),
    __metadata("design:type", Array)
], ActivityCurvesSelection.prototype, "_curves", void 0);
var _a;
//# sourceMappingURL=activity-curves-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCurvesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity_curves_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ROOT_DATE = new Date(2010, 0);
var D3_DATE_FMT = __WEBPACK_IMPORTED_MODULE_8_d3__["r" /* timeFormat */]('%m/%d');
var DATE_FMT = function (d) {
    var time = ((d - 1) * __WEBPACK_IMPORTED_MODULE_3__vis_selection__["d" /* ONE_DAY_MILLIS */]) + ROOT_DATE.getTime(), date = new Date(time);
    return D3_DATE_FMT(date);
};
var PAD_DOMAIN = function (d, metric) {
    if (d && d.length === 2) {
        d = [d[0], (d[1] * 1.05)];
        if (metric && metric.proportion && d[1] > 1) {
            d[1] = 1.0; // don't allow proportions to overflow for clarity.
        }
    }
    return d;
};
var DOY_INTERVAL_TICK = function (interval) {
    var doy = 1, ticks = [];
    while (doy <= 365) {
        ticks.push(doy);
        doy += interval;
    }
    return ticks;
};
var X_TICK_CFG = {
    7: {
        rotate: 45,
        values: DOY_INTERVAL_TICK(14)
    },
    14: {
        rotate: 45,
        values: DOY_INTERVAL_TICK(28)
    },
    months: {
        values: [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
    }
};
var ActivityCurvesComponent = (function (_super) {
    __extends(ActivityCurvesComponent, _super);
    function ActivityCurvesComponent(window, rootElement, media, legendDoyPipe) {
        var _this = _super.call(this, window, rootElement, media) || this;
        _this.window = window;
        _this.rootElement = rootElement;
        _this.media = media;
        _this.legendDoyPipe = legendDoyPipe;
        _this.filename = 'activity-curves.png';
        _this.margins = { top: 80, left: 80, right: 80, bottom: 80 };
        return _this;
    }
    ActivityCurvesComponent.prototype.usingCommonMetric = function () {
        var selection = this.selection;
        // there are always two curves in the selection, the question is whether they are
        // valid and share a metric
        if ((selection.curves[0].isValid() && !selection.curves[1].isValid()) ||
            (selection.curves[0].isValid() && selection.curves[1].isValid() && selection.curves[0].metricId() === selection.curves[1].metricId())) {
            return selection.curves[0].metric;
        }
    };
    ActivityCurvesComponent.prototype.newY = function () {
        var sizing = this.sizing;
        return Object(__WEBPACK_IMPORTED_MODULE_7_d3_scale__["b" /* scaleLinear */])().range([sizing.height, 0]).domain([0, 100]);
    };
    ActivityCurvesComponent.prototype.updateLegend = function () {
        var _this = this;
        var chart = this.chart;
        chart.select('.legend').remove();
        var sizing = this.sizing, selection = this.selection, commonMetric = this.usingCommonMetric(), legend = chart.append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(150,-' + (sizing.margin.top - 10) + ')') // relative to the chart, not the svg
            .style('font-size', '1em'), 
        /* legend labels can differ greatly in length, don't try to put them
           inside a box that will be impossible to size correctly
        rect = legend.append('rect')
            .style('fill','white')
            .style('stroke','black')
            .style('opacity','0.8')
            .attr('width',100)
            .attr('height',55),*/
        r = 5, vpad = 4;
        selection.curves.reduce(function (cnt, c) {
            var row;
            if (c.plotted()) {
                row = legend.append('g')
                    .attr('class', 'legend-item curve-' + c.id)
                    .attr('transform', 'translate(10,' + (((cnt + 1) * _this.baseFontSize()) + (cnt * vpad)) + ')');
                row.append('circle')
                    .attr('r', r)
                    .attr('fill', c.color);
                row.append('text')
                    .style('font-size', _this.baseFontSize(true))
                    .attr('x', (2 * r))
                    .attr('y', (r / 2))
                    .text(c.legendLabel(!commonMetric));
                cnt++;
            }
            return cnt;
        }, 0);
    };
    ActivityCurvesComponent.prototype.hover = function () {
        var _this = this;
        var svg = this.svg, selection = this.selection, sizing = this.sizing, self = this, x = this.x;
        var hover = svg.append('g')
            .attr('transform', 'translate(' + sizing.margin.left + ',' + sizing.margin.top + ')')
            .style('display', 'none');
        var hoverLine = hover.append('line')
            .attr('class', 'focus')
            .attr('fill', 'none')
            .attr('stroke', 'green')
            .attr('stroke-width', 1)
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', sizing.height), hoverDoy = hover.append('text')
            .attr('class', 'focus-doy')
            .attr('y', 10)
            .attr('x', 0)
            .text('hover doy');
        var focusOff = function () {
            selection.curves.forEach(function (c) { delete c.doyFocus; });
            hover.style('display', 'none');
            _this.updateLegend();
        }, focusOn = function () {
            // only turn on if something has been plotted
            if (selection.curves.reduce(function (plotted, c) {
                return plotted || c.plotted();
            }, false)) {
                hover.style('display', null);
            }
        };
        // left as function due to d3's use of this
        function updateFocus() {
            var coords = __WEBPACK_IMPORTED_MODULE_8_d3__["m" /* mouse */](this), xCoord = coords[0], yCoord = coords[1], doy = Math.round(x.invert(xCoord)), dataPoint = selection.curves.reduce(function (dp, curve) {
                if (!dp && curve.plotted()) {
                    dp = curve.data().reduce(function (found, point) {
                        return found || (doy >= point.start_doy && doy <= point.end_doy ? point : undefined);
                    }, undefined);
                }
                return dp;
            }, undefined); // TS thinks dataPoint is an "ActivityCurve"
            hoverLine.attr('transform', 'translate(' + xCoord + ')');
            hoverDoy
                .style('text-anchor', doy < 324 ? 'start' : 'end')
                .attr('x', xCoord + (10 * (doy < 324 ? 1 : -1)))
                .text(dataPoint ?
                self.legendDoyPipe.transform(dataPoint.start_doy) + ' - ' + self.legendDoyPipe.transform(dataPoint.end_doy) :
                self.legendDoyPipe.transform(doy));
            selection.curves.forEach(function (c) { c.doyFocus = doy; });
            self.updateLegend();
        }
        svg.append('rect')
            .attr('class', 'overlay')
            .attr('transform', 'translate(' + this.margins.left + ',' + this.margins.top + ')')
            .style('fill', 'none')
            .style('pointer-events', 'all')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', sizing.width)
            .attr('height', sizing.height)
            .on('mouseover', focusOn)
            .on('mouseout', focusOff)
            .on('mousemove', updateFocus);
    };
    ActivityCurvesComponent.prototype.reset = function () {
        var _this = this;
        _super.prototype.reset.call(this);
        var chart = this.chart, sizing = this.sizing, selection = this.selection;
        this.x = Object(__WEBPACK_IMPORTED_MODULE_7_d3_scale__["b" /* scaleLinear */])().range([0, sizing.width]).domain([1, 365]);
        this.xAxis = Object(__WEBPACK_IMPORTED_MODULE_6_d3_axis__["a" /* axisBottom */])(this.x).tickFormat(DATE_FMT);
        selection.curves.forEach(function (c) { return c.x(_this.x).y(_this.newY()); });
        chart.append('g')
            .attr('class', 'chart-title')
            .append('text')
            .attr('y', '0')
            .attr('dy', '-3em')
            .attr('x', '0')
            .style('text-anchor', 'start')
            .style('font-size', '18px')
            .text('Activity Curves');
        this.commonUpdates();
    };
    ActivityCurvesComponent.prototype.update = function () {
        var _this = this;
        this.reset();
        var selection = this.selection;
        selection.loadCurveData().then(function () {
            _this.redraw();
        });
    };
    ActivityCurvesComponent.prototype.redrawSvg = function () {
        var _this = this;
        var chart = this.chart, sizing = this.sizing, selection = this.selection, commonMetric = this.usingCommonMetric();
        chart.selectAll('g .axis').remove();
        if (commonMetric) {
            // both use the same y-axis domain needs to include all valid curve's data
            var domain = __WEBPACK_IMPORTED_MODULE_8_d3__["j" /* extent */](selection.curves.reduce(function (arr, c) {
                if (c.isValid()) {
                    arr = arr.concat(c.domain());
                }
                return arr;
            }, [])), y_1 = this.newY().domain(PAD_DOMAIN(domain, commonMetric));
            console.debug('ActivityCurves.common domain', domain);
            selection.curves.forEach(function (c) {
                c.y(y_1);
            });
        }
        else {
            selection.curves.forEach(function (c) {
                // re-initialize y in case a previous plot re-used the same y
                // each has an independent domain
                if (c.isValid()) {
                    c.y(_this.newY().domain(PAD_DOMAIN(c.domain(), c.metric)));
                }
            });
        }
        chart.append('g')
            .attr('class', 'y axis left')
            .call(selection.curves[0].axis())
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', '0')
            .attr('dy', '-4em')
            .attr('x', -1 * (sizing.height / 2)) // looks odd but to move in the Y we need to change X because of transform
            .attr('fill', '#000')
            .style('text-anchor', 'middle')
            .text(selection.curves[0].axisLabel());
        if (!commonMetric && selection.curves[1].isValid()) {
            selection.curves[1].orient = 'right';
            chart.append('g')
                .attr('class', 'y axis right')
                .attr('transform', 'translate(' + sizing.width + ')')
                .call(selection.curves[1].axis())
                .append('text')
                .attr('class', 'axis-title')
                .attr('transform', 'rotate(-90)')
                .attr('y', '0')
                .attr('dy', '4em')
                .attr('x', -1 * (sizing.height / 2)) // looks odd but to move in the Y we need to change X because of transform
                .style('text-anchor', 'middle')
                .text(selection.curves[1].axisLabel());
        }
        var xTickConfig = X_TICK_CFG[selection.frequency.value];
        this.xAxis.tickValues(xTickConfig.values);
        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + sizing.height + ')')
            .call(this.xAxis)
            .append('text')
            .attr('y', '0')
            .attr('dy', '3em')
            .attr('x', (sizing.width / 2))
            .attr('class', 'axis-label')
            .style('text-anchor', 'middle')
            .text('Date');
        if (xTickConfig.rotate) {
            chart.selectAll('g.x.axis g.tick text')
                .style('text-anchor', 'end')
                .attr('transform', 'rotate(-' + xTickConfig.rotate + ')');
            chart.selectAll('g.x.axis .axis-label')
                .attr('dy', '4em');
        }
        // if not using a common metric (two y-axes)
        // then color the ticks/labels in alignment with their
        // corresponding curve for clarity.
        if (!commonMetric) {
            chart.selectAll('g.y.axis.left g.tick text')
                .style('fill', selection.curves[0].color);
            chart.selectAll('g.y.axis.left text.axis-title')
                .style('fill', selection.curves[0].color);
            chart.selectAll('g.y.axis.right g.tick text')
                .style('fill', selection.curves[1].color);
            chart.selectAll('g.y.axis.right text.axis-title')
                .style('fill', selection.curves[1].color);
        }
        this.commonUpdates();
        // draw the curves
        selection.curves.forEach(function (c) {
            c.draw(chart);
        });
        this.updateLegend();
        this.hover();
    };
    return ActivityCurvesComponent;
}(__WEBPACK_IMPORTED_MODULE_4__svg_visualization_base_component__["b" /* SvgVisualizationBaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__activity_curves_selection__["b" /* ActivityCurvesSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__activity_curves_selection__["b" /* ActivityCurvesSelection */]) === "function" && _a || Object)
], ActivityCurvesComponent.prototype, "selection", void 0);
ActivityCurvesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'activity-curves',
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common__["o" /* Window */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["o" /* Window */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__common__["d" /* LegendDoyPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["d" /* LegendDoyPipe */]) === "function" && _e || Object])
], ActivityCurvesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=activity-curves.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/activity-curves/curve-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurveControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_curve__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_curves_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurveControlComponent = (function () {
    function CurveControlComponent() {
        var _this = this;
        this.required = true;
        this.disabled = false;
        this.yearControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, /*Validators.required*/ function (c) {
            if (_this.required && !c.value) {
                return {
                    required: true
                };
            }
            return null;
        });
        this.validYears = (function () {
            var thisYear = (new Date()).getFullYear(), years = [], c = 2010;
            while (c < thisYear) {
                years.push(c++);
            }
            return years;
        })();
    }
    return CurveControlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CurveControlComponent.prototype, "required", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CurveControlComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__activity_curves_selection__["b" /* ActivityCurvesSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__activity_curves_selection__["b" /* ActivityCurvesSelection */]) === "function" && _a || Object)
], CurveControlComponent.prototype, "selection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__activity_curve__["a" /* ActivityCurve */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__activity_curve__["a" /* ActivityCurve */]) === "function" && _b || Object)
], CurveControlComponent.prototype, "curve", void 0);
CurveControlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'curve-selection-control',
        template: "\n    <species-phenophase-input [(species)]=\"curve.species\" [(phenophase)]=\"curve.phenophase\" [selection]=\"selection\" [disabled]=\"disabled\" [required]=\"required\">\n    </species-phenophase-input>\n\n    <mat-form-field class=\"year-input\">\n        <mat-select [placeholder]=\"'Year'+(required ? ' *':'')\" [(ngModel)]=\"curve.year\" [disabled]=\"disabled\" [formControl]=\"yearControl\">\n            <mat-option *ngFor=\"let y of validYears\" [value]=\"y\">{{y}}</mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"yearControl.errors && yearControl.errors.required\">Year is required</mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"metric-input\">\n        <mat-select placeholder=\"Metric\" [(ngModel)]=\"curve.metric\" [disabled]=\"!curve.validMetrics.length\" [disabled]=\"disabled\">\n            <mat-option *ngFor=\"let m of curve.validMetrics\" [value]=\"m\">{{m.label}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    ",
        styles: ["\n        .year-input {\n            width: 75px;\n        }\n        .metric-input {\n            width: 255px;\n        }\n    "]
    })
], CurveControlComponent);

var _a, _b;
//# sourceMappingURL=curve-control.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/activity-curves/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activity_curve__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curve.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_curves_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__activity_curves_selection__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_curves_selection_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-selection-factory.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__activity_curves_selection_factory_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_curves_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__activity_curves_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_curves_control_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/activity-curves-control.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__activity_curves_control_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__curve_control_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/curve-control.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__curve_control_component__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var THIS_YEAR = (new Date()).getFullYear();
var VALID_YEARS = (function () {
    var max = THIS_YEAR + 1, current = 1900, years = [];
    while (current < max) {
        years.push(current++);
    }
    return years;
})();
var CalendarControlComponent = (function () {
    function CalendarControlComponent() {
        this.maxYears = 5;
        this.updateSent = false;
    }
    CalendarControlComponent.prototype.selectableYears = function (y) {
        var _this = this;
        if (y) {
            // validYears including y but excluding any others in the selection
            return VALID_YEARS.filter(function (yr) {
                return yr === y || _this.selection.years.indexOf(yr) === -1;
            });
        }
        return VALID_YEARS;
    };
    CalendarControlComponent.prototype.ngOnInit = function () {
        if (this.selection.years.length === 0) {
            this.addYear();
        }
        if (this.selection.plots.length === 0) {
            this.addPlot();
        }
    };
    CalendarControlComponent.prototype.updateChange = function () {
        if (this.selection.isValid()) {
            this.selection.update();
            this.updateSent = true;
        }
    };
    CalendarControlComponent.prototype.redrawChange = function (change) {
        if (this.selection.isValid()) {
            if (change && !change.oldValue && change.newValue) {
                this.updateChange();
            }
            else {
                if (this.updateSent) {
                    this.selection.redraw();
                }
                else {
                    this.updateChange();
                }
            }
        }
    };
    CalendarControlComponent.prototype.addPlot = function () {
        this.selection.plots.push({});
    };
    CalendarControlComponent.prototype.removePlot = function (index) {
        this.selection.plots.splice(index, 1);
        this.updateChange();
    };
    CalendarControlComponent.prototype.addYear = function () {
        var y = THIS_YEAR;
        while (this.selection.years.indexOf(y) !== -1) {
            y--;
        }
        this.selection.years.push(y);
        this.updateChange();
    };
    CalendarControlComponent.prototype.removeYear = function (index) {
        this.selection.years.splice(index, 1);
        this.updateChange();
    };
    CalendarControlComponent.prototype.plotsValid = function () {
        return this.selection.plots.length === this.selection.validPlots.length;
    };
    return CalendarControlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_selection__["a" /* CalendarSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_selection__["a" /* CalendarSelection */]) === "function" && _a || Object)
], CalendarControlComponent.prototype, "selection", void 0);
CalendarControlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'calendar-control',
        template: "\n    <div>\n        <div class=\"year-input-wrapper\" *ngFor=\"let plotYear of selection.years;index as idx\">\n            <mat-form-field class=\"year-input\">\n                <mat-select placeholder=\"Year {{idx+1}}\" [(ngModel)]=\"selection.years[idx]\" (change)=\"updateChange()\" id=\"year_{{idx}}\">\n                    <mat-option *ngFor=\"let y of selectableYears(selection.years[idx])\" [value]=\"y\">{{y}}</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <button *ngIf=\"idx > 0\" mat-button class=\"remove-year\" (click)=\"removeYear(idx)\">Remove</button>\n            <button *ngIf=\"selection.years.length < 6 && idx === (selection.years.length-1)\" mat-button class=\"add-year\" (click)=\"addYear()\">Add</button>\n        </div>\n    </div>\n\n    <div class=\"phenophase-input-wrapper\" *ngFor=\"let spi of selection.plots; index as idx\">\n        <species-phenophase-input\n            [(species)]=\"spi.species\" [(phenophase)]=\"spi.phenophase\" [(color)]=\"spi.color\"\n            [selection]=\"selection\"\n            [gatherColor]=\"true\"\n            (onSpeciesChange)=\"updateChange()\"\n            (onPhenophaseChange)=\"updateChange()\"\n            (onColorChange)=\"redrawChange($event)\"></species-phenophase-input>\n        <button *ngIf=\"idx > 0\" mat-button class=\"remove-plot\" (click)=\"removePlot(idx)\">Remove</button>\n        <button *ngIf=\"idx === (selection.plots.length-1)\" mat-button class=\"add-plot\" [disabled]=\"!plotsValid()\" (click)=\"addPlot()\">Add</button>\n    </div>\n\n    <mat-checkbox [(ngModel)]=\"selection.negative\" (change)=\"redrawChange()\">Display negative data</mat-checkbox>\n\n    <label for=\"label-size-input\">Label size\n        <mat-slider id=\"label-size-input\" min=\"0\" max=\"10\" step=\"0.25\" [(ngModel)]=\"selection.fontSizeDelta\" (change)=\"redrawChange()\" [disabled]=\"!selection.isValid()\"></mat-slider>\n    </label>\n\n    <label for=\"label-position-input\">Label position\n        <mat-slider id=\"label-position-input\" min=\"0\" max=\"100\" step=\"1\" [(ngModel)]=\"selection.labelOffset\" (change)=\"redrawChange()\" [disabled]=\"!selection.isValid()\"></mat-slider>\n    </label>\n\n    <label for=\"label-band-size-input\">Band size\n        <mat-slider invert id=\"label-band-size-input\" min=\"0\" max=\"0.95\" step=\"0.05\" [(ngModel)]=\"selection.bandPadding\" (change)=\"redrawChange()\" [disabled]=\"!selection.isValid()\"></mat-slider>\n    </label>\n    ",
        styles: ["\n        .year-input-wrapper {\n            display: inline-block;\n            margin-right: 15px;\n        }\n        .year-input {\n            width: 60px;\n        }\n        .phenophase-input-wrapper {\n            display: block;\n        }\n        label[for=\"label-size-input\"] {\n            margin-left: 15px;\n        }\n    "]
    })
], CalendarControlComponent);

var _a;
//# sourceMappingURL=calendar-control.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-selection-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSelectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CalendarSelectionFactory = (function () {
    function CalendarSelectionFactory(http, cacheService, speciesTitle, config) {
        this.http = http;
        this.cacheService = cacheService;
        this.speciesTitle = speciesTitle;
        this.config = config;
        this.requestSrc = 'npn-vis-calendar';
    }
    CalendarSelectionFactory.prototype.newSelection = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__calendar_selection__["a" /* CalendarSelection */](this.http, this.cacheService, this.speciesTitle, this.config);
    };
    return CalendarSelectionFactory;
}());
CalendarSelectionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__common__["f" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common__["n" /* SpeciesTitlePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["n" /* SpeciesTitlePipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__common__["i" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["i" /* NpnConfiguration */]) === "function" && _d || Object])
], CalendarSelectionFactory);

var _a, _b, _c, _d;
//# sourceMappingURL=calendar-selection-factory.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observation_date_vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-date-vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* unused harmony reexport ObservationDataDataPoint */
/* unused harmony reexport ObservationDateData */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarSelection = (function (_super) {
    __extends(CalendarSelection, _super);
    function CalendarSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$class = 'CalendarSelection';
        _this.labelOffset = 4;
        _this.bandPadding = 0.5;
        _this.fontSizeDelta = 0;
        return _this;
    }
    return CalendarSelection;
}(__WEBPACK_IMPORTED_MODULE_0__observation_date_vis_selection__["a" /* ObservationDateVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], CalendarSelection.prototype, "$class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], CalendarSelection.prototype, "labelOffset", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], CalendarSelection.prototype, "bandPadding", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], CalendarSelection.prototype, "fontSizeDelta", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], CalendarSelection.prototype, "monthFormat", void 0);

//# sourceMappingURL=calendar-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CalendarComponent = (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filename = 'calendar.png';
        _this.margins = { top: 20, right: 35, bottom: 45, left: 35 };
        return _this;
    }
    // the doy of the first of each month doesn't change from year to year just what
    // day of the week days fall on so what year is used to calculate them is irrelevant
    CalendarComponent.prototype.xTickValues = function () {
        var firsts = [1], i, count = 1;
        for (i = 1; i < 12; i++) {
            var date = new Date(1900, i);
            // back up 1 day
            date.setTime(date.getTime() - __WEBPACK_IMPORTED_MODULE_1__vis_selection__["d" /* ONE_DAY_MILLIS */]);
            count += date.getDate();
            firsts.push(count);
        }
        return this.x.domain().filter(function (d) {
            return firsts.indexOf(d) !== -1;
        });
    };
    CalendarComponent.prototype.commonUpdates = function () {
        // forces all text to 14 px
        _super.prototype.commonUpdates.call(this);
        // labels are customizable in size
        var bw = this.y.bandwidth();
        var dy = -1 * ((bw / 2) + this.selection.labelOffset), labelFontSize = this.baseFontSize() + this.selection.fontSizeDelta;
        this.chart.selectAll('.y.axis text')
            .attr('x', 0)
            .attr('dy', dy)
            .attr('style', "text-anchor: start; font-size: " + labelFontSize + "px;");
    };
    CalendarComponent.prototype.getMonthFormat = function () {
        if (this.selection.monthFormat) {
            return this.selection.monthFormat;
        }
        if (this.sizing && this.sizing.width < 800) {
            return '%b';
        }
        return '%B';
    };
    CalendarComponent.prototype.reset = function () {
        var _this = this;
        _super.prototype.reset.call(this);
        this.processed = undefined;
        var chart = this.chart, sizing = this.sizing, d3_month_fmt = __WEBPACK_IMPORTED_MODULE_6_d3__["r" /* timeFormat */](this.getMonthFormat());
        this.x = Object(__WEBPACK_IMPORTED_MODULE_5_d3_scale__["a" /* scaleBand */])().range([0, sizing.width]).domain(__WEBPACK_IMPORTED_MODULE_6_d3__["n" /* range */](1, 366))
            .paddingInner(-0.1).paddingOuter(0.5);
        this.xAxis = Object(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["a" /* axisBottom */])(this.x).tickValues(this.xTickValues())
            .tickFormat(function (i) {
            var date = new Date(1900, 0);
            date.setTime(date.getTime() + (__WEBPACK_IMPORTED_MODULE_1__vis_selection__["d" /* ONE_DAY_MILLIS */] * i));
            return d3_month_fmt(date);
        });
        this.y = Object(__WEBPACK_IMPORTED_MODULE_5_d3_scale__["a" /* scaleBand */])().range([sizing.height, 0]).domain(__WEBPACK_IMPORTED_MODULE_6_d3__["n" /* range */](0, 6)).paddingOuter(0.5);
        this.yAxis = Object(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["c" /* axisRight */])(this.y).tickSize(sizing.width).tickFormat(function (i) {
            return _this.processed && _this.processed.data && i < _this.processed.labels.length ?
                _this.processed.labels[i] : '';
        });
        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + sizing.height + ')')
            .call(this.xAxis);
        chart.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis);
        chart.selectAll('g .y.axis line')
            .style('stroke', '#777')
            .style('stroke-dasharray', '2,2');
        // hide y axis ticks and domain
        //chart.selectAll('g .y.axis .tick line').style('display','none');
        chart.selectAll('g .y.axis .domain').style('display', 'none');
        this.commonUpdates();
    };
    CalendarComponent.prototype.update = function () {
        var _this = this;
        this.reset();
        this.selection.getData().then(function (data) {
            _this.data = data;
            _this.redraw();
        })
            .catch(this.handleError);
    };
    CalendarComponent.prototype.redrawSvg = function () {
        var _this = this;
        if (!this.data) {
            return;
        }
        var sizing = this.sizing, processed = this.processed = this.selection.postProcessData(this.data);
        // update y axis
        this.y.paddingInner(this.selection.bandPadding);
        if (processed && processed.labels) {
            this.y.domain(__WEBPACK_IMPORTED_MODULE_6_d3__["n" /* range */](0, processed.labels.length));
        }
        this.yAxis.scale(this.y);
        this.chart.selectAll('g .y.axis')
            .call(this.yAxis);
        this.chart.selectAll('.doy').remove();
        if (processed && processed.data) {
            var doys = this.chart.selectAll('.doy').data(processed.data, function (d) {
                var point = d; // why is this necessary
                return point.y + "-" + point.x + "-" + point.color;
            });
            doys = doys.enter().insert('line', ':first-child').attr('class', 'doy');
            var dx_1 = Math.ceil(this.x.bandwidth() / 2), dy_1 = this.y.bandwidth() / 2;
            doys.attr('x1', function (d) { return _this.x(d.x) - dx_1; })
                .attr('y1', function (d, i) { return _this.y(d.y) + dy_1; })
                .attr('x2', function (d) { return _this.x(d.x) + dx_1; })
                .attr('y2', function (d, i) { return _this.y(d.y) + dy_1; })
                .attr('doy-point', function (d) { return "(" + d.x + "," + d.y + ")"; })
                .attr('stroke', function (d) { return d.color; })
                .attr('stroke-width', "" + this.y.bandwidth())
                .append('title')
                .text(function (d) {
                return d.x; // x is the doy
            });
        }
        this.commonUpdates();
    };
    return CalendarComponent;
}(__WEBPACK_IMPORTED_MODULE_3__svg_visualization_base_component__["b" /* SvgVisualizationBaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__calendar_selection__["a" /* CalendarSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar_selection__["a" /* CalendarSelection */]) === "function" && _a || Object)
], CalendarComponent.prototype, "selection", void 0);
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'calendar',
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.scss")]
    })
], CalendarComponent);

var _a;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/calendar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-selection.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__calendar_selection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_selection_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-selection-factory.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__calendar_selection_factory_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/calendar.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__calendar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_control_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/calendar-control.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__calendar_control_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClippedWmsMapControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clipped_wms_map_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClippedWmsMapControl = (function () {
    function ClippedWmsMapControl() {
    }
    ClippedWmsMapControl.prototype.serviceChange = function () {
        this.validLayers = this.selection.validLayers;
        var selection = this.selection, layers = this.selection.validLayers;
        selection.layer = layers.length ? layers[0] : undefined;
        this.layerChange();
    };
    ClippedWmsMapControl.prototype.layerChange = function () {
        var selection = this.selection;
        if (selection.isValid()) {
            selection.update();
        }
        else {
            selection.reset();
        }
    };
    ClippedWmsMapControl.prototype.ngOnInit = function () {
        this.validServices = this.selection.validServices;
        this.serviceChange();
    };
    return ClippedWmsMapControl;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__clipped_wms_map_selection__["a" /* ClippedWmsMapSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__clipped_wms_map_selection__["a" /* ClippedWmsMapSelection */]) === "function" && _a || Object)
], ClippedWmsMapControl.prototype, "selection", void 0);
ClippedWmsMapControl = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'clipped-wms-map-control',
        template: "\n    <mat-select class=\"map-service-input\" placeholder=\"Map\" [(ngModel)]=\"selection.service\" (change)=\"serviceChange()\">\n        <mat-option *ngFor=\"let s of validServices\" [value]=\"s.value\">{{s.label}}</mat-option>\n    </mat-select>\n    <mat-select class=\"map-layer-input\" placeholder=\"Layer\" [(ngModel)]=\"selection.layer\" (change)=\"layerChange()\">\n        <mat-option *ngFor=\"let l of validLayers\" [value]=\"l\">{{l.label}}</mat-option>\n    </mat-select>\n    <mat-checkbox [(ngModel)]=\"selection.useBufferedBoundary\" (change)=\"layerChange()\">Use Buffered Boundary</mat-checkbox>\n    ",
        styles: ["\n        .map-service-input {\n            width: 225px;\n        }\n        .map-layer-input {\n            width: 155px;\n        }\n    "]
    })
], ClippedWmsMapControl);

var _a;
//# sourceMappingURL=clipped-wms-map-control.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClippedWmsMapSelectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gridded__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clipped_wms_map_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClippedWmsMapSelectionFactory = (function () {
    function ClippedWmsMapSelectionFactory(serviceUtils, datePipe, mapLegendService, dataService) {
        this.serviceUtils = serviceUtils;
        this.datePipe = datePipe;
        this.mapLegendService = mapLegendService;
        this.dataService = dataService;
    }
    ClippedWmsMapSelectionFactory.prototype.newSelection = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__clipped_wms_map_selection__["a" /* ClippedWmsMapSelection */](this.serviceUtils, this.datePipe, this.mapLegendService, this.dataService);
    };
    return ClippedWmsMapSelectionFactory;
}());
ClippedWmsMapSelectionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common__["j" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["j" /* NpnServiceUtils */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__gridded__["d" /* WmsMapLegendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__gridded__["d" /* WmsMapLegendService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__gridded__["c" /* WcsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__gridded__["c" /* WcsDataService */]) === "function" && _d || Object])
], ClippedWmsMapSelectionFactory);

var _a, _b, _c, _d;
//# sourceMappingURL=clipped-wms-map-selection-factory.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClippedWmsMapSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gridded__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SIX_NODATA_DISCLAIMER = "This Refuge has not yet met the requirements for the Spring Leaf Index model. Check back later in the year.";
var SIX_LAYERS = [{
        id: 'current',
        label: 'Current Si-x leaf index',
        layerName: 'si-x:average_leaf_ncep',
        clippingService: 'si-x/area/clippedImage',
        statisticsService: 'si-x/area/statistics',
        noDataDisclaimer: SIX_NODATA_DISCLAIMER
    }, {
        id: 'forecast',
        label: '6-day forecast',
        layerName: 'si-x:average_leaf_ncep',
        clippingService: 'si-x/area/clippedImage',
        statisticsService: 'si-x/area/statistics',
        forecast: true,
        noDataDisclaimer: SIX_NODATA_DISCLAIMER
    }, {
        id: 'anomaly',
        label: 'Anomaly',
        layerName: 'si-x:leaf_anomaly',
        clippingService: 'si-x/anomaly/area/clippedImage',
        statisticsService: 'si-x/anomaly/area/statistics',
        noDataDisclaimer: SIX_NODATA_DISCLAIMER
    }];
var AGDD_LAYERS = [{
        id: 'current',
        label: 'Current AGDD',
        layerName: 'gdd:agdd',
        clippingService: 'agdd/area/clippedImage',
        statisticsService: 'agdd/area/statistics',
    }, {
        id: 'forecast',
        label: '6-day forecast',
        layerName: 'gdd:agdd',
        clippingService: 'agdd/area/clippedImage',
        statisticsService: 'agdd/area/statistics',
        forecast: true,
    }, {
        id: 'anomaly',
        label: 'Anomaly',
        layerName: 'gdd:agdd_anomaly',
        clippingService: 'agdd/anomaly/area/clippedImage',
        statisticsService: 'agdd/anomaly/area/statistics',
    }];
var ClippedWmsMapSelection = (function (_super) {
    __extends(ClippedWmsMapSelection, _super);
    function ClippedWmsMapSelection(serviceUtils, datePipe, mapLegendService, dataService) {
        var _this = _super.call(this) || this;
        _this.serviceUtils = serviceUtils;
        _this.datePipe = datePipe;
        _this.mapLegendService = mapLegendService;
        _this.dataService = dataService;
        _this.$class = 'ClippedWmsMapSelection';
        _this.service = 'si-x'; // si-x || agdd
        _this.layer = SIX_LAYERS[0];
        _this.useBufferedBoundary = false;
        _this.forecastDays = 6;
        return _this;
    }
    ClippedWmsMapSelection.prototype.isValid = function () {
        return (this.service === 'si-x' || this.service === 'agdd') && !!this.layer && !!this.fwsBoundary;
    };
    Object.defineProperty(ClippedWmsMapSelection.prototype, "validServices", {
        get: function () {
            return [{
                    value: 'si-x',
                    label: 'Spring index'
                }, {
                    value: 'agdd',
                    label: 'Accumulated growing degree days'
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClippedWmsMapSelection.prototype, "validLayers", {
        get: function () {
            switch (this.service) {
                case 'si-x':
                    return SIX_LAYERS;
                case 'agdd':
                    return AGDD_LAYERS;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClippedWmsMapSelection.prototype, "apiDate", {
        get: function () {
            // always "today" or 6 days in the future for forecast
            var d = this.explicitDate ?
                new Date(this.explicitDate.getTime()) : new Date();
            if (this.layer && this.layer.forecast) {
                d.setTime(d.getTime() + (this.forecastDays * __WEBPACK_IMPORTED_MODULE_0__vis_selection__["d" /* ONE_DAY_MILLIS */]));
            }
            return this.datePipe.transform(d, 'y-MM-dd');
        },
        enumerable: true,
        configurable: true
    });
    ClippedWmsMapSelection.prototype.getBoundary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.serviceUtils.dataApiUrl('/v0/si-x/area/boundary'), params = {
                format: 'geojson',
                fwsBoundary: _this.fwsBoundary
            };
            _this.serviceUtils.cachedGet(url, params)
                .then(function (response) {
                if (response && response.boundary) {
                    _this.serviceUtils.cachedGet(response.boundary, {}).then(resolve).catch(reject);
                }
                else {
                    reject('missing boundary in response.');
                }
            })
                .catch(reject);
        });
    };
    ClippedWmsMapSelection.prototype.getData = function () {
        var url = this.serviceUtils.dataApiUrl("/v0/" + this.layer.clippingService), params = {
            layerName: this.layer.layerName,
            fwsBoundary: this.fwsBoundary,
            date: this.apiDate,
            useBufferedBoundary: this.useBufferedBoundary,
            style: true,
            fileFormat: 'png'
        };
        return this.serviceUtils.cachedGet(url, params);
    };
    ClippedWmsMapSelection.prototype.getStatistics = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.serviceUtils.dataApiUrl("/v0/" + _this.layer.statisticsService), params = {
                layerName: _this.layer.layerName,
                fwsBoundary: _this.fwsBoundary,
                date: _this.apiDate,
                useBufferedBoundary: _this.useBufferedBoundary,
                useCache: _this.serviceUtils.dataApiUseStatisticsCache
            };
            _this.serviceUtils.cachedGet(url, params)
                .then(function (stats) {
                // translate the date string to a date object.
                var dateParts = /^(\d{4})-(\d{2})-(\d{2})/.exec(stats.date);
                stats.date = new Date(parseInt(dateParts[1]), parseInt(dateParts[2]) - 1, parseInt(dateParts[3]));
                resolve(stats);
            })
                .catch(reject);
        });
    };
    ClippedWmsMapSelection.prototype.getAllData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getData(),
                _this.getBoundary(),
                _this.getStatistics()
            ])
                .then(function (arr) {
                resolve({
                    data: arr[0],
                    boundary: arr[1],
                    statistics: arr[2]
                });
            })
                .catch(reject);
        });
    };
    ClippedWmsMapSelection.prototype.fitBounds = function (map) {
        var bounds = undefined;
        if (this.data && this.data.data) {
            bounds = this.toBounds(this.data.data.bbox);
            if (bounds) {
                map.fitBounds(bounds);
            }
        }
        if (!bounds && this.features && this.features.length) {
            var allBounds = this.features.map(function (f) { return Object(__WEBPACK_IMPORTED_MODULE_1__gridded__["e" /* googleFeatureBounds */])(f); }).filter(function (b) { return !!b; });
            if (allBounds.length) {
                var bounds_1 = allBounds[0];
                if (allBounds.length > 1) {
                    // union in the others
                    allBounds.slice(1).forEach(function (b) { return bounds_1.union(b); });
                }
                map.fitBounds(bounds_1);
            }
        }
    };
    ClippedWmsMapSelection.prototype.resizeMap = function (map) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.fitBounds(map);
            resolve();
        });
    };
    ClippedWmsMapSelection.prototype.removeFrom = function (map) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.overlay) {
                _this.overlay.remove();
            }
            (_this.features || []).forEach(function (f) {
                map.data.remove(f);
            });
            (_this.listeners || []).forEach(function (l) { return google.maps.event.removeListener(l); });
            if (_this.infoWindowHandler) {
                _this.infoWindowHandler.close();
            }
            _this.data = undefined;
            _this.features = undefined;
            _this.listeners = undefined;
            _this.infoWindowHandler = undefined;
            _this.overlay = undefined;
            _this.legend = undefined;
            resolve();
        });
    };
    ClippedWmsMapSelection.prototype.addTo = function (map) {
        var _this = this;
        return new Promise(function (_resolve, _reject) {
            _this.working = true;
            var resolve = function (d) {
                _this.working = false;
                _resolve(d);
            }, reject = function (e) {
                _this.working = false;
                _reject(e);
            };
            if (_this.overlay && _this.features) {
                return reject('already added to map, call removeFrom');
            }
            _this.getAllData()
                .then(function (all) {
                if (_this.overlay && _this.features) {
                    console.log('in promise, already have overlay and features');
                    return resolve();
                }
                // have to do this so that the google api classes aren't
                // touched too early and our class extension invalid
                lazyClassLoader();
                _this.data = all;
                var data = all.data, bounds = _this.toBounds(data.bbox), clippedImage = data.clippedImage;
                if (bounds) {
                    map.panTo(bounds.getCenter());
                    /*
                    let rect = new google.maps.Rectangle({
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.35,
                        map: map,
                        bounds: bounds
                    });*/
                    map.fitBounds(bounds);
                    _this.overlay = new ImageOverLayImpl(bounds, clippedImage, map);
                    _this.overlay.add();
                    _this.infoWindowHandler = _this.dataService.newInfoWindowHandler(map);
                    var wcsDateArg_1 = "http://www.opengis.net/def/axis/OGC/0/time(\"" + _this.apiDate + "T00:00:00.000Z\")", wcsParamAugmenter_1 = function (params) {
                        params.subset = params.subset || [];
                        params.subset.push(wcsDateArg_1);
                    };
                    _this.listeners = _this.listeners || [];
                    _this.listeners.push(map.addListener('click', function (event) {
                        return _this.infoWindowHandler.open(event.latLng, _this.layer.layerName, _this.legend, wcsParamAugmenter_1);
                    }));
                }
                _this.addBoundary(map, all.boundary);
                _this.mapLegendService.getLegend(data.layerClippedFrom)
                    .then(function (legend) {
                    console.debug('ClippedWmsMapSelection.legend:', legend);
                    _this.legend = legend;
                    resolve();
                })
                    .catch(reject);
            })
                .catch(reject);
        });
    };
    ClippedWmsMapSelection.prototype.addBoundary = function (map, geoJson) {
        console.log('ClippedWmsMapSelection.addBoundary', geoJson);
        this.features = map.data.addGeoJson(geoJson);
        map.data.setStyle(function (feature) {
            return {
                strokeColor: '#000000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.0,
                clickable: false,
            };
        });
        this.fitBounds(map);
    };
    ClippedWmsMapSelection.prototype.toBounds = function (bbox) {
        if (bbox && bbox.length === 4) {
            var sw_lng = bbox[0], sw_lat = bbox[1], ne_lng = bbox[2], ne_lat = bbox[3];
            return new google.maps.LatLngBounds(new google.maps.LatLng(sw_lat, sw_lng), new google.maps.LatLng(ne_lat, ne_lng));
            /*
            let coords = /^BOX\(\s*(-?\d+\.\d+)\s+(-?\d+\.\d+),\s*(-?\d+\.\d+)\s+(-?\d+\.\d+)\s*\)/.exec(this.box);
            if(coords.length === 5) {
                let sw_lng = parseFloat(coords[1]),
                    sw_lat = parseFloat(coords[2]),
                    ne_lng = parseFloat(coords[3]),
                    ne_lat = parseFloat(coords[4]);
                return new google.maps.LatLngBounds(
                  new google.maps.LatLng(sw_lat,sw_lng),
                  new google.maps.LatLng(ne_lat,ne_lng)
                );
            }*/
        }
        return null;
    };
    return ClippedWmsMapSelection;
}(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["c" /* NetworkAwareVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ClippedWmsMapSelection.prototype, "$class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])() // may need to use get/set pattern
    ,
    __metadata("design:type", String)
], ClippedWmsMapSelection.prototype, "service", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Object)
], ClippedWmsMapSelection.prototype, "layer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ClippedWmsMapSelection.prototype, "fwsBoundary", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Boolean)
], ClippedWmsMapSelection.prototype, "useBufferedBoundary", void 0);
;
var ImageOverLayImpl;
function lazyClassLoader() {
    ImageOverLayImpl = (function (_super) {
        __extends(ImageOverLayImpl, _super);
        function ImageOverLayImpl(bounds, image, map) {
            var _this = _super.call(this) || this;
            _this.opacity = 0.75;
            _this.bounds = bounds;
            _this.image = image;
            _this.map = map;
            return _this;
        }
        ImageOverLayImpl.prototype.add = function () {
            this.setMap(this.map);
        };
        ImageOverLayImpl.prototype.remove = function () {
            this.setMap(null);
        };
        ImageOverLayImpl.prototype.setOpacity = function (o) {
            this.opacity = o;
            if (this.div_) {
                this.div_.style.opacity = o;
            }
        };
        ImageOverLayImpl.prototype.getOpacity = function () {
            return this.opacity;
        };
        ImageOverLayImpl.prototype.onAdd = function () {
            var div = document.createElement('div');
            div.style.borderStyle = 'none';
            div.style.borderWidth = '0px';
            div.style.position = 'absolute';
            // Create the img element and attach it to the div.
            var img = document.createElement('img');
            img.src = this.image;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.position = 'absolute';
            div.appendChild(img);
            this.div_ = div;
            // Add the element to the "overlayLayer" pane.
            var panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
            this.setOpacity(this.opacity);
        };
        ImageOverLayImpl.prototype.draw = function () {
            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            var overlayProjection = this.getProjection();
            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            var sw = overlayProjection.fromLatLngToDivPixel(this.bounds.getSouthWest());
            var ne = overlayProjection.fromLatLngToDivPixel(this.bounds.getNorthEast());
            // Resize the image's div to fit the indicated dimensions.
            var div = this.div_;
            div.style.left = sw.x + 'px';
            div.style.top = ne.y + 'px';
            div.style.width = (ne.x - sw.x) + 'px';
            div.style.height = (sw.y - ne.y) + 'px';
        };
        ImageOverLayImpl.prototype.onRemove = function () {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        };
        return ImageOverLayImpl;
    }(google.maps.OverlayView));
}
//# sourceMappingURL=clipped-wms-map-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClippedStatValuePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClippedWmsMapStatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// wraps DecimalPipe and supplies custom formatting for specific layers for mean/min/max
var ClippedStatValuePipe = (function () {
    function ClippedStatValuePipe(decimalPipe) {
        this.decimalPipe = decimalPipe;
    }
    ClippedStatValuePipe.prototype.transform = function (value, nFormat, layer) {
        if (layer && layer.layerName === 'si-x:leaf_anomaly') {
            var transformed = this.decimalPipe.transform(Math.abs(value), nFormat);
            if (value < 0) {
                return transformed + " days early";
            }
            else {
                return transformed + " days late";
            }
        }
        return this.decimalPipe.transform(value, nFormat);
    };
    return ClippedStatValuePipe;
}());
ClippedStatValuePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'clippedStatValue'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DecimalPipe */]) === "function" && _a || Object])
], ClippedStatValuePipe);

var COUNT_TT = 'Number of map pixels included in the calculations';
var SIX_COMPLETE = 'Proportion of area that has reached the First Leaf Index';
var AGDD_COMPLETE = 'Highest amount of warmth accumulated since Jan 1 in the area, measured in growing degree days (GDDs)';
var SIX_TOOLTIPS = {
    count: COUNT_TT,
    mean: 'Mean day of year First Leaf Index was reached',
    stdDev: 'Standard deviation of mean day of year First Leaf Index was reached',
    min: 'Earliest day of year First Leaf Index was reached',
    max: 'Latest day of year First Leaf Index was reached',
    complete: SIX_COMPLETE
};
var AGDD_TOOLTIPS = {
    count: COUNT_TT,
    mean: 'Warmth accumulated since Jan 1, averaged across the area, measured in growing degree days (GDDs)',
    stdDev: 'Standard deviation in warmth accumulated since Jan 1, averaged across the area, measured in growing degree days (GDDs)',
    min: 'Lowest amount of warmth accumulated since Jan 1 in the area, measured in growing degree days (GDDs)',
    max: AGDD_COMPLETE
};
var SIX_ANOMALY_TOOLTIPS = {
    count: COUNT_TT,
    mean: 'Measure of how early or late spring arrived in this area this year compared to long-term average. Calculated as average of values for pixels displayed',
    stdDev: 'The standard deviation of the average number of days different from a long-term average (1981-2010) for the pixels displayed',
    min: 'Earliest day compared to a long-term average (1981-2010) for the pixels displayed',
    max: 'Latest day compared to a long-term average (1981-2010) for the pixels displayed',
    complete: SIX_COMPLETE
};
var AGDD_ANOMALY_TOOLTIPS = {
    count: COUNT_TT,
    mean: 'Difference in the warmth accumulated since Jan 1 from a long-term average (1981-2010), measured in growing degree days (GDDs)',
    stdDev: 'Standard deviation in difference in the warmth accumulated since Jan 1 from a long-term average (1981-2010), measured in growing degree days (GDDs)',
    min: 'Lowest difference in the warmth accumulated since Jan 1 from a long-term average (1981-2010), measured in growing degree days (GDDs)',
    max: 'Highest difference in the warmth accumulated since Jan 1 from a long-term average (1981-2010), measured in growing degree days (GDDs)',
    complete: AGDD_COMPLETE
};
var ClippedWmsMapStatisticsComponent = (function () {
    function ClippedWmsMapStatisticsComponent() {
    }
    ClippedWmsMapStatisticsComponent.prototype.ngDoCheck = function () {
        if (this.selection && this.selection.data && this.selection.data.statistics) {
            this.statistics = this.selection.data.statistics;
            this.gdd = this.selection && /^gdd/.test(this.selection.layer.layerName);
            this.tooltips = this.gdd ?
                (this.selection.layer.id === 'anomaly' ? AGDD_ANOMALY_TOOLTIPS : AGDD_TOOLTIPS) :
                (this.selection.layer.id === 'anomaly' ? SIX_ANOMALY_TOOLTIPS : SIX_TOOLTIPS);
        }
    };
    return ClippedWmsMapStatisticsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_selection__["a" /* ClippedWmsMapSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_selection__["a" /* ClippedWmsMapSelection */]) === "function" && _b || Object)
], ClippedWmsMapStatisticsComponent.prototype, "selection", void 0);
ClippedWmsMapStatisticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'clipped-wms-map-statistics',
        template: "\n    <table *ngIf=\"statistics\" [ngClass]=\"{'no-data': statistics.count === 0}\">\n        <tbody>\n            <tr><td>Date</td><td>{{statistics.date | date:'longDate'}}</td></tr>\n            <tr *ngIf=\"statistics.count !== 0\" [matTooltip]=\"tooltips['count']\"><td>Count</td><td>{{statistics.count}}</td></tr>\n            <tr *ngIf=\"statistics.count !== 0\" [matTooltip]=\"tooltips['mean']\"><td>Mean</td><td>{{statistics.mean | clippedStatValue:'1.1-1':selection.layer}}</td></tr>\n            <tr *ngIf=\"statistics.count !== 0\" [matTooltip]=\"tooltips['stdDev']\"><td>Std Dev</td><td>{{statistics.stddev | number:'1.1-1'}}</td></tr>\n            <tr *ngIf=\"statistics.count !== 0\" [matTooltip]=\"tooltips['min']\"><td>Min</td><td>{{statistics.min  | clippedStatValue:'1.0-1':selection.layer}}</td></tr>\n            <tr *ngIf=\"statistics.count !== 0\" [matTooltip]=\"tooltips['max']\"><td>Max</td><td>{{statistics.max  | clippedStatValue:'1.0-1':selection.layer}}</td></tr>\n            <tr *ngIf=\"!gdd && statistics.count !== 0\" [matTooltip]=\"tooltips['complete']\"><td>Complete</td><td>{{statistics.percentComplete | number:'1.0-1'}}%</td></tr>\n            <tr><td *ngIf=\"statistics.count === 0 && selection.layer.noDataDisclaimer\" colspan=\"2\" class=\"no-data-disclaimer\">{{selection.layer.noDataDisclaimer}}</td></tr>\n        </tbody>\n    </table>\n    ",
        styles: ["\n        :host {\n            line-height: 12px;\n        }\n        table.no-data {\n            max-width: 250px;\n        }\n        tr td:first-of-type {\n            font-weight: bold;\n            text-align: right;\n            padding-right: 5px;\n        }\n        tr td:first-of-type:after {\n            content: ':';\n        }\n        tr td.no-data-disclaimer {\n            text-align: center;\n        }\n        tr td.no-data-disclaimer:after {\n            content: '';\n        }\n    "],
        providers: [ClippedStatValuePipe]
    })
], ClippedWmsMapStatisticsComponent);

var _a, _b;
//# sourceMappingURL=clipped-wms-map-statistics.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vis-container\">\n    <div class=\"vis-working\" *ngIf=\"selection.working\">\n        <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n    <div class=\"map-wrapper\">\n        <agm-map (mapReady)=\"mapReady($event)\"  [streetViewControl]=\"false\"  [styles]=\"mapStyles\" [scrollwheel]=\"false\"></agm-map>\n        <wms-map-legend *ngIf=\"!thumbnail && selection.legend && selection.data && selection.data.statistics && selection.data.statistics.count !== 0\" [legend]=\"selection.legend\"></wms-map-legend>\n        <clipped-wms-map-statistics *ngIf=\"!thumbnail && selection && selection.data && selection.data.statistics\"\n            [selection]=\"selection\"></clipped-wms-map-statistics>\n    </div>\n    <wms-map-opacity-control *ngIf=\"!thumbnail\" [supportsOpacity]=\"selection.overlay\"></wms-map-opacity-control>\n</div>\n"

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vis-container {\n  display: block;\n  position: relative; }\n  .vis-container agm-map {\n    /*\n        /deep/ allows this rule to ignore then\n        _ngcontent class added by angular (since this element is added by google.)\n        other wise the rule turns into something like\n        agm-map[_ngcontent-c4]   img[src*=usanpn][_ngcontent-c4] { ... }\n        */ }\n    .vis-container agm-map /deep/ img[src*=usanpn] {\n      -ms-interpolation-mode: nearest-neighbor;\n          image-rendering: -webkit-optimize-contrast;\n          image-rendering: pixelated;\n      image-rendering: -moz-crisp-edges; }\n  .vis-container .vis-working {\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    z-index: 2000;\n    text-align: center; }\n    .vis-container .vis-working i {\n      margin-top: 15%; }\n    .vis-container .vis-working mat-progress-spinner {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n\n.map-wrapper {\n  position: relative; }\n  .map-wrapper wms-map-legend /deep/ .gridded-legend {\n    margin-top: 10px;\n    border-bottom: 1px solid #aaa; }\n  @media (min-width: 992px) {\n    .map-wrapper wms-map-legend,\n    .map-wrapper clipped-wms-map-statistics {\n      position: absolute;\n      left: 10px;\n      padding: 8px;\n      border: 1px solid #aaa;\n      background-color: rgba(255, 255, 255, 0.85);\n      border-radius: 5px; }\n    .map-wrapper wms-map-legend {\n      bottom: 25px;\n      width: 60%; }\n      .map-wrapper wms-map-legend /deep/ .gridded-legend {\n        margin-top: 0px;\n        border-bottom: none;\n        width: 100%;\n        height: 125px;\n        border: none; }\n    .map-wrapper clipped-wms-map-statistics {\n      top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClippedWmsMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/map-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClippedWmsMapComponent = (function (_super) {
    __extends(ClippedWmsMapComponent, _super);
    function ClippedWmsMapComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClippedWmsMapComponent.prototype.mapReady = function (map) {
        // TODO should be private.
        this.getMapResolver(map);
    };
    ClippedWmsMapComponent.prototype.reset = function () {
        var _this = this;
        this.getMap().then(function (m) {
            _this.selection.removeFrom(m)
                .then(function () {
                _super.prototype.reset.call(_this);
            });
        });
    };
    ClippedWmsMapComponent.prototype.update = function () {
        var _this = this;
        this.resize();
        this.getMap().then(function (m) {
            _this.selection.removeFrom(m)
                .then(function () {
                _this.selection.addTo(m);
            });
        });
    };
    ClippedWmsMapComponent.prototype.resize = function () {
        var _this = this;
        _super.prototype.resize.call(this);
        this.getMap().then(function (m) { return _this.selection.resizeMap(m); });
    };
    return ClippedWmsMapComponent;
}(__WEBPACK_IMPORTED_MODULE_1__map_visualization_base_component__["a" /* MapVisualizationBaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_selection__["a" /* ClippedWmsMapSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_selection__["a" /* ClippedWmsMapSelection */]) === "function" && _a || Object)
], ClippedWmsMapComponent.prototype, "selection", void 0);
ClippedWmsMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'clipped-wms-map',
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map.component.scss")]
    })
], ClippedWmsMapComponent);

var _a;
//# sourceMappingURL=clipped-wms-map.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clipped_wms_map_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__clipped_wms_map_selection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clipped_wms_map_selection_factory__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-selection-factory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__clipped_wms_map_selection_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_control_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-control.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__clipped_wms_map_control_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clipped_wms_map_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__clipped_wms_map_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clipped_wms_map_statistics_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/clipped-wms-map-statistics.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__clipped_wms_map_statistics_component__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__clipped_wms_map_statistics_component__["a"]; });
/*
it would be ideal to do this and simplify the parent module which would also
allow for each visualization to be imported and used independent of its siblings
but have to ferret out all the dependencies of each sub-module and
include them i.e. all the angular material, etc. so probably an activity for a later date.

import {NgModule} from '@angular/core';

import {ClippedWmsMapSelectionFactory} from './clipped-wms-map-selection-factory';
import {ClippedWmsMapControl} from './clipped-wms-map-control.component';
import {ClippedWmsMapComponent} from './clipped-wms-map.component';
import {ClippedWmsMapStatisticsComponent} from './clipped-wms-map-statistics.component';

@NgModule({
    imports:[

    ],
    declarations: [
        ClippedWmsMapControl,
        ClippedWmsMapComponent,
        ClippedWmsMapStatisticsComponent
    ],
    exports: [
        ClippedWmsMapControl,
        ClippedWmsMapComponent
    ],
    providers:[
        ClippedWmsMapSelectionFactory
    ]
})
export class ClippedWmsMapVisModule {}
*/





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/common-controls/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__species_phenophase_input_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/common-controls/species-phenophase-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__species_phenophase_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__year_range_input_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/common-controls/year-range-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__year_range_input_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/common-controls/species-phenophase-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesPhenophaseInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var COLORS = [
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#222299', '#c51b8a', '#8c564b', '#637939', '#843c39',
    '#5254a3', '#636363',
    '#bcbd22', '#7b4173', '#e7ba52', '#222299', '#f03b20', '#1b9e77', '#e377c2', '#ef8a62', '#91cf60', '#9467bd'
];
var SpeciesPhenophaseInputComponent = (function () {
    function SpeciesPhenophaseInputComponent(speciesService, speciesTitle) {
        var _this = this;
        this.speciesService = speciesService;
        this.speciesTitle = speciesTitle;
        this.required = true;
        this.disabled = false;
        this.speciesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSpeciesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.phenophaseChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPhenophaseChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.gatherColor = false;
        this.colorChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onColorChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.colorList = COLORS;
        this.requiredValidator = function (c) {
            if (_this.required && !c.disabled && !c.value) {
                return {
                    required: true
                };
            }
            return null;
        };
        this.speciesControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, this.requiredValidator);
        this.colorControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, this.requiredValidator);
        this.phenophaseList = [];
        this.speciesParams = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.filteredSpecies = this.speciesControl.valueChanges
            .debounceTime(500)
            .filter(function (s) { return typeof (s) === 'string'; })
            .map(function (s) {
            return s && _this.speciesList ?
                _this.filterSpecies(s) :
                _this.speciesList ? _this.speciesList.slice() : [];
        });
        this.isIE = !!Object(__WEBPACK_IMPORTED_MODULE_8__common__["p" /* detectIE */])();
    }
    SpeciesPhenophaseInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speciesParams
            .subscribe(function (params) {
            _this.speciesList = undefined;
            // load up the available species
            _this.speciesService.getAllSpecies(params)
                .then(function (species) {
                _this.speciesList = species.sort(function (a, b) {
                    if (a.number_observations < b.number_observations) {
                        return 1;
                    }
                    if (a.number_observations > b.number_observations) {
                        return -1;
                    }
                    return 0;
                });
            });
        });
    };
    SpeciesPhenophaseInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes.disabled) {
            if (changes.disabled.currentValue) {
                this.speciesControl.disable();
                this.colorControl.disable();
            }
            else {
                this.speciesControl.enable();
                this.colorControl.enable();
            }
        }
    };
    SpeciesPhenophaseInputComponent.prototype.ngDoCheck = function () {
        if (this.selection) {
            var params_1 = {}, paramsS = void 0;
            (this.selection.networkIds || []).forEach(function (id, i) { return params_1["network_id[" + i + "]"] = "" + id; });
            (this.selection.stationIds || []).forEach(function (id, i) { return params_1["station_ids[" + i + "]"] = "" + id; });
            paramsS = JSON.stringify(params_1);
            if (paramsS !== this.lastSpeciesParams) {
                this.lastSpeciesParams = paramsS;
                this.speciesParams.next(params_1);
            }
        }
    };
    // this kicks speciesControl.valueChanges to display a list of
    // all species on focus
    SpeciesPhenophaseInputComponent.prototype.speciesFocus = function () {
        if (!this.isIE && this.speciesList) {
            this.speciesControl.setValue(' ');
        }
    };
    SpeciesPhenophaseInputComponent.prototype.filterSpecies = function (s) {
        var _this = this;
        s = s.trim().toLowerCase();
        return s !== '' ?
            (this.speciesList || []).filter(function (sp) {
                var title = _this.speciesTitle.transform(sp).toLowerCase();
                ;
                return title.indexOf(s) !== -1;
            }) : (this.speciesList || []);
    };
    SpeciesPhenophaseInputComponent.prototype.displayPhenophase = function (p) {
        return p ? p.phenophase_name : p;
    };
    Object.defineProperty(SpeciesPhenophaseInputComponent.prototype, "species", {
        get: function () {
            return this.speciesValue;
        },
        set: function (s) {
            var _this = this;
            if (!s || typeof (s) === 'object') {
                if (s !== this.speciesValue) {
                    var oldValue = this.speciesValue;
                    this.speciesChange.emit(this.speciesValue = s);
                    this.onSpeciesChange.emit({
                        oldValue: oldValue,
                        newValue: this.speciesValue
                    });
                    this.phenophase = undefined;
                    this.phenophaseList = [];
                    if (s) {
                        this.speciesService.getPhenophases(s, this.startYear, this.endYear)
                            .then(function (phenophases) {
                            _this.phenophaseList = phenophases;
                            _this.phenophase = _this.phenophaseList[0];
                        });
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeciesPhenophaseInputComponent.prototype, "phenophase", {
        get: function () {
            return this.phenophaseValue;
        },
        set: function (p) {
            if (p !== this.phenophaseValue) {
                var oldValue = this.phenophaseValue;
                this.phenophaseChange.emit(this.phenophaseValue = p);
                this.onPhenophaseChange.emit({
                    oldValue: oldValue,
                    newValue: this.phenophaseValue
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeciesPhenophaseInputComponent.prototype, "color", {
        get: function () {
            return this.colorValue;
        },
        set: function (c) {
            if (c !== this.colorValue) {
                var oldValue = this.colorValue;
                this.colorChange.emit(this.colorValue = c);
                this.onColorChange.emit({
                    oldValue: oldValue,
                    newValue: this.colorValue
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    return SpeciesPhenophaseInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], SpeciesPhenophaseInputComponent.prototype, "required", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], SpeciesPhenophaseInputComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], SpeciesPhenophaseInputComponent.prototype, "startYear", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], SpeciesPhenophaseInputComponent.prototype, "endYear", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__vis_selection__["h" /* VisSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__vis_selection__["h" /* VisSelection */]) === "function" && _a || Object)
], SpeciesPhenophaseInputComponent.prototype, "selection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SpeciesPhenophaseInputComponent.prototype, "speciesChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SpeciesPhenophaseInputComponent.prototype, "onSpeciesChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SpeciesPhenophaseInputComponent.prototype, "phenophaseChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SpeciesPhenophaseInputComponent.prototype, "onPhenophaseChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], SpeciesPhenophaseInputComponent.prototype, "gatherColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SpeciesPhenophaseInputComponent.prototype, "colorChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SpeciesPhenophaseInputComponent.prototype, "onColorChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('species'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__common__["l" /* Species */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common__["l" /* Species */]) === "function" && _b || Object),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__common__["l" /* Species */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common__["l" /* Species */]) === "function" && _c || Object])
], SpeciesPhenophaseInputComponent.prototype, "species", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('phenophase'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__common__["k" /* Phenophase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common__["k" /* Phenophase */]) === "function" && _d || Object),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__common__["k" /* Phenophase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common__["k" /* Phenophase */]) === "function" && _e || Object])
], SpeciesPhenophaseInputComponent.prototype, "phenophase", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('color'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpeciesPhenophaseInputComponent.prototype, "color", null);
SpeciesPhenophaseInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'species-phenophase-input',
        template: "\n    <mat-form-field class=\"species-input\">\n        <input matInput [placeholder]=\"'Species'+(required ? ' *':'')\" aria-label=\"Species\"\n               [matAutocomplete]=\"sp\"\n               [formControl]=\"speciesControl\" [(ngModel)]=\"species\" (focus)=\"speciesFocus()\" />\n        <mat-autocomplete #sp=\"matAutocomplete\" [displayWith]=\"speciesTitle.transform\">\n          <mat-option *ngFor=\"let s of filteredSpecies | async\" [value]=\"s\">\n            {{s | speciesTitle}} ({{s.number_observations}})\n          </mat-option>\n        </mat-autocomplete>\n        <mat-error *ngIf=\"speciesControl.errors && speciesControl.errors.required\">Species is required</mat-error>\n        <mat-progress-bar *ngIf=\"!speciesList || !speciesList.length\" mode=\"query\"></mat-progress-bar>\n    </mat-form-field>\n\n    <mat-form-field class=\"phenophase-input\">\n        <mat-select placeholder=\"Phenophase\" [(ngModel)]=\"phenophase\" [disabled]=\"disabled || !phenophaseList.length\">\n          <mat-option *ngFor=\"let p of phenophaseList\" [value]=\"p\">{{p.phenophase_name}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"gatherColor\" class=\"color-input\">\n        <mat-select  [placeholder]=\"'Color'+(required ? ' *':'')\" [(ngModel)]=\"color\" [formControl]=\"colorControl\">\n          <mat-select-trigger><div class=\"color-swatch\" [ngStyle]=\"{'background-color':color}\"></div></mat-select-trigger>\n          <mat-option *ngFor=\"let c of colorList\" [value]=\"c\"><div class=\"color-swatch\" [ngStyle]=\"{'background-color':c}\"></div></mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"colorControl.errors && colorControl.errors.required\">Color is required</mat-error>\n    </mat-form-field>\n    ",
        styles: ["\n        .species-input {\n            width: 200px;\n        }\n        .phenophase-input {\n            width: 250px;\n        }\n        .color-swatch {\n            display: inline-block;\n            width: 20px;\n            height: 20px;\n        }\n        .color-input {\n            width: 60px;\n        }\n        .color-input /deep/ .mat-select-trigger {\n            //border: 1px solid red;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__common__["m" /* SpeciesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common__["m" /* SpeciesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__common__["n" /* SpeciesTitlePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common__["n" /* SpeciesTitlePipe */]) === "function" && _g || Object])
], SpeciesPhenophaseInputComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=species-phenophase-input.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/common-controls/year-range-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearRangeInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YearRangeInputComponent = (function () {
    function YearRangeInputComponent() {
        this.startChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onStartChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.endChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEndChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.maxSpan = 10;
        this.validStarts = (function () {
            var max = (new Date()).getFullYear(), current = 1900, years = [];
            while (current < max) {
                years.push(current++);
            }
            return years;
        })();
        this.validEnds = [];
    }
    Object.defineProperty(YearRangeInputComponent.prototype, "start", {
        get: function () {
            return this.startValue;
        },
        set: function (s) {
            if (typeof (s) === 'string') {
                s = +s;
            }
            if (s !== this.startValue) {
                var oldValue = this.startValue;
                this.startChange.emit(this.startValue = s);
                this.onStartChange.emit({
                    oldValue: oldValue,
                    newValue: this.startValue
                });
                if (s) {
                    var thisYear = (new Date()).getFullYear(), current = s + 1, max = current + this.maxSpan, ends = [];
                    if (max > thisYear) {
                        max = thisYear + 1;
                    }
                    while (current < max) {
                        ends.push(current++);
                    }
                    this.validEnds = ends;
                    if (this.end > max) {
                        this.end = undefined;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearRangeInputComponent.prototype, "end", {
        get: function () {
            return this.endValue;
        },
        set: function (e) {
            if (typeof (e) === 'string') {
                e = +e;
            }
            if (e !== this.endValue) {
                var oldValue = this.endValue;
                this.endChange.emit(this.endValue = e);
                this.onEndChange.emit({
                    oldValue: oldValue,
                    newValue: this.endValue
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    return YearRangeInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], YearRangeInputComponent.prototype, "startChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], YearRangeInputComponent.prototype, "onStartChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], YearRangeInputComponent.prototype, "endChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], YearRangeInputComponent.prototype, "onEndChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], YearRangeInputComponent.prototype, "maxSpan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], YearRangeInputComponent.prototype, "start", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], YearRangeInputComponent.prototype, "end", null);
YearRangeInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'year-range-input',
        template: "\n    <mat-form-field class=\"start-year\">\n        <mat-select placeholder=\"Start year\" [(ngModel)]=\"start\">\n            <mat-option *ngFor=\"let y of validStarts\" [value]=\"y\">{{y}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"end-year\">\n        <mat-select placeholder=\"End year\" [(ngModel)]=\"end\" [disabled]=\"!start\">\n            <mat-option *ngFor=\"let y of validEnds\" [value]=\"y\">{{y}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    ",
        styles: ["\n        .start-year,\n        .end-year {\n            width: 75px;\n        }\n    "]
    })
], YearRangeInputComponent);

//# sourceMappingURL=year-range-input.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VisualizationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualization_download_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/visualization-download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scatter_plot__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activity_curves__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__observer_activity__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__observation_frequency__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__svg_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__map_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/map-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__visualization_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/visualization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__visualization_selection_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/visualization-selection-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_controls__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/common-controls/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gridded__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* unused harmony reexport VisSelection */
/* unused harmony reexport NetworkAwareVisSelection */
/* unused harmony reexport StationAwareVisSelection */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_14__visualization_selection_factory_service__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["e"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
NOTE: this is currently one BIG module that includes all the visualizations.
that's ok generally but it would be better to have each visualization be its own
module that deals with its own dependencies so that they could be imported individually
into an application (and simplify this module's imports).

see the commented out start of such a module in ./clipped-wms-map

probably should be an activity for a later date, or if time permits.
*/








//import {ClippedWmsMapVisModule} from './clipped-wms-map';















var VisualizationsModule = (function () {
    function VisualizationsModule() {
    }
    return VisualizationsModule;
}());
VisualizationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["n" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["h" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["o" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["l" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material__["q" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_19__agm_core__["a" /* AgmCoreModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_21__common__["h" /* NpnCommonModule */], __WEBPACK_IMPORTED_MODULE_22__gridded__["b" /* NpnGriddedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__visualization_base_component__["a" /* VisualizationBaseComponent */], __WEBPACK_IMPORTED_MODULE_11__svg_visualization_base_component__["b" /* SvgVisualizationBaseComponent */], __WEBPACK_IMPORTED_MODULE_12__map_visualization_base_component__["a" /* MapVisualizationBaseComponent */],
            __WEBPACK_IMPORTED_MODULE_4__scatter_plot__["a" /* ScatterPlotComponent */], __WEBPACK_IMPORTED_MODULE_4__scatter_plot__["b" /* ScatterPlotControls */],
            __WEBPACK_IMPORTED_MODULE_5__calendar__["a" /* CalendarComponent */], __WEBPACK_IMPORTED_MODULE_5__calendar__["b" /* CalendarControlComponent */],
            __WEBPACK_IMPORTED_MODULE_6__activity_curves__["a" /* ActivityCurvesComponent */], __WEBPACK_IMPORTED_MODULE_6__activity_curves__["e" /* CurveControlComponent */], __WEBPACK_IMPORTED_MODULE_6__activity_curves__["b" /* ActivityCurvesControlComponent */],
            __WEBPACK_IMPORTED_MODULE_8__observer_activity__["a" /* ObserverActivityComponent */], __WEBPACK_IMPORTED_MODULE_8__observer_activity__["b" /* ObserverActivityControl */],
            __WEBPACK_IMPORTED_MODULE_9__observation_frequency__["a" /* ObservationFrequencyComponent */], __WEBPACK_IMPORTED_MODULE_9__observation_frequency__["b" /* ObservationFrequencyControl */], __WEBPACK_IMPORTED_MODULE_9__observation_frequency__["e" /* ObvervationFrequencyStationControlComponent */] /* not exported private */,
            __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["b" /* ClippedWmsMapComponent */], __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["c" /* ClippedWmsMapControl */], __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["f" /* ClippedWmsMapStatisticsComponent */], __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["a" /* ClippedStatValuePipe */] /* not exported */,
            __WEBPACK_IMPORTED_MODULE_3__visualization_download_component__["a" /* VisualizationDownloadComponent */],
            __WEBPACK_IMPORTED_MODULE_13__visualization_component__["a" /* VisualizationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__common_controls__["a" /* SpeciesPhenophaseInputComponent */],
            __WEBPACK_IMPORTED_MODULE_15__common_controls__["b" /* YearRangeInputComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__scatter_plot__["a" /* ScatterPlotComponent */],
            __WEBPACK_IMPORTED_MODULE_4__scatter_plot__["b" /* ScatterPlotControls */],
            __WEBPACK_IMPORTED_MODULE_6__activity_curves__["a" /* ActivityCurvesComponent */], __WEBPACK_IMPORTED_MODULE_6__activity_curves__["b" /* ActivityCurvesControlComponent */],
            __WEBPACK_IMPORTED_MODULE_8__observer_activity__["a" /* ObserverActivityComponent */], __WEBPACK_IMPORTED_MODULE_8__observer_activity__["b" /* ObserverActivityControl */],
            __WEBPACK_IMPORTED_MODULE_9__observation_frequency__["a" /* ObservationFrequencyComponent */], __WEBPACK_IMPORTED_MODULE_9__observation_frequency__["b" /* ObservationFrequencyControl */],
            __WEBPACK_IMPORTED_MODULE_5__calendar__["a" /* CalendarComponent */], __WEBPACK_IMPORTED_MODULE_5__calendar__["b" /* CalendarControlComponent */],
            __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["b" /* ClippedWmsMapComponent */], __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["c" /* ClippedWmsMapControl */], __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["f" /* ClippedWmsMapStatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__visualization_component__["a" /* VisualizationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__common_controls__["a" /* SpeciesPhenophaseInputComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */],
            // can inject a specific type of factory
            __WEBPACK_IMPORTED_MODULE_4__scatter_plot__["d" /* ScatterPlotSelectionFactory */],
            __WEBPACK_IMPORTED_MODULE_5__calendar__["d" /* CalendarSelectionFactory */],
            __WEBPACK_IMPORTED_MODULE_7__clipped_wms_map__["e" /* ClippedWmsMapSelectionFactory */],
            __WEBPACK_IMPORTED_MODULE_6__activity_curves__["d" /* ActivityCurvesSelectionFactory */],
            __WEBPACK_IMPORTED_MODULE_8__observer_activity__["d" /* ObserverActivitySelectionFactory */],
            __WEBPACK_IMPORTED_MODULE_9__observation_frequency__["d" /* ObservationFrequencySelectionFactory */],
            // OR one factory to rule them all
            __WEBPACK_IMPORTED_MODULE_14__visualization_selection_factory_service__["a" /* VisualizationSelectionFactory */]
        ]
    })
], VisualizationsModule);









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/map-visualization-base.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vis-container\">\n    <div class=\"vis-working\" *ngIf=\"selection.working\">\n        <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n    <agm-map (mapReady)=\"mapReady($event)\" [streetViewControl]=\"false\" [styles]=\"mapStyles\" [scrollwheel]=\"false\"></agm-map>\n</div>\n"

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/map-visualization-base.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vis-container {\n  display: block;\n  position: relative; }\n  .vis-container agm-map {\n    /*\n        /deep/ allows this rule to ignore then\n        _ngcontent class added by angular (since this element is added by google.)\n        other wise the rule turns into something like\n        agm-map[_ngcontent-c4]   img[src*=usanpn][_ngcontent-c4] { ... }\n        */ }\n    .vis-container agm-map /deep/ img[src*=usanpn] {\n      -ms-interpolation-mode: nearest-neighbor;\n          image-rendering: -webkit-optimize-contrast;\n          image-rendering: pixelated;\n      image-rendering: -moz-crisp-edges; }\n  .vis-container .vis-working {\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    z-index: 2000;\n    text-align: center; }\n    .vis-container .vis-working i {\n      margin-top: 15%; }\n    .vis-container .vis-working mat-progress-spinner {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/map-visualization-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapVisualizationBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/visualization-base.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
IMPORTANT: see not in VisualizationBaseComponent
*/
var MapVisualizationBaseComponent = (function (_super) {
    __extends(MapVisualizationBaseComponent, _super);
    function MapVisualizationBaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.latitude = 38.8402805;
        _this.longitude = -97.61142369999999;
        _this.zoom = 4;
        _this.getMapPromise = new Promise(function (resolve) {
            _this.getMapResolver = resolve;
        });
        _this.mapStyles = [{
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }, {
                featureType: 'transit.station',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'poi.park',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'landscape',
                stylers: [{ visibility: 'off' }]
            }];
        return _this;
    }
    MapVisualizationBaseComponent.prototype.mapReady = function (map) {
        var _this = this;
        map.addListener('resize', function () {
            console.log('resize happened');
            console.log('panning to center');
            map.setZoom(3);
            setTimeout(function () {
                map.panTo(new google.maps.LatLng(_this.latitude, _this.longitude));
                map.setZoom(_this.zoom);
            }, 500);
        });
        this.getMapResolver(map);
    };
    MapVisualizationBaseComponent.prototype.getMap = function () {
        return this.getMapPromise;
    };
    MapVisualizationBaseComponent.prototype.resize = function () {
        var _this = this;
        this.getMap().then(function (map) {
            var sizing = _this.getSizeInfo(), root = _this.rootElement.nativeElement, mapElm = root.querySelector('agm-map');
            mapElm.style.width = sizing.width + "px";
            mapElm.style.height = sizing.height + "px";
            google.maps.event.trigger(map, 'resize');
        });
    };
    MapVisualizationBaseComponent.prototype.reset = function () {
        var _this = this;
        this.getMap().then(function (map) {
            console.log('Map reset', map);
            map.panTo(new google.maps.LatLng(_this.latitude, _this.longitude));
            map.setZoom(_this.zoom);
        });
    };
    MapVisualizationBaseComponent.prototype.redraw = function () {
        this.getMap().then(function (map) {
            console.log('Map redraw', map);
        });
    };
    MapVisualizationBaseComponent.prototype.update = function () {
        this.resize();
        this.getMap().then(function (map) {
            console.log('Map update', map);
        });
    };
    return MapVisualizationBaseComponent;
}(__WEBPACK_IMPORTED_MODULE_1__visualization_base_component__["a" /* VisualizationBaseComponent */]));
MapVisualizationBaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'map-visualization-base',
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/map-visualization-base.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/map-visualization-base.component.scss")]
    })
], MapVisualizationBaseComponent);

//# sourceMappingURL=map-visualization-base.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-date-vis-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ObservationDatePlot */
/* unused harmony export ObservationDataDataPoint */
/* unused harmony export ObservationDateData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationDateVisSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObservationDatePlot = (function () {
    function ObservationDatePlot() {
    }
    return ObservationDatePlot;
}());

var ObservationDataDataPoint = (function () {
    function ObservationDataDataPoint() {
    }
    return ObservationDataDataPoint;
}());

var ObservationDateData = (function () {
    function ObservationDateData() {
        this.labels = [];
        this.data = [];
    }
    return ObservationDateData;
}());

var ObservationDateVisSelection = (function (_super) {
    __extends(ObservationDateVisSelection, _super);
    function ObservationDateVisSelection(http, cacheService, speciesTitle, config) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.cacheService = cacheService;
        _this.speciesTitle = speciesTitle;
        _this.config = config;
        _this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        _this.requestSrc = 'observation-date-vis-selection';
        _this.negative = false;
        _this.negativeColor = '#aaa';
        _this.years = [];
        _this.plots = [];
        return _this;
    }
    ObservationDateVisSelection.prototype.isValid = function () {
        return this.years && this.years.length && this.validPlots.length > 0;
    };
    Object.defineProperty(ObservationDateVisSelection.prototype, "validPlots", {
        get: function () {
            return (this.plots || []).filter(function (p) {
                return p.color && p.species && p.phenophase;
            });
        },
        enumerable: true,
        configurable: true
    });
    ObservationDateVisSelection.prototype.toURLSearchParams = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
        params.set('request_src', this.requestSrc);
        this.years.forEach(function (y, i) {
            params.set("year[" + i + "]", "" + y);
        });
        this.validPlots.forEach(function (plot, i) {
            params.set("species_id[" + i + "]", "" + plot.species.species_id);
            params.set("phenophase_id[" + i + "]", "" + plot.phenophase.phenophase_id);
        });
        this.addNetworkParams(params);
        return params;
    };
    ObservationDateVisSelection.prototype.postProcessData = function (data) {
        var _this = this;
        if (!data) {
            return null;
        }
        var response = new ObservationDateData(), vPlots = this.validPlots, y = (vPlots.length * this.years.length) - 1, addDoys = function (doys, color) {
            doys.forEach(function (doy) {
                response.data.push({
                    y: y,
                    x: doy,
                    color: color
                });
            });
        }, speciesMap = data.reduce(function (map, species) {
            map[species.species_id] = species;
            // first time translate phenophases array to a map.
            if (Array.isArray(species.phenophases)) {
                species.phenophases = species.phenophases.reduce(function (m, pp) {
                    m[pp.phenophase_id] = pp;
                    return m;
                }, {});
            }
            return map;
        }, {});
        console.log('speciesMap', speciesMap);
        vPlots.forEach(function (plot) {
            var species = speciesMap[plot.species.species_id], phenophase = species.phenophases[plot.phenophase.phenophase_id];
            _this.years.forEach(function (year) {
                if (phenophase && phenophase.years && phenophase.years[year]) {
                    if (_this.negative) {
                        console.debug('year negative', y, year, species.common_name, phenophase, phenophase.years[year].negative);
                        addDoys(phenophase.years[year].negative, _this.negativeColor);
                    }
                    console.debug('year positive', y, year, species.common_name, phenophase, phenophase.years[year].positive);
                    addDoys(phenophase.years[year].positive, plot.color);
                }
                response.labels.splice(0, 0, _this.speciesTitle.transform(plot.species) + '/' + plot.phenophase.phenophase_name + ' (' + year + ')');
                console.debug('y of ' + y + ' is for ' + response.labels[0]);
                y--;
            });
        });
        console.log('observation data', response);
        return response;
    };
    ObservationDateVisSelection.prototype.getData = function () {
        var _this = this;
        if (!this.isValid()) {
            return Promise.reject(this.INVALID_SELECTION);
        }
        var params = this.toURLSearchParams(), url = this.config.apiRoot + "/npn_portal/observations/getObservationDates.json", cacheKey = {
            u: url,
            params: params.toString()
        }, data = this.cacheService.get(cacheKey);
        if (data) {
            return Promise.resolve(data);
        }
        else {
            this.working = true;
            return new Promise(function (resolve) {
                _this.http.post(url, params.toString(), { headers: _this.headers })
                    .toPromise()
                    .then(function (response) {
                    var arr = response.json();
                    _this.cacheService.set(cacheKey, arr);
                    _this.working = false;
                    resolve(arr);
                })
                    .catch(_this.handleError);
            });
        }
    };
    return ObservationDateVisSelection;
}(__WEBPACK_IMPORTED_MODULE_2__vis_selection__["g" /* StationAwareVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Boolean)
], ObservationDateVisSelection.prototype, "negative", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ObservationDateVisSelection.prototype, "negativeColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Array)
], ObservationDateVisSelection.prototype, "years", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Array)
], ObservationDateVisSelection.prototype, "plots", void 0);
//# sourceMappingURL=observation-date-vis-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-frequency/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observation_frequency_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-selection.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__observation_frequency_selection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observation_frequency_selection_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-selection-factory.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__observation_frequency_selection_factory_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observation_frequency_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__observation_frequency_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__observation_frequency_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observation_frequency_control_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-control.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__observation_frequency_control_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationFrequencyControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observation_frequency_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObservationFrequencyControl = (function () {
    function ObservationFrequencyControl() {
        // TODO what are the valid years?
        this.validYears = (function () {
            var max = (new Date()).getFullYear() + 1, current = 2000, years = [];
            while (current < max) {
                years.push(current++);
            }
            return years.reverse();
        })();
    }
    ObservationFrequencyControl.prototype.ngOnInit = function () {
    };
    return ObservationFrequencyControl;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__observation_frequency_selection__["a" /* ObservationFrequencySelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__observation_frequency_selection__["a" /* ObservationFrequencySelection */]) === "function" && _a || Object)
], ObservationFrequencyControl.prototype, "selection", void 0);
ObservationFrequencyControl = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'observation-frequency-control',
        template: "\n    <mat-form-field class=\"year-input\">\n        <mat-select placeholder=\"Year *\" [(ngModel)]=\"selection.year\" (change)=\"selection.update()\">\n            <mat-option *ngFor=\"let y of validYears\" [value]=\"y\">{{y}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    ",
        styles: ["\n        .year-input {\n            width: 65px;\n        }\n    "]
    })
], ObservationFrequencyControl);

var _a;
//# sourceMappingURL=observation-frequency-control.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-selection-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationFrequencySelectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observation_frequency_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObservationFrequencySelectionFactory = (function () {
    function ObservationFrequencySelectionFactory(serviceUtils, networkService) {
        this.serviceUtils = serviceUtils;
        this.networkService = networkService;
    }
    ObservationFrequencySelectionFactory.prototype.newSelection = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__observation_frequency_selection__["a" /* ObservationFrequencySelection */](this.serviceUtils, this.networkService);
    };
    return ObservationFrequencySelectionFactory;
}());
ObservationFrequencySelectionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common__["j" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["j" /* NpnServiceUtils */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common__["g" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["g" /* NetworkService */]) === "function" && _b || Object])
], ObservationFrequencySelectionFactory);

var _a, _b;
//# sourceMappingURL=observation-frequency-selection-factory.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationFrequencySelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObservationFrequencySelection = (function (_super) {
    __extends(ObservationFrequencySelection, _super);
    function ObservationFrequencySelection(serviceUtils, networkService) {
        var _this = _super.call(this) || this;
        _this.serviceUtils = serviceUtils;
        _this.networkService = networkService;
        _this.$class = 'ObservationFrequencySelection';
        _this.dataCnt = 0;
        return _this;
    }
    Object.defineProperty(ObservationFrequencySelection.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (y) {
            this._year = y;
            delete this.defaultStation; // reset default station if there is one.
        },
        enumerable: true,
        configurable: true
    });
    ObservationFrequencySelection.prototype.isValid = function () {
        return !!this.year && this.networkIds.length === 1;
    };
    ObservationFrequencySelection.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.serviceUtils.apiUrl('/npn_portal/networks/getSiteVisitFrequency.json'), params = {
                year: _this.year,
                network_id: _this.networkIds[0]
            };
            _this.working = true;
            _this.serviceUtils.cachedGet(url, params)
                .then(function (data) {
                _this.working = false;
                resolve(data);
            })
                .catch(reject);
        });
    };
    return ObservationFrequencySelection;
}(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["c" /* NetworkAwareVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ObservationFrequencySelection.prototype, "$class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], ObservationFrequencySelection.prototype, "_year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], ObservationFrequencySelection.prototype, "defaultStation", void 0);
//# sourceMappingURL=observation-frequency-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vis-container\">\n    <div class=\"vis-working\" *ngIf=\"selection.working\">\n        <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n    <div class=\"chart-container\">\n        <visualization-download *ngIf=\"!thumbnail && !mobileMode\" svgWrapperId=\"{{id}}\" filename=\"{{filename}}\"></visualization-download>\n        <div [class]=\"clazz\" id=\"{{id}}\" [hidden]=\"thumbnailSrc\"><svg class=\"svg-visualization\"></svg></div>\n        <div [hidden]=\"!thumbnailSrc\">\n            <canvas class=\"thumbnail-canvas\" style=\"display: none;\"></canvas>\n            <img class=\"thumbnail-image\" />\n        </div>\n    </div>\n    <observation-frequency-station-control *ngIf=\"!thumbnail && stations && stations.length > 1\" [stations]=\"stations\" [(station)]=\"station\" (onStationChange)=\"redraw()\"></observation-frequency-station-control>\n    <div *ngIf=\"stations && stations.length > 1 && selection.editMode\" class=\"vis-disclaimer\">Note: The station selected here will be the initial station shown for visitors.</div>\n</div>\n<!--pre *ngIf=\"record\">{{record | json}}</pre-->\n"

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationFrequencyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ObvervationFrequencyStationControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observation_frequency_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TITLE = 'Site visits by month';
var ObservationFrequencyComponent = (function (_super) {
    __extends(ObservationFrequencyComponent, _super);
    function ObservationFrequencyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filename = 'observation-frequency.png';
        _this.margins = __assign({}, __WEBPACK_IMPORTED_MODULE_1__svg_visualization_base_component__["a" /* DEFAULT_MARGINS */], { top: 80, left: 80 });
        return _this;
    }
    Object.defineProperty(ObservationFrequencyComponent.prototype, "station", {
        get: function () {
            return this._station;
        },
        set: function (s) {
            this._station = s;
            if (this.selection.editMode) {
                delete this.selection.defaultStation;
                if (this._station) {
                    this.selection.defaultStation = this._station.station_id;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ObservationFrequencyComponent.prototype.getMonthFormat = function () {
        if (this.sizing && this.sizing.width < 800) {
            return '%b';
        }
        return '%B';
    };
    ObservationFrequencyComponent.prototype.reset = function () {
        console.debug('ObservationFrequencyComponent.reset');
        _super.prototype.reset.call(this);
        var chart = this.chart, sizing = this.sizing, d3_month_fmt = __WEBPACK_IMPORTED_MODULE_5_d3__["r" /* timeFormat */](this.getMonthFormat()), fontSize = this.baseFontSize();
        this.title = chart.append('g')
            .attr('class', 'chart-title')
            .append('text')
            .attr('y', '0')
            .attr('dy', '-3em')
            .attr('x', '0')
            .style('text-anchor', 'start')
            .style('font-size', '18px');
        this.x = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["a" /* scaleBand */])()
            .rangeRound([0, sizing.width])
            .padding(0.05)
            .domain(__WEBPACK_IMPORTED_MODULE_5_d3__["n" /* range */](0, 12));
        this.xAxis = Object(__WEBPACK_IMPORTED_MODULE_3_d3_axis__["a" /* axisBottom */])(this.x).tickFormat(function (i) { return d3_month_fmt(new Date(1900, i)); });
        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + sizing.height + ')')
            .call(this.xAxis);
        this.y = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["b" /* scaleLinear */])().range([sizing.height, 0]).domain([0, 20]); // just a default domain
        this.yAxis = Object(__WEBPACK_IMPORTED_MODULE_3_d3_axis__["b" /* axisLeft */])(this.y).tickFormat(__WEBPACK_IMPORTED_MODULE_5_d3__["k" /* format */]('.0d'));
        chart.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('fill', '#000') // somehow parent g has fill="none"
            .attr('transform', 'rotate(-90)')
            .attr('y', '0')
            .attr('dy', '-3em')
            .attr('x', -1 * (sizing.height / 2)) // looks odd but to move in the Y we need to change X because of transform
            .style('text-anchor', 'middle')
            .text('Site visits');
        this.commonUpdates();
    };
    ObservationFrequencyComponent.prototype.update = function () {
        var _this = this;
        console.debug('ObservationFrequencyComponent.update');
        this.reset();
        delete this.data;
        delete this.stations;
        delete this.station;
        this.selection.getData()
            .then(function (data) {
            _this.data = data;
            _this.stations = data.stations;
            _this.redraw();
        })
            .catch(this.handleError);
    };
    ObservationFrequencyComponent.prototype.redrawSvg = function () {
        var _this = this;
        console.debug('ObservationFrequencyComponent.redrawSvg:data', this.data);
        if (!this.stations || !this.stations.length) {
            return;
        }
        if (!this.station) {
            if (this.selection.defaultStation) {
                this.station = this.stations.reduce(function (found, s) {
                    return found || (s.station_id === _this.selection.defaultStation ? s : undefined);
                }, undefined);
            }
            if (!this.station) {
                this.station = this.stations[0];
            }
        }
        this.redrawStation();
        this.commonUpdates();
    };
    ObservationFrequencyComponent.prototype.redrawStation = function () {
        var _this = this;
        this.title.text(TITLE + ", \"TODO: Refuge Name\", " + this.selection.year);
        if (!this.station) {
            return;
        }
        var station = this.station;
        console.debug('ObservationFrequencyComponent.redrawStation:station', station);
        if (!station) {
            return;
        }
        var sizing = this.sizing, bars = station.months.slice(), total = bars.reduce(function (sum, d) { return sum + d; }, 0), max = bars.reduce(function (max, d) { return (d > max) ? d : max; }, 0);
        this.title.text(TITLE + " (" + this.selection.year + ") \"" + station.station_name + "\" Total: " + total);
        console.debug('ObservationFrequencyComponent.redrawStation:bars', bars);
        // update x axis with months+total
        this.x.domain(__WEBPACK_IMPORTED_MODULE_5_d3__["n" /* range */](0, bars.length));
        this.chart.selectAll('g .x.axis').call(this.xAxis);
        // update y axis domain
        this.y.domain([0, max]);
        this.yAxis.ticks(max < 11 ? max : 10); // at most 10 ticks
        this.chart.selectAll('g .y.axis').call(this.yAxis);
        // update bars
        this.chart.selectAll('g .bars').remove();
        this.chart.append('g')
            .attr('class', 'bars')
            .attr('fill', '#98abc5')
            .selectAll('rect')
            .data(bars)
            .enter().append('rect')
            .attr('x', function (d, i) { return _this.x(i); })
            .attr('y', function (d) { return _this.y(d); })
            .attr('title', function (d) { return d; })
            .attr('height', function (d) { return sizing.height - _this.y(d); })
            .attr('width', this.x.bandwidth());
        // update bar labels
        this.chart.selectAll('g .bar-labels').remove();
        this.chart.append('g')
            .attr('class', 'bar-labels')
            .attr('fill', '#000000')
            .selectAll('text')
            .data(bars)
            .enter().append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '-0.25em')
            .attr('x', function (d, i) { return _this.x(i) + (_this.x.bandwidth() / 2); })
            .attr('y', function (d) { return _this.y(d); })
            .text(function (d) { return d; });
    };
    return ObservationFrequencyComponent;
}(__WEBPACK_IMPORTED_MODULE_1__svg_visualization_base_component__["b" /* SvgVisualizationBaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__observation_frequency_selection__["a" /* ObservationFrequencySelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__observation_frequency_selection__["a" /* ObservationFrequencySelection */]) === "function" && _a || Object)
], ObservationFrequencyComponent.prototype, "selection", void 0);
ObservationFrequencyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'observation-frequency',
        // IMPORTANT: this template is a copy of ../svg-visualization-base.component.html so that
        // it can have added controls.  if the former changes this one may need updates too
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/observation-frequency.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.scss")],
    })
], ObservationFrequencyComponent);

var ObvervationFrequencyStationControlComponent = (function () {
    function ObvervationFrequencyStationControlComponent() {
        this.stationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onStationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(ObvervationFrequencyStationControlComponent.prototype, "station", {
        get: function () {
            return this.stationValue;
        },
        set: function (s) {
            if (s !== this.stationValue) {
                var oldValue = this.stationValue;
                this.stationChange.emit(this.stationValue = s);
                this.onStationChange.emit({
                    oldValue: oldValue,
                    newValue: this.stationValue
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ObvervationFrequencyStationControlComponent.prototype.prev = function () {
        var idx = this.stations.indexOf(this.station);
        if (idx > 0) {
            this.station = this.stations[idx - 1];
        }
        else {
            this.station = this.stations[this.stations.length - 1]; // loop around to last station
        }
    };
    ObvervationFrequencyStationControlComponent.prototype.next = function () {
        var idx = this.stations.indexOf(this.station);
        if (idx < this.stations.length - 1) {
            this.station = this.stations[idx + 1];
        }
        else {
            this.station = this.stations[0]; // loop around to the first station.
        }
    };
    return ObvervationFrequencyStationControlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ObvervationFrequencyStationControlComponent.prototype, "stations", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], ObvervationFrequencyStationControlComponent.prototype, "stationChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], ObvervationFrequencyStationControlComponent.prototype, "onStationChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('station'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ObvervationFrequencyStationControlComponent.prototype, "station", null);
ObvervationFrequencyStationControlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'observation-frequency-station-control',
        template: "\n    <button class=\"prev\" mat-button (click)=\"prev()\">&lt; Previous</button>\n    <mat-form-field class=\"station-input\">\n        <mat-select placeholder=\"Site\" [(ngModel)]=\"station\" [disabled]=\"!stations || !stations.length\">\n            <mat-option *ngFor=\"let s of stations\" [value]=\"s\">{{s.station_name}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <button class=\"next\" mat-button (click)=\"next()\">Next &gt;</button>\n    ",
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/station-control.scss")]
    })
], ObvervationFrequencyStationControlComponent);

var _a;
//# sourceMappingURL=observation-frequency.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observation-frequency/station-control.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button[mat-button] {\n  display: none; }\n  @media (min-width: 992px) {\n    button[mat-button] {\n      display: inherit; } }\n\n.station-input {\n  margin-top: 10px;\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observer-activity/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observer_activity_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-selection.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__observer_activity_selection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_activity_selection_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-selection-factory.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__observer_activity_selection_factory_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer_activity_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__observer_activity_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer_activity_control_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-control.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__observer_activity_control_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverActivityControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer_activity_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObserverActivityControl = (function () {
    function ObserverActivityControl() {
        // TODO what are the valid years?
        this.validYears = (function () {
            var max = (new Date()).getFullYear() + 1, current = 2000, years = [];
            while (current < max) {
                years.push(current++);
            }
            return years.reverse();
        })();
    }
    ObserverActivityControl.prototype.ngOnInit = function () {
    };
    return ObserverActivityControl;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__observer_activity_selection__["a" /* ObserverActivitySelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__observer_activity_selection__["a" /* ObserverActivitySelection */]) === "function" && _a || Object)
], ObserverActivityControl.prototype, "selection", void 0);
ObserverActivityControl = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'observer-activity-control',
        template: "\n    <mat-form-field class=\"year-input\">\n        <mat-select placeholder=\"Year *\" [(ngModel)]=\"selection.year\" (change)=\"selection.update()\">\n            <mat-option *ngFor=\"let y of validYears\" [value]=\"y\">{{y}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    ",
        styles: ["\n        .year-input {\n            width: 65px;\n        }\n    "]
    })
], ObserverActivityControl);

var _a;
//# sourceMappingURL=observer-activity-control.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-selection-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverActivitySelectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer_activity_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObserverActivitySelectionFactory = (function () {
    function ObserverActivitySelectionFactory(serviceUtils) {
        this.serviceUtils = serviceUtils;
    }
    ObserverActivitySelectionFactory.prototype.newSelection = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__observer_activity_selection__["a" /* ObserverActivitySelection */](this.serviceUtils);
    };
    return ObserverActivitySelectionFactory;
}());
ObserverActivitySelectionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common__["j" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["j" /* NpnServiceUtils */]) === "function" && _a || Object])
], ObserverActivitySelectionFactory);

var _a;
//# sourceMappingURL=observer-activity-selection-factory.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverActivitySelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObserverActivitySelection = (function (_super) {
    __extends(ObserverActivitySelection, _super);
    function ObserverActivitySelection(serviceUtils) {
        var _this = _super.call(this) || this;
        _this.serviceUtils = serviceUtils;
        _this.$class = 'ObserverActivitySelection';
        _this.dataCnt = 0;
        return _this;
    }
    ObserverActivitySelection.prototype.isMultiStation = function () {
        return this.stationIds && this.stationIds.length > 1;
    };
    ObserverActivitySelection.prototype.isSingleStation = function () {
        return this.stationIds && this.stationIds.length === 1;
    };
    ObserverActivitySelection.prototype.isValid = function () {
        return !!this.year;
    };
    ObserverActivitySelection.prototype.getData = function () {
        var _this = this;
        // /npn_portal/networks/getObserversByMonth.json?year=2015&network_id=69
        var url = this.serviceUtils.apiUrl('/npn_portal/networks/getObserversByMonth.json'), params = {
            year: this.year,
            network_id: this.networkIds[0]
        };
        return new Promise(function (resolve, reject) {
            _this.working = true;
            _this.serviceUtils.cachedGet(url, params)
                .then(function (data) {
                var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (i) {
                    return __assign({ month: i }, data.months[i]);
                });
                data.months = months;
                _this.working = false;
                resolve(data);
            })
                .catch(reject);
        });
    };
    return ObserverActivitySelection;
}(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["c" /* NetworkAwareVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ObserverActivitySelection.prototype, "$class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], ObserverActivitySelection.prototype, "year", void 0);
//# sourceMappingURL=observer-activity-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer_activity_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/observer-activity-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TITLE = 'New/Active Observers';
var ObserverActivityComponent = (function (_super) {
    __extends(ObserverActivityComponent, _super);
    function ObserverActivityComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keyLabels = ['New observers', 'Active observers'];
        _this.keys = ['new_observers', 'active_observers'];
        _this.z = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["c" /* scaleOrdinal */])()
            .domain(_this.keys)
            .range(["#98abc5", "#d0743c"]);
        _this.zDarker = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["c" /* scaleOrdinal */])()
            .domain(_this.keys)
            .range(_this.z.range().map(function (c) {
            return __WEBPACK_IMPORTED_MODULE_5_d3__["d" /* color */](c).darker().toString();
        }));
        _this.filename = 'observer-activity.png';
        _this.margins = __assign({}, __WEBPACK_IMPORTED_MODULE_1__svg_visualization_base_component__["a" /* DEFAULT_MARGINS */], { top: 100, left: 80 });
        return _this;
    }
    ObserverActivityComponent.prototype.getMonthFormat = function () {
        if (this.sizing && this.sizing.width < 800) {
            return '%b';
        }
        return '%B';
    };
    ObserverActivityComponent.prototype.reset = function () {
        _super.prototype.reset.call(this);
        var chart = this.chart, sizing = this.sizing, d3_month_fmt = __WEBPACK_IMPORTED_MODULE_5_d3__["r" /* timeFormat */](this.getMonthFormat()), fontSize = this.baseFontSize();
        this.title = chart.append('g')
            .attr('class', 'chart-title')
            .append('text')
            .attr('y', '0')
            .attr('dy', '-4.2em')
            .attr('x', '0')
            .style('text-anchor', 'start')
            .style('font-size', '18px');
        var legend = this.legend = chart.append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(0,-' + (sizing.margin.top - 10) + ')')
            .attr('text-anchor', 'start')
            .style('font-size', fontSize)
            .selectAll('g')
            .data(this.keyLabels)
            .enter().append('g')
            .attr('transform', function (d, i) { return "translate(0," + (i * 22 + 24) + ")"; });
        legend.append('rect')
            .attr('x', 0)
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', this.z);
        legend.append('text')
            .attr('x', 24)
            .attr('y', fontSize - 0.5)
            .attr('dy', '0.32em')
            .text(function (d) { return d; });
        this.x = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["a" /* scaleBand */])()
            .rangeRound([0, sizing.width])
            .padding(0.05)
            .domain(__WEBPACK_IMPORTED_MODULE_5_d3__["n" /* range */](0, 12));
        this.xAxis = Object(__WEBPACK_IMPORTED_MODULE_3_d3_axis__["a" /* axisBottom */])(this.x).tickFormat(function (i) { return d3_month_fmt(new Date(1900, i)); });
        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + sizing.height + ')')
            .call(this.xAxis);
        this.y = Object(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["b" /* scaleLinear */])().range([sizing.height, 0]).domain([0, 20]); // just a default domain
        this.yAxis = Object(__WEBPACK_IMPORTED_MODULE_3_d3_axis__["b" /* axisLeft */])(this.y).tickFormat(__WEBPACK_IMPORTED_MODULE_5_d3__["k" /* format */]('.0d'));
        chart.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('fill', '#000') // somehow parent g has fill="none"
            .attr('transform', 'rotate(-90)')
            .attr('y', '0')
            .attr('dy', '-3em')
            .attr('x', -1 * (sizing.height / 2)) // looks odd but to move in the Y we need to change X because of transform
            .style('text-anchor', 'middle')
            .text('New/Active Observers');
        this.commonUpdates();
    };
    ObserverActivityComponent.prototype.update = function () {
        var _this = this;
        this.reset();
        this.selection.getData()
            .then(function (data) {
            _this.data = data;
            _this.redraw();
        })
            .catch(this.handleError);
    };
    ObserverActivityComponent.prototype.redrawSvg = function () {
        var _this = this;
        if (!this.data) {
            return;
        }
        this.title.text(TITLE + ", " + this.data.network_name + ", " + this.selection.year);
        console.debug('ObserverActivityComponent:data', this.data);
        var sizing = this.sizing, data = this.data.months.slice(), chart = this.chart, new_accessor = function (d) { return d.new_observers; }, active_accessor = function (d) { return d.active_observers; }, generate_set = function (accessor) { return data.reduce(function (set, d) {
            accessor(d).forEach(function (id) {
                if (set.indexOf(id) === -1) {
                    set.push(id);
                }
            });
            return set;
        }, []); }, new_set = generate_set(new_accessor), active_set = generate_set(active_accessor), new_sum = new_set.length, active_sum = active_set.length, max = data.reduce(function (max, d) {
            if (d.new_observers.length > max) {
                max = d.new_observers.length;
            }
            if (d.active_observers.length > max) {
                max = d.active_observers.length;
            }
            return max;
        }, 0);
        console.debug("ObserverActivityComponent:vis data (max=" + max + ")", data);
        console.debug("ObserverActivityComponent:new_set", new_set);
        console.debug("ObserverActivityComponent:active_set", active_set);
        // update x axis with months+total
        this.x.domain(__WEBPACK_IMPORTED_MODULE_5_d3__["n" /* range */](0, data.length));
        this.chart.selectAll('g .x.axis').call(this.xAxis);
        // update y axis, domain is 0 to max of sum of the two keys
        // largest will always be the total column
        this.y.domain([0, max]);
        this.yAxis.ticks(max < 11 ? max : 10); // at most 10 ticks
        this.chart.selectAll('g .y.axis').call(this.yAxis);
        var bars = function (key, idx) {
            var barWidth = _this.x.bandwidth() / 2;
            _this.chart.selectAll("g .bars." + key).remove();
            _this.chart.append('g')
                .attr('class', "bars " + key)
                .attr('fill', function (d) { return _this.z(key); })
                .selectAll('rect')
                .data(data)
                .enter().append('rect')
                .attr('x', function (d, i) { return _this.x(i) + (barWidth * idx); })
                .attr('y', function (d) { return _this.y(d[key].length); })
                .attr('title', function (d) { return "" + d[key].length; })
                .attr('height', function (d) { return sizing.height - _this.y(d[key].length); })
                .attr('width', barWidth);
            _this.chart.selectAll("g .bar-labels." + key).remove();
            _this.chart.append('g')
                .attr('class', "bar-labels " + key)
                .attr('fill', function (d) { return _this.z(key); })
                .selectAll('text')
                .data(data)
                .enter().append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', '-0.25em')
                .attr('x', function (d, i) { return _this.x(i) + (barWidth * idx) + (barWidth / 2); })
                .attr('y', function (d) { return _this.y(d[key].length); })
                .text(function (d) { return "" + d[key].length; });
        };
        this.keys.forEach(function (k, i) { return bars(k, i); });
        this.legend.selectAll('text')
            .each((function (nSum, aSum, labels) {
            return function (d, i) {
                var t = __WEBPACK_IMPORTED_MODULE_5_d3__["q" /* select */](this), n = d === labels[0] ? nSum : aSum;
                t.text(d + " [Total: " + n + "]");
            };
        })(new_sum, active_sum, this.keyLabels));
        this.commonUpdates();
    };
    return ObserverActivityComponent;
}(__WEBPACK_IMPORTED_MODULE_1__svg_visualization_base_component__["b" /* SvgVisualizationBaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__observer_activity_selection__["a" /* ObserverActivitySelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__observer_activity_selection__["a" /* ObserverActivitySelection */]) === "function" && _a || Object)
], ObserverActivityComponent.prototype, "selection", void 0);
ObserverActivityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'observer-activity',
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.scss")],
    })
], ObserverActivityComponent);

var _a;
//# sourceMappingURL=observer-activity.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/scatter-plot/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scatter_plot_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-selection.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__scatter_plot_selection__["b"]; });
/* unused harmony reexport ScatterPlotSelectionPlot */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scatter_plot_selection_factory_service__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-selection-factory.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__scatter_plot_selection_factory_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scatter_plot_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__scatter_plot_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scatter_plot_controls_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-controls.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__scatter_plot_controls_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterPlotControls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scatter_plot_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScatterPlotControls = (function () {
    function ScatterPlotControls() {
        this.axis = __WEBPACK_IMPORTED_MODULE_1__scatter_plot_selection__["a" /* AXIS */];
        this.updateSent = false;
    }
    ScatterPlotControls.prototype.ngOnInit = function () {
        if (this.selection.plots.length === 0) {
            this.addPlot();
        }
    };
    ScatterPlotControls.prototype.updateChange = function () {
        if (this.selection.isValid()) {
            this.selection.update();
            this.updateSent = true;
        }
    };
    ScatterPlotControls.prototype.redrawChange = function (change) {
        if (this.selection.isValid()) {
            if (change && !change.oldValue && change.newValue) {
                this.updateChange();
            }
            else {
                if (this.updateSent) {
                    this.selection.redraw();
                }
                else {
                    this.updateChange();
                }
            }
        }
    };
    ScatterPlotControls.prototype.addPlot = function () {
        this.selection.plots.push({});
    };
    ScatterPlotControls.prototype.removePlot = function (index) {
        this.selection.plots.splice(index, 1);
        this.updateChange();
    };
    ScatterPlotControls.prototype.plotsValid = function () {
        return this.selection.plots.length === this.selection.validPlots.length;
    };
    return ScatterPlotControls;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__scatter_plot_selection__["b" /* ScatterPlotSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scatter_plot_selection__["b" /* ScatterPlotSelection */]) === "function" && _a || Object)
], ScatterPlotControls.prototype, "selection", void 0);
ScatterPlotControls = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'scatter-plot-control',
        template: "\n    <year-range-input [(start)]=\"selection.start\" [(end)]=\"selection.end\" (onStartChange)=\"updateChange()\" (onEndChange)=\"updateChange()\"></year-range-input>\n\n    <div class=\"phenophase-input-wrapper\" *ngFor=\"let spi of selection.plots; index as idx\">\n        <species-phenophase-input\n            [(species)]=\"spi.species\" [(phenophase)]=\"spi.phenophase\" [(color)]=\"spi.color\"\n            [selection]=\"selection\"\n            [gatherColor]=\"true\"\n            (onSpeciesChange)=\"updateChange()\"\n            (onPhenophaseChange)=\"updateChange()\"\n            (onColorChange)=\"redrawChange($event)\"></species-phenophase-input>\n        <button *ngIf=\"idx > 0\" mat-button class=\"remove-plot\" (click)=\"removePlot(idx)\">Remove</button>\n        <button *ngIf=\"selection.plots.length < 3 && idx === (selection.plots.length-1)\" mat-button class=\"add-plot\" [disabled]=\"!plotsValid()\" (click)=\"addPlot()\">Add</button>\n    </div>\n\n    <div>\n        <mat-form-field>\n            <mat-select placeholder=\"X Axis\" name=\"xAxis\" [(ngModel)]=\"selection.axis\" (change)=\"redrawChange()\">\n              <mat-option *ngFor=\"let a of axis\" [value]=\"a\">{{a.label}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-checkbox [(ngModel)]=\"selection.regressionLines\" (change)=\"redrawChange()\">Fit Lines</mat-checkbox>\n\n        <mat-checkbox [(ngModel)]=\"selection.individualPhenometrics\" (change)=\"updateChange()\">Use Individual Phenometrics</mat-checkbox>\n\n    </div>\n    ",
        styles: ["\n        year-range-input,\n        .phenophase-input-wrapper {\n            display: block;\n            margin-top: 15px;\n        }\n    "]
    })
], ScatterPlotControls);

var _a;
//# sourceMappingURL=scatter-plot-controls.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-selection-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterPlotSelectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scatter_plot_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-selection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ScatterPlotSelectionFactory = (function () {
    function ScatterPlotSelectionFactory(http, cacheService, config) {
        this.http = http;
        this.cacheService = cacheService;
        this.config = config;
    }
    ScatterPlotSelectionFactory.prototype.newSelection = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__scatter_plot_selection__["b" /* ScatterPlotSelection */](this.http, this.cacheService, this.config);
    };
    return ScatterPlotSelectionFactory;
}());
ScatterPlotSelectionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__common__["f" /* NPN_CONFIGURATION */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common__["i" /* NpnConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["i" /* NpnConfiguration */]) === "function" && _c || Object])
], ScatterPlotSelectionFactory);

var _a, _b, _c;
//# sourceMappingURL=scatter-plot-selection-factory.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AXIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScatterPlotSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../../../../../../../../npn_common/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_or_summary_vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/site-or-summary-vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KEYS_TO_NORMALIZE = {
    daylength: 'mean_daylength',
    acc_prcp: 'mean_accum_prcp',
    gdd: 'mean_gdd'
};
var AXIS = [
    { key: 'latitude', label: 'Latitude', axisFmt: __WEBPACK_IMPORTED_MODULE_4_d3__["k" /* format */]('.2f') },
    { key: 'longitude', label: 'Longitude', axisFmt: __WEBPACK_IMPORTED_MODULE_4_d3__["k" /* format */]('.2f') },
    { key: 'elevation_in_meters', label: 'Elevation (m)' },
    { key: 'fyy', label: 'Year' },
    { key: 'prcp_fall', label: 'Precip Fall (mm)' },
    { key: 'prcp_spring', label: 'Precip Spring (mm)' },
    { key: 'prcp_summer', label: 'Precip Summer (mm)' },
    { key: 'prcp_winter', label: 'Precip Winter (mm)' },
    { key: 'tmax_fall', label: 'Tmax Fall (C\xB0)' },
    { key: 'tmax_spring', label: 'Tmax Spring (C\xB0)' },
    { key: 'tmax_summer', label: 'Tmax Summer (C\xB0)' },
    { key: 'tmax_winter', label: 'Tmax Winter (C\xB0)' },
    { key: 'tmin_fall', label: 'Tmin Fall (C\xB0)' },
    { key: 'tmin_spring', label: 'Tmin Spring (C\xB0)' },
    { key: 'tmin_summer', label: 'Tmin Summer (C\xB0)' },
    { key: 'tmin_winter', label: 'Tmin Winter (C\xB0)' },
    { key: 'daylength', label: 'Day Length (s)' },
    { key: 'acc_prcp', label: 'Accumulated Precip (mm)' },
    { key: 'gdd', label: 'AGDD' }
];
var TODAY = new Date();
var ScatterPlotSelection = (function (_super) {
    __extends(ScatterPlotSelection, _super);
    function ScatterPlotSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$class = 'ScatterPlotSelection';
        _this.start = 2010;
        _this.end = (new Date()).getFullYear();
        _this.regressionLines = false;
        _this.axis = AXIS[0];
        _this.plots = [];
        _this.d3DateFormat = __WEBPACK_IMPORTED_MODULE_4_d3__["r" /* timeFormat */]('%x');
        return _this;
    }
    ScatterPlotSelection.prototype.isValid = function () {
        return this.start &&
            this.end &&
            (this.start < this.end) &&
            this.validPlots.length > 0;
    };
    Object.defineProperty(ScatterPlotSelection.prototype, "validPlots", {
        get: function () {
            return this.plots.filter(function (p) { return p.color && p.species && p.phenophase; });
        },
        enumerable: true,
        configurable: true
    });
    ScatterPlotSelection.prototype.toURLSearchParams = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* URLSearchParams */]();
        params.set('climate_data', '1');
        params.set('request_src', 'npn-vis-scatter-plot');
        params.set('start_date', this.start + "-01-01");
        params.set('end_date', this.end + "-12-31");
        // TODO - this typically comes from app wide configuration settings`
        // is "environment" an ok place to bind this config, probably not
        params.set('num_days_quality_filter', '' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].appConfig.num_days_quality_filter);
        this.validPlots.forEach(function (p, i) {
            params.set("species_id[" + i + "]", "" + p.species.species_id);
            params.set("phenophase_id[" + i + "]", "" + p.phenophase.phenophase_id);
        });
        this.addNetworkParams(params);
        return params;
    };
    ScatterPlotSelection.prototype.doyDateFormat = function (doy) {
        var start = new Date(this.start, 0, 1), time = ((doy - 1) * __WEBPACK_IMPORTED_MODULE_1__vis_selection__["d" /* ONE_DAY_MILLIS */]) + start.getTime(), // TODO, not enforcing that start/end be midnight on Jan 1
        date = new Date(time);
        return this.d3DateFormat(date);
    };
    // data access functions, not sure if the functionality here is too specific
    // to the visualization of the resulting data so should be held somewhere else
    // but it's here for now
    ScatterPlotSelection.prototype.getDoy = function (d) {
        return this.individualPhenometrics ? d.first_yes_doy : d.mean_first_yes_doy;
    };
    ScatterPlotSelection.prototype.getFirstYesYear = function (d) {
        return this.individualPhenometrics ? d.first_yes_year : d.mean_first_yes_year;
    };
    ScatterPlotSelection.prototype.axisData = function (d) {
        return d[this.axis.key];
    };
    ScatterPlotSelection.prototype.axisNonNull = function (data) {
        var _this = this;
        return data.filter(function (d) {
            return _this.axisData(d) !== __WEBPACK_IMPORTED_MODULE_1__vis_selection__["b" /* NULL_DATA */];
        });
    };
    ScatterPlotSelection.prototype.postProcessData = function (data) {
        var _this = this;
        var colorKey = function (d) { return d.species_id + ":" + d.phenophase_id; }, colorMap = this.validPlots.reduce(function (map, p) {
            map[p.species.species_id + ":" + p.phenophase.phenophase_id] = p.color;
            return map;
        }, {}), startYear = this.start, result = data.filter(function (d, i) {
            if (!(d.color = colorMap[colorKey(d)])) {
                // this can happen if a phenophase id spans two species but is only plotted for one
                // e.g. boxelder/breaking leaf buds, boxelder/unfolding leaves, red maple/breaking leaf buds
                // the service will return data for 'red maple/unfolding leaves' but the user hasn't requested
                // that be plotted so we need to discard this data.
                return false;
            }
            d.id = i;
            d.fyy = _this.getFirstYesYear(d);
            for (var summaryKey in KEYS_TO_NORMALIZE) {
                var siteKey = KEYS_TO_NORMALIZE[summaryKey];
                if (typeof (d[summaryKey]) === 'undefined') {
                    d[summaryKey] = d[siteKey];
                }
            }
            // this is the day # that will get plotted 1 being the first day of the start_year
            // 366 being the first day of start_year+1, etc.
            d.day_in_range = ((d.fyy - startYear) * 365) + _this.getDoy(d);
            return true;
        });
        this.working = false;
        return result;
    };
    return ScatterPlotSelection;
}(__WEBPACK_IMPORTED_MODULE_2__site_or_summary_vis_selection__["a" /* SiteOrSummaryVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], ScatterPlotSelection.prototype, "$class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], ScatterPlotSelection.prototype, "start", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Number)
], ScatterPlotSelection.prototype, "end", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Boolean)
], ScatterPlotSelection.prototype, "regressionLines", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Object)
], ScatterPlotSelection.prototype, "axis", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__vis_selection__["j" /* selectionProperty */])({
        ser: function (d) {
            return {
                color: d.color,
                species: d.species,
                phenophase: d.phenophase
            };
        }
    }),
    __metadata("design:type", Array)
], ScatterPlotSelection.prototype, "plots", void 0);
//# sourceMappingURL=scatter-plot-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterPlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scatter_plot_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/scatter-plot-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_axis__ = __webpack_require__("../../../../d3-axis/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScatterPlotComponent = (function (_super) {
    __extends(ScatterPlotComponent, _super);
    function ScatterPlotComponent(window, rootElement, media, speciesTitle) {
        var _this = _super.call(this, window, rootElement, media) || this;
        _this.window = window;
        _this.rootElement = rootElement;
        _this.media = media;
        _this.speciesTitle = speciesTitle;
        _this.defaultAxisFormat = __WEBPACK_IMPORTED_MODULE_7_d3__["k" /* format */]('d');
        _this.dateFormat = __WEBPACK_IMPORTED_MODULE_7_d3__["r" /* timeFormat */]('%x');
        _this.filename = 'scatter-plot.png';
        // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#object-spread-and-rest
        // similar to _|angular.extend
        _this.margins = __assign({}, __WEBPACK_IMPORTED_MODULE_3__svg_visualization_base_component__["a" /* DEFAULT_MARGINS */], { top: 80, left: 60 });
        return _this;
    }
    ScatterPlotComponent.prototype.reset = function () {
        var _this = this;
        _super.prototype.reset.call(this);
        var chart = this.chart, sizing = this.sizing, titleX = sizing.width < this.minWidth ?
            (2 * (this.sizing.width / 3)) : (this.sizing.width / 2);
        this.title = chart.append('g')
            .attr('class', 'chart-title')
            .append('text')
            .attr('y', '0')
            .attr('dy', '-3em')
            .attr('x', titleX)
            .style('text-anchor', 'middle')
            .style('font-size', '18px');
        this.x = Object(__WEBPACK_IMPORTED_MODULE_6_d3_scale__["b" /* scaleLinear */])().range([0, sizing.width]).domain([0, 100]);
        this.xAxis = Object(__WEBPACK_IMPORTED_MODULE_5_d3_axis__["a" /* axisBottom */])(this.x).tickFormat(function (i) {
            // TODO
            return _this.defaultAxisFormat(i);
        });
        this.y = Object(__WEBPACK_IMPORTED_MODULE_6_d3_scale__["b" /* scaleLinear */])().range([sizing.height, 0]).domain([1, 365]);
        this.yAxis = Object(__WEBPACK_IMPORTED_MODULE_5_d3_axis__["b" /* axisLeft */])(this.y);
        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + sizing.height + ')')
            .call(this.xAxis);
        chart.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('fill', '#000') // somehow parent g has fill="none"
            .attr('transform', 'rotate(-90)')
            .attr('y', '0')
            .attr('dy', '-3em')
            .attr('x', -1 * (sizing.height / 2)) // looks odd but to move in the Y we need to change X because of transform
            .style('text-anchor', 'middle')
            .text('Onset Day of Year');
        this.commonUpdates();
    };
    ScatterPlotComponent.prototype.update = function () {
        var _this = this;
        this.reset();
        this.selection.getData().then(function (data) {
            _this.data = data;
            _this.redraw();
        })
            .catch(function (e) { return _this.handleError(e); });
    };
    ScatterPlotComponent.prototype.redrawSvg = function () {
        var _this = this;
        if (!this.data) {
            return;
        }
        this.disclaimer = this.selection.filterDisclaimer;
        var processedData = this.selection.postProcessData(this.data), padding = 1, selection = this.selection, nonNullData = selection.axisNonNull(processedData), getX = function (d) { return selection.axisData(d); }, getY = function (d) { return selection.getDoy(d); }, // dataFunc
        extent = __WEBPACK_IMPORTED_MODULE_7_d3__["j" /* extent */](nonNullData, getX), formatXTickLabels = selection.axis.axisFmt || this.defaultAxisFormat;
        this.title.text(selection.start + " - " + selection.end);
        this.x.domain([extent[0] - padding, extent[1] + padding]);
        this.xAxis.scale(this.x).tickFormat(__WEBPACK_IMPORTED_MODULE_7_d3__["k" /* format */]('.2f')); // TODO per-selection tick formatting
        var xA = this.chart.selectAll('g .x.axis');
        xA.call(this.xAxis.tickFormat(formatXTickLabels));
        xA.selectAll('.axis-label').remove();
        xA.append('text')
            .attr('class', 'axis-label')
            .attr('x', (this.sizing.width / 2))
            .attr('dy', '3em')
            .attr('fill', '#000')
            .style('text-anchor', 'middle')
            .style('font-size', '12px')
            .text(this.selection.axis.label);
        this.chart.selectAll('.circle').remove();
        var circles = this.chart.selectAll('.circle').data(nonNullData, function (d) { return d.id; })
            .enter().append('circle')
            .attr('class', 'circle')
            .style('stroke', '#333')
            .style('stroke-width', '1');
        circles.attr('cx', function (d) { return _this.x(getX(d)); })
            .attr('cy', function (d) { return _this.y(getY(d)); })
            .attr('r', '5')
            .attr('fill', function (d) { return d.color; })
            .on('click', function (d) {
            if (__WEBPACK_IMPORTED_MODULE_7_d3__["i" /* event */].defaultPrevented) {
                return;
            }
            _this.record = d;
        })
            .append('title')
            .text(function (d) { return selection.doyDateFormat(d.day_in_range) + " [" + d.latitude + "," + d.longitude + "]"; });
        this.chart.selectAll('.regression').remove();
        selection.validPlots.forEach(function (plot) { return delete plot.regressionLine; });
        if (this.selection.regressionLines) {
            var regressionLines_1 = [];
            selection.validPlots.forEach(function (plot) {
                var series = nonNullData.filter(function (d) { return d.color === plot.color; });
                if (series.length) {
                    regressionLines_1.push(plot.regressionLine = new RegressionLine(plot.species.species_id + "." + plot.phenophase.phenophase_id, plot.color, series, getX, getY));
                }
            });
            var regression = this.chart.selectAll('.regression')
                .data(regressionLines_1, function (d) { return d.id; })
                .enter().append('line')
                .attr('class', 'regression');
            regression
                .attr('x1', function (d) { return _this.x(d.p1[0]); })
                .attr('y1', function (d) { return _this.y(d.p1[1]); })
                .attr('x2', function (d) { return _this.x(d.p2[0]); })
                .attr('y2', function (d) { return _this.y(d.p2[1]); })
                .attr('fill', function (d) { return d.color; })
                .attr('stroke', function (d) { return d.color; })
                .attr('stroke-width', 2);
        }
        // TODO abstract legend out to a class...
        this.chart.select('.legend').remove();
        var legend = this.chart.append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(0,-' + (this.sizing.margin.top - 10) + ')')
            .style('font-size', '1em'), r = 5, vpad = 4;
        this.selection.validPlots.forEach(function (plot, i) {
            var row = legend.append('g')
                .attr('class', 'legend-item')
                .attr('transform', 'translate(10,' + (((i + 1) * _this.baseFontSize()) + (i * vpad)) + ')'), title = _this.speciesTitle.transform(plot.species) + '/' + plot.phenophase.phenophase_name;
            if (plot.regressionLine && typeof (plot.regressionLine.r2) === 'number') {
                // NOTE: the baseline-shift doesn't appear to work on Firefox
                if (_this.isIE) {
                    title += " (R2 " + plot.regressionLine.r2.toFixed(2) + ")";
                }
                else {
                    title += " (R<tspan style=\"baseline-shift: super; font-size: 0.65em;\">2</tspan> " + plot.regressionLine.r2.toFixed(2) + ")";
                }
            }
            row.append('circle')
                .attr('r', r)
                .attr('fill', plot.color);
            var text = row.append('text')
                .style('font-size', _this.baseFontSize(true))
                .attr('x', (2 * 4))
                .attr('y', (r / 2));
            if (_this.isIE) {
                text.text(title);
            }
            else {
                text.html(title);
            }
        });
        this.commonUpdates();
    };
    return ScatterPlotComponent;
}(__WEBPACK_IMPORTED_MODULE_3__svg_visualization_base_component__["b" /* SvgVisualizationBaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__scatter_plot_selection__["b" /* ScatterPlotSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__scatter_plot_selection__["b" /* ScatterPlotSelection */]) === "function" && _a || Object)
], ScatterPlotComponent.prototype, "selection", void 0);
ScatterPlotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'scatter-plot',
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common__["o" /* Window */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["o" /* Window */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__common__["n" /* SpeciesTitlePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common__["n" /* SpeciesTitlePipe */]) === "function" && _e || Object])
], ScatterPlotComponent);

var RegressionLine = (function () {
    function RegressionLine(id, color, data, getX, getY) {
        var datas = data.sort(function (o1, o2) {
            return getX(o1) - getX(o2);
        }), isNumber = function (d) { return typeof (d) === 'number'; }, xSeries = datas.map(getX).filter(isNumber), ySeries = datas.map(getY).filter(isNumber), leastSquaresCoeff = this.leastSquares(xSeries, ySeries), x1 = xSeries[0], y1 = this.approxY(leastSquaresCoeff, x1), x2 = xSeries[xSeries.length - 1], y2 = this.approxY(leastSquaresCoeff, x2);
        this.id = id;
        this.color = color;
        this.p1 = [x1, y1];
        this.p2 = [x2, y2];
        this.r2 = leastSquaresCoeff[2];
    }
    RegressionLine.prototype.leastSquares = function (xSeries, ySeries) {
        if (xSeries.length === 0 || ySeries.length === 0) {
            return [Number.NaN, Number.NaN, Number.NaN];
        }
        var reduceSumFunc = function (prev, cur) { return prev + cur; };
        var xBar = xSeries.reduce(reduceSumFunc) * 1.0 / xSeries.length;
        var yBar = ySeries.reduce(reduceSumFunc) * 1.0 / ySeries.length;
        var ssXX = xSeries.map(function (d) { return Math.pow(d - xBar, 2); })
            .reduce(reduceSumFunc);
        var ssYY = ySeries.map(function (d) { return Math.pow(d - yBar, 2); })
            .reduce(reduceSumFunc);
        var ssXY = xSeries.map(function (d, i) { return (d - xBar) * (ySeries[i] - yBar); })
            .reduce(reduceSumFunc);
        var slope = ssXY / ssXX;
        var intercept = yBar - (xBar * slope);
        var rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY);
        return [slope, intercept, rSquare];
    };
    RegressionLine.prototype.approxY = function (leastSquaresCoeff, x) {
        // y = a + bx
        var a = leastSquaresCoeff[1], b = leastSquaresCoeff[0];
        return a + (b * x);
    };
    return RegressionLine;
}());
var _a, _b, _c, _d, _e;
//# sourceMappingURL=scatter-plot.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/site-or-summary-vis-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteOrSummaryVisSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../../../../../../../../npn_common/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteOrSummaryVisSelection = (function (_super) {
    __extends(SiteOrSummaryVisSelection, _super);
    function SiteOrSummaryVisSelection(http, cacheService, config) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.cacheService = cacheService;
        _this.config = config;
        _this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        _this.individualPhenometrics = false;
        return _this;
    }
    SiteOrSummaryVisSelection.prototype.filterSuspectSummaryData = function (d) {
        var bad = (d.latitude === 0.0 || d.longitude === 0.0 || d.elevation_in_meters < 0);
        if (bad) {
            console.warn('suspect station data', d);
        }
        return !bad;
    };
    SiteOrSummaryVisSelection.prototype.filterLqSummaryData = function (d) {
        var keep = d.numdays_since_prior_no >= 0;
        if (!keep) {
            console.debug('filtering less precise data from summary output', d);
        }
        return keep;
    };
    SiteOrSummaryVisSelection.prototype.filterLqSiteData = function (d) {
        var keep = d.mean_numdays_since_prior_no >= 0;
        if (!keep) {
            console.debug('filtering less precise data from site level output', d);
        }
        return keep;
    };
    SiteOrSummaryVisSelection.prototype.getData = function () {
        var _this = this;
        if (!this.isValid()) {
            return Promise.reject(this.INVALID_SELECTION);
        }
        var params = this.toURLSearchParams(), // TODO "addCommonParams"
        url = this.config.apiRoot + "/npn_portal/observations/" + (this.individualPhenometrics ? 'getSummarizedData' : 'getSiteLevelData') + ".json", cacheKey = {
            u: url,
            params: params.toString()
        }, data = this.cacheService.get(cacheKey), filterLqd = this.individualPhenometrics ?
            function (data) {
                var minusSuspect = data.filter(_this.filterSuspectSummaryData), filtered = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].appConfig.filterLqdSummary ? minusSuspect.filter(_this.filterLqSummaryData) : minusSuspect, individuals = filtered.reduce(function (map, d) {
                    var key = d.individual_id + '/' + d.phenophase_id + '/' + d.first_yes_year;
                    map[key] = map[key] || [];
                    map[key].push(d);
                    return map;
                }, {}), uniqueIndividuals = [];
                console.debug('filtered out ' + (data.length - minusSuspect.length) + '/' + data.length + ' suspect records');
                console.debug('filtered out ' + (minusSuspect.length - filtered.length) + '/' + minusSuspect.length + ' LQD records.');
                for (var key in individuals) {
                    var arr = individuals[key];
                    if (arr.length > 1) {
                        // sort by first_yes_doy
                        arr.sort(function (a, b) {
                            return a.first_yes_doy - b.first_yes_doy;
                        });
                    }
                    // use the earliest record
                    uniqueIndividuals.push(arr[0]);
                }
                console.debug('filtered out ' + (filtered.length - uniqueIndividuals.length) + '/' + filtered.length + ' individual records (preferring lowest first_yes_doy)');
                _this.filterDisclaimer = (minusSuspect.length !== filtered.length) ?
                    __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].appConfig.filterLqdDisclaimer : undefined;
                return filtered;
            } :
            function (data) {
                var minusSuspect = data.filter(_this.filterSuspectSummaryData), filtered = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].appConfig.filterLqdSummary ? minusSuspect.filter(_this.filterLqSiteData) : minusSuspect;
                console.debug('filtered out ' + (data.length - minusSuspect.length) + '/' + data.length + ' suspect records');
                console.debug('filtered out ' + (minusSuspect.length - filtered.length) + '/' + minusSuspect.length + ' LQD records.');
                _this.filterDisclaimer = (minusSuspect.length !== filtered.length) ?
                    __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].appConfig.filterLqdDisclaimer : undefined;
                return filtered;
            };
        if (data) {
            console.log('found in cache', data);
            return Promise.resolve(filterLqd(data));
        }
        this.working = true;
        return this.http.post(url, params.toString(), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var arr = response.json();
            _this.cacheService.set(cacheKey, arr);
            var filtered = filterLqd(arr);
            _this.working = false;
            return filtered;
        })
            .catch(this.handleError);
    };
    return SiteOrSummaryVisSelection;
}(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["g" /* StationAwareVisSelection */]));

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", Boolean)
], SiteOrSummaryVisSelection.prototype, "individualPhenometrics", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__vis_selection__["j" /* selectionProperty */])(),
    __metadata("design:type", String)
], SiteOrSummaryVisSelection.prototype, "filterDisclaimer", void 0);
//# sourceMappingURL=site-or-summary-vis-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vis-container\">\n    <div class=\"vis-working\" *ngIf=\"selection.working\">\n        <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n    <div class=\"chart-container\">\n        <visualization-download *ngIf=\"!thumbnail && !mobileMode\" svgWrapperId=\"{{id}}\" filename=\"{{filename}}\"></visualization-download>\n        <div [class]=\"clazz\" id=\"{{id}}\" [hidden]=\"thumbnailSrc\"><svg class=\"svg-visualization\"></svg></div>\n        <div [hidden]=\"!thumbnailSrc\">\n            <canvas class=\"thumbnail-canvas\" style=\"display: none;\"></canvas>\n            <img class=\"thumbnail-image\" />\n        </div>\n\n    </div>\n    <div *ngIf=\"disclaimer && !thumbnail\" class=\"vis-disclaimer\">{{disclaimer}}</div>\n</div>\n<!--pre *ngIf=\"record\">{{record | json}}</pre-->\n"

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vis-container {\n  display: block;\n  position: relative; }\n  .vis-container .chart-container {\n    position: relative; }\n  .vis-container .visualization > svg,\n  .vis-container img.thumbnail-image {\n    border: 1px solid #000; }\n  .vis-container .vis-disclaimer {\n    margin-top: 5px;\n    font-size: .75em;\n    float: right; }\n  .vis-container .vis-working {\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    z-index: 2000;\n    text-align: center; }\n    .vis-container .vis-working i {\n      margin-top: 15%; }\n    .vis-container .vis-working mat-progress-spinner {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_MARGINS; });
/* unused harmony export FONT_SIZE */
/* unused harmony export FONT_SIZE_PX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SvgVisualizationBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualization_base_component__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/visualization-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DEFAULT_MARGINS = { top: 20, right: 30, bottom: 60, left: 40 };
var FONT_SIZE = 14;
var FONT_SIZE_PX = FONT_SIZE + 'px';
/*
IMPORTANT: see not in VisualizationBaseComponent
*/
var SvgVisualizationBaseComponent = (function (_super) {
    __extends(SvgVisualizationBaseComponent, _super);
    function SvgVisualizationBaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filename = 'visualization.png';
        _this.margins = DEFAULT_MARGINS;
        _this.minWidth = 700;
        return _this;
    }
    SvgVisualizationBaseComponent.prototype.baseFontSize = function (withPx) {
        var fs = FONT_SIZE;
        /*
        if(this.sizing) {
            if(this.sizing.width < 650) {
                fs -=2;
            }
            if(this.sizing.width < 400) {
                fs -= 2;
            }
        }*/
        return withPx ? fs + "px" : fs;
    };
    /**
     * sub-classes should call after they have redrawn the visualization to get any
     * common styling updates applied.
     */
    SvgVisualizationBaseComponent.prototype.commonUpdates = function () {
        var chart = this.chart, fontSizePx = this.baseFontSize(true);
        ['.axis path', '.axis line'].forEach(function (selector) {
            return chart.selectAll(selector).style('fill', 'none')
                .style('stroke', '#000')
                .style('shape-rendering', 'crispEdges');
        });
        chart.selectAll('text')
            .style('font-family', 'Arial');
        chart.selectAll('g .axis text')
            .style('font-size', fontSizePx);
    };
    /**
     * `reset` is intended to initialize a visualziation to it's known "clean" state
     * placing all common elements, etc.  Subclasses will almost certainly over-ride
     * this implementation and call it to get the ball rolling.
     *
     * No asynchronous work should be done here, fetching data, etc. should happen
     * only within `update`.
     */
    SvgVisualizationBaseComponent.prototype.reset = function () {
        var sizing = this.getSizeInfo(), svg = this.svg, width = sizing.width + sizing.margin.left + sizing.margin.right, height = sizing.height + sizing.margin.top + sizing.margin.bottom;
        // remove all children
        svg.selectAll('*').remove();
        // set size
        svg.attr('width', width)
            .attr('height', height)
            .attr('viewBox', "0 0 " + width + " " + height)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        svg.append('g')
            .attr('class', 'vis-background')
            .append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fff');
        this.chart = svg.append('g')
            .attr('transform', "translate(" + sizing.margin.left + "," + sizing.margin.top + ")")
            .attr('class', 'vis-chart');
        svg.append('g')
            .attr('transform', "translate(10," + (sizing.height + sizing.margin.top + sizing.margin.bottom - 10) + ")")
            .append('text')
            .attr('font-size', '11px')
            .attr('font-style', 'italic')
            .attr('text-anchor', 'right').text('USA National Phenology Network, www.usanpn.org');
    };
    SvgVisualizationBaseComponent.prototype.resize = function () {
        this.reset();
        this.redraw();
    };
    // this used to be in ngAfterViewInit and most time it would succeed from there
    // but very occasionally ngAfterViewInit would be called BEFORE the underlying
    // elements exist in the DOM.  No time to understand cleanly why so these selections
    // are now made whever asking about sizing which is the FIRST thing necessary to
    // render an SVG visualization so it should be safe.
    SvgVisualizationBaseComponent.prototype.selectElements = function () {
        this.visRoot = __WEBPACK_IMPORTED_MODULE_2_d3__["q" /* select */]('#' + this.id);
        this.svg = this.visRoot.select('svg');
    };
    SvgVisualizationBaseComponent.prototype.getSizeInfo = function (minWidth) {
        this.selectElements();
        return _super.prototype.getSizeInfo.call(this, this.minWidth);
    };
    /**
     * IMPORTANT:
     * Sub-classes should implement the redrawSvg and not over-ride redraw.
     * If redraw is over-ridden the implementation  will lose the ability to
     * dynamically replace themselves with a thumbnail should the screen
     * realestate for the visualization get too small.
     */
    SvgVisualizationBaseComponent.prototype.redraw = function () {
        this.redrawSvg();
        var sizeInfo = this.sizing, w = sizeInfo.width + sizeInfo.margin.left + sizeInfo.margin.right;
        if (w === this.minWidth) {
            var native = this.rootElement.nativeElement, svg = native.querySelector('svg.svg-visualization'), wrappedSvg = __WEBPACK_IMPORTED_MODULE_2_d3__["q" /* select */](svg), cHeight = +wrappedSvg.attr('height'), aspectMult = sizeInfo.scaledWidth / this.minWidth;
            wrappedSvg.attr('width', sizeInfo.scaledWidth);
            wrappedSvg.attr('height', Math.round(cHeight * aspectMult));
            /*  MSIE has issues with this approach of using an image so
                instead scaling the SVG down which seems better.
                TODO: The markup supporting the PNG approach remains
            let native = this.rootElement.nativeElement as HTMLElement,
                svg = native.querySelector('svg.svg-visualization') as SVGElement,
                wrappedSvg = d3.select(svg),
                canvas = native.querySelector('canvas.thumbnail-canvas') as HTMLCanvasElement,
                img = native.querySelector('img.thumbnail-image') as HTMLImageElement,
                wrappedImg = d3.select(img),
                h = sizeInfo.height + sizeInfo.margin.top + sizeInfo.margin.bottom;
            console.debug('SvgVisualizationBaseComponent: minWidth hit, replacing with generated thumbnail image.');
            wrappedSvg.attr('version',1.1)
                .attr('xmlns', 'http://www.w3.org/2000/svg');
            let svgParent = svg.parentNode as HTMLElement,
                html = svgParent.innerHTML;
            canvas.width = +wrappedSvg.attr('width');
            canvas.height = +wrappedSvg.attr('height');
            wrappedImg.attr('width',sizeInfo.scaledWidth);
            try {
                let context = canvas.getContext('2d'),
                    image = new Image();
                image.setAttribute('crossOrigin','anonymous');
                image.onload = () => {
                    context.drawImage(image,0,0);
                    this.thumbnailSrc = img.src = canvas.toDataURL('image/png');
                };
                image.src = 'data:image/svg+xml;base64,'+ window.btoa(html);
            } catch(imageError) {
                console.error(imageError);
            }
            */
        }
        else {
            this.thumbnailSrc = undefined;
        }
    };
    /**
     * SVG replacement for the redraw function.
     */
    SvgVisualizationBaseComponent.prototype.redrawSvg = function () { throw new Error('abstract'); };
    SvgVisualizationBaseComponent.prototype.ngAfterViewInit = function () {
        this.selectElements();
        // sets up common handlers
        _super.prototype.ngAfterViewInit.call(this);
    };
    return SvgVisualizationBaseComponent;
}(__WEBPACK_IMPORTED_MODULE_1__visualization_base_component__["a" /* VisualizationBaseComponent */]));
SvgVisualizationBaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'svg-visualization-base',
        template: __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.html"),
        styles: [__webpack_require__("../../../../../../../../../../../../npn_common/visualizations/svg-visualization-base.component.scss")]
    })
], SvgVisualizationBaseComponent);

//# sourceMappingURL=svg-visualization-base.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NULL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ONE_DAY_MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return VisSelectionEvent; });
/* unused harmony export SelectionPropertyHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return selectionProperty; });
/* harmony export (immutable) */ __webpack_exports__["a"] = GET_EXTERNAL;
/* harmony export (immutable) */ __webpack_exports__["f"] = SET_EXTERNAL;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REJECT_INVALID_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return VisSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NetworkAwareVisSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return StationAwareVisSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reflect_metadata__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NULL_DATA = -9999;
var ONE_DAY_MILLIS = (24 * 60 * 60 * 1000);
var VisSelectionEvent;
(function (VisSelectionEvent) {
    VisSelectionEvent[VisSelectionEvent["RESET"] = 0] = "RESET";
    VisSelectionEvent[VisSelectionEvent["REDRAW"] = 1] = "REDRAW";
    VisSelectionEvent[VisSelectionEvent["UPDATE"] = 2] = "UPDATE";
    VisSelectionEvent[VisSelectionEvent["RESIZE"] = 3] = "RESIZE";
})(VisSelectionEvent || (VisSelectionEvent = {}));
/*
 * A VisSelection is a jumble of properties and methods, not all of which should be serialized
 * and deserialized when [re]storing a selection to/from JSON.  In standard JavaScript this
 * could probably be dealt with cleanly via Object.defineProperty (and a big constructor) but
 * with TypeScript it's significantly more complicated.  For this reason all properties that
 * are part of what should be serialized for a given selection MUST be annotated with @selectionProperty()
 *
 * The virtual `external` property on a selection will produce a plain object representation
 * for a selection.  Assigning an object to the `external` property will deserialize it onto
 * the selection object.
 *
 * IMPORTANT: If a property key is prefixed with `_` it is assumed, by convention, that is the
 * internal representation of a virtual property of the same name without the leading `_`.
 * Such properties will be serialized without the leading `_` and when deserialized will be set
 * directly without the leading `_` so that any logic defined in the corresponding property setter
 * is run.
 */

var selectionPropertyMetadataKey = Symbol('npnSelectionProperty');
var IDENTITY = function (d) { return d; };
/**
 * Defines a property handler for a selection property.
 */
var SelectionPropertyHandler = (function () {
    function SelectionPropertyHandler() {
    }
    return SelectionPropertyHandler;
}());

/**
 * Property decorator to indicate which properties of a selection should
 * be part of the external form of the selection.
 * E.g.
 * <pre>
 *   @selectionProperty()
 *   private s:string;
 *   @selectionProperty({des: d => new Date(d)})
 *   private date:Date;
 *   @selectionProperty({
 *     des: d => {
 *       let o = new MyClass();
 *       ... copy properties for d to o ...
 *       return o;
 *     },
 *     ser: d => d
 *   })
 *   private o:MyClass;
 * </pre>
 */
var selectionProperty = function (handler) {
    var the_handler = __assign({ des: IDENTITY, ser: IDENTITY }, (handler || {}));
    return Reflect.metadata(selectionPropertyMetadataKey, the_handler);
};
var isSelectionProperty = function (target, propertyKey) {
    var meta = Reflect.getMetadata(selectionPropertyMetadataKey, target, propertyKey);
    if (!meta) {
        meta = Reflect.getMetadata(selectionPropertyMetadataKey, target, "_" + propertyKey);
    }
    return meta;
};
// these are exported functions so that other classes can use similar
// s11n/des11n functionality.
function GET_EXTERNAL() {
    var _this = this;
    var ext = {};
    Object.keys(this).forEach(function (key) {
        var handler = isSelectionProperty(_this, key);
        if (handler) {
            var v = _this[key];
            if (/^_/.test(key)) {
                key = key.substring(1);
            }
            if (Array.isArray(v)) {
                ext[key] = v.map(function (d) { return handler.ser(d); });
            }
            else {
                ext[key] = handler.ser(v);
            }
        }
    });
    return ext;
}
;
function SET_EXTERNAL(o) {
    var _this = this;
    Object.keys(o).forEach(function (key) {
        var handler = isSelectionProperty(_this, key);
        if (handler) {
            var v = o[key];
            if (typeof (v) !== 'undefined') {
                if (Array.isArray(v)) {
                    _this[key] = v.map(function (d) { return handler.des(d); });
                }
                else {
                    _this[key] = handler.des(v);
                }
            }
            else {
                _this[key] = undefined;
            }
        }
    });
}
;
var REJECT_INVALID_SELECTION = 'invalid selection';
/**
 * Base class for visualization selection (user input).  A VisSelection is attached
 * to a specific visualization and the selection itself sends events to the visualization
 * to tell it when meaningful changes have happened and it should reset/redraw or update.
 *
 * The utility methods reset/redraw/update send instructions to the visualization.  These
 * functions can be called at any time, even before the selection has been wired to its
 * visualization.  Events will be held onto and delivered if/when the visualization has
 * subscribed.
 *
 * Note: EventEmitter does not have an unsubscribe (though it, today, extends RxJs Subject)
 * so technically does.  Should perhaps consider not extending Angular's EventEmitter
 */
var VisSelection = (function (_super) {
    __extends(VisSelection, _super);
    function VisSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /*
        Note: Previously this.class.name was used when serializing a selection to JSON.
        This does not work in production mode because of JavaScript minification.
        So instead making this explicit.  All concrete VisSelection classes need to
        add the $class @selectionProperty() and put their class name within it.
         */
        _this.$class = 'VisSelection';
        _this.guid = __WEBPACK_IMPORTED_MODULE_2__common__["c" /* Guid */].newGuid();
        _this.meta = {}; // a place for non selection specific info to be held
        _this.debug = false;
        _this.working = false;
        // this flag is not persisted but can be used by a visualization if it
        // would like to have a control pick "default state" while the visualization
        // is being built.
        _this.editMode = false;
        _this.INVALID_SELECTION = REJECT_INVALID_SELECTION;
        _this.lastEmit = {};
        _this.firstSubscriber = new Promise(function (resolve) {
            _this.firstSubscriberResolver = resolve;
        });
        return _this;
    }
    Object.defineProperty(VisSelection.prototype, "external", {
        get: function () { return GET_EXTERNAL.apply(this, arguments); },
        set: function (o) { SET_EXTERNAL.apply(this, arguments); },
        enumerable: true,
        configurable: true
    });
    /**
     * Instruct the visualization to go back to a "clean" slate
     */
    VisSelection.prototype.reset = function () {
        this.emit(VisSelectionEvent.RESET);
    };
    /**
     * Instruct the visualization to redraw itself using the data it already
     * has and the current state of the selection.
     */
    VisSelection.prototype.redraw = function () {
        this.emit(VisSelectionEvent.REDRAW);
    };
    /**
     * Instruct the visualization to go get new data and reset/redraw itself.
     */
    VisSelection.prototype.update = function () {
        this.emit(VisSelectionEvent.UPDATE);
    };
    /**
     * Instruct the visualization to resize itself.
     */
    VisSelection.prototype.resize = function () {
        this.emit(VisSelectionEvent.RESIZE);
    };
    VisSelection.prototype.handleError = function (e) {
        console.error(e);
        this.working = false;
    };
    // make sure no events go out until there is at least one subscriber to receive them.
    VisSelection.prototype.emit = function (value) {
        var _this = this;
        var self = this, emitArgs = arguments, thisEmit = {
            value: value,
            when: Date.now(),
            ext: JSON.stringify(this.external)
        };
        // throttle events on emit rather than requiring subscribers to do this.
        // i.e. if the event being emitted differs from the last event emitted it
        // always gets through.  events get pruned out if they are not distinct
        // and happen within the specific interval
        // e.g.
        // selection.update(); selection.update(); selection.update();
        // only the first will get through
        // but selection.update() setTimeout(() => selection.update(),600);
        // both will get through
        if (this.lastEmit.value !== thisEmit.value || this.lastEmit.ext !== thisEmit.ext || this.lastEmit.when < (thisEmit.when - 500)) {
            this.lastEmit = thisEmit;
            console.log('letting event through', thisEmit);
            this.firstSubscriber.then(function () {
                _super.prototype.emit.apply(self, emitArgs);
            });
        }
        else {
            console.log('pruned out redundant event', thisEmit);
        }
    };
    VisSelection.prototype.subscribe = function (generatorOrNext, error, complete) {
        // resolve the above promise..
        this.firstSubscriberResolver();
        return _super.prototype.subscribe.apply(this, arguments);
    };
    return VisSelection;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]));

__decorate([
    selectionProperty(),
    __metadata("design:type", String)
], VisSelection.prototype, "$class", void 0);
__decorate([
    selectionProperty(),
    __metadata("design:type", String)
], VisSelection.prototype, "guid", void 0);
__decorate([
    selectionProperty(),
    __metadata("design:type", Object)
], VisSelection.prototype, "meta", void 0);
var NetworkAwareVisSelection = (function (_super) {
    __extends(NetworkAwareVisSelection, _super);
    function NetworkAwareVisSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.networkIds = [];
        return _this;
    }
    NetworkAwareVisSelection.prototype.addNetworkParams = function (params) {
        if (params instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]) {
            var p_1 = params;
            (this.networkIds || []).forEach(function (id, i) { return p_1.set("network_id[" + i + "]", "" + id); });
        }
        else if (params && typeof (params) === 'object') {
            (this.networkIds || []).forEach(function (id, i) { return params["network_id[" + i + "]"] = "" + id; });
        }
        return params;
    };
    return NetworkAwareVisSelection;
}(VisSelection));

__decorate([
    selectionProperty(),
    __metadata("design:type", Array)
], NetworkAwareVisSelection.prototype, "networkIds", void 0);
var StationAwareVisSelection = (function (_super) {
    __extends(StationAwareVisSelection, _super);
    function StationAwareVisSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stationIds = [];
        return _this;
    }
    StationAwareVisSelection.prototype.addNetworkParams = function (params) {
        _super.prototype.addNetworkParams.call(this, params);
        if (params instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]) {
            var p_2 = params;
            (this.stationIds || []).forEach(function (id, i) { return p_2.set("station_ids[" + i + "]", "" + id); });
        }
        else if (params && typeof (params) === 'object') {
            (this.stationIds || []).forEach(function (id, i) { return params["station_ids[" + i + "]"] = "" + id; });
        }
        return params;
    };
    return StationAwareVisSelection;
}(NetworkAwareVisSelection));

__decorate([
    selectionProperty(),
    __metadata("design:type", Array)
], StationAwareVisSelection.prototype, "stationIds", void 0);
//# sourceMappingURL=vis-selection.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/visualization-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_MARGINS */
/* unused harmony export FONT_SIZE */
/* unused harmony export FONT_SIZE_PX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationBaseComponent; });
/* unused harmony export VisualizationMargins */
/* unused harmony export VisualizationSizing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__("../../../../../../../../../../../../npn_common/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DEFAULT_MARGINS = { top: 20, right: 30, bottom: 60, left: 40 };
var FONT_SIZE = 14;
var FONT_SIZE_PX = FONT_SIZE + 'px';
/*
IMPORTANT: There is a rather annoying chicken and egg problem with angular
development vs production builds.  This "component" originally took full
advantage of language features and was properly abstract, works great in dev.
Production builds wouldn't allow this.  They'd complain about the component
not being registered, comment out the @Component annotation and dev builds
then fail.
 */
var VisualizationBaseComponent = (function () {
    function VisualizationBaseComponent(window, rootElement, media) {
        var _this = this;
        this.window = window;
        this.rootElement = rootElement;
        this.media = media;
        this.thumbnail = false;
        this.id = 'visualization-' + Math.floor(Math.random() * 1000);
        this.clazz = 'visualization ' + this.constructor.name;
        this.margins = { top: 0, right: 0, left: 0, bottom: 0 };
        this.mobileMode = false;
        this.mediaSubscription = this.media.subscribe(function (mediaChange) {
            _this.mobileMode = mediaChange.mqAlias === 'xs' || mediaChange.mqAlias === 'sm';
        });
        this.isIE = !!Object(__WEBPACK_IMPORTED_MODULE_1__common__["p" /* detectIE */])();
    }
    /**
     * Calculates the dimensions (width based) that the visualization should
     * be drawn to fit properly within the parent element.
     */
    VisualizationBaseComponent.prototype.getSizeInfo = function (minWidth) {
        var native = this.rootElement.nativeElement, parent = native.parentElement, ratioMult = 0.5376, // ratio based on initial w/h of 930/500
        strToPx = function (s) { return parseInt(s.replace(/px$/, '')); }, style = getComputedStyle(parent, null), minusLeft = strToPx(style.paddingLeft) + strToPx(style.borderLeftWidth), minusRight = strToPx(style.paddingRight) + strToPx(style.borderRightWidth), innerWidth = parent.clientWidth - minusLeft - minusRight, margin = this.margins, cw = Math.floor(innerWidth), scaledWidth = cw;
        if (minWidth && cw < minWidth) {
            cw = minWidth;
        }
        var ch = Math.floor(cw * ratioMult), w = cw - margin.left - margin.right, h = ch - margin.top - margin.bottom;
        if (isNaN(w)) {
            w = 0;
        }
        if (isNaN(h)) {
            h = 0;
        }
        return (this.sizing = { scaledWidth: scaledWidth, width: w, height: h, margin: margin });
    };
    /**
     * `reset` is intended to initialize a visualziation to it's known "clean" state
     * placing all common elements, etc.  Subclasses will almost certainly over-ride
     * this implementation and call it to get the ball rolling.
     *
     * No asynchronous work should be done here, fetching data, etc. should happen
     * only within `update`.
     */
    VisualizationBaseComponent.prototype.reset = function () { throw new Error('abstract'); };
    /**
     * Called when the visualization should be redrawn from data already in hand
     * using the current state of the selection.
     */
    VisualizationBaseComponent.prototype.redraw = function () { throw new Error('abstract'); };
    /**
     * Called when the visualization should go get new clean data, based on its
     * selection, and reset/redraw itself.
     */
    VisualizationBaseComponent.prototype.update = function () { throw new Error('abstract'); };
    /**
     * Called when the visualization should resize itself.
     */
    VisualizationBaseComponent.prototype.resize = function () { throw new Error('abstract'); };
    VisualizationBaseComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.debug('visualization.ngAfterViewInit');
        // redraw and update the visualization on window re-size, debounce
        // to avoid rapid redraws as the window is resized
        // NOTE: there may be some stupid issue with IE11 and the window
        // resize event.  Could perhaps use the @HostListener route below but
        // that should then implement its own debounce (via setTimeout)
        // and they seem to want to push the use of RxJs so this kind of thing
        // feels cleaner.
        this.resizeSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
            .debounceTime(500)
            .subscribe(function (event) {
            _this.resize();
        });
        // now that we're prepared to start listening to our selection for
        // VisSelectionEvents.
        this.subscription = this.selection
            .subscribe(function (event) {
            switch (event) {
                case __WEBPACK_IMPORTED_MODULE_2__vis_selection__["i" /* VisSelectionEvent */].RESET:
                    return _this.reset();
                case __WEBPACK_IMPORTED_MODULE_2__vis_selection__["i" /* VisSelectionEvent */].REDRAW:
                    return _this.redraw();
                case __WEBPACK_IMPORTED_MODULE_2__vis_selection__["i" /* VisSelectionEvent */].UPDATE:
                    return _this.update();
                case __WEBPACK_IMPORTED_MODULE_2__vis_selection__["i" /* VisSelectionEvent */].RESIZE:
                    return _this.resize();
            }
        });
    };
    VisualizationBaseComponent.prototype.ngOnDestroy = function () {
        console.debug('visualization.ngOnDestroy');
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        if (this.mediaSubscription) {
            this.mediaSubscription.unsubscribe();
        }
    };
    /* a way of capturing window events...
    @HostListener('window:resize',['$event'])
    onResize(event) {
        this.redraw();
    }*/
    VisualizationBaseComponent.prototype.handleError = function (e) {
        if (e && e !== __WEBPACK_IMPORTED_MODULE_2__vis_selection__["e" /* REJECT_INVALID_SELECTION */]) {
            console.error(e);
        }
    };
    return VisualizationBaseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vis_selection__["h" /* VisSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vis_selection__["h" /* VisSelection */]) === "function" && _a || Object)
], VisualizationBaseComponent.prototype, "selection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], VisualizationBaseComponent.prototype, "thumbnail", void 0);
VisualizationBaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'visualization-base',
        template: '"abstract" component'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common__["o" /* Window */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common__["o" /* Window */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _d || Object])
], VisualizationBaseComponent);

var VisualizationMargins = (function () {
    function VisualizationMargins() {
    }
    return VisualizationMargins;
}());

var VisualizationSizing = (function () {
    function VisualizationSizing() {
    }
    return VisualizationSizing;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=visualization-base.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/visualization-download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationDownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizationDownloadComponent = (function () {
    function VisualizationDownloadComponent() {
    }
    VisualizationDownloadComponent.prototype.download = function ($event) {
        var _this = this;
        $event.preventDefault();
        var svg = document.querySelector("#" + this.svgWrapperId + " >svg"), wrappedSvg = __WEBPACK_IMPORTED_MODULE_1_d3__["q" /* select */](svg);
        wrappedSvg.attr('version', 1.1)
            .attr('xmlns', 'http://www.w3.org/2000/svg');
        var parent = svg.parentNode, html = parent.innerHTML, imgsrc = 'data:image/svg+xml;base64,' + window.btoa(html), canvas = document.querySelector("#dlcanvas-" + this.svgWrapperId), link = document.querySelector("#dllink-" + this.svgWrapperId);
        canvas.width = +wrappedSvg.attr('width');
        canvas.height = +wrappedSvg.attr('height');
        var context = canvas.getContext('2d'), image = new Image();
        image.onload = function () {
            context.drawImage(image, 0, 0);
            var canvasdata = canvas.toDataURL('image/png');
            link.download = _this.filename;
            link.href = canvasdata;
            link.click();
        };
        image.src = imgsrc;
    };
    return VisualizationDownloadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], VisualizationDownloadComponent.prototype, "svgWrapperId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], VisualizationDownloadComponent.prototype, "filename", void 0);
VisualizationDownloadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'visualization-download',
        template: "\n    <div class=\"vis-download\">\n        <a href (click)=\"download($event)\" title=\"Download\"><i class=\"fa fa-download\"></i></a>\n        <canvas id=\"dlcanvas-{{svgWrapperId}}\" style=\"display: none;\"></canvas>\n        <a id=\"dllink-{{svgWrapperId}}\" style=\"display: none;\">download</a>\n    </div>\n    ",
        styles: ["\n        .vis-download {\n            height: 28px;\n            width: 28px;\n            position: absolute;\n            right: 0px;\n            margin: 10px;\n            font-size: 1.5em;\n        }\n        .vis-download >a {\n            color: #000;\n            &:hover {\n                color: #000;\n            }\n        }\n    "]
    })
], VisualizationDownloadComponent);

//# sourceMappingURL=visualization-download.component.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/visualization-selection-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationSelectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scatter_plot__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_curves__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observer_activity__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observation_frequency__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clipped_wms_map__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VisualizationSelectionFactory = (function () {
    function VisualizationSelectionFactory(calendar, scatter, activity, observer, observationFreq, clippedWmsMap) {
        this.calendar = calendar;
        this.scatter = scatter;
        this.activity = activity;
        this.observer = observer;
        this.observationFreq = observationFreq;
        this.clippedWmsMap = clippedWmsMap;
        this.factoryMap = {};
        this.factoryMap.CalendarSelection = calendar;
        this.factoryMap.ScatterPlotSelection = scatter;
        this.factoryMap.ActivityCurvesSelection = activity;
        this.factoryMap.ObserverActivitySelection = observer;
        this.factoryMap.ObservationFrequencySelection = observationFreq;
        this.factoryMap.ClippedWmsMapSelection = clippedWmsMap;
    }
    VisualizationSelectionFactory.prototype.newCalendarSelection = function () {
        return this.calendar.newSelection();
    };
    VisualizationSelectionFactory.prototype.newScatterPlotSelection = function () {
        return this.scatter.newSelection();
    };
    VisualizationSelectionFactory.prototype.newActivityCurvesSelection = function () {
        return this.activity.newSelection();
    };
    VisualizationSelectionFactory.prototype.newObserverActivitySelection = function () {
        return this.observer.newSelection();
    };
    VisualizationSelectionFactory.prototype.newObservationFrequencySelection = function () {
        return this.observationFreq.newSelection();
    };
    VisualizationSelectionFactory.prototype.newClippedWmsMapSelection = function () {
        return this.clippedWmsMap.newSelection();
    };
    VisualizationSelectionFactory.prototype.cloneSelection = function (selection) {
        return this.newSelection(selection.external);
    };
    VisualizationSelectionFactory.prototype.newSelections = function (selections) {
        var _this = this;
        return selections.map(function (s) { return _this.newSelection(s); });
    };
    VisualizationSelectionFactory.prototype.newSelection = function (selection) {
        if (!this.factoryMap[selection.$class]) {
            throw new Error("Unknown selection type \"" + selection.$class + "\"");
        }
        var s = this.factoryMap[selection.$class].newSelection();
        s.external = selection;
        return s;
    };
    return VisualizationSelectionFactory;
}());
VisualizationSelectionFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__calendar__["d" /* CalendarSelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar__["d" /* CalendarSelectionFactory */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__scatter_plot__["d" /* ScatterPlotSelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scatter_plot__["d" /* ScatterPlotSelectionFactory */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__activity_curves__["d" /* ActivityCurvesSelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__activity_curves__["d" /* ActivityCurvesSelectionFactory */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__observer_activity__["d" /* ObserverActivitySelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__observer_activity__["d" /* ObserverActivitySelectionFactory */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__observation_frequency__["d" /* ObservationFrequencySelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__observation_frequency__["d" /* ObservationFrequencySelectionFactory */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__clipped_wms_map__["e" /* ClippedWmsMapSelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__clipped_wms_map__["e" /* ClippedWmsMapSelectionFactory */]) === "function" && _f || Object])
], VisualizationSelectionFactory);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=visualization-selection-factory.service.js.map

/***/ }),

/***/ "../../../../../../../../../../../../npn_common/visualizations/visualization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vis_selection__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/vis-selection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scatter_plot__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/scatter-plot/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/calendar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_curves__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/activity-curves/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observer_activity__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observer-activity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clipped_wms_map__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/clipped-wms-map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__observation_frequency__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/observation-frequency/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// the idea here is that with Angular 2/4 there is no $compile functionality
// so instead it's probably best to create an "all knowing" directive that
// includes all possible visualizations and picks which to render based on
// the type of selection it is given.
var VisualizationComponent = (function () {
    function VisualizationComponent() {
        this.thumbnail = false;
    }
    VisualizationComponent.prototype.ngOnInit = function () {
        if (this.selection instanceof __WEBPACK_IMPORTED_MODULE_2__scatter_plot__["c" /* ScatterPlotSelection */]) {
            this.scatter = this.selection;
        }
        else if (this.selection instanceof __WEBPACK_IMPORTED_MODULE_3__calendar__["c" /* CalendarSelection */]) {
            this.calendar = this.selection;
        }
        else if (this.selection instanceof __WEBPACK_IMPORTED_MODULE_6__clipped_wms_map__["d" /* ClippedWmsMapSelection */]) {
            this.clippedWmsMap = this.selection;
        }
        else if (this.selection instanceof __WEBPACK_IMPORTED_MODULE_4__activity_curves__["c" /* ActivityCurvesSelection */]) {
            this.activity = this.selection;
        }
        else if (this.selection instanceof __WEBPACK_IMPORTED_MODULE_5__observer_activity__["c" /* ObserverActivitySelection */]) {
            this.observer = this.selection;
        }
        else if (this.selection instanceof __WEBPACK_IMPORTED_MODULE_7__observation_frequency__["c" /* ObservationFrequencySelection */]) {
            this.observationFreq = this.selection;
        }
    };
    return VisualizationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], VisualizationComponent.prototype, "thumbnail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vis_selection__["h" /* VisSelection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vis_selection__["h" /* VisSelection */]) === "function" && _a || Object)
], VisualizationComponent.prototype, "selection", void 0);
VisualizationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'npn-visualization',
        template: "\n    <scatter-plot *ngIf=\"scatter\" [selection]=\"scatter\" [thumbnail]=\"thumbnail\"></scatter-plot>\n    <calendar *ngIf=\"calendar\" [selection]=\"calendar\"  [thumbnail]=\"thumbnail\"></calendar>\n    <activity-curves *ngIf=\"activity\" [selection]=\"activity\"  [thumbnail]=\"thumbnail\"></activity-curves>\n    <observer-activity *ngIf=\"observer\" [selection]=\"observer\" [thumbnail]=\"thumbnail\"></observer-activity>\n    <observation-frequency *ngIf=\"observationFreq\" [selection]=\"observationFreq\" [thumbnail]=\"thumbnail\"></observation-frequency>\n    <clipped-wms-map *ngIf=\"clippedWmsMap\" [selection]=\"clippedWmsMap\" [thumbnail]=\"thumbnail\"></clipped-wms-map>\n    <mat-expansion-panel *ngIf=\"selection.debug\">\n        <mat-expansion-panel-header>\n            <mat-panel-title>Selection</mat-panel-title>\n        </mat-expansion-panel-header>\n        <pre>{{selection.external | json}}</pre>\n    </mat-expansion-panel>\n    ",
        styles: ["\n        pre {\n            font-family: \"courier new\";\n        }\n        mat-expansion-panel {\n            margin-top: 10px;\n        }\n    "]
    })
], VisualizationComponent);

var _a;
//# sourceMappingURL=visualization.component.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export baseHrefFactory */
/* unused harmony export npnConfigurationFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_npn_common_gridded__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__refuge_control_component__ = __webpack_require__("../../../../../src/app/refuge-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spring_dashboard_component__ = __webpack_require__("../../../../../src/app/spring-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__refuge_service__ = __webpack_require__("../../../../../src/app/refuge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__status_of_spring_component__ = __webpack_require__("../../../../../src/app/status-of-spring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__start_of_spring_component__ = __webpack_require__("../../../../../src/app/start-of-spring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_npn_common_environments_environment__ = __webpack_require__("../../../../../../../../../../../../npn_common/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__start_of_spring_dialog_component__ = __webpack_require__("../../../../../src/app/start-of-spring-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function baseHrefFactory() {
    return window['npn_base_href'];
}
function npnConfigurationFactory() {
    return window['npn_configuration'];
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__refuge_control_component__["a" /* RefugeControl */],
            __WEBPACK_IMPORTED_MODULE_7__spring_dashboard_component__["a" /* SpringDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__status_of_spring_component__["a" /* StatusOfSpringComponent */],
            __WEBPACK_IMPORTED_MODULE_10__start_of_spring_component__["a" /* StartOfSpringComponent */],
            __WEBPACK_IMPORTED_MODULE_17__start_of_spring_dialog_component__["b" /* StartOfSpringDialog */],
            __WEBPACK_IMPORTED_MODULE_17__start_of_spring_dialog_component__["a" /* SosDoyTransform */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["e" /* NpnLibModule */],
            __WEBPACK_IMPORTED_MODULE_5__node_modules_npn_common_gridded__["b" /* NpnGriddedModule */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["h" /* VisualizationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["d" /* NpnCommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: __WEBPACK_IMPORTED_MODULE_15__node_modules_npn_common_environments_environment__["a" /* environment */].googleMapsApiKey
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__spring_dashboard_component__["a" /* SpringDashboardComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__refuge_service__["a" /* RefugeService */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["b" /* NPN_BASE_HREF */], useFactory: baseHrefFactory },
            { provide: __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["c" /* NPN_CONFIGURATION */], useFactory: npnConfigurationFactory }
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__start_of_spring_dialog_component__["b" /* StartOfSpringDialog */]
        ]
    })
], AppModule);

if (__WEBPACK_IMPORTED_MODULE_15__node_modules_npn_common_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_22" /* enableProdMode */])();
    /*
    let noop = () => {};
    console.log = noop;
    console.debug = noop;
    console.info = noop;*/
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/fli-pcnt.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MARKER_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLI_DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FLI_PCNT_BUCKET_INDEX; });
var BUCKETS = [
    [0.0, 5.0],
    [5.0, 25.0],
    [25.0, 75.0],
    [75.0, 95.0],
    [95.0, 101.0] // just so < test is inclusive of 100.0
];
var MARKER_COLORS = [
    '#ed3d3d',
    '#f5a27a',
    '#828282',
    '#5cb3f2',
    '#3b3bf0' // > 95%
];
var FLI_DESCRIPTIONS = [
    'extremely early',
    'early',
    'average',
    'late',
    'extremely late'
];
var FLI_PCNT_BUCKET_INDEX = function (pcnt) {
    if (isNaN(pcnt)) {
        return -1;
    }
    return BUCKETS.reduce(function (index, range, bucketIndex) {
        if (index === -1) {
            if (pcnt >= range[0] && pcnt < range[1]) {
                index = bucketIndex;
            }
        }
        return index;
    }, -1);
};
//# sourceMappingURL=fli-pcnt.js.map

/***/ }),

/***/ "../../../../../src/app/flyways.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLYWAY_COLORS; });
/* unused harmony export FLYWAY_NAMES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FLYWAY_TEXTS; });
var FLYWAY_COLORS = {
    'waterfowl_flyways.1': '#ff7f7f',
    'waterfowl_flyways.2': '#a3ff73',
    'waterfowl_flyways.3': '#73dfff',
    'waterfowl_flyways.4': '#df73ff' // atlantic
};
var FLYWAY_NAMES = {
    'waterfowl_flyways.1': 'Pacific',
    'waterfowl_flyways.2': 'Central',
    'waterfowl_flyways.3': 'Mississippi',
    'waterfowl_flyways.4': 'Atlantic'
};
var FLYWAY_TEXTS = {
    'waterfowl_flyways.1': 'This Refuge lies within the Pacific flyway, which exhibited a significant trend toward earlier onset of spring leaf out and bloom (0.4 and 0.4 days per decade, respectively). There was no difference in the advance of spring between northern and southern latitudes.',
    'waterfowl_flyways.2': 'This Refuge lies within the Central flyway, which exhibited a significant trend toward an earlier onset of spring leaf out and bloom (0.3 and 0.4 days per decade, respectively). The advance of spring was slightly greater at northern latitudes than at southern latitudes.',
    'waterfowl_flyways.3': 'This Refuge lies within the Mississippi flyway, which exhibited a significant trend toward an earlier onset of spring leaf out and bloom (0.4 and 0.4 days per decade, respectively). The advance of spring was greater at northern latitudes than at southern latitudes.',
    'waterfowl_flyways.4': 'This Refuge lies within the Atlantic flyway, which exhibited a significant trend toward an earlier onset of spring leaf out and bloom (0.5 and 0.6 days per decade, respectively). The advance of spring was greater at northern latitudes than at southern latitudes.'
};
//# sourceMappingURL=flyways.js.map

/***/ }),

/***/ "../../../../../src/app/map-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapBase; });
var MapBase = (function () {
    function MapBase() {
        var _this = this;
        this.getMap = new Promise(function (resolve) { return _this.mapResolver = resolve; });
        this.latitude = 41.135760;
        this.longitude = -99.157679;
        this.zoom = 4;
        this.mapStyles = [{
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }, {
                featureType: 'transit.station',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'poi.park',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'landscape',
                stylers: [{ visibility: 'off' }]
            }];
    }
    MapBase.prototype.configureMap = function (map) {
    };
    MapBase.prototype.mapReady = function (map) {
        this.configureMap(map);
        this.mapResolver(map);
    };
    return MapBase;
}());

//# sourceMappingURL=map-base.js.map

/***/ }),

/***/ "../../../../../src/app/refuge-control.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  :host mat-form-field {\n    width: 100%; }\n  @media (min-width: 992px) {\n    :host {\n      max-width: 60%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/refuge-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__refuge_service__ = __webpack_require__("../../../../../src/app/refuge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RefugeControl = (function () {
    function RefugeControl(refugeService) {
        this.refugeService = refugeService;
        this.control = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    RefugeControl.prototype.ngOnInit = function () {
        var _this = this;
        this.refugeService.refugeList()
            .map(function (list) { return list.filter(function (refuge) { return !!refuge.location; }); }) // just in case any don't have location set
            .subscribe(function (list) { return _this.onList.emit(_this.refuges = list); });
        this.control.valueChanges
            .filter(function (r) { return !r || typeof (r) === 'object'; }) // includes null
            .filter(function (r) { return !(_this.selected && r === _this.selected); }) // don't re-deliver
            .map(function (r) { return (r && typeof (r) === 'object') ? r : null; })
            .subscribe(function (refuge) { return _this.onSelect.emit(_this.selected = refuge); });
        this.filteredRefuges = this.control.valueChanges
            .filter(function (r) { return typeof (r) === 'string'; })
            .map(function (s) { return s ? _this._filterRefuges(s) : (_this.refuges ? _this.refuges.slice() : []); });
    };
    RefugeControl.prototype.refugeTitle = function (refuge) {
        return refuge ? refuge.title : '';
    };
    RefugeControl.prototype._filterRefuges = function (val) {
        if (!this.refuges) {
            return [];
        }
        val = val.toLowerCase();
        return this.refuges.filter(function (r) { return r.title.toLowerCase().indexOf(val) !== -1; });
    };
    return RefugeControl;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], RefugeControl.prototype, "onSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], RefugeControl.prototype, "onList", void 0);
RefugeControl = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'refuge-control',
        template: "\n    <mat-form-field *ngIf=\"refuges\" class=\"refuges-input\">\n        <input matInput [placeholder]=\"selected ? 'Refuge' : 'Find a refuge'\" [formControl]=\"control\" [matAutocomplete]=\"auto\" />\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"refugeTitle\">\n            <mat-option *ngFor=\"let refuge of filteredRefuges | async\" [value]=\"refuge\">{{ refuge.title }}</mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n    ",
        styles: [__webpack_require__("../../../../../src/app/refuge-control.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__refuge_service__["a" /* RefugeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__refuge_service__["a" /* RefugeService */]) === "function" && _c || Object])
], RefugeControl);

var _a, _b, _c;
//# sourceMappingURL=refuge-control.component.js.map

/***/ }),

/***/ "../../../../../src/app/refuge.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeService; });
/* unused harmony export Location */
/* unused harmony export Refuge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HEADERS = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
// this means that the app can no longer function outside of the context of Drupal, period.
var API_ROOT = '/api/refuge';
var RefugeService = (function () {
    function RefugeService(http, cacheService, selectionFactory) {
        var _this = this;
        this.http = http;
        this.cacheService = cacheService;
        this.selectionFactory = selectionFactory;
        this.refugeListPromise = new Promise(function (resolve, reject) {
            _this.refugePromiseResolver = resolve;
            _this.refugePromiseRejector = reject;
        });
        this.http.get("" + API_ROOT, {
            params: {
                terse: true
            }
        })
            .map(function (response) { return response.json(); })
            .map(function (map) { return Object.keys(map).map(function (key) { return map[key]; }); })
            .subscribe(function (refuges) { return _this.refugePromiseResolver(refuges); }, function (err) { return _this.refugePromiseRejector(err); });
    }
    RefugeService.prototype.parseSelections = function (json) {
        var selections = this.selectionFactory.newSelections(JSON.parse(json));
        /*
        console.log('JSON',json);
        console.log('SELECTIONS',selections);
        */
        return selections;
    };
    RefugeService.prototype.refugeUrl = function (refuge_id) {
        return API_ROOT + "/" + refuge_id;
    };
    RefugeService.prototype.castRefuge = function (refuge_id, refuge) {
        refuge.id = refuge_id;
        var selections = (refuge.selections || []).map(function (s) { return JSON.parse(s); });
        refuge.selections = this.selectionFactory.newSelections(selections);
        return refuge;
    };
    RefugeService.prototype.refugeList = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromPromise(this.refugeListPromise);
    };
    RefugeService.prototype.getRefuge = function (refuge_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.refugeUrl(refuge_id))
                .toPromise()
                .then(function (response) {
                resolve(_this.castRefuge(refuge_id, response.json()));
            })
                .catch(reject);
        });
    };
    RefugeService.prototype.saveRefuge = function (refuge) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var r = __assign({}, refuge);
            r.selections = (r.selections || []).map(function (s) { return JSON.stringify(s.external); });
            var json = JSON.stringify(r);
            console.log("JSON " + json);
            _this.http.put(_this.refugeUrl(refuge.id), json, { headers: HEADERS })
                .toPromise()
                .then(function (response) {
                resolve(_this.castRefuge(refuge.id, response.json()));
            })
                .catch(reject);
        });
    };
    return RefugeService;
}());
RefugeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["g" /* VisualizationSelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__node_modules_npn_common__["g" /* VisualizationSelectionFactory */]) === "function" && _c || Object])
], RefugeService);

var Location = (function () {
    function Location() {
    }
    return Location;
}());

var Refuge = (function () {
    function Refuge() {
    }
    return Refuge;
}());

var _a, _b, _c;
//# sourceMappingURL=refuge.service.js.map

/***/ }),

/***/ "../../../../../src/app/spring-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spring-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpringDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__refuge_service__ = __webpack_require__("../../../../../src/app/refuge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpringDashboardComponent = (function () {
    function SpringDashboardComponent(element, refugeService) {
        this.element = element;
        this.refugeService = refugeService;
        this.userIsLoggedIn = false;
        var e = element.nativeElement;
        this.userIsLoggedIn = e.getAttribute('user_is_logged_in') !== null;
    }
    SpringDashboardComponent.prototype.ngOnInit = function () {
    };
    SpringDashboardComponent.prototype.selectedTabChange = function ($event) {
        console.debug('selectedTabChange', $event);
    };
    return SpringDashboardComponent;
}());
SpringDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'spring-dashboard',
        template: "\n  <mat-tab-group class=\"spring-dashboard-tabs\" (selectedTabChange)=\"selectedTabChange($event)\">\n    <mat-tab>\n        <ng-template mat-tab-label>\n            <div class=\"spring-tab-label current-spring\">\n                <label>Current Status of Spring</label>\n            </div>\n        </ng-template>\n        <div class=\"spring-tab-content\">\n            <status-of-spring></status-of-spring>\n        </div>\n    </mat-tab>\n    <mat-tab>\n        <ng-template mat-tab-label>\n            <div class=\"spring-tab-label current-spring\">\n                <label>Long-term changes in the Start of Spring</label>\n            </div>\n        </ng-template>\n        <div class=\"spring-tab-content\">\n            <start-of-spring></start-of-spring>\n        </div>\n    </mat-tab>\n  </mat-tab-group>\n  ",
        styles: [__webpack_require__("../../../../../src/app/spring-dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__refuge_service__["a" /* RefugeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__refuge_service__["a" /* RefugeService */]) === "function" && _b || Object])
], SpringDashboardComponent);

var _a, _b;
//# sourceMappingURL=spring-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/start-of-spring-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SosDoyTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StartOfSpringDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flyways__ = __webpack_require__("../../../../../src/app/flyways.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fli_pcnt__ = __webpack_require__("../../../../../src/app/fli-pcnt.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_npn_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var SosDoyTransform = (function () {
    function SosDoyTransform() {
        this.dateFormat = __WEBPACK_IMPORTED_MODULE_4_d3__["r" /* timeFormat */]('%B %e');
    }
    SosDoyTransform.prototype.transform = function (value, justDate) {
        var fixed = value.toFixed(2);
        var fmt = this.dateFormat(this.getDate(value));
        return justDate ? "" + fmt : fmt + " (" + fixed + " DOY)";
    };
    SosDoyTransform.prototype.getDate = function (value) {
        var rounded = Math.round(value);
        var d = new Date(2010, 0, 1); // 2010 not a leap year
        d.setTime(d.getTime() + (rounded * 24 * 60 * 60 * 1000));
        return d;
    };
    return SosDoyTransform;
}());
SosDoyTransform = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'SosDoy' })
], SosDoyTransform);

var StartOfSpringDialog = (function () {
    function StartOfSpringDialog(dialogData, dialogRef, zone, npnSvcUtils, rootElement, doyTrans) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.npnSvcUtils = npnSvcUtils;
        this.rootElement = rootElement;
        this.doyTrans = doyTrans;
        this.working = true;
        this.FLYWAY_TEXTS = __WEBPACK_IMPORTED_MODULE_2__flyways__["b" /* FLYWAY_TEXTS */];
        this.refuge = dialogData.refuge;
        this.refugeData = dialogData.refugeData;
        var bucketIndex = Object(__WEBPACK_IMPORTED_MODULE_3__fli_pcnt__["b" /* FLI_PCNT_BUCKET_INDEX */])(this.refugeData['FLI (%)']);
        this.noData = bucketIndex === -1;
        if (bucketIndex !== -1) {
            this.fliCategory = __WEBPACK_IMPORTED_MODULE_3__fli_pcnt__["a" /* FLI_DESCRIPTIONS */][bucketIndex];
        }
    }
    /*
    this feels like a hack/workaround.  something about the code in this dialog
    prevents the standard mat-dialog-close directive from working, clicks of the
    close icon are being run outside of the angular zone even though (click) events
    are being tied to the correct code.

    the behavior is inconsistent.  everything works on a new window until a browser refresh
    and then stops working.  once it stops working the dialog will close if you click the X
    and then hover the mouse over the visualization (meaning the d3 mouse events ARE being
    evaluated within the angular zone).

    at any rate cannot deep end on the issue and forcing the close to run in the angular
    zone seems to work.
    */
    StartOfSpringDialog.prototype.close = function () {
        var _this = this;
        this.zone.run(function () {
            _this.dialogRef.close();
        });
    };
    StartOfSpringDialog.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.noData) {
            return;
        }
        var svg = __WEBPACK_IMPORTED_MODULE_4_d3__["q" /* select */]('#timeSeries');
        var native = this.rootElement.nativeElement;
        var wrapper = native.querySelector('#startOfSpringVisWrapper');
        var style = getComputedStyle(wrapper, null);
        var strToPx = function (s) { return parseInt(s.replace(/px$/, '')); };
        var ratioMult = 0.5376; // based on 930/500
        var minusLeft = strToPx(style.paddingLeft) + strToPx(style.borderLeftWidth), minusRight = strToPx(style.paddingRight) + strToPx(style.borderRightWidth), innerWidth = wrapper.clientWidth - minusLeft - minusRight, cw = Math.floor(innerWidth);
        var margin = { top: 35, right: 20, left: 55, bottom: 50 };
        var ch = (cw * ratioMult), w = cw - margin.left - margin.right, h = ch - margin.top - margin.bottom;
        var svgWidth = w + margin.left + margin.right, svgHeight = h + margin.top + margin.bottom;
        svg.attr('width', svgWidth)
            .attr('height', svgHeight)
            .attr('viewBox', "0 0 " + svgWidth + " " + svgHeight)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        svg.append('g')
            .attr('class', 'vis-background')
            .append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#fff');
        var chart = svg.append('g')
            .attr('transform', "translate(" + margin.left + "," + margin.top + ")")
            .attr('class', 'vis-chart');
        var hover = svg.append('g')
            .attr('transform', "translate(" + margin.left + "," + margin.top + ")")
            .style('display', 'none');
        var hoverLine = hover.append('line')
            .attr('class', 'focus')
            .attr('fill', 'none')
            .attr('stroke', 'green')
            .attr('stroke-width', 1)
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', h);
        var hoverDoy = hover.append('text')
            .attr('class', 'focus-doy')
            .style('white-space', 'pre')
            .attr('y', 10)
            .attr('x', 0)
            .text(' ');
        var startYear = 1981, endYear = 2013; // BEST data set only throu 2013 (new Date()).getFullYear() - 2;
        svg.append('g')
            .attr('transform', "translate(10,20)")
            .append('text')
            .attr('font-size', '18px')
            .attr('font-style', 'bold')
            .attr('text-anchor', 'left')
            .text("Arrival of Spring First Leaf Index from " + startYear + "-" + endYear);
        svg.append('g')
            .attr('transform', "translate(10," + (h + margin.top + margin.bottom - 10) + ")")
            .append('text')
            .attr('font-size', '11px')
            .attr('font-style', 'italic')
            .attr('text-anchor', 'right').text('USA National Phenology Network, www.usanpn.org');
        var x = __WEBPACK_IMPORTED_MODULE_4_d3__["p" /* scaleTime */]().rangeRound([0, w]);
        var y = __WEBPACK_IMPORTED_MODULE_4_d3__["o" /* scaleLinear */]().rangeRound([h, 0]);
        var parseDate = __WEBPACK_IMPORTED_MODULE_4_d3__["s" /* timeParse */]('%Y-%m-%d');
        var line = __WEBPACK_IMPORTED_MODULE_4_d3__["l" /* line */]()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.doy); });
        this.npnSvcUtils.cachedGet(this.npnSvcUtils.dataApiUrl('/v0/si-x/area/statistics/timeseries'), {
            layerName: 'si-x:average_leaf_best',
            fwsBoundary: this.refuge.boundary_id,
            yearStart: startYear,
            yearEnd: endYear,
            useBufferedBoundary: true,
            useConvexHullBoundary: false,
            useCache: false
        }).then(function (response) {
            _this.working = false;
            var data = response.timeSeries;
            (data || []).forEach(function (d) {
                d.date = parseDate(d.date);
                d.doy = Math.round(d.mean);
            });
            x.domain(__WEBPACK_IMPORTED_MODULE_4_d3__["j" /* extent */](data, function (d) { return d.date; }));
            y.domain(__WEBPACK_IMPORTED_MODULE_4_d3__["j" /* extent */](data, function (d) { return d.doy; }));
            chart.append("g")
                .attr("transform", "translate(0," + h + ")")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3__["a" /* axisBottom */](x))
                .select(".domain")
                .remove();
            var abbrevDateFmt = __WEBPACK_IMPORTED_MODULE_4_d3__["r" /* timeFormat */]('%b %e');
            var yTickFmt = function (d) { return abbrevDateFmt(_this.doyTrans.getDate(d)); };
            chart.append("g")
                .call(__WEBPACK_IMPORTED_MODULE_4_d3__["b" /* axisLeft */](y).tickFormat(yTickFmt))
                .append("text")
                .attr("fill", "#000")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Date");
            chart.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
            chart.selectAll('.dot')
                .data(data)
                .enter().append('circle')
                .attr('class', 'dot')
                .attr('r', 3.5)
                .attr('cx', function (d) { return x(d.date); })
                .attr('cy', function (d) { return y(d.doy); })
                .style('fill', '#000');
            var dateFormat = __WEBPACK_IMPORTED_MODULE_4_d3__["r" /* timeFormat */]('%Y');
            function updateFocus() {
                var coords = __WEBPACK_IMPORTED_MODULE_4_d3__["m" /* mouse */](this), xCoord = coords[0];
                var inverted = x.invert(xCoord);
                var calcDiff = function (d) { return Math.abs(inverted.getTime() - d.getTime()); };
                // find the nearest data point to inverted to "snap to"
                var nearest = data.reduce(function (nearest, d, index) {
                    var diff = calcDiff(d.date);
                    if (!nearest || diff < nearest.diff) {
                        return {
                            diff: diff,
                            date: d.date,
                            doy: d.doy,
                            index: index
                        };
                    }
                    return nearest;
                }, undefined);
                var tx = x(nearest.date);
                hoverLine.attr('transform', "translate(" + tx + ")");
                var anchor = nearest.index < (data.length / 2) ? 'start' : 'end';
                var doyDate = yTickFmt(nearest.doy);
                hoverDoy
                    .style('text-anchor', anchor)
                    .attr('x', tx)
                    .text("    " + dateFormat(nearest.date) + " (" + doyDate + ")     ");
            }
            svg.append('rect')
                .attr('class', 'overlay')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                .style('fill', 'none')
                .style('pointer-events', 'all')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', w)
                .attr('height', h)
                .on('mouseover', function () { return hover.style('display', null); })
                .on('mouseout', function () { return hover.style('display', 'none'); })
                .on('mousemove', updateFocus);
        });
    };
    return StartOfSpringDialog;
}());
StartOfSpringDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <button mat-icon-button class=\"dialog-close\" (click)=\"close()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n    <div class=\"mat-typography\" id=\"startOfSpringDialogWrapper\">\n        <span class=\"mat-title\">{{refuge.title}}</span>\n        <span *ngIf=\"!noData; else noDataDisclaimer\">\n            <ul class=\"refuge-info\">\n                <li>\n                    <label>Average spring leaf onset in recent decades (1983-2012):</label>\n                    {{refugeData['FLI (Day)'] | SosDoy}}\n                </li>\n                <li>\n                    <label>Recent change in timing relative to historical range of variation (1901-2012):</label>\n                    Spring first leaf arrival in recent decades is {{fliCategory}} ({{refugeData['FLI (%)'] | number:'1.2-2'}}%) compared to the historical range.\n                </li>\n                <li>\n                    <label>Change in timing over latitudinal exent of migratory flyway (1920-2012):</label>\n                    <p>\n                        <span *ngIf=\"FLYWAY_TEXTS[refuge.flywayId]; else noFlyway\">\n                        {{FLYWAY_TEXTS[refuge.flywayId]}}\n                        </span>\n                        <ng-template #noFlyway>\n                        This Refuge is outside of the four migratory flyways.\n                        </ng-template>\n                    </p>\n                </li>\n            </ul>\n            <div id=\"startOfSpringVisWrapper\">\n                <div class=\"vis-working\" *ngIf=\"working\">\n                    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n                </div>\n                <svg id=\"timeSeries\"></svg>\n            </div>\n        </span>\n        <ng-template #noDataDisclaimer>\n            <p>Data are not available for this Refuge.</p>\n        </ng-template>\n    </div>\n    <!--pre>{{refugeData | json}}</pre-->\n    ",
        styles: ["\n        button.dialog-close {\n            float: right;\n        }\n        #startOfSpringVisWrapper {\n            min-height: 1px;\n            position: relative;\n        }\n        svg {\n            display: block;\n            border: 1px solid #aaa;\n        }\n        ul.refuge-info>li {\n            list-style: none;\n        }\n        ul.refuge-info>li label {\n            font-weight: bold;\n        }\n    "],
        providers: [
            SosDoyTransform
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_npn_common__["f" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_npn_common__["f" /* NpnServiceUtils */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object, SosDoyTransform])
], StartOfSpringDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=start-of-spring-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/start-of-spring.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-wrapper {\n  position: relative; }\n  .map-wrapper ul.start-of-spring-legend {\n    list-style: none;\n    margin: 0px;\n    width: 185px;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    padding: 8px;\n    border: 1px solid #aaa;\n    background-color: rgba(255, 255, 255, 0.85);\n    border-radius: 5px; }\n    .map-wrapper ul.start-of-spring-legend > li {\n      list-style: none;\n      padding: 0px; }\n      .map-wrapper ul.start-of-spring-legend > li:not(.title) {\n        position: relative;\n        padding: 0px 0px 4px 25px; }\n        .map-wrapper ul.start-of-spring-legend > li:not(.title):before {\n          display: inline-block;\n          content: ' ';\n          width: 20px;\n          height: 20px;\n          border: 1px solid #aaa;\n          margin-right: 5px;\n          position: absolute;\n          top: 0px;\n          left: 0px; }\n      .map-wrapper ul.start-of-spring-legend > li.mean-5:before {\n        background-color: #ed3d3d; }\n      .map-wrapper ul.start-of-spring-legend > li.mean-5-25:before {\n        background-color: #f5a27a; }\n      .map-wrapper ul.start-of-spring-legend > li.mean-25-75:before {\n        background-color: #828282; }\n      .map-wrapper ul.start-of-spring-legend > li.mean-75-95:before {\n        background-color: #5cb3f2; }\n      .map-wrapper ul.start-of-spring-legend > li.mean-95:before {\n        background-color: #3b3bf0; }\n      .map-wrapper ul.start-of-spring-legend > li.no-data:before {\n        background-color: #ffffff; }\n      .map-wrapper ul.start-of-spring-legend > li.title {\n        font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start-of-spring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartOfSpringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_base__ = __webpack_require__("../../../../../src/app/map-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_npn_common__ = __webpack_require__("../../../../../../../../../../../../npn_common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__start_of_spring_dialog_component__ = __webpack_require__("../../../../../src/app/start-of-spring-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flyways__ = __webpack_require__("../../../../../src/app/flyways.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fli_pcnt__ = __webpack_require__("../../../../../src/app/fli-pcnt.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_npn_common_gridded__ = __webpack_require__("../../../../../../../../../../../../npn_common/gridded/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










function polyContains(point, poly) {
    return google.maps.geometry.poly.containsLocation(point, poly) || google.maps.geometry.poly.isLocationOnEdge(point, poly);
}
function geoContains(point, geo) {
    var polyType = geo.getType();
    var poly, arr, i;
    if (polyType == 'Polygon') {
        arr = geo.getArray();
        var outerRing = new google.maps.Polygon({ paths: arr[0].getArray() });
        if (polyContains(point, outerRing)) {
            /* for the purposes of this application being anywhere inside the
               outer ring means you're in the flyway
               the polygons may have holes for things like the great lakes..
            // inside the outer ring
            for(i = 1; i < arr.length; i++) {
                const innerRing = new google.maps.Polygon({paths: arr[i].getArray()});
                if(polyContains(point,innerRing)) {
                    // inside a hole in the outer ring so not in the polygon
                    return false;
                }
            }*/
            return true;
        }
        return false;
    }
    else if (polyType === 'MultiPolygon' || polyType == 'GeometryCollection') {
        arr = geo.getArray();
        for (i = 0; i < arr.length; i++) {
            if (geoContains(point, arr[i])) {
                return true;
            }
        }
    }
    return false;
}
var DIALOG_CONFIG = {
    width: '90vw',
    maxWidth: '90vw'
};
var StartOfSpringComponent = (function (_super) {
    __extends(StartOfSpringComponent, _super);
    function StartOfSpringComponent(npnSvcUtils, dialog, mapsApiLoader, zone) {
        var _this = _super.call(this) || this;
        _this.npnSvcUtils = npnSvcUtils;
        _this.dialog = dialog;
        _this.mapsApiLoader = mapsApiLoader;
        _this.zone = zone;
        _this.FLI_DESCRIPTIONS = __WEBPACK_IMPORTED_MODULE_8__fli_pcnt__["a" /* FLI_DESCRIPTIONS */];
        _this.flywayTesters = [];
        return _this;
    }
    StartOfSpringComponent.prototype.findFlywayId = function (refuge) {
        var _this = this;
        var flywayId = this.flywayTesters.reduce(function (flywayId, tester) {
            if (!flywayId) {
                flywayId = tester(refuge.point);
            }
            return flywayId;
        }, null); // using null so subsequent clicks don't re-test
        if (!flywayId) {
            // create a polygon
            var distToCornersKmToTest = [
                25,
                50,
                75
            ];
            var bearingsToTest_1 = [
                270,
                315,
                0,
                45,
                90,
                135,
                180,
                225,
                270,
            ];
            flywayId = distToCornersKmToTest.reduce(function (flywayId, distToCornersKm) {
                if (!flywayId) {
                    flywayId = bearingsToTest_1.reduce(function (flywayId, bearing) {
                        if (flywayId) {
                            return flywayId;
                        }
                        var p = Object(__WEBPACK_IMPORTED_MODULE_9__node_modules_npn_common_gridded__["a" /* DESTINATION_POINT */])(refuge.point, bearing, distToCornersKm);
                        return _this.flywayTesters.reduce(function (fid, tester) {
                            if (!fid) {
                                fid = tester(p);
                            }
                            return fid;
                        }, null);
                    }, null);
                    /* draw polygon on the map to show this miss
                    if(!flywayId) {
                        const intersects = new google.maps.Polygon({
                            paths: bearingsToTest.map(bearing => DESTINATION_POINT(refuge.point,bearing,distToCornersKm)),
                            strokeColor: 'red',
                            fillColor: 'blue',
                            strokeWeight: 1,
                            fillOpacity: 0.0
                        })
                        this.getMap.then(map => intersects.setMap(map))
                    }*/
                }
                return flywayId;
            }, null);
        }
        return flywayId;
    };
    StartOfSpringComponent.prototype.reset = function () {
        var _this = this;
        delete this.selected;
        this.getMap.then(function (map) {
            map.setCenter(new google.maps.LatLng(_this.latitude, _this.longitude));
            map.setZoom(_this.zoom);
        });
    };
    StartOfSpringComponent.prototype.refugesReady = function (refuges) {
        var _this = this;
        this.mapsApiLoader.load()
            .then(function () {
            _this.getMap.then(function (map) {
                _this.npnSvcUtils.cachedGet(_this.npnSvcUtils.geoServerUrl('/gdd/ows'), {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'gdd:waterfowl_flyways',
                    maxFeatures: 50,
                    outputFormat: 'application/json'
                })
                    .then(function (geoJson) {
                    map.data.addGeoJson(geoJson);
                    map.data.setStyle(function (feature) {
                        return {
                            strokeOpacity: 0,
                            strokeWeight: 0,
                            strokeColor: 'transparent',
                            fillOpacity: 0.10,
                            fillColor: __WEBPACK_IMPORTED_MODULE_7__flyways__["a" /* FLYWAY_COLORS */][feature.getId()] || '#ff0000',
                            clickable: false
                        };
                    });
                    var self = _this;
                    map.data.forEach(function (feature) {
                        var id = feature.getId();
                        var flywayGeometry = feature.getGeometry();
                        self.flywayTesters.push(function (point) {
                            return geoContains(point, flywayGeometry) ? id : null;
                        });
                    });
                    // go get the data
                    var nanData = null;
                    __WEBPACK_IMPORTED_MODULE_4_d3__["e" /* csv */]('/sites/fws/modules/custom/fws_dashboard/data/start_of_spring_across_moving_windows.csv', function (csvData) {
                        var dataByRefuge = csvData.reduce(function (map, row) {
                            Object.keys(row).forEach(function (key) {
                                if (key && key !== 'NWR') {
                                    row[key] = parseFloat(row[key]);
                                }
                            });
                            // the "NWR" column contains the refuge boundary id
                            // in other CSV is '' column
                            map[row['NWR'].trim()] = row;
                            if (!nanData) {
                                nanData = Object.keys(row).reduce(function (map, key) {
                                    map[key] = key === 'NWR' ? null : Number.NaN;
                                    return map;
                                }, {});
                            }
                            return map;
                        }, {});
                        refuges = refuges.filter(function (refuge) {
                            if (!refuge.location) {
                                return false;
                            }
                            var refugeKey = refuge.title.toUpperCase();
                            if (!dataByRefuge[refugeKey]) {
                                console.warn("No data found for " + refugeKey);
                                // insert a row containing NaN for all numbers
                                dataByRefuge[refugeKey] = __assign({}, nanData, { NWR: refugeKey });
                            }
                            return true;
                        });
                        refuges.forEach(function (refuge) {
                            var refugeKey = refuge.title.toUpperCase();
                            refuge.data = dataByRefuge[refugeKey];
                            refuge.point = new google.maps.LatLng(refuge.location.lat, refuge.location.lng);
                            var markerColorIndex = Object(__WEBPACK_IMPORTED_MODULE_8__fli_pcnt__["b" /* FLI_PCNT_BUCKET_INDEX */])(refuge.data['FLI (%)']);
                            /* temporary test code to see for refuges with data which aren't in a flyway boundary
                             * doing this up front is too expensive only make test when the user clicks on a marker
                            if(markerColorIndex !== -1) {
                                setTimeout(() => {
                                    if(!this.findFlywayId(refuge)) {
                                        console.log(`${refuge.title} NOT IN FLYWAY`)
                                    }
                                },5000);
                            }*/
                            // @agm/core does not expose enough of the google maps
                            // api to do real custom icons, so going under the covers
                            // here to avoid using external images.
                            var marker = new google.maps.Marker({
                                map: map,
                                title: refuge.title,
                                icon: {
                                    path: google.maps.SymbolPath.CIRCLE,
                                    scale: 5,
                                    fillOpacity: 1.0,
                                    strokeWeight: 1,
                                    fillColor: markerColorIndex !== -1 ? __WEBPACK_IMPORTED_MODULE_8__fli_pcnt__["c" /* MARKER_COLORS */][markerColorIndex] : '#fff'
                                },
                                position: refuge.point
                            });
                            marker.addListener('click', function () { return _this.selectRefuge(refuge); });
                        });
                    });
                });
            });
        });
    };
    StartOfSpringComponent.prototype.selectRefuge = function (refuge) {
        if (!refuge) {
            return this.reset();
        }
        this.selected = refuge;
        this.getMap.then(function (map) {
            map.panTo(refuge.point);
            map.setZoom(8);
        });
        if (refuge.flywayId === undefined) {
            refuge.flywayId = this.findFlywayId(refuge);
        }
        var config = __assign({}, DIALOG_CONFIG, { data: {
                refuge: refuge,
                refugeData: refuge.data
            } });
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__start_of_spring_dialog_component__["b" /* StartOfSpringDialog */], config);
    };
    return StartOfSpringComponent;
}(__WEBPACK_IMPORTED_MODULE_2__map_base__["a" /* MapBase */]));
StartOfSpringComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'start-of-spring',
        template: "\n    <form class=\"control-form\">\n        <refuge-control (onList)=\"refugesReady($event)\" (onSelect)=\"selectRefuge($event)\"></refuge-control>\n        <button *ngIf=\"selected\" class=\"reset-button\"\n            mat-icon-button (click)=\"reset()\" matTooltip=\"Reset map\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></button>\n    </form>\n    <div class=\"map-wrapper\">\n        <agm-map (mapReady)=\"mapReady($event)\"\n                [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\"\n                [streetViewControl]=\"false\" [scrollwheel]=\"false\" [styles]=\"mapStyles\">\n        </agm-map>\n        <ul class=\"start-of-spring-legend\">\n            <li class=\"title\">Recent timing of spring onset relative to historical range of variability (1901-2012)</li>\n            <li class=\"mean-5\">&lt; 5% ({{FLI_DESCRIPTIONS[0]}})</li>\n            <li class=\"mean-5-25\">5 - 25% ({{FLI_DESCRIPTIONS[1]}})</li>\n            <li class=\"mean-25-75\">25 - 75% ({{FLI_DESCRIPTIONS[2]}})</li>\n            <li class=\"mean-75-95\">75 - 95% ({{FLI_DESCRIPTIONS[3]}})</li>\n            <li class=\"mean-95\">&gt; 95% ({{FLI_DESCRIPTIONS[4]}})</li>\n            <li class=\"no-data\">No data</li>\n        </ul>\n    </div>\n    ",
        styles: [__webpack_require__("../../../../../src/app/start-of-spring.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_npn_common__["f" /* NpnServiceUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__node_modules_npn_common__["f" /* NpnServiceUtils */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _d || Object])
], StartOfSpringComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=start-of-spring.component.js.map

/***/ }),

/***/ "../../../../../src/app/status-of-spring.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-wrapper {\n  position: relative; }\n  .map-wrapper wms-map-legend /deep/ .gridded-legend {\n    margin-top: 10px;\n    border-bottom: 1px solid #aaa; }\n  @media (min-width: 992px) {\n    .map-wrapper wms-map-legend,\n    .map-wrapper clipped-wms-map-statistics {\n      position: absolute;\n      left: 10px;\n      padding: 8px;\n      border: 1px solid #aaa;\n      background-color: rgba(255, 255, 255, 0.85);\n      border-radius: 5px; }\n    .map-wrapper wms-map-legend {\n      bottom: 25px;\n      width: 60%; }\n      .map-wrapper wms-map-legend /deep/ .gridded-legend {\n        margin-top: 0px;\n        border-bottom: none;\n        width: 100%;\n        height: 125px;\n        border: none; }\n    .map-wrapper clipped-wms-map-statistics {\n      top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-of-spring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusOfSpringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_base__ = __webpack_require__("../../../../../src/app/map-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__refuge_control_component__ = __webpack_require__("../../../../../src/app/refuge-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_npn_common_visualizations__ = __webpack_require__("../../../../../../../../../../../../npn_common/visualizations/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ONE_DAY_MILLIS = (24 * 60 * 60 * 1000);
var StatusOfSpringComponent = (function (_super) {
    __extends(StatusOfSpringComponent, _super);
    function StatusOfSpringComponent(selectionFactory) {
        var _this = _super.call(this) || this;
        _this.selectionFactory = selectionFactory;
        _this.componentDestroyed = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        _this.selectionFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        return _this;
    }
    StatusOfSpringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allControls = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            refuges: this.refugeControl.control,
            selection: this.selectionFormControl
        });
        this.selectionFormControl.valueChanges
            .takeUntil(this.componentDestroyed)
            .filter(function (s) { return typeof (s) === 'object'; })
            .filter(function (s) { return !(_this.selection && s === _this.selection); }) // don't re-deliver
            .subscribe(function (selection) { return _this.setSelection(selection); });
    };
    StatusOfSpringComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
    };
    StatusOfSpringComponent.prototype.newSelection = function (refuge, service, layerId) {
        var selection = this.selectionFactory.newSelection();
        selection.networkIds = [refuge.network_id];
        selection.fwsBoundary = refuge.boundary_id;
        selection.service = service;
        selection.layer = selection.validLayers.reduce(function (found, l) {
            return found || (l.id === layerId ? l : undefined);
        }, undefined);
        return selection;
    };
    StatusOfSpringComponent.prototype.refugeTitle = function (refuge) {
        return refuge ? refuge.title : '';
    };
    StatusOfSpringComponent.prototype.refugeClick = function (refuge) {
        this.refugeControl.control.setValue(refuge);
    };
    StatusOfSpringComponent.prototype.reset = function () {
        this.refugeControl.control.setValue(null);
    };
    StatusOfSpringComponent.prototype.focusRefuge = function (refuge) {
        var _this = this;
        console.debug('focusRefuge', refuge);
        this.focused = refuge;
        if (!refuge) {
            this.selections = null;
            this.selectionFormControl.setValue(null);
            this.getMap.then(function (map) {
                map.setCenter(new google.maps.LatLng(_this.latitude, _this.longitude));
                map.setZoom(_this.zoom);
            });
            return;
        }
        this.getMap.then(function (map) {
            map.panTo(new google.maps.LatLng(refuge.location.lat, refuge.location.lng));
            map.setZoom(8);
        });
        console.log('focusRefuge', refuge);
        // build the new set of selections to put stuff on the map
        var selections = [], 
        // TODO writing in winter and no spring data, pretending
        // today is another date for now.
        //today = new Date(2017,4,2,0,0,0,0),//new Date(),
        today = new Date(), yesterday = new Date(today.getTime() - ONE_DAY_MILLIS), selection;
        // where has spring arrived
        selection = this.newSelection(refuge, 'si-x', 'current');
        selection.explicitDate = yesterday;
        selections.push({
            label: 'Where has spring arrived?',
            selection: selection
        });
        // spring forecast
        selection = this.newSelection(refuge, 'si-x', 'forecast');
        selection.explicitDate = today;
        selection.forecastDays = 3;
        selections.push({
            label: 'Spring forecast',
            selection: selection
        });
        // anomaly
        selection = this.newSelection(refuge, 'si-x', 'anomaly');
        selection.explicitDate = yesterday;
        selections.push({
            label: 'How does this year stack up?',
            selection: selection
        });
        this.selections = selections;
        this.selectionFormControl.setValue(this.selections[0].selection);
    };
    StatusOfSpringComponent.prototype.setSelection = function (s) {
        var _this = this;
        console.debug('setSelection', s ? s.external : 'NULL');
        this.getMap
            .then(function (map) {
            var add = function () {
                if (_this.selection = s) {
                    var refuge = _this.focused, onResolve_1 = function () {
                        _this.allControls.enable();
                        console.debug('added selection', s.external);
                    };
                    _this.allControls.disable();
                    if (refuge.no_geospatial) {
                        console.debug('refuge has no geo spatial data.');
                        s.layer = __assign({}, s.layer);
                        s.layer.noDataDisclaimer = 'Data are not currently available for this Refuge, as it is outside of the coverage of the Spring Indices model.';
                        s.getBoundary()
                            .then(function (geoJson) {
                            s.data = {
                                data: null,
                                boundary: geoJson,
                                statistics: {
                                    date: s.explicitDate,
                                    count: 0
                                },
                            };
                            s.addBoundary(map, geoJson);
                            onResolve_1();
                        });
                    }
                    else {
                        s.addTo(map).then(onResolve_1);
                    }
                }
            };
            if (_this.selection) {
                _this.selection.removeFrom(map)
                    .then(add);
            }
            else {
                add();
            }
        });
    };
    return StatusOfSpringComponent;
}(__WEBPACK_IMPORTED_MODULE_3__map_base__["a" /* MapBase */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__refuge_control_component__["a" /* RefugeControl */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__refuge_control_component__["a" /* RefugeControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__refuge_control_component__["a" /* RefugeControl */]) === "function" && _a || Object)
], StatusOfSpringComponent.prototype, "refugeControl", void 0);
StatusOfSpringComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'status-of-spring',
        template: "\n    <form class=\"control-form\">\n        <refuge-control (onList)=\"refuges=$event\" (onSelect)=\"focusRefuge($event)\"></refuge-control>\n        <mat-form-field *ngIf=\"selections\" class=\"selection-input\">\n            <mat-select placeholder=\"Layer\" [formControl]=\"selectionFormControl\">\n                <mat-option *ngFor=\"let s of selections\" [value]=\"s.selection\">{{ s.label }}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <button *ngIf=\"selection\" class=\"reset-button\" [disabled]=\"selection && selection.working\"\n            mat-icon-button (click)=\"reset()\" matTooltip=\"Reset map\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></button>\n    </form>\n\n    <div class=\"map-wrapper\">\n        <div class=\"vis-working\" *ngIf=\"selection && selection.working\">\n            <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n        </div>\n        <agm-map (mapReady)=\"mapReady($event)\"\n                [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\"\n                [streetViewControl]=\"false\" [scrollwheel]=\"false\" [styles]=\"mapStyles\">\n            <span *ngFor=\"let refuge of refuges\">\n                <agm-marker *ngIf=\"refuge !== focused\"\n                    (markerClick)=\"refugeClick(refuge)\"\n                    iconUrl=\"/sites/fws/libraries/gmap_markers/marker-1.png\"\n                    [title]=\"refuge.title\"\n                    [latitude]=\"refuge.location.lat\" [longitude]=\"refuge.location.lng\"></agm-marker>\n            </span>\n        </agm-map>\n        <wms-map-legend *ngIf=\"selection && selection.legend && selection.data && selection.data.statistics && selection.data.statistics.count !== 0\" [legend]=\"selection.legend\"></wms-map-legend>\n        <clipped-wms-map-statistics *ngIf=\"selection && selection.data && selection.data.statistics\"\n            [selection]=\"selection\"></clipped-wms-map-statistics>\n    </div>\n    <div class=\"project-profile-block\" *ngIf=\"focused\">\n        <p *ngIf=\"focused.partner\">\n            How is the Status of Spring impacting phenology of plants and animals at your Refuge?\n            Visit the <a [href]=\"focused.links.dashboard\" [title]=\"focused.title + 'Dashboard'\">{{focused.title}} Dashboard</a> to find out!</p>\n        <span *ngIf=\"!focused.partner\">\n            <p>Refuges across the country are using <a href=\"https://www.usanpn.org/natures_notebook\" alt=\"Nature's Notebook\" title=\"Nature's Notebook\"><em>Nature\u2019s Notebook</em></a> to learn about how the Status of Spring is impacting phenology of plants and animals at their refuges.</p>\n            <p>Start a phenology monitoring project at your refuge to better understand phenological changes of your species of interest!</p>\n            <p class=\"call-arrow\"><a href=\"/project\" title=\"Start a project\" class=\"call-arrow-link\">Start a project</a></p>\n        </span>\n    </div>\n    ",
        styles: [__webpack_require__("../../../../../src/app/status-of-spring.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__node_modules_npn_common_visualizations__["a" /* ClippedWmsMapSelectionFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__node_modules_npn_common_visualizations__["a" /* ClippedWmsMapSelectionFactory */]) === "function" && _b || Object])
], StatusOfSpringComponent);

var _a, _b;
//# sourceMappingURL=status-of-spring.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_npn_common_environments_environment__ = __webpack_require__("../../../../../../../../../../../../npn_common/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__node_modules_npn_common_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map