// init
var sdkAppID = 1400167504;
var userId = 'zhaoyang';
var accountType = 36862;
var userSig = 'eJxNjdFOgzAYRt*FW41rGRUx2QUaFmfYRhmbiTdNgR-oCC1hHYiL725DtujtOTnfd7GScPfAs0ydpWZ6 bMF6tpB1P2GRg9SiENAZ*F1xNXJZXh1vW5Ezrtm8y-8lp7xmkzIMOwjhR5cg5yrhqxUdMF7oaRETQmyE bmkP3UkoaYRtMowwRn9SiwamxHEInrvIu-2J0uB1QF9XQa4-NrtO90vIDhCtg331Xj7R7fmzDppKrCK1 vcObJB0o9cXLsk9jV868LHJkSotjnAwq893CJ-FsgPo48rdehl7Y2P5iYf38Ar8oWaw_';
var loginInfo = {
  'sdkAppID': sdkAppID, //用户所属应用id,必填
  'identifier': userId, //当前用户ID,必须是否字符串类型，必填
  'accountType': accountType, //用户所属应用帐号类型，必填
  'userSig': userSig,
  //当前用户身份凭证，必须是字符串类型，必填
  // 'identifierNick': null, //当前用户昵称，不用填写，登录接口会返回用户的昵称，如果没有设置，则返回用户的id
  // 'headurl': 'img/me.jpg' //当前用户默认头像，选填，如果设置过头像，则可以通过拉取个人资料接口来得到头像信息
};
var listeners = {
  onMsgNotify: onMsgNotify
};
var options = {

};
webim.login(loginInfo, listeners, options, function(res){
  // console.log(res)
});

// webim.syncMsgs(onMsgNotify);
function onMsgNotify(newMsgList) {
  //console.warn(newMsgList);
  var sess, newMsg;
  //获取所有聊天会话
  var sessMap = webim.MsgStore.sessMap();
  for (var j in newMsgList) {//遍历新消息
    newMsg = newMsgList[j];
    console.log(newMsg)
  }
}
