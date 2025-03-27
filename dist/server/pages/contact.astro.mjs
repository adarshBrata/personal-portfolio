import { e as createComponent, u as unescapeHTML, s as spreadAttributes, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_M2bLkdos.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BN4lf06E.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== undefined && props.width === undefined && props.height === undefined) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Map = createSvgComponent({"meta":{"src":"/_astro/map.Dj2R1RLN.svg","width":20,"height":20,"format":"svg"},"attributes":{"mode":"inline","width":"1.2rem","height":"1.2rem","viewBox":"0 0 20 20"},"children":"<path fill=\"#fff\" fill-rule=\"evenodd\" d=\"m9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001l.006-.003l.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433c.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765a11.842 11.842 0 0 0 .976.544l.062.029l.018.008zM10 11.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5\" clip-rule=\"evenodd\" />"});

const Phone = createSvgComponent({"meta":{"src":"/_astro/phone.CYCxyFl9.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"1.2rem","height":"1.2rem","viewBox":"0 0 24 24"},"children":"<path fill=\"#fff\" d=\"M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.129 2.129 0 0 0 .006.134c.006.082.016.193.035.33c.039.27.114.642.26 1.08c.294.88.87 2.019 1.992 3.141c1.122 1.122 2.261 1.698 3.14 1.992c.439.146.81.22 1.082.26a4.424 4.424 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34l4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4m5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617c-.34 2.242-.801 8.864 4.425 14.09c5.226 5.226 11.848 4.764 14.09 4.425c.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508c-.878-.878-1.302-1.739-1.508-2.36a4.583 4.583 0 0 1-.125-.447z\" />"});

const Mail = createSvgComponent({"meta":{"src":"/_astro/mail.VWWbaWq7.svg","width":256,"height":193,"format":"svg"},"attributes":{"mode":"inline","width":"1.6rem","height":"1.2rem","viewBox":"0 0 256 193"},"children":"<path fill=\"#4285f4\" d=\"M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z\" /><path fill=\"#34a853\" d=\"M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z\" /><path fill=\"#ea4335\" d=\"m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z\" /><path fill=\"#fbbc04\" d=\"M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z\" /><path fill=\"#c5221f\" d=\"m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z\" />"});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute("-z-10 relative mx-2 font-medium px-6 md:px-16 lg:px-32", "class")}> <div class="text-2xl m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent"> ${"< contact >"} </div> <div class="w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300 flex"> ${renderComponent($$result2, "Phone", Phone, {})} <span class="px-2 ml-2"> <a href="tel:+91 99375 93463">+91 99375 93463</a> </span> </div> <div class="w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300 flex"> ${renderComponent($$result2, "Mail", Mail, { "size": 20 })} <span class="px-2 ml-2"> <a href="mailto:adarsh.brata@gmail.com">adarsh.brata@gmail.com</a> </span> </div> <div class="w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300 flex"> ${renderComponent($$result2, "Map", Map, { "size": 20 })} <span class="px-2 ml-2"> Bengaluru, Karnataka, India </span> </div> <div class="text-2xl mt-4 m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent"> ${"</ contact >"} </div> <div class="absolute -z-10 text-gray-600/30 -left-1/5 sm:-left-[4rem] top-1/3 text-9xl ">
Reach Out!
</div> </div> ` })}`;
}, "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/contact.astro", undefined);

const $$file = "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
