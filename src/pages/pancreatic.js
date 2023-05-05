import Background from '../assets/Pancreatic.jpg';
import {useState} from "react";

const Pancreatic = () => {

    const [patientCohort, setPatientCohort] = useState("");
    const [sampleOrigin, setSampleOrigin] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("M");
    const [stage, setStage] = useState("");
    const [plasma_CA19_9, setPlasma_CA19_9] = useState("");
    const [creatinine, setCreatinine] = useState("");
    const [lyve1, setLyve1] = useState("");
    const [REG1B, setREG1B] = useState("");
    const [TFF1, setTFF1] = useState("");
    const [REG1A, setREG1A] = useState("");

    const [data, setData] = useState({});

    const onSubmit = async () => {
        console.log({
            values: [patientCohort, sampleOrigin, age, sex, stage, plasma_CA19_9, creatinine, lyve1, REG1B, TFF1, REG1A]
        })
        // const res = await axios.post("", {
        //     values: [patientCohort, sampleOrigin, age, sex, diagnosis, benignSampleDiagnosis, plasma_CA19_9, creatinine, lyve1, REG1B, TFF1, REG1A]
        // });
        // setData(res.data);
    }

    return (<div className="bg-cover h-full bg-no-repeat flex items-center px-16 pt-[120px] pb-[20px]"
                 style={{backgroundImage: `url(${Background})`}}>
        <div className="flex flex-col items-center">
            <form className="w-full max-w-lg bg-white p-10 rounded-xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Patient Cohort
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="Patient Cohort" value={patientCohort}
                            onChange={(e) => setPatientCohort(e.target.value)}/>
                        {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-last-name">
                            Sample Origin
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name" type="text" placeholder="Sample Origin" value={sampleOrigin}
                            onChange={(e) => setSampleOrigin(e.target.value)}/>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Age
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="text" placeholder="Age" value={age}
                            onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-state">
                            Sex
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                                value={sex}
                                onChange={(e) => setSex(e.target.value)} // update sex when user selects an option
                            >
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            Stage
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="text" placeholder="Stage" value={stage}
                            onChange={(e) => setStage(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Plasma_CA19_9
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="text" placeholder="Plasma_CA19_9" value={plasma_CA19_9}
                            onChange={(e) => setPlasma_CA19_9(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            Creatinine
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="text" placeholder="Creatinine" value={creatinine}
                            onChange={(e) => setCreatinine(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            LYVE1
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="text" placeholder="LYVE1" value={lyve1}
                            onChange={(e) => setLyve1(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            REG1B
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="text" placeholder="REG1B" value={REG1B}
                            onChange={(e) => setREG1B(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-city">
                            TFF1
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city" type="text" placeholder="TFF1" value={TFF1}
                            onChange={(e) => setTFF1(e.target.value)}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-zip">
                            REG1A
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip" type="text" placeholder="REG1A" value={REG1A}
                            onChange={(e) => setREG1A(e.target.value)}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl"
                        type="button" onClick={onSubmit}> Send
                    </button>

                </div>
            </form>
        </div>
    </div>);
}

export default Pancreatic;
