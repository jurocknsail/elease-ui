"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7966],{17966:(L,C,l)=>{l.r(C),l.d(C,{FilebrowserPageModule:()=>z});var v=l(96814),R=l(60095),i=l(71734),m=l(99351),g=l(15861),f=l(1461),Y=l(21450),e=l(85678),J=l(2193),M=l(25472),I=l(29180);const B=["filepicker"];function E(t,a){1&t&&(e.TgZ(0,"ion-buttons",6),e._UZ(1,"ion-back-button",7),e.qZA())}function N(t,a){1&t&&(e.TgZ(0,"ion-text",8)(1,"p"),e._uU(2,"No documents found"),e.qZA()())}function O(t,a){if(1&t){const c=e.EpF();e.TgZ(0,"ion-item-sliding")(1,"ion-item",9),e.NdJ("click",function(){const r=e.CHM(c).$implicit,s=e.oxw();return e.KtG(s.itemClicked(r))}),e._UZ(2,"ion-icon",10),e._uU(3),e.qZA()()}if(2&t){const c=a.$implicit;e.xp6(2),e.Q6J("name",c.isFile?"document-outline":"folder-outline"),e.xp6(1),e.hij(" ",c.name," ")}}const y=f.tP.Documents;let A=(()=>{var t;class a{constructor(o,n,r,s,d,b,P){this.route=o,this.router=n,this.previewAnyFile=r,this.platform=s,this.parseService=d,this.loadingController=b,this.toastController=P,this.folderContent=[],this.currentFolder="",this.copyFile=null,this.b64toBlob=(p,Z="",u=512)=>{const x=atob(p),U=[];for(let h=0;h<x.length;h+=u){const w=x.slice(h,h+u),D=new Array(w.length);for(let F=0;F<w.length;F++)D[F]=w.charCodeAt(F);const G=new Uint8Array(D);U.push(G)}return new Blob(U,{type:Z})}}ngOnInit(){this.currentFolder=this.route.snapshot.paramMap.get("folder")||"",this.loadDocuments(),console.log("Platform type : "+this.platform.platforms())}loadDocuments(){var o=this;return(0,g.Z)(function*(){const n=yield f.fy.readdir({directory:y,path:o.currentFolder});o.folderContent=n.files.map(r=>({name:r.name,isFile:"file"===r.type}))})()}itemClicked(o){var n=this;return(0,g.Z)(function*(){if(o.isFile)n.openFile(o);else{let s=encodeURIComponent(""!=n.currentFolder?n.currentFolder+"/"+o.name:o.name);n.router.navigateByUrl(`/filebrowser/${s}`)}})()}openFile(o){var n=this;return(0,g.Z)(function*(){if((0,Y.n$)("hybrid")){console.log("cordova");const r=yield f.fy.getUri({directory:y,path:n.currentFolder+"/"+o.name});n.previewAnyFile.preview(r.uri).then(s=>console.log(s)).catch(s=>console.error(s))}else{const r=yield f.fy.readFile({directory:y,path:n.currentFolder+"/"+o.name}),s=n.b64toBlob(r.data,"application/pdf");window.open(URL.createObjectURL(s),"_blank")}})()}sendEmail(){var o=this;return(0,g.Z)(function*(){if(0==o.parseService.getLeaseholdersPDFs().size)return void o.toastController.create({message:"Une erreur est survenue, recommence !",duration:3e3,position:"middle",color:"danger",icon:"warning"}).then(d=>{d.onDidDismiss().then(()=>{o.router.navigate(["/"])}),d.present()});let n=[];const r=yield o.loadingController.create({message:"Envoie des emails ..."});yield r.present(),o.parseService.getLeaseholdersPDFs().forEach((s,d)=>{const b=new Promise(P=>{o.parseService.sendEmail(d,s).subscribe({next:p=>{console.log("Email(s) sent successfully from "+d),P()},error:p=>{console.error("Error sending email(s) from "+d,p.message),o.toastController.create({message:"Erreur lors de l'envoi pour "+d,duration:3e3,position:"middle",color:"danger",icon:"warning"}).then(u=>{u.onDidDismiss().then(()=>{o.router.navigate(["/"])}),u.present()})}})});n.push(b)}),Promise.all(n).then(()=>{console.log("All emails sent."),r.dismiss(),o.toastController.create({message:"Tous les emails ont \xe9t\xe9 envoy\xe9s ! Tu les as aussi re\xe7us en copie \u{1f60a}",duration:2e3,position:"middle",color:"primary",icon:"send"}).then(d=>{d.onDidDismiss().then(()=>{o.router.navigate(["/"])}),d.present()})})})()}}return(t=a).\u0275fac=function(o){return new(o||t)(e.Y36(m.gz),e.Y36(m.F0),e.Y36(J.R),e.Y36(M.t4),e.Y36(I.X),e.Y36(i.HT),e.Y36(i.yF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-filebrowser"]],viewQuery:function(o,n){if(1&o&&e.Gf(B,5),2&o){let r;e.iGM(r=e.CRH())&&(n.uploader=r.first)}},decls:12,vars:4,consts:[[3,"color"],["slot","start",4,"ngIf"],["color","medium","class","ion-padding ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","center"],["name","mail-outline",3,"click"],["slot","start"],["text","Retour"],["color","medium",1,"ion-padding","ion-text-center"],[3,"click"],["slot","start",3,"name"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0),e.YNc(2,E,2,0,"ion-buttons",1),e.TgZ(3,"ion-title"),e._uU(4," Appels de Loyers"),e.qZA()()(),e.TgZ(5,"ion-content"),e.YNc(6,N,3,0,"ion-text",2),e.TgZ(7,"ion-list"),e.YNc(8,O,4,2,"ion-item-sliding",3),e.qZA(),e.TgZ(9,"ion-fab",4)(10,"ion-fab-button")(11,"ion-icon",5),e.NdJ("click",function(){return n.sendEmail()}),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("color",n.copyFile?"secondary":"primary"),e.xp6(1),e.Q6J("ngIf",""!==n.currentFolder),e.xp6(4),e.Q6J("ngIf",0===n.folderContent.length),e.xp6(2),e.Q6J("ngForOf",n.folderContent))},dependencies:[v.sg,v.O5,i.Sm,i.W2,i.IJ,i.W4,i.Gu,i.gu,i.Ie,i.td,i.q_,i.yW,i.wd,i.sr,i.oU]}),a})();var T=l(8407);const Q=[{path:"",component:A,canActivate:[T.a]},{path:":folder",component:A,canActivate:[T.a]}];let S=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(Q),m.Bz]}),a})(),z=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.ez,R.u5,i.Pc,S]}),a})()}}]);