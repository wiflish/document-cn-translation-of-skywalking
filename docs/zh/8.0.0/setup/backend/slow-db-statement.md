# 慢SQL语句设置
慢SQL语句对于找出依赖数据库的系统瓶颈具有重要意义。

慢SQL语句基于采样，现在，核心样本是每10分钟最慢的前50个。但这些语句的持续时间必须比阈值慢。

设置格式如下，单位为毫秒。
> database-type:thresholdValue,database-type2:thresholdValue2

默认设置是`default:200,mongodb:100`。`Reserved DB type`是**默认的**，作为所有数据库类型的默认阈值，明确设置了的除外。

**注意**，阈值不应该太小，比如`1ms`。从功能上讲，它是有效的，但如果你系统的大多数访问时间都小于1ms，会导致OAP性能问题，