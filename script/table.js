var kontenTable = document.querySelector('.table')

  async function fetchProducts() {
    let game = [];
    const storedProducts = localStorage.getItem('game'); 

    if (storedProducts) {
        game = JSON.parse(storedProducts);
    } else {
          const game = [
            {
              judul: "Elden Ring",
              genre: "Open World",
              developer: "FromSoftware Inc.",
              publisher: "Bandai Namco Entertainment",
              platform: "Playstation 5",
              engine: "FromEngine",
              region: "Global",
              tahun: "2021",
            },
            {
              judul: "Dark Souls III",
              genre: "Action role-playing",
              developer: "FromSoftware",
              publisher: "Bandai Namco Entertainment",
              platform: "Windows",
              engine: "FromEngine",
              region: "Global",
              tahun: "2016",
            },
            {
              judul: "Fate Grand Order",
              genre: "Turn Base",
              developer: "Lasengle",
              publisher: "Android",
              platform: "Android",
              engine: "Unity",
              region: "Japan",
              tahun: "2016",
            },
            {
              judul: "Genshin Impact",
              genre: "Action role-playing",
              developer: "miHoYo",
              publisher: "HoYoverse",
              platform: "Android",
              engine: "Unity",
              region: "China",
              tahun: "2020",
            },
            {
              judul: "Honkai: Star Rail",
              genre: "Role-playing",
              developer: "miHoYo",
              publisher: "HoYoverse",
              platform: "Android",
              engine: "Unity",
              region: "China",
              tahun: "2023",
            },
          ]
            localStorage.setItem('game', JSON.stringify(game));
    }
    return game;
}

async function PopulateTable() {
    try {
        const products= await fetchProducts();
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headerRow = document.createElement('tr');
        for (const key in products[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);

        products.forEach(item => {
            const row = document.createElement('tr');
            for (const key in item) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        kontenTable.innerHTML = '';
        kontenTable.appendChild(table);
    } catch (error) {
        console.error('Error:', error);
    }
}
PopulateTable();