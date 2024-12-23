fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Extract the breeds and their sub-breeds
        const breeds = data.message;

        // Count the number of retriever sub-breeds
        const retrieverSubBreeds = breeds.retriever || [];
        console.log(`Number of retriever sub-breeds: ${retrieverSubBreeds.length}`);

        // Render the first breed name to the page
        const breedNames = Object.keys(breeds);
        if (breedNames.length > 0) {
            const firstBreed = breedNames[0];
            const outputElement = document.createElement('div');
            outputElement.textContent = `First breed: ${firstBreed}`;
            document.body.appendChild(outputElement);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
