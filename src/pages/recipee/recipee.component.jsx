import React from "react";
import "./recipee.styles.scss";
import { Query } from "react-apollo";
import { RECIPEE } from "../../Queries";
import ReactMarkdown from "react-markdown";
import { ReactComponent as Logo } from "../../assets/icon.svg";

class Recipee extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="recipee">
        <Query query={RECIPEE} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <Logo />;
            if (error) return <h2>Error obteniendo datos</h2>;

            document.title = `${data.Recipee.title} | Recetas`;
            return (
              <React.Fragment>
                <h2>{data.Recipee.title}</h2>
                <p>{data.Recipee.description}</p>
                <h3>Ingredientes</h3>
                <ul>
                  {data.Recipee.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <h3>Preparación</h3>
                <ReactMarkdown
                  source={data.Recipee.preparation}
                  linkTarget="_blank"
                />
              </React.Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Recipee;
