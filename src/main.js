function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function resetElement(className) {

  var el = $("." + className).first();
  var newone = el.clone(true);

  newone.removeClass('show');

  el.before(newone);

  $("." + className + ":last").remove();

}

$(function() {

  function loadingAnimation() {

    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .2, scaleY: 1});
    tl.to('.loading-screen', { duration: .2, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: .2 });
  }

  function contentAnimation() {

    loadFCDemo();

    var tl = gsap.timeline();
    tl.from('.is-animated', { duration: .5, translateY: 10, opacity: 0, stagger: 0.4 });
    tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0});

    $('html, body').animate({
          scrollTop: 0
        }, 0);

    $('.pink-heading-bg').addClass('show');

  }

  barba.init({
    debug: false,

    sync: true,

    transitions: [{

      async leave(data) {
        
        loadingAnimation();

        await delay(200);

        const done = this.async();
        
        done();
      },

      enter(data) {
        contentAnimation();
      },

      once(data) {
        contentAnimation();
      }

    }]
  });

});