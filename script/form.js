const form = document.getElementById('form')
        function postData() {
            const judul = document.getElementById('judul').value;
            const genre = document.getElementById('genre').value;
            const developer = document.getElementById('developer').value;
            const publisher = document.getElementById('publisher').value;
            const platform = document.getElementById('platform').value;
            const engine = document.getElementById('engine').value;
            const region = document.getElementById('region').value;
            const tahun = document.getElementById('tahun').value;

            const game = {
                judul,
                genre,
                developer,
                publisher,
                platform,
                engine,
                region,
                tahun
            };

            let dataGame = JSON.parse(localStorage.getItem('game')) || [];
            dataGame.push(game);
            console.log(dataGame);
            localStorage.setItem('game', JSON.stringify(dataGame));
            form.reset();
        };

        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.addEventListener('click', postData);