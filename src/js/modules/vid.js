export default (fn, beforeLoading) => {
  const vid = document.querySelector('.intro')
  const url = vid.dataset.vidUrl;
  const video = document.querySelector('.intro__vid')
  const vidPreloader = document.querySelector('.loader')

  if (!vid) return;

  if (typeof beforeLoading === 'function') {
    beforeLoading()
  }

  const xhrReq = new XMLHttpRequest();
  xhrReq.open('GET', url, true);
  xhrReq.responseType = 'blob';

  xhrReq.onload = function () {
    if (this.status === 200) {
      let vid = URL.createObjectURL(this.response);
      video.src = vid;

      video.play()
    }
  }
  xhrReq.onerror = function () {
    console.log('err', arguments);
  }
  xhrReq.onprogress = function (e) {
    if (e.lengthComputable) {
      let percentComplete = ((e.loaded / e.total) * 100 | 0) + '%';

      vidPreloader.style.setProperty('--progress-h', percentComplete);
      // text.innerHTML = percentComplete;

      if (percentComplete === "100%") {
        setTimeout(() => {
          vidPreloader.classList.remove("is-visible");

          if (typeof fn === 'function') {
            setTimeout(() => {
              fn()
            }, 100)
          }
        }, 700);
      }
    }
  }
  xhrReq.send();
}
