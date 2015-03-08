// require_tree ./components

var ready = function () {
  React.render(
    <CommentBox url="/comments.json" pollInterval={2000} />,
    document.getElementById('comments')
  );
};

$(document).ready(ready);
