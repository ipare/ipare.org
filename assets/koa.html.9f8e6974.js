import{_ as e,o as i,c as n,d as a}from"./app.a704fd29.js";const s={},d=a(`<h1 id="koa" tabindex="-1"><a class="header-anchor" href="#koa" aria-hidden="true">#</a> Koa</h1><p>\u5B89\u88C5 <code>@ipare/koa</code> \u4EE5\u652F\u6301 Koa \u529F\u80FD</p><ul><li>\u8BA9 koa \u6210\u4E3A ipare \u7684\u4E2D\u95F4\u4EF6</li><li>\u6216 ipare \u6210\u4E3A koa \u7684\u4E2D\u95F4\u4EF6</li><li>\u5E76\u6253\u901A\u4E8C\u8005\u4E2D\u95F4\u4EF6\u7BA1\u9053</li><li>\u8BA9 <code>ipare</code> \u53EF\u4EE5\u4F7F\u7528\u5927\u90E8\u5206 <code>koa</code> \u63D2\u4EF6</li><li>\u7528 <code>koa</code> \u6258\u7BA1 <code>ipare</code></li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i @ipare/koa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><h3 id="\u5C06-koa-\u4F5C\u4E3A-ipare-\u7684\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C06-koa-\u4F5C\u4E3A-ipare-\u7684\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u5C06 koa \u4F5C\u4E3A ipare \u7684\u4E2D\u95F4\u4EF6</h3><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { TestStartup } from &quot;@ipare/core&quot;;
import &quot;@ipare/koa&quot;;
import { Koa } from &quot;@ipare/koa&quot;;

const res = await new TestStartup()
  .use(async (ctx, next) =&gt; {
    console.log(&quot;step 1&quot;);
    await next();
    console.log(&quot;step 5&quot;);
  })
  .useKoa(
    new Koa().use(async (ctx, next) =&gt; {
      console.log(&quot;step 2&quot;);
      await next();
      console.log(&quot;step 4&quot;);
    })
  )
  .use((ctx) =&gt; {
    console.log(&quot;step 3&quot;);
  })
  .run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C06-ipare-\u4F5C\u4E3A-koa-\u7684\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C06-ipare-\u4F5C\u4E3A-koa-\u7684\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u5C06 ipare \u4F5C\u4E3A koa \u7684\u4E2D\u95F4\u4EF6</h3><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Koa } from &quot;@ipare/koa&quot;;

const koa = new Koa()
  .use(async (ctx, next) =&gt; {
    console.log(&quot;step 1&quot;)
    await next();
    console.log(&quot;step 5&quot;)
  })
  .use(
    koaIpare((startup) =&gt; {
      startup.use(async (ctx, next) =&gt; {
        console.log(&quot;step 2&quot;)
        await next();
        console.log(&quot;step 4&quot;)
      });
    })
  )
  .use((ctx) =&gt; {
    console.log(&quot;step 3&quot;)
  });
const server = koa.listen(2333);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2D\u95F4\u4EF6\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u7BA1\u9053" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6\u7BA1\u9053</h2><p>@ipare/koa \u4F1A\u6253\u901A ipare \u548C koa \u7684\u4E2D\u95F4\u4EF6\u7BA1\u9053\uFF0C\u5C31\u50CF\u4F60\u5728 ipare \u4E2D\u4F7F\u7528 koa \u4E2D\u95F4\u4EF6\u4E00\u6837</p><p>\u7BA1\u9053\u6D41\u5411\uFF1A</p><ol><li>\u5728 useKoa \u540E\u4ECD\u6709 ipare \u4E2D\u95F4\u4EF6\uFF1Aipare -&gt; koa -&gt; ipare -&gt; koa -&gt; ipare</li><li>\u5728 useKoa \u540E\u6CA1\u6709 ipare \u4E2D\u95F4\u4EF6\uFF0C\u6216 koa \u67D0\u4E2A\u4E2D\u95F4\u4EF6\u662F\u7BA1\u9053\u7EC8\u70B9\uFF1Aipare -&gt; koa -&gt; ipare</li></ol><p>\u56E0\u6B64\u4F60\u8FD8\u53EF\u4EE5\u8FD9\u6837\u73A9\uFF1A</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { TestStartup } from &quot;@ipare/core&quot;;
import { Koa } from &quot;@ipare/koa&quot;;
import cors from &quot;koa-cors&quot;;

const res = await new TestStartup()
  .useKoa(
    new Koa()
      .use(async (ctx, next) =&gt; {
        ctx.body = &quot;Ipare loves Koa&quot;;
        await next();
      })
      .use(async (ctx) =&gt; {
        ctx.setHeader(&quot;koa&quot;, &quot;ipare&quot;);
        await next();
      })
  )
  .use(async (ctx, next) =&gt; {
    console.log(ctx.res.body); // &quot;Ipare loves Koa&quot;
    await next();
  })
  .useKoa(new Koa().use(cors()))
  .use(async (ctx) =&gt; {
    console.log(ctx.res.getHeader(&quot;koa&quot;)); // &quot;ipare&quot;
  })
  .run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u6D41" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6D41" aria-hidden="true">#</a> \u4F7F\u7528\u6D41</h2><p>\u4E3A\u4E86\u517C\u5BB9\u5404\u8FD0\u884C\u73AF\u5883\uFF0Cipare \u7684 ctx.body \u90FD\u662F\u5DF2\u89E3\u6790\u597D\u7684\u6570\u636E</p><p>\u56E0\u6B64\u5982\u679C\u6D89\u53CA\u5230\u6D41\uFF0C\u4F60\u6709\u4E24\u79CD\u505A\u6CD5\u53EF\u4EE5\u8BA9 <code>@ipare/koa</code> \u6B63\u786E\u89E3\u6790</p><ol><li>\u5148\u89E3\u6790</li></ol><p>\u5728 <code>startup.useKoa</code> \u4E4B\u524D\u7684\u4E2D\u95F4\u4EF6\u4E2D\uFF0C\u5148\u89E3\u6790\u6D41\uFF0C\u5C06\u89E3\u6790\u540E\u7684\u5185\u5BB9\u653E\u5165 <code>ctx.body</code>\uFF0C\u5728 koa \u4E2D\u95F4\u4EF6\u4E2D\u5373\u53EF\u4F7F\u7528\u8BE5\u6570\u636E</p><ol><li>\u914D\u7F6E\u4F20\u5165\u53EF\u8BFB\u6D41</li></ol><p>useKoa \u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 streamingBody \u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u53C2\u6570\u4E3A ipare \u7684 <code>ctx</code>\uFF0C\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A <code>ReadableStream</code></p><p>\u5982 http(s) \u73AF\u5883\u4E0B</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { HttpStartup } from &quot;@ipare/http&quot;;

new HttpStartup().useKoa(new Koa(), {
  streamingBody: (ctx) =&gt; ctx.httpReq,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982 \u963F\u91CC\u4E91\u51FD\u6570 \u73AF\u5883\u4E0B</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { AlifcStartup } from &quot;@ipare/alifc&quot;;

new AlifcStartup(req, resp, context).useKoa(new Koa(), {
  streamingBody: (ctx) =&gt; ctx.aliReq,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),l=[d];function r(o,t){return i(),n("div",null,l)}var u=e(s,[["render",r],["__file","koa.html.vue"]]);export{u as default};
