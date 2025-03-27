import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, h as createAstro } from '../chunks/astro/server_M2bLkdos.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class="h-screen w-screen bg-zinc-700"> <div class="text-zinc-400 text-2xl h-full w-full flex justify-center flex-col items-center "> <p class="p-4 m-2 flex flex-col"> <span class="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
404. You have wandered into no content land.
</span> </p> <div class="">
Go Back to
<span class="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent"> <a href="/">HOMEPAGE</a> </span> </div> </div> </body></html>`;
}, "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/404.astro", undefined);

const $$file = "/Users/adarshpal/Documents/Projects/personal-portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
