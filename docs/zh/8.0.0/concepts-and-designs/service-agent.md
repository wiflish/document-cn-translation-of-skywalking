# 服务自动打点代理

服务自动打点代理是基于语言的原生代理的一部分,这种代理需要依靠某些语言特定的特性,
通常是一种基于虚拟机的语言.

## 自动打点是什么意思?

许多用户都是在听到"他们说不需要改一行代码"之后才了解到这些代理的,
SkyWalking 以前也将这种说法放在 README 文档中. 实际上这种说法是既对又错的.
对于最终用户来说是对的, 他们不需要修改代码(至少在绝大多数情况下).
但这种说法也是错的, 因为代码实际上还是被修改了, 只是被代理给修改了,
这种做法通常叫做"在运行时操作代码".
底层原理就是自动打点代理利用了虚拟机提供的用于修改代码的接口来动态加入打点的代码,
如通过 `javaagent premain` 来修改 Java 类.

此外, 我们说大部分自动打点代理是基于虚拟机的, 但实际上你也可以在编译期构建这样的工具.

## 有什么限制?

自动打点很好用, 你还可以在编译时进行自动打点而不需要依赖虚拟机特性,
那么这里有什么限制吗?

答案当然是有, 以下就是它们的限制:

- **进程内传播在大多数情况下成为可能**. 许多高级编程语言(如 Java, .NET)都是用于构建业务系统.
大部分业务逻辑代码对于每一个请求来说都运行在同一个线程内, 这使得传播是基于线程 ID 的, 以确保上下文是安全的.

- **仅仅对某些框架和库奏效**. 因为是代理来在运行时修改代码的, 这也意味着代理插件开发者事先就要知道
所要修改的代码是怎么样的. 因此, 在这种探针下通常会有一个已支持的列表清单.
如 [SkyWalking Java 代理支持列表](../setup/service-agent/java-agent/Supported-list.md).

- **跨线程可能并非总是奏效**. 如上所述, 每个请求的代码大都运行在一个线程之内, 对于业务代码来说尤其如此.
但是在其他一些场景下, 它们也会在不同线程下工作, 比如指派任务到其他线程, 任务池, 以及批处理.
对于一些语言, 可能还提供了协程或类似的概念如 `Goroutine`, 使得开发者可以低开销地来执行异步操作,
在这些场景下, 自动打点可能会遇到一些问题.


所以说自动打点没有什么神秘的, 总而言之就是, 自动打点代理开发者写了一个激活程序, 使得打点的代码
自动运行, 仅此而已.

## 下一步?

如果你想了解 SkyWalking 中关于手动打点的库, 参考 [手动打点 SDK](manual-sdk.md) 一节.

