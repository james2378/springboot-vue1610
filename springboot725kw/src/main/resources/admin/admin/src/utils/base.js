const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot725kw/",
            name: "springboot725kw",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot725kw/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Java的小区物业管理系统设计与实现"
        } 
    }
}
export default base
