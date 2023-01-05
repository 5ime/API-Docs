---
pageClass: routes
---

# Bing每日壁纸 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/bing
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/bing -X POST -d 'format=json'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| format | string | 否 | 返回数据格式, 可选值 `json` 默认返回图片 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "url": "https://cn.bing.com/th?id=OHR.HermelinSchnee_ZH-CN8839783506_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    "title": "软萌雪中小精灵",
    "date": "20230105",
    "width": 1920,
    "height": 1080,
    "copyright": "白鼬 (Mustela erminea), 上巴伐利亚，德国 (© Konrad Wothe/Minden Pictures)",
    "copyrightlink": "https://www.bing.com/search?q=%E7%99%BD%E9%BC%AC&form=hpcapt&mkt=zh-cn"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| url | string | 图片链接 |
| title | string | 图片标题 |
| date | string | 图片日期 |
| width | int | 图片宽度 |
| height | int | 图片高度 |
| copyright | string | 版权信息 |
| copyrightlink | string | 版权链接 |

<ads></ads>