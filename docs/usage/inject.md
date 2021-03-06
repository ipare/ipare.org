# 依赖注入

<p align="center" class="tags">
    <a href="https://github.com/ipare/inject/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license" /></a>
    <a href=""><img src="https://img.shields.io/npm/v/@ipare/inject.svg" alt="npm version"></a>
    <a href=""><img src="https://badgen.net/npm/dt/@ipare/inject" alt="npm downloads"></a>
    <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/@ipare/inject.svg" alt="node compatibility"></a>
    <a href="#"><img src="https://github.com/ipare/inject/actions/workflows/test.yml/badge.svg?branch=main" alt="Build Status"></a>
    <a href="https://codecov.io/gh/ipare/inject/branch/main"><img src="https://img.shields.io/codecov/c/github/ipare/inject/main.svg" alt="Test Coverage"></a>
    <a href="https://github.com/ipare/inject/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
    <a href="https://gitpod.io/#https://github.com/ipare/inject"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"></a>
    <a href="https://paypal.me/ihalwang" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
</p>

添加 `@ipare/inject` 以实现 `Ipare` 的 依赖注入

## 装饰器

你需要开启装饰器功能以使用依赖注入

装饰器有两种方式：

1. 在字段声明时使用装饰器 `@Inject`，`@ipare/inject` 将在初始化后注入对应服务

```TS
class OtherService(){}

class TestService{
  @Inject
  private readonly otherService!: OtherService;
}
```

2. 在类声明时使用装饰器 `@Inject`，并在类构造函数中声明服务，`@ipare/inject` 会在初始化类时注入对应服务

```TS
class OtherService(){}

@Inject
class TestService{
  constructor(private readonly otherService: OtherService){}
}
```

## 快速开始

```TS
import "@ipare/inject";
startup.useInject();
```

```TS
import "@ipare/inject";
import { Inject } from "@ipare/inject";
import { Middleware } from "@ipare/core";

class OtherService(){}

class TestService{
  @Inject
  private readonly otherService!: OtherService;
}

class TestMiddleware extends Middleware {
  @Inject
  private readonly testService!: TestService;

  async invoke(): Promise<void> {
    this.ok({
      service: this.testService.constructor.name,
    });
  }
}

const res = await new TestStartup().useInject().add(TestMiddleware).run();
```

上述代码中的 `useInject` 会启用依赖注入

需要注意的是，依赖注入只会在 `useInject` 之后的中间件中生效，因此你需要把 `useInject` 放在靠前的位置，根据实际项目决定

## `@Inject` 字段初始化时机

被 `@Inject` 装饰的字段会自动初始化并赋值，初始化的时机有两种：

- 中间件：在 `invoke` 函数被执行前会初始化 `@Inject` 装饰的字段
- 其他类：在类构造函数执行完毕后立即初始化 `@Inject` 装饰的字段

## 作用域

服务的作用域分为三种

1. Singleton：单例，nodejs 运行期间只初始化一次，即同时只会存在一个对象
2. Scoped：单次访问，每次网络访问会初始化一次，每次网络访问结束后此对象会被丢弃
3. Transient：瞬时，每处服务都会被单独初始化

```TS
import "@ipare/inject";
import { InjectType } "@ipare/inject";

startup.inject(IService, Service, InjectType.Singleton);
startup.inject(IService, Service, InjectType.Scoped);
startup.inject(IService, Service, InjectType.Transient);
```

需要注意的是，在云函数中，不能保证服务是单例的，因为云函数可能在调用完毕即销毁，下次调用启动新实例

## 注册服务

服务的注册分为隐式注册和显示注册

### 隐式注册

自动注册的服务，可以自动实例化特定类，仅支持 `Scoped` 作用域的服务，如

```TS
class TestMiddleware extends Middleware {
  @Inject
  private readonly testService!: TestService;
}
```

`testService` 字段值将自动被实例化，值为 `TestService` 实例对象

`TestService` 类构造函数的参数，也可以自动初始化

### 显式注册

可以指定实例化派生类或服务的作用域，以实现控制反转

```TS
import "@ipare/inject";

startup.inject(IService, Service);
// OR
startup.inject(IService, new Service()); // Singleton only
// OR
startup.inject(IService, async (ctx) => await createService(ctx));
```

需要注意的是， `inject` 作用于其后的中间件，因此你需要在靠前的位置注册服务

## 键值注入

你还可以使用特定的 Key 注入服务

```TS
import "@ipare/inject";

startup.inject("SERVICE_KEY", Service);
// OR
startup.inject("SERVICE_KEY", new Service()); // Singleton only
// OR
startup.inject("SERVICE_KEY", async (ctx) => await createService(ctx));
```

```TS
class TestMiddleware extends Middleware {
  @Inject("SERVICE_KEY")
  private readonly testService!: TestService;
}
```

甚至可以注入常量值

```TS
startup.inject("KEY1", true);
startup.inject("KEY2", "str");
startup.inject("KEY3", 2333);
```

```TS
class TestMiddleware extends Middleware {
  @Inject("KEY1")
  private readonly key1!: boolean; // true
  @Inject("KEY2")
  private readonly key2!: any; // "str"
  @Inject("KEY3")
  private readonly key3!: number; // 2333
}
```

