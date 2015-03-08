/** @jsx React.DOM */
var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.comments.map(function (comment, index) {
      return (
        <Comment author={comment.author} text={comment.text} key={index} />
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
