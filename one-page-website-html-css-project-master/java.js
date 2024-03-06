document.getElementById('zoomable-image').addEventListener('click', function() {
    var zoomedImageContainer = document.createElement('div');
    zoomedImageContainer.classList.add('zoomed-image');
  
    var zoomedImage = document.createElement('img');
    zoomedImage.src = this.src;
    zoomedImage.alt = this.alt;
  
    zoomedImageContainer.appendChild(zoomedImage);
  
    zoomedImageContainer.addEventListener('click', function() {
      this.remove();
    });
  
    document.body.appendChild(zoomedImageContainer);
  });