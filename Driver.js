        // Tab navigation functionality
        const tabItems = document.querySelectorAll('.tab-item');
        const screens = document.querySelectorAll('.screen');

        tabItems.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                
                // Update active tab
                tabItems.forEach(item => item.classList.remove('active'));
                tab.classList.add('active');
                
                // Show active screen
                screens.forEach(screen => screen.classList.remove('active'));
                document.getElementById(target).classList.add('active');
            });
        });

        // Vehicle selection functionality
        const vehicleOptions = document.querySelectorAll('.vehicle-option');
        
        vehicleOptions.forEach(option => {
            option.addEventListener('click', () => {
                vehicleOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
            });
        });

        // Online toggle animation
        const toggleSwitch = document.querySelector('.toggle-switch input');
        
        toggleSwitch.addEventListener('change', function() {
            const statusCard = document.querySelector('.status-card h2');
            if (this.checked) {
                statusCard.innerHTML = 'You\'re Online!';
                statusCard.classList.add('pulse');
            } else {
                statusCard.innerHTML = 'Welcome, John!';
                statusCard.classList.remove('pulse');
            }
        });