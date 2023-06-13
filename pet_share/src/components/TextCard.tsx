import React from "react";

type TextCardProps = {
  title: string;
  textBody: string;
};

const TextCard = ({ title, textBody }: TextCardProps) => {
  return (
    <div className="card">
      <div className="card-body flex justify-center">
        <div className="card-header">{title}</div>
        <p className="text-content2">{textBody}</p>
      </div>
    </div>
  );
};

export { TextCard };
