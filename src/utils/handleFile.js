import axios from "axios";

const handleFileInputChange = (event,percents, setPercents) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        console.log("event");

        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        console.log(base64String);
        setPercents(50);
        console.log(percents);

        axios.post('http://example.com/api/upload', { image: base64String }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            })
            .catch(error => console.error(error));
    };

    reader.readAsDataURL(file);
};

export default handleFileInputChange;
