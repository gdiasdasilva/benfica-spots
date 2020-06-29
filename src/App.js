import React from 'react';
import Select from 'react-select';

import all_spots from './spots.json';

const SPOTS = all_spots;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: Object.keys(SPOTS),
      selected_country: undefined,
      selected_country_spots: []
    }

    this.setSelectedCountry = this.setSelectedCountry.bind(this);
  }

  getCountriesOptions() {
    return this.state.countries.map(c => {
      return { value: c, label: c };
     });
  }

  setSelectedCountry(country) {
    if (country && this.state.countries.includes(country.value)) {
      this.setState({
        selected_country: country.value,
        selected_country_spots: SPOTS[country.value]
      });
    }
  }

  render() {
    const customStyles = {
      control: base => ({
        ...base,
        height: 80,
        fontSize: 18
      })
    };

    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1 className="h2">Sport Lisboa e Benfica around the World</h1>
            <p className="lead">A community list of restaurants/pubs/bars that broadcast Sport Lisboa e Benfica's matches.</p>

            <Select
              options={this.getCountriesOptions()}
              onChange={this.setSelectedCountry}
              className="mt-4"
              placeholder="Select a country..."
              styles={customStyles}
            />

            { this.state.selected_country && (
              <div className="mt-5 mb-5 row">
                <div className="col-12 mb-3">
                  <h2 className="h4">Spots in {this.state.selected_country}</h2>
                </div>

                { this.state.selected_country_spots.map(spot => (
                  <div className="col-md-6 mt-1" key={spot.name}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{spot.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{spot.city}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
