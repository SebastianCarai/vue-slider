Vue.config.devtools = true;
const app = new Vue(
{
    el : '#root',
    data: {
        slideIndex : 0,
        autoChangeSlide: null,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera', 
                text:  'Lorem ipsum'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna', 
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania', 
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise', 
                text:  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            }
        ]
    },
    methods: {
        nextSlide: function(){
            if (this.slideIndex < this.slides.length - 1){
                this.slideIndex++;
            } else{
                this.slideIndex = 0;
            }
        },
        prevSlide: function(){
            if (this.slideIndex > 0){
                this.slideIndex--;
            } else{
                this.slideIndex = this.slides.length - 1;
            }
        },
        thisSlide: function (clickedIndex){
            this.slideIndex = clickedIndex;
        },
        AutoPlay: function(){
            this.autoChangeSlide= setInterval(() =>{
                this.nextSlide();
            }, 3000)
        },
        stopAutoPlay: function(){
            clearInterval(this.autoChangeSlide);
        }
    },
    created(){
        this.AutoPlay();
    }
});
