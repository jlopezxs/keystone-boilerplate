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
            out.w("<section class=\"hero is-primary\"><div class=\"hero-body container\"><h1 class=\"title\">Welcome</h1><p class=\"subtitle\">This is your new <a href=\"http://keystonejs.com\" target=\"_blank\">KeystoneJS</a> website.</p><p>It includes the latest versions of <a href=\"http://bulma.io/\" target=\"_blank\">Bulma</a> and <a href=\"http://www.jquery.com/\" target=\"_blank\">jQuery</a>.</p><p>Visit the <a href=\"http://keystonejs.com/guide\" target=\"_blank\">Getting Started</a> guide to learn how to customise it.</p><hr><p>Remember to <a href=\"https://github.com/keystonejs/keystone\" target=\"_blank\">Star KeystoneJS on GitHub</a> and <a href=\"https://twitter.com/keystonejs\" target=\"_blank\">follow @keystonejs</a> on twitter for updates.</p></div></section>");
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
