/* empty css                                */
import { e as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dsmz6xCH.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_DWrPpHu8.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

new Proxy({"src":"/_astro/react.CVm5BcvR.svg","width":16,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/adarshpal/Documents/Projects/personal-portfolio/src/icons/react.svg";
							}
							
							return target[name];
						}
					});

const AboutMe = () => {
  return /* @__PURE__ */ jsxs("div", { className: "mx-2 font-medium px-6 md:px-16 lg:px-32", children: [
    /* @__PURE__ */ jsx("div", { className: "text-2xl m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent", children: "< about >" }),
    /* @__PURE__ */ jsxs("div", { className: "w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "I'm a passionate Full Stack Developer based in Bengaluru, India with expertise in",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent", children: " React, " }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-tr from-rose-700 to-rose-300 bg-clip-text text-transparent", children: "Angular, " }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent", children: "Node.js " }),
        " and",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-br from-sky-700 to-yellow-500 bg-clip-text text-transparent", children: " Python " }),
        "for backend development."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "I excel in both large and small agile projects, delivering robust solutions within tight deadlines." }),
      /* @__PURE__ */ jsx("p", { children: "What sets me apart is my eagerness to learn and adapt. Looking ahead, I'm excited about contributing my skills to future projects, pushing the boundaries of technology, and creating impactful solutions." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-2xl mt-4 m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent", children: "</ about >" })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full"> <div class="mx-6 px-6 md:px-16 lg:px-32 md:my-2 lg:my-4 h-[300px] flex flex-1"> <div class=" top-1/4 left-1/4 text-5xl tracking-wider leading-2 text-slate-200">Namaskar 👋 !</div> </div> <div class="mt-8"> ${renderComponent($$result2, "AboutMe", AboutMe, {})} </div> </div> ` })}`;
}, "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/index.astro", undefined);

const $$file = "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
