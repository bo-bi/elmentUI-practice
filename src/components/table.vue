<template>
  <div>
    <button @click="checkIn">in操作符</button>
    <el-table
      :data="tableData"
      style="width: 300px;">

      <el-table-column width="40">
        <template slot-scope="scope">
          <el-popover
            placement="left"
            width="150"
            trigger="hover">
            <img :src="scope.row.avatar" style="width: 100%;" />
            <img class="music-avatar" slot="reference" :src="scope.row.avatar" :alt="scope.row.avatar" />
          </el-popover>
          <!--<span class="music-avatar">-->
          <!--<img :src="scope.row.avatar" />-->
          <!--</span>-->
        </template>
      </el-table-column>


      <el-table-column
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="70">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">添加{{scope.row.uuid}}</el-button>
          <div v-if="scope.row.uuid in uuidArray">存在</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        uuidArray:['3','10','11'],
        tableData: [
          {
            avatar: 'http://img1.imgtn.bdimg.com/it/u=1398462062,4062712461&fm=27&gp=0.jpg',
            date: '2016-05-02',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            uuid: '0'
          },
          {
            avatar: 'http://img1.imgtn.bdimg.com/it/u=967248387,3146829850&fm=27&gp=0.jpg',
            date: '2016-05-04',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            uuid: '1'
          },
          {
            avatar: 'http://img5.imgtn.bdimg.com/it/u=1974713559,323589320&fm=27&gp=0.jpg',
            date: '2016-05-01',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            uuid: '2'
          },
          {
            avatar: 'http://img2.imgtn.bdimg.com/it/u=3625373487,765685941&fm=27&gp=0.jpg',
            date: '2016-05-03',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            uuid: '3'
          },
          {
            avatar: 'http://img1.imgtn.bdimg.com/it/u=1398462062,4062712461&fm=27&gp=0.jpg',
            date: '2016-05-02',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            uuid: '4'
          },
          {
            avatar: 'http://img1.imgtn.bdimg.com/it/u=967248387,3146829850&fm=27&gp=0.jpg',
            date: '2016-05-04',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            uuid: '5'
          },
          {
            avatar: 'http://img5.imgtn.bdimg.com/it/u=1974713559,323589320&fm=27&gp=0.jpg',
            date: '2016-05-01',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            uuid: '6'
          },
          {
            avatar: 'http://img2.imgtn.bdimg.com/it/u=3625373487,765685941&fm=27&gp=0.jpg',
            date: '2016-05-03',
            name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            uuid: '7'
          }
          ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        console.log(row.uuid in this.uuidArray, "存在吗？");
      },
      checkIn() {
        let array = ['1','2','4','7','12'];

        console.log(array.includes('1'),"1存在吗?");
      }
    }
  }
</script>

<style>
  .music-avatar {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: pink;
  }
  .music-avatar img {
    width: 100%;
    height: 100%;
  }
  .el-table td {
    border-bottom: none;
  }
  .el-table td {
    padding: 0;
  }
  .el-table__header-wrapper {
    display: none;
  }
  .el-table::before {
    height: 0;
  }
</style>
