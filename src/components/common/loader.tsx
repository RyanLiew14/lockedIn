import { Spin } from "antd";
import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center mt-96">
      <Spin size="large"></Spin>
    </div>
  );
}
