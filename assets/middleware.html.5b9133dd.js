import{_ as e,o as i,c as d,d as n}from"./app.a704fd29.js";const l={},s=n(`<h1 id="\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6</h1><p>\u5728 Ipare \u4E2D\uFF0C\u5927\u90E8\u5206\u529F\u80FD\u90FD\u662F\u7531\u4E2D\u95F4\u4EF6\u5B9E\u73B0\u7684</p><p>\u4E2D\u95F4\u4EF6\u7684\u529F\u80FD\u5305\u62EC\uFF1A</p><ul><li>\u6267\u884C\u4EE3\u7801</li><li>\u4FEE\u6539\u8BF7\u6C42\u548C\u54CD\u5E94\u5BF9\u8C61</li><li>\u62E6\u622A\u8BF7\u6C42</li><li>\u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6</li></ul><h2 id="\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u6267\u884C\u987A\u5E8F</h2><p>Ipare \u7684\u4E2D\u95F4\u4EF6\u91C7\u7528\u4E86\u6D0B\u8471\u5708\u6A21\u578B\uFF0C\u5373</p><ul><li>\u8FDB\u5165\u4E2D\u95F4\u4EF6\u5E76\u6267\u884C\u4EE3\u7801</li><li>\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6</li><li>\u6267\u884C\u5269\u4F59\u4EE3\u7801\u5E76\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u4E2D\u95F4\u4EF6</li></ul><p>\u5982\u679C\u6CA1\u6709\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u8BF7\u6C42\u4F1A\u6CBF\u5F53\u524D\u4E2D\u95F4\u4EF6\u76F4\u63A5\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u4E2D\u95F4\u4EF6</p><h2 id="\u4E2D\u95F4\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6\u7C7B\u578B</h2><p>\u6709\u4E24\u79CD\u4E2D\u95F4\u4EF6</p><ul><li>\u7C7B\u4E2D\u95F4\u4EF6</li><li>\u51FD\u6570\u5F0F\u4E2D\u95F4\u4EF6</li></ul><p>\u5982\u679C\u4E2D\u95F4\u4EF6\u4EE3\u7801\u8F83\u591A\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u7C7B\u4E2D\u95F4\u4EF6\uFF0C\u8BA9\u4EE3\u7801\u66F4\u6613\u8BFB</p><p>\u51FD\u6570\u5F0F\u4E2D\u95F4\u4EF6\u6700\u7EC8\u4F1A\u88AB\u8F6C\u6362\u4E3A\u7C7B\u4E2D\u95F4\u4EF6\u6267\u884C\uFF0C\u4F46\u4F60\u53EF\u80FD\u65E0\u9700\u5173\u6CE8\u8FD9\u4E2A\u7279\u70B9</p><h2 id="\u4F7F\u7528\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u4E2D\u95F4\u4EF6</h2><p>\u7C7B\u4E2D\u95F4\u4EF6\u548C\u51FD\u6570\u5F0F\u4E2D\u95F4\u4EF6\u4F7F\u7528\u65B9\u5F0F\u4E0D\u540C\uFF0C\u4F46\u90FD\u5927\u540C\u5C0F\u5F02</p><p>\u4E2D\u95F4\u4EF6\u6267\u884C\u7684\u987A\u5E8F\u4E25\u683C\u9075\u5FAA\u6DFB\u52A0\u987A\u5E8F</p><h3 id="\u51FD\u6570\u5F0F\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u4E2D\u95F4\u4EF6</h3><p>\u901A\u8FC7 startup.use \u6DFB\u52A0</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup
  .use(async (ctx, next)=&gt;{
    ctx.res.setHeader(&quot;h1&quot;, 1);
    await next();
    ctx.res.setHeader(&quot;h3&quot;, 3);
  })
  .use((ctx)=&gt;{
    ctx.res.setHeader(&quot;h2&quot;, 2);
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u7C7B\u4E2D\u95F4\u4EF6</h3><p>\u901A\u8FC7 startup.add \u6DFB\u52A0</p><p>\u521B\u5EFA\u4E00\u4E2A\u7C7B\uFF0C\u5E76\u7EE7\u627F <code>Middleware</code>\uFF0C\u5B9E\u73B0 <code>invoke</code> \u51FD\u6570</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class TestMiddleware extends Middleware{
  async invoke(){
    this.ctx.res.setHeader(&quot;h1&quot;,1);
    await this.next();
    this.ctx.res.setHeader(&quot;h2&quot;,2);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.add(TestMiddleware) // \u4E00\u822C\u4E2D\u95F4\u4EF6
// OR
startup.add(new TestMiddleware()) // \u4E0D\u63A8\u8350
// OR
startup.add(async (ctx) =&gt; TestMiddleware) // \u52A8\u6001\u4E2D\u95F4\u4EF6
// OR
startup.add(async (ctx) =&gt; new TestMiddleware()) // \u52A8\u6001\u4E2D\u95F4\u4EF6\u5E76\u81EA\u884C\u5B9E\u4F8B\u5316
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u5408\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u7EC4\u5408\u4E2D\u95F4\u4EF6</h3><p><code>ComposeMiddleware</code> \u4E2D\u95F4\u4EF6\u53EF\u4EE5\u7EC4\u5408\u591A\u4E2A\u4E2D\u95F4\u4EF6</p><p>\u8FD9\u4E9B\u4E2D\u95F4\u4EF6\u5F62\u6210\u7684\u4E2D\u95F4\u4EF6\u7BA1\u9053\uFF0C\u4F1A\u4E0E\u4E3B\u4E2D\u95F4\u4EF6\u7BA1\u9053\u76F8\u8FDE\u63A5</p><p>\u652F\u6301\u591A\u5C42\u5D4C\u5957\u7EC4\u5408</p><p>\u8BE5\u7C7B\u7684\u6210\u5458\u51FD\u6570 <code>add</code> \u548C <code>use</code> \u4E0E <code>Startup</code> \u7528\u6CD5\u76F8\u540C</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup
  .use(async (ctx, next) =&gt; {
    await next();
  })
  .add(() =&gt;
    new ComposeMiddleware()
      .use(async (ctx, next) =&gt; {
        await next();
      })
      .add(() =&gt;
        new ComposeMiddleware()
          .use(async (ctx, next) =&gt; {
            await next();
          })
          .add(() =&gt;
            new ComposeMiddleware()
              .use(async (ctx, next) =&gt; {
                await next();
              })
              .use(async (ctx, next) =&gt; {
                await next();
              })
          )
          .use(async (ctx, next) =&gt; {
            await next();
          })
      )
      .use(async (ctx, next) =&gt; {
        await next();
      })
  )
  .use(async (ctx, next) =&gt; {
    await next();
  })
  .run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2D\u95F4\u4EF6\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u94A9\u5B50" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6\u94A9\u5B50</h2><p>\u4E2D\u95F4\u4EF6\u94A9\u5B50\u53EF\u4EE5\u5728\u4E2D\u95F4\u4EF6\u7684\u4E0D\u540C\u751F\u547D\u5468\u671F\uFF0C\u8FD0\u884C\u6307\u5B9A\u7684\u4EE3\u7801</p><ul><li>\u94A9\u5B50\u672C\u8D28\u4E5F\u4F1A\u88AB\u8F6C\u6362\u4E3A\u4E2D\u95F4\u4EF6</li><li>\u94A9\u5B50\u53EA\u4F1A\u4F5C\u7528\u4E8E\u5176\u540E\u7684\u4E2D\u95F4\u4EF6</li></ul><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.hook(HookType, (ctx, md) =&gt; {})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570</p><ol><li>\u94A9\u5B50\u7C7B\u578B\uFF0C\u6709\u4EE5\u4E0B\u51E0\u79CD\u94A9\u5B50 <ul><li><code>BeforeInvoke</code>\uFF1A\u5728\u4E2D\u95F4\u4EF6\u6267\u884C\u4E4B\u524D\u6267\u884C\uFF0C\u9ED8\u8BA4\u53C2\u6570\u3002\u82E5\u8FD4\u56DE <code>false</code> \u5219\u7EC8\u6B62\u540E\u7EED\u540C\u7C7B\u578B\u94A9\u5B50\u6267\u884C\uFF0C\u5E76\u4E14\u4E0D\u6267\u884C\u5F53\u524D\u4E2D\u95F4\u4EF6</li><li><code>AfterInvoke</code>\uFF1A\u5728\u4E2D\u95F4\u4EF6\u6267\u884C\u4E4B\u540E\u6267\u884C\uFF0C\u5373 <code>next</code> \u4E4B\u540E</li><li><code>BeforeNext</code>\uFF1A\u5728\u4E2D\u95F4\u4EF6 <code>next</code> \u6267\u884C\u524D\u6267\u884C\uFF0C\u5982\u679C\u5728\u4E2D\u95F4\u4EF6\u4E2D\u6CA1\u6709\u8C03\u7528 <code>next</code>\uFF0C\u5C06\u4E0D\u89E6\u53D1\u8FD9\u79CD\u94A9\u5B50\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u7EC8\u6B62\u540E\u7EED\u540C\u7C7B\u578B\u94A9\u5B50\u6267\u884C\uFF0C\u5E76\u4E14\u4E0D\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6</li><li><code>Constructor</code>\uFF1A\u7528\u4E8E\u6784\u9020\u4E2D\u95F4\u4EF6\uFF0C\u5229\u7528\u8FD9\u79CD\u94A9\u5B50\u53EF\u4EE5\u52A8\u6001\u4F7F\u7528\u4E2D\u95F4\u4EF6\u3002\u4F46\u6CE8\u518C\u7684\u4E2D\u95F4\u4EF6\uFF0C\u5FC5\u987B\u662F\u4E2D\u95F4\u4EF6\u7684\u6784\u9020\u5668\uFF0C\u5373 <code>startup.add(YourMiddleware)</code> \u7684\u65B9\u5F0F</li><li><code>Exception</code>\uFF1A\u4E2D\u95F4\u4EF6\u629B\u51FA\u5F02\u5E38\u65F6\u4F1A\u6267\u884C\u8FD9\u7C7B\u94A9\u5B50</li></ul></li><li>\u94A9\u5B50\u56DE\u8C03\u51FD\u6570\uFF0C\u6709\u4E24\u4E2A\u6216\u4E09\u4E2A\u53C2\u6570 <ul><li>\u53C2\u6570 1\uFF1A\u7BA1\u9053 HttpContext \u5BF9\u8C61</li><li>\u53C2\u6570 2\uFF1A\u4E2D\u95F4\u4EF6\u5BF9\u8C61\u6216\u4E2D\u95F4\u4EF6\u6784\u9020\u51FD\u6570 <ul><li>\u5982\u679C\u94A9\u5B50\u7C7B\u578B\u4E3A <code>Constructor</code>\uFF0C\u5219\u53C2\u6570\u4E3A\u4E2D\u95F4\u4EF6\u6784\u9020\u51FD\u6570</li><li>\u5982\u679C\u94A9\u5B50\u7C7B\u578B\u4E3A <code>Exception</code>\uFF0C\u5219\u53C2\u6570\u4E3A <code>HttpException</code> \u5BF9\u8C61\u6216\u5176\u6D3E\u751F\u5BF9\u8C61</li><li>\u5982\u679C\u94A9\u5B50\u7C7B\u578B\u4E3A <code>BeforeInvoke</code> \u6216 <code>AfterInvoke</code> \u6216 <code>BeforeNext</code>\uFF0C\u5219\u53C2\u6570\u4E3A\u4E2D\u95F4\u4EF6\u5BF9\u8C61</li></ul></li><li>\u53C2\u6570 3: \u5982\u679C\u94A9\u5B50\u7C7B\u578B\u4E3A <code>Exception</code>\uFF0C\u5219\u6B64\u53C2\u6570\u4E3A Error \u5BF9\u8C61\uFF0C\u5426\u5219\u65E0\u6B64\u53C2\u6570</li><li>\u8FD4\u56DE\u503C\uFF1A <ul><li>\u5982\u679C\u94A9\u5B50\u7C7B\u578B\u4E3A <code>Constructor</code>\uFF0C\u5219\u9700\u8981\u8FD4\u56DE\u4E2D\u95F4\u4EF6\u5BF9\u8C61</li><li>\u5982\u679C\u94A9\u5B50\u7C7B\u578B\u4E3A <code>Exception</code>\uFF0C\u5219\u8FD4\u56DE\u503C\u4E3A bool \u7C7B\u578B <ul><li>\u8FD4\u56DE true \u8BF4\u660E\u5728\u94A9\u5B50\u51FD\u6570\u4E2D\u5DF2\u5904\u7406\u5F02\u5E38\uFF0C\u4E0D\u4F1A\u6267\u884C\u4E0B\u4E00\u4E2A\u5F02\u5E38\u94A9\u5B50</li><li>\u8FD4\u56DE false \u8BF4\u660E\u5728\u94A9\u5B50\u51FD\u6570\u4E2D\u672A\u5904\u7406\u5F02\u5E38\uFF0C\u4F1A\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u5F02\u5E38\u94A9\u5B50</li></ul></li><li>\u5982\u679C\u94A9\u5B50\u7C7B\u578B\u4E3A <code>BeforeInvoke</code> \u6216 <code>AfterInvoke</code> \u6216 <code>BeforeNext</code>\uFF0C\u5219\u6CA1\u6709\u8FD4\u56DE\u503C</li></ul></li></ul></li></ol><p>\u5176\u4E2D\u53C2\u6570 1 \u53EF\u7701\u7565\uFF0C\u9ED8\u8BA4\u4E3A <code>BeforeInvoke</code></p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>  import { Middleware, TestStartup } from &quot;@ipare/core&quot;;

  const startup = new TestStartup()
    .hook((md) =&gt; {
      // 1 before hook
      if (md instanceof TestMiddleware) {
        md.count++;
      }
    })
    .add(TestMiddleware)
    .hook((md) =&gt; {
      // 2 before hook
      if (md instanceof TestMiddleware) {
        md.count++;
      }
    })
    .add(TestMiddleware)
    .hook((md) =&gt; {
      // 3 before hook
      if (md instanceof TestMiddleware) {
        md.count++;
      }
    })
    .hook(HookType.AfterInvoke, (ctx, md) =&gt; {
      // AfterInvoke: executed but without effective
      if (md instanceof TestMiddleware) {
        md.count++;
      }
    })
    .hook(HookType.BeforeNext, (ctx, md) =&gt; {
      // BeforeNext: executed before next
      if (md instanceof TestMiddleware) {
        md.count++;
      }
    })
    .add(TestMiddleware)
    .use((ctx) =&gt; ctx.ok());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),a=[s];function c(r,t){return i(),d("div",null,a)}var u=e(l,[["render",c],["__file","middleware.html.vue"]]);export{u as default};
