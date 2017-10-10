// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    alt_layout_template = marko_loadTemplate(require.resolve("./components/alt-layout")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    alt_layout_tag = marko_loadTag(alt_layout_template);

function render(input, out) {
  var data = input;

  alt_layout_tag({
      content: {
          renderBody: function renderBody(out) {
            out.w("<section class=\"hero is-primary is-medium is-bold\"><div class=\"hero-body container has-text-centered\"><img src=\"http://keystonejs.com/images/logo-inverted.svg\" alt=\"KeystoneJS\" width=\"80\" height=\"81\"><h1 class=\"title\">Node.js CMS & Web Application Platform</h1><p class=\"subtitle\">The open source framework for developing database-driven websites, applications and APIs in Node.js. Built on Express and MongoDB.</p><a class=\"button is-white is-large is-primary is-inverted\">GET STARTED</a><a class=\"button is-outlined is-large is-primary is-inverted\">Try the demo</a></div></section>");
          }
        },
      [hasRenderBodyKey]: true
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./components/alt-layout"
    ]
  };
