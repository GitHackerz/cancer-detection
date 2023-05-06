import Background from "../assets/Liver.jpg";
import FileInputButton from "../components/fileInputButton";
import { useState } from "react";
import axios from "axios";

const Liver = () => {
  const [percents, setPercents] = useState("");

  const handleFileInputChange = (event, percents, setPercents) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log("event");

      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

      axios
        .post(
          "http://127.0.0.1:8000/Brainpredict/",
          { image: base64String },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setPercents(response.data.Result);
        })
        .catch((error) => console.error(error));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      className="bg-cover h-full bg-no-repeat flex flex-row items-center justify-end px-16 "
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-row gap-[450px]">
        <div className="text-4xl text-white">
          {percents && <> Result: {percents} </>}
        </div>
        <div className="flex flex-col items-center ">
          <div className="text-4xl text-white">
            Select{" "}
            <span className="text-amber-400 font-bold">Liver Cancer Image</span>{" "}
            To Start Diagnosis
          </div>
          <div className="mt-4">
            <FileInputButton
              onChange={(e) => handleFileInputChange(e, percents, setPercents)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liver;
