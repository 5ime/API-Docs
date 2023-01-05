---
pageClass: routes
---

# 随机一言 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/yiyan
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/yiyan -X POST -d 'format=json'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| format | string | 否 | 返回数据格式, 可选值 `json` , `js` 不填默认返回文字 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "success",
  "data": {
    "id": "1320058408000",
    "hitokoto": "我没有梦想，但是我能保护！",
    "cat": "a",
    "catname": "Anime - 动画",
    "author": "魅影陌客",
    "source": "假面骑士555",
    "date": "1320058408"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 一言id |
| hitokoto | string | 一言内容 |
| cat | string | 一言分类 |
| catname | string | 一言分类名称 |
| author | string | 一言作者 |
| source | string | 一言来源 |
| date | string | 一言发布时间 |

<ads></ads>