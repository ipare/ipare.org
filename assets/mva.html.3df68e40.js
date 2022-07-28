import{_ as e,o as i,c as d,d as a}from"./app.a704fd29.js";const s={},n=a(`<h1 id="mva-\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#mva-\u6846\u67B6" aria-hidden="true">#</a> MVA \u6846\u67B6</h1><p>\u5B89\u88C5 <code>@ipare/mva</code> \u4EE5\u652F\u6301 MVA \u529F\u80FD</p><p><code>@ipare/mva</code> \u57FA\u4E8E <code>@ipare/router</code> \uFF0C<code>@ipare/view</code></p><p><code>@ipare/mva</code> \u53EF\u4EE5\u5C06\u8DEF\u7531\u8FD4\u56DE\u7ED3\u679C\uFF0C\u4E0E\u6A21\u677F\u81EA\u52A8\u5BF9\u5E94\u5E76\u6E32\u67D3\u8FD4\u56DE</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>npm i @ipare/mva</p><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useMva()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { TestStartup } from &quot;@ipare/core&quot;;
import &quot;@ipare/mva&quot;;
const res = await new TestStartup()
  .useMva()
  .run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003 <code>@ipare/router</code> \u5728\u6839\u76EE\u5F55\u4E2D\uFF08ts \u9879\u76EE\u4E3A src \u76EE\u5F55\uFF09\u6DFB\u52A0\u4EE5\u4E0B\u6587\u4EF6\u5939\uFF1A</p><ol><li>\u8DEF\u7531\u6587\u4EF6\u5939 <code>actions</code>\uFF0C\u5E76\u7F16\u5199 <code>action</code>\uFF0C\u4E5F\u53EF\u4E3A\u5176\u4ED6\uFF0C\u4F46\u901A\u8FC7 <code>routerOptions.dir</code> \u53C2\u6570\u6307\u5B9A</li><li>\u89C6\u56FE\u6587\u4EF6\u5939 <code>views</code> \uFF0C\u5E76\u7F16\u5199\u76F8\u5E94\u89C6\u56FE\u6A21\u677F\uFF0C\u4E5F\u53EF\u4E3A\u5176\u4ED6\uFF0C\u4F46\u901A\u8FC7 <code>viewOptions.dir</code> \u53C2\u6570\u6307\u5B9A</li></ol><h2 id="\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u914D\u7F6E\u53C2\u6570</h2><p><code>useMvc</code> \u63A5\u6536\u4E00\u4E2A\u53EF\u9009\u914D\u7F6E\u53C2\u6570</p><ul><li>viewOptions: \u4E0E <code>useViews</code> \u53C2\u6570\u76F8\u540C</li><li>routerOptions: \u4E0E <code>useRouter</code> \u53C2\u6570\u76F8\u540C</li><li>codes: \u6307\u5B9A\u72B6\u6001\u7801\u5BF9\u5E94\u7684\u6A21\u677F</li></ul><h2 id="\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u8FC7\u6EE4\u5668</h2><p>\u57FA\u4E8E <code>@ipare/filter</code>\uFF0C\u63D0\u4F9B\u4E86 <code>ResultFilter</code> \u8FC7\u6EE4\u5668</p><p>\u5728\u6E32\u67D3\u89C6\u56FE\u4E4B\u524D\u4F1A\u6267\u884C <code>onResultExecuting</code>\uFF0C\u5982\u679C\u51FD\u6570\u8FD4\u56DE false \u5C06\u7EC8\u6B62\u5269\u4F59 <code>ResultFilter</code> \u8FC7\u6EE4\u5668\u6267\u884C\uFF0C\u5E76\u53D6\u6D88\u6E32\u67D3\u89C6\u56FE</p><p>\u5728\u6E32\u67D3\u89C6\u56FE\u4E4B\u540E\u6267\u884C <code>onResultExecuted</code>\uFF0C\u53EF\u7528\u4E8E\u7EDF\u4E00\u8FD4\u56DE\u89C6\u56FE\u7ED3\u679C</p><h3 id="\u521B\u5EFA\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u8FC7\u6EE4\u5668</h3><p>\u65B0\u5EFA\u4E00\u4E2A\u7C7B\u5E76\u5B9E\u73B0 <code>ResultFilter</code> \u63A5\u53E3</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { ResultFilter } from &quot;@ipare/mva&quot;;

class TestFilter implements ResultFilter {
  onResultExecuted(ctx: HttpContext): void | Promise&lt;void&gt; {
    ctx.res.setHeader(&quot;result2&quot;, 2);
  }
  onResultExecuting(
    ctx: HttpContext
  ): boolean | void | Promise&lt;void&gt; | Promise&lt;boolean&gt; {
    ctx.res.setHeader(&quot;result1&quot;, 1);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5173\u4E8E-ts" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-ts" aria-hidden="true">#</a> \u5173\u4E8E TS</h2><p>\u4F60\u9700\u8981\u5728 <code>tsconfig.json</code> \u4E2D\u7684 <code>static</code> \u4E2D\u6DFB\u52A0 <code>src/views</code>\uFF0C\u8BA9 <code>sfra</code> \u7F16\u8BD1\u547D\u4EE4\u80FD\u591F\u5C06\u6A21\u677F\u6587\u4EF6\u590D\u5236\u5230\u7F16\u8BD1\u76EE\u5F55</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>&quot;static&quot;: [
  &quot;src/views&quot; // \u6A21\u677F\u6587\u4EF6\u5939\u8DEF\u5F84
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),r=[n];function c(o,t){return i(),d("div",null,r)}var u=e(s,[["render",c],["__file","mva.html.vue"]]);export{u as default};
