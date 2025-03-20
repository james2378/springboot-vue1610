export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"业主","menuJump":"列表","tableName":"yezhu"}],"menu":"业主管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"小区信息","menuJump":"列表","tableName":"xiaoquxinxi"}],"menu":"小区信息管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"物业人员","menuJump":"列表","tableName":"wuyerenyuan"}],"menu":"物业人员管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除","报表"],"menu":"资产信息","menuJump":"列表","tableName":"zichanxinxi"}],"menu":"资产信息管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","删除","修改"],"menu":"业主车辆","menuJump":"列表","tableName":"yezhucheliang"}],"menu":"业主车辆管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","删除","修改"],"menu":"业主宠物","menuJump":"列表","tableName":"yezhuchongwu"}],"menu":"业主宠物管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除","报表"],"menu":"车位信息","menuJump":"列表","tableName":"cheweixinxi"}],"menu":"车位信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除","审核","报表","修改"],"menu":"购买车位","menuJump":"列表","tableName":"goumaichewei"}],"menu":"购买车位管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","删除","报表"],"menu":"缴费通知","menuJump":"列表","tableName":"jiaofeitongzhi"}],"menu":"缴费通知管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"小区公告","tableName":"news"},{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看"],"menu":"小区信息列表","menuJump":"列表","tableName":"xiaoquxinxi"}],"menu":"小区信息模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","购买车位"],"menu":"车位信息列表","menuJump":"列表","tableName":"cheweixinxi"}],"menu":"车位信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"业主车辆","menuJump":"列表","tableName":"yezhucheliang"}],"menu":"业主车辆管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"业主宠物","menuJump":"列表","tableName":"yezhuchongwu"}],"menu":"业主宠物管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除","支付"],"menu":"购买车位","menuJump":"列表","tableName":"goumaichewei"}],"menu":"购买车位管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","支付"],"menu":"缴费通知","menuJump":"列表","tableName":"jiaofeitongzhi"}],"menu":"缴费通知管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看"],"menu":"小区信息列表","menuJump":"列表","tableName":"xiaoquxinxi"}],"menu":"小区信息模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","购买车位"],"menu":"车位信息列表","menuJump":"列表","tableName":"cheweixinxi"}],"menu":"车位信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"业主","tableName":"yezhu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除","报表"],"menu":"资产信息","menuJump":"列表","tableName":"zichanxinxi"}],"menu":"资产信息管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除","报表"],"menu":"缴费通知","menuJump":"列表","tableName":"jiaofeitongzhi"}],"menu":"缴费通知管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看"],"menu":"小区信息列表","menuJump":"列表","tableName":"xiaoquxinxi"}],"menu":"小区信息模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","购买车位"],"menu":"车位信息列表","menuJump":"列表","tableName":"cheweixinxi"}],"menu":"车位信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"物业人员","tableName":"wuyerenyuan"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
