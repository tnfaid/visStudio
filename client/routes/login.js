FlowRouter.route('/login', {
  name: 'App.login',
  action() {
    BlazeLayout.render('App_body', { main: 'App_login' });
  },
});

FlowRouter.route('/loginMobile', {
	name: 'App.login_mobile',
	action(){
		BlazeLayout.render('App_body', {main: 'App_login_mobile'});
	}
})