Splitting();
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  $('body').addClass("loaded");
  gsap.utils.toArray("section").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () { $(elem).addClass('active') },
      onEnterBack: function () { $(elem).addClass('active') },
      onLeave: function () { $(elem).removeClass("active") },
      onLeaveBack: function () { $(elem).removeClass("active") }

    });
  });


  ScrollTrigger.create({
    trigger: document.body,
    end: "bottom bottom",
    snap: { snapTo: 0.1, duration: 0.6, delay: 0, ease: "power4.inOut" },
    onUpdate: (self) => {
      const totalVelocity = (self.getVelocity() / 1400);
      const posVelocity = Math.abs((self.getVelocity() / 2400));
      const totalScroll = (((self.progress - 0.1) * 100));
      gsap.to("html", { "--velocity": totalVelocity, duration: 0.5 });
      gsap.to("html", { "--posvelocity": posVelocity, duration: 0.5 });
      gsap.to("html", {
        "--total": totalScroll, duration: 0.05, onComplete: () => {
          gsap.to("html", { "--velocity": 0, "--posvelocity": 0, duration: 0.5, overwrite: "auto" })
        }
      });
    },
  });
});