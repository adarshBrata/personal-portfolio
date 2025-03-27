import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, h as createAstro } from './astro/server_M2bLkdos.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
/* empty css                        */

const TITLE = "Home";

function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

const NavBar = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [toggle, setToggle] = useState(false);
  function downloadResume() {
  }
  return /* @__PURE__ */ jsxs("nav", { className: "absolute drop-shadow-md backdrop-blur-sm h-[150px] w-full top-0 flex items-center justify-between py-0 font-medium px-6 md:px-16 lg:px-32", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      motion.img,
      {
        animate: { opacity: 1 },
        initial: { opacity: 0 },
        className: "h-[60px]",
        src: "/hat.png",
        alt: "hat"
      }
    ) }),
    /* @__PURE__ */ jsx("a", { className: "decoration-0", href: "/", children: /* @__PURE__ */ jsxs("div", { className: "flex px-2 text-3xl whitespace-nowrap", children: [
      "Adarsh ",
      matches && /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
        "Brata",
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "px-2 font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent",
            children: "Pal."
          }
        )
      ] })
    ] }) }),
    matches && /* @__PURE__ */ jsxs("div", { className: "space-x-1.5 text-xl ml-auto", children: [
      /* @__PURE__ */ jsx("a", { className: "mx-2", href: "/contact", children: "Contact" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "mx-2 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent",
          href: "/blog",
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "mx-2 px-2 py-1", children: /* @__PURE__ */ jsx("a", { href: "../../public/AdarshBrataPal.pdf", download: "Adarsh-Resume", target: "_blank", children: "Resume" }) })
    ] }),
    toggle && /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: "visible",
        initial: "hidden",
        transition: { duration: 0.2 },
        className: "fixed left-0 top-0  z-100 flex h-screen\n                        w-full flex-col items-center  justify-center  gap-24 bg-zinc-900 text-2xl font-bold",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2 text-3xl ", children: [
          /* @__PURE__ */ jsx(
            motion.a,
            {
              animate: { x: 0 },
              initial: { x: -1e3 },
              exit: { x: -500 },
              href: "/contact",
              children: "Contact"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              animate: { x: 0 },
              initial: { x: -1e3 },
              transition: { delay: 0.3 },
              exit: { x: -500 },
              href: "/blog",
              className: "bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent",
              children: "Blog"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              animate: { x: 0 },
              initial: { x: -1e3 },
              transition: { delay: 0.6 },
              exit: { x: -500 },
              onClick: () => downloadResume(),
              children: "Resume"
            }
          )
        ] })
      }
    ),
    !matches && /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setToggle((prev) => !prev),
        className: "flex flex-col space-y-1.5 cursor-pointer z-20",
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 },
              className: "block h-0.5 w-8 bg-zinc-300"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { width: toggle ? 0 : 24 },
              className: "block h-0.5 w-6 bg-gradient-to-r from-amber-500 to-amber-300"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: toggle ? -45 : 0,
                y: toggle ? -8 : 0,
                width: toggle ? 32 : 16
              },
              className: "block h-0.5 w-4 bg-zinc-300"
            }
          )
        ]
      }
    )
  ] });
};

const Footer = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative w-full h-full", children: /* @__PURE__ */ jsx("span", { className: "absolute text-xs text-slate-300 font-extralight tracking-wide leading-4 top-1/3 right-2", children: "©2024, Adarsh Brata Pal" }) });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${TITLE}</title>${renderHead()}</head> <body class="bg-zinc-900 text-zinc-300 h-screen w-screen overflow-hidden"> <main class="grid grid-cols-1 grid-rows-[150px,_1fr,_50px] h-full"> <div id="navbar" class="max-w-[1080px] max-h-[150px]"> ${renderComponent($$result, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/adarshpal/Documents/Projects/personal-portfolio/src/Components/NavBar", "client:component-export": "NavBar" })} </div> <section id="body" class="max-w-[1080px] md:overflow-hidden overflow-scroll"> ${renderSlot($$result, $$slots["default"])} </section> <section id="footer" class="max-w-full"> ${renderComponent($$result, "Footer", Footer, {})} </section> </main> </body></html>`;
}, "/Users/adarshpal/Documents/Projects/personal-portfolio/src/Layout/Layout.astro", undefined);

export { $$Layout as $ };
