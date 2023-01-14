---
pageClass: routes
---

# 骚扰电话查询 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/nuisance
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/nuisance -X POST -d 'tel=13888888888'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tel | int | 是 | 手机号 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "tel": "13888888888",
    "360": "骚扰电话",
    "sougou": "正常号码",
    "baidu": "正常号码"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| tel | string | 手机号 |
| 360 | string | 360手机卫士 |
| sougou | string | 搜狗号码通 |
| baidu | string | 百度手机卫士 |

<ads></ads>