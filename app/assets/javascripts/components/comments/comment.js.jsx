/** @jsx React.DOM */
var Comment = React.createClass({
  render: function () {
    var converter = new Showdown.converter();
    var rawMarkup = converter.makeHtml(this.props.text.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});
