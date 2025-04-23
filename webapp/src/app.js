import {UpperNavbar} from "./upper-navbar";
import {Container, Table} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import {SingleCourseGraph} from "./pages/single-course-graph";
import courses from './data/courses.json'
import {Synoptic} from "./pages/synoptic";

export default function App() {

  const base = process.env.REACT_APP_BASE_URI;

  return <>
    <UpperNavbar />
    <Container>
      <Switch>
        <Route exact path={base}>
          <p>Attenzione: TilStat non è un progetto ufficiale del Politecnico di Torino.
          </p>
          <Table>
            <tbody>
              {Object
                  .entries(courses)
                  .sort(([c1, n1], [c2, n2]) => n1.localeCompare(n2))
                  .map(([code, courseName]) =>
                  <tr key={code}><td>
                    <Link to={base + `course/${code}`} className="course-link">
                    {courseName}</Link>
                  </td></tr>)}
            </tbody>
          </Table>
        </Route>
        <Route exact path={base+"course/:courseCode"} component={SingleCourseGraph} />
        <Route path={base+"synoptic"}>
          <Synoptic />
        </Route>
        <Route path={base+"about"}>
          <div style={{maxWidth: 500}}>
            <h2>About</h2>
            <p>
              TilStat è un progetto di <b><a href="https://www.polito.it/personale?p=massimo.rebuglio">Massimo Rebuglio</a></b>,
              attualmente Assegnista di Ricerca presso il Dipartimento di Ingegneria Gestionale e della Produzione del
              Politecnico di Torino ed esercitatore nel corso di <a href="https://didattica.polito.it/pls/portal30/gap.pkg_guide.viewGap?p_cod_ins=10BDAPG&p_a_acc=2024&p_header=S&p_lang=IT&multi=N">Gestione Progetti</a> (II anno Magistrale nel
              corso di ing. Gestionale).
            </p>
            <p>
              Il sito riporta statistiche ed informazioni sul TIL, il test d'ingresso del Politecnico di Torino.
              Le informazioni non hanno carattere ufficiale. Questo sito è curato a titolo personale dall'autore.
            </p>
            <p>
              Se noti degli errori o vuoi proporre delle migliorie, scrivimi: <b>massimo.rebuglio@polito.it</b>
            </p>
            <p>
              Ringrazio <a href="https://t.me/Ignorante">Salvo</a> e <a href="https://t.me/one12358">Matilde</a> per il supporto ed i consigli ricevuti.
            </p>
          </div>
        </Route>
      </Switch>
    </Container>
  </>
}
