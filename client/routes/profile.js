FlowRouter.route('/profile_show', {
	name: 'App.profile_show',
	action(){
		BlazeLayout.render('profile_show', {main: 'profile_edit'});
	},
});