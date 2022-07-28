import{_ as e,o as i,c as n,d as s}from"./app.a704fd29.js";const d={},a=s(`<h1 id="\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> \u4F9D\u8D56\u6CE8\u5165</h1><p align="center" class="tags"><a href="https://github.com/ipare/inject/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license"></a><a href=""><img src="https://img.shields.io/npm/v/@ipare/inject.svg" alt="npm version"></a><a href=""><img src="https://badgen.net/npm/dt/@ipare/inject" alt="npm downloads"></a><a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/@ipare/inject.svg" alt="node compatibility"></a><a href="#"><img src="https://github.com/ipare/inject/actions/workflows/test.yml/badge.svg?branch=main" alt="Build Status"></a><a href="https://codecov.io/gh/ipare/inject/branch/main"><img src="https://img.shields.io/codecov/c/github/ipare/inject/main.svg" alt="Test Coverage"></a><a href="https://github.com/ipare/inject/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a><a href="https://gitpod.io/#https://github.com/ipare/inject"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"></a><a href="https://paypal.me/ihalwang" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"></a></p><p>\u6DFB\u52A0 <code>@ipare/inject</code> \u4EE5\u5B9E\u73B0 <code>Ipare</code> \u7684 \u4F9D\u8D56\u6CE8\u5165</p><h2 id="\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a> \u88C5\u9970\u5668</h2><p>\u4F60\u9700\u8981\u5F00\u542F\u88C5\u9970\u5668\u529F\u80FD\u4EE5\u4F7F\u7528\u4F9D\u8D56\u6CE8\u5165</p><p>\u88C5\u9970\u5668\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>\u5728\u5B57\u6BB5\u58F0\u660E\u65F6\u4F7F\u7528\u88C5\u9970\u5668 <code>@Inject</code>\uFF0C<code>@ipare/inject</code> \u5C06\u5728\u521D\u59CB\u5316\u540E\u6CE8\u5165\u5BF9\u5E94\u670D\u52A1</li></ol><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class OtherService(){}

class TestService{
  @Inject
  private readonly otherService!: OtherService;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728\u7C7B\u58F0\u660E\u65F6\u4F7F\u7528\u88C5\u9970\u5668 <code>@Inject</code>\uFF0C\u5E76\u5728\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u58F0\u660E\u670D\u52A1\uFF0C<code>@ipare/inject</code> \u4F1A\u5728\u521D\u59CB\u5316\u7C7B\u65F6\u6CE8\u5165\u5BF9\u5E94\u670D\u52A1</li></ol><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class OtherService(){}

@Inject
class TestService{
  constructor(private readonly otherService: OtherService){}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/inject&quot;;
startup.useInject();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/inject&quot;;
import { Inject } from &quot;@ipare/inject&quot;;
import { Middleware } from &quot;@ipare/core&quot;;

class OtherService(){}

class TestService{
  @Inject
  private readonly otherService!: OtherService;
}

class TestMiddleware extends Middleware {
  @Inject
  private readonly testService!: TestService;

  async invoke(): Promise&lt;void&gt; {
    this.ok({
      service: this.testService.constructor.name,
    });
  }
}

const res = await new TestStartup().useInject().add(TestMiddleware).run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7684 <code>useInject</code> \u4F1A\u542F\u7528\u4F9D\u8D56\u6CE8\u5165</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F9D\u8D56\u6CE8\u5165\u53EA\u4F1A\u5728 <code>useInject</code> \u4E4B\u540E\u7684\u4E2D\u95F4\u4EF6\u4E2D\u751F\u6548\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u628A <code>useInject</code> \u653E\u5728\u9760\u524D\u7684\u4F4D\u7F6E\uFF0C\u6839\u636E\u5B9E\u9645\u9879\u76EE\u51B3\u5B9A</p><h2 id="inject-\u5B57\u6BB5\u521D\u59CB\u5316\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#inject-\u5B57\u6BB5\u521D\u59CB\u5316\u65F6\u673A" aria-hidden="true">#</a> <code>@Inject</code> \u5B57\u6BB5\u521D\u59CB\u5316\u65F6\u673A</h2><p>\u88AB <code>@Inject</code> \u88C5\u9970\u7684\u5B57\u6BB5\u4F1A\u81EA\u52A8\u521D\u59CB\u5316\u5E76\u8D4B\u503C\uFF0C\u521D\u59CB\u5316\u7684\u65F6\u673A\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u4E2D\u95F4\u4EF6\uFF1A\u5728 <code>invoke</code> \u51FD\u6570\u88AB\u6267\u884C\u524D\u4F1A\u521D\u59CB\u5316 <code>@Inject</code> \u88C5\u9970\u7684\u5B57\u6BB5</li><li>\u5176\u4ED6\u7C7B\uFF1A\u5728\u7C7B\u6784\u9020\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\u7ACB\u5373\u521D\u59CB\u5316 <code>@Inject</code> \u88C5\u9970\u7684\u5B57\u6BB5</li></ul><h2 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h2><p>\u670D\u52A1\u7684\u4F5C\u7528\u57DF\u5206\u4E3A\u4E09\u79CD</p><ol><li>Singleton\uFF1A\u5355\u4F8B\uFF0Cnodejs \u8FD0\u884C\u671F\u95F4\u53EA\u521D\u59CB\u5316\u4E00\u6B21\uFF0C\u5373\u540C\u65F6\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u5BF9\u8C61</li><li>Scoped\uFF1A\u5355\u6B21\u8BBF\u95EE\uFF0C\u6BCF\u6B21\u7F51\u7EDC\u8BBF\u95EE\u4F1A\u521D\u59CB\u5316\u4E00\u6B21\uFF0C\u6BCF\u6B21\u7F51\u7EDC\u8BBF\u95EE\u7ED3\u675F\u540E\u6B64\u5BF9\u8C61\u4F1A\u88AB\u4E22\u5F03</li><li>Transient\uFF1A\u77AC\u65F6\uFF0C\u6BCF\u5904\u670D\u52A1\u90FD\u4F1A\u88AB\u5355\u72EC\u521D\u59CB\u5316</li></ol><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/inject&quot;;
import { InjectType } &quot;@ipare/inject&quot;;

startup.inject(IService, Service, InjectType.Singleton);
startup.inject(IService, Service, InjectType.Scoped);
startup.inject(IService, Service, InjectType.Transient);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u4E91\u51FD\u6570\u4E2D\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u670D\u52A1\u662F\u5355\u4F8B\u7684\uFF0C\u56E0\u4E3A\u4E91\u51FD\u6570\u53EF\u80FD\u5728\u8C03\u7528\u5B8C\u6BD5\u5373\u9500\u6BC1\uFF0C\u4E0B\u6B21\u8C03\u7528\u542F\u52A8\u65B0\u5B9E\u4F8B</p><h2 id="\u6CE8\u518C\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u670D\u52A1" aria-hidden="true">#</a> \u6CE8\u518C\u670D\u52A1</h2><p>\u670D\u52A1\u7684\u6CE8\u518C\u5206\u4E3A\u9690\u5F0F\u6CE8\u518C\u548C\u663E\u793A\u6CE8\u518C</p><h3 id="\u9690\u5F0F\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u6CE8\u518C" aria-hidden="true">#</a> \u9690\u5F0F\u6CE8\u518C</h3><p>\u81EA\u52A8\u6CE8\u518C\u7684\u670D\u52A1\uFF0C\u53EF\u4EE5\u81EA\u52A8\u5B9E\u4F8B\u5316\u7279\u5B9A\u7C7B\uFF0C\u4EC5\u652F\u6301 <code>Scoped</code> \u4F5C\u7528\u57DF\u7684\u670D\u52A1\uFF0C\u5982</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class TestMiddleware extends Middleware {
  @Inject
  private readonly testService!: TestService;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>testService</code> \u5B57\u6BB5\u503C\u5C06\u81EA\u52A8\u88AB\u5B9E\u4F8B\u5316\uFF0C\u503C\u4E3A <code>TestService</code> \u5B9E\u4F8B\u5BF9\u8C61</p><p><code>TestService</code> \u7C7B\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u52A8\u521D\u59CB\u5316</p><h3 id="\u663E\u5F0F\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u663E\u5F0F\u6CE8\u518C" aria-hidden="true">#</a> \u663E\u5F0F\u6CE8\u518C</h3><p>\u53EF\u4EE5\u6307\u5B9A\u5B9E\u4F8B\u5316\u6D3E\u751F\u7C7B\u6216\u670D\u52A1\u7684\u4F5C\u7528\u57DF\uFF0C\u4EE5\u5B9E\u73B0\u63A7\u5236\u53CD\u8F6C</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/inject&quot;;

startup.inject(IService, Service);
// OR
startup.inject(IService, new Service()); // Singleton only
// OR
startup.inject(IService, async (ctx) =&gt; await createService(ctx));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C <code>inject</code> \u4F5C\u7528\u4E8E\u5176\u540E\u7684\u4E2D\u95F4\u4EF6\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u5728\u9760\u524D\u7684\u4F4D\u7F6E\u6CE8\u518C\u670D\u52A1</p><h2 id="\u952E\u503C\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u952E\u503C\u6CE8\u5165" aria-hidden="true">#</a> \u952E\u503C\u6CE8\u5165</h2><p>\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528\u7279\u5B9A\u7684 Key \u6CE8\u5165\u670D\u52A1</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/inject&quot;;

startup.inject(&quot;SERVICE_KEY&quot;, Service);
// OR
startup.inject(&quot;SERVICE_KEY&quot;, new Service()); // Singleton only
// OR
startup.inject(&quot;SERVICE_KEY&quot;, async (ctx) =&gt; await createService(ctx));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class TestMiddleware extends Middleware {
  @Inject(&quot;SERVICE_KEY&quot;)
  private readonly testService!: TestService;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751A\u81F3\u53EF\u4EE5\u6CE8\u5165\u5E38\u91CF\u503C</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.inject(&quot;KEY1&quot;, true);
startup.inject(&quot;KEY2&quot;, &quot;str&quot;);
startup.inject(&quot;KEY3&quot;, 2333);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class TestMiddleware extends Middleware {
  @Inject(&quot;KEY1&quot;)
  private readonly key1!: boolean; // true
  @Inject(&quot;KEY2&quot;)
  private readonly key2!: any; // &quot;str&quot;
  @Inject(&quot;KEY3&quot;)
  private readonly key3!: number; // 2333
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u670D\u52A1\u7684\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7684\u5D4C\u5957" aria-hidden="true">#</a> \u670D\u52A1\u7684\u5D4C\u5957</h2><p>\u5D4C\u5957\u7684\u670D\u52A1\u4E5F\u80FD\u88AB\u6B63\u786E\u521D\u59CB\u5316</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class TestService1(){}

class TestService2{
  @Inject
  private readonly service1!: TestService1;
}

class TestService3{
  @Inject
  private readonly service1!: TestService1;

  @Inject
  service2!: TestService2;
}

class TestMiddleware extends Middleware{
  @Inject
  private readonly service1!: TestService1;

  @Inject
  private readonly service2!: TestService2;

  @Inject
  private readonly service3!: TestService3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u88C5\u9970\u5668" aria-hidden="true">#</a> \u7C7B\u88C5\u9970\u5668</h2><p>\u4F60\u4E5F\u53EF\u4EE5\u7528 @Inject \u88C5\u9970\u4E00\u4E2A\u7C7B\uFF0C\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u5728\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u53D6\u5230\u670D\u52A1</p><p>\u6784\u9020\u51FD\u6570\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528\u952E\u503C\u6CE8\u5165\u53C2\u6570</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/inject&quot;;
import { Inject } from &quot;@ipare/inject&quot;;
import { Middleware } from &quot;@ipare/core&quot;;

class OtherService(){}

@Inject
class TestService{
  constructor(
    readonly otherService: OtherService,
    @Inject(&quot;KEY1&quot;) private readonly params1: number
  ){}
}

@Inject
class TestMiddleware extends Middleware {
  constructor(
    private readonly testService: TestService, // TestService object
    @Inject(&quot;KEY1&quot;) private readonly params1: number, // 2333
    @Inject(&quot;KEY2&quot;) private readonly params2: any // true
  ){
    super();
  }

  async invoke(): Promise&lt;void&gt; {
    this.ok({
      service: this.testService.constructor.name,
      params1: this.params1,
      params2: this.params2
    });
  }
}

const res = await new TestStartup()
  .useInject()
  .inject(&quot;KEY1&quot;, 2333)
  .inject(&quot;KEY2&quot;, true)
  .add(TestMiddleware)
  .run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6DFB\u52A0\u7684\u4E2D\u95F4\u4EF6\u5FC5\u987B\u662F\u4E2D\u95F4\u4EF6\u7684\u6784\u9020\u5668</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>setup.add(YourMiddleware)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u6B64\u4E0B\u9762\u6DFB\u52A0\u4E2D\u95F4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u5C06\u4E0D\u80FD\u4F7F\u7528\u7C7B\u88C5\u9970\u5668</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>setup.add(async (ctx, next)=&gt;{})
setup.add(new YourMiddleware())
setup.add(()=&gt; new YourMiddleware())
setup.add(async ()=&gt; await Factory.creatMiddleware())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u624B\u52A8\u6CE8\u5165\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u6CE8\u5165\u670D\u52A1" aria-hidden="true">#</a> \u624B\u52A8\u6CE8\u5165\u670D\u52A1</h2><p>\u6709\u4E9B\u670D\u52A1\u53EF\u80FD\u6CA1\u6709\u5199\u5728\u5176\u4ED6\u670D\u52A1\u4E2D\uFF0C\u4E5F\u6CA1\u6709\u5199\u5728\u4E2D\u95F4\u4EF6\u4E2D\uFF0C\u5C31\u65E0\u6CD5\u81EA\u52A8\u6CE8\u5165\u670D\u52A1\uFF0C\u9700\u8981\u624B\u52A8\u6CE8\u5165\u670D\u52A1</p><p><code>@ipare/inject</code> \u4E5F\u652F\u6301\u624B\u52A8\u6CE8\u5165\u670D\u52A1\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\u6CE8\u5165</p><ol><li>\u4F60\u53EF\u4EE5\u5148\u521B\u5EFA\u5BF9\u8C61\u518D\u6CE8\u5165\u670D\u52A1</li></ol><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { parseInject } from &#39;@ipare/inject&#39;

const service = new Service();
await parseInject(ctx, service);

// OR
const service = await parseInject(ctx, new Service());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u5B9E\u4F8B\u5316 <code>\u670D\u52A1\u5199\u5728\u6784\u9020\u51FD\u6570\u4E2D</code> \u7684\u7C7B\uFF0C\u4EC5\u53EF\u6CE8\u5165\u5B9E\u4F8B\u5BF9\u8C61\u5B57\u6BB5\u7684\u670D\u52A1</p><ol start="2"><li>\u4E5F\u53EF\u4EE5\u5229\u7528\u63A7\u5236\u53CD\u8F6C\u6CE8\u5165\u670D\u52A1</li></ol><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { parseInject } from &#39;@ipare/inject&#39;

const service = await parseInject(ctx, Service);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u540C\u65F6\u5B9E\u4F8B\u5316\u5C5E\u6027\u670D\u52A1\u6216\u6784\u9020\u5668\u670D\u52A1</p><h2 id="\u81EA\u5B9A\u4E49\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6CE8\u5165" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6CE8\u5165</h2><p>\u53EF\u4EE5\u5229\u7528 <code>Inject</code> \u548C <code>createInject</code> \u521B\u5EFA\u81EA\u5B9A\u4E49\u6CE8\u5165</p><p><code>Inject</code> \u4F20\u5165\u4EE5\u4E0B\u53C2\u6570\u5C06\u8FD4\u56DE\u88C5\u9970\u5668\uFF1A</p><ul><li>handler: \u56DE\u8C03\u51FD\u6570\uFF0C\u652F\u6301\u5F02\u6B65\uFF0C\u8FD4\u56DE\u503C\u5C06\u4F5C\u4E3A\u88C5\u9970\u7684\u5B57\u6BB5\u503C</li><li>type: \u53EF\u9009\uFF0C\u751F\u547D\u5468\u671F\uFF0C<code>InjectType</code> \u7C7B\u578B\uFF0C\u4E0E\u524D\u9762\u4ECB\u7ECD\u7684 <strong>\u4F5C\u7528\u57DF</strong> \u7684\u6982\u5FF5\u76F8\u540C\u3002\u8FD9\u91CC\u662F\u7528\u4E8E\u63A7\u5236 <code>handler</code> \u56DE\u8C03\u51FD\u6570\u7684\u751F\u547D\u5468\u671F <ul><li>Singleton: <code>handler</code> \u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u56E0\u6B64\u88C5\u9970\u7684\u4E0D\u540C\u5B57\u6BB5\u503C\u59CB\u7EC8\u76F8\u540C\uFF0C\u56DE\u8C03\u51FD\u6570\u6CA1\u6709 <code>HttpContext</code> \u53C2\u6570</li><li>Scoped: <code>handler</code> \u56DE\u8C03\u6BCF\u6B21\u7F51\u7EDC\u8BF7\u6C42\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u88C5\u9970\u7684\u4E0D\u540C\u5B57\u6BB5\u503C\u5728\u5355\u6B21\u7F51\u7EDC\u8BBF\u95EE\u671F\u95F4\u76F8\u540C\uFF0C\u56DE\u8C03\u51FD\u6570\u6709\u53C2\u6570 <code>HttpContext</code></li><li>Scoped: <code>handler</code> \u56DE\u8C03\u5728\u6BCF\u4E2A\u88C5\u9970\u7684\u5B57\u6BB5\u90FD\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u56DE\u8C03\u51FD\u6570\u6709\u53C2\u6570 <code>HttpContext</code></li></ul></li></ul><p><code>createInject</code> \u65E0\u8FD4\u56DE\u503C\uFF0C\u7528\u4E8E\u521B\u5EFA\u66F4\u590D\u6742\u7684\u81EA\u5B9A\u4E49\u6CE8\u5165\u88C5\u9970\u5668\uFF0C \u63A5\u6536\u4EE5\u4E0B\u53C2\u6570</p><ul><li>handle: \u540C\u4E0A</li><li>target: \u88C5\u9970\u7684\u7C7B\u6216\u7C7B\u7684\u539F\u578B\uFF0C\u4ECE\u88C5\u9970\u5668\u53C2\u6570\u53D6\u5F97</li><li>propertyKey: \u88C5\u9970\u7684\u5C5E\u6027\u540D\uFF0C\u4ECE\u5C5E\u6027\u88C5\u9970\u5668\u53C2\u6570\u53D6\u5F97</li><li>parameterIndex: \u88C5\u9970\u7684\u53C2\u6570\u7D22\u5F15\uFF0C\u4ECE\u53C2\u6570\u88C5\u9970\u5668\u53C2\u6570\u53D6\u5F97</li><li>type: <code>InjectType</code> \u7C7B\u578B\uFF0C\u4F5C\u7528\u540C\u4E0A\u9762 <code>Inject</code> \u7684 <code>type</code> \u53C2\u6570</li></ul><h3 id="\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u4F8B-1" aria-hidden="true">#</a> \u4F8B 1</h3><p>\u5B9E\u73B0\u83B7\u53D6\u8BF7\u6C42 <code>Host</code> \u548C\u83B7\u53D6\u7EDF\u4E00\u7528\u6237 ID</p><p>\u5B9A\u4E49</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Inject } from &quot;@ipare/inject&quot;;

const Host = Inject((ctx) =&gt; ctx.req.getHeader(&quot;Host&quot;));
const UserID = Inject((ctx) =&gt; ctx.req.query[&quot;uid&quot;]);

// OR
function UserID(target:any, propertyKey: string|symbol){
  return createInject((ctx) =&gt; ctx.req.query[&quot;uid&quot;], target, propertyKey);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E2D\u95F4\u4EF6</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Middleware } from &quot;@ipare/core&quot;;

class TestMiddleware extends Middleware {
  @Host
  readonly host!: string;
  @UserID
  readonly userId!: string;

  async invoke(): Promise&lt;void&gt; {
    this.ok({
      host: this.host,
      userId: this.userId,
    });
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OR</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>@Inject
class TestMiddleware extends Middleware {
  constructor(@Host readonly host: string, @UserID readonly userId: string){
    super();
  }

  async invoke(): Promise&lt;void&gt; {
    this.ok({
      host: this.host,
      userId: this.userId,
    });
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u4F8B-2" aria-hidden="true">#</a> \u4F8B 2</h3><p>\u5D4C\u5957\u670D\u52A1</p><p>\u5B9A\u4E49</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Inject,parseInject } from &quot;@ipare/inject&quot;;

class TestService1{}
class TestService2{
  @Inject
  service1: TestService1;
}
class TestService3{
  @Inject
  service1: TestService1;
  @Inject
  service2: TestService2;
}

const Service3 = Inject((ctx) =&gt; new TestService3());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E2D\u95F4\u4EF6</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Middleware } from &quot;@ipare/core&quot;;

class TestMiddleware extends Middleware {
  @Service3
  readonly service1!: Service3;
  @Service3
  readonly service2!: any;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OR</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>@Inject
class TestMiddleware extends Middleware {
  constructor(
    @Service3 readonly service1: Service3,
    @Service3 readonly service2: any
  ){
    super();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,83),r=[a];function l(c,v){return i(),n("div",null,r)}var u=e(d,[["render",l],["__file","inject.html.vue"]]);export{u as default};
