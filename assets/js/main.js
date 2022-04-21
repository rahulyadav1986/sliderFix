var fromLeft = Array.prototype.slice.call(document.querySelectorAll(".from-left"));
fromLeft.forEach(function(self) {
  gsap.from(self, {
      scrollTrigger: {
        trigger: self,
        start: "10% 90%",
        end: "50% 60%",
        scrub:1,
        // markers:true,
      },
      x: -500,
      duration: 2,
    });
});



var fromRight = Array.prototype.slice.call(document.querySelectorAll(".from-right"));
fromRight.forEach(function(self) {
  gsap.from(self, {
      scrollTrigger: {
        trigger: self,
        start: "10% 90%",
        end: "50% 60%",
        scrub:1,
        // markers:true,
      },
      x: 500,
      duration: 2,
    });
});

var fromLeftF = Array.prototype.slice.call(document.querySelectorAll(".from-left-f"));
fromLeftF.forEach(function(self) {
  gsap.from(self, {
      scrollTrigger: {
        trigger: self,
        start: "10% 90%",
        end: "40% 70%",
        scrub:1,
        // markers:true,
      },
      x: -500,
      duration: 2,
    });
});



var fromRightF = Array.prototype.slice.call(document.querySelectorAll(".from-right-f"));
fromRightF.forEach(function(self) {
  gsap.from(self, {
      scrollTrigger: {
        trigger: self,
        start: "10% 90%",
        end: "40% 70%",
        scrub:1,
        // markers:true,
      },
      x: 500,
      duration: 2,
    });
});



var fromBottom= Array.prototype.slice.call(document.querySelectorAll(".from-bottom"));
fromBottom.forEach(function(self1) {
  gsap.from(self1, {
      scrollTrigger: {
        trigger: self1,
        start: "0 100%",
        end: "50% 70%",
        scrub:1,
        // markers:true,
      },
      y: 150,
      duration: 2,
    });
});


var fromBottomSlow= Array.prototype.slice.call(document.querySelectorAll(".from-bottom-slow"));
fromBottomSlow.forEach(function(self2) {
  gsap.from(self2, {
      scrollTrigger: {
        trigger: self2,
        start: "0 100%",
        end: "50% 70%",
        scrub:1,
        markers:true,
      },
      y: 150,
      duration: 2,
    });
});
