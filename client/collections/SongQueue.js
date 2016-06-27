// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add remove', function(){
      if(!this.at(1) && this.at(0)) this.playFirst();
      if(this.length > 1){
        this.at(0).play();
      }
    }, this);

    this.on('ended', function() {
      this.remove ( this.at(0) );
      if(this.length) this.playFirst();
    }, this);

    this.on('remove dequeue', function() {
      this.remove();
    });
  },

  playFirst: function(){
    this.at(0).play();
  }
});