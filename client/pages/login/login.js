var myLogoutFunt = function(){
	FlowRouter.go('/');
}

Template.login.events({
  'click button'() {
    AccountsTemplates.logout();
  },
});

AccountsTemplates.configure({
	confirmPassword: false,
	termsUrl: 'terms-of-use',
	privacyUrl:'privacy',
	onLogoutHook: myLogoutFunt
})

AccountsTemplates.addFields([
 {
  	_id: 'firstName',
  	type: 'text',
  	display: 'First Name',
  	required: true,
  	re: /(?=.*[a-z])(?=.*[A-Z])/,
  	errStr: '1 lowercase and 1 uppercase letter required'
  },
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
