const slider = new Vue({
  el: '#slider',
  data: {
    imagesList: ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg'],
    imagesIndex: 0,
    keyCode: ''
  },
  methods: {
    sliderPrev: function(){
      if (this.imagesIndex === 0){
        this.imagesIndex = this.imagesList.length - 1;
      } else {
        this.imagesIndex--;
      }
    },
    sliderNext: function(){
      if (this.imagesIndex === this.imagesList.length -1){
        this.imagesIndex = 0;
      } else {
        this.imagesIndex++;
      }
    },
    keyDown: function(){
      if (this.keyCode === 'ArrowLeft'){
        this.sliderPrev()
      } else if (this.keyCode === 'ArrowRight'){
        this.sliderNext()
      }
    }
  }
});

window.addEventListener('keydown', function(e) {
  slider.keyCode = e.key
  slider.keyDown()
});
