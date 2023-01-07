---
pageClass: routes
---

# 网易云热评 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/comment
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/comment
```

## 调用示例

移步: <a href="https://lab.5ime.cn/comment" target="_blank" rel="noopener noreferrer">https://lab.5ime.cn/comment</a> 查看

## 返回数据

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "id": "1336856864",
    "songs": "形容",
    "sings": "沈以诚",
    "album": "初遇",
    "cover": "http://p2.music.126.net/1iLwRvMtUMYLZUNR-HQW7Q==/109951163957708692.jpg",
    "url": "http://music.163.com/song/media/outer/url?id=1336856864.mp3",
    "name": "想夏了夏天",
    "comment": "“我试图用那些漂亮的句子来形容你，但是不行。\n我字字推敲写出长长一段话，你眉眼一弯熠熠生辉，就让我觉得，不行，这些文字写不出你眼里的星辰，写不出你唇角的春风，无论哪个词，都及不上你半分的惊艳。” ​"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 歌曲id |
| songs | string | 歌曲名称 |
| sings | string | 歌手名称 |
| album | string | 专辑名称 |
| cover | string | 歌曲封面 |
| url | string | 歌曲链接 |
| name | string | 评论者昵称 |
| comment | string | 热评 |

<ads></ads>