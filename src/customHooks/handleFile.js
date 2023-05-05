const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        console.log(base64String);
        // axios.post('http://example.com/api/upload', { image: base64String }, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(response => console.log(response.data))
        //     .catch(error => console.error(error));
    };

    reader.readAsDataURL(file);
};

export default handleFileInputChange;
