function showVideo(button) {
    var x = button.nextElementSibling;
    var y = x.children[0]; // Assuming the video is the first (and only) child element

    // when one video is open, close the rest
    var ytVideos = document.getElementsByClassName("ytVideo");
    var ytBtns = document.getElementsByClassName('ytBtn')
    for (var i=0;i<ytVideos.length;i++) {
        if (ytVideos[i] != y) {
            ytVideos[i].style.display = 'none';
            ytBtns[i].style.scale = '1';
        }
        
    }

    // toggle display
    if (y.style.display === 'none' || y.style.display === '') {
        y.style.display = 'block';
        button.style.scale = '0.85';
    } else {
        y.style.display = 'none';
        button.style.scale = '1';
    }
}
