import{j as h,n,l as c,S as u,R as m,a as g}from"./vendor.c9649f99.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))f(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function x(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(i){if(i.ep)return;i.ep=!0;const r=x(i);fetch(i.href,r)}};y();const e=h.exports.jsx,s=h.exports.jsxs,v=()=>s(j,{children:[e(w,{src:"assets/logo.png"}),s(b,{children:[e(d,{href:"#home",children:"Home"}),e(d,{href:"#portfolio",children:"Portfolio"}),e(d,{href:"#experiences",children:"Experiences"})]}),e("div",{})]}),b=n.nav`
  display: flex;
  align-items: center;
  gap: 80px;
`,d=n.a`
  text-decoration: none;
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
`,w=n.img`
  height: 32px;
  width: 32px;
  object-fit: contain;
`,j=n.header`
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
`,S=n.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 100px); /* header height */
  position: relative;
`,p=({id:t,children:o})=>s(S,{children:[e("a",{id:t,style:{position:"absolute",top:-100}}),o]}),N=({items:t})=>s(k,{children:[e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"line",children:c.exports.map(t,o=>e("div",{className:`dot ${o.current?"current":""}`,children:s("div",{className:"dot-inner",children:[e("h1",{children:o.title}),e("h5",{children:c.exports.join(c.exports.compact([o.description,o.date]),", ")})]})}))}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"}),e("div",{className:"ellipsis"})]}),k=n.div`
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
`,z=[{title:"Intact Financial Corporation (Canada)",date:"2017-2018",description:"Frontend Developer Intern"},{title:"Graduated From University of Toronto",date:"2019",description:"Bachelor of Science in Computer Science"},{title:"EPAM Systems",date:"2019-2020",description:"Junior Software Engineer"},{title:"EPAM Systems",date:"2020-2021",description:"Software Engineer"},{title:"TUXMART",date:"2021-Present",description:"Full-Stack Developer",current:!0}],C=()=>e(p,{id:"experiences",children:e(N,{items:z})}),$=()=>e(p,{id:"home",children:s(A,{children:[e(L,{children:e(u,{scene:"/assets/scene.spline"})}),e(P,{children:s("div",{className:"container",children:[e(E,{children:"Ajax (Jiacheng) Jiang"}),e(a,{inverse:!0,children:"Suzhou, China"}),e(a,{children:"Software Developer"}),e(a,{children:"UI/UX Designer"}),e(a,{children:"Cat Owner"})]})})]})}),E=n.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,P=n.div`
  @keyframes slidein {
    from {
      margin-top: 10px;
      opacity: 0;
      transform: scale(0.9);
    }

    to {
      margin-top: 0px;
      opacity: 1;
      transform: scale(1);
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

    animation-delay: 1.5s;
    animation-duration: 1s;
    animation-name: slidein;
    animation-fill-mode: forwards;
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
`,a=({inverse:t,children:o})=>s(I,{inverse:t,children:[e("div",{className:"content",children:o}),e("div",{className:"shadow"})]}),I=n.div`
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
`,A=n.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;n.img`
  height: 80%;
`;const L=n.div`
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
`,M=()=>e(p,{id:"portfolio",children:e(O,{children:e("h1",{children:"Work in progress..."})})}),O=n.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;function T(){return s("div",{children:[e(v,{}),e($,{}),e(M,{}),e(C,{})]})}m.render(e(g.StrictMode,{children:e(T,{})}),document.getElementById("root"));
