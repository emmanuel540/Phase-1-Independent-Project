<script>

document.getElementById('donationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const amount = 
parseFloat(document.getElementById('amount').value);
            const paymentMethod = 
document.getElementById('paymentMethod').value;
            const message = 
document.getElementById('message').value;
            const donationDetails = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Donation Amount:</strong> 
$${amount.toFixed(2)}</p>
            <p><strong>Payment Method:</strong> 
${paymentMethod}</p>
            <p><strong>Message:</strong> ${message}</p>

            document.getElementById('donationDetails').innerHTML = donationDetails;
        });
    </script>









