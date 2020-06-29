import React from 'react';
import Select from 'react-select'
import './App.css';

const SPOTS =
{
  "Andorra":[
     {
        "name":"Hotel Catalunya",
        "city":"Pas de la Casa"
     }
  ],
  "Angola":[
     {
        "name":"Restaurante Madeirense",
        "city":"Luanda"
     }
  ],
  "Belgium":[
     {
        "name":"Café Portugal",
        "city":"Bruxelas"
     },
     {
        "name":"O Cambalhotas",
        "city":"Bruxelas"
     }
  ],
  "Brazil":[
     {
        "name":"Espeto Brasileiro",
        "city":"Rio de Janeiro"
     },
     {
        "name":"Cantinho Português",
        "city":"São Paulo"
     }
  ],
  "Canada":[
     {
        "name":"Portuguese Cultural Centre of Kingston",
        "city":"Kingston"
     },
     {
        "name":"Portuguese Club Of Vancouver (PCOV)",
        "city":"Vancouver"
     },
     {
        "name":"Serra Coffee Bar & Billiards",
        "city":"Vancouver"
     }
  ],
  "Czech":[
     {
        "name":"Café Oliveira",
        "city":"Praga"
     }
  ],
  "France":[
     {
        "name":"Casa do Benfica de Paris",
        "city":"Paris"
     }
  ],
  "Germany":[
     {
        "name":"Café Lisboa",
        "city":"Berlim"
     },
     {
        "name":"Frango Português",
        "city":"Düsseldorf"
     },
     {
        "name":"Tasquinha da Jacinta",
        "city":"Frankfurt"
     },
     {
        "name":"Gaststätte Benfica",
        "city":"Hamburgo"
     },
     {
        "name":"Restaurante Portugal",
        "city":"Munique"
     },
     {
        "name":"Associação Recreativa Portuguesa Sindelfingen",
        "city":"Sindelfingen"
     }
  ],
  "Hungary":[
     {
        "name":"John Bull Sport Pub & Restaurant",
        "city":"Budapeste"
     }
  ],
  "Ireland":[
     {
        "name":"Murray's Pub",
        "city":"Dublin"
     },
     {
        "name":"The Living Room",
        "city":"Dublin"
     }
  ],
  "Lithuania":[
     {
        "name":"rePUBlic No.1",
        "city":"Kaunas"
     },
     {
        "name":"rePUBlic No. 4",
        "city":"Vilnius"
     },
     {
        "name":"Crazy Bull",
        "city":"Vilnius"
     }
  ],
  "Mozambique":[
     {
        "name":"Mundos",
        "city":"Maputo"
     }
  ],
  "Netherlands":[
     {
        "name":"Old Sailor Pub",
        "city":"Amesterdão"
     },
     {
        "name":"gdr Os Lusitanos",
        "city":"Amesterdão"
     },
     {
        "name":"Satellite Sportscafé",
        "city":"Amesterdão"
     }
  ],
  "Poland":[
     {
        "name":"Champion's Sports Bar",
        "city":"Varsóvia"
     }
  ],
  "Portugal":[
     {
        "name":"CRCA - Centro Recreativo e Cultural de Assentiz",
        "city":"Assentiz"
     },
     {
        "name":"The George",
        "city":"Lisboa"
     }
  ],
  "Romania":[
     {
        "name":"Mojo Music Club",
        "city":"Bucareste"
     }
  ],
  "Slovenia":[
     {
        "name":"Cutty Sark Pub",
        "city":"Ljubliana"
     }
  ],
  "Spain":[
     {
        "name":"Bistro 42",
        "city":"Barcelona"
     },
     {
        "name":"Docemasuno Sports Bar",
        "city":"Barcelona"
     },
     {
        "name":"La Burnessa",
        "city":"Barcelona"
     },
     {
        "name":"Dow Jones",
        "city":"Barcelona"
     },
     {
        "name":"Maria La Portuguesa",
        "city":"Madrid"
     },
     {
        "name":"Frangus",
        "city":"Madrid"
     },
     {
        "name":"Nino Ferreira",
        "city":"Madrid"
     },
     {
        "name":"A Novena Porta",
        "city":"Santiago de Compostela"
     }
  ],
  "Switzerland":[
     {
        "name":"Lausanne Sport Benfica",
        "city":"Lausanne"
     },
     {
        "name":"Restaurante Bem me Quer",
        "city":"Saint Gallen"
     }
  ],
  "United Kingdom":[
     {
        "name":"Brig O' Tay",
        "city":"Dundee"
     },
     {
        "name":"The Tron",
        "city":"Edimburgo"
     },
     {
        "name":"Cafe Porto",
        "city":"Liverpool"
     },
     {
        "name":"O Moinho",
        "city":"Londres"
     },
     {
        "name":"Bar & Co",
        "city":"Londres"
     },
     {
        "name":"O Tino",
        "city":"Londres"
     },
     {
        "name":"Cafe Tejo",
        "city":"Londres"
     },
     {
        "name":"Casa do Benfica de Londres",
        "city":"Londres"
     },
     {
        "name":"Sabor Latino",
        "city":"Londres"
     },
     {
        "name":"A Toca",
        "city":"Londres"
     },
     {
        "name":"Walkabout",
        "city":"Manchester"
     },
     {
        "name":"Cafe Football",
        "city":"Manchester"
     },
     {
        "name":"A Tasca",
        "city":"Peterborough"
     }
  ],
  "United States":[
     {
        "name":"Casa Benfica Cambridge",
        "city":"Boston"
     },
     {
        "name":"Legends",
        "city":"Nova Iorque"
     },
     {
        "name":"Hooters",
        "city":"Nova Iorque"
     }
  ]
};

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
