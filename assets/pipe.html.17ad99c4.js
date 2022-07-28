import{_ as e,o as i,c as n,d}from"./app.a704fd29.js";const a={},r=d(`<h1 id="\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053" aria-hidden="true">#</a> \u7BA1\u9053</h1><p>\u5B89\u88C5 <code>@ipare/pipe</code> \u4EE5\u652F\u6301\u7BA1\u9053\u529F\u80FD</p><p>\u8BF7\u6C42\u53C2\u6570\u7BA1\u9053\uFF0C\u7528\u4E8E\u6821\u9A8C\u3001\u8F6C\u6362\u3001\u683C\u5F0F\u5316\u8BF7\u6C42\u53C2\u6570</p><p>\u6B64\u5904\u7BA1\u9053\u4E0D\u540C\u4E8E\u7BA1\u9053\u4E0A\u4E0B\u6587 <code>HttpContext</code></p><p>\u4F60\u9700\u8981\u4F7F\u7528\u88C5\u9970\u5668\u5E76\u5F15\u5165 <code>@ipare/inject</code> \u4EE5\u4F7F\u7528\u6B64\u529F\u80FD</p><p>\u7528 <code>Query</code>, <code>Header</code>, <code>Param</code>, <code>Body</code>, <code>Context</code> \u88C5\u9970\u5B57\u6BB5\uFF0C\u8BE5\u5B57\u6BB5\u5728\u7279\u5B9A\u751F\u547D\u5468\u671F\u4F1A\u88AB\u81EA\u52A8\u8D4B\u503C</p><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/inject&quot;;
import { Header, Query, Param, Body, Context } from &quot;@ipare/pipe&quot;;
import { Middleware, ReadonlyDict, TestStartup, HttpContext } from &quot;@ipare/core&quot;;

class TestMiddleware extends Middleware {
  @Context
  private readonly ctx1!: HttpContext;
  @Header
  private readonly header!: ReadonlyDict;
  @Query
  private readonly query1!: ReadonlyDict;
  @Query
  private readonly query2!: ReadonlyDict;
  @Param
  private readonly params!: ReadonlyDict;
  @Body
  private readonly body!: ReadonlyDict;
  @Body(&quot;array&quot;)
  private readonly arrayFieldBody!: string;
  @Query(&quot;q&quot;)
  private readonly queryProperty!: string;

  async invoke(): Promise&lt;void&gt; {
    this.ok({
      header: this.header,
      query1: this.query1,
      query2: this.query2,
      params: this.params,
      body: this.body,
      arrayFieldBody: this.arrayFieldBody,
      queryProperty: this.queryProperty,
    });
  }
}

const res = await new TestStartup()
    .useInject()
    .add(TestMiddleware)
    .run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7684 <code>useInject</code> \u4F1A\u542F\u7528\u4F9D\u8D56\u6CE8\u5165\uFF0C<code>@ipare/pipe</code> \u5229\u7528\u4F9D\u8D56\u6CE8\u5165\u5B9E\u73B0\u529F\u80FD</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u529F\u80FD\u53EA\u4F1A\u5728 <code>useInject</code> \u4E4B\u540E\u7684\u4E2D\u95F4\u4EF6\u4E2D\u751F\u6548\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u628A <code>useInject</code> \u653E\u5728\u9760\u524D\u7684\u4F4D\u7F6E\uFF0C\u6839\u636E\u5B9E\u9645\u9879\u76EE\u51B3\u5B9A</p><h2 id="\u5728\u5176\u4ED6\u7C7B\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5728\u5176\u4ED6\u7C7B\u4E2D" aria-hidden="true">#</a> \u5728\u5176\u4ED6\u7C7B\u4E2D</h2><p>\u5728\u5176\u4ED6\u4EFB\u610F\u7C7B\u4E2D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5229\u7528\u63A7\u5236\u53CD\u8F6C\u5B9E\u73B0\u5B9E\u4F8B\u5316</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { parseInject } from &quot;@ipare/inject&quot;;
import { HttpContext } from &quot;@ipare/core&quot;;
import { Header, Query, Context } from &quot;@ipare/pipe&quot;;

class TestClass {
  @Context
  private readonly ctx!: HttpContext;
  @Header
  private readonly header!: any;
  @Query(&quot;property&quot;)
  private readonly query!: any;
}

const obj = parseInject(TestClass); // \u5229\u7528\u63A7\u5236\u53CD\u8F6C\u521B\u5EFA\u5BF9\u8C61
// OR
const obj = parseInject(new TestClass());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u907F\u514D\u5728\u5355\u4F8B\u7C7B\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u5728\u5355\u4F8B\u7C7B\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u907F\u514D\u5728\u5355\u4F8B\u7C7B\u4E2D\u4F7F\u7528</h2><p>\u7531\u4E8E\u6BCF\u6B21\u63A5\u53E3\u8BF7\u6C42\uFF0C\u53C2\u6570\u53EF\u80FD\u90FD\u4F1A\u53D8</p><p>\u56E0\u6B64\u4F7F\u7528\u88C5\u9970\u5668\u7684\u7C7B\uFF0C\u5176\u5B9E\u4F8B\u5BF9\u8C61\u5FC5\u987B\u4EC5\u4F5C\u7528\u4E8E\u5355\u6B21\u7F51\u7EDC\u8BBF\u95EE</p><p>\u4F8B\u5982\u4E0D\u80FD\u4F7F\u7528\u5355\u4F8B\u7C7B\u6216\u5355\u4F8B\u4E2D\u95F4\u4EF6\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5728\u9AD8\u5E76\u53D1\u4E0B\u51FA\u73B0\u4E0D\u53EF\u9884\u77E5\u7684\u95EE\u9898</p><p>\u5728\u8FD9\u6837\u7684\u4E2D\u95F4\u4EF6\u4E2D\u4E0D\u80FD\u4F7F\u7528 <code>@ipare/pipe</code>\uFF0C\u56E0\u4E3A\u4E2D\u95F4\u4EF6\u662F\u5355\u4F8B\u7684\uFF1A</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.use(new YourMiddleware())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>const md = new YourMiddleware();
startup.use((ctx) =&gt; md);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7BA1\u9053\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053\u7528\u6CD5" aria-hidden="true">#</a> \u7BA1\u9053\u7528\u6CD5</h2><p><code>Header</code>,<code>Query</code> \u7B49\u88C5\u9970\u5668\u53C2\u6570\u53EF\u4EE5\u63A5\u6536\u7BA1\u9053\u5BF9\u8C61\u6216\u7C7B</p><p>\u5982\u679C\u4F20\u5165\u7684\u662F\u7BA1\u9053\u7684\u7C7B\uFF0C\u53EF\u4EE5\u5229\u7528\u63A7\u5236\u53CD\u8F6C\u81EA\u52A8\u5B9E\u4F8B\u5316\u7BA1\u9053</p><p>\u4F20\u5165\u7C7B</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Query, ParseIntPipe } from &quot;@ipare/pipe&quot;

@Query(&quot;field&quot;, ParseIntPipe)
queryField: number;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u4F20\u5165\u5BF9\u8C61</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>@Query(&quot;field&quot;, new ParseIntPipe())
queryField: number;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8F6C\u6362\u6574\u4E2A query</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>@Query(ParseIntPipe)
query: any;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5185\u7F6E\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7BA1\u9053" aria-hidden="true">#</a> \u5185\u7F6E\u7BA1\u9053</h2><p>\u76EE\u524D\u5185\u7F6E\u7684\u7BA1\u9053\u6709</p><ul><li>DefaultValuePipe: \u53C2\u6570\u4E3A <code>null</code>,<code>undefined</code>,<code>NaN</code> \u7B49\uFF0C\u8D4B\u503C\u9ED8\u8BA4\u503C</li><li>TrimPipe: \u53BB\u9664\u5B57\u7B26\u4E32\u524D\u540E\u7A7A\u767D\u7B26\uFF0C\u53EF\u5355\u72EC\u9650\u5B9A <code>start</code> \u6216 <code>end</code></li><li>ParseIntPipe: \u5B57\u7B26\u4E32\u8F6C\u6574\u578B</li><li>ParseFloatPipe: \u5B57\u7B26\u4E32\u8F6C\u6D6E\u70B9\u6570</li><li>ParseBoolPipe: \u5B57\u7B26\u4E32\u8F6C\u5E03\u5C14\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5BF9\u5E94\u503C</li></ul><h2 id="\u81EA\u5B9A\u4E49\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7BA1\u9053" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7BA1\u9053</h2><p>\u66F4\u591A\u9700\u6C42\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7BA1\u9053</p><p>\u521B\u5EFA\u4E00\u4E2A\u7C7B\uFF0C\u5B9E\u73B0 <code>PipeTransform</code> \u63A5\u53E3\uFF0C\u5982</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Context, PipeTransform } from &quot;@ipare/pipe&quot;

class ToStringPipe implements PipeTransform&lt;any, string&gt; {
  @Context
  readonly ctx: HttpContext;

  transform(value: any) {
    return &quot;&quot; + value;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),s=[r];function l(c,t){return i(),n("div",null,s)}var v=e(a,[["render",l],["__file","pipe.html.vue"]]);export{v as default};
