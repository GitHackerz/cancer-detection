import Background from "../assets/Lung.jpg";
import FileInputButton from "../components/fileInputButton";
import {useState} from "react";
import axios from "axios";

const Lung = () => {
    const [percents, setPercents] = useState({});

    const handleFileInputChange = (event, percents, setPercents) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            console.log("event");

            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

            axios.post('http://localhost:8000/lungpredict/', {image: base64String}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    setPercents(response.data);
                })
                .catch(error => console.error(error));
        };

        reader.readAsDataURL(file);
    };

    return (<div className="bg-cover w-full h-full bg-no-repeat flex flex-row items-center px-16 "
                 style={{backgroundImage: `url(${Background})`}}>
        <div className="flex flex-col items-center ">
            <div className="text-4xl text-white">Select <span
                className="text-amber-400 font-bold">Lung Cancer Image</span> To Start Diagnosis
            </div>
            {percents > 0 && <div className="text-4xl text-white">{percents} %</div>}
            <div className="mt-4">
                <FileInputButton onChange={(e) => handleFileInputChange(e, percents, setPercents)}/>
            </div>
        </div>
        {percents.adeno && (
            <div className="flex flex-col gap-5">
                <div className="ml-[100px] text-white">Adeno</div>
                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${(percents.adeno * 100).toFixed(3)}%`}}> {(percents.adeno * 100).toFixed(3)}%
                    </div>
                </div>
                <div className="ml-[100px] text-white">Large</div>
                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${(percents.large * 100).toFixed(3)}%`}}> {(percents.large * 100).toFixed(3)}%
                    </div>
                </div>
                <div className="ml-[100px] text-white">Normal</div>

                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${(percents.normal * 100).toFixed(3)}%`}}> {(percents.normal * 100).toFixed(3)}%
                    </div>
                </div>
                <div className="ml-[100px] text-white">Squamous</div>

                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${(percents.squamous * 100).toFixed(3)}%`}}> {(percents.squamous * 100).toFixed(3)}%
                    </div>
                </div>
            </div>)
        }

    </div>);
}

export default Lung;
