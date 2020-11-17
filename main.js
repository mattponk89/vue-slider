const slider = new Vue({
  el: '#slider',
  data: {
    imagesList: ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg'],
    imagesIndex: 0
  },
  methods: {
    sliderPrev: function(){

      console.log('imagesIndex: ', this.imagesIndex);
      console.log('imagesList: ', this.imagesList);
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
    }
  }
});
