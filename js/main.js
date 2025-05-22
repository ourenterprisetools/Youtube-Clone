/* ------------------------------------------------------------------
   Comentários vinculados aos marcos do SmartPlayer (VSL - 3/60/… View)

   Como funciona
   ─────────────
   • Cada item de `comentarios` traz o campo  evento: <string>
     → quando chegar postMessage com esse valor, o comentário aparece.

   • Se o visitante já passou pelo pitch (localStorage.pitchView === 'true')
     mostramos TUDO de uma vez, igual ao código original.

   • Não há setTimeout nem campo “at”; o próprio player controla o momento.

   Mantidos do script anterior
   ───────────────────────────
     tempoEmSegundos   – atraso do botão Buy
     min / max         – range do contador “people watching”
------------------------------------------------------------------ */

new Vue({
  el: "#app",

  data() {
    return {
      /* ─── parâmetros já existentes ─── */
      tempoEmSegundos: 5,
      min: 600,
      max: 1000,

      /* ─── lista de comentários ─── */
      comentarios: [
        {
          evento: "VSL - Play",
          img: "images/1.webp",
          nome: "Lia",
          texto:
            "I paid $57 to see this presentation that my cousin recommended to me...",
        },

        {
          evento: "VSL - Play",
          img: "images/2.webp",
          nome: "Herbert",
          texto: "I heard that this video is going to be taken down tomorrow",
        },

        {
          evento: "VSL - Play",
          img: "images/3.webp",
          nome: "Raul",
          texto:
            "I was told there were only 11 spots left to watch it, but I'm glad I did!",
        },

        {
          evento: "VSL - Lead View",
          img: "images/4.webp",
          nome: "Maria R.",
          texto: "Wow, it sounds like you're talking about my life...",
        },

        {
          evento: "VSL - Lead View",
          img: "images/5.webp",
          nome: "Selenna",
          texto: "I feel exactly like that!",
        },

        {
          evento: "VSL - Lead View",
          img: "images/6.webp",
          nome: "Ester R",
          texto: "I never knew my problem was like that...",
        },

        {
          evento: "VSL - Lead View",
          img: "images/7.webp",
          nome: "Love2",
          texto:
            "I can't believe my doctor never told me that, I'm really angry now",
        },

        {
          evento: "VSL - Lead View",
          img: "images/8.webp",
          nome: "Brunno",
          texto: "It all really makes sense now",
        },

        {
          evento: "VSL - Lead View",
          img: "images/9.webp",
          nome: "Leo",
          texto: "You swear that's it? I can't believe I didn't know",
          at: 90,
        },

        {
          evento: "VSL - Lead View",
          img: "images/10.webp",
          nome: "Cleo M.",
          texto: "I want to do it today",
          at: 100,
        },

        {
          evento: "VSL - Lead View",
          img: "images/11.webp",
          nome: "Lady L.",
          texto: "How do we do it at home?",
          at: 110,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/12.webp",
          nome: "The Weed",
          texto: "Do you get a discount?",
          at: 120,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/13.webp",
          nome: "Michael",
          texto: "I want a discount too!",
          at: 130,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/14.webp",
          nome: "Roque",
          texto: "I bought my kit of 6 bottles! I even got a present",
          at: 140,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/15.webp",
          nome: "Thiago",
          texto: "I've already got mine!",
          at: 150,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/16.webp",
          nome: "Rodrygo",
          texto:
            "I saw that there were only 50 more bottles available, so I grabbed 12 right away to secure mine.",
          at: 160,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/17.webp",
          nome: "DJ Trash",
          texto: "I'm very happy, I managed to secure mine too!!!",
          at: 170,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/18.webp",
          nome: "Alone",
          texto: "I bought 6 bottles, thank you very much.",
          at: 180,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/19.webp",
          nome: "Mixely",
          texto: "I got mine too!",
          at: 190,
        },

        {
          evento: "VSL - Pitch View",
          img: "images/20.webp",
          nome: "Pale Man",
          texto:
            "Anyone who hasn't bought it yet is crazy… Thank you for this opportunity",
          at: 200,
        },
      ],

      /* ─── estados internos ─── */
      btnDisplay: "none",
      contador: 730,
      comentariosExibidos: [],
      showContent: true,
    };
  },

  mounted() {
    /* botão Buy após delay */
    setTimeout(() => {
      this.btnDisplay = "flex";
    }, this.tempoEmSegundos * 1000);

    /* contador “people watching” */
    this.atualizarContador();

    /* ► Player envia postMessage com os marcos */
    window.addEventListener("message", this.onPlayerMessage);
  },

  methods: {
    /* util */
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(5000, 20000));
    },

    /* handler do player */
    onPlayerMessage(ev) {
      const tipo = ev.data;
      /* filtra comentários cujo evento bate com o recebido
         e ainda não foram exibidos                          */
      const novos = this.comentarios.filter(
        (c) => c.evento === tipo && !c._mostrado
      );

      if (!novos.length) return;

      novos.forEach((c) => {
        c._mostrado = true; // flag evita duplicar
        this.comentariosExibidos.push({ ...c }); // push reativo
      });
    },

    mostrarTodosComentarios() {
      this.comentarios.forEach((c) => {
        if (!c._mostrado) {
          c._mostrado = true;
          this.comentariosExibidos.push({ ...c });
        }
      });
    },

    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
});
