/* class Timer{
  constructor(count){
    this.count = count;
    this.interval = null;
  }
  start(){
    const that = this;
    this.interval = setInterval(function(){
      if(that.count > 0){
        that.count --;
      }else{
        clearInterval(this.interval);
      }
      console.log(that.count);
    }, 1000);
  }
  stop(){
    clearInterval(this.interval);
  }
} */

class Timer{
  constructor(count, onUpdateCountHandler, onStopHandler){
    this.count = count;
    this.interval = null;
    this.onUpdateCountHandler = onUpdateCountHandler; // callback function
    this.onStopHandler = onStopHandler; // callback function
  }
  start(){
    const that = this;
    this.interval = setInterval(function(){
      if(that.count > 0){
        that.count --;
        that.onUpdateCountHandler(that.count);
      }else{
        that.stop();
      }
    }, 1000);
  }
  stop(){
    this.onStopHandler(this.count);
  }
}