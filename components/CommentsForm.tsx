import React, { useRef, useState } from "react";

const CommentsForm = ({ slug }: { slug: string }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  return <div>CommentsForm</div>;
};

export default CommentsForm;
