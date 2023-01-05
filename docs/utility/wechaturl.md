---
pageClass: routes
---

# 微信网址拦截检测 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/wechaturl
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/wechaturl -X POST -d 'url=www.bilibili.com'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | 网址 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "status": "未被拦截"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| url | string | 网址 |
| status | string | 状态 |

<ads></ads>