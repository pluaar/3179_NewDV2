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

var heatmap2023 = "Heatmap_2023.json";
vegaEmbed("#heatmap_plot_2023", heatmap2023).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var heatmap2022= "heatmap_2022.json";
vegaEmbed("#heatmap_plot_2022", heatmap2022).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var heatmap2021 = "heatmap_2021.json";
vegaEmbed("#heatmap_plot_2021", heatmap2021).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var heatmap2020 = "heatmap_2020.json";
vegaEmbed("#heatmap_plot_2020", heatmap2020).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
