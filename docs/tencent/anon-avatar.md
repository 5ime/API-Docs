---
pageClass: routes
---

# QQ匿名头像 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/qqanonimg
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/qqanonimg -X POST -d 'qq=123456'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| qq | int | 是 | QQ号 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "qq": "123456",
    "img": "https://q1.qlogo.cn/g?b=qq&k=ib0ts0Uexd5Rcic68bVuREwg&kti=Y7bM6AAAAAI&s=140"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| qq | string | QQ号 |
| img | string | 匿名头像 |

<ads></ads>