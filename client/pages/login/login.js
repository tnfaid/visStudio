var myLogoutFunc = function(){
  console.log('testo hai');
};


Template.App_login.events({
  'click button'() {
    AccountsTemplates.logout();
  }
});

AccountsTemplates.configure({
	confirmPassword: false,
	termsUrl: 'terms-of-use',
	privacyUrl:'privacy',
  homeRoutePath : 'profile_show',//route to home
  onLogoutHook : myLogoutFunc
})

AccountsTemplates.addFields([
  {
  	_id: 'gender',
  	type: 'select',
  	displayName: 'Gender',
  	select: [
  		{
  			text: 'Male',
  			value: 'male'
  		}, {
  			text: 'Female',
  			value: 'female'
  		}
  	]
  }
]);

Template.App_login.onRendered(function(){
  $('.modal').modal();
  $(".button-collapse").sideNav();
});
