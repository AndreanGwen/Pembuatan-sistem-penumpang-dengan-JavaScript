$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?i=tt3896198&apikey=3b05a4b4&s=" +
      $(".input-keyword").val(),
    success: (results) => {
      const movies = results.search;

      let cards = "";
      movies.forEach((element) => {
        cards += `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${element.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${element.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${element.Year}</h6>
                <a href="#" class="btn btn-primary btn-id" data-toggle="modal" data-target="#modalDetail" data-id="${element.imdbID}">Show details</a>
              </div>
            </div>
          </div>`;
      });

      $(".movie-container").html(cards);

      // event listener detail
      $(".btn-id").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=3b05a4b4&i=" + $(this).data("id"),
          success: (m) => {
            const detailMovie = `
              <div class="container-fluid detail">
                <div class="row">
                  <div class="col-md-3">
                    <img src="${m.Poster}" alt="" class="img-fluid" />
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item"><h4>${m.Title}</h4></li>
                      <li class="list-group-item"><strong>Director:</strong> ${m.Director}</li>
                      <li class="list-group-item"><strong>Actors:</strong> ${m.Actors}</li>
                      <li class="list-group-item"><strong>Writer:</strong> ${m.Writer}</li>
                      <li class="list-group-item"><strong>Plot:</strong> ${m.Plot}</li>
                    </ul>
                  </div>
                </div>
              </div>`;

            $(".modal-body").html(detailMovie);
          },
        });
      });
    },
    error: (b) => console.log(b.responseText),
  });
});
