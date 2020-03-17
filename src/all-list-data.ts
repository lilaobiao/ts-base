
let allListData:TreeNode[] = [
  {
    "parent_id": 0,
    "name": "四川",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 51
  },
  {
    "parent_id": 0,
    "name": "江西",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 36
  },
  {
    "parent_id": 0,
    "name": "陕西",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 61
  },
  {
    "parent_id": 0,
    "name": "甘肃",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 62
  },
  {
    "parent_id": 0,
    "name": "青海",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 63
  },
  {
    "parent_id": 0,
    "name": "宁夏",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 64
  },
  {
    "parent_id": 0,
    "name": "新疆",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 65
  },
  {
    "parent_id": 0,
    "name": "辽宁",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 21
  },
  {
    "parent_id": 0,
    "name": "吉林",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 22
  },
  {
    "parent_id": 0,
    "name": "黑龙江",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 23
  },
  {
    "parent_id": 0,
    "name": "海南",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 46
  },
  {
    "parent_id": 0,
    "name": "广东",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 44
  },
  {
    "parent_id": 0,
    "name": "广西",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 45
  },
  {
    "parent_id": 0,
    "name": "湖北",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 42
  },
  {
    "parent_id": 0,
    "name": "湖南",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 43
  },
  {
    "parent_id": 0,
    "name": "河南",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 41
  },
  {
    "parent_id": 0,
    "name": "福建",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 35
  },
  {
    "parent_id": 0,
    "name": "贵州",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 52
  },
  {
    "parent_id": 0,
    "name": "北京",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 11
  },
  {
    "parent_id": 0,
    "name": "河北",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 13
  },
  {
    "parent_id": 0,
    "name": "天津",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 12
  },
  {
    "parent_id": 0,
    "name": "内蒙古",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 15
  },
  {
    "parent_id": 0,
    "name": "山西",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 14
  },
  {
    "parent_id": 0,
    "name": "浙江",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 33
  },
  {
    "parent_id": 0,
    "name": "江苏",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 32
  },
  {
    "parent_id": 0,
    "name": "上海",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 31
  },
  {
    "parent_id": 0,
    "name": "山东",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 37
  },
  {
    "parent_id": 0,
    "name": "重庆",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 50
  },
  {
    "parent_id": 0,
    "name": "云南",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 53
  },
  {
    "parent_id": 0,
    "name": "安徽",
    "region_level": "REGION_LEVEL_PROVINCE",
    "id": 34
  },
  {
    "parent_id": 51,
    "name": "成都",
    "region_level": "REGION_LEVEL_CITY",
    "id": 510100
  },
  {
    "parent_id": 36,
    "name": "南昌",
    "region_level": "REGION_LEVEL_CITY",
    "id": 360100
  },
  {
    "parent_id": 61,
    "name": "西安",
    "region_level": "REGION_LEVEL_CITY",
    "id": 610100
  },
  {
    "parent_id": 62,
    "name": "兰州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 620100
  },
  {
    "parent_id": 63,
    "name": "西宁",
    "region_level": "REGION_LEVEL_CITY",
    "id": 630100
  },
  {
    "parent_id": 64,
    "name": "银川",
    "region_level": "REGION_LEVEL_CITY",
    "id": 640100
  },
  {
    "parent_id": 65,
    "name": "乌鲁木齐",
    "region_level": "REGION_LEVEL_CITY",
    "id": 650100
  },
  {
    "parent_id": 21,
    "name": "沈阳",
    "region_level": "REGION_LEVEL_CITY",
    "id": 210100
  },
  {
    "parent_id": 21,
    "name": "大连",
    "region_level": "REGION_LEVEL_CITY",
    "id": 210200
  },
  {
    "parent_id": 22,
    "name": "长春",
    "region_level": "REGION_LEVEL_CITY",
    "id": 220100
  },
  {
    "parent_id": 23,
    "name": "哈尔滨",
    "region_level": "REGION_LEVEL_CITY",
    "id": 230100
  },
  {
    "parent_id": 46,
    "name": "海口",
    "region_level": "REGION_LEVEL_CITY",
    "id": 460100
  },
  {
    "parent_id": 44,
    "name": "佛山",
    "region_level": "REGION_LEVEL_CITY",
    "id": 440600
  },
  {
    "parent_id": 44,
    "name": "珠海",
    "region_level": "REGION_LEVEL_CITY",
    "id": 440400
  },
  {
    "parent_id": 44,
    "name": "广州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 440100
  },
  {
    "parent_id": 44,
    "name": "深圳",
    "region_level": "REGION_LEVEL_CITY",
    "id": 440300
  },
  {
    "parent_id": 45,
    "name": "南宁",
    "region_level": "REGION_LEVEL_CITY",
    "id": 450100
  },
  {
    "parent_id": 45,
    "name": "玉林",
    "region_level": "REGION_LEVEL_CITY",
    "id": 450900
  },
  {
    "parent_id": 42,
    "name": "武汉",
    "region_level": "REGION_LEVEL_CITY",
    "id": 420100
  },
  {
    "parent_id": 43,
    "name": "长沙",
    "region_level": "REGION_LEVEL_CITY",
    "id": 430100
  },
  {
    "parent_id": 41,
    "name": "郑州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 410100
  },
  {
    "parent_id": 35,
    "name": "厦门",
    "region_level": "REGION_LEVEL_CITY",
    "id": 350200
  },
  {
    "parent_id": 35,
    "name": "福州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 350100
  },
  {
    "parent_id": 52,
    "name": "贵阳",
    "region_level": "REGION_LEVEL_CITY",
    "id": 520100
  },
  {
    "parent_id": 11,
    "name": "北京",
    "region_level": "REGION_LEVEL_CITY",
    "id": 110000
  },
  {
    "parent_id": 13,
    "name": "石家庄",
    "region_level": "REGION_LEVEL_CITY",
    "id": 130100
  },
  {
    "parent_id": 12,
    "name": "天津",
    "region_level": "REGION_LEVEL_CITY",
    "id": 120000
  },
  {
    "parent_id": 15,
    "name": "呼和浩特",
    "region_level": "REGION_LEVEL_CITY",
    "id": 150100
  },
  {
    "parent_id": 14,
    "name": "太原",
    "region_level": "REGION_LEVEL_CITY",
    "id": 140100
  },
  {
    "parent_id": 33,
    "name": "温州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 330300
  },
  {
    "parent_id": 33,
    "name": "杭州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 330100
  },
  {
    "parent_id": 33,
    "name": "宁波",
    "region_level": "REGION_LEVEL_CITY",
    "id": 330200
  },
  {
    "parent_id": 32,
    "name": "苏州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 320500
  },
  {
    "parent_id": 32,
    "name": "南京",
    "region_level": "REGION_LEVEL_CITY",
    "id": 320100
  },
  {
    "parent_id": 32,
    "name": "无锡",
    "region_level": "REGION_LEVEL_CITY",
    "id": 320200
  },
  {
    "parent_id": 32,
    "name": "常州",
    "region_level": "REGION_LEVEL_CITY",
    "id": 320400
  },
  {
    "parent_id": 31,
    "name": "上海",
    "region_level": "REGION_LEVEL_CITY",
    "id": 310000
  },
  {
    "parent_id": 37,
    "name": "青岛",
    "region_level": "REGION_LEVEL_CITY",
    "id": 370200
  },
  {
    "parent_id": 37,
    "name": "潍坊",
    "region_level": "REGION_LEVEL_CITY",
    "id": 370700
  },
  {
    "parent_id": 37,
    "name": "济南",
    "region_level": "REGION_LEVEL_CITY",
    "id": 370100
  },
  {
    "parent_id": 50,
    "name": "重庆",
    "region_level": "REGION_LEVEL_CITY",
    "id": 500000
  },
  {
    "parent_id": 53,
    "name": "昆明",
    "region_level": "REGION_LEVEL_CITY",
    "id": 530100
  },
  {
    "parent_id": 34,
    "name": "合肥",
    "region_level": "REGION_LEVEL_CITY",
    "id": 340100
  },

  {
    "parent_id": 510100,
    "name": "八里庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005065
  },
  {
    "parent_id": 510100,
    "name": "沙河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005072
  },
  {
    "parent_id": 510100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005087
  },
  {
    "parent_id": 510100,
    "name": "建设路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005108
  },
  {
    "parent_id": 510100,
    "name": "新华西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005114
  },
  {
    "parent_id": 510100,
    "name": "人民西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005118
  },
  {
    "parent_id": 510100,
    "name": "解放路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005120
  },
  {
    "parent_id": 510100,
    "name": "城隍庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005126
  },
  {
    "parent_id": 510100,
    "name": "人民北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005135
  },
  {
    "parent_id": 510100,
    "name": "会展中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005161
  },
  {
    "parent_id": 510100,
    "name": "人民公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005164
  },
  {
    "parent_id": 510100,
    "name": "中华园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005228
  },
  {
    "parent_id": 510100,
    "name": "荷花池",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005234
  },
  {
    "parent_id": 510100,
    "name": "望江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005252
  },
  {
    "parent_id": 510100,
    "name": "红星路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005261
  },
  {
    "parent_id": 510100,
    "name": "火车南站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005268
  },
  {
    "parent_id": 510100,
    "name": "东坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005281
  },
  {
    "parent_id": 510100,
    "name": "金沙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005314
  },
  {
    "parent_id": 510100,
    "name": "春熙路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005323
  },
  {
    "parent_id": 510100,
    "name": "海椒市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005324
  },
  {
    "parent_id": 510100,
    "name": "合江亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005325
  },
  {
    "parent_id": 510100,
    "name": "静居寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005326
  },
  {
    "parent_id": 510100,
    "name": "九眼桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005327
  },
  {
    "parent_id": 510100,
    "name": "牛市口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005328
  },
  {
    "parent_id": 510100,
    "name": "牛王庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005329
  },
  {
    "parent_id": 510100,
    "name": "书院街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005330
  },
  {
    "parent_id": 510100,
    "name": "四川师大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005331
  },
  {
    "parent_id": 510100,
    "name": "盐市口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005332
  },
  {
    "parent_id": 510100,
    "name": "八宝街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005333
  },
  {
    "parent_id": 510100,
    "name": "草市街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005334
  },
  {
    "parent_id": 510100,
    "name": "杜甫草堂",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005335
  },
  {
    "parent_id": 510100,
    "name": "骡马市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005336
  },
  {
    "parent_id": 510100,
    "name": "青羊大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005337
  },
  {
    "parent_id": 510100,
    "name": "青羊宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005338
  },
  {
    "parent_id": 510100,
    "name": "太升路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005339
  },
  {
    "parent_id": 510100,
    "name": "天府广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005340
  },
  {
    "parent_id": 510100,
    "name": "茶店子",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005341
  },
  {
    "parent_id": 510100,
    "name": "抚琴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005342
  },
  {
    "parent_id": 510100,
    "name": "李家沱",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005343
  },
  {
    "parent_id": 510100,
    "name": "梁家巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005344
  },
  {
    "parent_id": 510100,
    "name": "沙湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005345
  },
  {
    "parent_id": 510100,
    "name": "蜀汉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005346
  },
  {
    "parent_id": 510100,
    "name": "五块石",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005347
  },
  {
    "parent_id": 510100,
    "name": "西南交大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005348
  },
  {
    "parent_id": 510100,
    "name": "营门口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005349
  },
  {
    "parent_id": 510100,
    "name": "高升桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005351
  },
  {
    "parent_id": 510100,
    "name": "红牌楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005352
  },
  {
    "parent_id": 510100,
    "name": "科华北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005353
  },
  {
    "parent_id": 510100,
    "name": "磨子桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005354
  },
  {
    "parent_id": 510100,
    "name": "双楠",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005355
  },
  {
    "parent_id": 510100,
    "name": "桐梓林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005356
  },
  {
    "parent_id": 510100,
    "name": "武侯祠",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005357
  },
  {
    "parent_id": 510100,
    "name": "双林路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005358
  },
  {
    "parent_id": 510100,
    "name": "驷马桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005359
  },
  {
    "parent_id": 510100,
    "name": "新华公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005360
  },
  {
    "parent_id": 510100,
    "name": "华阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005365
  },
  {
    "parent_id": 510100,
    "name": "狮子山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005394
  },
  {
    "parent_id": 360100,
    "name": "江大南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004804
  },
  {
    "parent_id": 360100,
    "name": "上海北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004806
  },
  {
    "parent_id": 360100,
    "name": "铁路八村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004807
  },
  {
    "parent_id": 360100,
    "name": "铁路五村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004808
  },
  {
    "parent_id": 360100,
    "name": "湖坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004810
  },
  {
    "parent_id": 360100,
    "name": "顺外路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004817
  },
  {
    "parent_id": 360100,
    "name": "孙家",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004818
  },
  {
    "parent_id": 360100,
    "name": "天虹商场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004820
  },
  {
    "parent_id": 360100,
    "name": "丁公路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004827
  },
  {
    "parent_id": 360100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004828
  },
  {
    "parent_id": 360100,
    "name": "绳金塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004829
  },
  {
    "parent_id": 360100,
    "name": "桃源",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004830
  },
  {
    "parent_id": 360100,
    "name": "系马桩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004831
  },
  {
    "parent_id": 360100,
    "name": "坛子口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004832
  },
  {
    "parent_id": 360100,
    "name": "朝阳洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004833
  },
  {
    "parent_id": 360100,
    "name": "抚生路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004834
  },
  {
    "parent_id": 360100,
    "name": "广场东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004835
  },
  {
    "parent_id": 360100,
    "name": "广场南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004836
  },
  {
    "parent_id": 360100,
    "name": "广润门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004837
  },
  {
    "parent_id": 360100,
    "name": "海关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004838
  },
  {
    "parent_id": 360100,
    "name": "洪城路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004839
  },
  {
    "parent_id": 360100,
    "name": "江电",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004840
  },
  {
    "parent_id": 360100,
    "name": "金盘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004841
  },
  {
    "parent_id": 360100,
    "name": "老福山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004842
  },
  {
    "parent_id": 360100,
    "name": "凉伞树",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004843
  },
  {
    "parent_id": 360100,
    "name": "南柴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004844
  },
  {
    "parent_id": 360100,
    "name": "南浦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004845
  },
  {
    "parent_id": 360100,
    "name": "南站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004846
  },
  {
    "parent_id": 360100,
    "name": "孺子路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004847
  },
  {
    "parent_id": 360100,
    "name": "十字街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004848
  },
  {
    "parent_id": 360100,
    "name": "司马庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004849
  },
  {
    "parent_id": 360100,
    "name": "桃花路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004850
  },
  {
    "parent_id": 360100,
    "name": "桃苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004851
  },
  {
    "parent_id": 360100,
    "name": "象山南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004852
  },
  {
    "parent_id": 360100,
    "name": "站前西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004853
  },
  {
    "parent_id": 360100,
    "name": "八一桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004854
  },
  {
    "parent_id": 360100,
    "name": "百花洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004855
  },
  {
    "parent_id": 360100,
    "name": "南京西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004856
  },
  {
    "parent_id": 360100,
    "name": "彭家桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004857
  },
  {
    "parent_id": 360100,
    "name": "省政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004858
  },
  {
    "parent_id": 360100,
    "name": "滕王阁",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004859
  },
  {
    "parent_id": 360100,
    "name": "爱国路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004861
  },
  {
    "parent_id": 360100,
    "name": "八一公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004862
  },
  {
    "parent_id": 360100,
    "name": "大士院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004863
  },
  {
    "parent_id": 360100,
    "name": "大院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004864
  },
  {
    "parent_id": 360100,
    "name": "墩子塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004866
  },
  {
    "parent_id": 360100,
    "name": "二七北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004867
  },
  {
    "parent_id": 360100,
    "name": "工人文化宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004868
  },
  {
    "parent_id": 360100,
    "name": "公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004869
  },
  {
    "parent_id": 360100,
    "name": "民德路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004870
  },
  {
    "parent_id": 360100,
    "name": "三经路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004871
  },
  {
    "parent_id": 360100,
    "name": "五纬路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004872
  },
  {
    "parent_id": 360100,
    "name": "贤士二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004873
  },
  {
    "parent_id": 360100,
    "name": "贤士湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004874
  },
  {
    "parent_id": 360100,
    "name": "贤士花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004875
  },
  {
    "parent_id": 360100,
    "name": "象山北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004876
  },
  {
    "parent_id": 360100,
    "name": "豫章",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004877
  },
  {
    "parent_id": 360100,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004878
  },
  {
    "parent_id": 360100,
    "name": "钟鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004879
  },
  {
    "parent_id": 360100,
    "name": "子固路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004880
  },
  {
    "parent_id": 360100,
    "name": "文教路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004882
  },
  {
    "parent_id": 360100,
    "name": "江西师大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004883
  },
  {
    "parent_id": 360100,
    "name": "榕门路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004884
  },
  {
    "parent_id": 360100,
    "name": "洪都",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004886
  },
  {
    "parent_id": 360100,
    "name": "解放西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004887
  },
  {
    "parent_id": 360100,
    "name": "京山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004888
  },
  {
    "parent_id": 360100,
    "name": "井冈山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004889
  },
  {
    "parent_id": 360100,
    "name": "三家店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004890
  },
  {
    "parent_id": 360100,
    "name": "新溪桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004891
  },
  {
    "parent_id": 360100,
    "name": "徐家坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004893
  },
  {
    "parent_id": 360100,
    "name": "上海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005231
  },
  {
    "parent_id": 610100,
    "name": "韦曲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001191
  },
  {
    "parent_id": 610100,
    "name": "二府庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001194
  },
  {
    "parent_id": 610100,
    "name": "方新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001195
  },
  {
    "parent_id": 610100,
    "name": "凤城四路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001196
  },
  {
    "parent_id": 610100,
    "name": "凤城一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001197
  },
  {
    "parent_id": 610100,
    "name": "经济技术开发区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001198
  },
  {
    "parent_id": 610100,
    "name": "龙首村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001199
  },
  {
    "parent_id": 610100,
    "name": "未央路沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001201
  },
  {
    "parent_id": 610100,
    "name": "文景路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001202
  },
  {
    "parent_id": 610100,
    "name": "辛家庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001203
  },
  {
    "parent_id": 610100,
    "name": "雅荷花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001205
  },
  {
    "parent_id": 610100,
    "name": "张家堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001206
  },
  {
    "parent_id": 610100,
    "name": "鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001210
  },
  {
    "parent_id": 610100,
    "name": "汉城路沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001211
  },
  {
    "parent_id": 610100,
    "name": "劳动公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001212
  },
  {
    "parent_id": 610100,
    "name": "莲湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001213
  },
  {
    "parent_id": 610100,
    "name": "北院门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001214
  },
  {
    "parent_id": 610100,
    "name": "城西客运站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001215
  },
  {
    "parent_id": 610100,
    "name": "大观园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001216
  },
  {
    "parent_id": 610100,
    "name": "丰禾路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001217
  },
  {
    "parent_id": 610100,
    "name": "丰庆路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001218
  },
  {
    "parent_id": 610100,
    "name": "广济街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001219
  },
  {
    "parent_id": 610100,
    "name": "红庙坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001220
  },
  {
    "parent_id": 610100,
    "name": "环城西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001221
  },
  {
    "parent_id": 610100,
    "name": "锦园小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001222
  },
  {
    "parent_id": 610100,
    "name": "庙后街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001223
  },
  {
    "parent_id": 610100,
    "name": "青年路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001224
  },
  {
    "parent_id": 610100,
    "name": "桃园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001225
  },
  {
    "parent_id": 610100,
    "name": "甜水井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001226
  },
  {
    "parent_id": 610100,
    "name": "土门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001227
  },
  {
    "parent_id": 610100,
    "name": "西大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001228
  },
  {
    "parent_id": 610100,
    "name": "西关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001229
  },
  {
    "parent_id": 610100,
    "name": "西稍门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001230
  },
  {
    "parent_id": 610100,
    "name": "枣园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001231
  },
  {
    "parent_id": 610100,
    "name": "自强路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001232
  },
  {
    "parent_id": 610100,
    "name": "西华门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001233
  },
  {
    "parent_id": 610100,
    "name": "玉祥门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001234
  },
  {
    "parent_id": 610100,
    "name": "高新路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001235
  },
  {
    "parent_id": 610100,
    "name": "小寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001236
  },
  {
    "parent_id": 610100,
    "name": "北山门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001237
  },
  {
    "parent_id": 610100,
    "name": "长延堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001238
  },
  {
    "parent_id": 610100,
    "name": "翠华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001239
  },
  {
    "parent_id": 610100,
    "name": "大雁塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001240
  },
  {
    "parent_id": 610100,
    "name": "等驾坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001241
  },
  {
    "parent_id": 610100,
    "name": "电视塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001242
  },
  {
    "parent_id": 610100,
    "name": "电子正街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001243
  },
  {
    "parent_id": 610100,
    "name": "丁白路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001244
  },
  {
    "parent_id": 610100,
    "name": "沣惠南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001245
  },
  {
    "parent_id": 610100,
    "name": "高科花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001246
  },
  {
    "parent_id": 610100,
    "name": "光华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001247
  },
  {
    "parent_id": 610100,
    "name": "吉祥路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001248
  },
  {
    "parent_id": 610100,
    "name": "科技二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001249
  },
  {
    "parent_id": 610100,
    "name": "科技路西口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001250
  },
  {
    "parent_id": 610100,
    "name": "科技一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001251
  },
  {
    "parent_id": 610100,
    "name": "昆明路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001252
  },
  {
    "parent_id": 610100,
    "name": "玫瑰大楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001253
  },
  {
    "parent_id": 610100,
    "name": "明德门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001254
  },
  {
    "parent_id": 610100,
    "name": "南郊大学区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001255
  },
  {
    "parent_id": 610100,
    "name": "太白小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001256
  },
  {
    "parent_id": 610100,
    "name": "唐延路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001257
  },
  {
    "parent_id": 610100,
    "name": "旺座现代城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001258
  },
  {
    "parent_id": 610100,
    "name": "西影路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001259
  },
  {
    "parent_id": 610100,
    "name": "亚美大厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001260
  },
  {
    "parent_id": 610100,
    "name": "杨家村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001261
  },
  {
    "parent_id": 610100,
    "name": "永松路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001262
  },
  {
    "parent_id": 610100,
    "name": "鱼化寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001263
  },
  {
    "parent_id": 610100,
    "name": "朱雀大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001264
  },
  {
    "parent_id": 610100,
    "name": "金花路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001265
  },
  {
    "parent_id": 610100,
    "name": "西安交大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001266
  },
  {
    "parent_id": 610100,
    "name": "西北大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001267
  },
  {
    "parent_id": 610100,
    "name": "小雁塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001268
  },
  {
    "parent_id": 610100,
    "name": "安东街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001269
  },
  {
    "parent_id": 610100,
    "name": "安西街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001270
  },
  {
    "parent_id": 610100,
    "name": "柏树林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001271
  },
  {
    "parent_id": 610100,
    "name": "边家村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001272
  },
  {
    "parent_id": 610100,
    "name": "长安路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001273
  },
  {
    "parent_id": 610100,
    "name": "长乐坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001274
  },
  {
    "parent_id": 610100,
    "name": "大学南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001275
  },
  {
    "parent_id": 610100,
    "name": "东大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001276
  },
  {
    "parent_id": 610100,
    "name": "东关南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001277
  },
  {
    "parent_id": 610100,
    "name": "东门外",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001278
  },
  {
    "parent_id": 610100,
    "name": "东木头市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001279
  },
  {
    "parent_id": 610100,
    "name": "何家村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001280
  },
  {
    "parent_id": 610100,
    "name": "和平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001281
  },
  {
    "parent_id": 610100,
    "name": "互助路立交",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001282
  },
  {
    "parent_id": 610100,
    "name": "环城南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001283
  },
  {
    "parent_id": 610100,
    "name": "建国门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001284
  },
  {
    "parent_id": 610100,
    "name": "南大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001285
  },
  {
    "parent_id": 610100,
    "name": "南院门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001286
  },
  {
    "parent_id": 610100,
    "name": "太乙路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001287
  },
  {
    "parent_id": 610100,
    "name": "文昌门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001288
  },
  {
    "parent_id": 610100,
    "name": "文艺路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001289
  },
  {
    "parent_id": 610100,
    "name": "张家村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001290
  },
  {
    "parent_id": 610100,
    "name": "建设路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001291
  },
  {
    "parent_id": 610100,
    "name": "朱雀门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001292
  },
  {
    "parent_id": 610100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001293
  },
  {
    "parent_id": 610100,
    "name": "北关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001294
  },
  {
    "parent_id": 610100,
    "name": "长乐西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001295
  },
  {
    "parent_id": 610100,
    "name": "长乐中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001296
  },
  {
    "parent_id": 610100,
    "name": "长缨东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001297
  },
  {
    "parent_id": 610100,
    "name": "大差市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001298
  },
  {
    "parent_id": 610100,
    "name": "东五路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001299
  },
  {
    "parent_id": 610100,
    "name": "二马路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001300
  },
  {
    "parent_id": 610100,
    "name": "韩森寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001301
  },
  {
    "parent_id": 610100,
    "name": "胡家庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001302
  },
  {
    "parent_id": 610100,
    "name": "解放路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001303
  },
  {
    "parent_id": 610100,
    "name": "康复路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001304
  },
  {
    "parent_id": 610100,
    "name": "尚勤路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001305
  },
  {
    "parent_id": 610100,
    "name": "太华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001306
  },
  {
    "parent_id": 610100,
    "name": "万寿路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001307
  },
  {
    "parent_id": 610100,
    "name": "西京医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001308
  },
  {
    "parent_id": 610100,
    "name": "西五路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001309
  },
  {
    "parent_id": 610100,
    "name": "西一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001310
  },
  {
    "parent_id": 610100,
    "name": "中山门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001311
  },
  {
    "parent_id": 610100,
    "name": "钟楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001312
  },
  {
    "parent_id": 610100,
    "name": "安定门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005054
  },
  {
    "parent_id": 610100,
    "name": "和平门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005064
  },
  {
    "parent_id": 610100,
    "name": "北大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005104
  },
  {
    "parent_id": 610100,
    "name": "电子城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005397
  },
  {
    "parent_id": 620100,
    "name": "北滨河中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002898
  },
  {
    "parent_id": 620100,
    "name": "临夏路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002903
  },
  {
    "parent_id": 620100,
    "name": "西站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002904
  },
  {
    "parent_id": 620100,
    "name": "安西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002905
  },
  {
    "parent_id": 620100,
    "name": "敦煌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002906
  },
  {
    "parent_id": 620100,
    "name": "伏龙坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002907
  },
  {
    "parent_id": 620100,
    "name": "龚家湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002908
  },
  {
    "parent_id": 620100,
    "name": "华林坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002909
  },
  {
    "parent_id": 620100,
    "name": "兰工坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002910
  },
  {
    "parent_id": 620100,
    "name": "土门墩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002911
  },
  {
    "parent_id": 620100,
    "name": "武山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002912
  },
  {
    "parent_id": 620100,
    "name": "西关十字",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002913
  },
  {
    "parent_id": 620100,
    "name": "西湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002914
  },
  {
    "parent_id": 620100,
    "name": "西津东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002915
  },
  {
    "parent_id": 620100,
    "name": "西津西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002916
  },
  {
    "parent_id": 620100,
    "name": "西园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002917
  },
  {
    "parent_id": 620100,
    "name": "晏家坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002918
  },
  {
    "parent_id": 620100,
    "name": "段家滩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002919
  },
  {
    "parent_id": 620100,
    "name": "皋兰路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002920
  },
  {
    "parent_id": 620100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002921
  },
  {
    "parent_id": 620100,
    "name": "靖远路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002922
  },
  {
    "parent_id": 620100,
    "name": "酒泉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002923
  },
  {
    "parent_id": 620100,
    "name": "农民巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002924
  },
  {
    "parent_id": 620100,
    "name": "平凉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002925
  },
  {
    "parent_id": 620100,
    "name": "渭源路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002926
  },
  {
    "parent_id": 620100,
    "name": "五里铺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002927
  },
  {
    "parent_id": 620100,
    "name": "雁滩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002928
  },
  {
    "parent_id": 620100,
    "name": "张掖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002929
  },
  {
    "parent_id": 620100,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002930
  },
  {
    "parent_id": 620100,
    "name": "草场街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002931
  },
  {
    "parent_id": 620100,
    "name": "大众巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002933
  },
  {
    "parent_id": 620100,
    "name": "定西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002934
  },
  {
    "parent_id": 620100,
    "name": "东方红广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002935
  },
  {
    "parent_id": 620100,
    "name": "东岗东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002936
  },
  {
    "parent_id": 620100,
    "name": "东岗西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002937
  },
  {
    "parent_id": 620100,
    "name": "东湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002939
  },
  {
    "parent_id": 620100,
    "name": "二热十字",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002940
  },
  {
    "parent_id": 620100,
    "name": "拱星墩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002941
  },
  {
    "parent_id": 620100,
    "name": "贡元巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002942
  },
  {
    "parent_id": 620100,
    "name": "鼓楼巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002943
  },
  {
    "parent_id": 620100,
    "name": "广武门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002944
  },
  {
    "parent_id": 620100,
    "name": "何家庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002945
  },
  {
    "parent_id": 620100,
    "name": "会宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002946
  },
  {
    "parent_id": 620100,
    "name": "焦家湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002947
  },
  {
    "parent_id": 620100,
    "name": "金昌南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002948
  },
  {
    "parent_id": 620100,
    "name": "静宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002949
  },
  {
    "parent_id": 620100,
    "name": "旧大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002950
  },
  {
    "parent_id": 620100,
    "name": "科技街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002951
  },
  {
    "parent_id": 620100,
    "name": "兰州商学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002952
  },
  {
    "parent_id": 620100,
    "name": "桥北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002953
  },
  {
    "parent_id": 620100,
    "name": "庆阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002954
  },
  {
    "parent_id": 620100,
    "name": "天水南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002955
  },
  {
    "parent_id": 620100,
    "name": "铁路东村街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002956
  },
  {
    "parent_id": 620100,
    "name": "铁路局",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002957
  },
  {
    "parent_id": 620100,
    "name": "铁路西村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002958
  },
  {
    "parent_id": 620100,
    "name": "通渭路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002959
  },
  {
    "parent_id": 620100,
    "name": "团结新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002960
  },
  {
    "parent_id": 620100,
    "name": "五泉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002961
  },
  {
    "parent_id": 620100,
    "name": "盐场堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002962
  },
  {
    "parent_id": 620100,
    "name": "盐场路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002963
  },
  {
    "parent_id": 620100,
    "name": "颜家沟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002964
  },
  {
    "parent_id": 620100,
    "name": "正宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002965
  },
  {
    "parent_id": 620100,
    "name": "白银路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005398
  },
  {
    "parent_id": 630100,
    "name": "南滩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003537
  },
  {
    "parent_id": 630100,
    "name": "人民街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003538
  },
  {
    "parent_id": 630100,
    "name": "饮马街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003539
  },
  {
    "parent_id": 630100,
    "name": "虎台",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003540
  },
  {
    "parent_id": 630100,
    "name": "南川西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003541
  },
  {
    "parent_id": 630100,
    "name": "胜利路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003542
  },
  {
    "parent_id": 630100,
    "name": "西关大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003543
  },
  {
    "parent_id": 630100,
    "name": "兴海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003544
  },
  {
    "parent_id": 630100,
    "name": "大众街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003545
  },
  {
    "parent_id": 630100,
    "name": "东关大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003546
  },
  {
    "parent_id": 640100,
    "name": "解放西街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001321
  },
  {
    "parent_id": 640100,
    "name": "前进街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001322
  },
  {
    "parent_id": 640100,
    "name": "胜利街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001323
  },
  {
    "parent_id": 640100,
    "name": "文化街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001324
  },
  {
    "parent_id": 640100,
    "name": "新华街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001325
  },
  {
    "parent_id": 640100,
    "name": "玉皇阁北街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001326
  },
  {
    "parent_id": 640100,
    "name": "中山南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001327
  },
  {
    "parent_id": 650100,
    "name": "南湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003596
  },
  {
    "parent_id": 650100,
    "name": "新民路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003601
  },
  {
    "parent_id": 650100,
    "name": "北京路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003607
  },
  {
    "parent_id": 650100,
    "name": "二工",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003609
  },
  {
    "parent_id": 650100,
    "name": "南纬路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003612
  },
  {
    "parent_id": 650100,
    "name": "天津路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003615
  },
  {
    "parent_id": 650100,
    "name": "银川路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003616
  },
  {
    "parent_id": 650100,
    "name": "八一",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003618
  },
  {
    "parent_id": 650100,
    "name": "和田街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003619
  },
  {
    "parent_id": 650100,
    "name": "红庙子",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003620
  },
  {
    "parent_id": 650100,
    "name": "炉院街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003621
  },
  {
    "parent_id": 650100,
    "name": "扬子江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003623
  },
  {
    "parent_id": 650100,
    "name": "友好北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003624
  },
  {
    "parent_id": 650100,
    "name": "友好南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003625
  },
  {
    "parent_id": 650100,
    "name": "阿勒泰路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003626
  },
  {
    "parent_id": 650100,
    "name": "克拉玛依东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003627
  },
  {
    "parent_id": 650100,
    "name": "二道桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003628
  },
  {
    "parent_id": 650100,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003629
  },
  {
    "parent_id": 650100,
    "name": "东门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003630
  },
  {
    "parent_id": 650100,
    "name": "和平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003631
  },
  {
    "parent_id": 650100,
    "name": "解放北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003633
  },
  {
    "parent_id": 650100,
    "name": "解放南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003634
  },
  {
    "parent_id": 650100,
    "name": "青年路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003635
  },
  {
    "parent_id": 650100,
    "name": "胜利路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003636
  },
  {
    "parent_id": 650100,
    "name": "团结路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003637
  },
  {
    "parent_id": 650100,
    "name": "新华北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003638
  },
  {
    "parent_id": 650100,
    "name": "新华南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003639
  },
  {
    "parent_id": 650100,
    "name": "南门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005134
  },
  {
    "parent_id": 650100,
    "name": "铁路局",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005400
  },
  {
    "parent_id": 210100,
    "name": "东塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004157
  },
  {
    "parent_id": 210100,
    "name": "万莲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004159
  },
  {
    "parent_id": 210100,
    "name": "长安",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004160
  },
  {
    "parent_id": 210100,
    "name": "大北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004161
  },
  {
    "parent_id": 210100,
    "name": "大东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004162
  },
  {
    "parent_id": 210100,
    "name": "管城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004164
  },
  {
    "parent_id": 210100,
    "name": "津桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004165
  },
  {
    "parent_id": 210100,
    "name": "辽沈",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004166
  },
  {
    "parent_id": 210100,
    "name": "洮昌",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004167
  },
  {
    "parent_id": 210100,
    "name": "小北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004169
  },
  {
    "parent_id": 210100,
    "name": "小东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004170
  },
  {
    "parent_id": 210100,
    "name": "小津桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004171
  },
  {
    "parent_id": 210100,
    "name": "珠林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004173
  },
  {
    "parent_id": 210100,
    "name": "南市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005079
  },
  {
    "parent_id": 210100,
    "name": "小白楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005080
  },
  {
    "parent_id": 210100,
    "name": "南湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005094
  },
  {
    "parent_id": 210100,
    "name": "文化路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005100
  },
  {
    "parent_id": 210100,
    "name": "太原街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005137
  },
  {
    "parent_id": 210100,
    "name": "奉天街沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005138
  },
  {
    "parent_id": 210100,
    "name": "南塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005139
  },
  {
    "parent_id": 210100,
    "name": "五爱市场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005140
  },
  {
    "parent_id": 210100,
    "name": "五里河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005141
  },
  {
    "parent_id": 210100,
    "name": "大东广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005142
  },
  {
    "parent_id": 210100,
    "name": "北行",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005145
  },
  {
    "parent_id": 210100,
    "name": "塔湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005149
  },
  {
    "parent_id": 210100,
    "name": "滑翔小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005151
  },
  {
    "parent_id": 210100,
    "name": "铁西广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005153
  },
  {
    "parent_id": 210100,
    "name": "和平广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005160
  },
  {
    "parent_id": 210100,
    "name": "新兴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005166
  },
  {
    "parent_id": 210100,
    "name": "太平",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005171
  },
  {
    "parent_id": 210100,
    "name": "劳动公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005173
  },
  {
    "parent_id": 210100,
    "name": "北站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005175
  },
  {
    "parent_id": 210100,
    "name": "滨河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005180
  },
  {
    "parent_id": 210100,
    "name": "马路湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005181
  },
  {
    "parent_id": 210100,
    "name": "东湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005207
  },
  {
    "parent_id": 210100,
    "name": "中街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005235
  },
  {
    "parent_id": 210100,
    "name": "市府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005242
  },
  {
    "parent_id": 210100,
    "name": "大西街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005378
  },
  {
    "parent_id": 210100,
    "name": "中华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005383
  },
  {
    "parent_id": 210100,
    "name": "文艺路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005395
  },
  {
    "parent_id": 210200,
    "name": "周水子",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004218
  },
  {
    "parent_id": 210200,
    "name": "春柳河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004221
  },
  {
    "parent_id": 210200,
    "name": "促进路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004222
  },
  {
    "parent_id": 210200,
    "name": "红旗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004227
  },
  {
    "parent_id": 210200,
    "name": "图书馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004253
  },
  {
    "parent_id": 210200,
    "name": "王家桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004254
  },
  {
    "parent_id": 210200,
    "name": "迎客路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004261
  },
  {
    "parent_id": 210200,
    "name": "周水前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004265
  },
  {
    "parent_id": 210200,
    "name": "锦华北园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004272
  },
  {
    "parent_id": 210200,
    "name": "锦绣小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004273
  },
  {
    "parent_id": 210200,
    "name": "奥林匹克广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004275
  },
  {
    "parent_id": 210200,
    "name": "人民广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004277
  },
  {
    "parent_id": 210200,
    "name": "石葵路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004278
  },
  {
    "parent_id": 210200,
    "name": "香炉礁",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004280
  },
  {
    "parent_id": 210200,
    "name": "东北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004281
  },
  {
    "parent_id": 210200,
    "name": "香周路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004282
  },
  {
    "parent_id": 210200,
    "name": "黄河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004283
  },
  {
    "parent_id": 210200,
    "name": "民政街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004284
  },
  {
    "parent_id": 210200,
    "name": "白云新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004286
  },
  {
    "parent_id": 210200,
    "name": "北岗桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004287
  },
  {
    "parent_id": 210200,
    "name": "北京街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004288
  },
  {
    "parent_id": 210200,
    "name": "长春路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004289
  },
  {
    "parent_id": 210200,
    "name": "大同街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004290
  },
  {
    "parent_id": 210200,
    "name": "电视大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004291
  },
  {
    "parent_id": 210200,
    "name": "东关街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004292
  },
  {
    "parent_id": 210200,
    "name": "儿童医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004294
  },
  {
    "parent_id": 210200,
    "name": "工人村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004296
  },
  {
    "parent_id": 210200,
    "name": "花园广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004297
  },
  {
    "parent_id": 210200,
    "name": "纪念街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004298
  },
  {
    "parent_id": 210200,
    "name": "莲花小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004301
  },
  {
    "parent_id": 210200,
    "name": "南石道街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004302
  },
  {
    "parent_id": 210200,
    "name": "日新",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004303
  },
  {
    "parent_id": 210200,
    "name": "三元街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004304
  },
  {
    "parent_id": 210200,
    "name": "胜利路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004305
  },
  {
    "parent_id": 210200,
    "name": "石道街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004306
  },
  {
    "parent_id": 210200,
    "name": "市政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004307
  },
  {
    "parent_id": 210200,
    "name": "体育场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004308
  },
  {
    "parent_id": 210200,
    "name": "同庆街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004309
  },
  {
    "parent_id": 210200,
    "name": "五一广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004310
  },
  {
    "parent_id": 210200,
    "name": "新开路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004311
  },
  {
    "parent_id": 210200,
    "name": "一二九街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004314
  },
  {
    "parent_id": 210200,
    "name": "英华街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004315
  },
  {
    "parent_id": 210200,
    "name": "长江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004318
  },
  {
    "parent_id": 210200,
    "name": "唐山街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004319
  },
  {
    "parent_id": 210200,
    "name": "希望广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004320
  },
  {
    "parent_id": 210200,
    "name": "武昌街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004327
  },
  {
    "parent_id": 210200,
    "name": "解放路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004339
  },
  {
    "parent_id": 210200,
    "name": "葵英街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004342
  },
  {
    "parent_id": 210200,
    "name": "劳动公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004344
  },
  {
    "parent_id": 210200,
    "name": "青云街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004348
  },
  {
    "parent_id": 210200,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004359
  },
  {
    "parent_id": 210200,
    "name": "辽宁师范大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004361
  },
  {
    "parent_id": 210200,
    "name": "马栏",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004362
  },
  {
    "parent_id": 210200,
    "name": "南沙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004363
  },
  {
    "parent_id": 210200,
    "name": "太原街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004365
  },
  {
    "parent_id": 210200,
    "name": "西安路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004366
  },
  {
    "parent_id": 210200,
    "name": "星海湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004367
  },
  {
    "parent_id": 210200,
    "name": "白山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004371
  },
  {
    "parent_id": 210200,
    "name": "车家村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004372
  },
  {
    "parent_id": 210200,
    "name": "妇产医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004373
  },
  {
    "parent_id": 210200,
    "name": "富国街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004374
  },
  {
    "parent_id": 210200,
    "name": "富民广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004375
  },
  {
    "parent_id": 210200,
    "name": "富民路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004376
  },
  {
    "parent_id": 210200,
    "name": "高新园区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004377
  },
  {
    "parent_id": 210200,
    "name": "和平广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004378
  },
  {
    "parent_id": 210200,
    "name": "侯家沟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004379
  },
  {
    "parent_id": 210200,
    "name": "会展中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004380
  },
  {
    "parent_id": 210200,
    "name": "交大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004382
  },
  {
    "parent_id": 210200,
    "name": "解放广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004383
  },
  {
    "parent_id": 210200,
    "name": "锦江园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004384
  },
  {
    "parent_id": 210200,
    "name": "锦石路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004385
  },
  {
    "parent_id": 210200,
    "name": "锦绣",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004386
  },
  {
    "parent_id": 210200,
    "name": "科技谷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004387
  },
  {
    "parent_id": 210200,
    "name": "李家",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004388
  },
  {
    "parent_id": 210200,
    "name": "李家街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004389
  },
  {
    "parent_id": 210200,
    "name": "连山街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004390
  },
  {
    "parent_id": 210200,
    "name": "莲花山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004391
  },
  {
    "parent_id": 210200,
    "name": "联合路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004392
  },
  {
    "parent_id": 210200,
    "name": "刘家桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004393
  },
  {
    "parent_id": 210200,
    "name": "绿波",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004394
  },
  {
    "parent_id": 210200,
    "name": "民权",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004395
  },
  {
    "parent_id": 210200,
    "name": "南平街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004396
  },
  {
    "parent_id": 210200,
    "name": "泉涌",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004397
  },
  {
    "parent_id": 210200,
    "name": "沙能街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004399
  },
  {
    "parent_id": 210200,
    "name": "沙跃街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004400
  },
  {
    "parent_id": 210200,
    "name": "熟食品交易中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004401
  },
  {
    "parent_id": 210200,
    "name": "丝绸路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004403
  },
  {
    "parent_id": 210200,
    "name": "台山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004405
  },
  {
    "parent_id": 210200,
    "name": "万岁街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004406
  },
  {
    "parent_id": 210200,
    "name": "西山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004407
  },
  {
    "parent_id": 210200,
    "name": "兴工",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004408
  },
  {
    "parent_id": 210200,
    "name": "中山公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004411
  },
  {
    "parent_id": 210200,
    "name": "高尔基路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004413
  },
  {
    "parent_id": 210200,
    "name": "大连晚报社",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004414
  },
  {
    "parent_id": 210200,
    "name": "鞍山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005322
  },
  {
    "parent_id": 220100,
    "name": "朝阳公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005066
  },
  {
    "parent_id": 220100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005086
  },
  {
    "parent_id": 220100,
    "name": "南湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005093
  },
  {
    "parent_id": 220100,
    "name": "东安",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005095
  },
  {
    "parent_id": 220100,
    "name": "人民广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005098
  },
  {
    "parent_id": 220100,
    "name": "太阳城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005099
  },
  {
    "parent_id": 220100,
    "name": "文化宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005105
  },
  {
    "parent_id": 220100,
    "name": "体育馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005107
  },
  {
    "parent_id": 220100,
    "name": "人民大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005111
  },
  {
    "parent_id": 220100,
    "name": "文化广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005113
  },
  {
    "parent_id": 220100,
    "name": "建设街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005117
  },
  {
    "parent_id": 220100,
    "name": "铁西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005133
  },
  {
    "parent_id": 220100,
    "name": "桃源",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005157
  },
  {
    "parent_id": 220100,
    "name": "站前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005167
  },
  {
    "parent_id": 220100,
    "name": "南站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005174
  },
  {
    "parent_id": 220100,
    "name": "东广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005183
  },
  {
    "parent_id": 220100,
    "name": "东南湖大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005184
  },
  {
    "parent_id": 220100,
    "name": "胜利公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005187
  },
  {
    "parent_id": 220100,
    "name": "西广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005188
  },
  {
    "parent_id": 220100,
    "name": "红旗街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005190
  },
  {
    "parent_id": 220100,
    "name": "湖西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005191
  },
  {
    "parent_id": 220100,
    "name": "辉南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005192
  },
  {
    "parent_id": 220100,
    "name": "重庆路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005193
  },
  {
    "parent_id": 220100,
    "name": "珲春街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005196
  },
  {
    "parent_id": 220100,
    "name": "中医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005197
  },
  {
    "parent_id": 220100,
    "name": "万福街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005221
  },
  {
    "parent_id": 220100,
    "name": "锦江广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005223
  },
  {
    "parent_id": 220100,
    "name": "上海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005230
  },
  {
    "parent_id": 220100,
    "name": "工学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005279
  },
  {
    "parent_id": 220100,
    "name": "文昌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005285
  },
  {
    "parent_id": 220100,
    "name": "南广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005288
  },
  {
    "parent_id": 220100,
    "name": "光复路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005316
  },
  {
    "parent_id": 220100,
    "name": "大兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005382
  },
  {
    "parent_id": 230100,
    "name": "和平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005077
  },
  {
    "parent_id": 230100,
    "name": "友谊路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005082
  },
  {
    "parent_id": 230100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005089
  },
  {
    "parent_id": 230100,
    "name": "文化宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005106
  },
  {
    "parent_id": 230100,
    "name": "长江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005115
  },
  {
    "parent_id": 230100,
    "name": "大庆路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005124
  },
  {
    "parent_id": 230100,
    "name": "儿童公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005128
  },
  {
    "parent_id": 230100,
    "name": "北京街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005159
  },
  {
    "parent_id": 230100,
    "name": "会展中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005162
  },
  {
    "parent_id": 230100,
    "name": "健康路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005178
  },
  {
    "parent_id": 230100,
    "name": "公路大桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005198
  },
  {
    "parent_id": 230100,
    "name": "建国公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005199
  },
  {
    "parent_id": 230100,
    "name": "新阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005200
  },
  {
    "parent_id": 230100,
    "name": "中央大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005201
  },
  {
    "parent_id": 230100,
    "name": "教化广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005202
  },
  {
    "parent_id": 230100,
    "name": "民生路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005203
  },
  {
    "parent_id": 230100,
    "name": "文昌街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005204
  },
  {
    "parent_id": 230100,
    "name": "珠江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005217
  },
  {
    "parent_id": 230100,
    "name": "嵩山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005244
  },
  {
    "parent_id": 230100,
    "name": "淮河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005262
  },
  {
    "parent_id": 230100,
    "name": "人才市场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005265
  },
  {
    "parent_id": 230100,
    "name": "十字街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005266
  },
  {
    "parent_id": 230100,
    "name": "泰山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005287
  },
  {
    "parent_id": 230100,
    "name": "前进路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005292
  },
  {
    "parent_id": 230100,
    "name": "省政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005296
  },
  {
    "parent_id": 230100,
    "name": "太平桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005297
  },
  {
    "parent_id": 230100,
    "name": "城乡路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005321
  },
  {
    "parent_id": 230100,
    "name": "通江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005377
  },
  {
    "parent_id": 230100,
    "name": "铁路局",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005399
  },
  {
    "parent_id": 230100,
    "name": "新华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005401
  },
  {
    "parent_id": 230100,
    "name": "西大桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005404
  },
  {
    "parent_id": 460100,
    "name": "中山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001333
  },
  {
    "parent_id": 460100,
    "name": "海秀",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001334
  },
  {
    "parent_id": 460100,
    "name": "大同",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001335
  },
  {
    "parent_id": 460100,
    "name": "海垦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001336
  },
  {
    "parent_id": 460100,
    "name": "金龙路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001337
  },
  {
    "parent_id": 460100,
    "name": "金贸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001338
  },
  {
    "parent_id": 460100,
    "name": "金宇",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001339
  },
  {
    "parent_id": 460100,
    "name": "白龙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001342
  },
  {
    "parent_id": 460100,
    "name": "博爱",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001343
  },
  {
    "parent_id": 460100,
    "name": "海甸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001344
  },
  {
    "parent_id": 460100,
    "name": "和平南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001345
  },
  {
    "parent_id": 460100,
    "name": "蓝天",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001346
  },
  {
    "parent_id": 460100,
    "name": "滨海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005283
  },
  {
    "parent_id": 440600,
    "name": "桂城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002459
  },
  {
    "parent_id": 440600,
    "name": "石湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002464
  },
  {
    "parent_id": 440600,
    "name": "市政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002465
  },
  {
    "parent_id": 440600,
    "name": "祖庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002466
  },
  {
    "parent_id": 440600,
    "name": "汾江南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002467
  },
  {
    "parent_id": 440600,
    "name": "季华五路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002468
  },
  {
    "parent_id": 440600,
    "name": "季华园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005308
  },
  {
    "parent_id": 440400,
    "name": "南屏",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002475
  },
  {
    "parent_id": 440400,
    "name": "前山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002476
  },
  {
    "parent_id": 440400,
    "name": "翠前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002484
  },
  {
    "parent_id": 440400,
    "name": "翠微",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002485
  },
  {
    "parent_id": 440400,
    "name": "华发新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002493
  },
  {
    "parent_id": 440400,
    "name": "兰埔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002494
  },
  {
    "parent_id": 440400,
    "name": "明珠南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002495
  },
  {
    "parent_id": 440400,
    "name": "夏湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002511
  },
  {
    "parent_id": 440400,
    "name": "新涌",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002514
  },
  {
    "parent_id": 440400,
    "name": "粤海中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002519
  },
  {
    "parent_id": 440400,
    "name": "中山亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002521
  },
  {
    "parent_id": 440400,
    "name": "卓雅花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002523
  },
  {
    "parent_id": 440100,
    "name": "新华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002534
  },
  {
    "parent_id": 440100,
    "name": "北京路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002537
  },
  {
    "parent_id": 440100,
    "name": "东风东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002538
  },
  {
    "parent_id": 440100,
    "name": "东山口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002539
  },
  {
    "parent_id": 440100,
    "name": "二沙岛",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002540
  },
  {
    "parent_id": 440100,
    "name": "环市东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002541
  },
  {
    "parent_id": 440100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002542
  },
  {
    "parent_id": 440100,
    "name": "解放北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002543
  },
  {
    "parent_id": 440100,
    "name": "解放南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002544
  },
  {
    "parent_id": 440100,
    "name": "麓湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002545
  },
  {
    "parent_id": 440100,
    "name": "五羊新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002546
  },
  {
    "parent_id": 440100,
    "name": "越秀公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002547
  },
  {
    "parent_id": 440100,
    "name": "广花路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002548
  },
  {
    "parent_id": 440100,
    "name": "矿泉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002549
  },
  {
    "parent_id": 440100,
    "name": "东风西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002550
  },
  {
    "parent_id": 440100,
    "name": "岭南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002551
  },
  {
    "parent_id": 440100,
    "name": "登峰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002552
  },
  {
    "parent_id": 440100,
    "name": "大东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002553
  },
  {
    "parent_id": 440100,
    "name": "大新",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002554
  },
  {
    "parent_id": 440100,
    "name": "东川",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002555
  },
  {
    "parent_id": 440100,
    "name": "东都大世界",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002556
  },
  {
    "parent_id": 440100,
    "name": "东风",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002557
  },
  {
    "parent_id": 440100,
    "name": "东湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002558
  },
  {
    "parent_id": 440100,
    "name": "光塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002559
  },
  {
    "parent_id": 440100,
    "name": "广卫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002560
  },
  {
    "parent_id": 440100,
    "name": "海珠广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002561
  },
  {
    "parent_id": 440100,
    "name": "洪桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002562
  },
  {
    "parent_id": 440100,
    "name": "华乐",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002563
  },
  {
    "parent_id": 440100,
    "name": "黄花岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002564
  },
  {
    "parent_id": 440100,
    "name": "惠福东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002565
  },
  {
    "parent_id": 440100,
    "name": "建设",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002566
  },
  {
    "parent_id": 440100,
    "name": "锦城花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002567
  },
  {
    "parent_id": 440100,
    "name": "流花",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002568
  },
  {
    "parent_id": 440100,
    "name": "六榕",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002569
  },
  {
    "parent_id": 440100,
    "name": "梅花村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002570
  },
  {
    "parent_id": 440100,
    "name": "农林下路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002571
  },
  {
    "parent_id": 440100,
    "name": "盘福路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002572
  },
  {
    "parent_id": 440100,
    "name": "人民北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002573
  },
  {
    "parent_id": 440100,
    "name": "诗书",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002574
  },
  {
    "parent_id": 440100,
    "name": "水荫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002575
  },
  {
    "parent_id": 440100,
    "name": "淘金",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002576
  },
  {
    "parent_id": 440100,
    "name": "小北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002577
  },
  {
    "parent_id": 440100,
    "name": "沿江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002578
  },
  {
    "parent_id": 440100,
    "name": "中山二三路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002579
  },
  {
    "parent_id": 440100,
    "name": "洛溪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002588
  },
  {
    "parent_id": 440100,
    "name": "市桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002590
  },
  {
    "parent_id": 440100,
    "name": "东环",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002593
  },
  {
    "parent_id": 440100,
    "name": "南浦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002598
  },
  {
    "parent_id": 440100,
    "name": "桥南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002599
  },
  {
    "parent_id": 440100,
    "name": "沙头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002601
  },
  {
    "parent_id": 440100,
    "name": "猎德",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002607
  },
  {
    "parent_id": 440100,
    "name": "跑马场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002609
  },
  {
    "parent_id": 440100,
    "name": "前进",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002610
  },
  {
    "parent_id": 440100,
    "name": "沙河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002611
  },
  {
    "parent_id": 440100,
    "name": "石牌",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002612
  },
  {
    "parent_id": 440100,
    "name": "体育中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002613
  },
  {
    "parent_id": 440100,
    "name": "天河北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002614
  },
  {
    "parent_id": 440100,
    "name": "天河公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002615
  },
  {
    "parent_id": 440100,
    "name": "五山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002616
  },
  {
    "parent_id": 440100,
    "name": "元岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002617
  },
  {
    "parent_id": 440100,
    "name": "员村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002618
  },
  {
    "parent_id": 440100,
    "name": "东圃",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002621
  },
  {
    "parent_id": 440100,
    "name": "岗顶",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002622
  },
  {
    "parent_id": 440100,
    "name": "广州东站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002623
  },
  {
    "parent_id": 440100,
    "name": "黄村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002624
  },
  {
    "parent_id": 440100,
    "name": "林和",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002625
  },
  {
    "parent_id": 440100,
    "name": "龙口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002626
  },
  {
    "parent_id": 440100,
    "name": "沙东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002627
  },
  {
    "parent_id": 440100,
    "name": "棠下",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002628
  },
  {
    "parent_id": 440100,
    "name": "天河城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002629
  },
  {
    "parent_id": 440100,
    "name": "天园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002630
  },
  {
    "parent_id": 440100,
    "name": "冼村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002631
  },
  {
    "parent_id": 440100,
    "name": "兴华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002632
  },
  {
    "parent_id": 440100,
    "name": "燕岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002633
  },
  {
    "parent_id": 440100,
    "name": "粤垦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002634
  },
  {
    "parent_id": 440100,
    "name": "珠江新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002635
  },
  {
    "parent_id": 440100,
    "name": "鱼珠",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002645
  },
  {
    "parent_id": 440100,
    "name": "黄石",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002658
  },
  {
    "parent_id": 440100,
    "name": "机场路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002659
  },
  {
    "parent_id": 440100,
    "name": "罗冲围",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002660
  },
  {
    "parent_id": 440100,
    "name": "三元里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002661
  },
  {
    "parent_id": 440100,
    "name": "同德",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002662
  },
  {
    "parent_id": 440100,
    "name": "新市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002664
  },
  {
    "parent_id": 440100,
    "name": "白云大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002665
  },
  {
    "parent_id": 440100,
    "name": "桂花岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002666
  },
  {
    "parent_id": 440100,
    "name": "金沙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002668
  },
  {
    "parent_id": 440100,
    "name": "京溪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002669
  },
  {
    "parent_id": 440100,
    "name": "景泰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002670
  },
  {
    "parent_id": 440100,
    "name": "石井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002677
  },
  {
    "parent_id": 440100,
    "name": "松洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002678
  },
  {
    "parent_id": 440100,
    "name": "棠景",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002680
  },
  {
    "parent_id": 440100,
    "name": "嘉禾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002684
  },
  {
    "parent_id": 440100,
    "name": "滨江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002685
  },
  {
    "parent_id": 440100,
    "name": "东晓",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002686
  },
  {
    "parent_id": 440100,
    "name": "工业大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002687
  },
  {
    "parent_id": 440100,
    "name": "广州大道南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002689
  },
  {
    "parent_id": 440100,
    "name": "江海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002691
  },
  {
    "parent_id": 440100,
    "name": "江南大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002692
  },
  {
    "parent_id": 440100,
    "name": "客村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002693
  },
  {
    "parent_id": 440100,
    "name": "南洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002694
  },
  {
    "parent_id": 440100,
    "name": "琶洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002695
  },
  {
    "parent_id": 440100,
    "name": "新港",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002696
  },
  {
    "parent_id": 440100,
    "name": "昌岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002697
  },
  {
    "parent_id": 440100,
    "name": "赤岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002698
  },
  {
    "parent_id": 440100,
    "name": "凤阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002699
  },
  {
    "parent_id": 440100,
    "name": "海幢",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002700
  },
  {
    "parent_id": 440100,
    "name": "江燕路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002701
  },
  {
    "parent_id": 440100,
    "name": "龙凤",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002702
  },
  {
    "parent_id": 440100,
    "name": "明珠花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002703
  },
  {
    "parent_id": 440100,
    "name": "南华西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002704
  },
  {
    "parent_id": 440100,
    "name": "南石头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002705
  },
  {
    "parent_id": 440100,
    "name": "瑞宝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002706
  },
  {
    "parent_id": 440100,
    "name": "沙园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002707
  },
  {
    "parent_id": 440100,
    "name": "素社",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002708
  },
  {
    "parent_id": 440100,
    "name": "晓港",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002709
  },
  {
    "parent_id": 440100,
    "name": "中大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002710
  },
  {
    "parent_id": 440100,
    "name": "芳村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002711
  },
  {
    "parent_id": 440100,
    "name": "沙面",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002712
  },
  {
    "parent_id": 440100,
    "name": "上下九",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002713
  },
  {
    "parent_id": 440100,
    "name": "中山七八路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002714
  },
  {
    "parent_id": 440100,
    "name": "白鹅潭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002715
  },
  {
    "parent_id": 440100,
    "name": "白鹤洞",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002716
  },
  {
    "parent_id": 440100,
    "name": "彩虹",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002717
  },
  {
    "parent_id": 440100,
    "name": "昌华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002718
  },
  {
    "parent_id": 440100,
    "name": "多宝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002719
  },
  {
    "parent_id": 440100,
    "name": "逢源",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002720
  },
  {
    "parent_id": 440100,
    "name": "环市西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002721
  },
  {
    "parent_id": 440100,
    "name": "黄沙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002722
  },
  {
    "parent_id": 440100,
    "name": "金花",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002723
  },
  {
    "parent_id": 440100,
    "name": "坑口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002724
  },
  {
    "parent_id": 440100,
    "name": "荔湾湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002725
  },
  {
    "parent_id": 440100,
    "name": "荔湾路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002726
  },
  {
    "parent_id": 440100,
    "name": "龙津",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002727
  },
  {
    "parent_id": 440100,
    "name": "南岸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002728
  },
  {
    "parent_id": 440100,
    "name": "南源",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002729
  },
  {
    "parent_id": 440100,
    "name": "桥中",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002730
  },
  {
    "parent_id": 440100,
    "name": "西村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002731
  },
  {
    "parent_id": 440100,
    "name": "西关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002732
  },
  {
    "parent_id": 440100,
    "name": "站前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002733
  },
  {
    "parent_id": 440100,
    "name": "周门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002734
  },
  {
    "parent_id": 440100,
    "name": "中山六路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005298
  },
  {
    "parent_id": 440100,
    "name": "车陂",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005299
  },
  {
    "parent_id": 440100,
    "name": "大石",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005300
  },
  {
    "parent_id": 440300,
    "name": "后海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002784
  },
  {
    "parent_id": 440300,
    "name": "科技园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002786
  },
  {
    "parent_id": 440300,
    "name": "南头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002787
  },
  {
    "parent_id": 440300,
    "name": "南油",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002788
  },
  {
    "parent_id": 440300,
    "name": "前海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002789
  },
  {
    "parent_id": 440300,
    "name": "蛇口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002790
  },
  {
    "parent_id": 440300,
    "name": "大冲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002792
  },
  {
    "parent_id": 440300,
    "name": "桂庙路口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002793
  },
  {
    "parent_id": 440300,
    "name": "海上世界",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002794
  },
  {
    "parent_id": 440300,
    "name": "海王大厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002795
  },
  {
    "parent_id": 440300,
    "name": "南山医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002796
  },
  {
    "parent_id": 440300,
    "name": "南新路口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002797
  },
  {
    "parent_id": 440300,
    "name": "招商大厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002800
  },
  {
    "parent_id": 440300,
    "name": "蔡屋围",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002801
  },
  {
    "parent_id": 440300,
    "name": "草埔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002802
  },
  {
    "parent_id": 440300,
    "name": "翠竹",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002803
  },
  {
    "parent_id": 440300,
    "name": "东门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002804
  },
  {
    "parent_id": 440300,
    "name": "洪湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002805
  },
  {
    "parent_id": 440300,
    "name": "黄贝岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002806
  },
  {
    "parent_id": 440300,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002807
  },
  {
    "parent_id": 440300,
    "name": "泥岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002809
  },
  {
    "parent_id": 440300,
    "name": "清水河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002810
  },
  {
    "parent_id": 440300,
    "name": "水贝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002811
  },
  {
    "parent_id": 440300,
    "name": "水库",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002812
  },
  {
    "parent_id": 440300,
    "name": "笋岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002813
  },
  {
    "parent_id": 440300,
    "name": "银湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002814
  },
  {
    "parent_id": 440300,
    "name": "宝安南路沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002815
  },
  {
    "parent_id": 440300,
    "name": "东湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002816
  },
  {
    "parent_id": 440300,
    "name": "东晓",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002817
  },
  {
    "parent_id": 440300,
    "name": "独树村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002818
  },
  {
    "parent_id": 440300,
    "name": "国贸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002819
  },
  {
    "parent_id": 440300,
    "name": "红岗花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002820
  },
  {
    "parent_id": 440300,
    "name": "金稻田",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002821
  },
  {
    "parent_id": 440300,
    "name": "留医部",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002822
  },
  {
    "parent_id": 440300,
    "name": "罗湖区委",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002823
  },
  {
    "parent_id": 440300,
    "name": "人民南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002824
  },
  {
    "parent_id": 440300,
    "name": "田贝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002825
  },
  {
    "parent_id": 440300,
    "name": "文锦渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002826
  },
  {
    "parent_id": 440300,
    "name": "车公庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002827
  },
  {
    "parent_id": 440300,
    "name": "岗厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002828
  },
  {
    "parent_id": 440300,
    "name": "购物公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002829
  },
  {
    "parent_id": 440300,
    "name": "华强北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002830
  },
  {
    "parent_id": 440300,
    "name": "皇岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002831
  },
  {
    "parent_id": 440300,
    "name": "景田",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002832
  },
  {
    "parent_id": 440300,
    "name": "莲花北村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002833
  },
  {
    "parent_id": 440300,
    "name": "莲花二村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002834
  },
  {
    "parent_id": 440300,
    "name": "莲花三村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002835
  },
  {
    "parent_id": 440300,
    "name": "莲花一村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002836
  },
  {
    "parent_id": 440300,
    "name": "沙头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002837
  },
  {
    "parent_id": 440300,
    "name": "上步",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002838
  },
  {
    "parent_id": 440300,
    "name": "上梅林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002839
  },
  {
    "parent_id": 440300,
    "name": "下梅林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002840
  },
  {
    "parent_id": 440300,
    "name": "香蜜湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002841
  },
  {
    "parent_id": 440300,
    "name": "新洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002842
  },
  {
    "parent_id": 440300,
    "name": "园岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002843
  },
  {
    "parent_id": 440300,
    "name": "中信广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002844
  },
  {
    "parent_id": 440300,
    "name": "竹子林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002845
  },
  {
    "parent_id": 440300,
    "name": "八卦岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002846
  },
  {
    "parent_id": 440300,
    "name": "白沙岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002847
  },
  {
    "parent_id": 440300,
    "name": "保税区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002848
  },
  {
    "parent_id": 440300,
    "name": "赤尾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002849
  },
  {
    "parent_id": 440300,
    "name": "福华新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002850
  },
  {
    "parent_id": 440300,
    "name": "福民新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002851
  },
  {
    "parent_id": 440300,
    "name": "福田区委",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002852
  },
  {
    "parent_id": 440300,
    "name": "黄木岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002853
  },
  {
    "parent_id": 440300,
    "name": "荔枝公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002854
  },
  {
    "parent_id": 440300,
    "name": "沙尾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002855
  },
  {
    "parent_id": 440300,
    "name": "沙嘴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002856
  },
  {
    "parent_id": 440300,
    "name": "上沙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002857
  },
  {
    "parent_id": 440300,
    "name": "石厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002858
  },
  {
    "parent_id": 440300,
    "name": "下沙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002859
  },
  {
    "parent_id": 440300,
    "name": "益田村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002860
  },
  {
    "parent_id": 440300,
    "name": "振华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002861
  },
  {
    "parent_id": 440300,
    "name": "布吉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002864
  },
  {
    "parent_id": 440300,
    "name": "大芬村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002866
  },
  {
    "parent_id": 440300,
    "name": "桂芳园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002867
  },
  {
    "parent_id": 440300,
    "name": "康桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002868
  },
  {
    "parent_id": 440300,
    "name": "龙珠花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002870
  },
  {
    "parent_id": 440300,
    "name": "万科城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002873
  },
  {
    "parent_id": 440300,
    "name": "理想新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002874
  },
  {
    "parent_id": 440300,
    "name": "龙华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002875
  },
  {
    "parent_id": 440300,
    "name": "沙井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002876
  },
  {
    "parent_id": 440300,
    "name": "松岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002877
  },
  {
    "parent_id": 440300,
    "name": "西乡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002878
  },
  {
    "parent_id": 440300,
    "name": "新安",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002879
  },
  {
    "parent_id": 440300,
    "name": "翻身路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002880
  },
  {
    "parent_id": 440300,
    "name": "锦绣江南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002882
  },
  {
    "parent_id": 440300,
    "name": "美丽365花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002883
  },
  {
    "parent_id": 440300,
    "name": "民治",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002884
  },
  {
    "parent_id": 440300,
    "name": "潜龙花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002885
  },
  {
    "parent_id": 440300,
    "name": "滢水山庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002888
  },
  {
    "parent_id": 440300,
    "name": "白石洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005302
  },
  {
    "parent_id": 440300,
    "name": "福永",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005303
  },
  {
    "parent_id": 440300,
    "name": "坂田",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005304
  },
  {
    "parent_id": 450100,
    "name": "北湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003793
  },
  {
    "parent_id": 450100,
    "name": "衡阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003794
  },
  {
    "parent_id": 450100,
    "name": "上尧",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003795
  },
  {
    "parent_id": 450100,
    "name": "安宁",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003796
  },
  {
    "parent_id": 450100,
    "name": "北际南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003797
  },
  {
    "parent_id": 450100,
    "name": "广西财经学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003800
  },
  {
    "parent_id": 450100,
    "name": "广西大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003801
  },
  {
    "parent_id": 450100,
    "name": "华强",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003802
  },
  {
    "parent_id": 450100,
    "name": "火炬路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003803
  },
  {
    "parent_id": 450100,
    "name": "龙腾路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003804
  },
  {
    "parent_id": 450100,
    "name": "鲁班路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003805
  },
  {
    "parent_id": 450100,
    "name": "明秀小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003806
  },
  {
    "parent_id": 450100,
    "name": "区工商局",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003807
  },
  {
    "parent_id": 450100,
    "name": "新阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003810
  },
  {
    "parent_id": 450100,
    "name": "秀灵路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003811
  },
  {
    "parent_id": 450100,
    "name": "秀厢大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003812
  },
  {
    "parent_id": 450100,
    "name": "中华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003813
  },
  {
    "parent_id": 450100,
    "name": "中尧路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003814
  },
  {
    "parent_id": 450100,
    "name": "菠萝岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003825
  },
  {
    "parent_id": 450100,
    "name": "翠湖新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003826
  },
  {
    "parent_id": 450100,
    "name": "二医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003827
  },
  {
    "parent_id": 450100,
    "name": "金湾花城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003829
  },
  {
    "parent_id": 450100,
    "name": "丽江村小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003830
  },
  {
    "parent_id": 450100,
    "name": "南国花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003832
  },
  {
    "parent_id": 450100,
    "name": "荣和新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003833
  },
  {
    "parent_id": 450100,
    "name": "石柱岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003834
  },
  {
    "parent_id": 450100,
    "name": "亭洪路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003836
  },
  {
    "parent_id": 450100,
    "name": "五一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003838
  },
  {
    "parent_id": 450100,
    "name": "新竹",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003840
  },
  {
    "parent_id": 450100,
    "name": "南湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003841
  },
  {
    "parent_id": 450100,
    "name": "碧湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003842
  },
  {
    "parent_id": 450100,
    "name": "长湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003843
  },
  {
    "parent_id": 450100,
    "name": "东宝路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003844
  },
  {
    "parent_id": 450100,
    "name": "古城路口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003846
  },
  {
    "parent_id": 450100,
    "name": "广西艺术学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003847
  },
  {
    "parent_id": 450100,
    "name": "教育路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003849
  },
  {
    "parent_id": 450100,
    "name": "金花茶公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003850
  },
  {
    "parent_id": 450100,
    "name": "津头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003851
  },
  {
    "parent_id": 450100,
    "name": "麻村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003853
  },
  {
    "parent_id": 450100,
    "name": "民族大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003854
  },
  {
    "parent_id": 450100,
    "name": "南环路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003855
  },
  {
    "parent_id": 450100,
    "name": "五象广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003856
  },
  {
    "parent_id": 450100,
    "name": "新兴苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003857
  },
  {
    "parent_id": 450100,
    "name": "医科大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003858
  },
  {
    "parent_id": 450100,
    "name": "中山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003859
  },
  {
    "parent_id": 450100,
    "name": "人民公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003860
  },
  {
    "parent_id": 450100,
    "name": "民生",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003863
  },
  {
    "parent_id": 450100,
    "name": "民族商场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003864
  },
  {
    "parent_id": 450100,
    "name": "明秀东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003865
  },
  {
    "parent_id": 450100,
    "name": "望州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003867
  },
  {
    "parent_id": 450100,
    "name": "望州南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003868
  },
  {
    "parent_id": 450100,
    "name": "文化宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003869
  },
  {
    "parent_id": 450100,
    "name": "燕子岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003871
  },
  {
    "parent_id": 450100,
    "name": "朝阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005224
  },
  {
    "parent_id": 450100,
    "name": "大沙田",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005319
  },
  {
    "parent_id": 450900,
    "name": "玉城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003875
  },
  {
    "parent_id": 420100,
    "name": "民族",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003648
  },
  {
    "parent_id": 420100,
    "name": "前进",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003649
  },
  {
    "parent_id": 420100,
    "name": "唐家墩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003650
  },
  {
    "parent_id": 420100,
    "name": "武广",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003651
  },
  {
    "parent_id": 420100,
    "name": "西北湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003652
  },
  {
    "parent_id": 420100,
    "name": "北湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003653
  },
  {
    "parent_id": 420100,
    "name": "常青路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003654
  },
  {
    "parent_id": 420100,
    "name": "汉兴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003655
  },
  {
    "parent_id": 420100,
    "name": "民权",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003656
  },
  {
    "parent_id": 420100,
    "name": "民意",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003657
  },
  {
    "parent_id": 420100,
    "name": "水塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003658
  },
  {
    "parent_id": 420100,
    "name": "万松",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003659
  },
  {
    "parent_id": 420100,
    "name": "王家墩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003660
  },
  {
    "parent_id": 420100,
    "name": "友谊路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003661
  },
  {
    "parent_id": 420100,
    "name": "中山公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003662
  },
  {
    "parent_id": 420100,
    "name": "二七",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003675
  },
  {
    "parent_id": 420100,
    "name": "解放公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003676
  },
  {
    "parent_id": 420100,
    "name": "客运港",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003677
  },
  {
    "parent_id": 420100,
    "name": "竹叶山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003678
  },
  {
    "parent_id": 420100,
    "name": "车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003679
  },
  {
    "parent_id": 420100,
    "name": "大智",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003681
  },
  {
    "parent_id": 420100,
    "name": "后湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003684
  },
  {
    "parent_id": 420100,
    "name": "花桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003685
  },
  {
    "parent_id": 420100,
    "name": "建设大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003686
  },
  {
    "parent_id": 420100,
    "name": "江汉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003687
  },
  {
    "parent_id": 420100,
    "name": "江滩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003688
  },
  {
    "parent_id": 420100,
    "name": "劳动",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003689
  },
  {
    "parent_id": 420100,
    "name": "球场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003690
  },
  {
    "parent_id": 420100,
    "name": "球场街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003691
  },
  {
    "parent_id": 420100,
    "name": "三阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003692
  },
  {
    "parent_id": 420100,
    "name": "四唯",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003693
  },
  {
    "parent_id": 420100,
    "name": "台北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003694
  },
  {
    "parent_id": 420100,
    "name": "西马",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003695
  },
  {
    "parent_id": 420100,
    "name": "一元",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003697
  },
  {
    "parent_id": 420100,
    "name": "永清",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003698
  },
  {
    "parent_id": 420100,
    "name": "和平大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003716
  },
  {
    "parent_id": 420100,
    "name": "广埠屯",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003724
  },
  {
    "parent_id": 420100,
    "name": "街道口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003725
  },
  {
    "parent_id": 420100,
    "name": "鲁巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003726
  },
  {
    "parent_id": 420100,
    "name": "徐东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003727
  },
  {
    "parent_id": 420100,
    "name": "卓刀泉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003728
  },
  {
    "parent_id": 420100,
    "name": "白沙洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003729
  },
  {
    "parent_id": 420100,
    "name": "陈家湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003730
  },
  {
    "parent_id": 420100,
    "name": "关山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003732
  },
  {
    "parent_id": 420100,
    "name": "光谷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003733
  },
  {
    "parent_id": 420100,
    "name": "红旗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003734
  },
  {
    "parent_id": 420100,
    "name": "珞南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003736
  },
  {
    "parent_id": 420100,
    "name": "珞狮南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003737
  },
  {
    "parent_id": 420100,
    "name": "南湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003738
  },
  {
    "parent_id": 420100,
    "name": "积玉桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003748
  },
  {
    "parent_id": 420100,
    "name": "水果湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003749
  },
  {
    "parent_id": 420100,
    "name": "武昌火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003750
  },
  {
    "parent_id": 420100,
    "name": "武泰闸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003751
  },
  {
    "parent_id": 420100,
    "name": "小东门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003752
  },
  {
    "parent_id": 420100,
    "name": "余家头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003753
  },
  {
    "parent_id": 420100,
    "name": "阅马场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003754
  },
  {
    "parent_id": 420100,
    "name": "中北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003755
  },
  {
    "parent_id": 420100,
    "name": "中南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003756
  },
  {
    "parent_id": 420100,
    "name": "大东门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003757
  },
  {
    "parent_id": 420100,
    "name": "东湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003758
  },
  {
    "parent_id": 420100,
    "name": "黄鹤楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003759
  },
  {
    "parent_id": 420100,
    "name": "粮道街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003760
  },
  {
    "parent_id": 420100,
    "name": "珞珈山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003761
  },
  {
    "parent_id": 420100,
    "name": "首义路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003762
  },
  {
    "parent_id": 420100,
    "name": "司门口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003763
  },
  {
    "parent_id": 420100,
    "name": "武珞路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003764
  },
  {
    "parent_id": 420100,
    "name": "新河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003765
  },
  {
    "parent_id": 420100,
    "name": "徐家棚",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003766
  },
  {
    "parent_id": 420100,
    "name": "杨园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003767
  },
  {
    "parent_id": 420100,
    "name": "友谊大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003768
  },
  {
    "parent_id": 420100,
    "name": "紫阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003769
  },
  {
    "parent_id": 420100,
    "name": "汉正街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003770
  },
  {
    "parent_id": 420100,
    "name": "硚口路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003771
  },
  {
    "parent_id": 420100,
    "name": "宗关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003772
  },
  {
    "parent_id": 420100,
    "name": "满春",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003773
  },
  {
    "parent_id": 420100,
    "name": "宝丰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003774
  },
  {
    "parent_id": 420100,
    "name": "崇仁",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003775
  },
  {
    "parent_id": 420100,
    "name": "韩家墩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003776
  },
  {
    "parent_id": 420100,
    "name": "汉水桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003777
  },
  {
    "parent_id": 420100,
    "name": "汉中",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003778
  },
  {
    "parent_id": 420100,
    "name": "六角亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003779
  },
  {
    "parent_id": 420100,
    "name": "荣华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003780
  },
  {
    "parent_id": 420100,
    "name": "鹦鹉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003782
  },
  {
    "parent_id": 420100,
    "name": "月湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003783
  },
  {
    "parent_id": 420100,
    "name": "钟家村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003784
  },
  {
    "parent_id": 420100,
    "name": "翠微",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003785
  },
  {
    "parent_id": 420100,
    "name": "建桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003786
  },
  {
    "parent_id": 420100,
    "name": "江汉二桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003787
  },
  {
    "parent_id": 420100,
    "name": "琴断口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003788
  },
  {
    "parent_id": 420100,
    "name": "晴川",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003789
  },
  {
    "parent_id": 420100,
    "name": "王家湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003790
  },
  {
    "parent_id": 420100,
    "name": "五里墩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003791
  },
  {
    "parent_id": 420100,
    "name": "汉口火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005289
  },
  {
    "parent_id": 430100,
    "name": "二马路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000964
  },
  {
    "parent_id": 430100,
    "name": "烈士公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000968
  },
  {
    "parent_id": 430100,
    "name": "伍家岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000970
  },
  {
    "parent_id": 430100,
    "name": "湘雅医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000971
  },
  {
    "parent_id": 430100,
    "name": "营盘路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000972
  },
  {
    "parent_id": 430100,
    "name": "车站北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000973
  },
  {
    "parent_id": 430100,
    "name": "松桂园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000976
  },
  {
    "parent_id": 430100,
    "name": "太平街口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000977
  },
  {
    "parent_id": 430100,
    "name": "北正街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000978
  },
  {
    "parent_id": 430100,
    "name": "蔡锷北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000979
  },
  {
    "parent_id": 430100,
    "name": "德雅村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000980
  },
  {
    "parent_id": 430100,
    "name": "德雅路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000981
  },
  {
    "parent_id": 430100,
    "name": "东风路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000982
  },
  {
    "parent_id": 430100,
    "name": "动物园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000983
  },
  {
    "parent_id": 430100,
    "name": "华夏路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000986
  },
  {
    "parent_id": 430100,
    "name": "开福寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000989
  },
  {
    "parent_id": 430100,
    "name": "麻园岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000992
  },
  {
    "parent_id": 430100,
    "name": "潘家坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000993
  },
  {
    "parent_id": 430100,
    "name": "清水塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000994
  },
  {
    "parent_id": 430100,
    "name": "上大垅",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000996
  },
  {
    "parent_id": 430100,
    "name": "省博物馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000997
  },
  {
    "parent_id": 430100,
    "name": "通泰街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000999
  },
  {
    "parent_id": 430100,
    "name": "王家巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001000
  },
  {
    "parent_id": 430100,
    "name": "望麓园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001001
  },
  {
    "parent_id": 430100,
    "name": "文昌阁",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001002
  },
  {
    "parent_id": 430100,
    "name": "西长街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001003
  },
  {
    "parent_id": 430100,
    "name": "湘江中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001004
  },
  {
    "parent_id": 430100,
    "name": "湘雅路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001005
  },
  {
    "parent_id": 430100,
    "name": "新河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001006
  },
  {
    "parent_id": 430100,
    "name": "兴汉门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001007
  },
  {
    "parent_id": 430100,
    "name": "砚瓦池",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001008
  },
  {
    "parent_id": 430100,
    "name": "油铺街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001009
  },
  {
    "parent_id": 430100,
    "name": "中山亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001010
  },
  {
    "parent_id": 430100,
    "name": "水风井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001011
  },
  {
    "parent_id": 430100,
    "name": "定王台",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001012
  },
  {
    "parent_id": 430100,
    "name": "黄兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001013
  },
  {
    "parent_id": 430100,
    "name": "韭菜园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001014
  },
  {
    "parent_id": 430100,
    "name": "马王堆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001015
  },
  {
    "parent_id": 430100,
    "name": "五里牌",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001017
  },
  {
    "parent_id": 430100,
    "name": "湘湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001018
  },
  {
    "parent_id": 430100,
    "name": "袁家岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001019
  },
  {
    "parent_id": 430100,
    "name": "八一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001020
  },
  {
    "parent_id": 430100,
    "name": "朝阳街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001021
  },
  {
    "parent_id": 430100,
    "name": "朝阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001022
  },
  {
    "parent_id": 430100,
    "name": "东屯渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001023
  },
  {
    "parent_id": 430100,
    "name": "芙蓉广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001024
  },
  {
    "parent_id": 430100,
    "name": "芙蓉苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001025
  },
  {
    "parent_id": 430100,
    "name": "芙蓉中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001026
  },
  {
    "parent_id": 430100,
    "name": "府后街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001027
  },
  {
    "parent_id": 430100,
    "name": "高岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001028
  },
  {
    "parent_id": 430100,
    "name": "荷花路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001029
  },
  {
    "parent_id": 430100,
    "name": "荷花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001030
  },
  {
    "parent_id": 430100,
    "name": "火星",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001031
  },
  {
    "parent_id": 430100,
    "name": "锦泰广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001032
  },
  {
    "parent_id": 430100,
    "name": "凌霄路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001033
  },
  {
    "parent_id": 430100,
    "name": "浏城桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001034
  },
  {
    "parent_id": 430100,
    "name": "浏正街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001035
  },
  {
    "parent_id": 430100,
    "name": "人民路立交桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001037
  },
  {
    "parent_id": 430100,
    "name": "人民中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001038
  },
  {
    "parent_id": 430100,
    "name": "三湘大市场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001039
  },
  {
    "parent_id": 430100,
    "name": "识字岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001040
  },
  {
    "parent_id": 430100,
    "name": "曙光路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001041
  },
  {
    "parent_id": 430100,
    "name": "司门口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001042
  },
  {
    "parent_id": 430100,
    "name": "万家丽",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001043
  },
  {
    "parent_id": 430100,
    "name": "文艺路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001044
  },
  {
    "parent_id": 430100,
    "name": "五一大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001045
  },
  {
    "parent_id": 430100,
    "name": "湘雅二医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001046
  },
  {
    "parent_id": 430100,
    "name": "燕山街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001047
  },
  {
    "parent_id": 430100,
    "name": "杨家山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001048
  },
  {
    "parent_id": 430100,
    "name": "远大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001049
  },
  {
    "parent_id": 430100,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001051
  },
  {
    "parent_id": 430100,
    "name": "车站中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001052
  },
  {
    "parent_id": 430100,
    "name": "望月湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001058
  },
  {
    "parent_id": 430100,
    "name": "白沙液街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001063
  },
  {
    "parent_id": 430100,
    "name": "枫林一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001066
  },
  {
    "parent_id": 430100,
    "name": "高叶塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001067
  },
  {
    "parent_id": 430100,
    "name": "桔子洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001070
  },
  {
    "parent_id": 430100,
    "name": "麓山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001073
  },
  {
    "parent_id": 430100,
    "name": "天马山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001077
  },
  {
    "parent_id": 430100,
    "name": "王陵公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001079
  },
  {
    "parent_id": 430100,
    "name": "新民路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001086
  },
  {
    "parent_id": 430100,
    "name": "溁湾镇",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001089
  },
  {
    "parent_id": 430100,
    "name": "窑岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001092
  },
  {
    "parent_id": 430100,
    "name": "茶园坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001093
  },
  {
    "parent_id": 430100,
    "name": "长岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001094
  },
  {
    "parent_id": 430100,
    "name": "东塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001095
  },
  {
    "parent_id": 430100,
    "name": "高桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001096
  },
  {
    "parent_id": 430100,
    "name": "砂子塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001098
  },
  {
    "parent_id": 430100,
    "name": "韶山南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001099
  },
  {
    "parent_id": 430100,
    "name": "狮子山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001100
  },
  {
    "parent_id": 430100,
    "name": "新星小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001101
  },
  {
    "parent_id": 430100,
    "name": "雨花亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001102
  },
  {
    "parent_id": 430100,
    "name": "左家塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001103
  },
  {
    "parent_id": 430100,
    "name": "曹家坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001104
  },
  {
    "parent_id": 430100,
    "name": "芙蓉区政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001105
  },
  {
    "parent_id": 430100,
    "name": "广济桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001106
  },
  {
    "parent_id": 430100,
    "name": "五一村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001107
  },
  {
    "parent_id": 430100,
    "name": "小林子冲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001108
  },
  {
    "parent_id": 430100,
    "name": "城南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001109
  },
  {
    "parent_id": 430100,
    "name": "马家冲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001110
  },
  {
    "parent_id": 430100,
    "name": "雅礼中学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001111
  },
  {
    "parent_id": 430100,
    "name": "阿弥岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001113
  },
  {
    "parent_id": 430100,
    "name": "长沙卷烟厂",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001114
  },
  {
    "parent_id": 430100,
    "name": "赤岗冲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001115
  },
  {
    "parent_id": 430100,
    "name": "光南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001117
  },
  {
    "parent_id": 430100,
    "name": "桂花公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001119
  },
  {
    "parent_id": 430100,
    "name": "航空路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001120
  },
  {
    "parent_id": 430100,
    "name": "红花坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001121
  },
  {
    "parent_id": 430100,
    "name": "井湾子",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001122
  },
  {
    "parent_id": 430100,
    "name": "桔园小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001123
  },
  {
    "parent_id": 430100,
    "name": "劳动西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001124
  },
  {
    "parent_id": 430100,
    "name": "劳动中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001125
  },
  {
    "parent_id": 430100,
    "name": "牛角塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001126
  },
  {
    "parent_id": 430100,
    "name": "七里庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001127
  },
  {
    "parent_id": 430100,
    "name": "曲塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001128
  },
  {
    "parent_id": 430100,
    "name": "韶山中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001129
  },
  {
    "parent_id": 430100,
    "name": "树木岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001130
  },
  {
    "parent_id": 430100,
    "name": "王家冲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001131
  },
  {
    "parent_id": 430100,
    "name": "香樟路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001132
  },
  {
    "parent_id": 430100,
    "name": "雅塘村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001133
  },
  {
    "parent_id": 430100,
    "name": "梓园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001136
  },
  {
    "parent_id": 430100,
    "name": "黄土岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001137
  },
  {
    "parent_id": 430100,
    "name": "友谊路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001138
  },
  {
    "parent_id": 430100,
    "name": "裕南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001139
  },
  {
    "parent_id": 430100,
    "name": "赤岭路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001140
  },
  {
    "parent_id": 430100,
    "name": "都正街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001141
  },
  {
    "parent_id": 430100,
    "name": "芙蓉南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001142
  },
  {
    "parent_id": 430100,
    "name": "浦沅",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001143
  },
  {
    "parent_id": 430100,
    "name": "省政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001144
  },
  {
    "parent_id": 430100,
    "name": "白沙井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001145
  },
  {
    "parent_id": 430100,
    "name": "白沙路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001146
  },
  {
    "parent_id": 430100,
    "name": "碧湘街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001147
  },
  {
    "parent_id": 430100,
    "name": "长郡中学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001148
  },
  {
    "parent_id": 430100,
    "name": "长沙理工大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001149
  },
  {
    "parent_id": 430100,
    "name": "第一师范",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001150
  },
  {
    "parent_id": 430100,
    "name": "东瓜山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001151
  },
  {
    "parent_id": 430100,
    "name": "广厦新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001152
  },
  {
    "parent_id": 430100,
    "name": "金盆岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001154
  },
  {
    "parent_id": 430100,
    "name": "劳动广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001155
  },
  {
    "parent_id": 430100,
    "name": "南湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001156
  },
  {
    "parent_id": 430100,
    "name": "南门口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001158
  },
  {
    "parent_id": 430100,
    "name": "坡子街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001159
  },
  {
    "parent_id": 430100,
    "name": "青园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001160
  },
  {
    "parent_id": 430100,
    "name": "沙河街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001161
  },
  {
    "parent_id": 430100,
    "name": "书院路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001162
  },
  {
    "parent_id": 430100,
    "name": "书院南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001163
  },
  {
    "parent_id": 430100,
    "name": "天剑路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001164
  },
  {
    "parent_id": 430100,
    "name": "天心阁",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001165
  },
  {
    "parent_id": 430100,
    "name": "涂家冲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001166
  },
  {
    "parent_id": 430100,
    "name": "五凌电力",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001167
  },
  {
    "parent_id": 430100,
    "name": "西牌楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001168
  },
  {
    "parent_id": 430100,
    "name": "杏花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001170
  },
  {
    "parent_id": 430100,
    "name": "学院街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001171
  },
  {
    "parent_id": 430100,
    "name": "仰天湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001172
  },
  {
    "parent_id": 430100,
    "name": "铁道学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001173
  },
  {
    "parent_id": 430100,
    "name": "五一广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005123
  },
  {
    "parent_id": 430100,
    "name": "侯家塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005295
  },
  {
    "parent_id": 410100,
    "name": "金水路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004899
  },
  {
    "parent_id": 410100,
    "name": "省体育馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004900
  },
  {
    "parent_id": 410100,
    "name": "省政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004901
  },
  {
    "parent_id": 410100,
    "name": "北环路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004902
  },
  {
    "parent_id": 410100,
    "name": "北林路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004903
  },
  {
    "parent_id": 410100,
    "name": "财经学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004904
  },
  {
    "parent_id": 410100,
    "name": "创新大厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004905
  },
  {
    "parent_id": 410100,
    "name": "大铺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004906
  },
  {
    "parent_id": 410100,
    "name": "大石桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004907
  },
  {
    "parent_id": 410100,
    "name": "东风路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004908
  },
  {
    "parent_id": 410100,
    "name": "东建材",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004909
  },
  {
    "parent_id": 410100,
    "name": "东里路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004910
  },
  {
    "parent_id": 410100,
    "name": "二环支路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004911
  },
  {
    "parent_id": 410100,
    "name": "防疫路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004912
  },
  {
    "parent_id": 410100,
    "name": "丰产路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004913
  },
  {
    "parent_id": 410100,
    "name": "丰庆路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004914
  },
  {
    "parent_id": 410100,
    "name": "凤凰台",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004915
  },
  {
    "parent_id": 410100,
    "name": "岗杜北街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004916
  },
  {
    "parent_id": 410100,
    "name": "工人新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004917
  },
  {
    "parent_id": 410100,
    "name": "国基路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004918
  },
  {
    "parent_id": 410100,
    "name": "海滩街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004919
  },
  {
    "parent_id": 410100,
    "name": "花园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004920
  },
  {
    "parent_id": 410100,
    "name": "俭学街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004922
  },
  {
    "parent_id": 410100,
    "name": "健康路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004923
  },
  {
    "parent_id": 410100,
    "name": "经八路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004924
  },
  {
    "parent_id": 410100,
    "name": "经二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004925
  },
  {
    "parent_id": 410100,
    "name": "经六路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004926
  },
  {
    "parent_id": 410100,
    "name": "经五路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004927
  },
  {
    "parent_id": 410100,
    "name": "开元小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004928
  },
  {
    "parent_id": 410100,
    "name": "民航路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004930
  },
  {
    "parent_id": 410100,
    "name": "南阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004931
  },
  {
    "parent_id": 410100,
    "name": "农业路沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004932
  },
  {
    "parent_id": 410100,
    "name": "群办路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004933
  },
  {
    "parent_id": 410100,
    "name": "人民路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004934
  },
  {
    "parent_id": 410100,
    "name": "任寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004935
  },
  {
    "parent_id": 410100,
    "name": "胜岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004937
  },
  {
    "parent_id": 410100,
    "name": "司家庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004938
  },
  {
    "parent_id": 410100,
    "name": "宋寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004939
  },
  {
    "parent_id": 410100,
    "name": "索凌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004940
  },
  {
    "parent_id": 410100,
    "name": "纬二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004941
  },
  {
    "parent_id": 410100,
    "name": "未来路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004942
  },
  {
    "parent_id": 410100,
    "name": "文化路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004943
  },
  {
    "parent_id": 410100,
    "name": "西里路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004944
  },
  {
    "parent_id": 410100,
    "name": "新通桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004946
  },
  {
    "parent_id": 410100,
    "name": "信息学院路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004947
  },
  {
    "parent_id": 410100,
    "name": "徐寨路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004948
  },
  {
    "parent_id": 410100,
    "name": "燕庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004949
  },
  {
    "parent_id": 410100,
    "name": "姚寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004950
  },
  {
    "parent_id": 410100,
    "name": "优胜北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004951
  },
  {
    "parent_id": 410100,
    "name": "优胜南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004952
  },
  {
    "parent_id": 410100,
    "name": "郑汴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004953
  },
  {
    "parent_id": 410100,
    "name": "政六街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004954
  },
  {
    "parent_id": 410100,
    "name": "政四街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004955
  },
  {
    "parent_id": 410100,
    "name": "政五街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004956
  },
  {
    "parent_id": 410100,
    "name": "中方园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004957
  },
  {
    "parent_id": 410100,
    "name": "紫荆山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004958
  },
  {
    "parent_id": 410100,
    "name": "二里岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004959
  },
  {
    "parent_id": 410100,
    "name": "南关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004960
  },
  {
    "parent_id": 410100,
    "name": "北顺城街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004961
  },
  {
    "parent_id": 410100,
    "name": "北下街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004962
  },
  {
    "parent_id": 410100,
    "name": "城东南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004963
  },
  {
    "parent_id": 410100,
    "name": "城南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004964
  },
  {
    "parent_id": 410100,
    "name": "东大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004965
  },
  {
    "parent_id": 410100,
    "name": "管城西街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004967
  },
  {
    "parent_id": 410100,
    "name": "航海东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004968
  },
  {
    "parent_id": 410100,
    "name": "货站街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004969
  },
  {
    "parent_id": 410100,
    "name": "金色港湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004970
  },
  {
    "parent_id": 410100,
    "name": "南仓街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004971
  },
  {
    "parent_id": 410100,
    "name": "南大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004972
  },
  {
    "parent_id": 410100,
    "name": "南顺城街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004973
  },
  {
    "parent_id": 410100,
    "name": "商城路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004974
  },
  {
    "parent_id": 410100,
    "name": "五里堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004975
  },
  {
    "parent_id": 410100,
    "name": "西大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004976
  },
  {
    "parent_id": 410100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004977
  },
  {
    "parent_id": 410100,
    "name": "京广路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004978
  },
  {
    "parent_id": 410100,
    "name": "保全街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004979
  },
  {
    "parent_id": 410100,
    "name": "长江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004980
  },
  {
    "parent_id": 410100,
    "name": "陈庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004981
  },
  {
    "parent_id": 410100,
    "name": "德化街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004982
  },
  {
    "parent_id": 410100,
    "name": "冯庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004983
  },
  {
    "parent_id": 410100,
    "name": "福华街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004984
  },
  {
    "parent_id": 410100,
    "name": "航海中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004985
  },
  {
    "parent_id": 410100,
    "name": "合作路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004986
  },
  {
    "parent_id": 410100,
    "name": "淮北街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004987
  },
  {
    "parent_id": 410100,
    "name": "建设东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004988
  },
  {
    "parent_id": 410100,
    "name": "建新街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004989
  },
  {
    "parent_id": 410100,
    "name": "建中街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004990
  },
  {
    "parent_id": 410100,
    "name": "交通路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004991
  },
  {
    "parent_id": 410100,
    "name": "洁云路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004992
  },
  {
    "parent_id": 410100,
    "name": "解放路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004993
  },
  {
    "parent_id": 410100,
    "name": "金祥花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004994
  },
  {
    "parent_id": 410100,
    "name": "康复前街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004995
  },
  {
    "parent_id": 410100,
    "name": "康复中街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004996
  },
  {
    "parent_id": 410100,
    "name": "老代庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004997
  },
  {
    "parent_id": 410100,
    "name": "绿城广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004998
  },
  {
    "parent_id": 410100,
    "name": "蜜蜂张",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004999
  },
  {
    "parent_id": 410100,
    "name": "铭功路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005000
  },
  {
    "parent_id": 410100,
    "name": "齐礼阎",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005001
  },
  {
    "parent_id": 410100,
    "name": "庆丰街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005002
  },
  {
    "parent_id": 410100,
    "name": "人民公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005003
  },
  {
    "parent_id": 410100,
    "name": "桃源路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005004
  },
  {
    "parent_id": 410100,
    "name": "铁英街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005005
  },
  {
    "parent_id": 410100,
    "name": "兴华北街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005006
  },
  {
    "parent_id": 410100,
    "name": "兴华南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005007
  },
  {
    "parent_id": 410100,
    "name": "一马路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005008
  },
  {
    "parent_id": 410100,
    "name": "永安街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005009
  },
  {
    "parent_id": 410100,
    "name": "郑密路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005010
  },
  {
    "parent_id": 410100,
    "name": "郑州铁路局",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005011
  },
  {
    "parent_id": 410100,
    "name": "中原东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005012
  },
  {
    "parent_id": 410100,
    "name": "儿童公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005013
  },
  {
    "parent_id": 410100,
    "name": "棉纺路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005014
  },
  {
    "parent_id": 410100,
    "name": "秦岭路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005015
  },
  {
    "parent_id": 410100,
    "name": "汝河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005016
  },
  {
    "parent_id": 410100,
    "name": "桐柏路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005017
  },
  {
    "parent_id": 410100,
    "name": "文化宫路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005018
  },
  {
    "parent_id": 410100,
    "name": "百花路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005019
  },
  {
    "parent_id": 410100,
    "name": "帝湖花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005020
  },
  {
    "parent_id": 410100,
    "name": "纺织大世界",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005021
  },
  {
    "parent_id": 410100,
    "name": "伏牛路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005022
  },
  {
    "parent_id": 410100,
    "name": "岗坡路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005023
  },
  {
    "parent_id": 410100,
    "name": "工人路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005024
  },
  {
    "parent_id": 410100,
    "name": "航海西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005025
  },
  {
    "parent_id": 410100,
    "name": "湖光苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005026
  },
  {
    "parent_id": 410100,
    "name": "互助路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005027
  },
  {
    "parent_id": 410100,
    "name": "华淮小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005028
  },
  {
    "parent_id": 410100,
    "name": "华山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005029
  },
  {
    "parent_id": 410100,
    "name": "淮河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005030
  },
  {
    "parent_id": 410100,
    "name": "建设路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005031
  },
  {
    "parent_id": 410100,
    "name": "林山寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005032
  },
  {
    "parent_id": 410100,
    "name": "陇海西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005033
  },
  {
    "parent_id": 410100,
    "name": "绿东村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005034
  },
  {
    "parent_id": 410100,
    "name": "洛河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005035
  },
  {
    "parent_id": 410100,
    "name": "前进路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005036
  },
  {
    "parent_id": 410100,
    "name": "冉屯路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005037
  },
  {
    "parent_id": 410100,
    "name": "三官庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005038
  },
  {
    "parent_id": 410100,
    "name": "十里铺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005039
  },
  {
    "parent_id": 410100,
    "name": "市场街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005040
  },
  {
    "parent_id": 410100,
    "name": "市委",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005041
  },
  {
    "parent_id": 410100,
    "name": "嵩山北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005042
  },
  {
    "parent_id": 410100,
    "name": "西环路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005043
  },
  {
    "parent_id": 410100,
    "name": "西站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005044
  },
  {
    "parent_id": 410100,
    "name": "协作路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005045
  },
  {
    "parent_id": 410100,
    "name": "伊河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005047
  },
  {
    "parent_id": 410100,
    "name": "刘寨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005049
  },
  {
    "parent_id": 410100,
    "name": "城东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005257
  },
  {
    "parent_id": 410100,
    "name": "大学路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005282
  },
  {
    "parent_id": 410100,
    "name": "碧沙岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005284
  },
  {
    "parent_id": 350200,
    "name": "禾祥西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003891
  },
  {
    "parent_id": 350200,
    "name": "湖滨北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003892
  },
  {
    "parent_id": 350200,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003893
  },
  {
    "parent_id": 350200,
    "name": "莲花",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003894
  },
  {
    "parent_id": 350200,
    "name": "松柏",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003895
  },
  {
    "parent_id": 350200,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003897
  },
  {
    "parent_id": 350200,
    "name": "非矿",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003898
  },
  {
    "parent_id": 350200,
    "name": "国贸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003899
  },
  {
    "parent_id": 350200,
    "name": "湖滨南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003901
  },
  {
    "parent_id": 350200,
    "name": "嘉禾路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003902
  },
  {
    "parent_id": 350200,
    "name": "嘉莲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003903
  },
  {
    "parent_id": 350200,
    "name": "开元",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003904
  },
  {
    "parent_id": 350200,
    "name": "理工学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003905
  },
  {
    "parent_id": 350200,
    "name": "莲坂",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003906
  },
  {
    "parent_id": 350200,
    "name": "莲前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003907
  },
  {
    "parent_id": 350200,
    "name": "轮渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003909
  },
  {
    "parent_id": 350200,
    "name": "七星西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003911
  },
  {
    "parent_id": 350200,
    "name": "文灶",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003914
  },
  {
    "parent_id": 350200,
    "name": "梧村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003915
  },
  {
    "parent_id": 350200,
    "name": "厦港",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003917
  },
  {
    "parent_id": 350200,
    "name": "厦禾路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003918
  },
  {
    "parent_id": 350200,
    "name": "筼筜",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003919
  },
  {
    "parent_id": 350200,
    "name": "湖里公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003941
  },
  {
    "parent_id": 350200,
    "name": "江头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003942
  },
  {
    "parent_id": 350200,
    "name": "金尚路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003943
  },
  {
    "parent_id": 350200,
    "name": "塘边",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003944
  },
  {
    "parent_id": 350200,
    "name": "百乐园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003945
  },
  {
    "parent_id": 350200,
    "name": "大唐世家",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003946
  },
  {
    "parent_id": 350200,
    "name": "禾山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003948
  },
  {
    "parent_id": 350200,
    "name": "湖里大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003949
  },
  {
    "parent_id": 350200,
    "name": "嘉园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003950
  },
  {
    "parent_id": 350200,
    "name": "金山小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003951
  },
  {
    "parent_id": 350200,
    "name": "康乐",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003952
  },
  {
    "parent_id": 350200,
    "name": "吕岭路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003953
  },
  {
    "parent_id": 350200,
    "name": "穆厝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003954
  },
  {
    "parent_id": 350200,
    "name": "南山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003955
  },
  {
    "parent_id": 350200,
    "name": "台湾街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003956
  },
  {
    "parent_id": 350200,
    "name": "仙岳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003957
  },
  {
    "parent_id": 350200,
    "name": "兴隆路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003958
  },
  {
    "parent_id": 350200,
    "name": "白鹭洲公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005270
  },
  {
    "parent_id": 350100,
    "name": "福州广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003959
  },
  {
    "parent_id": 350100,
    "name": "省体育中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003960
  },
  {
    "parent_id": 350100,
    "name": "五一广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003961
  },
  {
    "parent_id": 350100,
    "name": "西禅寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003962
  },
  {
    "parent_id": 350100,
    "name": "西湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003963
  },
  {
    "parent_id": 350100,
    "name": "侨雄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003965
  },
  {
    "parent_id": 350100,
    "name": "安泰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003966
  },
  {
    "parent_id": 350100,
    "name": "北大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003967
  },
  {
    "parent_id": 350100,
    "name": "达明路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003968
  },
  {
    "parent_id": 350100,
    "name": "道山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003969
  },
  {
    "parent_id": 350100,
    "name": "东大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003970
  },
  {
    "parent_id": 350100,
    "name": "东水路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003971
  },
  {
    "parent_id": 350100,
    "name": "斗池",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003972
  },
  {
    "parent_id": 350100,
    "name": "福飞南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003973
  },
  {
    "parent_id": 350100,
    "name": "福新路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003974
  },
  {
    "parent_id": 350100,
    "name": "古乐路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003975
  },
  {
    "parent_id": 350100,
    "name": "古田路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003976
  },
  {
    "parent_id": 350100,
    "name": "鼓东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003977
  },
  {
    "parent_id": 350100,
    "name": "鼓西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003978
  },
  {
    "parent_id": 350100,
    "name": "河南新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003979
  },
  {
    "parent_id": 350100,
    "name": "湖东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003980
  },
  {
    "parent_id": 350100,
    "name": "湖前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003981
  },
  {
    "parent_id": 350100,
    "name": "湖头街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003982
  },
  {
    "parent_id": 350100,
    "name": "华大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003983
  },
  {
    "parent_id": 350100,
    "name": "华林路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003984
  },
  {
    "parent_id": 350100,
    "name": "江厝路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003985
  },
  {
    "parent_id": 350100,
    "name": "金泉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003986
  },
  {
    "parent_id": 350100,
    "name": "津泰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003987
  },
  {
    "parent_id": 350100,
    "name": "井大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003988
  },
  {
    "parent_id": 350100,
    "name": "柳桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003989
  },
  {
    "parent_id": 350100,
    "name": "六一北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003990
  },
  {
    "parent_id": 350100,
    "name": "龙庭路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003991
  },
  {
    "parent_id": 350100,
    "name": "梅峰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003992
  },
  {
    "parent_id": 350100,
    "name": "蒙古营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003993
  },
  {
    "parent_id": 350100,
    "name": "南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003994
  },
  {
    "parent_id": 350100,
    "name": "屏东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003995
  },
  {
    "parent_id": 350100,
    "name": "屏山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003996
  },
  {
    "parent_id": 350100,
    "name": "屏西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003997
  },
  {
    "parent_id": 350100,
    "name": "琴湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003998
  },
  {
    "parent_id": 350100,
    "name": "琴亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003999
  },
  {
    "parent_id": 350100,
    "name": "三角井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004000
  },
  {
    "parent_id": 350100,
    "name": "尚宾路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004001
  },
  {
    "parent_id": 350100,
    "name": "省立医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004002
  },
  {
    "parent_id": 350100,
    "name": "省图书馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004003
  },
  {
    "parent_id": 350100,
    "name": "省委党校",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004004
  },
  {
    "parent_id": 350100,
    "name": "树汤路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004005
  },
  {
    "parent_id": 350100,
    "name": "双子星大厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004006
  },
  {
    "parent_id": 350100,
    "name": "水部",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004007
  },
  {
    "parent_id": 350100,
    "name": "通湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004008
  },
  {
    "parent_id": 350100,
    "name": "铜盘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004009
  },
  {
    "parent_id": 350100,
    "name": "温泉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004010
  },
  {
    "parent_id": 350100,
    "name": "乌山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004011
  },
  {
    "parent_id": 350100,
    "name": "五凤",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004012
  },
  {
    "parent_id": 350100,
    "name": "五四路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004013
  },
  {
    "parent_id": 350100,
    "name": "西洪路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004014
  },
  {
    "parent_id": 350100,
    "name": "西营里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004015
  },
  {
    "parent_id": 350100,
    "name": "仙塔街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004016
  },
  {
    "parent_id": 350100,
    "name": "杨桥东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004017
  },
  {
    "parent_id": 350100,
    "name": "杨桥中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004018
  },
  {
    "parent_id": 350100,
    "name": "永安街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004019
  },
  {
    "parent_id": 350100,
    "name": "元帅路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004020
  },
  {
    "parent_id": 350100,
    "name": "左海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004021
  },
  {
    "parent_id": 350100,
    "name": "北环中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004022
  },
  {
    "parent_id": 350100,
    "name": "金山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004023
  },
  {
    "parent_id": 350100,
    "name": "榕城广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004024
  },
  {
    "parent_id": 350100,
    "name": "三叉街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004025
  },
  {
    "parent_id": 350100,
    "name": "上渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004026
  },
  {
    "parent_id": 350100,
    "name": "东升",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004029
  },
  {
    "parent_id": 350100,
    "name": "对湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004030
  },
  {
    "parent_id": 350100,
    "name": "福建师范大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004032
  },
  {
    "parent_id": 350100,
    "name": "附中",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004034
  },
  {
    "parent_id": 350100,
    "name": "高湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004035
  },
  {
    "parent_id": 350100,
    "name": "观海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004036
  },
  {
    "parent_id": 350100,
    "name": "临江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004042
  },
  {
    "parent_id": 350100,
    "name": "六一南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004043
  },
  {
    "parent_id": 350100,
    "name": "马榕",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004044
  },
  {
    "parent_id": 350100,
    "name": "三高路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004047
  },
  {
    "parent_id": 350100,
    "name": "三县洲大桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004048
  },
  {
    "parent_id": 350100,
    "name": "上三路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004049
  },
  {
    "parent_id": 350100,
    "name": "上山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004050
  },
  {
    "parent_id": 350100,
    "name": "施埔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004051
  },
  {
    "parent_id": 350100,
    "name": "首山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004052
  },
  {
    "parent_id": 350100,
    "name": "下渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004053
  },
  {
    "parent_id": 350100,
    "name": "学府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004054
  },
  {
    "parent_id": 350100,
    "name": "洋洽",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004055
  },
  {
    "parent_id": 350100,
    "name": "尤溪洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004056
  },
  {
    "parent_id": 350100,
    "name": "种福寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004058
  },
  {
    "parent_id": 350100,
    "name": "龙院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004059
  },
  {
    "parent_id": 350100,
    "name": "江边",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004060
  },
  {
    "parent_id": 350100,
    "name": "茶亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004064
  },
  {
    "parent_id": 350100,
    "name": "台江广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004065
  },
  {
    "parent_id": 350100,
    "name": "安平小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004066
  },
  {
    "parent_id": 350100,
    "name": "八一七中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004067
  },
  {
    "parent_id": 350100,
    "name": "白马河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004068
  },
  {
    "parent_id": 350100,
    "name": "白马南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004069
  },
  {
    "parent_id": 350100,
    "name": "白马中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004070
  },
  {
    "parent_id": 350100,
    "name": "宝龙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004071
  },
  {
    "parent_id": 350100,
    "name": "博美诗邦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004072
  },
  {
    "parent_id": 350100,
    "name": "苍霞",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004073
  },
  {
    "parent_id": 350100,
    "name": "长汀路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004074
  },
  {
    "parent_id": 350100,
    "name": "达道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004075
  },
  {
    "parent_id": 350100,
    "name": "凤凰新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004076
  },
  {
    "parent_id": 350100,
    "name": "高桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004077
  },
  {
    "parent_id": 350100,
    "name": "工业路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004078
  },
  {
    "parent_id": 350100,
    "name": "广达路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004079
  },
  {
    "parent_id": 350100,
    "name": "国货西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004080
  },
  {
    "parent_id": 350100,
    "name": "荷泽",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004081
  },
  {
    "parent_id": 350100,
    "name": "后洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004082
  },
  {
    "parent_id": 350100,
    "name": "交通路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004083
  },
  {
    "parent_id": 350100,
    "name": "六一中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004084
  },
  {
    "parent_id": 350100,
    "name": "南公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004085
  },
  {
    "parent_id": 350100,
    "name": "宁化",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004086
  },
  {
    "parent_id": 350100,
    "name": "排尾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004087
  },
  {
    "parent_id": 350100,
    "name": "浦东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004088
  },
  {
    "parent_id": 350100,
    "name": "群众路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004089
  },
  {
    "parent_id": 350100,
    "name": "三桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004090
  },
  {
    "parent_id": 350100,
    "name": "上海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004091
  },
  {
    "parent_id": 350100,
    "name": "上海新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004092
  },
  {
    "parent_id": 350100,
    "name": "台江步行街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004093
  },
  {
    "parent_id": 350100,
    "name": "同德路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004094
  },
  {
    "parent_id": 350100,
    "name": "万象城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004095
  },
  {
    "parent_id": 350100,
    "name": "文化宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004096
  },
  {
    "parent_id": 350100,
    "name": "五一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004097
  },
  {
    "parent_id": 350100,
    "name": "西二环南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004098
  },
  {
    "parent_id": 350100,
    "name": "西洋",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004099
  },
  {
    "parent_id": 350100,
    "name": "下杭路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004100
  },
  {
    "parent_id": 350100,
    "name": "祥坂路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004101
  },
  {
    "parent_id": 350100,
    "name": "新港",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004102
  },
  {
    "parent_id": 350100,
    "name": "学军路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004103
  },
  {
    "parent_id": 350100,
    "name": "亚峰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004104
  },
  {
    "parent_id": 350100,
    "name": "洋头口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004105
  },
  {
    "parent_id": 350100,
    "name": "洋中",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004106
  },
  {
    "parent_id": 350100,
    "name": "义洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004107
  },
  {
    "parent_id": 350100,
    "name": "瀛洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004108
  },
  {
    "parent_id": 350100,
    "name": "永升城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004109
  },
  {
    "parent_id": 350100,
    "name": "元洪城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004110
  },
  {
    "parent_id": 350100,
    "name": "中亭街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004111
  },
  {
    "parent_id": 350100,
    "name": "象园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004112
  },
  {
    "parent_id": 350100,
    "name": "茶会",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004114
  },
  {
    "parent_id": 350100,
    "name": "茶园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004115
  },
  {
    "parent_id": 350100,
    "name": "长乐路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004116
  },
  {
    "parent_id": 350100,
    "name": "大名城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004117
  },
  {
    "parent_id": 350100,
    "name": "电建二公司",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004118
  },
  {
    "parent_id": 350100,
    "name": "斗门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004120
  },
  {
    "parent_id": 350100,
    "name": "二化",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004121
  },
  {
    "parent_id": 350100,
    "name": "凤坂",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004122
  },
  {
    "parent_id": 350100,
    "name": "福马路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004124
  },
  {
    "parent_id": 350100,
    "name": "官前路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004128
  },
  {
    "parent_id": 350100,
    "name": "桂香",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004130
  },
  {
    "parent_id": 350100,
    "name": "国货东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004131
  },
  {
    "parent_id": 350100,
    "name": "金鸡山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004134
  },
  {
    "parent_id": 350100,
    "name": "晋连路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004135
  },
  {
    "parent_id": 350100,
    "name": "九龙城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004136
  },
  {
    "parent_id": 350100,
    "name": "连潘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004137
  },
  {
    "parent_id": 350100,
    "name": "融侨东区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004141
  },
  {
    "parent_id": 350100,
    "name": "三八路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004142
  },
  {
    "parent_id": 350100,
    "name": "三木都市田园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004143
  },
  {
    "parent_id": 350100,
    "name": "塔头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004145
  },
  {
    "parent_id": 350100,
    "name": "王庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004146
  },
  {
    "parent_id": 350100,
    "name": "五里亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004147
  },
  {
    "parent_id": 350100,
    "name": "溪口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004149
  },
  {
    "parent_id": 350100,
    "name": "新店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004150
  },
  {
    "parent_id": 350100,
    "name": "洋下",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004153
  },
  {
    "parent_id": 350100,
    "name": "岳峰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004154
  },
  {
    "parent_id": 350100,
    "name": "肿瘤医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004155
  },
  {
    "parent_id": 350100,
    "name": "紫阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004156
  },
  {
    "parent_id": 350100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005088
  },
  {
    "parent_id": 350100,
    "name": "仓前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005240
  },
  {
    "parent_id": 350100,
    "name": "东街口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005267
  },
  {
    "parent_id": 520100,
    "name": "威清路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000830
  },
  {
    "parent_id": 520100,
    "name": "宅吉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000831
  },
  {
    "parent_id": 520100,
    "name": "中华北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000832
  },
  {
    "parent_id": 520100,
    "name": "中山西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000833
  },
  {
    "parent_id": 520100,
    "name": "狮峰路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000834
  },
  {
    "parent_id": 520100,
    "name": "八鸽岩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000835
  },
  {
    "parent_id": 520100,
    "name": "宝山北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000836
  },
  {
    "parent_id": 520100,
    "name": "北京路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000837
  },
  {
    "parent_id": 520100,
    "name": "大十字",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000838
  },
  {
    "parent_id": 520100,
    "name": "大西门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000839
  },
  {
    "parent_id": 520100,
    "name": "大营坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000840
  },
  {
    "parent_id": 520100,
    "name": "东山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000841
  },
  {
    "parent_id": 520100,
    "name": "二桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000842
  },
  {
    "parent_id": 520100,
    "name": "公园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000843
  },
  {
    "parent_id": 520100,
    "name": "贵乌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000844
  },
  {
    "parent_id": 520100,
    "name": "环城北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000845
  },
  {
    "parent_id": 520100,
    "name": "客车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000846
  },
  {
    "parent_id": 520100,
    "name": "老东门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000847
  },
  {
    "parent_id": 520100,
    "name": "煤矿村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000848
  },
  {
    "parent_id": 520100,
    "name": "喷水池",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000849
  },
  {
    "parent_id": 520100,
    "name": "普陀路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000850
  },
  {
    "parent_id": 520100,
    "name": "黔灵东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000851
  },
  {
    "parent_id": 520100,
    "name": "黔灵公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000852
  },
  {
    "parent_id": 520100,
    "name": "三桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000853
  },
  {
    "parent_id": 520100,
    "name": "沙河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000854
  },
  {
    "parent_id": 520100,
    "name": "陕西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000855
  },
  {
    "parent_id": 520100,
    "name": "省府路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000856
  },
  {
    "parent_id": 520100,
    "name": "师大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000857
  },
  {
    "parent_id": 520100,
    "name": "市西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000858
  },
  {
    "parent_id": 520100,
    "name": "文昌北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000859
  },
  {
    "parent_id": 520100,
    "name": "延安中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000861
  },
  {
    "parent_id": 520100,
    "name": "盐务街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000862
  },
  {
    "parent_id": 520100,
    "name": "中华中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000863
  },
  {
    "parent_id": 520100,
    "name": "中山东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000864
  },
  {
    "parent_id": 520100,
    "name": "长江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000867
  },
  {
    "parent_id": 520100,
    "name": "解放路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000872
  },
  {
    "parent_id": 520100,
    "name": "沙冲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000873
  },
  {
    "parent_id": 520100,
    "name": "宝山南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000874
  },
  {
    "parent_id": 520100,
    "name": "河滨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000876
  },
  {
    "parent_id": 520100,
    "name": "护国路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000877
  },
  {
    "parent_id": 520100,
    "name": "花果园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000878
  },
  {
    "parent_id": 520100,
    "name": "纪念塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000879
  },
  {
    "parent_id": 520100,
    "name": "市府路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000881
  },
  {
    "parent_id": 520100,
    "name": "太慈桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000882
  },
  {
    "parent_id": 520100,
    "name": "团坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000883
  },
  {
    "parent_id": 520100,
    "name": "西湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000884
  },
  {
    "parent_id": 520100,
    "name": "新华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000885
  },
  {
    "parent_id": 520100,
    "name": "新路口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000886
  },
  {
    "parent_id": 520100,
    "name": "兴关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000887
  },
  {
    "parent_id": 520100,
    "name": "营盘路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000888
  },
  {
    "parent_id": 520100,
    "name": "油榨街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000889
  },
  {
    "parent_id": 520100,
    "name": "月亮岩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000890
  },
  {
    "parent_id": 520100,
    "name": "中华南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000891
  },
  {
    "parent_id": 520100,
    "name": "遵义路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000892
  },
  {
    "parent_id": 520100,
    "name": "富水南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000893
  },
  {
    "parent_id": 520100,
    "name": "大南门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005379
  },
  {
    "parent_id": 520100,
    "name": "头桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005380
  },
  {
    "parent_id": 110000,
    "name": "梨园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000511
  },
  {
    "parent_id": 110000,
    "name": "新华大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000512
  },
  {
    "parent_id": 110000,
    "name": "北苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000515
  },
  {
    "parent_id": 110000,
    "name": "九棵树",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000517
  },
  {
    "parent_id": 110000,
    "name": "西门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000524
  },
  {
    "parent_id": 110000,
    "name": "新华联",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000525
  },
  {
    "parent_id": 110000,
    "name": "地安门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000537
  },
  {
    "parent_id": 110000,
    "name": "动物园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000538
  },
  {
    "parent_id": 110000,
    "name": "阜成门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000539
  },
  {
    "parent_id": 110000,
    "name": "复兴门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000540
  },
  {
    "parent_id": 110000,
    "name": "什刹海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000541
  },
  {
    "parent_id": 110000,
    "name": "西单",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000542
  },
  {
    "parent_id": 110000,
    "name": "西四",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000543
  },
  {
    "parent_id": 110000,
    "name": "新街口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000544
  },
  {
    "parent_id": 110000,
    "name": "月坛",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000545
  },
  {
    "parent_id": 110000,
    "name": "展览路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000546
  },
  {
    "parent_id": 110000,
    "name": "白纸坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000547
  },
  {
    "parent_id": 110000,
    "name": "菜市口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000548
  },
  {
    "parent_id": 110000,
    "name": "大观园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000549
  },
  {
    "parent_id": 110000,
    "name": "广安门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000550
  },
  {
    "parent_id": 110000,
    "name": "广内大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000551
  },
  {
    "parent_id": 110000,
    "name": "广外大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000552
  },
  {
    "parent_id": 110000,
    "name": "和平门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000553
  },
  {
    "parent_id": 110000,
    "name": "虎坊桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000554
  },
  {
    "parent_id": 110000,
    "name": "马连道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000555
  },
  {
    "parent_id": 110000,
    "name": "牛街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000556
  },
  {
    "parent_id": 110000,
    "name": "天桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000557
  },
  {
    "parent_id": 110000,
    "name": "宣武门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000558
  },
  {
    "parent_id": 110000,
    "name": "百万庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000559
  },
  {
    "parent_id": 110000,
    "name": "车公庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000560
  },
  {
    "parent_id": 110000,
    "name": "官园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000561
  },
  {
    "parent_id": 110000,
    "name": "后海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000562
  },
  {
    "parent_id": 110000,
    "name": "积水潭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000563
  },
  {
    "parent_id": 110000,
    "name": "金融街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000564
  },
  {
    "parent_id": 110000,
    "name": "六铺炕",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000565
  },
  {
    "parent_id": 110000,
    "name": "南礼士路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000566
  },
  {
    "parent_id": 110000,
    "name": "三里河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000567
  },
  {
    "parent_id": 110000,
    "name": "西便门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000568
  },
  {
    "parent_id": 110000,
    "name": "西直门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000569
  },
  {
    "parent_id": 110000,
    "name": "白广路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000570
  },
  {
    "parent_id": 110000,
    "name": "长椿街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000571
  },
  {
    "parent_id": 110000,
    "name": "大栅栏",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000572
  },
  {
    "parent_id": 110000,
    "name": "红莲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000573
  },
  {
    "parent_id": 110000,
    "name": "南菜园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000574
  },
  {
    "parent_id": 110000,
    "name": "陶然亭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000575
  },
  {
    "parent_id": 110000,
    "name": "天宁寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000576
  },
  {
    "parent_id": 110000,
    "name": "珠市口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000577
  },
  {
    "parent_id": 110000,
    "name": "鲁谷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000585
  },
  {
    "parent_id": 110000,
    "name": "永乐",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000595
  },
  {
    "parent_id": 110000,
    "name": "北京大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000621
  },
  {
    "parent_id": 110000,
    "name": "北太平庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000622
  },
  {
    "parent_id": 110000,
    "name": "北下关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000623
  },
  {
    "parent_id": 110000,
    "name": "甘家口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000624
  },
  {
    "parent_id": 110000,
    "name": "公主坟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000625
  },
  {
    "parent_id": 110000,
    "name": "航天桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000626
  },
  {
    "parent_id": 110000,
    "name": "花园桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000627
  },
  {
    "parent_id": 110000,
    "name": "马甸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000628
  },
  {
    "parent_id": 110000,
    "name": "清河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000629
  },
  {
    "parent_id": 110000,
    "name": "清华大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000630
  },
  {
    "parent_id": 110000,
    "name": "人民大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000631
  },
  {
    "parent_id": 110000,
    "name": "上地",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000632
  },
  {
    "parent_id": 110000,
    "name": "世纪城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000633
  },
  {
    "parent_id": 110000,
    "name": "双榆树",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000634
  },
  {
    "parent_id": 110000,
    "name": "苏州桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000636
  },
  {
    "parent_id": 110000,
    "name": "万泉河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000637
  },
  {
    "parent_id": 110000,
    "name": "万寿路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000638
  },
  {
    "parent_id": 110000,
    "name": "魏公村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000639
  },
  {
    "parent_id": 110000,
    "name": "五道口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000640
  },
  {
    "parent_id": 110000,
    "name": "五棵松",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000641
  },
  {
    "parent_id": 110000,
    "name": "西三旗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000642
  },
  {
    "parent_id": 110000,
    "name": "学院路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000643
  },
  {
    "parent_id": 110000,
    "name": "中关村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000645
  },
  {
    "parent_id": 110000,
    "name": "紫竹桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000646
  },
  {
    "parent_id": 110000,
    "name": "木樨地",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000647
  },
  {
    "parent_id": 110000,
    "name": "小西天",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000648
  },
  {
    "parent_id": 110000,
    "name": "八里庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000649
  },
  {
    "parent_id": 110000,
    "name": "北航",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000650
  },
  {
    "parent_id": 110000,
    "name": "北洼路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000651
  },
  {
    "parent_id": 110000,
    "name": "车道沟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000652
  },
  {
    "parent_id": 110000,
    "name": "大钟寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000653
  },
  {
    "parent_id": 110000,
    "name": "当代",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000654
  },
  {
    "parent_id": 110000,
    "name": "定慧寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000655
  },
  {
    "parent_id": 110000,
    "name": "二里庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000656
  },
  {
    "parent_id": 110000,
    "name": "蓟门桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000657
  },
  {
    "parent_id": 110000,
    "name": "交通大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000658
  },
  {
    "parent_id": 110000,
    "name": "军博",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000659
  },
  {
    "parent_id": 110000,
    "name": "牡丹园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000661
  },
  {
    "parent_id": 110000,
    "name": "双安",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000662
  },
  {
    "parent_id": 110000,
    "name": "苏州街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000663
  },
  {
    "parent_id": 110000,
    "name": "田村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000664
  },
  {
    "parent_id": 110000,
    "name": "万柳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000665
  },
  {
    "parent_id": 110000,
    "name": "万寿寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000666
  },
  {
    "parent_id": 110000,
    "name": "西二旗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000668
  },
  {
    "parent_id": 110000,
    "name": "小营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000671
  },
  {
    "parent_id": 110000,
    "name": "永定路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000672
  },
  {
    "parent_id": 110000,
    "name": "远大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000673
  },
  {
    "parent_id": 110000,
    "name": "皂君庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000674
  },
  {
    "parent_id": 110000,
    "name": "知春路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000675
  },
  {
    "parent_id": 110000,
    "name": "天通苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000676
  },
  {
    "parent_id": 110000,
    "name": "东小口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000683
  },
  {
    "parent_id": 110000,
    "name": "龙泽",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000685
  },
  {
    "parent_id": 110000,
    "name": "菜户营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000694
  },
  {
    "parent_id": 110000,
    "name": "草桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000695
  },
  {
    "parent_id": 110000,
    "name": "大红门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000696
  },
  {
    "parent_id": 110000,
    "name": "方庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000697
  },
  {
    "parent_id": 110000,
    "name": "丽泽桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000698
  },
  {
    "parent_id": 110000,
    "name": "刘家窑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000699
  },
  {
    "parent_id": 110000,
    "name": "六里桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000700
  },
  {
    "parent_id": 110000,
    "name": "马家堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000701
  },
  {
    "parent_id": 110000,
    "name": "木樨园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000702
  },
  {
    "parent_id": 110000,
    "name": "青塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000703
  },
  {
    "parent_id": 110000,
    "name": "西客站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000704
  },
  {
    "parent_id": 110000,
    "name": "西罗园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000705
  },
  {
    "parent_id": 110000,
    "name": "洋桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000706
  },
  {
    "parent_id": 110000,
    "name": "玉泉营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000707
  },
  {
    "parent_id": 110000,
    "name": "岳各庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000708
  },
  {
    "parent_id": 110000,
    "name": "右安门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000709
  },
  {
    "parent_id": 110000,
    "name": "成寿寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000711
  },
  {
    "parent_id": 110000,
    "name": "东铁匠营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000713
  },
  {
    "parent_id": 110000,
    "name": "丰台体育馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000714
  },
  {
    "parent_id": 110000,
    "name": "嘉园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000716
  },
  {
    "parent_id": 110000,
    "name": "角门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000717
  },
  {
    "parent_id": 110000,
    "name": "开阳里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000718
  },
  {
    "parent_id": 110000,
    "name": "看丹桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000719
  },
  {
    "parent_id": 110000,
    "name": "科技园区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000720
  },
  {
    "parent_id": 110000,
    "name": "蒲黄榆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000723
  },
  {
    "parent_id": 110000,
    "name": "宋家庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000725
  },
  {
    "parent_id": 110000,
    "name": "太平桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000726
  },
  {
    "parent_id": 110000,
    "name": "赵公口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000729
  },
  {
    "parent_id": 110000,
    "name": "安贞",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000747
  },
  {
    "parent_id": 110000,
    "name": "百子湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000749
  },
  {
    "parent_id": 110000,
    "name": "朝外",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000750
  },
  {
    "parent_id": 110000,
    "name": "朝阳公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000751
  },
  {
    "parent_id": 110000,
    "name": "大山子",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000752
  },
  {
    "parent_id": 110000,
    "name": "大望路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000753
  },
  {
    "parent_id": 110000,
    "name": "工体",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000754
  },
  {
    "parent_id": 110000,
    "name": "管庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000755
  },
  {
    "parent_id": 110000,
    "name": "国贸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000756
  },
  {
    "parent_id": 110000,
    "name": "国展",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000757
  },
  {
    "parent_id": 110000,
    "name": "红庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000758
  },
  {
    "parent_id": 110000,
    "name": "建国门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000759
  },
  {
    "parent_id": 110000,
    "name": "建外大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000760
  },
  {
    "parent_id": 110000,
    "name": "劲松",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000761
  },
  {
    "parent_id": 110000,
    "name": "潘家园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000763
  },
  {
    "parent_id": 110000,
    "name": "三里屯",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000764
  },
  {
    "parent_id": 110000,
    "name": "三元桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000765
  },
  {
    "parent_id": 110000,
    "name": "十八里店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000766
  },
  {
    "parent_id": 110000,
    "name": "十里堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000767
  },
  {
    "parent_id": 110000,
    "name": "石佛营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000768
  },
  {
    "parent_id": 110000,
    "name": "双井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000770
  },
  {
    "parent_id": 110000,
    "name": "四惠",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000771
  },
  {
    "parent_id": 110000,
    "name": "太阳宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000772
  },
  {
    "parent_id": 110000,
    "name": "团结湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000773
  },
  {
    "parent_id": 110000,
    "name": "望京",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000774
  },
  {
    "parent_id": 110000,
    "name": "小关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000775
  },
  {
    "parent_id": 110000,
    "name": "亚运村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000776
  },
  {
    "parent_id": 110000,
    "name": "燕莎",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000777
  },
  {
    "parent_id": 110000,
    "name": "左家庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000778
  },
  {
    "parent_id": 110000,
    "name": "CBD",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000779
  },
  {
    "parent_id": 110000,
    "name": "安华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000780
  },
  {
    "parent_id": 110000,
    "name": "安慧桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000781
  },
  {
    "parent_id": 110000,
    "name": "大屯",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000784
  },
  {
    "parent_id": 110000,
    "name": "东大桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000787
  },
  {
    "parent_id": 110000,
    "name": "对外经贸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000789
  },
  {
    "parent_id": 110000,
    "name": "甘露园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000791
  },
  {
    "parent_id": 110000,
    "name": "高碑店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000792
  },
  {
    "parent_id": 110000,
    "name": "和平街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000793
  },
  {
    "parent_id": 110000,
    "name": "呼家楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000794
  },
  {
    "parent_id": 110000,
    "name": "花家地",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000795
  },
  {
    "parent_id": 110000,
    "name": "华贸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000796
  },
  {
    "parent_id": 110000,
    "name": "惠新里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000797
  },
  {
    "parent_id": 110000,
    "name": "健翔桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000798
  },
  {
    "parent_id": 110000,
    "name": "将台路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000799
  },
  {
    "parent_id": 110000,
    "name": "京广桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000800
  },
  {
    "parent_id": 110000,
    "name": "亮马桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000802
  },
  {
    "parent_id": 110000,
    "name": "柳芳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000803
  },
  {
    "parent_id": 110000,
    "name": "麦子店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000804
  },
  {
    "parent_id": 110000,
    "name": "南磨房",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000805
  },
  {
    "parent_id": 110000,
    "name": "芍药居",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000806
  },
  {
    "parent_id": 110000,
    "name": "水碓子",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000808
  },
  {
    "parent_id": 110000,
    "name": "甜水园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000809
  },
  {
    "parent_id": 110000,
    "name": "西坝河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000810
  },
  {
    "parent_id": 110000,
    "name": "姚家园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000812
  },
  {
    "parent_id": 110000,
    "name": "安定门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005053
  },
  {
    "parent_id": 110000,
    "name": "朝阳门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005055
  },
  {
    "parent_id": 110000,
    "name": "崇文门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005056
  },
  {
    "parent_id": 110000,
    "name": "东四",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005057
  },
  {
    "parent_id": 110000,
    "name": "东直门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005058
  },
  {
    "parent_id": 110000,
    "name": "广渠门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005059
  },
  {
    "parent_id": 110000,
    "name": "和平里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005060
  },
  {
    "parent_id": 110000,
    "name": "沙子口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005061
  },
  {
    "parent_id": 110000,
    "name": "天坛",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005062
  },
  {
    "parent_id": 110000,
    "name": "雍和宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005063
  },
  {
    "parent_id": 110000,
    "name": "立水桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005067
  },
  {
    "parent_id": 110000,
    "name": "果园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005069
  },
  {
    "parent_id": 110000,
    "name": "回龙观",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005071
  },
  {
    "parent_id": 110000,
    "name": "鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005131
  },
  {
    "parent_id": 110000,
    "name": "王府井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005136
  },
  {
    "parent_id": 110000,
    "name": "德胜门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005195
  },
  {
    "parent_id": 110000,
    "name": "美术馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005405
  },
  {
    "parent_id": 130100,
    "name": "革新",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000901
  },
  {
    "parent_id": 130100,
    "name": "联盟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000902
  },
  {
    "parent_id": 130100,
    "name": "宁安",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000903
  },
  {
    "parent_id": 130100,
    "name": "西苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000904
  },
  {
    "parent_id": 130100,
    "name": "西二环",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000905
  },
  {
    "parent_id": 130100,
    "name": "东焦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000907
  },
  {
    "parent_id": 130100,
    "name": "高柱",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000909
  },
  {
    "parent_id": 130100,
    "name": "国泰街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000910
  },
  {
    "parent_id": 130100,
    "name": "合作路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000911
  },
  {
    "parent_id": 130100,
    "name": "和平西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000912
  },
  {
    "parent_id": 130100,
    "name": "九中街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000913
  },
  {
    "parent_id": 130100,
    "name": "清真寺街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000914
  },
  {
    "parent_id": 130100,
    "name": "石岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000915
  },
  {
    "parent_id": 130100,
    "name": "新华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000919
  },
  {
    "parent_id": 130100,
    "name": "建安",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000921
  },
  {
    "parent_id": 130100,
    "name": "东华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000922
  },
  {
    "parent_id": 130100,
    "name": "阜康",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000923
  },
  {
    "parent_id": 130100,
    "name": "彭后",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000925
  },
  {
    "parent_id": 130100,
    "name": "平安南大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000926
  },
  {
    "parent_id": 130100,
    "name": "胜北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000927
  },
  {
    "parent_id": 130100,
    "name": "胜南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000928
  },
  {
    "parent_id": 130100,
    "name": "休门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000930
  },
  {
    "parent_id": 130100,
    "name": "中山东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000931
  },
  {
    "parent_id": 130100,
    "name": "广安",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000932
  },
  {
    "parent_id": 130100,
    "name": "青园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000933
  },
  {
    "parent_id": 130100,
    "name": "跃进",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000934
  },
  {
    "parent_id": 130100,
    "name": "范西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000935
  },
  {
    "parent_id": 130100,
    "name": "河东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000937
  },
  {
    "parent_id": 130100,
    "name": "建北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000938
  },
  {
    "parent_id": 130100,
    "name": "煤机街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000939
  },
  {
    "parent_id": 130100,
    "name": "谈固",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000941
  },
  {
    "parent_id": 130100,
    "name": "育才",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000943
  },
  {
    "parent_id": 130100,
    "name": "南长",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000944
  },
  {
    "parent_id": 130100,
    "name": "西里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000945
  },
  {
    "parent_id": 130100,
    "name": "中山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000946
  },
  {
    "parent_id": 130100,
    "name": "东里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000947
  },
  {
    "parent_id": 130100,
    "name": "维明",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000949
  },
  {
    "parent_id": 130100,
    "name": "维明南大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000950
  },
  {
    "parent_id": 130100,
    "name": "新石",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000951
  },
  {
    "parent_id": 130100,
    "name": "友谊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000952
  },
  {
    "parent_id": 130100,
    "name": "裕西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000953
  },
  {
    "parent_id": 130100,
    "name": "振头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000955
  },
  {
    "parent_id": 130100,
    "name": "裕东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000956
  },
  {
    "parent_id": 130100,
    "name": "裕兴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000957
  },
  {
    "parent_id": 130100,
    "name": "槐北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000959
  },
  {
    "parent_id": 130100,
    "name": "槐底",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000960
  },
  {
    "parent_id": 130100,
    "name": "孙村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000963
  },
  {
    "parent_id": 130100,
    "name": "北苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005393
  },
  {
    "parent_id": 120000,
    "name": "尖山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000012
  },
  {
    "parent_id": 120000,
    "name": "图书大厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000013
  },
  {
    "parent_id": 120000,
    "name": "围堤道沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000014
  },
  {
    "parent_id": 120000,
    "name": "大营门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000017
  },
  {
    "parent_id": 120000,
    "name": "挂甲寺街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000019
  },
  {
    "parent_id": 120000,
    "name": "马场道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000021
  },
  {
    "parent_id": 120000,
    "name": "梅江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000022
  },
  {
    "parent_id": 120000,
    "name": "人民公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000023
  },
  {
    "parent_id": 120000,
    "name": "体院北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000024
  },
  {
    "parent_id": 120000,
    "name": "佟楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000025
  },
  {
    "parent_id": 120000,
    "name": "土城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000026
  },
  {
    "parent_id": 120000,
    "name": "下瓦房街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000027
  },
  {
    "parent_id": 120000,
    "name": "永安道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000028
  },
  {
    "parent_id": 120000,
    "name": "友谊路街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000029
  },
  {
    "parent_id": 120000,
    "name": "越秀路街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000030
  },
  {
    "parent_id": 120000,
    "name": "大胡同",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000069
  },
  {
    "parent_id": 120000,
    "name": "芥园道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000070
  },
  {
    "parent_id": 120000,
    "name": "西沽街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000071
  },
  {
    "parent_id": 120000,
    "name": "老城厢",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000072
  },
  {
    "parent_id": 120000,
    "name": "河北大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000074
  },
  {
    "parent_id": 120000,
    "name": "邵公庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000075
  },
  {
    "parent_id": 120000,
    "name": "西于庄街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000076
  },
  {
    "parent_id": 120000,
    "name": "小白楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000078
  },
  {
    "parent_id": 120000,
    "name": "鞍山道沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000079
  },
  {
    "parent_id": 120000,
    "name": "气象台路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000080
  },
  {
    "parent_id": 120000,
    "name": "五大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000081
  },
  {
    "parent_id": 120000,
    "name": "滨江道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000082
  },
  {
    "parent_id": 120000,
    "name": "国际大厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000083
  },
  {
    "parent_id": 120000,
    "name": "黄家花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000084
  },
  {
    "parent_id": 120000,
    "name": "南市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000085
  },
  {
    "parent_id": 120000,
    "name": "劝业场街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000086
  },
  {
    "parent_id": 120000,
    "name": "西康路沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000087
  },
  {
    "parent_id": 120000,
    "name": "海光寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000088
  },
  {
    "parent_id": 120000,
    "name": "荣业大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000089
  },
  {
    "parent_id": 120000,
    "name": "六里台",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000147
  },
  {
    "parent_id": 120000,
    "name": "南开公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000148
  },
  {
    "parent_id": 120000,
    "name": "水上公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000149
  },
  {
    "parent_id": 120000,
    "name": "体育中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000150
  },
  {
    "parent_id": 120000,
    "name": "天拖地区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000151
  },
  {
    "parent_id": 120000,
    "name": "王顶堤",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000152
  },
  {
    "parent_id": 120000,
    "name": "白堤路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000153
  },
  {
    "parent_id": 120000,
    "name": "长虹街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000154
  },
  {
    "parent_id": 120000,
    "name": "风荷园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000155
  },
  {
    "parent_id": 120000,
    "name": "古文化街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000156
  },
  {
    "parent_id": 120000,
    "name": "鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000157
  },
  {
    "parent_id": 120000,
    "name": "黄河道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000158
  },
  {
    "parent_id": 120000,
    "name": "嘉陵道街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000159
  },
  {
    "parent_id": 120000,
    "name": "密云路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000160
  },
  {
    "parent_id": 120000,
    "name": "南开大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000161
  },
  {
    "parent_id": 120000,
    "name": "三马路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000162
  },
  {
    "parent_id": 120000,
    "name": "时代奥城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000163
  },
  {
    "parent_id": 120000,
    "name": "向阳路街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000164
  },
  {
    "parent_id": 120000,
    "name": "兴南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000165
  },
  {
    "parent_id": 120000,
    "name": "学府街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000166
  },
  {
    "parent_id": 120000,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000167
  },
  {
    "parent_id": 120000,
    "name": "鸿顺里街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000168
  },
  {
    "parent_id": 120000,
    "name": "江都路街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000169
  },
  {
    "parent_id": 120000,
    "name": "民权门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000170
  },
  {
    "parent_id": 120000,
    "name": "宁园街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000171
  },
  {
    "parent_id": 120000,
    "name": "狮子林大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000172
  },
  {
    "parent_id": 120000,
    "name": "望海楼街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000173
  },
  {
    "parent_id": 120000,
    "name": "新开河街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000174
  },
  {
    "parent_id": 120000,
    "name": "月牙河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000175
  },
  {
    "parent_id": 120000,
    "name": "大直沽",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000183
  },
  {
    "parent_id": 120000,
    "name": "工业大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000184
  },
  {
    "parent_id": 120000,
    "name": "中山门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000185
  },
  {
    "parent_id": 120000,
    "name": "常州道街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000186
  },
  {
    "parent_id": 120000,
    "name": "春华街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000187
  },
  {
    "parent_id": 120000,
    "name": "大桥道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000188
  },
  {
    "parent_id": 120000,
    "name": "后广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000191
  },
  {
    "parent_id": 120000,
    "name": "上杭路街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000192
  },
  {
    "parent_id": 120000,
    "name": "唐家口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000193
  },
  {
    "parent_id": 120000,
    "name": "向阳楼街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000195
  },
  {
    "parent_id": 120000,
    "name": "新开路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000196
  },
  {
    "parent_id": 120000,
    "name": "和平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005078
  },
  {
    "parent_id": 120000,
    "name": "大王庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005081
  },
  {
    "parent_id": 120000,
    "name": "长虹公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005083
  },
  {
    "parent_id": 120000,
    "name": "本溪路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005084
  },
  {
    "parent_id": 120000,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005092
  },
  {
    "parent_id": 150100,
    "name": "大学东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001347
  },
  {
    "parent_id": 150100,
    "name": "大学西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001348
  },
  {
    "parent_id": 150100,
    "name": "金宇文苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001350
  },
  {
    "parent_id": 150100,
    "name": "人民路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001351
  },
  {
    "parent_id": 150100,
    "name": "文化商城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001352
  },
  {
    "parent_id": 150100,
    "name": "乌兰察布路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001353
  },
  {
    "parent_id": 150100,
    "name": "大南街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001356
  },
  {
    "parent_id": 150100,
    "name": "旧城北门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001357
  },
  {
    "parent_id": 150100,
    "name": "石羊桥东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001358
  },
  {
    "parent_id": 150100,
    "name": "小召前街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001359
  },
  {
    "parent_id": 150100,
    "name": "兴隆巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001360
  },
  {
    "parent_id": 150100,
    "name": "鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001361
  },
  {
    "parent_id": 150100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001364
  },
  {
    "parent_id": 150100,
    "name": "中山东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001367
  },
  {
    "parent_id": 150100,
    "name": "环河街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001370
  },
  {
    "parent_id": 150100,
    "name": "通道街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001371
  },
  {
    "parent_id": 150100,
    "name": "文化宫街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001372
  },
  {
    "parent_id": 150100,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001374
  },
  {
    "parent_id": 140100,
    "name": "漪汾街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003556
  },
  {
    "parent_id": 140100,
    "name": "和平",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003560
  },
  {
    "parent_id": 140100,
    "name": "彭村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003564
  },
  {
    "parent_id": 140100,
    "name": "千峰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003565
  },
  {
    "parent_id": 140100,
    "name": "大东关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003567
  },
  {
    "parent_id": 140100,
    "name": "敦化坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003568
  },
  {
    "parent_id": 140100,
    "name": "鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003569
  },
  {
    "parent_id": 140100,
    "name": "巨轮",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003571
  },
  {
    "parent_id": 140100,
    "name": "龙潭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003572
  },
  {
    "parent_id": 140100,
    "name": "三桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003573
  },
  {
    "parent_id": 140100,
    "name": "朝阳街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003580
  },
  {
    "parent_id": 140100,
    "name": "柳巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003581
  },
  {
    "parent_id": 140100,
    "name": "双塔西街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003582
  },
  {
    "parent_id": 140100,
    "name": "郝庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003583
  },
  {
    "parent_id": 140100,
    "name": "老军营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003584
  },
  {
    "parent_id": 140100,
    "name": "庙前",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003585
  },
  {
    "parent_id": 140100,
    "name": "桥东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003586
  },
  {
    "parent_id": 140100,
    "name": "文庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003587
  },
  {
    "parent_id": 140100,
    "name": "高新科技产业区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003588
  },
  {
    "parent_id": 140100,
    "name": "亲贤北街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003589
  },
  {
    "parent_id": 140100,
    "name": "坞城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003592
  },
  {
    "parent_id": 140100,
    "name": "杨家堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003593
  },
  {
    "parent_id": 140100,
    "name": "长风街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005119
  },
  {
    "parent_id": 330300,
    "name": "景山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001695
  },
  {
    "parent_id": 330300,
    "name": "法派路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001759
  },
  {
    "parent_id": 330300,
    "name": "广化",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001760
  },
  {
    "parent_id": 330300,
    "name": "莲池",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001765
  },
  {
    "parent_id": 330300,
    "name": "南门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001767
  },
  {
    "parent_id": 330300,
    "name": "南浦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001768
  },
  {
    "parent_id": 330300,
    "name": "蒲鞋市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001769
  },
  {
    "parent_id": 330300,
    "name": "水心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001772
  },
  {
    "parent_id": 330300,
    "name": "五马街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001774
  },
  {
    "parent_id": 330300,
    "name": "西站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001775
  },
  {
    "parent_id": 330300,
    "name": "医学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001777
  },
  {
    "parent_id": 330100,
    "name": "古墩路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001805
  },
  {
    "parent_id": 330100,
    "name": "西湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001808
  },
  {
    "parent_id": 330100,
    "name": "北山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001810
  },
  {
    "parent_id": 330100,
    "name": "翠苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001811
  },
  {
    "parent_id": 330100,
    "name": "古荡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001812
  },
  {
    "parent_id": 330100,
    "name": "桂花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001813
  },
  {
    "parent_id": 330100,
    "name": "黄龙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001814
  },
  {
    "parent_id": 330100,
    "name": "曙光路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001817
  },
  {
    "parent_id": 330100,
    "name": "天目山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001818
  },
  {
    "parent_id": 330100,
    "name": "文二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001819
  },
  {
    "parent_id": 330100,
    "name": "文三路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001820
  },
  {
    "parent_id": 330100,
    "name": "文新",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001821
  },
  {
    "parent_id": 330100,
    "name": "文一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001822
  },
  {
    "parent_id": 330100,
    "name": "西湖北线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001823
  },
  {
    "parent_id": 330100,
    "name": "闸弄口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001827
  },
  {
    "parent_id": 330100,
    "name": "采荷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001830
  },
  {
    "parent_id": 330100,
    "name": "华家池",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001831
  },
  {
    "parent_id": 330100,
    "name": "景芳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001832
  },
  {
    "parent_id": 330100,
    "name": "凯旋",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001833
  },
  {
    "parent_id": 330100,
    "name": "汽车东站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001834
  },
  {
    "parent_id": 330100,
    "name": "秋涛北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001835
  },
  {
    "parent_id": 330100,
    "name": "四季青",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001836
  },
  {
    "parent_id": 330100,
    "name": "中洲",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001837
  },
  {
    "parent_id": 330100,
    "name": "大关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001841
  },
  {
    "parent_id": 330100,
    "name": "德胜",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001842
  },
  {
    "parent_id": 330100,
    "name": "和睦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001844
  },
  {
    "parent_id": 330100,
    "name": "湖墅南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001845
  },
  {
    "parent_id": 330100,
    "name": "米市巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001847
  },
  {
    "parent_id": 330100,
    "name": "上塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001848
  },
  {
    "parent_id": 330100,
    "name": "小河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001849
  },
  {
    "parent_id": 330100,
    "name": "余杭塘上",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001850
  },
  {
    "parent_id": 330100,
    "name": "凤起路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001857
  },
  {
    "parent_id": 330100,
    "name": "艮山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001858
  },
  {
    "parent_id": 330100,
    "name": "武林广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001859
  },
  {
    "parent_id": 330100,
    "name": "建国路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001860
  },
  {
    "parent_id": 330100,
    "name": "庆春路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001861
  },
  {
    "parent_id": 330100,
    "name": "长庆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001862
  },
  {
    "parent_id": 330100,
    "name": "潮鸣",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001863
  },
  {
    "parent_id": 330100,
    "name": "环城西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001865
  },
  {
    "parent_id": 330100,
    "name": "天水",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001866
  },
  {
    "parent_id": 330100,
    "name": "河坊街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001942
  },
  {
    "parent_id": 330100,
    "name": "湖滨",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001943
  },
  {
    "parent_id": 330100,
    "name": "南山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001944
  },
  {
    "parent_id": 330100,
    "name": "汽车南站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001945
  },
  {
    "parent_id": 330100,
    "name": "近江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001946
  },
  {
    "parent_id": 330100,
    "name": "江城路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001948
  },
  {
    "parent_id": 330100,
    "name": "解放路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001949
  },
  {
    "parent_id": 330100,
    "name": "南星",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001950
  },
  {
    "parent_id": 330100,
    "name": "平海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001951
  },
  {
    "parent_id": 330100,
    "name": "清波",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001952
  },
  {
    "parent_id": 330100,
    "name": "清泰街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001953
  },
  {
    "parent_id": 330100,
    "name": "万松岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001954
  },
  {
    "parent_id": 330100,
    "name": "望江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001955
  },
  {
    "parent_id": 330100,
    "name": "吴山广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001956
  },
  {
    "parent_id": 330100,
    "name": "西湖大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001957
  },
  {
    "parent_id": 330100,
    "name": "小营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001958
  },
  {
    "parent_id": 330100,
    "name": "紫阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001959
  },
  {
    "parent_id": 330100,
    "name": "城东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005232
  },
  {
    "parent_id": 330100,
    "name": "城站火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005236
  },
  {
    "parent_id": 330100,
    "name": "高新文教区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005238
  },
  {
    "parent_id": 330200,
    "name": "兴宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001974
  },
  {
    "parent_id": 330200,
    "name": "白鹤",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001975
  },
  {
    "parent_id": 330200,
    "name": "百丈",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001976
  },
  {
    "parent_id": 330200,
    "name": "百丈路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001977
  },
  {
    "parent_id": 330200,
    "name": "彩虹北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001978
  },
  {
    "parent_id": 330200,
    "name": "彩虹南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001979
  },
  {
    "parent_id": 330200,
    "name": "东郊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001983
  },
  {
    "parent_id": 330200,
    "name": "东胜",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001985
  },
  {
    "parent_id": 330200,
    "name": "贺丞路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001987
  },
  {
    "parent_id": 330200,
    "name": "黄鹂新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001990
  },
  {
    "parent_id": 330200,
    "name": "箕漕街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001991
  },
  {
    "parent_id": 330200,
    "name": "锦地水岸",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001992
  },
  {
    "parent_id": 330200,
    "name": "李惠利医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001993
  },
  {
    "parent_id": 330200,
    "name": "宁穿路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001995
  },
  {
    "parent_id": 330200,
    "name": "七塔寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001996
  },
  {
    "parent_id": 330200,
    "name": "日月星城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001997
  },
  {
    "parent_id": 330200,
    "name": "曙光电影院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001999
  },
  {
    "parent_id": 330200,
    "name": "曙光路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002000
  },
  {
    "parent_id": 330200,
    "name": "贤良巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002002
  },
  {
    "parent_id": 330200,
    "name": "新江厦商城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002003
  },
  {
    "parent_id": 330200,
    "name": "樱花公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002005
  },
  {
    "parent_id": 330200,
    "name": "张斌桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002006
  },
  {
    "parent_id": 330200,
    "name": "中山东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002007
  },
  {
    "parent_id": 330200,
    "name": "舟孟北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002009
  },
  {
    "parent_id": 330200,
    "name": "朱雀新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002010
  },
  {
    "parent_id": 330200,
    "name": "紫鹃新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002011
  },
  {
    "parent_id": 330200,
    "name": "鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002022
  },
  {
    "parent_id": 330200,
    "name": "灵桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002023
  },
  {
    "parent_id": 330200,
    "name": "天一广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002024
  },
  {
    "parent_id": 330200,
    "name": "鄞奉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002025
  },
  {
    "parent_id": 330200,
    "name": "白云",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002026
  },
  {
    "parent_id": 330200,
    "name": "宝善路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002027
  },
  {
    "parent_id": 330200,
    "name": "苍松路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002028
  },
  {
    "parent_id": 330200,
    "name": "城隍庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002029
  },
  {
    "parent_id": 330200,
    "name": "大沙泥街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002030
  },
  {
    "parent_id": 330200,
    "name": "广济街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002033
  },
  {
    "parent_id": 330200,
    "name": "恒春街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002034
  },
  {
    "parent_id": 330200,
    "name": "呼童街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002035
  },
  {
    "parent_id": 330200,
    "name": "江厦",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002037
  },
  {
    "parent_id": 330200,
    "name": "解放南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002038
  },
  {
    "parent_id": 330200,
    "name": "开明街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002039
  },
  {
    "parent_id": 330200,
    "name": "老实巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002040
  },
  {
    "parent_id": 330200,
    "name": "联丰路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002041
  },
  {
    "parent_id": 330200,
    "name": "柳汀街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002042
  },
  {
    "parent_id": 330200,
    "name": "马园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002043
  },
  {
    "parent_id": 330200,
    "name": "迈水桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002044
  },
  {
    "parent_id": 330200,
    "name": "苗圃路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002045
  },
  {
    "parent_id": 330200,
    "name": "莫家巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002046
  },
  {
    "parent_id": 330200,
    "name": "南门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002047
  },
  {
    "parent_id": 330200,
    "name": "南苑街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002048
  },
  {
    "parent_id": 330200,
    "name": "前丰街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002049
  },
  {
    "parent_id": 330200,
    "name": "青少年宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002050
  },
  {
    "parent_id": 330200,
    "name": "人才市场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002051
  },
  {
    "parent_id": 330200,
    "name": "三市路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002052
  },
  {
    "parent_id": 330200,
    "name": "狮子街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002054
  },
  {
    "parent_id": 330200,
    "name": "市政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002055
  },
  {
    "parent_id": 330200,
    "name": "文昌街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002058
  },
  {
    "parent_id": 330200,
    "name": "吴家塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002059
  },
  {
    "parent_id": 330200,
    "name": "西河街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002060
  },
  {
    "parent_id": 330200,
    "name": "西门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002061
  },
  {
    "parent_id": 330200,
    "name": "县学街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002063
  },
  {
    "parent_id": 330200,
    "name": "孝闻街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002064
  },
  {
    "parent_id": 330200,
    "name": "新典路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002065
  },
  {
    "parent_id": 330200,
    "name": "兴宁桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002067
  },
  {
    "parent_id": 330200,
    "name": "咏归路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002069
  },
  {
    "parent_id": 330200,
    "name": "月湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002070
  },
  {
    "parent_id": 330200,
    "name": "月湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002071
  },
  {
    "parent_id": 330200,
    "name": "镇明路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002072
  },
  {
    "parent_id": 330200,
    "name": "镇明小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002073
  },
  {
    "parent_id": 330200,
    "name": "中山广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002074
  },
  {
    "parent_id": 330200,
    "name": "中山西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002075
  },
  {
    "parent_id": 330200,
    "name": "宋诏桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002078
  },
  {
    "parent_id": 330200,
    "name": "飞虹新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002080
  },
  {
    "parent_id": 330200,
    "name": "金家漕",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002084
  },
  {
    "parent_id": 330200,
    "name": "麦德龙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002085
  },
  {
    "parent_id": 330200,
    "name": "天童北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002089
  },
  {
    "parent_id": 330200,
    "name": "甬兴新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002094
  },
  {
    "parent_id": 330200,
    "name": "中河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002095
  },
  {
    "parent_id": 330200,
    "name": "中马",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002119
  },
  {
    "parent_id": 320500,
    "name": "观前街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004440
  },
  {
    "parent_id": 320500,
    "name": "盘门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004441
  },
  {
    "parent_id": 320500,
    "name": "十全街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004442
  },
  {
    "parent_id": 320500,
    "name": "南门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004443
  },
  {
    "parent_id": 320500,
    "name": "凤凰街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004444
  },
  {
    "parent_id": 320500,
    "name": "双塔",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004445
  },
  {
    "parent_id": 320500,
    "name": "吴门桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004446
  },
  {
    "parent_id": 320500,
    "name": "胥江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004447
  },
  {
    "parent_id": 320500,
    "name": "友新",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004448
  },
  {
    "parent_id": 320500,
    "name": "景德路沿线",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004455
  },
  {
    "parent_id": 320500,
    "name": "拙政园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004456
  },
  {
    "parent_id": 320500,
    "name": "白塔西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004457
  },
  {
    "parent_id": 320500,
    "name": "南浩街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004459
  },
  {
    "parent_id": 320500,
    "name": "桃花坞",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004461
  },
  {
    "parent_id": 320500,
    "name": "留园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004462
  },
  {
    "parent_id": 320500,
    "name": "三香路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004463
  },
  {
    "parent_id": 320500,
    "name": "石路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004464
  },
  {
    "parent_id": 320500,
    "name": "彩香",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004466
  },
  {
    "parent_id": 320500,
    "name": "湖西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004495
  },
  {
    "parent_id": 320500,
    "name": "龙西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004500
  },
  {
    "parent_id": 320500,
    "name": "苏苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004505
  },
  {
    "parent_id": 320500,
    "name": "吴中西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004507
  },
  {
    "parent_id": 320500,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005091
  },
  {
    "parent_id": 320100,
    "name": "珠江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004526
  },
  {
    "parent_id": 320100,
    "name": "碑亭巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004529
  },
  {
    "parent_id": 320100,
    "name": "丹凤街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004530
  },
  {
    "parent_id": 320100,
    "name": "兰园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004532
  },
  {
    "parent_id": 320100,
    "name": "梅园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004533
  },
  {
    "parent_id": 320100,
    "name": "安德门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004547
  },
  {
    "parent_id": 320100,
    "name": "能仁里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004549
  },
  {
    "parent_id": 320100,
    "name": "雨花新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004553
  },
  {
    "parent_id": 320100,
    "name": "建宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004554
  },
  {
    "parent_id": 320100,
    "name": "西站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004555
  },
  {
    "parent_id": 320100,
    "name": "挹江门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004556
  },
  {
    "parent_id": 320100,
    "name": "热河南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004559
  },
  {
    "parent_id": 320100,
    "name": "小市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004560
  },
  {
    "parent_id": 320100,
    "name": "阅江楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004561
  },
  {
    "parent_id": 320100,
    "name": "中山码头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004562
  },
  {
    "parent_id": 320100,
    "name": "中山桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004563
  },
  {
    "parent_id": 320100,
    "name": "南苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004571
  },
  {
    "parent_id": 320100,
    "name": "兴隆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004572
  },
  {
    "parent_id": 320100,
    "name": "白鹭花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004573
  },
  {
    "parent_id": 320100,
    "name": "茶南",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004574
  },
  {
    "parent_id": 320100,
    "name": "长虹路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004575
  },
  {
    "parent_id": 320100,
    "name": "湖西街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004576
  },
  {
    "parent_id": 320100,
    "name": "建邺万达",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004577
  },
  {
    "parent_id": 320100,
    "name": "南湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004579
  },
  {
    "parent_id": 320100,
    "name": "水西门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004582
  },
  {
    "parent_id": 320100,
    "name": "应天西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004583
  },
  {
    "parent_id": 320100,
    "name": "红花",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004584
  },
  {
    "parent_id": 320100,
    "name": "集庆路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004585
  },
  {
    "parent_id": 320100,
    "name": "中华门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004586
  },
  {
    "parent_id": 320100,
    "name": "洪家园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004587
  },
  {
    "parent_id": 320100,
    "name": "秦虹",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004588
  },
  {
    "parent_id": 320100,
    "name": "赛虹桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004589
  },
  {
    "parent_id": 320100,
    "name": "升州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004590
  },
  {
    "parent_id": 320100,
    "name": "双塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004591
  },
  {
    "parent_id": 320100,
    "name": "瞻园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004592
  },
  {
    "parent_id": 320100,
    "name": "华侨路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004593
  },
  {
    "parent_id": 320100,
    "name": "南大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004594
  },
  {
    "parent_id": 320100,
    "name": "三牌楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004595
  },
  {
    "parent_id": 320100,
    "name": "山西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004596
  },
  {
    "parent_id": 320100,
    "name": "玄武门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004597
  },
  {
    "parent_id": 320100,
    "name": "中央门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004598
  },
  {
    "parent_id": 320100,
    "name": "草场门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004599
  },
  {
    "parent_id": 320100,
    "name": "丁家桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004600
  },
  {
    "parent_id": 320100,
    "name": "福建路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004601
  },
  {
    "parent_id": 320100,
    "name": "汉中门大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004602
  },
  {
    "parent_id": 320100,
    "name": "湖北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004603
  },
  {
    "parent_id": 320100,
    "name": "湖南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004604
  },
  {
    "parent_id": 320100,
    "name": "虎踞路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004605
  },
  {
    "parent_id": 320100,
    "name": "江东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004606
  },
  {
    "parent_id": 320100,
    "name": "将军庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004607
  },
  {
    "parent_id": 320100,
    "name": "南师大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004608
  },
  {
    "parent_id": 320100,
    "name": "宁海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004609
  },
  {
    "parent_id": 320100,
    "name": "上海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004610
  },
  {
    "parent_id": 320100,
    "name": "水佐岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004611
  },
  {
    "parent_id": 320100,
    "name": "西桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004612
  },
  {
    "parent_id": 320100,
    "name": "中央路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004613
  },
  {
    "parent_id": 320100,
    "name": "朝天宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004624
  },
  {
    "parent_id": 320100,
    "name": "大光路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004625
  },
  {
    "parent_id": 320100,
    "name": "瑞金路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004628
  },
  {
    "parent_id": 320100,
    "name": "新街口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004629
  },
  {
    "parent_id": 320100,
    "name": "白衣庵",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004630
  },
  {
    "parent_id": 320100,
    "name": "常府街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004631
  },
  {
    "parent_id": 320100,
    "name": "光华门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004632
  },
  {
    "parent_id": 320100,
    "name": "汉中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004634
  },
  {
    "parent_id": 320100,
    "name": "洪武路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004635
  },
  {
    "parent_id": 320100,
    "name": "淮海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004636
  },
  {
    "parent_id": 320100,
    "name": "建康路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004637
  },
  {
    "parent_id": 320100,
    "name": "石鼓路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004638
  },
  {
    "parent_id": 320100,
    "name": "五老村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004639
  },
  {
    "parent_id": 320100,
    "name": "止马营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004640
  },
  {
    "parent_id": 320100,
    "name": "龙江",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005311
  },
  {
    "parent_id": 320200,
    "name": "五爱广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004652
  },
  {
    "parent_id": 320200,
    "name": "青石路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004656
  },
  {
    "parent_id": 320200,
    "name": "霞美路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004658
  },
  {
    "parent_id": 320200,
    "name": "中山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004673
  },
  {
    "parent_id": 320200,
    "name": "崇安寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004674
  },
  {
    "parent_id": 320200,
    "name": "东林广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004675
  },
  {
    "parent_id": 320200,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004678
  },
  {
    "parent_id": 320200,
    "name": "江海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004679
  },
  {
    "parent_id": 320200,
    "name": "新华书店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004680
  },
  {
    "parent_id": 320200,
    "name": "清扬路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004681
  },
  {
    "parent_id": 320200,
    "name": "五爱路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004682
  },
  {
    "parent_id": 320200,
    "name": "中桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004683
  },
  {
    "parent_id": 320200,
    "name": "运河西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004685
  },
  {
    "parent_id": 320200,
    "name": "扬名中心小学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004686
  },
  {
    "parent_id": 320200,
    "name": "金匮",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004687
  },
  {
    "parent_id": 320200,
    "name": "金星",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004688
  },
  {
    "parent_id": 320200,
    "name": "南扬新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004689
  },
  {
    "parent_id": 320200,
    "name": "清名桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004690
  },
  {
    "parent_id": 320200,
    "name": "体育公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004691
  },
  {
    "parent_id": 320200,
    "name": "图书馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004692
  },
  {
    "parent_id": 320200,
    "name": "迎龙桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004694
  },
  {
    "parent_id": 320200,
    "name": "北大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005103
  },
  {
    "parent_id": 320200,
    "name": "上马墩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005218
  },
  {
    "parent_id": 320400,
    "name": "怀德桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004703
  },
  {
    "parent_id": 320400,
    "name": "金色新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004705
  },
  {
    "parent_id": 320400,
    "name": "荆川公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004706
  },
  {
    "parent_id": 320400,
    "name": "兰园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004707
  },
  {
    "parent_id": 320400,
    "name": "蓝色星空",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004708
  },
  {
    "parent_id": 320400,
    "name": "勤德家园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004710
  },
  {
    "parent_id": 320400,
    "name": "勤业新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004711
  },
  {
    "parent_id": 320400,
    "name": "清潭新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004712
  },
  {
    "parent_id": 320400,
    "name": "世纪明珠园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004713
  },
  {
    "parent_id": 320400,
    "name": "体育馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004714
  },
  {
    "parent_id": 320400,
    "name": "西新桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004716
  },
  {
    "parent_id": 320400,
    "name": "西新桥二村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004717
  },
  {
    "parent_id": 320400,
    "name": "杨柳巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004719
  },
  {
    "parent_id": 320400,
    "name": "邮电路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004720
  },
  {
    "parent_id": 320400,
    "name": "紫阳花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004721
  },
  {
    "parent_id": 320400,
    "name": "中凉新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004739
  },
  {
    "parent_id": 320400,
    "name": "博爱路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004740
  },
  {
    "parent_id": 320400,
    "name": "光华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004744
  },
  {
    "parent_id": 320400,
    "name": "红梅公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004746
  },
  {
    "parent_id": 320400,
    "name": "锦绣花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004748
  },
  {
    "parent_id": 320400,
    "name": "劳动西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004749
  },
  {
    "parent_id": 320400,
    "name": "劳动新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004750
  },
  {
    "parent_id": 320400,
    "name": "浦北新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004754
  },
  {
    "parent_id": 320400,
    "name": "浦南新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004755
  },
  {
    "parent_id": 320400,
    "name": "清凉新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004756
  },
  {
    "parent_id": 320400,
    "name": "人民公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004757
  },
  {
    "parent_id": 320400,
    "name": "桃园新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004758
  },
  {
    "parent_id": 320400,
    "name": "文化宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004759
  },
  {
    "parent_id": 320400,
    "name": "怡康花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004760
  },
  {
    "parent_id": 320400,
    "name": "永宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004762
  },
  {
    "parent_id": 320400,
    "name": "工人新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004763
  },
  {
    "parent_id": 320400,
    "name": "兰陵",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100004764
  },
  {
    "parent_id": 320400,
    "name": "广化街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005225
  },
  {
    "parent_id": 310000,
    "name": "大华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002178
  },
  {
    "parent_id": 310000,
    "name": "高境",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002179
  },
  {
    "parent_id": 310000,
    "name": "泗塘新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002182
  },
  {
    "parent_id": 310000,
    "name": "通河新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002184
  },
  {
    "parent_id": 310000,
    "name": "长江西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002189
  },
  {
    "parent_id": 310000,
    "name": "共康",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002191
  },
  {
    "parent_id": 310000,
    "name": "庙行",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002195
  },
  {
    "parent_id": 310000,
    "name": "张庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002199
  },
  {
    "parent_id": 310000,
    "name": "春申",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002200
  },
  {
    "parent_id": 310000,
    "name": "古美",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002201
  },
  {
    "parent_id": 310000,
    "name": "龙柏",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002204
  },
  {
    "parent_id": 310000,
    "name": "梅陇",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002205
  },
  {
    "parent_id": 310000,
    "name": "南方商城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002206
  },
  {
    "parent_id": 310000,
    "name": "七宝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002207
  },
  {
    "parent_id": 310000,
    "name": "万源城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002208
  },
  {
    "parent_id": 310000,
    "name": "莘庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002210
  },
  {
    "parent_id": 310000,
    "name": "漕宝路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002212
  },
  {
    "parent_id": 310000,
    "name": "东兰路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002213
  },
  {
    "parent_id": 310000,
    "name": "虹梅路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002215
  },
  {
    "parent_id": 310000,
    "name": "锦江乐园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002217
  },
  {
    "parent_id": 310000,
    "name": "静安新城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002218
  },
  {
    "parent_id": 310000,
    "name": "罗阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002219
  },
  {
    "parent_id": 310000,
    "name": "复旦大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002228
  },
  {
    "parent_id": 310000,
    "name": "黄兴公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002229
  },
  {
    "parent_id": 310000,
    "name": "控江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002230
  },
  {
    "parent_id": 310000,
    "name": "平凉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002231
  },
  {
    "parent_id": 310000,
    "name": "五角场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002232
  },
  {
    "parent_id": 310000,
    "name": "鞍山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002235
  },
  {
    "parent_id": 310000,
    "name": "长海医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002236
  },
  {
    "parent_id": 310000,
    "name": "长阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002237
  },
  {
    "parent_id": 310000,
    "name": "大学区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002238
  },
  {
    "parent_id": 310000,
    "name": "江浦路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002239
  },
  {
    "parent_id": 310000,
    "name": "新华医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002240
  },
  {
    "parent_id": 310000,
    "name": "延吉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002241
  },
  {
    "parent_id": 310000,
    "name": "杨浦公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002242
  },
  {
    "parent_id": 310000,
    "name": "周家嘴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002243
  },
  {
    "parent_id": 310000,
    "name": "长寿路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002244
  },
  {
    "parent_id": 310000,
    "name": "甘泉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002245
  },
  {
    "parent_id": 310000,
    "name": "华师大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002246
  },
  {
    "parent_id": 310000,
    "name": "梅川路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002247
  },
  {
    "parent_id": 310000,
    "name": "万里城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002249
  },
  {
    "parent_id": 310000,
    "name": "武宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002250
  },
  {
    "parent_id": 310000,
    "name": "宜川路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002251
  },
  {
    "parent_id": 310000,
    "name": "真光新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002252
  },
  {
    "parent_id": 310000,
    "name": "真如",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002253
  },
  {
    "parent_id": 310000,
    "name": "长风公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002254
  },
  {
    "parent_id": 310000,
    "name": "长征",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002255
  },
  {
    "parent_id": 310000,
    "name": "光新",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002256
  },
  {
    "parent_id": 310000,
    "name": "金沙江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002257
  },
  {
    "parent_id": 310000,
    "name": "石泉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002258
  },
  {
    "parent_id": 310000,
    "name": "玉佛寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002259
  },
  {
    "parent_id": 310000,
    "name": "中远两湾城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002260
  },
  {
    "parent_id": 310000,
    "name": "康建",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002261
  },
  {
    "parent_id": 310000,
    "name": "淮海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002272
  },
  {
    "parent_id": 310000,
    "name": "瑞金宾馆区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002273
  },
  {
    "parent_id": 310000,
    "name": "新天地",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002274
  },
  {
    "parent_id": 310000,
    "name": "复兴公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002275
  },
  {
    "parent_id": 310000,
    "name": "复兴中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002276
  },
  {
    "parent_id": 310000,
    "name": "淮海公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002277
  },
  {
    "parent_id": 310000,
    "name": "九院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002278
  },
  {
    "parent_id": 310000,
    "name": "鲁班路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002279
  },
  {
    "parent_id": 310000,
    "name": "茂名南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002280
  },
  {
    "parent_id": 310000,
    "name": "瑞金医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002281
  },
  {
    "parent_id": 310000,
    "name": "陕西南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002282
  },
  {
    "parent_id": 310000,
    "name": "五里桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002283
  },
  {
    "parent_id": 310000,
    "name": "制造局路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002284
  },
  {
    "parent_id": 310000,
    "name": "金桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002286
  },
  {
    "parent_id": 310000,
    "name": "金杨新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002287
  },
  {
    "parent_id": 310000,
    "name": "陆家嘴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002289
  },
  {
    "parent_id": 310000,
    "name": "三林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002290
  },
  {
    "parent_id": 310000,
    "name": "上南地区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002291
  },
  {
    "parent_id": 310000,
    "name": "世博园区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002292
  },
  {
    "parent_id": 310000,
    "name": "塘桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002294
  },
  {
    "parent_id": 310000,
    "name": "源深体育中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002296
  },
  {
    "parent_id": 310000,
    "name": "东方路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002302
  },
  {
    "parent_id": 310000,
    "name": "东明路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002303
  },
  {
    "parent_id": 310000,
    "name": "临沂路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002310
  },
  {
    "parent_id": 310000,
    "name": "六里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002311
  },
  {
    "parent_id": 310000,
    "name": "梅园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002314
  },
  {
    "parent_id": 310000,
    "name": "南码头",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002315
  },
  {
    "parent_id": 310000,
    "name": "上钢新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002317
  },
  {
    "parent_id": 310000,
    "name": "潍坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002319
  },
  {
    "parent_id": 310000,
    "name": "杨东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002321
  },
  {
    "parent_id": 310000,
    "name": "洋泾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002322
  },
  {
    "parent_id": 310000,
    "name": "正大广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002323
  },
  {
    "parent_id": 310000,
    "name": "周家渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002324
  },
  {
    "parent_id": 310000,
    "name": "杨浦大桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002326
  },
  {
    "parent_id": 310000,
    "name": "东外滩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002327
  },
  {
    "parent_id": 310000,
    "name": "动物园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002328
  },
  {
    "parent_id": 310000,
    "name": "古北",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002329
  },
  {
    "parent_id": 310000,
    "name": "虹桥机场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002330
  },
  {
    "parent_id": 310000,
    "name": "上海影城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002331
  },
  {
    "parent_id": 310000,
    "name": "天山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002332
  },
  {
    "parent_id": 310000,
    "name": "仙霞新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002333
  },
  {
    "parent_id": 310000,
    "name": "中山公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002334
  },
  {
    "parent_id": 310000,
    "name": "程家桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002335
  },
  {
    "parent_id": 310000,
    "name": "江苏路地铁",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002336
  },
  {
    "parent_id": 310000,
    "name": "娄山关路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002337
  },
  {
    "parent_id": 310000,
    "name": "新华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002338
  },
  {
    "parent_id": 310000,
    "name": "镇宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002339
  },
  {
    "parent_id": 310000,
    "name": "遵义路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002340
  },
  {
    "parent_id": 310000,
    "name": "广中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002346
  },
  {
    "parent_id": 310000,
    "name": "海宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002347
  },
  {
    "parent_id": 310000,
    "name": "和平公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002348
  },
  {
    "parent_id": 310000,
    "name": "凉城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002349
  },
  {
    "parent_id": 310000,
    "name": "鲁迅公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002350
  },
  {
    "parent_id": 310000,
    "name": "曲阳地区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002351
  },
  {
    "parent_id": 310000,
    "name": "四川北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002352
  },
  {
    "parent_id": 310000,
    "name": "四平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002353
  },
  {
    "parent_id": 310000,
    "name": "大连",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002354
  },
  {
    "parent_id": 310000,
    "name": "东宝兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002355
  },
  {
    "parent_id": 310000,
    "name": "虹口足球场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002356
  },
  {
    "parent_id": 310000,
    "name": "江湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002357
  },
  {
    "parent_id": 310000,
    "name": "临平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002358
  },
  {
    "parent_id": 310000,
    "name": "运光",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002359
  },
  {
    "parent_id": 310000,
    "name": "丁香花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002360
  },
  {
    "parent_id": 310000,
    "name": "枫林路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002361
  },
  {
    "parent_id": 310000,
    "name": "交通大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002363
  },
  {
    "parent_id": 310000,
    "name": "龙华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002364
  },
  {
    "parent_id": 310000,
    "name": "上海南站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002365
  },
  {
    "parent_id": 310000,
    "name": "上海师大",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002366
  },
  {
    "parent_id": 310000,
    "name": "田林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002367
  },
  {
    "parent_id": 310000,
    "name": "万体馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002368
  },
  {
    "parent_id": 310000,
    "name": "徐家汇",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002369
  },
  {
    "parent_id": 310000,
    "name": "音乐学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002370
  },
  {
    "parent_id": 310000,
    "name": "漕河泾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002372
  },
  {
    "parent_id": 310000,
    "name": "复兴西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002373
  },
  {
    "parent_id": 310000,
    "name": "衡山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002374
  },
  {
    "parent_id": 310000,
    "name": "湖南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002375
  },
  {
    "parent_id": 310000,
    "name": "华东理工",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002376
  },
  {
    "parent_id": 310000,
    "name": "淮海西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002377
  },
  {
    "parent_id": 310000,
    "name": "凌云路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002378
  },
  {
    "parent_id": 310000,
    "name": "日晖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002379
  },
  {
    "parent_id": 310000,
    "name": "上海体育场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002380
  },
  {
    "parent_id": 310000,
    "name": "襄阳公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002381
  },
  {
    "parent_id": 310000,
    "name": "斜土路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002382
  },
  {
    "parent_id": 310000,
    "name": "岳阳",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002383
  },
  {
    "parent_id": 310000,
    "name": "肇嘉浜路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002384
  },
  {
    "parent_id": 310000,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002385
  },
  {
    "parent_id": 310000,
    "name": "老北站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002386
  },
  {
    "parent_id": 310000,
    "name": "彭浦新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002387
  },
  {
    "parent_id": 310000,
    "name": "闸北公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002388
  },
  {
    "parent_id": 310000,
    "name": "中山北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002389
  },
  {
    "parent_id": 310000,
    "name": "七浦路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002390
  },
  {
    "parent_id": 310000,
    "name": "宝山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002391
  },
  {
    "parent_id": 310000,
    "name": "北区汽车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002392
  },
  {
    "parent_id": 310000,
    "name": "场中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002393
  },
  {
    "parent_id": 310000,
    "name": "共和新路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002394
  },
  {
    "parent_id": 310000,
    "name": "和田",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002395
  },
  {
    "parent_id": 310000,
    "name": "柳营路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002396
  },
  {
    "parent_id": 310000,
    "name": "天目西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002397
  },
  {
    "parent_id": 310000,
    "name": "汶水路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002398
  },
  {
    "parent_id": 310000,
    "name": "西藏北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002399
  },
  {
    "parent_id": 310000,
    "name": "延长路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002400
  },
  {
    "parent_id": 310000,
    "name": "芷江西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002401
  },
  {
    "parent_id": 310000,
    "name": "丰庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002405
  },
  {
    "parent_id": 310000,
    "name": "真新新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002408
  },
  {
    "parent_id": 310000,
    "name": "静安寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002409
  },
  {
    "parent_id": 310000,
    "name": "南京西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002410
  },
  {
    "parent_id": 310000,
    "name": "同乐坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002411
  },
  {
    "parent_id": 310000,
    "name": "北京西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002412
  },
  {
    "parent_id": 310000,
    "name": "华山医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002413
  },
  {
    "parent_id": 310000,
    "name": "江宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002414
  },
  {
    "parent_id": 310000,
    "name": "康定路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002415
  },
  {
    "parent_id": 310000,
    "name": "上海电视台",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002416
  },
  {
    "parent_id": 310000,
    "name": "吴江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002417
  },
  {
    "parent_id": 310000,
    "name": "西康路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002418
  },
  {
    "parent_id": 310000,
    "name": "董家渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002423
  },
  {
    "parent_id": 310000,
    "name": "老西门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002424
  },
  {
    "parent_id": 310000,
    "name": "南京东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002425
  },
  {
    "parent_id": 310000,
    "name": "南浦大桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002426
  },
  {
    "parent_id": 310000,
    "name": "人民广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002427
  },
  {
    "parent_id": 310000,
    "name": "十六铺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002428
  },
  {
    "parent_id": 310000,
    "name": "外滩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002429
  },
  {
    "parent_id": 310000,
    "name": "新闸路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002430
  },
  {
    "parent_id": 310000,
    "name": "半淞园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002431
  },
  {
    "parent_id": 310000,
    "name": "北京东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002432
  },
  {
    "parent_id": 310000,
    "name": "大兴街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002433
  },
  {
    "parent_id": 310000,
    "name": "金陵东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002434
  },
  {
    "parent_id": 310000,
    "name": "南外滩",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002435
  },
  {
    "parent_id": 310000,
    "name": "蓬莱公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002436
  },
  {
    "parent_id": 310000,
    "name": "西藏南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002437
  },
  {
    "parent_id": 310000,
    "name": "豫园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002438
  },
  {
    "parent_id": 310000,
    "name": "云南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100002439
  },
  {
    "parent_id": 310000,
    "name": "城隍庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005127
  },
  {
    "parent_id": 310000,
    "name": "北新泾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005209
  },
  {
    "parent_id": 310000,
    "name": "虹桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005210
  },
  {
    "parent_id": 310000,
    "name": "曹家渡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005211
  },
  {
    "parent_id": 310000,
    "name": "八佰伴",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005212
  },
  {
    "parent_id": 370200,
    "name": "汇泉广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003024
  },
  {
    "parent_id": 370200,
    "name": "泰州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003026
  },
  {
    "parent_id": 370200,
    "name": "香港中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003028
  },
  {
    "parent_id": 370200,
    "name": "湛山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003029
  },
  {
    "parent_id": 370200,
    "name": "大学路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003031
  },
  {
    "parent_id": 370200,
    "name": "宁夏路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003032
  },
  {
    "parent_id": 370200,
    "name": "八大湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003034
  },
  {
    "parent_id": 370200,
    "name": "大尧一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003036
  },
  {
    "parent_id": 370200,
    "name": "浮山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003038
  },
  {
    "parent_id": 370200,
    "name": "福苑小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003039
  },
  {
    "parent_id": 370200,
    "name": "福州南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003040
  },
  {
    "parent_id": 370200,
    "name": "港西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003041
  },
  {
    "parent_id": 370200,
    "name": "洪泽湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003046
  },
  {
    "parent_id": 370200,
    "name": "江苏路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003047
  },
  {
    "parent_id": 370200,
    "name": "江西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003048
  },
  {
    "parent_id": 370200,
    "name": "金湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003049
  },
  {
    "parent_id": 370200,
    "name": "闽江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003051
  },
  {
    "parent_id": 370200,
    "name": "如东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003052
  },
  {
    "parent_id": 370200,
    "name": "绍兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003054
  },
  {
    "parent_id": 370200,
    "name": "市政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003055
  },
  {
    "parent_id": 370200,
    "name": "天山小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003058
  },
  {
    "parent_id": 370200,
    "name": "图书馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003059
  },
  {
    "parent_id": 370200,
    "name": "五四广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003060
  },
  {
    "parent_id": 370200,
    "name": "香港西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003062
  },
  {
    "parent_id": 370200,
    "name": "逍遥二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003063
  },
  {
    "parent_id": 370200,
    "name": "逍遥一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003064
  },
  {
    "parent_id": 370200,
    "name": "延安三路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003066
  },
  {
    "parent_id": 370200,
    "name": "云霄路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003069
  },
  {
    "parent_id": 370200,
    "name": "漳浦路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003071
  },
  {
    "parent_id": 370200,
    "name": "福州北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003073
  },
  {
    "parent_id": 370200,
    "name": "山东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003074
  },
  {
    "parent_id": 370200,
    "name": "小村庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003125
  },
  {
    "parent_id": 370200,
    "name": "台柳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003127
  },
  {
    "parent_id": 370200,
    "name": "哈尔滨路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003128
  },
  {
    "parent_id": 370200,
    "name": "安达路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003129
  },
  {
    "parent_id": 370200,
    "name": "鞍山二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003130
  },
  {
    "parent_id": 370200,
    "name": "鞍山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003131
  },
  {
    "parent_id": 370200,
    "name": "鞍山一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003132
  },
  {
    "parent_id": 370200,
    "name": "北岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003133
  },
  {
    "parent_id": 370200,
    "name": "昌化路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003134
  },
  {
    "parent_id": 370200,
    "name": "长途汽车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003136
  },
  {
    "parent_id": 370200,
    "name": "都昌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003137
  },
  {
    "parent_id": 370200,
    "name": "抚顺路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003138
  },
  {
    "parent_id": 370200,
    "name": "阜新路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003139
  },
  {
    "parent_id": 370200,
    "name": "海伦路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003140
  },
  {
    "parent_id": 370200,
    "name": "海云庵",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003141
  },
  {
    "parent_id": 370200,
    "name": "杭州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003142
  },
  {
    "parent_id": 370200,
    "name": "河西",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003143
  },
  {
    "parent_id": 370200,
    "name": "嘉定路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003146
  },
  {
    "parent_id": 370200,
    "name": "嘉定山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003147
  },
  {
    "parent_id": 370200,
    "name": "嘉禾路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003148
  },
  {
    "parent_id": 370200,
    "name": "嘉善路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003149
  },
  {
    "parent_id": 370200,
    "name": "嘉兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003150
  },
  {
    "parent_id": 370200,
    "name": "康宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003153
  },
  {
    "parent_id": 370200,
    "name": "理工大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003154
  },
  {
    "parent_id": 370200,
    "name": "南昌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003156
  },
  {
    "parent_id": 370200,
    "name": "南宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003158
  },
  {
    "parent_id": 370200,
    "name": "宁化路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003159
  },
  {
    "parent_id": 370200,
    "name": "平安路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003160
  },
  {
    "parent_id": 370200,
    "name": "人民二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003162
  },
  {
    "parent_id": 370200,
    "name": "人民一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003163
  },
  {
    "parent_id": 370200,
    "name": "瑞昌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003164
  },
  {
    "parent_id": 370200,
    "name": "双山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003168
  },
  {
    "parent_id": 370200,
    "name": "铁岭路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003170
  },
  {
    "parent_id": 370200,
    "name": "温州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003171
  },
  {
    "parent_id": 370200,
    "name": "宣化路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003174
  },
  {
    "parent_id": 370200,
    "name": "重庆南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003176
  },
  {
    "parent_id": 370200,
    "name": "遵化路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003178
  },
  {
    "parent_id": 370200,
    "name": "大港",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003200
  },
  {
    "parent_id": 370200,
    "name": "儿童公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003201
  },
  {
    "parent_id": 370200,
    "name": "合肥路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003202
  },
  {
    "parent_id": 370200,
    "name": "华阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003203
  },
  {
    "parent_id": 370200,
    "name": "南京路北段",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003205
  },
  {
    "parent_id": 370200,
    "name": "台东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003206
  },
  {
    "parent_id": 370200,
    "name": "延安路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003207
  },
  {
    "parent_id": 370200,
    "name": "九水路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003208
  },
  {
    "parent_id": 370200,
    "name": "标山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003209
  },
  {
    "parent_id": 370200,
    "name": "长春路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003211
  },
  {
    "parent_id": 370200,
    "name": "错埠岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003212
  },
  {
    "parent_id": 370200,
    "name": "大成路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003213
  },
  {
    "parent_id": 370200,
    "name": "大连路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003214
  },
  {
    "parent_id": 370200,
    "name": "大名路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003215
  },
  {
    "parent_id": 370200,
    "name": "德平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003216
  },
  {
    "parent_id": 370200,
    "name": "登州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003217
  },
  {
    "parent_id": 370200,
    "name": "敦化路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003218
  },
  {
    "parent_id": 370200,
    "name": "丰盛路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003219
  },
  {
    "parent_id": 370200,
    "name": "甘肃路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003221
  },
  {
    "parent_id": 370200,
    "name": "广饶路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003223
  },
  {
    "parent_id": 370200,
    "name": "海信立交",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003224
  },
  {
    "parent_id": 370200,
    "name": "洪山坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003225
  },
  {
    "parent_id": 370200,
    "name": "黄台路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003226
  },
  {
    "parent_id": 370200,
    "name": "利津路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003228
  },
  {
    "parent_id": 370200,
    "name": "辽宁路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003229
  },
  {
    "parent_id": 370200,
    "name": "辽阳西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003230
  },
  {
    "parent_id": 370200,
    "name": "辽源路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003231
  },
  {
    "parent_id": 370200,
    "name": "内蒙古路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003232
  },
  {
    "parent_id": 370200,
    "name": "南口路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003233
  },
  {
    "parent_id": 370200,
    "name": "热河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003234
  },
  {
    "parent_id": 370200,
    "name": "十五中",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003235
  },
  {
    "parent_id": 370200,
    "name": "市立医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003237
  },
  {
    "parent_id": 370200,
    "name": "顺兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003238
  },
  {
    "parent_id": 370200,
    "name": "松山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003239
  },
  {
    "parent_id": 370200,
    "name": "太清路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003240
  },
  {
    "parent_id": 370200,
    "name": "洮南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003241
  },
  {
    "parent_id": 370200,
    "name": "通山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003242
  },
  {
    "parent_id": 370200,
    "name": "威海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003244
  },
  {
    "parent_id": 370200,
    "name": "延安二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003245
  },
  {
    "parent_id": 370200,
    "name": "延安一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003246
  },
  {
    "parent_id": 370200,
    "name": "伊春路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003247
  },
  {
    "parent_id": 370200,
    "name": "镇江北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003248
  },
  {
    "parent_id": 370200,
    "name": "镇江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003249
  },
  {
    "parent_id": 370200,
    "name": "金坛路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003250
  },
  {
    "parent_id": 370200,
    "name": "齐东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003251
  },
  {
    "parent_id": 370200,
    "name": "吴兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003252
  },
  {
    "parent_id": 370200,
    "name": "延吉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003253
  },
  {
    "parent_id": 370200,
    "name": "云溪路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003254
  },
  {
    "parent_id": 370700,
    "name": "和平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003274
  },
  {
    "parent_id": 370700,
    "name": "青年路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003275
  },
  {
    "parent_id": 370100,
    "name": "大明湖",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003279
  },
  {
    "parent_id": 370100,
    "name": "东关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003280
  },
  {
    "parent_id": 370100,
    "name": "解放路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003281
  },
  {
    "parent_id": 370100,
    "name": "千佛山公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003282
  },
  {
    "parent_id": 370100,
    "name": "山师东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003283
  },
  {
    "parent_id": 370100,
    "name": "文化西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003284
  },
  {
    "parent_id": 370100,
    "name": "花园庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003287
  },
  {
    "parent_id": 370100,
    "name": "华能路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003288
  },
  {
    "parent_id": 370100,
    "name": "华阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003289
  },
  {
    "parent_id": 370100,
    "name": "化纤厂路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003290
  },
  {
    "parent_id": 370100,
    "name": "黄台南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003291
  },
  {
    "parent_id": 370100,
    "name": "山大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003292
  },
  {
    "parent_id": 370100,
    "name": "十里河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003293
  },
  {
    "parent_id": 370100,
    "name": "长盛小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003294
  },
  {
    "parent_id": 370100,
    "name": "甸柳新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003295
  },
  {
    "parent_id": 370100,
    "name": "甸柳庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003296
  },
  {
    "parent_id": 370100,
    "name": "东郊饭店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003297
  },
  {
    "parent_id": 370100,
    "name": "东门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003298
  },
  {
    "parent_id": 370100,
    "name": "公交总公司",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003299
  },
  {
    "parent_id": 370100,
    "name": "和平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003300
  },
  {
    "parent_id": 370100,
    "name": "黑虎泉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003301
  },
  {
    "parent_id": 370100,
    "name": "环山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003302
  },
  {
    "parent_id": 370100,
    "name": "建筑新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003303
  },
  {
    "parent_id": 370100,
    "name": "浆水泉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003304
  },
  {
    "parent_id": 370100,
    "name": "解放东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003305
  },
  {
    "parent_id": 370100,
    "name": "历山东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003306
  },
  {
    "parent_id": 370100,
    "name": "齐鲁医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003307
  },
  {
    "parent_id": 370100,
    "name": "千佛山西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003308
  },
  {
    "parent_id": 370100,
    "name": "青龙桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003309
  },
  {
    "parent_id": 370100,
    "name": "泉城广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003310
  },
  {
    "parent_id": 370100,
    "name": "泉城路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003311
  },
  {
    "parent_id": 370100,
    "name": "山大南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003312
  },
  {
    "parent_id": 370100,
    "name": "山东经济学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003313
  },
  {
    "parent_id": 370100,
    "name": "省博物馆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003314
  },
  {
    "parent_id": 370100,
    "name": "省中医",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003315
  },
  {
    "parent_id": 370100,
    "name": "舜怡佳园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003316
  },
  {
    "parent_id": 370100,
    "name": "司里街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003317
  },
  {
    "parent_id": 370100,
    "name": "文化东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003318
  },
  {
    "parent_id": 370100,
    "name": "县东巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003319
  },
  {
    "parent_id": 370100,
    "name": "燕山立交桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003320
  },
  {
    "parent_id": 370100,
    "name": "燕山小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003321
  },
  {
    "parent_id": 370100,
    "name": "燕子山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003322
  },
  {
    "parent_id": 370100,
    "name": "燕子山西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003323
  },
  {
    "parent_id": 370100,
    "name": "羊头峪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003324
  },
  {
    "parent_id": 370100,
    "name": "窑头路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003325
  },
  {
    "parent_id": 370100,
    "name": "银座商城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003326
  },
  {
    "parent_id": 370100,
    "name": "中心医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003327
  },
  {
    "parent_id": 370100,
    "name": "朝山街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003328
  },
  {
    "parent_id": 370100,
    "name": "泺源",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003329
  },
  {
    "parent_id": 370100,
    "name": "青年西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003330
  },
  {
    "parent_id": 370100,
    "name": "岔路街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003331
  },
  {
    "parent_id": 370100,
    "name": "二七新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003332
  },
  {
    "parent_id": 370100,
    "name": "杆石桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003333
  },
  {
    "parent_id": 370100,
    "name": "馆驿街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003334
  },
  {
    "parent_id": 370100,
    "name": "舜玉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003335
  },
  {
    "parent_id": 370100,
    "name": "王官庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003336
  },
  {
    "parent_id": 370100,
    "name": "玉函路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003337
  },
  {
    "parent_id": 370100,
    "name": "小纬六路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003338
  },
  {
    "parent_id": 370100,
    "name": "经十路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003339
  },
  {
    "parent_id": 370100,
    "name": "马鞍山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003340
  },
  {
    "parent_id": 370100,
    "name": "山西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003341
  },
  {
    "parent_id": 370100,
    "name": "八一立交桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003342
  },
  {
    "parent_id": 370100,
    "name": "白马家园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003343
  },
  {
    "parent_id": 370100,
    "name": "白马山南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003344
  },
  {
    "parent_id": 370100,
    "name": "大观园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003345
  },
  {
    "parent_id": 370100,
    "name": "大众广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003346
  },
  {
    "parent_id": 370100,
    "name": "二环南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003348
  },
  {
    "parent_id": 370100,
    "name": "共青团路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003349
  },
  {
    "parent_id": 370100,
    "name": "济大路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003350
  },
  {
    "parent_id": 370100,
    "name": "建设路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003351
  },
  {
    "parent_id": 370100,
    "name": "经八路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003352
  },
  {
    "parent_id": 370100,
    "name": "经二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003353
  },
  {
    "parent_id": 370100,
    "name": "经七路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003354
  },
  {
    "parent_id": 370100,
    "name": "经七纬二",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003355
  },
  {
    "parent_id": 370100,
    "name": "经五路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003356
  },
  {
    "parent_id": 370100,
    "name": "梁家庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003357
  },
  {
    "parent_id": 370100,
    "name": "刘长山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003359
  },
  {
    "parent_id": 370100,
    "name": "六里山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003360
  },
  {
    "parent_id": 370100,
    "name": "七里山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003362
  },
  {
    "parent_id": 370100,
    "name": "人民商场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003363
  },
  {
    "parent_id": 370100,
    "name": "胜利大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003365
  },
  {
    "parent_id": 370100,
    "name": "省体育中心",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003366
  },
  {
    "parent_id": 370100,
    "name": "市政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003367
  },
  {
    "parent_id": 370100,
    "name": "四季花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003368
  },
  {
    "parent_id": 370100,
    "name": "四里村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003369
  },
  {
    "parent_id": 370100,
    "name": "纬二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003371
  },
  {
    "parent_id": 370100,
    "name": "纬三路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003372
  },
  {
    "parent_id": 370100,
    "name": "纬四路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003373
  },
  {
    "parent_id": 370100,
    "name": "纬一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003374
  },
  {
    "parent_id": 370100,
    "name": "魏家庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003375
  },
  {
    "parent_id": 370100,
    "name": "卧龙花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003376
  },
  {
    "parent_id": 370100,
    "name": "英雄山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003378
  },
  {
    "parent_id": 370100,
    "name": "张庄路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003379
  },
  {
    "parent_id": 370100,
    "name": "八里桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003380
  },
  {
    "parent_id": 370100,
    "name": "道德街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003382
  },
  {
    "parent_id": 370100,
    "name": "段店北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003383
  },
  {
    "parent_id": 370100,
    "name": "二环西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003384
  },
  {
    "parent_id": 370100,
    "name": "机床二厂路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003385
  },
  {
    "parent_id": 370100,
    "name": "经二纬六",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003386
  },
  {
    "parent_id": 370100,
    "name": "经六路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003387
  },
  {
    "parent_id": 370100,
    "name": "经七纬八",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003388
  },
  {
    "parent_id": 370100,
    "name": "经七纬十二",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003389
  },
  {
    "parent_id": 370100,
    "name": "经三路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003390
  },
  {
    "parent_id": 370100,
    "name": "经三纬七",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003391
  },
  {
    "parent_id": 370100,
    "name": "经四路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003393
  },
  {
    "parent_id": 370100,
    "name": "南辛庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003397
  },
  {
    "parent_id": 370100,
    "name": "青年公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003398
  },
  {
    "parent_id": 370100,
    "name": "省立医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003399
  },
  {
    "parent_id": 370100,
    "name": "纬九路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003400
  },
  {
    "parent_id": 370100,
    "name": "纬七路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003401
  },
  {
    "parent_id": 370100,
    "name": "纬十二路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003402
  },
  {
    "parent_id": 370100,
    "name": "五里沟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003403
  },
  {
    "parent_id": 370100,
    "name": "五里牌坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003404
  },
  {
    "parent_id": 370100,
    "name": "小辛庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003405
  },
  {
    "parent_id": 370100,
    "name": "闫千户小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003406
  },
  {
    "parent_id": 370100,
    "name": "营市街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003407
  },
  {
    "parent_id": 370100,
    "name": "营市西街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003408
  },
  {
    "parent_id": 370100,
    "name": "振兴街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003409
  },
  {
    "parent_id": 370100,
    "name": "中大槐树",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003410
  },
  {
    "parent_id": 370100,
    "name": "德兴街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003411
  },
  {
    "parent_id": 370100,
    "name": "经五纬六",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003412
  },
  {
    "parent_id": 370100,
    "name": "纬六路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003413
  },
  {
    "parent_id": 370100,
    "name": "纬五路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003414
  },
  {
    "parent_id": 370100,
    "name": "经一路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003415
  },
  {
    "parent_id": 370100,
    "name": "火车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003419
  },
  {
    "parent_id": 370100,
    "name": "无影山",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003421
  },
  {
    "parent_id": 370100,
    "name": "济齐路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003422
  },
  {
    "parent_id": 370100,
    "name": "交校路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003423
  },
  {
    "parent_id": 370100,
    "name": "宝华街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003424
  },
  {
    "parent_id": 370100,
    "name": "北关",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003425
  },
  {
    "parent_id": 370100,
    "name": "北坦大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003426
  },
  {
    "parent_id": 370100,
    "name": "标山南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003427
  },
  {
    "parent_id": 370100,
    "name": "长途汽车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003428
  },
  {
    "parent_id": 370100,
    "name": "陈家楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003429
  },
  {
    "parent_id": 370100,
    "name": "堤口路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003430
  },
  {
    "parent_id": 370100,
    "name": "东西丹凤街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003431
  },
  {
    "parent_id": 370100,
    "name": "凤凰山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003432
  },
  {
    "parent_id": 370100,
    "name": "凤凰山南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003433
  },
  {
    "parent_id": 370100,
    "name": "工人新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003434
  },
  {
    "parent_id": 370100,
    "name": "官扎营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003435
  },
  {
    "parent_id": 370100,
    "name": "交通学院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003436
  },
  {
    "parent_id": 370100,
    "name": "历山北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003438
  },
  {
    "parent_id": 370100,
    "name": "联四路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003439
  },
  {
    "parent_id": 370100,
    "name": "刘家庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003440
  },
  {
    "parent_id": 370100,
    "name": "柳云小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003441
  },
  {
    "parent_id": 370100,
    "name": "清河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003443
  },
  {
    "parent_id": 370100,
    "name": "三孔桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003444
  },
  {
    "parent_id": 370100,
    "name": "少年宫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003445
  },
  {
    "parent_id": 370100,
    "name": "生产路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003446
  },
  {
    "parent_id": 370100,
    "name": "师范路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003447
  },
  {
    "parent_id": 370100,
    "name": "市立四院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003448
  },
  {
    "parent_id": 370100,
    "name": "水屯北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003449
  },
  {
    "parent_id": 370100,
    "name": "水屯路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003450
  },
  {
    "parent_id": 370100,
    "name": "天成路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003452
  },
  {
    "parent_id": 370100,
    "name": "天桥东街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003453
  },
  {
    "parent_id": 370100,
    "name": "纬北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003454
  },
  {
    "parent_id": 370100,
    "name": "制锦市小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003457
  },
  {
    "parent_id": 370100,
    "name": "洪家楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003458
  },
  {
    "parent_id": 370100,
    "name": "华龙路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003459
  },
  {
    "parent_id": 370100,
    "name": "百花公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003460
  },
  {
    "parent_id": 370100,
    "name": "二环东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003462
  },
  {
    "parent_id": 370100,
    "name": "洪楼广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003465
  },
  {
    "parent_id": 370100,
    "name": "洪楼南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003466
  },
  {
    "parent_id": 370100,
    "name": "洪楼西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003467
  },
  {
    "parent_id": 370100,
    "name": "花园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003468
  },
  {
    "parent_id": 370100,
    "name": "花园小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003469
  },
  {
    "parent_id": 370100,
    "name": "华信路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003471
  },
  {
    "parent_id": 370100,
    "name": "闵子骞路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003474
  },
  {
    "parent_id": 370100,
    "name": "南全福小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003475
  },
  {
    "parent_id": 370100,
    "name": "七里堡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003476
  },
  {
    "parent_id": 370100,
    "name": "七里河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003477
  },
  {
    "parent_id": 370100,
    "name": "全福",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003479
  },
  {
    "parent_id": 370100,
    "name": "山大北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003481
  },
  {
    "parent_id": 370100,
    "name": "辛祝路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003482
  },
  {
    "parent_id": 370100,
    "name": "鑫达小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003485
  },
  {
    "parent_id": 370100,
    "name": "益寿路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100003486
  },
  {
    "parent_id": 370100,
    "name": "趵突泉",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005275
  },
  {
    "parent_id": 370100,
    "name": "西市场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005276
  },
  {
    "parent_id": 370100,
    "name": "北园大街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005277
  },
  {
    "parent_id": 500000,
    "name": "石坪桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000305
  },
  {
    "parent_id": 500000,
    "name": "谢家湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000306
  },
  {
    "parent_id": 500000,
    "name": "杨家坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000307
  },
  {
    "parent_id": 500000,
    "name": "大堰",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000308
  },
  {
    "parent_id": 500000,
    "name": "九龙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000314
  },
  {
    "parent_id": 500000,
    "name": "开发区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000315
  },
  {
    "parent_id": 500000,
    "name": "石桥铺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000317
  },
  {
    "parent_id": 500000,
    "name": "渝州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000321
  },
  {
    "parent_id": 500000,
    "name": "天星桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000342
  },
  {
    "parent_id": 500000,
    "name": "土湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000343
  },
  {
    "parent_id": 500000,
    "name": "小龙坎",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000344
  },
  {
    "parent_id": 500000,
    "name": "重庆大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000345
  },
  {
    "parent_id": 500000,
    "name": "汉渝路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000348
  },
  {
    "parent_id": 500000,
    "name": "区政府",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000353
  },
  {
    "parent_id": 500000,
    "name": "覃家岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000356
  },
  {
    "parent_id": 500000,
    "name": "渝碚路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000361
  },
  {
    "parent_id": 500000,
    "name": "南滨路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000366
  },
  {
    "parent_id": 500000,
    "name": "南坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000367
  },
  {
    "parent_id": 500000,
    "name": "四公里",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000369
  },
  {
    "parent_id": 500000,
    "name": "铜元局",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000370
  },
  {
    "parent_id": 500000,
    "name": "花园路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000375
  },
  {
    "parent_id": 500000,
    "name": "回龙湾",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000376
  },
  {
    "parent_id": 500000,
    "name": "龙溪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000413
  },
  {
    "parent_id": 500000,
    "name": "冉家坝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000427
  },
  {
    "parent_id": 500000,
    "name": "松树桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000434
  },
  {
    "parent_id": 500000,
    "name": "大坪",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000452
  },
  {
    "parent_id": 500000,
    "name": "大溪沟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000453
  },
  {
    "parent_id": 500000,
    "name": "解放碑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000454
  },
  {
    "parent_id": 500000,
    "name": "两路口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000455
  },
  {
    "parent_id": 500000,
    "name": "七星岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000456
  },
  {
    "parent_id": 500000,
    "name": "上清寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000457
  },
  {
    "parent_id": 500000,
    "name": "菜园坝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000458
  },
  {
    "parent_id": 500000,
    "name": "鹅岭",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000459
  },
  {
    "parent_id": 500000,
    "name": "化龙桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000460
  },
  {
    "parent_id": 500000,
    "name": "嘉滨路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000461
  },
  {
    "parent_id": 500000,
    "name": "较场口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000462
  },
  {
    "parent_id": 500000,
    "name": "王家坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000463
  },
  {
    "parent_id": 500000,
    "name": "望龙门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000464
  },
  {
    "parent_id": 500000,
    "name": "马王乡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000469
  },
  {
    "parent_id": 500000,
    "name": "跃进村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000472
  },
  {
    "parent_id": 500000,
    "name": "观音桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000489
  },
  {
    "parent_id": 500000,
    "name": "五里店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000490
  },
  {
    "parent_id": 500000,
    "name": "洋河花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000491
  },
  {
    "parent_id": 500000,
    "name": "华新街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000495
  },
  {
    "parent_id": 500000,
    "name": "石马河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100000496
  },
  {
    "parent_id": 500000,
    "name": "高新区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005243
  },
  {
    "parent_id": 530100,
    "name": "关上",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001578
  },
  {
    "parent_id": 530100,
    "name": "昆明站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001579
  },
  {
    "parent_id": 530100,
    "name": "宝海公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001580
  },
  {
    "parent_id": 530100,
    "name": "宝海路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001581
  },
  {
    "parent_id": 530100,
    "name": "东站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001582
  },
  {
    "parent_id": 530100,
    "name": "和平村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001583
  },
  {
    "parent_id": 530100,
    "name": "和平新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001584
  },
  {
    "parent_id": 530100,
    "name": "金马",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001585
  },
  {
    "parent_id": 530100,
    "name": "菊花村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001587
  },
  {
    "parent_id": 530100,
    "name": "民航路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001588
  },
  {
    "parent_id": 530100,
    "name": "日新小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001589
  },
  {
    "parent_id": 530100,
    "name": "太和",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001590
  },
  {
    "parent_id": 530100,
    "name": "塘子巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001591
  },
  {
    "parent_id": 530100,
    "name": "吴井路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001592
  },
  {
    "parent_id": 530100,
    "name": "大树营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001593
  },
  {
    "parent_id": 530100,
    "name": "金马立交桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001594
  },
  {
    "parent_id": 530100,
    "name": "东寺街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001595
  },
  {
    "parent_id": 530100,
    "name": "华昌路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001596
  },
  {
    "parent_id": 530100,
    "name": "气象路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001597
  },
  {
    "parent_id": 530100,
    "name": "安康路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001598
  },
  {
    "parent_id": 530100,
    "name": "船房小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001600
  },
  {
    "parent_id": 530100,
    "name": "春苑小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001601
  },
  {
    "parent_id": 530100,
    "name": "大观楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001602
  },
  {
    "parent_id": 530100,
    "name": "丹霞路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001603
  },
  {
    "parent_id": 530100,
    "name": "东陆饭店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001604
  },
  {
    "parent_id": 530100,
    "name": "福海",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001605
  },
  {
    "parent_id": 530100,
    "name": "工人新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001606
  },
  {
    "parent_id": 530100,
    "name": "环城西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001608
  },
  {
    "parent_id": 530100,
    "name": "金碧",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001609
  },
  {
    "parent_id": 530100,
    "name": "金马坊",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001610
  },
  {
    "parent_id": 530100,
    "name": "近华浦路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001611
  },
  {
    "parent_id": 530100,
    "name": "近日楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001612
  },
  {
    "parent_id": 530100,
    "name": "梁源小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001613
  },
  {
    "parent_id": 530100,
    "name": "前卫",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001616
  },
  {
    "parent_id": 530100,
    "name": "秋苑小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001617
  },
  {
    "parent_id": 530100,
    "name": "西华小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001618
  },
  {
    "parent_id": 530100,
    "name": "西苑立交桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001619
  },
  {
    "parent_id": 530100,
    "name": "新闻路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001620
  },
  {
    "parent_id": 530100,
    "name": "兴苑路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001621
  },
  {
    "parent_id": 530100,
    "name": "严家地",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001622
  },
  {
    "parent_id": 530100,
    "name": "阳光花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001623
  },
  {
    "parent_id": 530100,
    "name": "杨家地",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001624
  },
  {
    "parent_id": 530100,
    "name": "永昌",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001625
  },
  {
    "parent_id": 530100,
    "name": "云兴路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001626
  },
  {
    "parent_id": 530100,
    "name": "正和小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001627
  },
  {
    "parent_id": 530100,
    "name": "棕树营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001628
  },
  {
    "parent_id": 530100,
    "name": "金星立交桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001629
  },
  {
    "parent_id": 530100,
    "name": "人民东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001630
  },
  {
    "parent_id": 530100,
    "name": "白龙路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001631
  },
  {
    "parent_id": 530100,
    "name": "白塔路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001632
  },
  {
    "parent_id": 530100,
    "name": "白云路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001633
  },
  {
    "parent_id": 530100,
    "name": "北京路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001634
  },
  {
    "parent_id": 530100,
    "name": "东风广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001636
  },
  {
    "parent_id": 530100,
    "name": "东风巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001637
  },
  {
    "parent_id": 530100,
    "name": "东华",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001638
  },
  {
    "parent_id": 530100,
    "name": "环城北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001639
  },
  {
    "parent_id": 530100,
    "name": "交三桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001640
  },
  {
    "parent_id": 530100,
    "name": "金康园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001641
  },
  {
    "parent_id": 530100,
    "name": "金实小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001642
  },
  {
    "parent_id": 530100,
    "name": "联盟",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001643
  },
  {
    "parent_id": 530100,
    "name": "刘家营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001644
  },
  {
    "parent_id": 530100,
    "name": "麻线营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001645
  },
  {
    "parent_id": 530100,
    "name": "苏家村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001646
  },
  {
    "parent_id": 530100,
    "name": "拓东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001647
  },
  {
    "parent_id": 530100,
    "name": "王旗营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001648
  },
  {
    "parent_id": 530100,
    "name": "新迎路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001649
  },
  {
    "parent_id": 530100,
    "name": "延安医院",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001650
  },
  {
    "parent_id": 530100,
    "name": "颐华路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001651
  },
  {
    "parent_id": 530100,
    "name": "席子营",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001653
  },
  {
    "parent_id": 530100,
    "name": "建设路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005109
  },
  {
    "parent_id": 530100,
    "name": "青年路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005122
  },
  {
    "parent_id": 530100,
    "name": "西站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005258
  },
  {
    "parent_id": 530100,
    "name": "学府路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005274
  },
  {
    "parent_id": 530100,
    "name": "北门街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005318
  },
  {
    "parent_id": 530100,
    "name": "北教场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005386
  },
  {
    "parent_id": 530100,
    "name": "翠湖公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005387
  },
  {
    "parent_id": 530100,
    "name": "丰宁小区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005388
  },
  {
    "parent_id": 530100,
    "name": "黄土坡",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005389
  },
  {
    "parent_id": 530100,
    "name": "三市街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005390
  },
  {
    "parent_id": 530100,
    "name": "小西门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005391
  },
  {
    "parent_id": 530100,
    "name": "白龙寺",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005392
  },
  {
    "parent_id": 340100,
    "name": "亳州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001403
  },
  {
    "parent_id": 340100,
    "name": "城隍庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001404
  },
  {
    "parent_id": 340100,
    "name": "鼓楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001405
  },
  {
    "parent_id": 340100,
    "name": "双岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001406
  },
  {
    "parent_id": 340100,
    "name": "逍遥津",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001407
  },
  {
    "parent_id": 340100,
    "name": "安庆路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001408
  },
  {
    "parent_id": 340100,
    "name": "白水坝",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001409
  },
  {
    "parent_id": 340100,
    "name": "百花井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001410
  },
  {
    "parent_id": 340100,
    "name": "长江中路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001411
  },
  {
    "parent_id": 340100,
    "name": "大西门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001412
  },
  {
    "parent_id": 340100,
    "name": "砀山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001413
  },
  {
    "parent_id": 340100,
    "name": "阜南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001414
  },
  {
    "parent_id": 340100,
    "name": "阜阳北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001415
  },
  {
    "parent_id": 340100,
    "name": "阜阳路桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001416
  },
  {
    "parent_id": 340100,
    "name": "高河埂",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001417
  },
  {
    "parent_id": 340100,
    "name": "工大北区",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001418
  },
  {
    "parent_id": 340100,
    "name": "公交四公司",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001419
  },
  {
    "parent_id": 340100,
    "name": "光明",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001420
  },
  {
    "parent_id": 340100,
    "name": "海棠",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001421
  },
  {
    "parent_id": 340100,
    "name": "红星路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001422
  },
  {
    "parent_id": 340100,
    "name": "六安路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001423
  },
  {
    "parent_id": 340100,
    "name": "六安路小学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001424
  },
  {
    "parent_id": 340100,
    "name": "庐江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001425
  },
  {
    "parent_id": 340100,
    "name": "绿都花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001426
  },
  {
    "parent_id": 340100,
    "name": "蒙城路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001427
  },
  {
    "parent_id": 340100,
    "name": "南国花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001428
  },
  {
    "parent_id": 340100,
    "name": "荣事达大道",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001429
  },
  {
    "parent_id": 340100,
    "name": "三牌楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001430
  },
  {
    "parent_id": 340100,
    "name": "三孝口",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001431
  },
  {
    "parent_id": 340100,
    "name": "商之都",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001432
  },
  {
    "parent_id": 340100,
    "name": "市府广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001433
  },
  {
    "parent_id": 340100,
    "name": "寿春",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001434
  },
  {
    "parent_id": 340100,
    "name": "四牌楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001435
  },
  {
    "parent_id": 340100,
    "name": "宿州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001436
  },
  {
    "parent_id": 340100,
    "name": "濉溪路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001437
  },
  {
    "parent_id": 340100,
    "name": "望城店",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001438
  },
  {
    "parent_id": 340100,
    "name": "五河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001439
  },
  {
    "parent_id": 340100,
    "name": "县桥",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001440
  },
  {
    "parent_id": 340100,
    "name": "杏花公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001441
  },
  {
    "parent_id": 340100,
    "name": "杏林",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001442
  },
  {
    "parent_id": 340100,
    "name": "益民",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001443
  },
  {
    "parent_id": 340100,
    "name": "四里河",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001444
  },
  {
    "parent_id": 340100,
    "name": "大通路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001445
  },
  {
    "parent_id": 340100,
    "name": "明光路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001446
  },
  {
    "parent_id": 340100,
    "name": "三里街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001447
  },
  {
    "parent_id": 340100,
    "name": "胜利广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001448
  },
  {
    "parent_id": 340100,
    "name": "胜利路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001449
  },
  {
    "parent_id": 340100,
    "name": "和平路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001450
  },
  {
    "parent_id": 340100,
    "name": "合肥站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001452
  },
  {
    "parent_id": 340100,
    "name": "大东门",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001453
  },
  {
    "parent_id": 340100,
    "name": "安徽大市场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001454
  },
  {
    "parent_id": 340100,
    "name": "长淮",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001455
  },
  {
    "parent_id": 340100,
    "name": "车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001457
  },
  {
    "parent_id": 340100,
    "name": "城东",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001458
  },
  {
    "parent_id": 340100,
    "name": "滁州路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001459
  },
  {
    "parent_id": 340100,
    "name": "当涂路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001460
  },
  {
    "parent_id": 340100,
    "name": "方庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001461
  },
  {
    "parent_id": 340100,
    "name": "凤阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001462
  },
  {
    "parent_id": 340100,
    "name": "国际汽车城",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001463
  },
  {
    "parent_id": 340100,
    "name": "合裕路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001464
  },
  {
    "parent_id": 340100,
    "name": "和平广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001465
  },
  {
    "parent_id": 340100,
    "name": "金大塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001467
  },
  {
    "parent_id": 340100,
    "name": "琅琊山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001468
  },
  {
    "parent_id": 340100,
    "name": "临淮路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001469
  },
  {
    "parent_id": 340100,
    "name": "临泉路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001470
  },
  {
    "parent_id": 340100,
    "name": "七里站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001472
  },
  {
    "parent_id": 340100,
    "name": "全椒路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001473
  },
  {
    "parent_id": 340100,
    "name": "十一中",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001474
  },
  {
    "parent_id": 340100,
    "name": "双七路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001475
  },
  {
    "parent_id": 340100,
    "name": "天长路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001476
  },
  {
    "parent_id": 340100,
    "name": "铜陵路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001478
  },
  {
    "parent_id": 340100,
    "name": "铜陵新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001479
  },
  {
    "parent_id": 340100,
    "name": "汪塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001480
  },
  {
    "parent_id": 340100,
    "name": "五里井",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001481
  },
  {
    "parent_id": 340100,
    "name": "新亚汽车站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001482
  },
  {
    "parent_id": 340100,
    "name": "裕丰花市",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001483
  },
  {
    "parent_id": 340100,
    "name": "元一时代广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001484
  },
  {
    "parent_id": 340100,
    "name": "站塘",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001485
  },
  {
    "parent_id": 340100,
    "name": "站西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001486
  },
  {
    "parent_id": 340100,
    "name": "张洼路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001487
  },
  {
    "parent_id": 340100,
    "name": "东至路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001488
  },
  {
    "parent_id": 340100,
    "name": "安徽大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001491
  },
  {
    "parent_id": 340100,
    "name": "安徽农业大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001492
  },
  {
    "parent_id": 340100,
    "name": "安居苑",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001493
  },
  {
    "parent_id": 340100,
    "name": "奥林花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001494
  },
  {
    "parent_id": 340100,
    "name": "长江西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001495
  },
  {
    "parent_id": 340100,
    "name": "陈村路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001496
  },
  {
    "parent_id": 340100,
    "name": "翠竹园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001497
  },
  {
    "parent_id": 340100,
    "name": "二环路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001499
  },
  {
    "parent_id": 340100,
    "name": "二里街",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001500
  },
  {
    "parent_id": 340100,
    "name": "樊洼路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001501
  },
  {
    "parent_id": 340100,
    "name": "贵池路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001502
  },
  {
    "parent_id": 340100,
    "name": "合作化北路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001504
  },
  {
    "parent_id": 340100,
    "name": "合作化南路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001505
  },
  {
    "parent_id": 340100,
    "name": "荷叶地",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001506
  },
  {
    "parent_id": 340100,
    "name": "琥珀山庄",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001507
  },
  {
    "parent_id": 340100,
    "name": "黄山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001509
  },
  {
    "parent_id": 340100,
    "name": "霍山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001510
  },
  {
    "parent_id": 340100,
    "name": "科技大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001513
  },
  {
    "parent_id": 340100,
    "name": "科技园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001514
  },
  {
    "parent_id": 340100,
    "name": "龙河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001515
  },
  {
    "parent_id": 340100,
    "name": "梅山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001516
  },
  {
    "parent_id": 340100,
    "name": "淠河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001519
  },
  {
    "parent_id": 340100,
    "name": "潜山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001520
  },
  {
    "parent_id": 340100,
    "name": "青阳路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001521
  },
  {
    "parent_id": 340100,
    "name": "清溪路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001522
  },
  {
    "parent_id": 340100,
    "name": "三里庵",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001524
  },
  {
    "parent_id": 340100,
    "name": "石台路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001526
  },
  {
    "parent_id": 340100,
    "name": "史河路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001527
  },
  {
    "parent_id": 340100,
    "name": "望江路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001528
  },
  {
    "parent_id": 340100,
    "name": "西园新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001530
  },
  {
    "parent_id": 340100,
    "name": "西站",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001531
  },
  {
    "parent_id": 340100,
    "name": "仪表厂",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001533
  },
  {
    "parent_id": 340100,
    "name": "岳西路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001535
  },
  {
    "parent_id": 340100,
    "name": "巢湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001536
  },
  {
    "parent_id": 340100,
    "name": "芜湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001537
  },
  {
    "parent_id": 340100,
    "name": "常青",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001538
  },
  {
    "parent_id": 340100,
    "name": "大钟楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001540
  },
  {
    "parent_id": 340100,
    "name": "稻香楼",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001541
  },
  {
    "parent_id": 340100,
    "name": "东陈岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001542
  },
  {
    "parent_id": 340100,
    "name": "东流路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001543
  },
  {
    "parent_id": 340100,
    "name": "二中",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001544
  },
  {
    "parent_id": 340100,
    "name": "风和园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001545
  },
  {
    "parent_id": 340100,
    "name": "合肥工业大学",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001547
  },
  {
    "parent_id": 340100,
    "name": "合家福购物广场",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001548
  },
  {
    "parent_id": 340100,
    "name": "金安花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001549
  },
  {
    "parent_id": 340100,
    "name": "九华山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001550
  },
  {
    "parent_id": 340100,
    "name": "马鞍山路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001553
  },
  {
    "parent_id": 340100,
    "name": "南园新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001554
  },
  {
    "parent_id": 340100,
    "name": "宁国路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001555
  },
  {
    "parent_id": 340100,
    "name": "前进巷",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001556
  },
  {
    "parent_id": 340100,
    "name": "世纪阳光花园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001558
  },
  {
    "parent_id": 340100,
    "name": "曙光新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001559
  },
  {
    "parent_id": 340100,
    "name": "宿松路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001560
  },
  {
    "parent_id": 340100,
    "name": "太湖路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001561
  },
  {
    "parent_id": 340100,
    "name": "铁四局",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001562
  },
  {
    "parent_id": 340100,
    "name": "桐城路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001563
  },
  {
    "parent_id": 340100,
    "name": "屯溪路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001564
  },
  {
    "parent_id": 340100,
    "name": "王大郢",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001565
  },
  {
    "parent_id": 340100,
    "name": "卫岗",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001566
  },
  {
    "parent_id": 340100,
    "name": "文昌新村",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001567
  },
  {
    "parent_id": 340100,
    "name": "宣城路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001568
  },
  {
    "parent_id": 340100,
    "name": "姚公庙",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001569
  },
  {
    "parent_id": 340100,
    "name": "周谷堆",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001572
  },
  {
    "parent_id": 340100,
    "name": "包河公园",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001573
  },
  {
    "parent_id": 340100,
    "name": "金寨路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100001574
  },
  {
    "parent_id": 340100,
    "name": "长江东路",
    "region_level": "REGION_LEVEL_BUSINESS_DISTRICT",
    "id": 100005260
  }
]
