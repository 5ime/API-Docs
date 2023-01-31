---
pageClass: routes
---

# 聚合短视频去水印 <Badge text="正常" type="tip"/>

::: tip
支持列表: 皮皮虾, 抖音, 微视, 快手, 6间房, 哔哩哔哩, 微博, 绿洲, 度小视, 开眼, 陌陌, 皮皮搞笑, 全民k歌, 逗拍, 虎牙, 新片场, 哔哩哔哩, Acfun, 美拍, 西瓜视频, 火山小视频, 网易云Mlog
:::

## 接口地址

``` 
https://tenapi.cn/v2/video
```

## 请求示例

> 建议请求前进行 `urlencode` 处理

``` bash
curl https://tenapi.cn/v2/video -X POST -d 'url=https://v.douyin.com/6BEYVNs'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | 短视频地址 |

## 调用示例

移步: <a href="https://lab.5ime.cn/video" target="_blank" rel="noopener noreferrer">https://lab.5ime.cn/video</a> 查看

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "title": "救赎之道 就在心中",
    "author": "李子尘",
    "uid": "AK1104L",
    "avatar": "https://p3.douyinpic.com/aweme/1080x1080/aweme-avatar/tos-cn-avt-0015_257f30f8ced3c8e19fe2a14fd49918b7.jpeg?from=116350172",
    "like": 515449,
    "time": 1662897694,
    "cover": "https://p26-sign.douyinpic.com/tos-cn-p-0015/23505a7d2ac14c6ba456f7daa15ebafe_1662897698~tplv-dy-360p.jpeg?x-expires=1674136800&x-signature=Hn%2B%2FfN00FXlbiKLoKwhVHWhtnqI%3D&from=3213915784&se=false&biz_tag=feed_cover&l=20230105225228044462E26183B32076AD",
    "url": "http://v9-default.365yg.com/d7b42e28d78caab29a7292ea06feecc6/63b6f24a/video/tos/cn/tos-cn-ve-15c001-alinc2/a2ef526f2c814af29eba963ceb0f4add/?a=0&ch=26&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=516&bt=516&cs=0&ds=6&ft=pKlrKMMa8Zmo0ZHmf64jVp~x~AWrKsdm&mime_type=video_mp4&qs=0&rc=Nmg0N2dkODtpZzU3aGU3Z0BpM2c8ZTM6ZjV2ZjMzNGkzM0A1MTReYDIyXl8xNmE1L15iYSNsL2FlcjRfcGJgLS1kLTBzcw%3D%3D&l=20230105225228044462E26183B32076AD&btag=10000",
    "music": {
      "author": "李子尘",
      "avatar": "https://p3.douyinpic.com/aweme/1080x1080/aweme-avatar/tos-cn-avt-0015_257f30f8ced3c8e19fe2a14fd49918b7.jpeg?from=116350172",
      "url": "https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7142091217013115661.mp3"
    }
  }
}
```

## 返回参数

> 因为平台众多，所以返回的参数不固定，但 `title`, `cover`, `url` 一定会有

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| title | string | 视频标题 |
| author | string | 作者 |
| avatar | string | 作者头像 |
| like | int | 点赞数 |
| time | int | 发布时间 |
| cover | string | 封面图 |
| url | string | 视频地址 |
| music | object | 音乐信息 |
| music.author | string | 音乐作者 |
| music.avatar | string | 音乐作者头像 |
| music.url | string | 音乐地址 |

<ads></ads>
