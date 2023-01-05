---
pageClass: routes
---

# QQ免Key加群 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/group
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/group -X POST -d 'qun=679849986&format=json'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| qun | int | 是 | QQ群号 |
| format | string | 否 | 返回数据格式, 可选值 `json` 不填默认跳转加群 |

## 返回数据

``` json
{
  "code": 200,
  "data": {
    "gid": 679849986,
    "idkey": "a5cef71d9834cdf84e87850ead503d4bf91a7405e6ac6518bcc0e622bfb85669",
    "url": "http://wp.qq.com/wpa/qunwpa?idkey=a5cef71d9834cdf84e87850ead503d4bf91a7405e6ac6518bcc0e622bfb85669"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| gid | int | QQ群号 |
| idkey | string | QQ群key |
| url | string | 加群链接 |

<ads></ads>