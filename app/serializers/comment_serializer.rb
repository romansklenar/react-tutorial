class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :author
end
