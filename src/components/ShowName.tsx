import React from "react";

type ShowNameProps = {
  name?: string;
};

const ShowName = ({ name }: ShowNameProps) => (
  <>
    <h1> {name} </h1>
  </>
);

export default ShowName;
