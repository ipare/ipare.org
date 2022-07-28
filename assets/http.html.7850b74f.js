import{_ as a,o as r,c as s,a as e,b as t,d as n,e as i,r as l}from"./app.a704fd29.js";const o={},c=n(`<h1 id="\u539F\u751F-http-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u539F\u751F-http-\u670D\u52A1" aria-hidden="true">#</a> \u539F\u751F Http \u670D\u52A1</h1><p>\u5B89\u88C5 <code>@ipare/http</code> \u4EE5\u652F\u6301 Http \u8FD0\u884C\u73AF\u5883</p><ul><li>\u8BA9 Ipare \u80FD\u591F\u8FD0\u884C\u4E8E http(s)</li><li>\u4F60\u53EF\u4EE5\u968F\u65F6\u5C06 Ipare \u4E91\u51FD\u6570\u7B80\u5355\u6539\u4E3A nginx \u6258\u7BA1\u7684 Ipare http \u670D\u52A1</li><li>\u4E5F\u53EF\u4EE5\u5C06 nginx \u6258\u7BA1\u7684 Ipare http \u670D\u52A1\u7B80\u5355\u6539\u4E3A Ipare \u4E91\u51FD\u6570</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i @ipare/http
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><p>\u4EE5\u4E0B\u793A\u4F8B\u5F00\u542F\u4E00\u4E2A\u670D\u52A1\uFF0C\u7AEF\u53E3\u5F53\u7136\u662F 2333 \u5566</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import { HttpStartup } from &quot;@ipare/http&quot;;

new HttpStartup()
  .use(async (ctx) =&gt; {
    ctx.ok(&quot;@ipare/http&quot;);
  })
  .listen(2333);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@ipare/http \u4E5F\u652F\u6301 https\uFF0C\u53EA\u9700\u5C06\u4E0A\u8FF0\u793A\u4F8B\u4E2D\u7684 <code>HttpStartup</code> \u6539\u4E3A <code>HttpsStartup</code></p><h2 id="\u7EC4\u5408\u5176\u4ED6\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5176\u4ED6\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u7EC4\u5408\u5176\u4ED6\u4E2D\u95F4\u4EF6</h2><h3 id="ipare-router" tabindex="-1"><a class="header-anchor" href="#ipare-router" aria-hidden="true">#</a> @ipare/router</h3><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import { HttpStartup } from &quot;@ipare/http&quot;;
import &quot;@ipare/router&quot;;

new HttpStartup()
  .useRouter()
  .listen(2333);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ipare-static" tabindex="-1"><a class="header-anchor" href="#ipare-static" aria-hidden="true">#</a> @ipare/static</h3><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import { HttpStartup } from &quot;@ipare/http&quot;;
import &quot;@ipare/router&quot;;

new HttpStartup()
  .useStatic()
  .listen(2333);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="body-\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#body-\u89E3\u6790" aria-hidden="true">#</a> body \u89E3\u6790</h2><p>\u5185\u7F6E\u56DB\u79CD body \u89E3\u6790</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import { HttpStartup } from &quot;@ipare/http&quot;;
new HttpStartup()
  .useHttpJsonBody()
  .useHttpTextBody()
  .useHttpUrlencodedBody()
  .useHttpMultipartBody()
  .listen(2333);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3>`,18),u=i("\u63A5\u6536\u53C2\u6570\u53C2\u8003 "),p={href:"https://github.com/koajs/koa-body",target:"_blank",rel:"noopener noreferrer"},v=i("co-body"),h=n(`<div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpJsonBody()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpJsonBody({
  strict: true,
  limit: &quot;1mb&quot;,
  encoding: &quot;utf-8&quot;,
  returnRawBody: false,
  onError: (ctx, err) =&gt; {},
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h3>`,4),m=i("\u63A5\u6536\u53C2\u6570\u53C2\u8003 "),b={href:"https://github.com/koajs/koa-body",target:"_blank",rel:"noopener noreferrer"},g=i("co-body"),x=n(`<div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpTextBody()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpTextBody({
  limit: &quot;1mb&quot;,
  encoding: &quot;utf-8&quot;,
  returnRawBody: false,
  onError: (ctx, err) =&gt; {},
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="urlencoded" tabindex="-1"><a class="header-anchor" href="#urlencoded" aria-hidden="true">#</a> urlencoded</h3>`,4),S=i("\u63A5\u6536\u53C2\u6570\u53C2\u8003 "),_={href:"https://github.com/koajs/koa-body",target:"_blank",rel:"noopener noreferrer"},f=i("co-body"),q=n(`<div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpUrlencodedBody()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpUrlencodedBody({
  queryString:&#39;&#39;,
  limit: &quot;1mb&quot;,
  encoding: &quot;utf-8&quot;,
  returnRawBody: false,
  onError: (ctx, err) =&gt; {},
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="multipart" tabindex="-1"><a class="header-anchor" href="#multipart" aria-hidden="true">#</a> multipart</h3>`,4),J=i("\u63A5\u6536\u53C2\u6570\u53C2\u8003 "),H={href:"https://github.com/node-formidable/formidable",target:"_blank",rel:"noopener noreferrer"},y=i("formidable"),B=n(`<div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpMultipartBody()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>startup.useHttpMultipartBody({
  opts: {
    multiples: true,
  },
  limit: &quot;1mb&quot;,
  encoding: &quot;utf-8&quot;,
  onFileBegin: async (ctx, formName, file) =&gt; {
    ctx.res.setHeader(&quot;file-name&quot;, file.name ?? &quot;&quot;);
  },
  onError: (ctx, err) =&gt; {},
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="httpres-httpreq" tabindex="-1"><a class="header-anchor" href="#httpres-httpreq" aria-hidden="true">#</a> <code>httpRes</code> &amp; <code>httpReq</code></h2><p>\u4E3A\u4E86\u66F4\u597D\u7684\u5229\u7528 ipare\uFF0C\u6B63\u5E38\u60C5\u51B5\u4F7F\u7528 <code>ctx.res</code> \u548C <code>ctx.req</code> \u5373\u53EF\uFF0C\u5E76\u4E14\u53EF\u4EE5\u66F4\u597D\u7684\u914D\u5408\u5176\u4ED6\u4E2D\u95F4\u4EF6\u3002</p><p>\u4E3A\u4E86\u5E94\u5BF9\u7279\u6B8A\u9700\u6C42\uFF0C<code>@ipare/http</code> \u5728 ctx \u4E2D\u53EF\u4EE5\u52A0\u5165\u4E86 <code>httpRes</code> \u548C <code>httpReq</code>\uFF0C\u7279\u6B8A\u60C5\u51B5\u4E0B\u4F60\u4E5F\u53EF\u4EE5\u6309\u539F\u751F\u65B9\u6CD5\u64CD\u4F5C <code>ctx.httpRes</code> \u548C <code>ctx.httpReq</code>\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p><p>\u5982\u679C\u8C03\u7528\u4E86 <code>httpReq.end()</code>\uFF0C<code>ctx.res</code> \u5C06\u4E0D\u4F1A\u88AB\u5199\u5165\u8FD4\u56DE\u7ED3\u679C</p><h2 id="\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3" aria-hidden="true">#</a> \u5165\u53E3</h2><p><code>HttpStartup</code> \u548C <code>HttpsStartup</code> \u4F5C\u4E3A <code>Ipare</code> \u8FD0\u884C\u4E8E <code>Http</code> \u7684\u5165\u53E3</p><p>\u8BE5\u7C7B\u7EE7\u627F\u4E8E <code>Startup</code> \u5E76\u5B9E\u73B0 <code>Http</code> \u529F\u80FD</p>`,10);function k(R,I){const d=l("ExternalLinkIcon");return r(),s("div",null,[c,e("p",null,[u,e("a",p,[v,t(d)])]),h,e("p",null,[m,e("a",b,[g,t(d)])]),x,e("p",null,[S,e("a",_,[f,t(d)])]),q,e("p",null,[J,e("a",H,[y,t(d)])]),B])}var E=a(o,[["render",k],["__file","http.html.vue"]]);export{E as default};
