// import text from "./text.js";

// console.log(text());

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

const calcRT = (ev) => {
  const wordsPerMinute = 50; // Average case.
  let result;
  let textLength = ev.split(" ").length; // Split by words
  if (textLength > 0) {
    result = Math.ceil(textLength / wordsPerMinute);
  }
  // console.log(result);
  return result;
};

let url = "https://demo0611119.mockable.io/articles";

let loader = false;

const apiCall = async () => {
  try {
    loader = true;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      loader = false;
    }
    console.log(result.data[0].publishedAt);

    if (loader) {
      document.getElementById("loader").innerHTML = `
      <div class="spinner-grow" role="status"></div>
      `;
    }

    document.getElementById("html").innerHTML = result.data
      .map(
        (data) =>
          `
          <div id="html" class="col-md-6">
          <div class="card border-0 img-rising mb-4 mb-lg-5">
    <img
    src="${data.image}"
    class="card-img-top img-fluid"
    alt="Why clean design creates better experiences"
    width="640"
    height="400"
  />
  <div class="card-body px-0">
    <div id="title" class="text-muted text-uppercase mb-2">
    ${data.category}
    </div>
    <h2 class="card-title h3">
      <a
        id="sub_disc"
        href="article.html"
        class="stretched-link text-decoration-none text-dark"
        >${data.title}</a
      >
    </h2>
    
    <div class="small text-muted mb-3">${timeSince(
      new Date(Date.now() - parseInt(data.publishedAt))
    )} | ${calcRT(data.body)} min read</div>
    <p id="detail_disc" class="card-text">
    ${data.body}
    </p>
  </div>
  </div>
  </div>
    `
      )
      .join("");
  } catch (error) {
    loader = false;
    console.log(error);
  }
};
