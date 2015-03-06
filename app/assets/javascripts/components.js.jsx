// require_tree ./components

var ready = function () {
  React.renderComponent(
    <CommentBox url="/comments.json" />,
    document.getElementById('comments')
  );
};

$(document).ready(ready);
