/* empty css                                */
import { e as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Dsmz6xCH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DWrPpHu8.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute("-z-10 relative mx-2 font-medium px-6 md:px-16 lg:px-32 overflow-x-hidden", "class")}> <div class="text-2xl m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent"> ${"< blog >"} </div> <div class="h-[300px]"></div> <div class="text-2xl mt-4 m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent"> ${"</ blog >"} </div> <div class="absolute -z-10 text-gray-600/30 -left-1/5 sm:-left-[4rem] top-1/3 text-9xl ">
not in Prod yet!
</div> </div> ` })}`;
}, "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/blog.astro", undefined);

const $$file = "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
