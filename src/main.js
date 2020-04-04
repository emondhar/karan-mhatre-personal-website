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
    tl.to('.loading-screen', { duration: .5, scaleY: 1});
    tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
  }

  function contentAnimation() {

    loadFCDemo();
    console.log('here');

    var tl = gsap.timeline();
    tl.from('.is-animated', { duration: .5, translateY: 10, opacity: 0, stagger: 0.4 });
    tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0});

    $('.green-heading-bg').addClass('show');

  }

  barba.init({
    debug: false,

    sync: true,

    transitions: [{

      async leave(data) {

        $('html, body').animate({
          scrollTop: 0
        }, 500);

        await delay(500);

        const done = this.async();
        
        loadingAnimation();
        // await delay(0);
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