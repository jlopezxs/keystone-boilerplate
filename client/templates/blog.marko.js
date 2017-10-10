// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_classAttr = marko_helpers.ca,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    alt_layout_template = marko_loadTemplate(require.resolve("./components/alt-layout")),
    marko_loadTag = marko_helpers.t,
    alt_layout_tag = marko_loadTag(alt_layout_template);

function render(input, out) {
  var data = input;

  let { data, utils, filters } = input;

  alt_layout_tag({
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"container\"><div class=\"row\"><div class=\"col-sm-8 col-md-9\">");

            if (filters.category && (!data.category)) {
              out.w("<h3 class=\"text-muted\">Invalid Category.</h3>");
            } else {
              if (data.posts.results.length) {
                if (data.posts.totalPages > 1) {
                  out.w("<h4 class=\"text-weight-normal\">Showing <strong>" +
                    marko_escapeXml(data.posts.first) +
                    "</strong> to <strong>" +
                    marko_escapeXml(data.posts.last) +
                    "</strong> of <strong>" +
                    marko_escapeXml(data.posts.total) +
                    "</strong> posts.</h4>");
                } else {
                  out.w("<h4 class=\"text-weight-normal\">Showing " +
                    marko_escapeXml(utils.plural(data.posts.results.length, "* post")) +
                    ".</h4>");
                }

                out.w("<div class=\"blog\">");

                marko_forEach(data.posts.results, function(post) {
                  out.w(marko_escapeXml(showPost(post)));
                });

                out.w("</div>");

                if (data.posts.totalPages > 1) {
                  out.w("<ul class=\"pagination\">");

                  if (data.posts.previous) {
                    out.w("<li><a href=\"?page=" +
                      marko_escapeXmlAttr(data.posts.previous) +
                      "\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a></li>");
                  } else {
                    out.w("<li class=\"disabled\"><a href=\"?page=1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a></li>");
                  }

                  marko_forEach(data.posts.pages, function(p) {
                    out.w("<li class=\"" +
                      marko_escapeXmlAttr(data.posts.currentPage == p ? "active" : "") +
                      "\"><a href=\"?page=" +
                      marko_escapeXmlAttr(p) +
                      "\">" +
                      marko_escapeXml(p) +
                      "</a></li>");
                  });

                  if (data.posts.next) {
                    out.w("<li><a href=\"?page=" +
                      marko_escapeXmlAttr(data.posts.next) +
                      "\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></li>");
                  } else {
                    out.w("<li class=\"disabled\"><a href=\"?page=" +
                      marko_escapeXmlAttr(data.posts.totalPages) +
                      "\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></li>");
                  }

                  out.w("</ul>");
                } else {
                  if (data.category) {
                    out.w("<h3 class=\"text-muted\">There are no posts in the category " +
                      marko_escapeXml(data.category.name) +
                      ".</h3>");
                  } else {
                    out.w("<h3 class=\"text-muted\">There are no posts yet.</h3>");
                  }
                }
              }
            }

            out.w("</div>");

            if (data.categories.length) {
              out.w("<div class=\"col-sm-4 col-md-3\"><h2>Categories</h2><div class=\"list-group\" style=\"margin-top: 70px;\"><a href=\"" +
                marko_escapeXmlAttr(helper.getUrl("blog")) +
                "\" class=\"" +
                marko_escapeXmlAttr((!data.category) && "active") +
                " list-group-item\">All Categories</a>");

              marko_forEach(data.categories, function(cat) {
                out.w("<a href=\"" +
                  marko_escapeXmlAttr(helper.getUrl("blog", {
                    categorySlug: cat.key
                  })) +
                  "\"" +
                  marko_classAttr([
                    "list-group-item",
                    (data.category && (data.category.id == cat.id)) && "active"
                  ]) +
                  ">" +
                  marko_escapeXml(cat.name) +
                  "</a>");
              });

              out.w("</div></div>");
            }

            out.w("</div></div>");
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
