new Vue({
  el: "#app",
  data: {
    tempoEmSegundos: 5, //Tempo em segundos do delay
    min: 600, // valor mÃ­nimo de pessoas na live
    max: 1000, // mÃ¡ximo de pessoas na live

    //aqui definimos os comentarios, com imagem,nome e texto
    comentarios: [
      {
        img: "./assets/img/1.webp",
        nome: "Lia",
        texto: "I paid $57 to see this presentation that my cousin recommended to me...",
      },
      {
        img: "./assets/img/2.webp",
        nome: "Herbert",
        texto:
          "I heard that this video is going to be taken down tomorrow",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Raul",
        texto:
          "I was told there were only 11 spots left to watch it, but I'm glad I did!",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Maria R.",
        texto:
          "Wow, it sounds like you're talking about my life...",
      },
      {
        img: "./assets/img/5.webp",
        nome: "Selenna",
        texto: "I feel exactly like that!",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Ester R",
        texto:
          "I never knew my problem was like that...",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Love2",
        texto:
          "I can't believe my doctor never told me that, I'm really angry now",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Brunno",
        texto:
          "It all really makes sense now",
      },
      {
        img: "./assets/img/9.webp",
        nome: "Leo",
        texto: "You swear that's it? I can't believe I didn't know",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "I want to do it today",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Lady L.",
        texto:
          "How do we do it at home?",
      },
      {
        img: "./assets/img/12.webp",
        nome: "The Weed",
        texto:
          "Do you get a discount?",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "I want a discount too!",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Roque",
        texto: "I bought my kit of 6 bottles! I even got a present",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Thiago",
        texto: "I've already got mine!",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Rodrygo ",
        texto:
          "I saw that there were only 50 more bottles available, so I grabbed 12 right away to secure mine.",
      },
      {
        img: "./assets/img/17.webp",
        nome: "DJ Trash",
        texto:
          "I'm very happy, I managed to secure mine too!!!",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Alone",
        texto:
          "I bought 6 bottles, thank you very much.",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Mixely",
        texto:
          " I got mine too!",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Pale Man",
        texto: "Anyone who hasn't bought it yet is crazy... Thank you for this opportunity",
      },
    ],

    btnDisplay: "none", //nÃ£o mexe
    contador: 730, //nÃ£o mexe
    comentariosExibidos: [], //nÃ£o mexe
    indiceComentario: 0, //nÃ£o mex
    showContent: true, //nÃ£o mex
  },
  mounted() {
    this.exibirComentario();
    this.delay();
    this.atualizarContador();
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.btnDisplay = "flex";
      }, this.tempoEmSegundos * 1000);
    },
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(15000, 30000));
    },
    exibirComentario() {
      if (this.indiceComentario < this.comentarios.length) {
        this.comentariosExibidos.push(this.comentarios[this.indiceComentario]);
        this.indiceComentario++;
        setTimeout(
          this.exibirComentario,
          this.gerarNumeroAleatorio(10000, 30000)
        );
      }
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(5000, 20000));
    },
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
});