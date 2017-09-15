// var imageURL = fileObj._id;
// download ===================================
Template.upload_media.onCreated(function () {
  Meteor.subscribe('files.images.all');
});

Template.file01.helpers({
  file() {
    return Images.find();
  }
});

Template.file01.events({
  'click button'(e, template) {
    // file01.remove(this._id);
    console.log('click button');
  }
});

// upload ===================================
Template.uploadForm_1.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm_1.helpers({
  currentUpload() {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm_1.events({
  'change #fileInput'(e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload_media = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload_media.on('start', function () {
        template.currentUpload.set(this);
      });

      upload_media.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload_media.start();
    }
  }
});