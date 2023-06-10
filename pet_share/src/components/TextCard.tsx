import React from "react";

type TextCardProps = {
  title: string;
  textBody: string;
};

const TextCard = () => {
  return (
    <div className="card">
      <div className="card-body flex justify-center">
        <div className="card-header">Title</div>
      </div>
    </div>
  );
};

export { TextCard };
