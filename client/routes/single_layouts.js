FlowRouter.route('/single_layouts', {
  name: 'App.single_layouts',
  action() {
    BlazeLayout.render('single_layouts');
  },
});

