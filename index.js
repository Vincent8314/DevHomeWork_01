      const button = document.getElementById('theme-toggle');
        
        button.addEventListener('click', () => {
            document.body.classList.toggle('reverse');
            button.textContent = document.body.classList.contains('reverse') ? 'Light' : 'Dark';
        });

        // Check if user prefers dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('reverse');
            button.textContent = 'Light';
        }

        // Listen for changes in system theme preference
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (e.matches) {
                document.body.classList.add('reverse');
                button.textContent = 'Light';
            } else {
                document.body.classList.remove('reverse');
                button.textContent = 'Dark';
            }
        });