// src/components/CommentsWidget.jsx
import React, { useEffect } from "react";
import commentBox from "commentbox.io";

function CommentsWidget() {
  useEffect(() => {
    // هنا بتحط الـ project ID اللي خدته من CommentBox.io
    const removeCommentBox = commentBox("5716451944038400-proj");

    // عشان لما تسيب الصفحة يشيل الـ widget
    return () => {
      removeCommentBox();
    };
  }, []);

  return <div className="commentbox" />;
}

export default CommentsWidget;
