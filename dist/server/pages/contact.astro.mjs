/* empty css                                */
import { e as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Dsmz6xCH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DWrPpHu8.mjs';
export { renderers } from '../renderers.mjs';

const map = new Proxy({"src":"/_astro/map.Dj2R1RLN.svg","width":20,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/adarshpal/Documents/Projects/personal-portfolio/src/icons/map.svg";
							}
							
							return target[name];
						}
					});

const phone = new Proxy({"src":"/_astro/phone.CYCxyFl9.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/adarshpal/Documents/Projects/personal-portfolio/src/icons/phone.svg";
							}
							
							return target[name];
						}
					});

const mail = new Proxy({"src":"/_astro/mail.VWWbaWq7.svg","width":256,"height":193,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/adarshpal/Documents/Projects/personal-portfolio/src/icons/mail.svg";
							}
							
							return target[name];
						}
					});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute("-z-10 relative mx-2 font-medium px-6 md:px-16 lg:px-32", "class")}> <div class="text-2xl m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent"> ${"< contact >"} </div> <div class="w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300 flex"> <img${addAttribute(phone, "src")} alt="phone" class="mt-2"> <span class="px-2 ml-2"> <a href="tel:+91 99375 93463">+91 99375 93463</a> </span> </div> <div class="w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300 flex"> <img${addAttribute(mail, "src")} alt="mail" class="mt-4 h-[20px] w-[20px]"> <span class="px-2 ml-2"> <a href="mailto:adarsh.brata@gmail.com">adarsh.brata@gmail.com</a> </span> </div> <div class="w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300 flex"> <img${addAttribute(map, "src")} alt="map" class="mt-2" height="20"> <span class="px-2 ml-2"> Bengaluru, Karnataka, India </span> </div> <div class="text-2xl mt-4 m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent"> ${"</ contact >"} </div> <div class="absolute -z-10 text-gray-600/30 -left-1/5 sm:-left-[4rem] top-1/3 text-9xl ">
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
