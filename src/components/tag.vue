<template>
  <div>
    {{count}}
    <br>
    <button @click="add">添加</button>
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      :closable="true"
      :disable-transitions="true"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!--------------------------------------------------------------------->
    <div class="music-tag-list">
      <div class="tag-list-body" v-for="mainTag in musicTagList" :key="mainTag.id">
        <h4>{{ mainTag.name }}</h4>
        <el-tag
          v-for="tag in mainTag.children"
          :key="tag.id"
          type="gray"
          @click.native="setActiveMainTag(mainTag, tag)"
          :class="{ 'active': activeObj[mainTag.name] == tag }"
        >
          {{tag.name}}
          <el-button

            @click="removeTag(tag)"
            icon="el-icon-plus"
            :plain="true"
            type="warning"
            size="mini"
          >

          </el-button>
        </el-tag>
      </div>
    </div>
    <!--------------------------------------------------------------------->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        canRemove: false,
        activeObj: {},
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
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
      };
    },
    created() {
      this.musicTagList.map( (item) => {
        this.activeObj[item.name] = {}
      })
    },
    methods: {
      add() {
        this.count++
      },
      handleClose(tag) {
        console.log(tag,"tag")
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      setActiveMainTag(mainTag, tag) {
        console.log(mainTag,"mainTag")
        console.log(tag,"tag")
        this.activeObj[mainTag.name] = tag
        this.$forceUpdate();
      }

    }
  }
</script>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .music-tag-list {
    max-width: 680px;
  }
  .music-tag-list .tag-list-body {
    margin-top: 20px;
  }
  .music-tag-list .el-tag {
    margin: 4px 8px;
    cursor: pointer;
  }
  .active {
    color: #666;
    border-color: #ffe800;
    background-color: #ffe800;
  }
  /*.el-tag:hover {*/
    /*background-color: red;*/
  /*}*/
  .music-tag-list .tag-list-body .el-button{
    display: none;
    /*background-color: red;*/
  }
  .el-tag:hover .el-button {
    display: inline-block;
  }

</style>
