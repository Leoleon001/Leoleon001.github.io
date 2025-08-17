document.getElementById('fetchData').addEventListener('click', fetchData);

async function fetchData() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Cargando datos...</p>';
    
    try {
        // Ejemplo con API pública (JSONPlaceholder)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        resultDiv.innerHTML = `
            <h3>Datos obtenidos:</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p class="error">Error al obtener datos: ${error.message}</p>`;
        console.error('Error:', error);
    }
}
