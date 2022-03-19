import{j as m,n as r,l as f,r as c,S as g,c as y,R as v}from"./vendor.4382082b.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function p(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=p(i);fetch(i.href,o)}};b();const e=m.exports.jsx,s=m.exports.jsxs,w=()=>s(N,{children:[e(j,{src:"assets/logo.png"}),s(S,{children:[e(h,{href:"#home",children:"Home"}),e(h,{href:"#portfolio",children:"Portfolio"}),e(h,{href:"#experiences",children:"Experiences"})]}),e("div",{})]}),S=r.nav`
  display: flex;
  align-items: center;
  gap: 80px;
`,h=r.a`
  text-decoration: none;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
`,j=r.img`
  height: 32px;
  width: 32px;
  object-fit: contain;
`,N=r.header`
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
`,E=r.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 100px); /* header height */
  position: relative;
`,x=({id:t,children:n})=>s(E,{children:[e("a",{id:t,style:{position:"absolute",top:-100}}),n]}),k=({items:t})=>s(C,{children:[e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"line",children:f.exports.map(t,n=>e("div",{className:`dot ${n.current?"current":""}`,children:s("div",{className:"dot-inner",children:[e("h1",{children:n.title}),e("h5",{children:f.exports.join(f.exports.compact([n.description,n.date]),", ")})]})},n.title+n.date))}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"})]}),C=r.div`
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

      &:nth-of-type(odd) {
        > .dot-inner {
          text-align: right;
          /* position: absolute; */
          left: -510px;
        }
      }
    }
  }
`,z=[{title:"Intact Financial Corporation (Canada)",date:"2017-2018",description:"Frontend Developer Intern"},{title:"Graduated From University of Toronto",date:"2019",description:"Bachelor of Science in Computer Science"},{title:"EPAM Systems",date:"2019-2020",description:"Junior Software Engineer"},{title:"EPAM Systems",date:"2020-2021",description:"Software Engineer"},{title:"TUXMART",date:"2021-Present",description:"Full-Stack Developer",current:!0}],$=()=>e(x,{id:"experiences",children:e(k,{items:z})}),A=()=>{const[t,n]=c.exports.useState(),[p,l]=c.exports.useState(!1);function i(a){n(a),l(!0)}const o=c.exports.useCallback(()=>{t==null||t.emitEvent("scroll","F7DE28F9-7180-4E2C-BAE8-B4E886CACA87")},[t]);return c.exports.useEffect(()=>{document.body.onscroll=()=>{o()}},[o]),e(x,{id:"home",children:s(F,{children:[e(I,{children:e(g,{scene:"https://prod.spline.design/Rr5jnmBGP3sHEfDz/scene.spline",onLoad:i})}),e(B,{children:s("div",{className:`container ${p?"animate":""}`,children:[e(P,{children:"Ajax (Jiacheng) Jiang"}),e(d,{inverse:!0,children:"Suzhou, China"}),e(d,{children:"Software Developer"}),e(d,{children:"UI/UX Designer"}),e(d,{children:"Cat Owner"})]})})]})})},P=r.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,B=r.div`
  @keyframes slidein {
    from {
      opacity: 0;

      transform: translateY(50px) scale(0.9) rotateX(-60deg) ;
    }

    to {
      opacity: 1;
      transform: translateY(0px) scale(1) rotateX(0deg);
    }
  }
  margin-top: 200px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
  /* position: 'absolute'; */
  /* left: 50%; */
  .container > * {
    opacity: 0;
  }

  .container.animate > * {
    /* animation-delay: 2s; */
    animation-duration: 1s;
    animation-name: slidein;
    animation-fill-mode: forwards;
  }

  .container.animate > *:nth-of-type(1) {
    animation-delay: 2s;
  }
  .container.animate > *:nth-of-type(2) {
    animation-delay: 2.2s;
  }
  .container.animate > *:nth-of-type(3) {
    animation-delay: 2.4s;
  }
  .container.animate > *:nth-of-type(4) {
    animation-delay: 2.6s;
  }
  .container.animate > *:nth-of-type(5) {
    animation-delay: 2.8s;
  }

  .container {
    width: 300px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    margin-left: 300px;
  }
`,d=({inverse:t,children:n})=>s(L,{inverse:t,children:[e("div",{className:"content",children:n}),e("div",{className:"shadow"})]}),L=r.div`
  box-sizing: content-box;
  position: relative;
  width: 250px;

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
`,F=r.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;r.img`
  height: 80%;
`;const I=r.div`
  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  opacity: 0;

  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-name: fade;
  animation-fill-mode: forwards;
`,D=()=>e(x,{id:"portfolio",children:e(H,{children:e("h1",{children:"Work in progress..."})})}),H=r.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;function R(){return s("div",{children:[e(w,{}),e(A,{}),e(D,{}),e($,{})]})}const u=document.getElementById("root");u&&y(u).render(e(v.StrictMode,{children:e(R,{})}));
