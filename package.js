Package.describe({
  summary: "Provides Metro UI (bootstrap)."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');

  var path = Npm.require('path');
  var asset_path = path.join('metroui');
  api.add_files(path.join(asset_path, 'min', 'metro-bootstrap.min.css'), 'client');
  api.add_files(path.join(asset_path, 'min', 'metro.min.js'), 'client');
});