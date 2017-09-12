// download ===================================
Template.video_upload.onCreated(function () {
  Meteor.subscribe('files.images.all');
});

Template.file_video.helpers({
  file() {
    return Images.find();
  }
});

// upload ===================================
Template.uploadForm_video.onCreated(function () {
  this.currentUpload_video = new ReactiveVar(false);
});

Template.uploadForm_video.helpers({
  currentUpload_video() {
    return Template.instance().currentUpload_video.get();
  }
});

Template.uploadForm_video.events({
  'change #fileInputVideo'(e, template) {
    if (e.currentTarget_video.files && e.currentTarget_video.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const video_upload = Images.insert({
        file: e.currentTarget_video.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      video_upload.on('start', function () {
        template.currentUpload_video.set(this);
      });

      video_upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload_video.set(false);
      });

      video_upload.start();
    }
  }
});