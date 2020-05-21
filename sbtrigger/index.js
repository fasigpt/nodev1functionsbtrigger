module.exports = function(context, mySbMsg) {
 var a = context.test;
context.log(a.m);
context.log(mySbMsg.t);
    context.log('JavaScript ServiceBus queue trigger function processed message:', mySbMsg);
    context.done();
};