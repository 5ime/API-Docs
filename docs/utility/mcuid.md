---
pageClass: routes
---

# Minecraft UUID查询 <Badge text="正常" type="tip"/>

## 接口地址

``` 
https://tenapi.cn/v2/mc
```

## 请求示例

``` bash
curl https://tenapi.cn/v2/mc -X POST -d 'uid=mc123'
```

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | string | 是 | 玩家名称 |

## 返回数据

``` json
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "name": "MC123",
    "id": "ff476accdaf34e4d958c07d109d7fd86"
  }
}
```

## 返回参数

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| name | string | 玩家名称 |
| id | string | 玩家UUID |

<ads></ads>