import {Fragment} from "react";
import {Table} from "react-bootstrap";

export function Synoptic() {
    return <>
        <h2>Aspiranti per Anno</h2>
        <p>
            Aspirante è colui che ha inserito il corso tra le scelte.
        </p>
        <Table className="table-fixed">
            <thead>
            <tr>
                <th>Corso</th>
                <th>21/22</th>
                <th>22/23</th>
                <th>Variazione</th>
                <th>23/24</th>
                <th>Variazione</th>
            </tr>
            </thead>
            <tbody>
            {corsi.corsi.map((corso) => (
                <tr key={corso.corso}>
                    <td>{corso.corso}</td>
                    {corso.anni.map((anno, index) => (
                        <Fragment key={index}>
                            <td>{anno.studenti.toFixed(0)}</td>
                            {anno.variazione !== undefined && (
                                <td style={{color: anno.variazione >= 0 ? "green" : "red"}}>
                                    {(anno.variazione >= 0 ? "+" : "") +
                                        (anno.variazione * 100).toLocaleString('en-US', {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false
                                            })
                                        +"%"}
                                </td>
                            )}
                        </Fragment>
                    ))}
                </tr>
            ))}
            </tbody>
        </Table>
    </>
}

const corsi = {
    "corsi": [
        {
            "corso": "Ateneo",
            "anni": [
                {"anno": "21/22", "studenti": 8916.0},
                {"anno": "22/23", "studenti": 8975.0, "variazione": 0.01},
                {"anno": "23/24", "studenti": 9049.0, "variazione": 0.01}
            ]
        },
        {
            "corso": "Architettura",
            "anni": [
                {"anno": "21/22", "studenti": 771.0},
                {"anno": "22/23", "studenti": 1096.0, "variazione": 0.42},
                {"anno": "23/24", "studenti": 1306.0, "variazione": 0.19}
            ]
        },
        {
            "corso": "Civil and Environmental",
            "anni": [
                {"anno": "21/22", "studenti": 35.0},
                {"anno": "22/23", "studenti": 35.0, "variazione": 0},
                {"anno": "23/24", "studenti": 62.0, "variazione": 0.77}
            ]
        },
        {
            "corso": "Design",
            "anni": [
                {"anno": "21/22", "studenti": 1297.0},
                {"anno": "22/23", "studenti": 1258.0, "variazione": -0.03},
                {"anno": "23/24", "studenti": 1306.0, "variazione": 0.04}
            ]
        },
        {
            "corso": "Electronic-eng",
            "anni": [
                {"anno": "21/22", "studenti": 96.0},
                {"anno": "22/23", "studenti": 101.0, "variazione": 0.05},
                {"anno": "23/24", "studenti": 90.0, "variazione": -0.11}
            ]
        },
        {
            "corso": "Aerospaziale",
            "anni": [
                {"anno": "21/22", "studenti": 1489.0},
                {"anno": "22/23", "studenti": 1269.0, "variazione": -0.15},
                {"anno": "23/24", "studenti": 1230.0, "variazione": -0.03}
            ]
        },
        // Altri corsi
        {
            "corso": "Biomedica",
            "anni": [
                {"anno": "21/22", "studenti": 1444.0},
                {"anno": "22/23", "studenti": 1101.0, "variazione": -0.24},
                {"anno": "23/24", "studenti": 1072.0, "variazione": -0.03}
            ]
        },
        {
            "corso": "Chimica",
            "anni": [
                {"anno": "21/22", "studenti": 468.0},
                {"anno": "22/23", "studenti": 360.0, "variazione": -0.23},
                {"anno": "23/24", "studenti": 347.0, "variazione": -0.04}
            ]
        },
        {
            "corso": "Civile",
            "anni": [
                {"anno": "21/22", "studenti": 392.0},
                {"anno": "22/23", "studenti": 301.0, "variazione": -0.23},
                {"anno": "23/24", "studenti": 403.0, "variazione": 0.34}
            ]
        },
        {
            "corso": "Materiali",
            "anni": [
                {"anno": "21/22", "studenti": 272.0},
                {"anno": "22/23", "studenti": 209.0, "variazione": -0.23},
                {"anno": "23/24", "studenti": 240.0, "variazione": 0.15}
            ]
        },
        {
            "corso": "Cinema",
            "anni": [
                {"anno": "21/22", "studenti": 385.0},
                {"anno": "22/23", "studenti": 308.0, "variazione": -0.20},
                {"anno": "23/24", "studenti": 343.0, "variazione": 0.11}
            ]
        },
        {
            "corso": "Produzione-at",
            "anni": [
                {"anno": "21/22", "studenti": 128.0},
                {"anno": "22/23", "studenti": 120.0, "variazione": -0.06},
                {"anno": "23/24", "studenti": 181.0, "variazione": 0.51}
            ]
        },
        {
            "corso": "Produzione-ba",
            "anni": [
                {"anno": "21/22", "studenti": 134.0},
                {"anno": "22/23", "studenti": 157.0, "variazione": 0.17},
                {"anno": "23/24", "studenti": 223.0, "variazione": 0.42}
            ]
        },
        {
            "corso": "Produzione-ni",
            "anni": [
                {"anno": "21/22", "studenti": 79.0},
                {"anno": "22/23", "studenti": 76.0, "variazione": -0.04},
                {"anno": "23/24", "studenti": 112.0, "variazione": 0.47}
            ]
        },
        {
            "corso": "Autoveicolo",
            "anni": [
                {"anno": "21/22", "studenti": 628.0},
                {"anno": "22/23", "studenti": 570.0, "variazione": -0.09},
                {"anno": "23/24", "studenti": 609.0, "variazione": 0.07}
            ]
        },
        {
            "corso": "Edile",
            "anni": [
                {"anno": "21/22", "studenti": 316.0},
                {"anno": "22/23", "studenti": 254.0, "variazione": -0.20},
                {"anno": "23/24", "studenti": 368.0, "variazione": 0.45}
            ]
        },
        {
            "corso": "Elettrica",
            "anni": [
                {"anno": "21/22", "studenti": 348.0},
                {"anno": "22/23", "studenti": 248.0, "variazione": -0.29},
                {"anno": "23/24", "studenti": 270.0, "variazione": 0.09}
            ]
        },
        {
            "corso": "Elettronica-ita",
            "anni": [
                {"anno": "21/22", "studenti": 626.0},
                {"anno": "22/23", "studenti": 457.0, "variazione": -0.27},
                {"anno": "23/24", "studenti": 488.0, "variazione": 0.07}
            ]
        },
        {
            "corso": "Energetica",
            "anni": [
                {"anno": "21/22", "studenti": 742.0},
                {"anno": "22/23", "studenti": 605.0, "variazione": -0.18},
                {"anno": "23/24", "studenti": 646.0, "variazione": 0.07}
            ]
        },
        {
            "corso": "Fisica",
            "anni": [
                {"anno": "21/22", "studenti": 438.0},
                {"anno": "22/23", "studenti": 349.0, "variazione": -0.20},
                {"anno": "23/24", "studenti": 334.0, "variazione": -0.04}
            ]
        },
        {
            "corso": "Gestionale",
            "anni": [
                {"anno": "21/22", "studenti": 1448.0},
                {"anno": "22/23", "studenti": 1158.0, "variazione": -0.20},
                {"anno": "23/24", "studenti": 1372.0, "variazione": 0.18}
            ]
        },
        {
            "corso": "Informatica",
            "anni": [
                {"anno": "21/22", "studenti": 1499.0},
                {"anno": "22/23", "studenti": 1319.0, "variazione": -0.12},
                {"anno": "23/24", "studenti": 1306.0, "variazione": -0.01}
            ]
        },
        {
            "corso": "Meccanica",
            "anni": [
                {"anno": "21/22", "studenti": 1554.0},
                {"anno": "22/23", "studenti": 1331.0, "variazione": -0.14},
                {"anno": "23/24", "studenti": 1344.0, "variazione": 0.01}
            ]
        },
        {
            "corso": "Ambientale",
            "anni": [
                {"anno": "21/22", "studenti": 396.0},
                {"anno": "22/23", "studenti": 287.0, "variazione": -0.28},
                {"anno": "23/24", "studenti": 303.0, "variazione": 0.06}
            ]
        },
        {
            "corso": "Matematica",
            "anni": [
                {"anno": "21/22", "studenti": 357.0},
                {"anno": "22/23", "studenti": 316.0, "variazione": -0.11},
                {"anno": "23/24", "studenti": 355.0, "variazione": 0.12}
            ]
        },
        {
            "corso": "Pianificazione",
            "anni": [
                {"anno": "21/22", "studenti": 106.0},
                {"anno": "22/23", "studenti": 129.0, "variazione": 0.22},
                {"anno": "23/24", "studenti": 165.0, "variazione": 0.28}
            ]
        }
    ]
}