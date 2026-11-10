import cars from './practice'



// let [{model, colorsByPopularity: [mostPopular, ...otherColors], speedStats: {topSpeed, zeroToSixty}},...rest] = cars;

const [tesla, honda] = cars;

const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const {colorsByPopularity: mostPopular} = tesla;
const [teslaTopColor, teslaOtherColor] = mostPopular


const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {colorsByPopularity} = honda
const [hondaTopColor, hondaOtherColor] = colorsByPopularity


function CarCatalogue() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Color</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColor}</td>
          </tr>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CarCatalogue;

