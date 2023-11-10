import React, { useState } from "react";
import { Select, Input, Button } from "antd";
const { TextArea } = Input;
import {
  ContentProfession,
  EntrepreneurProfession,
  MarketingProfession,
  Profession,
} from "../../utils";

const Label = ({ text }) => <label htmlFor="">{text}</label>;

export default function UserDashboard() {
  const [profession, setProfession] = useState("");
  const [subProfession, setSubProfession] = useState("");
  const [aboutYou, setAboutYou] = useState("");

  const handleChange = (value) => {
    setProfession(value);
    setSubProfession("");
  };
  const handleSubProfessionChange = (value) => {
    setSubProfession(value);
  };
  const handleTextAreaChange = (e) => {
    setAboutYou(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      profession,
      subProfession,
      aboutYou,
    };

    setProfession("");
    setSubProfession("");
    setAboutYou("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[600px] m-auto">
        <Label text="Select Your Profession" />
        <Select
          className="h-10 border-2 w-full rounded-md my-2"
          style={{ textAlign: "start" }}
          defaultValue="Marketing Professional"
          onChange={handleChange}
          options={Profession}
        />

        {profession && (
          <>
            <Label text={`Select Your ${profession}`} />
            <Select
              className="h-10 border-2 w-full rounded-md my-2"
              style={{ textAlign: "start" }}
              value={subProfession}
              onChange={handleSubProfessionChange}
              options={
                profession === "Marketing Professional"
                  ? MarketingProfession
                  : profession === "Entrepreneur"
                  ? EntrepreneurProfession
                  : profession === "Content Creator"
                  ? ContentProfession
                  : []
              }
            />
          </>
        )}
        <Label text="Write About You!!" />
        <TextArea
          className="my-2"
          rows={4}
          placeholder="write under 50 words"
          maxLength={50}
          value={aboutYou}
          onChange={handleTextAreaChange}
        />
        <Button
          style={{
            backgroundColor: "#7f03fc",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
