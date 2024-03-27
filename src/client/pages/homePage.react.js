import React from "react"
import immutable from "immutable"
import DocumentTitle from "react-document-title"
import Component from "../common/component.react"
import Dataset from "../datasets/dataset.react"
import { fetchTopDatasets } from "../datasets/actions"

require("./homePage.styl")

export default class HomePage extends Component {
  componentWillMount() {
    const result = this.props.datasets.get("top")

    if (!fetchTopDatasets.pending && !result.fetched) {
      return fetchTopDatasets()
    }
  }

  render() {
    const topDatasets = this.props.datasets.get("top")

    return (
      <DocumentTitle title="Relational Dataset Repository">
        <div>
          <section className="content">
            <h1>Welcome</h1>
            <p style={{ maxWidth: "42rem" }}>
              The CTU Prague Relational Learning Repository recently moved from
              to its new and permanent home{" "}
              <a href="https://relational-data.org">relational-data.org</a>.
              <br></br>
              <br></br>
              It is actively maintained and supported by the core team, with
              additional assistance from the team behind{" "}
              <a href="https://getml.com">getML</a> since 2024.
              <br></br>
              <br></br>
              For documentation, connection information, and citation info,
              please go to{" "}
              <a href="https://arxiv.org/abs/1511.03086">this paper</a> on
              arxiv.org.
            </p>
            <br></br>
            <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
              <img
                src="/assets/img/ctu.png"
                alt="CTU Prague"
                style={{ height: "48px" }}
              />
              <img
                src="/assets/img/simonfraser.png"
                alt="Simon Fraser University"
                style={{ height: "48px" }}
              />
              <img
                src="/assets/img/getml.png"
                alt="getML"
                style={{ height: "36px", marginTop: "8px" }}
              />
            </div>
          </section>
          <section className="content">
            <h2>Top datasets</h2>
            {topDatasets.fetched ? (
              <ul className="TopDatasets">
                {topDatasets.list.map((dataset, i) => {
                  return <Dataset dataset={dataset} key={dataset.title} />
                })}
              </ul>
            ) : null}
          </section>
          <section className="content">
            <h2>Top datasets</h2>
            {topDatasets.fetched ? (
              <ul className="TopDatasets">
                {topDatasets.list.map((dataset, i) => {
                  return <Dataset dataset={dataset} key={dataset.title} />
                })}
              </ul>
            ) : null}
          </section>
        </div>
      </DocumentTitle>
    )
  }
}
