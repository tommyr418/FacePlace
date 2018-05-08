export const requestCurrentNews = () => (
  $.ajax({
    method: "GET",
    url: "https://newsapi.org/v2/top-headlines",
    data: {
      country: 'us',
      apiKey: 'f9f6e40d28124339a9cf2c4eaf17c6b7',
     },
  })
);
