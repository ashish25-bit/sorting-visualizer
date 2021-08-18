import React, { useLayoutEffect } from "react";
import MethodHeader from "../components/MethodHeader";
import { mainContainerLL } from '../utils/exportStyles';

const Tree = () => {
  useLayoutEffect(() => {
    document.title = "Trees";
  }, []);

  return (
    <div style={mainContainerLL}>
      <MethodHeader />
      <h1>Trees</h1>
    </div>
  )
};

export default Tree;
