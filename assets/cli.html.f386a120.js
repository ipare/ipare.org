import{_ as e,o as i,c as n,d as a}from"./app.a704fd29.js";const d={},s=a(`<h1 id="cli-\u811A\u624B\u67B6" tabindex="-1"><a class="header-anchor" href="#cli-\u811A\u624B\u67B6" aria-hidden="true">#</a> CLI \u811A\u624B\u67B6</h1><p><code>@ipare/cli</code> \u63D0\u4F9B\u65B0\u5EFA\u3001\u7F16\u8BD1\u3001\u8C03\u8BD5\u3001\u5347\u7EA7\u7B49\u529F\u80FD</p><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1. \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @ipare/cli -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u652F\u6301\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u652F\u6301\u7684\u547D\u4EE4" aria-hidden="true">#</a> 2. \u652F\u6301\u7684\u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Usage: ipare &lt;command&gt; [options]

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  create|c [options] [name]     Generate ipare application
  template|t &lt;template&gt; &lt;name&gt;  Generate a project from a remote template
  build|b [options]             Build ipare application
  start|s [options]             Run ipare application
  info|i                        Display ipare project details
  update|u [options]            Update ipare dependencies
  help [command]                display help for command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-create" tabindex="-1"><a class="header-anchor" href="#_3-create" aria-hidden="true">#</a> 3. create</h2><p>\u7528\u4E8E\u4ECE\u5934\u65B0\u5EFA\u9879\u76EE\uFF0C\u53EF\u4EE5\u9009\u62E9\u63D2\u4EF6\u3001\u8FD0\u884C\u73AF\u5883\u7B49</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ipare create <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-1-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> 3.1 \u4F7F\u7528\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Usage: ipare create|c [options] [name]

Generate ipare application

Arguments:
  name                                    Aapplication name

Options:
  -f, --force                             Force create application, delete existing files.  (default: false)
  -e, --env [env]                         The environment to run application
  --skipEnv                               Skip adding environment files
  -pm, --packageManager [packageManager]  Specify package manager. (npm/yarn/pnpm/cnpm)
  -cv, --cliVersion [version]             Version of @ipare/cli (default: &quot;^0.3.1&quot;)
  -ps, --plugins [plugins]                Plugins to add (e.g. view,router,inject)
  -sg, --skipGit                          Skip git repository initialization
  -sp, --skipPlugins                      No plugins will be added
  -sr, --skipRun                          Skip running after completion
  -h, --help                              display help for command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-2-\u63D2\u4EF6" aria-hidden="true">#</a> 3.2 \u63D2\u4EF6</h3><p>\u5728\u521B\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u9009\u62E9\u63D2\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u7528\u53C2\u6570 <code>--plugins</code> \u6307\u5B9A\u63D2\u4EF6</p><p>\u5982\u679C\u9009\u62E9\u7684\u67D0\u4E2A\u63D2\u4EF6\u9700\u8981\u5F15\u7528\u53E6\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u9700\u8981\u7684\u63D2\u4EF6\u4F1A\u81EA\u52A8\u6DFB\u52A0\uFF0C\u5373\u4F7F\u6CA1\u6709\u9009\u62E9</p><p>\u6BD4\u5982 <code>pipe</code> \u4F9D\u8D56\u4E8E <code>inject</code>\uFF0C\u82E5\u9009\u62E9\u4E86 <code>pipe</code> \u5C06\u81EA\u52A8\u52A0\u5165 <code>inject</code></p><h2 id="_4-template" tabindex="-1"><a class="header-anchor" href="#_4-template" aria-hidden="true">#</a> 4 template</h2><p>\u8BE5\u529F\u80FD\u6682\u672A\u5B8C\u6210</p><h2 id="_5-build" tabindex="-1"><a class="header-anchor" href="#_5-build" aria-hidden="true">#</a> 5 build</h2><p>\u7528\u4E8E\u7F16\u8BD1\u9879\u76EE\uFF0C\u53EF\u4EE5\u914D\u5408\u5176\u4ED6\u63D2\u4EF6\u6267\u884C\u7279\u5B9A\u811A\u672C\uFF0C\u5982 <code>@ipare/router</code> \u63D2\u4EF6\u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u7B49</p><h3 id="_5-1-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-1-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> 5.1 \u4F7F\u7528\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Usage: ipare build|b [options]

Build ipare application

Options:
  -m, --mode [mode]             Run mode (e.g., development,production). (default: &quot;production&quot;)
  -c, --config [path]           Path to ipare-cli configuration file. (default: &quot;ipare-cli.config.ts&quot;)
  -jc, --jsonConfig [json]      Json string of ipare-cli configuration.
  -fc, --funcConfig [function]  Function string to build ipare-cli configuration.
  -tc, --tsconfigPath [path]    Path to tsconfig.json file.
  -w, --watch                   Run in watch mode (live-reload).
  -wa, --watchAssets            Watch non-ts (e.g., .views) files mode.
  -sm, --sourceMap              Whether to generate source map files.
  -cp, --copyPackage            Copy package.json to out dir.
  -h, --help                    display help for command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-\u6269\u5C55\u7F16\u8BD1\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_5-2-\u6269\u5C55\u7F16\u8BD1\u529F\u80FD" aria-hidden="true">#</a> 5.2 \u6269\u5C55\u7F16\u8BD1\u529F\u80FD</h3><p>\u5982\u679C\u4F60\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5E76\u4E14\u6709\u4EE5\u4E0B\u4EFB\u4E00\u9700\u6C42</p><ul><li>\u9700\u8981\u5728\u7F16\u8BD1\u8FC7\u7A0B\u6267\u884C\u7279\u5B9A\u7684\u4EE3\u7801</li><li>\u63D0\u4F9B <code>ipare-cli.config.ts</code> \u9644\u52A0\u7684\u9ED8\u8BA4\u914D\u7F6E</li></ul><p>\u90A3\u4E48\u4F60\u9700\u8981\u6309\u4E0B\u9762\u7684\u65B9\u5F0F\u6DFB\u52A0\u63D2\u4EF6\u7684\u529F\u80FD</p><h4 id="_5-2-1-\u63D2\u4EF6\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_5-2-1-\u63D2\u4EF6\u811A\u672C" aria-hidden="true">#</a> 5.2.1 \u63D2\u4EF6\u811A\u672C</h4><p>\u63D2\u4EF6\u811A\u672C\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\uFF0C\u4E00\u79CD\u662F ts \u7F16\u8BD1\u94A9\u5B50\uFF0C\u4E00\u79CD\u662F\u7F16\u8BD1\u524D\u540E\u7684\u811A\u672C</p><h5 id="_5-2-1-1-ts-\u7F16\u8BD1\u7684\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#_5-2-1-1-ts-\u7F16\u8BD1\u7684\u94A9\u5B50" aria-hidden="true">#</a> 5.2.1.1 TS \u7F16\u8BD1\u7684\u94A9\u5B50</h5><p>\u5728\u63D2\u4EF6\u4E2D\uFF0C\u5BFC\u51FA\u4EE5\u4E0B\u811A\u672C\u4F5C\u7528\u4E8E ts \u7F16\u8BD1\u7684\u94A9\u5B50</p><ul><li>beforeCompile</li><li>afterCompile</li><li>afterCompileDeclarations</li></ul><h5 id="_5-2-1-2-\u7F16\u8BD1\u524D\u540E\u7684\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_5-2-1-2-\u7F16\u8BD1\u524D\u540E\u7684\u811A\u672C" aria-hidden="true">#</a> 5.2.1.2 \u7F16\u8BD1\u524D\u540E\u7684\u811A\u672C</h5><p>\u5728\u63D2\u4EF6\u4E2D\uFF0C\u5BFC\u51FA\u4EE5\u4E0B\u811A\u672C\u4F5C\u7528\u4E8E\u7F16\u8BD1\u524D\u540E\u8FD0\u884C</p><ul><li>postbuild \u7F16\u8BD1\u5B8C\u6210\u540E\u8FD0\u884C</li><li>prebuild \u7F16\u8BD1\u4E4B\u524D\u8FD0\u884C</li></ul><p>\u811A\u672C\u4E3A\u56DE\u8C03\u51FD\u6570</p><p><code>postbuild</code> \u56DE\u8C03\u51FD\u6570\u5982\u679C\u8FD4\u56DE false\uFF0C \u5C06\u7EC8\u6B62\u7F16\u8BD1</p><h4 id="_5-2-2-\u6269\u5C55\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-2-2-\u6269\u5C55\u914D\u7F6E" aria-hidden="true">#</a> 5.2.2 \u6269\u5C55\u914D\u7F6E</h4><p>\u5728\u63D2\u4EF6\u4E2D\u5BFC\u51FA\u7279\u5B9A\u5185\u5BB9\u4EE5\u652F\u6301\u81EA\u52A8\u6269\u5C55\u914D\u7F6E <code>ipare-cli.config.ts</code></p><h5 id="_5-2-2-1" tabindex="-1"><a class="header-anchor" href="#_5-2-2-1" aria-hidden="true">#</a> 5.2.2.1</h5><p>\u5BFC\u51FA <code>cliConfig</code>\uFF0C\u4E00\u822C\u7528\u4E8E\u7B80\u5355\u7684\u914D\u7F6E</p><p>\u7F16\u8BD1\u9636\u6BB5\u4F1A\u4E0E <code>ipare-cli.config.ts</code> \u4E2D\u7684\u914D\u7F6E\u505A\u5408\u5E76\u64CD\u4F5C</p><p>\u53EF\u4EE5\u5BFC\u51FA\u4E24\u79CD\u7C7B\u578B\uFF1A</p><ol><li>Configuration \u5BF9\u8C61</li><li>\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3A Configuration \u5BF9\u8C61\uFF0C\u53C2\u6570\u4E3A <code>ConfigEnv</code> \u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u6709\u4EE5\u4E0B\u5B57\u6BB5 <ul><li>mode: start/build \u547D\u4EE4\u4F20\u5165\u7684 mode \u53C2\u6570</li><li>command: \u547D\u4EE4\u7C7B\u578B</li></ul></li></ol><h5 id="_5-2-2-2" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2" aria-hidden="true">#</a> 5.2.2.2</h5><p>\u5BFC\u51FA <code>cliConfigHook</code>\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5F53\u524D\u914D\u7F6E\u5E76\u8FD4\u56DE\u65B0\u7684\u914D\u7F6E</p><p>\u503C\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u6709\u4E24\u4E2A\u53C2\u6570</p><ul><li>config: \u5F53\u524D\u7684\u914D\u7F6E</li><li>options: \u4E0E\u524D\u9762\u7684\u5BFC\u51FA <code>cliConfig</code> \u7684\u56DE\u8C03\u51FD\u6570\u53C2\u6570\u76F8\u540C</li></ul><h2 id="_6-start" tabindex="-1"><a class="header-anchor" href="#_6-start" aria-hidden="true">#</a> 6. start</h2><p>\u7528\u4E8E\u542F\u52A8\u9879\u76EE\uFF0C\u7F16\u8BD1\u8FC7\u7A0B\u540C <code>build</code> \u547D\u4EE4</p><p>\u542F\u52A8\u9879\u76EE\u65F6\u4F1A\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A http \u670D\u52A1\uFF0C\u56E0\u6B64 serverless \u9879\u76EE\u4E5F\u53EF\u4EE5\u672C\u5730\u8FD0\u884C</p><h3 id="_6-1-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6-1-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> 6.1 \u4F7F\u7528\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Usage: ipare start|s [options]

Run ipare application

Options:
  -m, --mode [mode]             Run mode (e.g., development,production). (default: &quot;development&quot;)
  -c, --config [path]           Path to ipare-cli configuration file. (default: &quot;ipare-cli.config.ts&quot;)
  -jc, --jsonConfig [json]      Json string of ipare-cli configuration.
  -fc, --funcConfig [function]  Function string to build ipare-cli configuration.
  -tc, --tsconfigPath [path]    Path to tsconfig.json file.
  -w, --watch                   Run in watch mode (live-reload).
  -wa, --watchAssets            Watch non-ts (e.g., .views) files mode.
  -b, --binaryToRun [program]   Binary to run application (e.g., node, ts-node).
  -p, --port [port]             The port on http listens
  -h, --help                    display help for command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-startup-\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#_6-2-startup-\u5165\u53E3" aria-hidden="true">#</a> 6.2 Startup \u5165\u53E3</h3><p><code>@ipare/cli</code> \u8981\u6C42\u5FC5\u987B\u6309\u89C4\u8303\u6709\u4E2A src/startup.ts \u6587\u4EF6\uFF0C\u5E76\u5BFC\u51FA\u4E00\u4E2A\u9ED8\u8BA4\u56DE\u8C03\u51FD\u6570\uFF0C\u5185\u5BB9\u5982\u4E0B</p><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>// startup.ts
export default function &lt;T extends Startup&gt;(startup: T, mode?: string) {
  return startup
    .use(async (ctx, next) =&gt; {
      ctx.res.setHeader(&quot;mode&quot;, mode ?? &quot;&quot;);
      await next();
    })
    .useInject()
    .useRouter();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mode</code> \u53C2\u6570\u503C\u4E3A <code>@ipare/cli</code> \u7684 <code>build</code> \u6216 <code>start</code> \u547D\u4EE4\u4F20\u5165\u7684 <code>--mode</code> \u53C2\u6570\uFF0C\u5982 <code>development</code>\u3001<code>production</code> \u7B49</p><h2 id="_7-info" tabindex="-1"><a class="header-anchor" href="#_7-info" aria-hidden="true">#</a> 7. info</h2><p>\u53EF\u4EE5\u663E\u793A\u9879\u76EE\u4FE1\u606F\uFF0C\u4E3B\u8981\u7528\u4E8E\u6392\u67E5\u95EE\u9898</p><h3 id="_7-1-\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-1-\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> 7.1 \u4F7F\u7528\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Usage: ipare info|i [options]

Display ipare project details

Options:
  -h, --help  display help for command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C\u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  ___ ____   _    ____  _____ ____ _     ___
 |_ _|  _ \\ / \\  |  _ \\| ____/ ___| |   |_ _|
  | || |_) / _ \\ | |_) |  _|| |   | |    | |
  | ||  __/ ___ \\|  _ &lt;| |__| |___| |___ | |
 |___|_| /_/   \\_\\_| \\_\\_____\\____|_____|___|


[System Information]
OS Type        : Windows_NT
OS Platform    : win32
OS Release     : 10.0.22000
NodeJS Version : v16.15.0

[Ipare CLI]
Ipare CLI Version : 0.3.1

[Ipare Packages Version]
@ipare/core   : ^1.6.3
@ipare/http   : ^1.2.4
@ipare/inject : ^1.2.3
@ipare/pipe   : ^1.3.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-update" tabindex="-1"><a class="header-anchor" href="#_8-update" aria-hidden="true">#</a> 8. update</h2><p>\u7528\u4E8E\u5347\u7EA7 Ipare \u4F9D\u8D56\u7248\u672C</p><h3 id="_7-1-\u4F7F\u7528\u65B9\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#_7-1-\u4F7F\u7528\u65B9\u5F0F-1" aria-hidden="true">#</a> 7.1 \u4F7F\u7528\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Usage: ipare update|u [options]

Update ipare dependencies

Options:
  -n, --name [name]                      Specify to update a package
  -a, --all                              Update all dependencies (default: false)
  -t, --tag &lt;tag&gt;                        Upgrade to tagged packages (latest | beta | rc | next tag) (default: &quot;latest&quot;)
  -su, --skipUpgrade                     Display version information without upgrading (default: false)
  -p, --packageManager [packageManager]  Specify package manager. (npm/yarn/pnpm/cnpm)
  -si, --skipInstall                     Skip installation (default: false)
  -h, --help                             display help for command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),l=[s];function r(t,c){return i(),n("div",null,l)}var u=e(d,[["render",r],["__file","cli.html.vue"]]);export{u as default};