## 服务的嵌套

嵌套的服务也能被正确初始化

```TS
class TestService1(){}

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
```

## 类装饰器

你也可以用 @Inject 装饰一个类，这样你就可以在类构造函数中取到服务

构造函数中也可以使用键值注入参数

```TS
import "@ipare/inject";
import { Inject } from "@ipare/inject";
import { Middleware } from "@ipare/core";

class OtherService(){}

@Inject
class TestService{
  constructor(
    readonly otherService: OtherService,
    @Inject("KEY1") private readonly params1: number
  ){}
}

@Inject
class TestMiddleware extends Middleware {
  constructor(
    private readonly testService: TestService, // TestService object
    @Inject("KEY1") private readonly params1: number, // 2333
    @Inject("KEY2") private readonly params2: any // true
  ){
    super();
  }

  async invoke(): Promise<void> {
    this.ok({
      service: this.testService.constructor.name,
      params1: this.params1,
      params2: this.params2
    });
  }
}

const res = await new TestStartup()
  .useInject()
  .inject("KEY1", 2333)
  .inject("KEY2", true)
  .add(TestMiddleware)
  .run();
```

需要注意的是，添加的中间件必须是中间件的构造器

```TS
setup.add(YourMiddleware)
```

因此下面添加中间件的方式，将不能使用类装饰器

```TS
setup.add(async (ctx, next)=>{})
setup.add(new YourMiddleware())
setup.add(()=> new YourMiddleware())
setup.add(async ()=> await Factory.creatMiddleware())
```

## 手动注入服务

有些服务可能没有写在其他服务中，也没有写在中间件中，就无法自动注入服务，需要手动注入服务

`@ipare/inject` 也支持手动注入服务，有两种方式注入

1. 你可以先创建对象再注入服务

```TS
import { parseInject } from '@ipare/inject'

const service = new Service();
await parseInject(ctx, service);

// OR
const service = await parseInject(ctx, new Service());
```

但是这种方式无法实例化 `服务写在构造函数中` 的类，仅可注入实例对象字段的服务

2. 也可以利用控制反转注入服务

```TS
import { parseInject } from '@ipare/inject'

const service = await parseInject(ctx, Service);
```

这种方式可以同时实例化属性服务或构造器服务

## 自定义注入

可以利用 `Inject` 和 `createInject` 创建自定义注入

`Inject` 传入以下参数将返回装饰器：

- handler: 回调函数，支持异步，返回值将作为装饰的字段值
- type: 可选，生命周期，`InjectType` 类型，与前面介绍的 **作用域** 的概念相同。这里是用于控制 `handler` 回调函数的生命周期
  - Singleton: `handler` 回调只会执行一次，因此装饰的不同字段值始终相同，回调函数没有 `HttpContext` 参数
  - Scoped: `handler` 回调每次网络请求只会执行一次，装饰的不同字段值在单次网络访问期间相同，回调函数有参数 `HttpContext`
  - Scoped: `handler` 回调在每个装饰的字段都会执行一次，回调函数有参数 `HttpContext`

`createInject` 无返回值，用于创建更复杂的自定义注入装饰器， 接收以下参数

- handle: 同上
- target: 装饰的类或类的原型，从装饰器参数取得
- propertyKey: 装饰的属性名，从属性装饰器参数取得
- parameterIndex: 装饰的参数索引，从参数装饰器参数取得
- type: `InjectType` 类型，作用同上面 `Inject` 的 `type` 参数

### 例 1

实现获取请求 `Host` 和获取统一用户 ID

定义

```TS
import { Inject } from "@ipare/inject";

const Host = Inject((ctx) => ctx.req.getHeader("Host"));
const UserID = Inject((ctx) => ctx.req.query["uid"]);

// OR
function UserID(target:any, propertyKey: string|symbol){
  return createInject((ctx) => ctx.req.query["uid"], target, propertyKey);
}
```

中间件

```TS
import { Middleware } from "@ipare/core";

class TestMiddleware extends Middleware {
  @Host
  readonly host!: string;
  @UserID
  readonly userId!: string;

  async invoke(): Promise<void> {
    this.ok({
      host: this.host,
      userId: this.userId,
    });
  }
}
```

OR

```TS
@Inject
class TestMiddleware extends Middleware {
  constructor(@Host readonly host: string, @UserID readonly userId: string){
    super();
  }

  async invoke(): Promise<void> {
    this.ok({
      host: this.host,
      userId: this.userId,
    });
  }
}
```

### 例 2

嵌套服务

定义

```TS
import { Inject,parseInject } from "@ipare/inject";

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

const Service3 = Inject((ctx) => new TestService3());
```

中间件

```TS
import { Middleware } from "@ipare/core";

class TestMiddleware extends Middleware {
  @Service3
  readonly service1!: Service3;
  @Service3
  readonly service2!: any;
}
```

OR

```TS
@Inject
class TestMiddleware extends Middleware {
  constructor(
    @Service3 readonly service1: Service3,
    @Service3 readonly service2: any
  ){
    super();
  }
}
```
