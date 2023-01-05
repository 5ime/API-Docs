---
pageClass: routes
---

# IP签名档 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/ipinfo
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/ipinfo -X POST -d 'format=json'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| format | string | 否 | 返回数据格式, 可选值 `json` 默认返回图片 |

## 调用示例

<img src="https://tenapi.cn/v2/ipinfo" />

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "img": "base64编码的图片"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| img | string | base64编码的图片 |

<ads></ads>