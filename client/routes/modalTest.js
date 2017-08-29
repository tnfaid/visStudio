FlowRouter.route('/modalTest', {
  name: 'modalTest',
  action() {
    BlazeLayout.render('App_body', { main: 'modalTest' });
  },
});
