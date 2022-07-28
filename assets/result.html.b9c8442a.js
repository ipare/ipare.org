import{_ as e,o as i,c as l,d as s}from"./app.a704fd29.js";const n={},d=s(`<h1 id="\u5185\u7F6E\u7ED3\u679C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7ED3\u679C\u51FD\u6570" aria-hidden="true">#</a> \u5185\u7F6E\u7ED3\u679C\u51FD\u6570</h1><p>\u76EE\u524D <code>HttpContext</code> \u548C\u4E2D\u95F4\u4EF6\u4E2D\u5185\u7F6E\u4E00\u4E9B\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><ul><li>ok, 200</li><li>created, 201</li><li>accepted, 202</li><li>noContent, 204</li><li>partialContent, 206</li><li>redirect, 30*</li><li>badRequest, 400</li><li>badRequestMsg, 400</li><li>forbidden, 403</li><li>forbiddenMsg, 403</li><li>notFound, 404</li><li>notFoundMsg, 404</li><li>methodNotAllowed, 405</li><li>methodNotAllowedMsg, 405</li><li>notAcceptable, 406</li><li>notAcceptableMsg, 406</li><li>requestTimeout, 408</li><li>requestTimeoutMsg, 40</li><li>conflict, 409</li><li>conflictMsg, 409</li><li>gone, 410</li><li>goneMsg, 410</li><li>preconditionFailed, 412</li><li>preconditionFailedMsg, 412</li><li>requestTooLong, 413</li><li>requestTooLongMsg, 413</li><li>unsupportedMediaType, 415</li><li>unsupportedMediaTypeMsg, 415</li><li>imATeapot, 418</li><li>imATeapotMsg, 418</li><li>misdirected, 421</li><li>misdirectedMsg, 421</li><li>unprocessableEntity, 421</li><li>unprocessableEntityMsg, 421</li><li>internalServerError, 500</li><li>internalServerErrorMsg, 500</li><li>notImplemented, 501</li><li>notImplementedMsg, 501</li><li>badGateway, 502</li><li>badGatewayMsg, 502</li><li>serviceUnavailable, 503</li><li>serviceUnavailableMsg, 503</li><li>gatewayTimeout, 504</li><li>gatewayTimeoutMsg, 504</li><li>httpVersionNotSupported, 505</li><li>httpVersionNotSupportedMsg, 505</li></ul><p>\u5982\u5728\u7C7B\u4E2D\u95F4\u4EF6\u4E2D</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>this.ok(&quot;success&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>this.ctx.res.body = &quot;success&quot;;
this.ctx.res.status = 200;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Middleware } from &quot;@ipare/core&quot;;
export class extends Middleware {
  async invoke() {
    this.noContent();
    // or this.ok(&#39;success&#39;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Middleware } from &quot;@ipare/core&quot;;
export class extends Middleware {
  async invoke() {
    const { account, password } = this.ctx.req.query;

    if (/*Incorrect username or password*/) {
      this.notFoundMsg({ message: &quot;Incorrect username or password&quot; });
    } else {
      this.ok({
        /*messages*/
      });
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u591A\u6570\u5185\u7F6E\u7C7B\u578B\u652F\u6301\u4F20\u5165 <code>body</code> \u53EF\u9009\u53C2\u6570\uFF0C<code>body</code> \u4E3A\u8FD4\u56DE\u7684\u5185\u5BB9\u3002</p><p>API \u8FD4\u56DE\u9519\u8BEF\u65F6\uFF0C\u53EF\u7EDF\u4E00\u8FD4\u56DE <code>ErrorMessage</code>\uFF0C\u547D\u540D\u4EE5 <code>Msg</code> \u7ED3\u5C3E\u7684\u5185\u7F6E\u7C7B\u578B\u63A5\u53D7 <code>ErrorMessage</code> \u53C2\u6570\u3002</p>`,11),r=[d];function a(o,t){return i(),l("div",null,r)}var u=e(n,[["render",a],["__file","result.html.vue"]]);export{u as default};
