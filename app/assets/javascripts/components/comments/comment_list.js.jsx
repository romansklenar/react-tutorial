/** @jsx React.DOM */
var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.comments.map(function (comment, index) {
      return (
        <Comment author={comment.author} comment={comment.comment} key={index} />
        );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
      );
  }
});
