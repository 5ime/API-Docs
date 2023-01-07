---
pageClass: routes
---

# 网易云歌曲信息 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/songinfo
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/songinfo -X POST -d 'id=400162138'
```

## 请求参数

> 标红部分即为歌曲 ID<br />https://music.163.com/#/song?id=<span style="color:#E53333;">400162138</span>

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | int | 是 | 网易云歌曲 ID |

## 调用示例

移步: <a href="https://lab.5ime.cn/wyy" target="_blank" rel="noopener noreferrer">https://lab.5ime.cn/wyy</a> 查看

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "id": 400162138,
    "songs": "海阔天空",
    "sings": "Beyond",
    "album": "华纳23周年纪念精选系列",
    "cover": "http://p2.music.126.net/a9oLdcFPhqQyuouJzG2mAQ==/3273246124149810.jpg",
    "url": "http://music.163.com/song/media/outer/url?id=400162138.mp3"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | int | 歌曲id |
| songs | string | 歌曲名称 |
| sings | string | 歌手名称 |
| album | string | 专辑名称 |
| cover | string | 歌曲封面 |
| url | string | 歌曲链接 |

<ads></ads>