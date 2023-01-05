---
pageClass: routes
---

# 天气预报查询 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/weather
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/weather -X POST -d 'city=北京'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| city | string | 是 | 城市名称 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "获取成功",
  "data": [
    {
      "city": "北京",
      "date": "2023-01-05",
      "weather": "霾",
      "temp": -5,
      "humidity": "64%",
      "wind": "西风1级",
      "pm25": 167,
      "pm10": 115,
      "low": -8,
      "high": 5,
      "airData": "168",
      "airQuality": "中度污染",
      "dateLong": 1672848000000,
      "weatherType": 53,
      "windLevel": 1,
      "province": "北京"
    },
    {
      "city": "北京",
      "date": "2023-01-06",
      "weather": "晴",
      "humidity": "未知",
      "wind": "西北风",
      "pm25": 0,
      "low": -6,
      "high": 8,
      "airData": "130",
      "airQuality": "轻度污染",
      "dateLong": 1672934400000,
      "weatherType": 0,
      "windLevel": 1,
      "province": "北京"
    },
    {
      "city": "北京",
      "date": "2023-01-07",
      "weather": "晴",
      "humidity": "未知",
      "wind": "东北风",
      "pm25": 0,
      "low": -6,
      "high": 7,
      "airData": "80",
      "airQuality": "良",
      "dateLong": 1673020800000,
      "weatherType": 0,
      "windLevel": 1,
      "province": "北京"
    },
    {
      "city": "北京",
      "date": "2023-01-08",
      "weather": "晴",
      "humidity": "未知",
      "wind": "北风",
      "pm25": 0,
      "low": -6,
      "high": 10,
      "airData": "70",
      "airQuality": "良",
      "dateLong": 1673107200000,
      "weatherType": 0,
      "windLevel": 2,
      "province": "北京"
    }
  ]
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| city | string | 城市名称 |
| date | string | 日期 |
| weather | string | 天气 |
| temp | int | 温度 |
| humidity | string | 湿度 |
| wind | string | 风向 |
| pm25 | int | pm2.5 |
| pm10 | int | pm10 |
| low | int | 最低温度 |
| high | int | 最高温度 |
| airData | string | 空气质量指数 |
| airQuality | string | 空气质量 |
| dateLong | int | 时间戳 |
| weatherType | int | 天气类型 |
| windLevel | int | 风力等级 |
| province | string | 省份 |

<ads></ads>