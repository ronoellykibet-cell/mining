// Modal functionality
        const modal = document.getElementById('payment-modal');
        const notification = document.getElementById('notification');

        function openModal(planName, amount) {
            document.getElementById('plan-name').textContent = planName;
            document.getElementById('plan-amount').textContent = amount.toLocaleString();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        function submitPayment(event) {
            event.preventDefault();
            
            // In a real application, you would submit this data to your server
            // For demo purposes, we'll just show a success notification
            
            closeModal();
            
            // Show success notification
            notification.classList.add('show');
            
            // Hide notification after 5 seconds
            setTimeout(function() {
                notification.classList.remove('show');
            }, 5000);
            
            // Reset form
            document.getElementById('payment-form').reset();
        }

        // Animation for the hidden details (hover to reveal)
        const hiddenDetails = document.querySelectorAll('.hidden-details');
        hiddenDetails.forEach(detail => {
            detail.addEventListener('click', function() {
                this.style.userSelect = 'auto';
                this.style.color = 'var(--text)';
                this.style.background = 'transparent';
            });
        });