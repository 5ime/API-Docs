---
pageClass: routes
---

# 聚合短视频图集去水印 <Badge text="正常" type="tip"/>

::: tip
支持列表: 皮皮虾, 抖音, 快手, 皮皮搞笑, 最右, 微博
:::

## 接口地址

``` 
https://tenapi.cn/v2/images
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/images -X POST -d 'url=https://weibo.com/3669102477/MmC0IxClQ'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | 图集链接 |

## 调用示例

移步: <a href="https://lab.5ime.cn/video" target="_blank" rel="noopener noreferrer">https://lab.5ime.cn/video</a> 查看

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "count": 9,
    "images": [
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn24se2kj61sc2ds7wi02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn1y3ecoj61sc2dsb2a02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn1x4hshj61sc2dsu0x02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn20m8svj62c035q1kz02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn25flydj61sc2dsnpd02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn1zkqs6j627m30phdv02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn238k0cj61ra2glhdv02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn220yj1j62c0340hdv02.jpg",
      "https://lz.sinaimg.cn/oslarge/0040jbadly1h9qn244f0bj61sc2ds4qq02.jpg"
    ],
    "video": [
      "https://video.weibo.com/media/play?livephoto=https%3A%2F%2Flivephoto.us.sinaimg.cn%2F004te3M1gx082469TIMM0f0f0100hmfw0k01.mov",
      "https://video.weibo.com/media/play?livephoto=https%3A%2F%2Flivephoto.us.sinaimg.cn%2F004gScH2gx082469VFnN0f0f0100dwY80k01.mov",
      "https://video.weibo.com/media/play?livephoto=https%3A%2F%2Flivephoto.us.sinaimg.cn%2F002gmSmqgx082469WZ4j0f0f010096tB0k01.mov",
      "https://video.weibo.com/media/play?livephoto=https%3A%2F%2Flivephoto.us.sinaimg.cn%2F001MAfQOgx082469YlSo0f0f01008ltT0k01.mov"
    ]
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| count | int | 图片数量 |
| images | array | 图片链接 |
| video | array | 实况图链接(仅微博会返回) |

<ads></ads>