"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{17:function(e,t,r){r.d(t,{e:function(){return c}});var n=r(689),a=r(87),u=r(184),c=function(e){var t=e.movies,r=(0,n.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:r},children:n})},t)}))})})}},676:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(87),o=r(819),l=r(184),f=function(e){var t=e.setsearchParams,r=(0,s.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({query:u}),e.currentTarget.reset()},children:[(0,l.jsx)("input",{type:"text",name:"search",autoComplete:"off",autoFocus:!0,onChange:function(e){var t=e.target.value;c(t)},placeholder:"Search movies"}),(0,l.jsx)("button",{type:"submit",disabled:!u,children:"Search"})]})},h=r(17);function p(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],p=(0,i.lr)(),m=(0,a.Z)(p,2),v=m[0],d=m[1];return(0,s.useEffect)((function(){var e=v.get("query");function t(){return(t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Ph)(e);case 3:r=t.sent,u(r),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}e&&function(){t.apply(this,arguments)}()}),[v]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{setsearchParams:d}),r.length>0&&(0,l.jsx)(h.e,{movies:r})]})}}}]);
//# sourceMappingURL=676.fcb48b45.chunk.js.map