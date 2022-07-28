import{_ as e,o as n,c as s,d as i}from"./app.a704fd29.js";const a={},d=i(`<h1 id="\u4E60\u60EF\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E60\u60EF\u7EA6\u5B9A" aria-hidden="true">#</a> \u4E60\u60EF\u7EA6\u5B9A</h1><p>Ipare \u5728\u5F88\u591A\u65B9\u9762\u90FD\u662F\u7EA6\u5B9A\u5927\u4E8E\u914D\u7F6E</p><p>\u9075\u5FAA\u8FD9\u4E9B\u7EA6\u5B9A\u53EF\u4EE5\u907F\u514D\u5F88\u591A\u914D\u7F6E\u548C\u4E0D\u5FC5\u8981\u7684\u95EE\u9898</p><p>\u672C\u90E8\u5206\u4EC5\u5217\u4E3E\u5E38\u89C1\u7EA6\u5B9A\uFF0C\u5176\u4ED6\u7EA6\u5B9A\u8BE6\u89C1\u5404\u63D2\u4EF6\u7684\u4ECB\u7ECD</p><h2 id="\u7EDF\u4E00\u542F\u52A8\u6587\u4EF6-startup" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u542F\u52A8\u6587\u4EF6-startup" aria-hidden="true">#</a> \u7EDF\u4E00\u542F\u52A8\u6587\u4EF6 Startup</h2><p>\u5728 <code>src</code> \u4E0B\u9700\u8981\u6709 <code>startup.ts</code> \u6587\u4EF6\uFF0C\u5BFC\u51FA\u4E00\u4E2A\u9ED8\u8BA4\u56DE\u8C03\u51FD\u6570\uFF0C\u6B64\u89C4\u5219\u7528\u4E8E <code>@ipare/cli</code> \u6B63\u786E\u89E3\u6790\u4EE3\u7801\uFF0C\u5185\u5BB9\u5982</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>// startup.ts
export default function &lt;T extends Startup&gt;(startup: T, mode?: string) {
  return startup
    .use(async (ctx, next) =&gt; {
      ctx.res.setHeader(&quot;mode&quot;, mode ?? &quot;&quot;);
      await next();
    })
    .useInject()
    .useRouter();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mode</code> \u53C2\u6570\u503C\u4E3A <code>@ipare/cli</code> \u7684 <code>build</code> \u6216 <code>start</code> \u547D\u4EE4\u4F20\u5165\u7684 <code>--mode</code> \u53C2\u6570\uFF0C\u5982 <code>development</code>\u3001<code>production</code> \u7B49</p><h2 id="\u8DEF\u7531\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u8DEF\u7531\u6587\u4EF6\u5939</h2><p><code>@ipare/router</code> \u6216 <code>@ipare/mva</code> \u8DEF\u7531\u6587\u4EF6\u5939\u9ED8\u8BA4\u4E3A <code>src/actions</code></p><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5176\u4ED6\u6587\u4EF6\u5939\uFF0C\u9700\u914D\u7F6E <code>ipare-cli.config.ts</code>\uFF0C\u589E\u52A0 <code>routerActionsDir</code> \uFF0C\u5982</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> Configuration <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ipare/cli&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    routerActionsDir<span class="token operator">:</span> <span class="token string">&quot;custom-actions&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> Configuration<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89C6\u56FE\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u89C6\u56FE\u6587\u4EF6\u5939</h2><p><code>@ipare/view</code> \u6216 <code>@ipare/mva</code> \u89C6\u56FE\u6587\u4EF6\u5939\u9ED8\u8BA4\u4E3A <code>views</code>\uFF0C\u5176\u4E2D\u7684\u6587\u4EF6\u4F1A\u88AB <code>@ipare/cli</code> \u81EA\u52A8\u6253\u5305</p><p>\u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5176\u4ED6\u6587\u4EF6\u5939\uFF0C\u8BBE\u7F6E <code>startup.useView()</code> \u7684\u53C2\u6570</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startu.useView({
  dir: &quot;custom-views&quot;,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5982\u679C\u4FEE\u6539\u9ED8\u8BA4\u89C6\u56FE\u6587\u4EF6\u5939\uFF0C\u4F60\u8FD8\u9700\u8981\u914D\u7F6E <code>ipare-cli.config.ts</code> \u4EE5\u652F\u6301 <code>@ipare/cli</code> \u7684\u8D44\u6E90\u6587\u4EF6\u6253\u5305\u529F\u80FD</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { defineConfig, Configuration } from &quot;@ipare/cli&quot;;
export default defineConfig(({ mode }) =&gt; {
  return {
    build: {
      assets:[
        {
          include: &#39;custom-views/*&#39;
        }
      ]
    }
  } as Configuration;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u6587\u4EF6" aria-hidden="true">#</a> \u9759\u6001\u6587\u4EF6</h2><p><code>@ipare/static</code> \u9759\u6001\u8D44\u6E90\u6587\u4EF6\u5939\u9ED8\u8BA4\u4E3A <code>static</code>\uFF0C\u5176\u4E2D\u7684\u6587\u4EF6\u4F1A\u88AB <code>@ipare/cli</code> \u81EA\u52A8\u6253\u5305</p><p>\u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5176\u4ED6\u6587\u4EF6\u5939\uFF0C\u8BBE\u7F6E <code>startup.useStatic()</code> \u7684\u53C2\u6570</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useStatic({
  dir: &quot;custom-static&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5982\u679C\u4FEE\u6539\u9ED8\u8BA4\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u5939\uFF0C\u4F60\u8FD8\u9700\u8981\u914D\u7F6E <code>ipare-cli.config.ts</code> \u4EE5\u652F\u6301 <code>@ipare/cli</code> \u7684\u8D44\u6E90\u6587\u4EF6\u6253\u5305\u529F\u80FD</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { defineConfig, Configuration } from &quot;@ipare/cli&quot;;
export default defineConfig(({ mode }) =&gt; {
  return {
    build: {
      assets:[
        {
          include: &#39;custom-static/*&#39;
        }
      ]
    }
  } as Configuration;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[d];function t(o,r){return n(),s("div",null,c)}var u=e(a,[["render",t],["__file","appoint.html.vue"]]);export{u as default};
