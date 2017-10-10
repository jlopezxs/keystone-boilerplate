// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onClick: function() {
          alert("test");
        }
      },
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/keystone-boilerplate$0.0.5/client/templates/components/alt-layout/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_attr = marko_helpers.a,
    include_tag2 = marko_loadTag(require("marko/src/components/taglib/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  const { title, navLinks } = input;

  out.w("<!doctype html><html" +
    marko_attr("id", __component.id) +
    "><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>" +
    marko_escapeXml(title || "Keystone Boilerplate") +
    "</title><link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\"><link href=\"/styles/bundle.css\" rel=\"stylesheet\"><!--[if lt IE 9]>\n\t\t\t<script src=\"//cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.js\"></script>\n\t\t\t<script src=\"//cdn.jsdelivr.net/respond/1.4.2/respond.min.js\"></script>\n\t\t<![endif]-->");

  include_tag({
      _target: input.css
    }, out);

  include_tag({
      _target: input.head
    }, out);

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar\" role=\"navigation\" aria-label=\"dropdown navigation\"><a class=\"navbar-item\"" +
    marko_attr("data-marko", {
      onclick: __component.d("onClick")
    }, false) +
    ">Keystone Boilerplate</a><a class=\"navbar-item\">Blog</a><a class=\"navbar-item\">Contact</a></nav>");

  var __componentId0 = "body";

  out.w("<div" +
    marko_attr("id", __componentId0) +
    ">");

  include_tag2({
      _target: input.content,
      _elId: __componentId0
    }, out);

  out.w("</div><footer class=\"footer\"><div class=\"container\"><div class=\"content has-text-centered\"><p>Powered by <a href=\"http://keystonejs.com\" target=\"_blank\">KeystoneJS</a>.</p></div></div></footer><script src=\"/js/bundle.js\"></script>");

  include_tag({
      _target: input.js
    }, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
