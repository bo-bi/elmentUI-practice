<template>
  <div>
    {{person}}
    <br>
    <button @click="add">添加属性</button>

  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        data() {
            return {
              person: {
                // name: 'safa',
                // age: 12

              },
              musicTagList: [
                {
                  "id": 164,
                  "name": "情绪",
                  "real": false,
                  "parent": null,
                  "children": [
                    {
                      "id": 347,
                      "name": "科技感的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 177,
                      "name": "积极/明快",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 184,
                      "name": "振奋人心",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 179,
                      "name": "宽广/磅礴",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 180,
                      "name": "随和/温暖",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 341,
                      "name": "励志的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 345,
                      "name": "清新的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 349,
                      "name": "放松/神游",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 342,
                      "name": "时尚的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 181,
                      "name": "多愁善感/抒情",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 331,
                      "name": "可爱/童真",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 334,
                      "name": "浪漫/幸福",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 348,
                      "name": "异域的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 335,
                      "name": "感性/煽情",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 332,
                      "name": "慵懒/魅惑",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 344,
                      "name": "燃烧的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 338,
                      "name": "狂野的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 178,
                      "name": "好斗/急躁",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 346,
                      "name": "冷淡的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 333,
                      "name": "紧张/惊悚",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 176,
                      "name": "消极/忧郁/阴暗",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 339,
                      "name": "奇幻/魔法",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 340,
                      "name": "空灵的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 337,
                      "name": "辉煌的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 336,
                      "name": "庄重的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 343,
                      "name": "复古的",
                      "real": true,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 183,
                      "name": "戏剧的",
                      "real": false,
                      "parent": 164,
                      "children": []
                    },
                    {
                      "id": 182,
                      "name": "滑稽/荒诞/离奇",
                      "real": false,
                      "parent": 164,
                      "children": []
                    }
                  ]
                },
                {
                  "id": 166,
                  "name": "速度",
                  "real": false,
                  "parent": null,
                  "children": [
                    {
                      "id": 201,
                      "name": "0-45",
                      "real": false,
                      "parent": 166,
                      "children": []
                    },
                    {
                      "id": 202,
                      "name": "45-63",
                      "real": false,
                      "parent": 166,
                      "children": []
                    },
                    {
                      "id": 203,
                      "name": "63-78",
                      "real": false,
                      "parent": 166,
                      "children": []
                    },
                    {
                      "id": 204,
                      "name": "78-95",
                      "real": false,
                      "parent": 166,
                      "children": []
                    },
                    {
                      "id": 205,
                      "name": "95-130",
                      "real": false,
                      "parent": 166,
                      "children": []
                    },
                    {
                      "id": 206,
                      "name": "130-160",
                      "real": false,
                      "parent": 166,
                      "children": []
                    },
                    {
                      "id": 207,
                      "name": "160+",
                      "real": false,
                      "parent": 166,
                      "children": []
                    },
                    {
                      "id": 208,
                      "name": "散板/无固定速度",
                      "real": false,
                      "parent": 166,
                      "children": []
                    }
                  ]
                }
              ]
            }
        },
      created() {
          // for(let i in this.musicTagList) {
          //   console.log(i)
          //   // console.log(this.person[i])
          //   this.person[i.name] = {}
          // }
          // this.musicTagList.map( (item,index) => {
          //   console.log(item.name);
          //   this.person[item.name] = {};
          // })
      },
      methods: {
          add() {
            this.person['情绪'] = {
              movie: '我不是药神',
              score: 'A'
            }

            this.$forceUpdate();
          }
      }
    }
</script>

<style scoped>

</style>
