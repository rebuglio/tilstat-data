import React, {useState} from 'react'
// import Chart from "react-apexcharts";

import tilstat from '../data/tilstat.json'
import courses from '../data/courses.json'
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export function SingleCourseGraph ({match}) {
    return <>
        <TilStat courseCode={match.params.courseCode} />
    </>
}

function conventionalYearToDisplayYear(y) {
    return (parseInt(y) - 1).toString()
}

const all_courses = Array.from(new Set(tilstat.map(t => t['corso'])))
const commonColors = '#008FFB #00E396 #FEB019 #FF4560 #775DD0 #3F51B5 #03A9F4 #4CAF50 #F9CE1D #FF9800'.split(' ')

function format_mw(m1, w) {
    let m = {'07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'}[m1]
    if (!m)
        return "After" //+m1+" "+w
    w += 1
    const suf = {1: 'st', 2: 'nd'}[w] || 'th'
    return `${m} ${w}${suf} week`
}

const TilStat = ({courseCode}) => {

    //const [course, setCourse] = useState(17)

    //const course_name = courseCode // all_courses[course] || all_courses[0]

    let month_weeks = new Set()
    const data = {};
    // console.log(tilstat.filter(t => t.corso === course_name))
    tilstat.filter(t => t.corso === courseCode)
        .forEach(t => {
            if (!data[t.year])
                data[t.year] = {}
            const montweek = format_mw(t.month, t.week)

            // exclude repetition in rank
            if (!Object.values(data[t.year]).map(to => to.totale).includes(t.totale)) {
                data[t.year][montweek] = t
                month_weeks.add(montweek)
            }
        })
    month_weeks = Array.from(month_weeks)
    const years = Object.keys(data)
        .sort((y1, y2) => parseInt(y2) - parseInt(y1));

    const series = month_weeks.map(m => ({
        name: m,
        data: years.map(y => data[y][m]?.totale || null),
        fulldata: years.map(y => data[y][m])
    }))

    // const state = {
    //     options: {
    //         chart: {id: "basic-bar", animations: {enabled: false},},
    //         xaxis: {categories: years},
    //         markers: {size: 7,},
    //         stroke: {curve: 'smooth'},
    //         colors: commonColors
    //     },
    //     series: series
    // }

    return <Container>
        {/*<TitleBox title="TilStat" />*/}

        <Row>
            <h2>{courses[courseCode]}</h2>
        </Row>
        <Row>
            <Col>
                Legenda:
                <ul>
                    <li><b>Sep 1st week</b>: Punteggio minimo richiesto per entrare negli scorrimenti della prima settimana di settembre.</li>
                    <li><b>Sep 2nd week</b>: Punteggio minimo richiesto per entrare negli scorrimenti della seconda settimana di settembre.</li>
                    <li>E così via.</li>
                </ul>
                <p>
                    Il <b>2023</b> rappresenta la graduatoria dell'anno 2023/2024.
                </p>
            </Col>
        </Row>
        <Row>
            <StatTable id="tilstat_table" series={series} years={years}/>
        </Row>
        <Row>
            {/*<p>*/}
            {/*    */}
            {/*</p>*/}
            {/*<Chart*/}
            {/*    options={state.options}*/}
            {/*    series={state.series}*/}
            {/*    type="line"*/}
            {/*    width="100%"*/}
            {/*    height="400px"*/}
            {/*/>*/}
        </Row>
    </Container>
}

const StatTable = ({series, years, className}) => {

    const [linkEnabled, setLinkEnabled] = useState(false)

    return <Table responsive className={className}>
        <thead>
        <tr>
            <th>
                Punteggio minimo richiesto per entrare
            </th>
            {years.map((y, i) => (
                <th key={i}>
                    {conventionalYearToDisplayYear(y)}
                </th>
            ))}
        </tr>
        </thead>
        <tbody>
        {series?.map((s, i) => <tr key={i}>
            <td>
                <div className="point-pill" style={{backgroundColor: commonColors[i]}}></div>
                {' '}{s.name}
            </td>
            {s.fulldata.map((v, j) =>
                !linkEnabled ? <td key={i + ' ' + j}>{v?.totale.toFixed(2)}</td> :
                    <td key={i + ' ' + j}><a target="_blank" href={v?.uri} rel="noreferrer">{v?.totale.toFixed(2)}</a></td>
            )}
        </tr>)}
        <tr>
            <td colSpan={years.length + 1} style={{textAlign: 'right'}}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Link graduatorie"
                    value={linkEnabled}
                    onChange={e => setLinkEnabled(e.target.checked)}
                    style={{display: 'inline-block'}}
                />
            </td>
        </tr>
        </tbody>
    </Table>
}

const SelectCourse = ({courses, course, setCourse}) => {

    const options = courses.map((c, i) => ({value: i, label: c}))

    return <>
        <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={false}
            isLoading={false}
            isClearable={false}
            isRtl={false}
            isSearchable={true}
            options={options}
            name="color"
            value={options[course]}
            onChange={e => setCourse(e.value)}
        />
    </>

}
