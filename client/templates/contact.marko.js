// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_classAttr = marko_helpers.ca,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_attrs = marko_helpers.as,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    alt_layout_template = marko_loadTemplate(require.resolve("./components/alt-layout/index.marko")),
    marko_loadTag = marko_helpers.t,
    alt_layout_tag = marko_loadTag(alt_layout_template);

function render(input, out) {
  var data = input;

  const { enquirySubmitted, validationErrors = {}, formData, enquiryTypes } = input;

  alt_layout_tag({
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"container\">");

            if (enquirySubmitted) {
              out.w("<h3>Thanks for getting in touch.</h3>");
            } else {
              out.w("<div class=\"columns\"><div class=\"column is-one-quarter\"><form method=\"post\"><input type=\"hidden\" name=\"action\" value=\"contact\"><div class=\"field\"><label class=\"label\">Name</label><div class=\"control\"><input" +
                marko_classAttr([
                  "input",
                  validationErrors.name && "is-danger"
                ]) +
                " type=\"text\" name=\"name.full\"" +
                marko_attr("value", formData["name.full"]) +
                "></div></div><div class=\"field\"><label class=\"label\">Email</label><div class=\"control\"><input" +
                marko_classAttr([
                  "input",
                  validationErrors.email && "is-danger"
                ]) +
                " type=\"email\" name=\"email\"" +
                marko_attr("value", formData.email) +
                "></div></div><div class=\"field\"><label class=\"label\">Phone</label><div class=\"control\"><input" +
                marko_classAttr([
                  "input",
                  validationErrors.phone && "is-danger"
                ]) +
                " placeholder=\"(optional)\" type=\"phone\" name=\"phone\"" +
                marko_attr("value", formData.phone) +
                "></div></div><div class=\"field\"><label class=\"label\">Type</label><div class=\"control\"><div class=\"select\"><select name=\"enquiryType\" class=\"form-control\"><option value=\"\">(select one)</option>");

              marko_forEach(enquiryTypes, function(type) {
                out.w("<option value=\"" +
                  marko_escapeXmlAttr(type.value) +
                  "\"" +
                  marko_attrs(formData.enquiryType === type.value ? "selected" : "") +
                  ">" +
                  marko_escapeXml(type.label) +
                  "</option>");
              });

              out.w("</select></div></div></div><div class=\"field\"><label class=\"label\">Message</label><div class=\"control\"><textarea name=\"message\" class=\"textarea\" placeholder=\"Leave us a message...\" rows=\"4\">\n\t\t\t\t\t\t\t\t\t" +
                marko_escapeXml(formData.message) +
                "\n\t\t\t\t\t\t\t\t\t</textarea></div></div><div class=\"form-actions\"><button type=\"submit\" class=\"button is-primary\">Send</button></div></form></div></div>");
            }

            out.w("</div>");
          }
        },
      [hasRenderBodyKey]: true
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./components/alt-layout/index.marko"
    ]
  };
