import * as am5 from "@amcharts/amcharts5";
import { PieChart, PieSeries } from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect } from "react";

function Chart(props) {
  useEffect(() => {
    /* Chart code */
    // Create root element
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create series
    let series0 = chart.series.push(
      PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
        radius: am5.percent(100),
        innerRadius: am5.percent(80),
      })
    );

    series0.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series0.slices.template.setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0,
      templateField: "settings",
    });

    series0.slices.template.states.create("hover", { scale: 1 });
    series0.slices.template.states.create("active", { shiftRadius: 0 });

    series0.labels.template.setAll({
      templateField: "settings",
    });

    series0.ticks.template.setAll({
      templateField: "settings",
    });

    series0.labels.template.setAll({
      textType: "circular",
      radius: 30,
    });

    // Set data
    series0.data.setAll([
      {},
      {
        category: "Unused",
        value: 30,
        settings: { forceHidden: true },
      },
    ]);

    // Create second series
    let series1 = chart.series.push(
      PieSeries.new(root, {
        radius: am5.percent(95),
        innerRadius: am5.percent(85),
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series1.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series1.slices.template.setAll({
      templateField: "sliceSettings",
      strokeOpacity: 0,
    });

    series1.labels.template.setAll({
      textType: "circular",
    });

    series1.labels.template.adapters.add("radius", function (radius, target) {
      let dataItem = target.dataItem;
      let slice = dataItem.get("slice");
      return -(slice.get("radius") - slice.get("innerRadius")) / 2 - 10;
    });

    series1.slices.template.states.create("hover", { scale: 1 });
    series1.slices.template.states.create("active", { shiftRadius: 0 });

    series1.ticks.template.setAll({
      forceHidden: true,
    });

    // Set data
    series1.data.setAll([
      {
        value: 30,
      },
      {
        value: 30,
      },
      
      {
        value: 30,
        sliceSettings: { fill: am5.color(0xdedede) },
      },
    ]);

    // Cleanup function to dispose the chart when the component is unmounted
    return () => {
      root.dispose();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <div id="chartdiv" style={{ width: "100%", height: "312px" }}></div>;
}

export default Chart;
