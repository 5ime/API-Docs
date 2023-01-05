---
pageClass: routes
---

# 短网址还原 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/shorturl
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/shorturl -X POST -d 'url=http://t.cn/R3eupoz'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | 短网址 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "short" : "http://t.cn/R3eupoz",
    "url": "https://tenapi.cn"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| short | string | 短网址 |
| url | string | 原网址 |

<ads></ads>