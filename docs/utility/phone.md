---
pageClass: routes
---

# 手机号归属地查询 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/phone
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/phone -X POST -d 'tel=13888888888'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tel | int | 是 | 手机号 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "local": "云南省昆明市",
    "num": "1388888",
    "type": "云南移动GSM卡",
    "isp": "中国移动",
    "std": "GSM (全球移动通信系统)"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| local | string | 归属地 |
| num | string | 号段 |
| type | string | 卡类型 |
| isp | string | 运营商 |
| std | string | 通信标准 |

<ads></ads>