let url = "https://demo0611119.mockable.io/articles";

const apiCall = async () => {
  try {
    let result = await fetch(url);
    result = await result.json();
    console.log(result[0].image);
    document.getElementById("html").innerHTML = result
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
    ${data.title}
    </div>
    <h2 class="card-title h3">
      <a
        id="sub_disc"
        href="article.html"
        class="stretched-link text-decoration-none text-dark"
        >${data.subDisc}</a
      >
    </h2>
    <div class="small text-muted mb-3">5 days ago | 5 min read</div>
    <p id="detail_disc" class="card-text">
    ${data.detailDisc}
    </p>
  </div>
  </div>
  </div>
    `
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
};
apiCall();
