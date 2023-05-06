import Background from "../assets/Brain.jpg";
import FileInputButton from "../components/fileInputButton";
import {useState} from "react";
import axios from "axios";


const Brain = () => {
    const [percents, setPercents] = useState({});

    const handleFileInputChange = (event, percents, setPercents) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            console.log("event");

            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

            axios.post('http://example.com/api/upload', {image: base64String}, {
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
                className="text-amber-400 font-bold">Brain Cancer Image</span> To Start Diagnosis
            </div>
            {percents > 0 && <div className="text-4xl text-white">{percents} %</div>}
            <div className="mt-4">
                <FileInputButton onChange={(e) => handleFileInputChange(e, percents, setPercents)}/>
            </div>
        </div>
        {percents.glioma && (
            <div className="flex flex-col gap-5">
                <div className="ml-[100px] text-black">Glioma</div>
                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${percents.glioma * 100}%`}}> {percents.glioma * 100}%
                    </div>
                </div>
                <div className="ml-[100px] text-black">Meningioma</div>
                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${percents.meningioma * 100}%`}}> {percents.meningioma * 100}%
                    </div>
                </div>
                <div className="ml-[100px] text-black">Notumor</div>

                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${percents.notumor * 100}%`}}> {percents.notumor * 100}%
                    </div>
                </div>
                <div className="ml-[100px] text-black">Pituitary</div>

                <div className=" bg-gray-200 ml-[100px] w-[500px] rounded-full dark:bg-gray-700">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                        style={{width: `${percents.pituitary * 100}%`}}> {percents.pituitary * 100}%
                    </div>
                </div>
            </div>)
        }

    </div>)

}

export default Brain;
