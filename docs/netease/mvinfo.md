---
pageClass: routes
---

# 网易云MV信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/wyymv?id=5439044
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/wyymv -X POST -d 'id=5439044'
```

## 请求参数

> 标红部分即为MV ID<br />https://music.163.com/#/mv?id=<span style="color:#E53333;">5439044</span>

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | int | 是 | 网易云MV ID |

## 调用示例

移步: <a href="https://lab.5ime.cn/wyy" target="_blank" rel="noopener noreferrer">https://lab.5ime.cn/wyy</a> 查看

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "id": 5439044,
    "songs": "Shape Of You",
    "sings": "Ed Sheeran",
    "time": "2017-01-30",
    "cover": "http://p1.music.126.net/6j5TFIUYV0sGVf7oWJdacA==/18585045046057543.jpg",
    "mv": {
      "240": "http://vodkgeyttp8.vod.126.net/cloudmusic/MTAiYDQwICQwMDRkOTAhIg==/mv/5439044/05c9bde5a329285adce6f34a72fa5547.mp4?wsSecret=d0a6c82fedd9d08c0b81324f24c0c9ac&wsTime=1672927545",
      "480": "http://vodkgeyttp8.vod.126.net/cloudmusic/MTAiYDQwICQwMDRkOTAhIg==/mv/5439044/77d080f76b5527949ceb8e02c4b11034.mp4?wsSecret=b19999f12f7d2e363a254f272978a6d9&wsTime=1672927545",
      "720": "http://vodkgeyttp8.vod.126.net/cloudmusic/MTAiYDQwICQwMDRkOTAhIg==/mv/5439044/9a9802c47724deb0f9e3e4fb79c08f15.mp4?wsSecret=bb03fcad9f8ec0e81946e7c39fa0d2c4&wsTime=1672927545",
      "1080": "http://vodkgeyttp8.vod.126.net/cloudmusic/MTAiYDQwICQwMDRkOTAhIg==/mv/5439044/40ea656798cfb56e484bde83974ba785.mp4?wsSecret=d5231e08adabd54f60df6af99b6da7c4&wsTime=1672927545"
    },
    "view": 27206898,
    "like": 239845,
    "comment": 9473,
    "collect": 23260,
    "share": 23260
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | int | 网易云MV ID |
| songs | string | 歌曲名称 |
| sings | string | 歌手名称 |
| time | string | 发布时间 |
| cover | string | 封面图片 |
| mv | object | MV地址 |
| mv.240 | string | 清晰度 240P |
| mv.480 | string | 清晰度 480P |
| mv.720 | string | 清晰度 720P |
| mv.1080 | string | 清晰度 1080P |
| view | int | 播放量 |
| like | int | 点赞量 |
| comment | int | 评论量 |
| collect | int | 收藏量 |
| share | int | 分享量 |

<ads></ads>
