import Background from "../assets/Lung.jpg";
import handleFileInputChange from "../customHooks/handleFile";
import FileInputButton from "../components/fileInputButton";

const Lung = () => {
    return (<div className="bg-cover h-full bg-no-repeat flex items-center px-16"
                 style={{backgroundImage: `url(${Background})`}}>
        <div className="flex flex-col items-center">
            <div className="text-4xl text-white">Select <span
                className="text-amber-400 font-bold   ">Lung Cancer Image</span> To Start Diagnosis
            </div>
            <div className="mt-4">
                <FileInputButton onChange={handleFileInputChange}/>
            </div>
        </div>
    </div>);
}

export default Lung;
