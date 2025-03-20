<template>
<div :style='{"border":"1px solid #ddd","padding":"20px","margin":"20px auto 0","borderRadius":"16px","background":"#fff","width":"1200px","position":"relative"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="车牌号" prop="chepaihao">
            <el-input v-model="ruleForm.chepaihao" 
                placeholder="车牌号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="车辆品牌" prop="cheliangpinpai">
            <el-input v-model="ruleForm.cheliangpinpai" 
                placeholder="车辆品牌" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="车辆类型" prop="cheliangleixing">
            <el-input v-model="ruleForm.cheliangleixing" 
                placeholder="车辆类型" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="颜色" prop="yanse">
            <el-input v-model="ruleForm.yanse" 
                placeholder="颜色" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}'  label="换挡方式" prop="huandangfangshi">
            <el-select v-model="ruleForm.huandangfangshi" placeholder="请选择换挡方式" >
              <el-option
                  v-for="(item,index) in huandangfangshiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="照片" v-if="type!='cross'" prop="zhaopian">
            <file-upload
            tip="点击上传照片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
            @change="zhaopianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' class="upload" v-else label="照片" prop="zhaopian">
                <img v-if="ruleForm.zhaopian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zhaopian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zhaopian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="座位数量" prop="zuoweishuliang">
            <el-input v-model="ruleForm.zuoweishuliang" 
                placeholder="座位数量" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="登记日期" prop="dengjiriqi" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.dengjiriqi" 
                  type="date"
                  placeholder="登记日期">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="账号" prop="zhanghao">
            <el-input v-model="ruleForm.zhanghao" 
                placeholder="账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="姓名" prop="xingming">
            <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="楼房号" prop="loufanghao">
            <el-input v-model="ruleForm.loufanghao" 
                placeholder="楼房号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="小区名称" prop="xiaoqumingcheng">
            <el-input v-model="ruleForm.xiaoqumingcheng" 
                placeholder="小区名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="车辆详情" prop="cheliangxiangqing">
            <editor 
                :style='{"minHeight":"300px","padding":"0","margin":"0","borderColor":"#ccc","backgroundColor":"#f9f9f9","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.cheliangxiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"20px 0 20px 0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","boxShadow":"1px 2px 3px #aaa","margin":"0 20px 0 0","color":"#666","outline":"none","borderRadius":"20px","background":"radial-gradient(circle, rgba(255,236,157,1) 0%, rgba(255,200,0,1) 100%)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #bbb","cursor":"pointer","padding":"0","boxShadow":"1px 2px 6px #ccc","margin":"0","color":"#999","outline":"none","borderRadius":"20px","background":"#fff","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          chepaihao: '',
          cheliangpinpai: '',
          cheliangleixing: '',
          yanse: '',
          huandangfangshi: '',
          zhaopian: '',
          zuoweishuliang: '',
          dengjiriqi: '',
          cheliangxiangqing: '',
          zhanghao: '',
          xingming: '',
          loufanghao: '',
          xiaoqumingcheng: '',
        },
        huandangfangshiOptions: [],
        rules: {
          chepaihao: [
            { required: true, message: '车牌号不能为空', trigger: 'blur' },
          ],
          cheliangpinpai: [
            { required: true, message: '车辆品牌不能为空', trigger: 'blur' },
          ],
          cheliangleixing: [
            { required: true, message: '车辆类型不能为空', trigger: 'blur' },
          ],
          yanse: [
          ],
          huandangfangshi: [
            { required: true, message: '换挡方式不能为空', trigger: 'blur' },
          ],
          zhaopian: [
          ],
          zuoweishuliang: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          dengjiriqi: [
          ],
          cheliangxiangqing: [
          ],
          zhanghao: [
          ],
          xingming: [
          ],
          loufanghao: [
          ],
          xiaoqumingcheng: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.dengjiriqi = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='chepaihao'){
              this.ruleForm.chepaihao = obj[o];
              continue;
            }
            if(o=='cheliangpinpai'){
              this.ruleForm.cheliangpinpai = obj[o];
              continue;
            }
            if(o=='cheliangleixing'){
              this.ruleForm.cheliangleixing = obj[o];
              continue;
            }
            if(o=='yanse'){
              this.ruleForm.yanse = obj[o];
              continue;
            }
            if(o=='huandangfangshi'){
              this.ruleForm.huandangfangshi = obj[o];
              continue;
            }
            if(o=='zhaopian'){
              this.ruleForm.zhaopian = obj[o].split(",")[0];
              continue;
            }
            if(o=='zuoweishuliang'){
              this.ruleForm.zuoweishuliang = obj[o];
              continue;
            }
            if(o=='dengjiriqi'){
              this.ruleForm.dengjiriqi = obj[o];
              continue;
            }
            if(o=='cheliangxiangqing'){
              this.ruleForm.cheliangxiangqing = obj[o];
              continue;
            }
            if(o=='zhanghao'){
              this.ruleForm.zhanghao = obj[o];
              continue;
            }
            if(o=='xingming'){
              this.ruleForm.xingming = obj[o];
              continue;
            }
            if(o=='loufanghao'){
              this.ruleForm.loufanghao = obj[o];
              continue;
            }
            if(o=='xiaoqumingcheng'){
              this.ruleForm.xiaoqumingcheng = obj[o];
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if(json.chepaihao!=''&&json.chepaihao){
                this.ruleForm.chepaihao = json.chepaihao
            }
            if(json.zhanghao!=''&&json.zhanghao){
                this.ruleForm.zhanghao = json.zhanghao
            }
            if(json.xingming!=''&&json.xingming){
                this.ruleForm.xingming = json.xingming
            }
            if(json.loufanghao!=''&&json.loufanghao){
                this.ruleForm.loufanghao = json.loufanghao
            }
            if(json.xiaoqumingcheng!=''&&json.xiaoqumingcheng){
                this.ruleForm.xiaoqumingcheng = json.xiaoqumingcheng
            }
          }
        });
        this.huandangfangshiOptions = "手动挡,自动挡".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('yezhucheliang/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('yezhucheliang/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('yezhucheliang/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('yezhucheliang/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      zhaopianUploadChange(fileUrls) {
          this.ruleForm.zhaopian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #999;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #999;
	  background: #f9f9f9;
	  width: 400px;
	  font-size: 14px;
	  min-height: 120px;
	}
</style>
