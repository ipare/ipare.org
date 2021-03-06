# 快速开始

你可以选择线上尝试，也可以选择本地构建。

## 线上尝试

通过 <http://minimal.ipare.org> 在线使用 ipare

浏览器里运行了基于 ipare 的构建设置，不需要在机器上安装任何依赖

## 本地构建

在命令行中运行下面语句

```
npm init ipare
```

这一语句将会安装并执行 [create-ipare](https://github.com/ipare/create-ipare)，你将会看到一些选择插件和环境的选项，根据你的需要选择对应的选项。

```bash
? Project name: ipare-project
? Select plugins 依赖注入 (@ipare/inject), 路由 (@ipare/router)
? Pick the environment to run application: 原生 NodeJS 服务
? Pick the package manager to use when installing dependencies: Use NPM
```

`create-ipare` 是 Ipare 的官方项目脚手架工具，由 `@ipare/cli` 自动生成，并且功能完全和 `@ipare/cli` 的 `ipare create` 命令相同。

### 启动

在项目被创建后，通过以下步骤启动程序：

```bash
cd <your-project-name>
npm run dev
```

你现在应该已经运行起来了 ipare 项目，访问 `http://localhost:2333` 看看吧

如果选择的插件包含 `swagger` 和 `router`，你将能看到 swagger 页面

如果选择的插件包含 `view` 或 `mva`，能看到一个简单的 html 页面

或者，能看到一个返回的 json 字符串

### 补充

无论你选择的运行环境是云函数还是原生 node 服务，本地启动都是以 node 服务启动调试的，你可以在 `ipare-cli.config.ts` 配置文件中的 `start` 节点修改启动参数，如端口、地址等。

当你准备将应用发布到生产环境时，请运行

```bash
npm run build
```

此命令会在 `dist` 文件夹中为你的应用创建一个生产环境的构建版本。
