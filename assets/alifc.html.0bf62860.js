import{_ as d,o as r,c as s,a as e,b as l,d as i,e as n,r as t}from"./app.a704fd29.js";const c={},o=i(`<h1 id="\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97" aria-hidden="true">#</a> \u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97</h1><p>\u5B89\u88C5 <code>@ipare/alifc</code> \u4EE5\u652F\u6301\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97\u8FD0\u884C\u73AF\u5883</p><p>\u5C06 Ipare \u6258\u7BA1\u5230\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97</p><blockquote><p>\u76EE\u524D\u53EA\u652F\u6301 HTTP \u51FD\u6570</p></blockquote><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i @ipare/alifc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5F00\u59CB\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528" aria-hidden="true">#</a> \u5F00\u59CB\u4F7F\u7528</h2><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import { AlifcStartup } from &quot;@ipare/alifc&quot;;

const handler = async function (req, resp, context) {
  await new AlifcStartup(req, resp, context)
    .use(async (ctx) =&gt; {
      ctx.ok(&quot;@ipare/alifc&quot;);
    })
    .run();
};
module.exports.handler = handler;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6DFB\u52A0 <code>@ipare/router</code></p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import { AlifcStartup } from &quot;@ipare/alifc&quot;;
import &quot;@ipare/router&quot;;

const handler = async function (req, resp, context) {
  await new AlifcStartup(req, resp, context)
    .use(async (ctx, next) =&gt; {
      ctx.res.headers.demo = &quot;@ipare/alifc&quot;;
      await next();
    })
    .useRouter()
    .run();
};
module.exports.handler = handler;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u6790-body" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790-body" aria-hidden="true">#</a> \u89E3\u6790 body</h2><p>\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97\u6CA1\u6709\u89E3\u6790 body\uFF0C\u4F46 <code>@ipare/alifc</code> \u652F\u6301\u56DB\u79CD body \u89E3\u6790</p><ul><li>json</li><li>text</li><li>urlencoded</li><li>multipart</li></ul>`,13),u=n("\u4F7F\u7528\u8BE6\u60C5\u53C2\u8003 "),v={href:"https://github.com/ipare/http",target:"_blank",rel:"noopener noreferrer"},p=n("@ipare/http"),m=i(`<div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>await new AlifcStartup(req, resp, context)
  .useHttpJsonBody()
  .useHttpTextBody()
  .useHttpUrlencodedBody()
  .useHttpMultipartBody()
  .run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3" aria-hidden="true">#</a> \u5165\u53E3</h2><p><code>AlifcStartup</code> \u4F5C\u4E3A <code>Ipare</code> \u8FD0\u884C\u4E8E\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97\u7684\u5165\u53E3</p><p>\u8BE5\u7C7B\u7EE7\u627F\u4E8E <code>Startup</code> \u5E76\u5B9E\u73B0\u963F\u91CC\u4E91\u51FD\u6570\u8BA1\u7B97\u529F\u80FD</p>`,4);function h(b,f){const a=t("ExternalLinkIcon");return r(),s("div",null,[o,e("p",null,[u,e("a",v,[p,l(a)])]),m])}var _=d(c,[["render",h],["__file","alifc.html.vue"]]);export{_ as default};
