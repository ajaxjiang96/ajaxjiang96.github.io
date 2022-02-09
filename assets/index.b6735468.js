import{j as h,n as o,l as d,R as u,a as g}from"./vendor.762ae604.js";const m=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))f(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function x(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(i){if(i.ep)return;i.ep=!0;const r=x(i);fetch(i.href,r)}};m();const e=h.exports.jsx,s=h.exports.jsxs,v=()=>s(w,{children:[e(b,{src:"assets/logo.png"}),s(y,{children:[e(a,{href:"#home",children:"Home"}),e(a,{href:"#portfolio",children:"Portfolio"}),e(a,{href:"#experiences",children:"Experiences"})]}),e("div",{})]}),y=o.nav`
  display: flex;
  align-items: center;
  gap: 80px;
`,a=o.a`
  text-decoration: none;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
`,b=o.img`
  height: 32px;
  width: 32px;
  object-fit: contain;
`,w=o.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  box-sizing: border-box;
  padding: 40px;
  background: linear-gradient(#fff, #fff, #fff0);
  position: sticky;
  top: 0;
  z-index: 1200;
`,j=o.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 100px); /* header height */
  position: relative;
`,p=({id:t,children:n})=>s(j,{children:[e("a",{id:t,style:{position:"absolute",top:-100}}),n]}),N=({items:t})=>s(S,{children:[e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"line",children:d.exports.map(t,n=>e("div",{className:`dot ${n.current?"current":""}`,children:s("div",{className:"dot-inner",children:[e("h1",{children:n.title}),e("h5",{children:d.exports.join(d.exports.compact([n.description,n.date]),", ")})]})}))}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"})]}),S=o.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  user-select: none;
  .ellipsis {
    width: 2px;
    height: 2px;
    background: #000;
  }
  .line {
    width: 2px;
    height: 61.8%;
    background: #000;
    display: flex;
    align-items: center;
    gap: 50px;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid #000;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;

      &.current {
        &::after {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #000;
        }
      }
      .dot-inner {
        position: absolute;
        width: 500px;
        left: 18px;
        top: -20px;
        h1,
        h5 {
          margin: 0;
        }
        h5 {
          color: #999;
          font-weight: 400;
        }
      }

      &:nth-child(odd) {
        > .dot-inner {
          text-align: right;
          /* position: absolute; */
          left: -510px;
        }
      }
    }
  }
`,k=[{title:"Intact Financial Corporation (Canada)",date:"2017-2018",description:"Frontend Developer Intern"},{title:"Graduated From University of Toronto",date:"2019",description:"Bachelor of Science in Computer Science"},{title:"EPAM Systems",date:"2019-2020",description:"Junior Software Engineer"},{title:"EPAM Systems",date:"2020-2021",description:"Software Engineer"},{title:"TUXMART",date:"2021-Present",description:"Full-Stack Developer",current:!0}],z=()=>e(p,{id:"experiences",children:e(N,{items:k})}),C=()=>e(p,{id:"home",children:s(E,{children:[e(A,{children:e(I,{src:"assets/portrait.svg"})}),s("div",{className:"",style:{flex:1,display:"flex",flexDirection:"column",alignItems:"flex-start",gap:10},children:[e(P,{children:"Ajax (Jiacheng) Jiang"}),e(l,{inverse:!0,children:"Suzhou, China"}),e(l,{children:"Software Developer"}),e(l,{children:"UI/UX Designer"}),e(l,{children:"Cat Owner"})]})]})}),P=o.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,l=({inverse:t,children:n})=>s($,{inverse:t,children:[e("div",{className:"content",children:n}),e("div",{className:"shadow"})]}),$=o.div`
  box-sizing: content-box;
  position: relative;

  .content {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: ${t=>t.inverse?"#000":"#fff"};
    color: ${t=>t.inverse?"#fff":"#000"};
    border: 1px solid #000;
    /* box-shadow: 0 0 ${t=>t.inverse?"#fff":"#000"}; */
    transition: 300ms ease-in-out;
    position: relative;
  }

  .shadow {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: ${t=>t.inverse?"#fff":"#000"};
    border: 1px solid ${t=>t.inverse?"#000":"#fff"};
    transition: 300ms ease-in-out;
    z-index: -1;
  }
  &:hover {
    .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 4px;
      top: 4px;
      z-index: -1;
    }
    .content {
      transform: translate(-4px, -4px);
    }
    /* box-shadow: 8px 8px ${t=>t.inverse?"#fff":"#000"}; */
  }
`,E=o.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`,I=o.img`
  height: 80%;
`,A=o.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`,D=()=>e(p,{id:"portfolio",children:e(L,{children:e("h1",{children:"Work in progress..."})})}),L=o.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;function M(){return s("div",{children:[e(v,{}),e(C,{}),e(D,{}),e(z,{})]})}u.render(e(g.StrictMode,{children:e(M,{})}),document.getElementById("root"));
