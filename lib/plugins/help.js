/**
@module att
**/

/**
查看att命令帮助的插件
    
    att help minify

@class help
@namespace att.plugins
@static
**/

module.exports = function(att){
  
  /**
  显示帮助信息
  @method help
  @return {String} 帮助信息
  **/
  this.help = function(){
    var str = ['Options:',
      'att help COMMAND',
      '',
      'Examples:',
      ' #查看minify命令的帮助信息',
      ' att help minify'].join("\n").green;

    require('util').puts(str);
  }

  /**
  执行该插件
  @method execute
  @param {Object} argv 启动参数
  @param {Function} callback 回调函数
  **/
  this.execute = function(argv, callback){
    var command = argv._[1];
    if(!command){
      att.log.warn('the command is required.');
      return callback()
    }
    att.help(command);
    callback();
  }
}