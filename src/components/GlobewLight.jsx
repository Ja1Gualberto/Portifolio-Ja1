// export default GlobeLight;
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Globe from 'react-globe.gl';
import * as satellite from 'satellite.js';

const EARTH_RADIUS_KM = 6371; // km
const TIME_STEP = 3 * 1000; // ms per frame

const timeLogStyle = {
  position: 'absolute',
  fontSize: '12px',
  fontFamily: 'sans-serif',
  padding: '5px',
  borderRadius: '3px',
  backgroundColor: 'rgba(200, 200, 200, 0.1)',
  color: 'lavender',
  bottom: '10px',
  right: '10px',
};

const GlobeLight = () => {
  const globeEl = useRef();
  const [satData, setSatData] = useState();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // time ticker
    let frameId;
    (function frameTicker() {
      frameId = requestAnimationFrame(frameTicker);
      setTime((prevTime) => new Date(+prevTime + TIME_STEP));
    })();
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    // load satellite data
    fetch('//cdn.jsdelivr.net/npm/globe.gl/example/datasets/space-track-leo.txt')
      .then((r) => r.text())
      .then((rawData) => {
        const tleData = rawData
          .replace(/\r/g, '')
          .split(/\n(?=[^12])/)
          .filter((d) => d)
          .map((tle) => tle.split('\n'));

        const parsedSatData = tleData
          .map(([name, ...tle]) => ({
            satrec: satellite.twoline2satrec(...tle),
            name: name.trim().replace(/^0 /, ''),
          }))
          // exclude those that can't be propagated
          .filter((d) => !!satellite.propagate(d.satrec, new Date())?.position);

        setSatData(parsedSatData);
      });
  }, []);

  const particlesData = useMemo(() => {
    if (!satData) return [];

    const gmst = satellite.gstime(time);

    // react-globe.gl espera um array de "sistemas" de partículas,
    // por isso o array de pontos precisa ficar dentro de outro array.
    return [
      satData
        .map((d) => {
          const eci = satellite.propagate(d.satrec, time);
          if (eci?.position) {
            const gdPos = satellite.eciToGeodetic(eci.position, gmst);
            const lat = satellite.radiansToDegrees(gdPos.latitude);
            const lng = satellite.radiansToDegrees(gdPos.longitude);
            const alt = gdPos.height / EARTH_RADIUS_KM;
            return { ...d, lat, lng, alt };
          }
          return { ...d, lat: NaN, lng: NaN, alt: NaN };
        })
        .filter((d) => !isNaN(d.lat) && !isNaN(d.lng) && !isNaN(d.alt)),
    ];
  }, [satData, time]);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ altitude: 3.5 });
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Globe
        ref={globeEl}
        height={326}
        width={326}
        backgroundColor='rgba(0,0,0,0)'
        showAtmosphere
        showGraticules
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        particlesData={particlesData}
        particleLabel="name"
        particleLat="lat"
        particleLng="lng"
        particleAltitude="alt"
        particlesColor={useCallback(() => 'palegreen', [])}
        labelsData={[{
          lat: -8.7496958, lng:-63.8765206,
          text: "'I'm here!",
          color: 'white',
          size: 20
        }]}
      />
      {/* <div style={timeLogStyle}>{time.toString()}</div> */}
    </div>
  );
};

export default GlobeLight;