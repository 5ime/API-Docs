---
pageClass: routes
---

# QQ头像 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/qqimg
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/qqimg -X POST -d 'qq=123456'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| qq | int | 是 | QQ号 |

## 返回数据

```
https://q1.qlogo.cn/g?b=qq&nk=123456&s=100
```

<ads></ads>