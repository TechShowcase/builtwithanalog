import{d,i as m,H as h,f,G as t,J as n,K as e,g as c,M as v,Q as u,S as g,T as b,U as y,W as l,X as p}from"./index-uoWLXK-0.js";function _(o,a){if(o&1&&(t(0,"a",26)(1,"div",27),c(2,"img",28),e()()),o&2){const s=a.$implicit;y("href","",s.url,"?source=builtwithangular.dev",l),u(2),p("src",s.imageSrc,l),p("alt",s.name)}}let j=(()=>{var o;class a{constructor(){this.projects=[],this.filteredProjects=[],this.categories=[],this.projectsStructure=[],this.projectsUIlib=[],this.versionGroup=[],this.filterApplied=!1,this.selectedCategory="",this.selectedVersionGroup="",this.selectedStructure="",this.selectedUIlib="",this.showFree=!1,this.http=m(h)}ngOnInit(){this.http.get("https://builtwithanalog.dev/api/projects").subscribe(r=>{this.projects=r,this.categories=Array.from(new Set(this.projects.map(i=>i.category))),this.projectsStructure=Array.from(new Set(this.projects.map(i=>i.structure))),this.projectsUIlib=Array.from(new Set(this.projects.map(i=>i.uiLib.split(", ")).flat())),this.versionGroup=Array.from(new Set(this.projects.map(i=>i.versionGroup)))})}applyFilter(){this.filterApplied=!0,this.filteredProjects=this.projects.filter(r=>(this.selectedCategory===""||r.category===this.selectedCategory)&&(this.selectedStructure===""||r.structure===this.selectedStructure)&&(this.selectedUIlib===""||r.uiLib.split(", ").includes(this.selectedUIlib))&&(this.selectedVersionGroup===""||r.versionGroup===this.selectedVersionGroup)&&(!this.showFree||r.pricing==="Free"))}clearFilters(){this.filterApplied=!1,this.selectedCategory="",this.selectedStructure="",this.selectedUIlib="",this.selectedVersionGroup="",this.showFree=!1}isVersion16OrAbove(r){return parseInt(r.split(".")[0],10)>=16}}return o=a,o.ɵfac=function(r){return new(r||o)},o.ɵcmp=d({type:o,selectors:[["app-home"]],standalone:!0,features:[f],decls:51,vars:0,consts:[[1,"content"],[1,"filtering"],["id","filter-form",1,"filtering-actions"],["name","type","id","type","value","type"],["selected","","hidden","","disabled",""],["value","open-source"],["value","productivity"],["value","template"],["name","angular-version","id","angular-version"],["value","v15"],["value","v10-v15"],["value","earlier-than-v10"],["name","structure","id","structure"],["value","modules"],["value","standalone"],["name","ui-lib","id","ui-lib"],["value","none"],["value","angular-material"],["value","primeng"],["value","spartan"],[1,"checkbox-wrapper"],["type","checkbox","name","checkbox",1,"checkbox"],["for","checkbox"],["type","reset"],[1,"total"],[1,"cards-wrapper"],["target","_blank",3,"href"],[1,"card"],[3,"src","alt"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"div",1)(2,"form",2)(3,"select",3)(4,"option",4),n(5,"Type"),e(),t(6,"option",5),n(7,"Open Source"),e(),t(8,"option",6),n(9,"Productivity"),e(),t(10,"option",7),n(11,"Template"),e()(),t(12,"select",8)(13,"option",4),n(14,"Angular Version"),e(),t(15,"option",9),n(16,"v15 and up"),e(),t(17,"option",10),n(18,"v10 - v15"),e(),t(19,"option",11),n(20,"earlier than v10"),e()(),t(21,"select",12)(22,"option",4),n(23,"Angular Structure"),e(),t(24,"option",13),n(25,"Modules"),e(),t(26,"option",14),n(27,"Standalone"),e()(),t(28,"select",15)(29,"option",4),n(30,"UI Library"),e(),t(31,"option",16),n(32,"None"),e(),t(33,"option",17),n(34,"Angular Material"),e(),t(35,"option",18),n(36,"PrimeNG"),e(),t(37,"option",19),n(38,"Spartan UI"),e()(),t(39,"div",20),c(40,"input",21),t(41,"label",22),n(42,"Free"),e()(),t(43,"button",23),n(44,"Clear Filters"),e()(),t(45,"div",24)(46,"p"),n(47,"Projects found: 100"),e()()(),t(48,"div",25),v(49,_,3,4,"a",26,b),e()()),r&2&&(u(49),g(i.projects))},styles:[`.content[_ngcontent-%COMP%] {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				min-height: 70vh;
				margin: 1rem;

				.filtering {
					display: flex;
					flex-direction: column;
					form {
						display: flex;
						align-items: center;
						gap: 1rem;

						select {
							padding: 0.8rem 0.5rem 0.8rem 0.4rem;
							font-size: 1rem;
							width: 10rem;
							border-top: none;
							border-right: none;
							border-left: none;
							border-bottom: 2px solid transparent;
							border-radius: 0.5rem 0.5rem 0 0;
							cursor: pointer;

							&:focus {
								outline: none;
								border-bottom: 2px solid #646cff;
							}
						}

						.checkbox-wrapper {
							display: flex;
							align-items: center;
							gap: 0.3rem;

							.checkbox {
								height: 1.1rem;
								width: 1.1rem;
								cursor: pointer;
							}
							label {
								font-size: 1.1rem;
							}
						}
					}

					.total {
						display: flex;
						justify-content: center;
						padding: 0.5rem;

						p {
							font-size: 1rem;
						}
					}
				}

				.cards-wrapper {
					display: flex;
					gap: 1.5rem;
					margin-top: 1rem;

					.card {
						width: 20rem;
					}
				}
			}`]}),a})();export{j as default};
