---
pageClass: routes
---

# 哔哩哔哩视频信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/bilivideo
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/bilivideo -X POST -d 'url=https://www.bilibili.com/video/BV1A5411t76w'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | 视频链接 |

## 返回数据

``` json
{
  "code": 200,
  "data": {
    "id": "BV1A5411t76w",
    "title": "【向上的力量 第二期】“中国电影不仅要走出去，更要走进来！”",
    "cover": "http://i1.hdslb.com/bfs/archive/df9bcbff12f9ee4ed077cde9c0baa4e4e3967ee4.jpg",
    "sort": "野生技能协会",
    "name": "共青团中央",
    "detail": "致敬时代巨变，展望未来十年。共青团中央宣传部联合中国日报新媒体、火星演讲会推出“向上的力量•未来十年”大型主题演讲活动，邀请各行业代表齐聚同一个舞台，与你一起展望未来十年！各位嘉宾演讲精彩来袭，不容错过！\n文明因交流而多彩，文明因互鉴而丰富。国际知名导演唐季礼将向我们讲述如何让更多具有中国精神、中国价值、中国力量的国产影片走出去。",
    "view": 101313,
    "coin": 1168,
    "like": 18108,
    "collect": 323,
    "time": 1586510978
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 视频id |
| title | string | 视频标题 |
| cover | string | 视频封面 |
| sort | string | 视频分区 |
| name | string | 视频作者 |
| detail | string | 视频简介 |
| view | int | 视频播放量 |
| coin | int | 视频硬币数 |
| like | int | 视频点赞数 |
| collect | int | 视频收藏数 |
| time | int | 视频发布时间 |

<ads></ads>