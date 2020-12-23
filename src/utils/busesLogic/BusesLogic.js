import stops from "../../assets/json/paradasColectivos.json";
import GetDistanceFromLatLonInM from "../distanceCalculator/DistanceCalculator";

export const GetClosestCapsBusStop = (coords, radius) => {
  var buses = [];
  stops.forEach((stop) => {
    const distance = GetDistanceFromLatLonInM(coords[0], coords[1], stop[2], stop[3]);
    if (distance <= radius) {
      buses.push(stop[0]);
    }
  });
  buses.sort();
  return [...new Set(buses)];
};

export const GetClosestBusStopByLineAndDirection = (line, direction, coords) => {
  var closestBus = { Line: line, Distance: 100000, Coords: [0, 0], Direction: direction };
  stops.forEach((stop) => {
    if (stop[0] === line && stop[1] === direction) {
      const distance = GetDistanceFromLatLonInM(coords[0], coords[1], stop[2], stop[3]);
      if (distance < closestBus.Distance) {
        closestBus.Distance = distance;
        closestBus.Coords = [stop[2], stop[3]];
      }
    }
  });
  return closestBus;
};

export const GetClosestBusStopByLine = (line, coords) => {
  var closestBusI = { Line: line, Distance: 100000, Coords: [0, 0], Direction: "i" };
  var closestBusV = { Line: line, Distance: 100000, Coords: [0, 0], Direction: "v" };
  stops.forEach((stop) => {
    if (stop[0] === line) {
      const distance = GetDistanceFromLatLonInM(coords[0], coords[1], stop[2], stop[3]);
      if (stop[1] === "i") {
        if (distance < closestBusI.Distance) {
          closestBusI.Distance = distance;
          closestBusI.Coords = [stop[2], stop[3]];
        }
      } else {
        if (distance < closestBusV.Distance) {
          closestBusV.Distance = distance;
          closestBusV.Coords = [stop[2], stop[3]];
        }
      }
    }
  });
  return [closestBusI, closestBusV];
};
