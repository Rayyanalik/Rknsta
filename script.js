document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const clearBtn = document.getElementById('clear-btn');
    const resultsContainer = document.getElementById('results-container');
    const noResults = document.getElementById('no-results');
    const searchQuery = document.getElementById('search-query');

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.trim();

        if (query.length > 0) {
            clearBtn.style.display = 'block';
            fetchResults(query);
        } else {
            clearBtn.style.display = 'none';
            resultsContainer.innerHTML = '';
            noResults.classList.add('hidden');
        }
    });

    clearBtn.addEventListener('click', function() {
        searchBar.value = '';
        clearBtn.style.display = 'none';
        resultsContainer.innerHTML = '';
        noResults.classList.add('hidden');
        searchBar.focus();
    });

    function fetchResults(query) {
        // Placeholder for Instagram API fetch
        // Replace with actual API request and handling
        resultsContainer.innerHTML = ''; // Clear previous results

        // Example results (remove this and use actual API data)
        const exampleResults = [
            { image: 'https://via.placeholder.com/200', description: 'Example result for ' + query }
        ];

        if (exampleResults.length > 0) {
            exampleResults.forEach(result => {
                const item = document.createElement('div');
                item.className = 'result-item';
                item.innerHTML = `
                    <img src="${result.image}" alt="${query}">
                    <div class="description">${result.description}</div>
                `;
                resultsContainer.appendChild(item);
            });
            noResults.classList.add('hidden');
        } else {
            noResults.classList.remove('hidden');
            searchQuery.textContent = query;
        }
    }
});
