Package.describe({
  summary: "Provides Metro UI (bootstrap)."
});

Package.on_use(function (api) {
  var path = Npm.require('path');
  var asset_path = path.join('assets');
  api.add_files(path.join(asset_path, 'metro-bootstrap.min.css'), 'client');
  api.add_files(path.join(asset_path, 'metro.min.js'), 'client');
});