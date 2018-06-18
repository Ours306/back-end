export default function(req, res, next) {
    console.log('拦截到请求:' + req.path + ',待完成权限管理');
    if(req.path !== '/login' && req.path !== '/register') {
        let isLogin = checkIsLogin(req, res);
    }
    next();
}

function checkIsLogin(req, res) {

}