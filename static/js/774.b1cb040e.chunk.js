"use strict";(self.webpackChunknova_poshta=self.webpackChunknova_poshta||[]).push([[774],{7774:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r=e(9434),a=function(n){return n.tnn.tnn},u=function(n){return n.tnn.tnnList},i=function(n){return n.tnn.queryTnn},s=function(n){return n.tnn.error},o=e(7405),c=e(184),d=function(){var n=(0,r.v9)(a),t=(0,r.v9)(u),e=(0,r.v9)(s),i=(0,r.I0)(),d=n.data,l=n.errors,h=function(n){i((0,o.Mw)(n.target.dataset.tnn))},m=function(n){console.log(n.target.dataset.tnn),i((0,o.vS)(n.target.dataset.tnn))};return(0,c.jsxs)(c.Fragment,{children:[e&&"Something went wrong: ".concat(e),l&&l[0],(0,c.jsx)("ul",{children:!e&&d&&d.map((function(n){return(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{children:["\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ",n.Status]}),(0,c.jsxs)("p",{children:["\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e: ",n.WarehouseSender]}),(0,c.jsxs)("p",{children:["\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e:",n.WarehouseRecipient]})]},n.Number)}))}),(0,c.jsx)("ul",{children:t&&t.map((function(n){return(0,c.jsxs)("li",{"data-tnn":n,children:[(0,c.jsx)("p",{"data-tnn":n,onClick:h,children:n}),(0,c.jsx)("p",{"data-tnn":n,onClick:m,children:"delete"})]},n)}))})]})},l=e(6747),h=e(6417),m=e(4281),f=e(3239),p=e(2791),x=e(3195),b=e(2633),j=e(5705),v=e(6727),g=v.Ry({tnn:v.Z_().matches(/^[0-9]{14}$/,"TTN number must be exactly 14 digits long").required("TTN number is required")}),S=function(){var n=(0,r.I0)(),t=(0,r.v9)(i),e=(0,r.v9)(x.Vc);(0,p.useEffect)((function(){a.setFieldValue("tnn",t),a.setValues({tnn:t}),a.submitForm()}),[t]);var a=(0,j.TA)({initialValues:{tnn:t},validationSchema:g,onSubmit:function(t){var e={apiKey:"8d677609f6e47ce83929374b3afab572",modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:t.tnn,Phone:"380681186265"}]}};n((0,b.E)(e))}});return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(l.Z,{component:"form",onSubmit:a.handleSubmit,sx:{gap:1},children:[(0,c.jsx)(h.Z,{mb:1,fullWidth:!0,id:"tnn",name:"tnn",label:"Enter TNN",value:a.values.tnn,onChange:a.handleChange,error:a.touched.tnn&&Boolean(a.errors.tnn),helperText:a.touched.tnn&&a.errors.tnn}),(0,c.jsx)(m.Z,{fullWidth:!0,mb:1,variant:"contained",color:"primary",disabled:e,type:"submit",children:e?(0,c.jsx)(f.Z,{size:24}):"Search"})]})})},T=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{}),(0,c.jsx)(d,{})]})}},3195:function(n,t,e){e.d(t,{Ps:function(){return r},Vc:function(){return a},by:function(){return u}});var r=function(n){return n.departments.departments},a=function(n){return n.departments.isLoading},u=function(n){return n.departments.error}}}]);
//# sourceMappingURL=774.b1cb040e.chunk.js.map