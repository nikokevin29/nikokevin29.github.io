(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("HelloKedua")],1)},s=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.drinks,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v("CRUD Atma pedia")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({staticClass:"mx-2",attrs:{color:"primary",dark:""}},a),[i("v-icon",{staticClass:"mr-1"},[t._v("mdi-food")]),t._v("Create Drinks ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Drinks name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-select",{attrs:{items:t.items,label:"Categories"},model:{value:t.editedItem.calories,callback:function(e){t.$set(t.editedItem,"calories",e)},expression:"editedItem.calories"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Fat (g)"},model:{value:t.editedItem.fat,callback:function(e){t.$set(t.editedItem,"fat",e)},expression:"editedItem.fat"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:t.editedItem.carbs,callback:function(e){t.$set(t.editedItem,"carbs",e)},expression:"editedItem.carbs"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Protein (g)"},model:{value:t.editedItem.protein,callback:function(e){t.$set(t.editedItem,"protein",e)},expression:"editedItem.protein"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save()}}},[t._v("Save")])],1)],1)],1)],1),i("v-layout",t._l(t.drinks,(function(e){return i("v-flex",{key:e.value,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",color:"#26c6da",dark:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"overline mb-4"},[t._v(t._s(e.drinks))]),i("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.name)+" ")]),i("v-list-item-subtitle",[t._v("Type :"+t._s(e.calories)+" ")]),i("v-list-item-subtitle",[t._v("Fat :"+t._s(e.fat)+" ")]),i("v-list-item-subtitle",[t._v("Carbs :"+t._s(e.carbs)+" ")]),i("v-list-item-subtitle",[t._v("Protein :"+t._s(e.protein)+" ")])],1)],1),i("v-card-actions",[i("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(i){return t.editItem(e)}}},[t._v("Edit")]),i("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(i){return t.deleteItem(e)}}},[t._v("Delete")])],1)],1)],1)})),1)]},proxy:!0}])})},d=[],o=(i("b0c0"),i("dc59")),n={data:function(){return{items:["Ice","Hot"],selected:[],cek:-1,dialog:!1,drinks:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},firebase:{drinks:o["b"]},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},methods:{savedata:function(t){this.editedIndex=t[".key"],this.cek=0,this.editedItem=Object.assign({},t),this.dialog=!0},editItem:function(t){this.editedIndex=t[".key"],this.cek=0,this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){confirm("Are you sure you want to delete this item?")&&o["b"].child(t[".key"]).remove()},multiDelete:function(){for(var t=0;t<this.selected.length;t++)o["b"].child(this.selected[t]).remove();this.selected=[]},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){this.cek>-1?(o["b"].child(this.editedIndex).set({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()):(o["b"].push({name:this.editedItem.name,calories:this.editedItem.calories,fat:this.editedItem.fat,carbs:this.editedItem.carbs,protein:this.editedItem.protein}),this.clear()),this.close()},clear:function(){this.editItem={},this.editItem.name="",this.editItem.calories=0,this.editItem.fat=0,this.editItem.carbs=0,this.editItem.protein=0,this.cek=-1}}},r=n,c=i("2877"),m=i("6544"),v=i.n(m),u=i("8336"),b=i("b0af"),f=i("99d9"),h=i("62ad"),I=i("a523"),p=i("8fea"),k=i("169a"),x=i("ce7e"),_=i("0e8f"),V=i("132d"),C=i("a722"),g=i("da13"),w=i("5d23"),y=i("0fd9"),T=i("b974"),D=i("2fa4"),$=i("8654"),S=i("71d9"),j=i("2a7f"),L=Object(c["a"])(r,l,d,!1,null,null,null),O=L.exports;v()(L,{VBtn:u["a"],VCard:b["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:h["a"],VContainer:I["a"],VDataTable:p["a"],VDialog:k["a"],VDivider:x["a"],VFlex:_["a"],VIcon:V["a"],VLayout:C["a"],VListItem:g["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:y["a"],VSelect:T["a"],VSpacer:D["a"],VTextField:$["a"],VToolbar:S["a"],VToolbarTitle:j["a"]});var E={name:"kedua",components:{HelloKedua:O}},F=E,A=Object(c["a"])(F,a,s,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=about.f54dab46.js.map