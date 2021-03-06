# 阿里云函数计算

安装 `@ipare/alifc` 以支持阿里云函数计算运行环境

将 Ipare 托管到阿里云函数计算

> 目前只支持 HTTP 函数

## 安装

```
npm i @ipare/alifc
```

## 开始使用

```JS
import { AlifcStartup } from "@ipare/alifc";

const handler = async function (req, resp, context) {
  await new AlifcStartup(req, resp, context)
    .use(async (ctx) => {
      ctx.ok("@ipare/alifc");
    })
    .run();
};
module.exports.handler = handler;
```

如果添加 `@ipare/router`

```JS
import { AlifcStartup } from "@ipare/alifc";
import "@ipare/router";

const handler = async function (req, resp, context) {
  await new AlifcStartup(req, resp, context)
    .use(async (ctx, next) => {
      ctx.res.headers.demo = "@ipare/alifc";
      await next();
    })
    .useRouter()
    .run();
};
module.exports.handler = handler;
```

## 解析 body

阿里云函数计算没有解析 body，但 `@ipare/alifc` 支持四种 body 解析

- json
- text
- urlencoded
- multipart

使用详情参考 [@ipare/http](https://github.com/ipare/http)

```JS
await new AlifcStartup(req, resp, context)
  .useHttpJsonBody()
  .useHttpTextBody()
  .useHttpUrlencodedBody()
  .useHttpMultipartBody()
  .run();
```

## 入口

`AlifcStartup` 作为 `Ipare` 运行于阿里云函数计算的入口

该类继承于 `Startup` 并实现阿里云函数计算功能
