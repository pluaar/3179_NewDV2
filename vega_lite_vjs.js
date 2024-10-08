var choropleth1 = "choroplethmap_details.json";
vegaEmbed("#map_plot", choropleth1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var continent2 = "continent_bar.json";
vegaEmbed("#continent_plot_2", continent2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var pyramidbar3 = "pyramid_bar_chart.json";
vegaEmbed("#pyramidbar_plot_3", pyramidbar3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
