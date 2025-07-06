
// Add event listener to buy now button
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        // Code to handle buy now button click goes here
        console.log('Buy now button clicked!');
    });
});

// Add event listener to wish list icon
document.querySelectorAll('.wish-list').forEach(icon => {
    icon.addEventListener('click', () => {
        // Code to handle wish list icon click goes here
        console.log('Wish list icon clicked!');
    });
});
