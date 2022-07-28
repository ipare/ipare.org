import{_ as d,o as a,c as r,a as i,b as s,e,d as l,r as t}from"./app.a704fd29.js";const c={},v=i("h1",{id:"\u53C2\u6570\u6821\u9A8C",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u53C2\u6570\u6821\u9A8C","aria-hidden":"true"},"#"),e(" \u53C2\u6570\u6821\u9A8C")],-1),o=i("p",null,[e("\u5B89\u88C5 "),i("code",null,"@ipare/validate"),e(" \u4EE5\u652F\u6301\u53C2\u6570\u6821\u9A8C\u529F\u80FD")],-1),u=e("\u57FA\u4E8E "),b={href:"https://github.com/typestack/class-validator",target:"_blank",rel:"noopener noreferrer"},m=e("class-validator"),h=e(" \u548C "),p={href:"https://github.com/ipare/pipe",target:"_blank",rel:"noopener noreferrer"},g=e("@ipare/pipe"),_=e(" \u6821\u9A8C\u8BF7\u6C42\u53C2\u6570"),x=l(`<p>\u4F7F\u7528 <code>class-validator</code> \u98CE\u683C\u7684\u88C5\u9970\u5668\uFF0C\u501F\u52A9\u6B64\u63D2\u4EF6\u53EF\u4EE5\u81EA\u52A8\u6821\u9A8C\u8BF7\u6C42\u53C2\u6570</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install @ipare/validator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useValidator()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>class TestDto {
  @IsString()
  b1!: string;

  @IsInt()
  b2!: number;

  get b() {
    return this.b1 + this.b2;
  }
}

class TestMiddleware extends Middleware {
  @Body
  private readonly body!: TestDto;

  async invoke(): Promise&lt;void&gt; {
    this.ok(this.body);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4E2D\u95F4\u4EF6 <code>TestMiddleware</code> \u4F1A\u5728\u4F7F\u7528\u524D\u81EA\u52A8\u6821\u9A8C <code>TestDto</code> \u662F\u5426\u5408\u6CD5</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5C40\u90E8\u914D\u7F6E</p><h3 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E</h3><p>\u53EF\u4EE5\u4E3A <code>startup.useValidator</code> \u4F20\u53C2\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useValidator({
  stopAtFirstError: true
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u4F20\u53C2\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u67D0\u4E9B\u60C5\u5F62\u4F7F\u7528\u914D\u7F6E</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useValidator(({ctx,val,propertyType})=&gt;({
  stopAtFirstError: true
  }))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C40\u90E8\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u914D\u7F6E" aria-hidden="true">#</a> \u5C40\u90E8\u914D\u7F6E</h3><p>\u4F7F\u7528\u88C5\u9970\u5668 <code>UseValidatorOptions</code> \u5B9A\u4E49\u4F20\u8F93\u6A21\u578B</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>@UseValidatorOptions({
  stopAtFirstError: true
})
class TestDto {
  @IsString()
  b1!: string;

  @IsInt()
  b2!: number;

  get b() {
    return this.b1 + this.b2;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function T(S,f){const n=t("ExternalLinkIcon");return a(),r("div",null,[v,o,i("p",null,[u,i("a",b,[m,s(n)]),h,i("a",p,[g,s(n)]),_]),x])}var k=d(c,[["render",T],["__file","validator.html.vue"]]);export{k as default};
