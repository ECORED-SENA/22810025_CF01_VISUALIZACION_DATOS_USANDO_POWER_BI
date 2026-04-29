<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-intro.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
            .col-xl
              p.mb-0 La analítica de datos y el #[i Business Intelligence] se han convertido en pilares fundamentales para la #[b toma de decisiones en los entornos productivos] actuales. A partir de grandes volúmenes de información, las organizaciones buscan comprender su realidad, identificar patrones y responder de manera oportuna a los retos del contexto. Este componente formativo se centra en ese punto de partida: comprender cómo los datos adquieren valor cuando son analizados de forma estructurada.
        p.mb-0 En este contexto, se reconoce la importancia de contar con #[b información confiable y bien organizada] que permita responder a necesidades reales. Identificar qué información se requiere, por qué es relevante y cómo debe estructurarse resulta clave para que cualquier proceso de análisis sea efectivo y genere impacto. Un modelo de datos mal definido puede limitar el alcance de una solución, mientras que uno bien estructurado potencia el análisis y la toma de decisiones.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.png', alt='').m-auto
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-intro-1(data-aos="fade-right")
          p.mb-0 A lo largo de este componente se abordan los fundamentos de la analítica de datos y #[i Business Intelligence] desde una perspectiva aplicada, considerando las necesidades del cliente, las fuentes y el ecosistema de datos disponibles, y la forma en que estos elementos se articulan. El enfoque se orienta a comprender el problema antes de pensar en la herramienta, resaltando la importancia del análisis previo.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/intro/img3.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block.mb-2(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 85px")
        p.mb-0 De esta manera, el componente propone un recorrido que permite sentar las bases conceptuales y analíticas necesarias para estructurar la información de forma adecuada, dejando preparado el terreno para el desarrollo de soluciones de visualización de datos en etapas posteriores del proceso formativo.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
