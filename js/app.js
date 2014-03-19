App = Ember.Application.create();

App.Router.map(function(){
	this.resource('videos');

	// Sub Routes URL = /posts/new
	// this.resource('posts', function() {
	//    this.route('new');
	//  });
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('videos');
  }
});

App.VideosRoute = Ember.Route.extend({
		model: function(){
		return videoIds;
	}
});

var videoIds = Ember.A(
	['Z-TOHc7I1pc']
);

App.VideosController = Ember.ArrayController.extend({
	add: function(){
		videoIds.pushObject(this.newVideo);
		return videoIds;
	}
})