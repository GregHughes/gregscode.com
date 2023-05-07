(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./styles/style.css
var style = __webpack_require__(702);
;// CONCATENATED MODULE: ./components/navbar.js

const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
            className: "navbar navbar-expand-md navbar-dark fixed-top",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("a", {
                    className: "navbar-brand",
                    href: "https://www.gregscode.com",
                    children: "Greg's Code"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarCollapse",
                    "aria-controls": "navbarCollapse",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarCollapse",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "navbar-nav mr-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    className: "nav-link",
                                    href: "#hello",
                                    children: [
                                        "Hello ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sr-only",
                                            children: "(current)"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "nav-link",
                                    href: "#projects",
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "nav-link",
                                    href: "#skills",
                                    children: "Skills"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "nav-link",
                                    href: "#contact",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    className: "nav-link",
                                    href: "resources/greg_hughes.pdf",
                                    download: "greg_hughes",
                                    children: [
                                        "Resume",
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-download",
                                            id: "resume-download-button"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.js

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("footer", {
            className: "main-footer",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "footer-content col-sm-12 col-lg-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: "About Greg"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "I first started learning how to code when I was just a sophomore in High School after I discovered WordPress and the world of content management systems. When I was younger, I used to wonder how The Internet worked and how information was displayed on your screen almost like magic. That curiosity later fueled my ambition to teach myself the basics of HTML, CSS and WordPress."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Now almost a decade later, after having received a Web Fundamentals Certificate and an AA degree in Digital Media: Web and Multimedia from Santa Rosa Junior College, my curiosity has pushed me to discover even more about modern web development. Some of the technology that I enjoy using and learning about currently are React, Next,js, Prisma, PostgreSQL and TypeScript."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-sm-12 col-lg-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: "Info:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-contact",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-map-marker-alt"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Location: San Francisco Bay Area"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-contact",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-envelope"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Email: gregsthings@gmail.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-contact",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fab fa-github"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            children: [
                                                "The source code for this website is available at",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://github.com/GregHughes/gregscode",
                                                    target: "_blank",
                                                    children: "GitHub.com"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-sm-12 text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                id: "copyright"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime.jsx(footer, {})
            ]
        })
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js


// custom styles


function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "https://code.jquery.com/jquery-3.3.1.slim.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                strategy: "beforeInteractive",
                src: "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                id: "init",
                dangerouslySetInnerHTML: {
                    __html: `
        let typed = new Typed("#typed-content", {
          strings: [
            "Let's do our best work...^200",
            "Let's do our best work together.",
          ],
          smartBackspace: true,
          startDelay: 1200,
          backDelay: 1000,
          typeSpeed: 23,
          backSpeed: 18,
        })
        
        let cr = document.getElementById("copyright");
        let date = new Date().getFullYear();
        cr.innerText = "\u00A9" + " 2019-" + date + " Greg Hughes";
        `
                }
            })
        ]
    });
}


/***/ }),

/***/ 702:
/***/ (() => {



/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,172,298], () => (__webpack_exec__(693)));
module.exports = __webpack_exports__;

})();