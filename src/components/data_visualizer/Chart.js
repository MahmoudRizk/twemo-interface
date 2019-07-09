import React, { Component } from 'react';

import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);


const myDataSource = {
  "chart": {
    "caption": "#Hashtags sentiment analysis by percentage.",
    "subCaption": "",
    "numberPrefix": "%",
    "numberSuffix": "",
    "yaxismaxvalue": "100",
    "theme": "fusion",
    "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
  },
  "categories": [
    {
      "category": [
      ]
    }
  ],
  "dataset": [
  ]
}

const chartConfigs = {
  type: 'dragcolumn2d',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: myDataSource
};


class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Drag any column for years 2017 or 2018 to see updated value along with the label',
    };


  }

  render () {
    let tmpPositive = {
          "seriesname": "+ve feelings",
          "color": "#009614",
          "data": [
            // {
            //   "value": "-73",
            //   "alpha": "100",
            //   "allowDrag": "0"
            // },
        ]};
    let tmpNegative = {
          "seriesname": "-ve feelings",
          "color": "#ed0000",
          "data": [
            // {
            //   "value": "-73",
            //   "alpha": "100",
            //   "allowDrag": "0"
            // },
        ]};

    myDataSource.categories[0].category = [];
    myDataSource.dataset = [];

    this.props.data.map((it) => {
      myDataSource.categories[0].category.push({ "label" : it.hashTag});
      tmpPositive.data.push({"value": it.positiveScore, "allowDrag": "0"});
      tmpNegative.data.push({"value": it.negativeScore, "allowDrag": "0"});
    });

    myDataSource.dataset.push(tmpPositive);
    myDataSource.dataset.push(tmpNegative);

    return (
      <div>
        <ReactFC
          {...chartConfigs}
          // fcEvent-dataplotDragEnd={this.dataplotDragEnd}
        />
      </div>
    )
  }
}
export default Chart;
