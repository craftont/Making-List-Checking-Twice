document.addEventListener('DOMContentLoaded', function() {
    const flowerList = document.getElementById('flower-list');
    
    const tulip = flowerList.children[0]; 
    const peony = flowerList.children[1]; 
    const phlox = flowerList.children[2];

    
    flowerList.style.fontStyle = 'italic';
    tulip.style.backgroundColor = 'lightgreen';
    peony.style.backgroundColor = 'lightyellow';
    phlox.style.backgroundColor = 'lightpink';
});
