var mockDatabase = [
    { _id: '123', name: 'Zeus Dice', published: false },
    { _id: '583', name: 'Athena Dice', published: true },
    { _id: '954', name: 'Ares Dice', published: false },
    { _id: '384', name: 'Hephaestus Dice', published: false },
    { _id: '183', name: 'Apollo Dice', published: true },
    { _id: '007', name: 'Hypnos Dice', published: false },
    { _id: '304', name: 'Nike Dice', published: true },
    { _id: '729', name: 'Aphrodite Dice', published: false },
    { _id: '734', name: 'Demeter Dice', published: true },
];


// Renders Current Selection of Products into Dom
function renderList (results) {
    const productDiv = document.querySelector('#products');
    // clear out inner HTML to get rid of any older results
    productDiv.innerHTML = '';
    // Map each database record to a string containing the HTML for it's row
    var products = results.map ((result, index) => {
        return '<div>' + result.name + '</div>';
    });
    // Set the contents of the list to the new set of render HTML.
    products.forEach((item) => {
        productDiv.innerHTML += item; // += adds to HTML instead of overwriting it entirely.
    });

}

function togglePublished(showPublished) {
    var filteredResults = mockDatabase.filter(function (result) {
        return showPublished || result.published;
    });
    renderList(filteredResults);
}

document.querySelector('#published').addEventListener('change', function(event){
    var value = event.target.value === 'true';
    togglePublished(value);
});


document.querySelector('#price').addEventListener('change', function(event){
    var value = event.target.value === 'false';
    togglePublished(value);
});