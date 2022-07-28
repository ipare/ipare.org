import{_ as e,o as a,c as n,d as i}from"./app.a704fd29.js";const d={},r=i(`<h1 id="\u4E91\u51FD\u6570\u8FD0\u884C\u73AF\u5883-lambda" tabindex="-1"><a class="header-anchor" href="#\u4E91\u51FD\u6570\u8FD0\u884C\u73AF\u5883-lambda" aria-hidden="true">#</a> \u4E91\u51FD\u6570\u8FD0\u884C\u73AF\u5883 Lambda</h1><p>\u5B89\u88C5 <code>@ipare/lambda</code> \u4EE5\u652F\u6301\u4E91\u51FD\u6570\u8FD0\u884C\u73AF\u5883</p><p>\u53EF\u4EE5\u5C06 Ipare \u9879\u76EE\u6258\u7BA1\u5230 \u817E\u8BAF\u4E91\u4E8B\u4EF6\u4E91\u51FD\u6570\u3001\u963F\u91CC\u4E91\u4E8B\u4EF6\u4E91\u51FD\u6570\u3001aws lambda\u3001azure functions \u7B49\uFF0C\u63D0\u5347\u4E91\u51FD\u6570\u54CD\u5E94\u901F\u5EA6</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>npm i @ipare/lambda</p><h2 id="\u5F00\u59CB\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528" aria-hidden="true">#</a> \u5F00\u59CB\u4F7F\u7528</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { LambdaStartup } from &quot;@ipare/lambda&quot;;

const main = async (event, context) =&gt; {
  return await new LambdaStartup(event, context)
    .use(async (ctx, next) =&gt; {
      ctx.res.headers.demo = &quot;@ipare/lambda&quot;;
      await next();
    })
    .run();
};
exports.main = main;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6DFB\u52A0 <code>@ipare/router</code></p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import { LambdaStartup } from &quot;@ipare/lambda&quot;;
import &quot;@ipare/router&quot;;

const main = async (event, context) =&gt; {
  return await new LambdaStartup(event, context)
    .use(async (ctx, next) =&gt; {
      ctx.res.headers.demo = &quot;@ipare/lambda&quot;;
      await next();
    })
    .useRouter()
    .run();
};
exports.main = main;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3" aria-hidden="true">#</a> \u5165\u53E3</h2><p><code>LambdaStartup</code> \u4F5C\u4E3A <code>Ipare</code> \u8FD0\u884C\u4E8E\u4E91\u51FD\u6570\u7684\u5165\u53E3</p><p>\u8BE5\u7C7B\u7EE7\u627F\u4E8E <code>Startup</code> \u5E76\u5B9E\u73B0\u4E91\u51FD\u6570\u7684\u529F\u80FD</p>`,12),s=[r];function t(l,c){return a(),n("div",null,s)}var m=e(d,[["render",t],["__file","lambda.html.vue"]]);export{m as default};
