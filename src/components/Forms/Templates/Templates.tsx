import React from "react";
import HtmlView from "../../../pdfs/Template1/html";
import { Button, Select } from "antd";
import MyDocument from "../../../pdfs/Template1/pdf";

const Tempaltes: React.FC = () => {
  return (
    <div className="mx-auto">
      <div className="w-[70vw] mx-auto mb-7 flex justify-between">
        <div>
          <h1 className="mb-5">Select A Specific Template:</h1>
          <Select
            placeholder="Select Template"
            className="w-96"
            defaultValue={"template1"}
            filterOption={(input, option) => {
              const inputTrimed = option?.label
                .split(" ")
                .join("")
                .toLowerCase()
                .toString();
              const optionTrimed = input
                .split(" ")
                .join("")
                .toLowerCase()
                .toString();
              return inputTrimed ? inputTrimed.includes(optionTrimed) : false;
            }}
            showSearch
            options={[
              { value: "template1", label: "Template 1" },
              { value: "template2", label: "Template 2" },
              { value: "template3", label: "Template 3" },
              { value: "template4", label: "Template 4" },
              { value: "template5", label: "Template 5" },
              { value: "template6", label: "Template 6" },
            ]}
          />
        </div>
        <div>
          <Button type="primary" className="w-44 h-10">
            <MyDocument/>
          </Button>
        </div>
      </div>
      <HtmlView />
    </div>
  );
};

export default Tempaltes;
