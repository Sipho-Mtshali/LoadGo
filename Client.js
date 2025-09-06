        // Navigation functionality
        const navItems = document.querySelectorAll('.nav-item');
        const screens = document.querySelectorAll('.screen');

        navItems.forEach(nav => {
            nav.addEventListener('click', (e) => {
                e.preventDefault();
                const target = nav.getAttribute('data-target');
                if (!target) return;
                
                // Update active nav
                navItems.forEach(item => item.classList.remove('active'));
                nav.classList.add('active');
                
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
                
                // Update price based on selection
                const priceElement = document.querySelector('.detail-item:last-child .detail-value');
                const price = option.querySelector('.vehicle-price').textContent;
                priceElement.textContent = price;
            });
        });

        // Simulate incoming delivery request
        setTimeout(() => {
            // Show incoming screen after 5 seconds for demo purposes
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.getAttribute('data-target') === 'incoming') {
                    item.click();
                }
            });
        }, 5000);