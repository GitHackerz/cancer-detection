import Background from "../assets/Lung.jpg";
import handleFileInputChange from "../utils/handleFile";
import FileInputButton from "../components/fileInputButton";
import {useState} from "react";

const Lung = () => {
    const [percents, setPercents] = useState(0);

    return (<div className="bg-cover h-full bg-no-repeat flex items-center px-16"
                 style={{backgroundImage: `url(${Background})`}}>
        <div className="flex flex-col items-center">
            <div className="text-4xl text-white">Select <span
                className="text-amber-400 font-bold   ">Lung Cancer Image</span> To Start Diagnosis
            </div>
            {percents > 0 && <div className="text-4xl text-white">{percents} %</div>}

            <div className="mt-4">
                <FileInputButton onChange={(e) => handleFileInputChange(e, percents, setPercents)}/>
            </div>
        </div>
    </div>);
}

export default Lung;
