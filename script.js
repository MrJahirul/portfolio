document.getElementById("downloadButton").addEventListener("click", function() {
    // Create an anchor element
    var link = document.createElement('a');
    
    // Set the file URL you want to download
    link.href = 'doc/J_Islam.pdf'; // Replace with the actual file URL
    
    // Set the download attribute to specify the file name
    link.download = 'Jahirul_Islam_cv'; // Replace with the desired file name
    
    // Trigger a click event on the anchor element
    link.click();
});