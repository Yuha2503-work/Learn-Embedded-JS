//jshint esversion:6
exports.getDate = function() {
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
  var options = {
    weekday: 'long',
  };
  const today = new Date();

  return today.toLocaleDateString("en-US", options);
};
