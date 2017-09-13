
// download ===================================

Template.upload_media.onCreated(function () {
  Meteor.subscribe('files.images.all');
});

Template.file_media.helpers({
  file() {
    return Images.find();
  }
});

// Template.file_media.events({
//   'click .delete': function(){
//     file_media.remove(this._id);
//   }
// });

// upload ===================================
Template.uploadForm_media.onCreated(function () {
  this.currentUpload_media = new ReactiveVar(false);
});

Template.uploadForm_media.helpers({
  currentUpload_media() {
    return Template.instance().currentUpload_media.get();
  }
});

Template.uploadForm_media.events({
  'change #fileInput'(e, template) {
    if (e.currentTarget_media.files && e.currentTarget_media.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload_media = Images.insert({
        file: e.currentTarget_media.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload_media.on('start', function () {
        template.currentUpload_media.set(this);
      });

      upload_media.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload_media.set(false);
      });

      upload_media.start();
    }
  }
});



// Meteor.methods({
//   deleteImage: function(removeId){
//     return FoodCategory.remove(removeId);
//   }
// });