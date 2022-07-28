import{_ as d,o as a,c as r,a as i,b as l,e,d as s,r as t}from"./app.a704fd29.js";const o={},u=i("h1",{id:"swagger-\u6587\u6863",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#swagger-\u6587\u6863","aria-hidden":"true"},"#"),e(" Swagger \u6587\u6863")],-1),c=i("p",null,[e("\u5B89\u88C5 "),i("code",null,"@ipare/swagger"),e(" \u4EE5\u4F7F\u7528 Swagger \u6587\u6863\uFF0C\u7528\u4E8E\u751F\u6210\u4F60\u7684 Ipare \u6587\u6863")],-1),v=i("p",null,"\u4F7F\u7528\u88C5\u9970\u5668\u6CE8\u91CA\u6587\u6863",-1),m=e("\u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528 "),p={href:"https://github.com/swagger-api/swagger-ui",target:"_blank",rel:"noopener noreferrer"},b=e("swagger-ui"),g=e(" \u6E32\u67D3\u6587\u6863"),h=s(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install @ipare/swagger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><p>\u5728 <code>startup.ts</code> \u4E2D</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import &quot;@ipare/swagger&quot;;

startup.useSwagger();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49\u4F20\u8F93\u6A21\u578B</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { DtoDescription, DtoFormat, DtoLengthRange } from &quot;@ipare/swagger&quot;;

@DtoDescription(&quot;login info&quot;)
export class LoginDto {
  @DtoDescription(&quot;email&quot;)
  @DtoFormat(&quot;email&quot;)
  account!: string;

  @DtoDescription(&quot;password&quot;)
  @DtoLengthRange({
    min: 8,
    max: 24,
  })
  password!: string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 <code>Action</code> \u4E2D\u7528 <code>@ipare/pipe</code> \u6CE8\u5165\u8BF7\u6C42\u53C2\u6570</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Action } from &quot;@ipare/core&quot;;
import { Body } from &quot;@ipare/pipe&quot;;

@ApiTags(&quot;user&quot;)
@ApiDescription(&quot;Get user info&quot;)
export default class extends Action {
  @Body
  private readonly loginDto!: LoginDto;

  async invoke() {
    this.ok(this.loginDto);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4ECB\u7ECD" aria-hidden="true">#</a> \u914D\u7F6E\u4ECB\u7ECD</h2><p><code>startup.useSwagger</code> \u63A5\u6536\u4E00\u4E2A <code>options</code> \u53C2\u6570\uFF0C\u5305\u542B\u4EE5\u4E0B\u5B57\u6BB5\uFF1A</p><ul><li>path</li><li>builder</li><li>customHtml</li></ul><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3><p>\u8BBF\u95EE swagger \u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A <code>/</code></p><h3 id="builder" tabindex="-1"><a class="header-anchor" href="#builder" aria-hidden="true">#</a> builder</h3><p>\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A <code>OpenApiBuilder</code> \u5BF9\u8C61\uFF0C\u8FD4\u56DE\u503C\u4E3A\u540C\u4E00\u4E2A\u6216\u65B0\u7684 <code>OpenApiBuilder</code> \u5BF9\u8C61</p><p>\u5982</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useSwagger({
  builder: (builder) =&gt; {
    builder.addInfo({
      title: &quot;@ipare/swagger&quot;,
      version: &quot;0.0.1&quot;,
    });
    return builder;
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useSwagger({
  builder: (builder) =&gt; {
    return new OpenApiBuilder();
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),q=i("code",null,"OpenApiBuilder",-1),D=e(" \u53C2\u8003 "),w={href:"https://github.com/metadevpro/openapi3-ts",target:"_blank",rel:"noopener noreferrer"},f=e("openapi3-ts"),S=s(`<h3 id="customhtml" tabindex="-1"><a class="header-anchor" href="#customhtml" aria-hidden="true">#</a> customHtml</h3><p>\u5982\u679C\u9ED8\u8BA4\u9875\u9762\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 swagger html \u9875\u9762</p><p>\u8BE5\u53C2\u6570\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u51FD\u6570\u53C2\u6570\u4E3A json \u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u503C\u4E3A html \u5B57\u7B26\u4E32</p><p>json \u5B57\u7B26\u4E32\u53C2\u6570\u4E3A\u751F\u6210\u7684 swagger \u6587\u6863</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>startup.useSwagger({
  customHtml: getHtml,
});

const getHtml = (jsonStr) =&gt; \`&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Swagger UI&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.50.0/swagger-ui.min.css&quot; /&gt;
    &lt;style&gt;
      html
      {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: auth;
      }

      *,
      *:before,
      *:after
      {
        box-sizing: inherit;
      }

      body
      {
        margin:0;
        background: #fafafa;
      }
    &lt;/style&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id=&quot;swagger-ui&quot;&gt;&lt;/div&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.50.0/swagger-ui-bundle.min.js&quot; charset=&quot;UTF-8&quot;&gt; &lt;/script&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.50.0/swagger-ui-standalone-preset.min.js&quot; charset=&quot;UTF-8&quot;&gt; &lt;/script&gt;
    &lt;script&gt;
    window.onload = function() {
      const ui = SwaggerUIBundle({
        spec: \${jsonStr},
        dom_id: &#39;#swagger-ui&#39;,
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: &quot;StandaloneLayout&quot;,
        validatorUrl:null
      });
      window.ui = ui;
    };
  &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0 <code>getHtml</code> \u4E3A <code>@ipare/swagger</code> \u7684\u9ED8\u8BA4\u5B9E\u73B0</p><h2 id="\u652F\u6301\u7684\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u88C5\u9970\u5668" aria-hidden="true">#</a> \u652F\u6301\u7684\u88C5\u9970\u5668</h2><p>\u6587\u6863\u4E2D\u5927\u90E8\u5206\u5185\u5BB9\u662F\u6839\u636E\u88C5\u9970\u5668\u751F\u6210\u7684</p><h3 id="action-\u7C7B\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#action-\u7C7B\u88C5\u9970\u5668" aria-hidden="true">#</a> Action \u7C7B\u88C5\u9970\u5668</h3><p>\u88C5\u9970 <code>Action</code> \u7684\u88C5\u9970\u5668\uFF0C\u7528\u4E8E\u63CF\u8FF0\u5355\u4E2A\u63A5\u53E3</p><ul><li>ApiTags</li><li>ApiSummary</li><li>ApiCallback</li><li>ApiDeprecated</li><li>ApiDescription</li><li>ApiExternalDocs</li><li>ApiOperationId</li><li>ApiResponses</li><li>ApiSecurity</li><li>ApiServers</li></ul><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Action } from &quot;@ipare/core&quot;;
import { Body } from &quot;@ipare/pipe&quot;;

@ApiTags(&quot;tag&quot;)
@ApiDescription(&quot;description&quot;)
export default class extends Action {
  async invoke() {
    this.ok();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dto-\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#dto-\u88C5\u9970\u5668" aria-hidden="true">#</a> Dto \u88C5\u9970\u5668</h3><p>\u88C5\u9970\u6570\u636E\u4F20\u8F93\u6A21\u578B\u7684\u88C5\u9970\u5668\uFF0C\u4E5F\u53EF\u4EE5\u88C5\u9970 <code>@ipare/pipe</code> \u7684\u5177\u540D\u5B57\u6BB5</p><ul><li>DtoDescription</li><li>DtoAllowEmptyValue</li><li>DtoDeprecated</li><li>DtoIgnore</li><li>DtoRequired</li><li>DtoArrayType</li><li>DtoExample</li><li>DtoSchema</li><li>DtoParameterStyle</li><li>DtoDefault</li><li>DtoNumRange</li><li>DtoLengthRange</li><li>DtoPattern</li><li>DtoPropertiesRange</li><li>DtoReadOnly</li><li>DtoTitle</li><li>DtoWriteOnly</li><li>DtoEnum</li><li>DtoFormat</li><li>DtoXml</li><li>DtoExamples</li><li>DtoType</li></ul><p>\u5728\u6570\u636E\u4F20\u8F93\u6A21\u578B\u4E2D</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { DtoDescription, DtoFormat, DtoLengthRange } from &quot;@ipare/swagger&quot;;

@DtoDescription(&quot;login info&quot;)
export class LoginDto {
  @DtoDescription(&quot;email&quot;)
  @DtoFormat(&quot;email&quot;)
  account!: string;

  @DtoDescription(&quot;password&quot;)
  @DtoLengthRange({
    min: 8,
    max: 24,
  })
  password!: string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u5728 Action \u4E2D</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>import { Action } from &quot;@ipare/core&quot;;
import { Body } from &quot;@ipare/pipe&quot;;
import { DtoRequired, DtoDescription } from &quot;@ipare/swagger&quot;;

export default class extends Action {
  @Body(&quot;account&quot;)
  @DtoRequired()
  @DtoDescription(&quot;email&quot;)
  private readonly account!: string;

  async invoke() {
    this.ok({ account });
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u793A\u4F8B\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u9879\u76EE" aria-hidden="true">#</a> \u793A\u4F8B\u9879\u76EE</h2><ul><li>todo \u4E00\u4E2A\u7B80\u6613\u7684 todo \u9879\u76EE <ul><li>\u5728\u7EBF\u793A\u4F8B: https://todo.hal.wang</li><li>github: https://github.com/hal-wang/todo</li><li>swagger: https://todo-5gcg801923564f08-1253337886.ap-shanghai.app.tcloudbase.com/v2</li></ul></li></ul>`,21);function x(_,T){const n=t("ExternalLinkIcon");return a(),r("div",null,[u,c,v,i("p",null,[m,i("a",p,[b,l(n)]),g]),h,i("p",null,[q,D,i("a",w,[f,l(n)])]),S])}var y=d(o,[["render",x],["__file","swagger.html.vue"]]);export{y as default};
