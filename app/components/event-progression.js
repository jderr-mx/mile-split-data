import Component from '@glimmer/component';
import * as Plot from '@observablehq/plot';

export default class EventProgressionComponent extends Component {
  MEASURED_EVENTS = ['D', 'HT', 'WT', 'S', 'J', 'LJ', 'HJ', 'PV'];
  get plot() {
    const conversionFunction = this.getUnitConversionFunction();
    return Plot.plot({
      marginLeft: 60,
      marks: [
        Plot.lineY(this.unitValues, {
          curve: 'catmull-rom',
          marker: 'circle',
          x: Plot.indexOf,
        }),
        Plot.tip(this.progressionData, { y: 'meetName', x: Plot.indexOf }),
        Plot.circle(this.prArray, {
          x: Plot.indexOf,
          y: 'units',
          stroke: 'blue',
          strokeWidth: 2,
          r: 5,
        }),
        Plot.text(this.prArray, {
          y: 'units',
          x: Plot.indexOf,
          text: () => 'PR',
          stroke: 'blue',
          strokeWidth: 1,
          dy: -12,
        }),
        Plot.axisX([], { tickFormat: null }),
      ],
      y: {
        domain: this.domain,
        tickFormat: (d) => conversionFunction(d),
        tickSize: 0,
        reverse: this.isTimedEvent,
      },
    });
  }
  get eventData() {
    return this.args.eventData;
  }
  get progressionData() {
    return this.eventData.toReversed();
  }

  get domain() {
    const domainMod = this.isTimedEvent ? 100 : 24000;
    const min = Math.min(...this.unitValues) - domainMod;
    const max = Math.max(...this.unitValues) + domainMod;
    return [Math.floor(min / 100) * 100, Math.ceil(max / 100) * 100];
  }

  get unitValues() {
    return this.progressionData.map((item) => item.units);
  }

  get prArray() {
    const prValue = this.isTimedEvent
      ? Math.min(...this.unitValues)
      : Math.max(...this.unitValues);
    return this.unitValues.map((value) =>
      value == prValue ? { units: value } : { units: null },
    );
  }

  unitsToDistance(units) {
    const remainder = units % 12000;
    const inches = remainder / 1000;
    const feet = (units - remainder) / 12000;
    return `${feet}-${inches}`;
  }

  unitsToTime(units) {
    const date = new Date(units);
    const min = date.getMinutes() ? `${date.getMinutes()}:` : '';
    const sec = min
      ? date.getSeconds().toString().padStart(2, '0')
      : date.getSeconds();
    const ms = (date.getMilliseconds() / 10).toString().padStart(2, '0');
    return `${min}${sec}.${ms}`;
  }

  getUnitConversionFunction() {
    if (this.isTimedEvent) return this.unitsToTime;
    else return this.unitsToDistance;
  }

  get isTimedEvent() {
    const eventCode = this.args.eventCode;
    return !this.MEASURED_EVENTS.includes(eventCode);
  }
}
