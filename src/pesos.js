export function Areas() {
  return [
    {
      id: 'hum',
      text:'Humanas'
    },
    {
      id: 'nat',
      text: 'Natureza',
    },
    {
      id: 'ling',
      text: 'Linguagens',
    },
    {
      id: 'mat',
      text: 'Matemática',
    },
    {
      id: 'red',
      text: 'Redação',
    }
  ]
}

export function Pesos() {
  return [
    {
      "text": "UFERSA",
      "value": {
        "institution": "UFERSA",
        "cursos": [
          {
            "text": "Administração",
            "value": {
              "course": "Administração",
              "pesos": {
                "nat": 1, 
                "hum": 3,
                "ling": 2,
                "mat": 2,
                "red": 2
              }
            }
          },
          {
            "text": "Agronomia",
            "value": {
              "course": "Agronomia",
              "pesos": {
                "nat": 3.5, 
                "hum": 1,
                "ling": 1.5,
                "mat": 2.5,
                "red": 1.5
              }
            }
          },
          {
            "text": "Pedagogia",
            "value": {
              "course": "Pedagogia",
              "pesos": {
                "nat": 1, 
                "hum": 3,
                "ling": 2,
                "mat": 1,
                "red": 3
              }
            }
          }
        ]
      }
    },
    {
      "text": "UERN",
      "value": {
        "institution": "UERN",
        "cursos": [
          {
            "text": "Administração",
            "value": {
              "course": "Administração",
              "pesos": {
                "nat": 1, 
                "hum": 3,
                "ling": 3,
                "mat": 3,
                "red": 3
              }
            }
          },
          {
            "text": "Computação",
            "value": {
              "course": "Computação",
              "pesos": {
                "nat": 3, 
                "hum": 1,
                "ling": 3,
                "mat": 3,
                "red": 3
              }
            }
          },
          {
            "text": "Pedagogia",
            "value": {
              "course": "Pedagogia",
              "pesos": {
                "nat": 1, 
                "hum": 3,
                "ling": 3,
                "mat": 1,
                "red": 3
              }
            }
          }
        ]
      }
    }
  ]
}
