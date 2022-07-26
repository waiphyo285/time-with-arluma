// const body = document.querySelector(".body");
// body.style.backgroundImage = `linear-gradient(-135deg, rgba(44, 44, 88, 0.6) 2.5%, ${randomColor(
//   0.15
// )} 2.5% 100%)`;

var x = setInterval(function () {
  const diffDuration = moment.duration(
    moment(new Date()).diff(moment("2016-07-26 00:00"))
  );

  // console.log(Math.floor(diffDuration.asDays()));
  const items = document.querySelectorAll(".count-time-format h4");
  const timeDiff = [];

  const getDiffTime = () => {
    diffDuration.years() > 0
      ? timeDiff.push(`${("0" + diffDuration.years()).slice(-2)}`)
      : 00;
    0 < diffDuration.months() < 12
      ? timeDiff.push(`${("0" + diffDuration.months()).slice(-2)}`)
      : 00;
    0 < diffDuration.days() < 30
      ? timeDiff.push(`${("0" + diffDuration.days()).slice(-2)}`)
      : 00;
    0 < diffDuration.hours() < 24
      ? timeDiff.push(`${("0" + diffDuration.hours()).slice(-2)}`)
      : 00;
    0 < diffDuration.minutes() < 60
      ? timeDiff.push(`${("0" + diffDuration.minutes()).slice(-2)}`)
      : 00;
    0 < diffDuration.seconds() < 60
      ? timeDiff.push(`${("0" + diffDuration.seconds()).slice(-2)}`)
      : 00;
    // 0 < diffDuration.milliseconds() < 60 ? timeDiff.push(`${diffDuration.milliseconds()}`) : 0;
    return timeDiff;
  };
  getDiffTime();

  const overlayText = document.getElementById("overlay-text");
  overlayText.innerHTML = Math.floor(diffDuration.asDays()) + " Days";

  items.forEach((val, index) => {
    val.innerHTML = timeDiff[index];
  });
}, 1000);

// Slider section

function randomColor(opacity) {
  getNumber = () => Math.floor(Math.random() * 255);
  return `rgba(${getNumber()}, ${getNumber()}, ${getNumber()}, ${opacity})`;
}

    // function clickBody() {
    //   setTimeout(
    //     function () {
    //       (function fadeOut() {
    //         body.style.opacity = 0;
    //       })();

    //       (function fadeIn() {
    //         const randomClr = randomColor(0.15);
    //         body.style.opacity = 1;
    //         body.style.backgroundImage = `linear-gradient(-135deg, rgba(44, 44, 88, 0.6) 2.5%, ${randomClr} 2.5% 100%)`;
    //       })();

    //       body.onload();
    //     },
    //     5000,
    //     this
    //   );
    // }
