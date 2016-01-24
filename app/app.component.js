System.register(['angular2/core', 'angular2/router', './hero-detail.component', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            // <input value={{hero.name}}  ...>   one way binding
            // <input [(ngModel)]="hero.name"  ...>   two way binding
            //
            AppComponent = (function () {
                function AppComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.onSelect = function (hero) {
                    // original way using binding 
                    this.selectedHero = hero;
                    console.log("nav to id: ", hero.id);
                    // new: try with router
                    this._router.navigate(['HeroDetail', { id: hero.id }]);
                };
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'partials/heroes-list.html',
                        styleUrls: ['app/app.component.css'],
                        encapsulation: core_1.ViewEncapsulation.Native,
                        providers: [hero_service_1.HeroService],
                        directives: [router_1.ROUTER_DIRECTIVES, hero_detail_component_1.HeroDetailComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/hero/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map