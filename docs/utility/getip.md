---
pageClass: routes
---

# 用户IP信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/getip
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/getip -X POST -d 'ip=47.113.220.205'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ip | string | 否 | 要查询的IP(支持IPV6), 默认返回本机IP |

## 返回数据

``` json
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "ip": "47.113.220.205",
    "country": "中国",
    "province": "广东",
    "city": "深圳市",
    "area": "中国广东深圳市 阿里云",
    "isp": ""
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| ip | string | IP地址 |
| country | string | 国家 |
| province | string | 省份 |
| city | string | 城市 |
| area | string | 地区 |
| isp | string | 运营商 |

<ads></ads>