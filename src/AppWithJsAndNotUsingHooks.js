import React from "react";
import "./style.css";
import { Table } from 'reactstrap';

export default function App() {
  return <TableTeams />;
}

class TableTeams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: {}
    };
  }

  componentDidMount() {
    this.setState({
      teams: {
        groupPhase: {
          groupA: [
            {
              posicao: 1,
              pontos: 15,
              time: {
                time_id: 18,
                nome_popular: "Flamengo",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c95084cb.svg"
              },
              jogos: 5,
              vitorias: 5,
              empates: 0,
              derrotas: 0,
              gols_pro: 14,
              gols_contra: 2,
              saldo_gols: 12,
              aproveitamento: 100,
              variacao_posicao: 0,
              ultimos_jogos: ["v", "v", "v", "v", "v"]
            },
            {
              posicao: 2,
              pontos: 8,
              time: {
                time_id: 22,
                nome_popular: "Botafogo",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c9b06760.svg"
              },
              jogos: 5,
              vitorias: 2,
              empates: 2,
              derrotas: 1,
              gols_pro: 9,
              gols_contra: 7,
              saldo_gols: 2,
              aproveitamento: 53.3,
              variacao_posicao: 0,
              ultimos_jogos: ["v", "d", "e", "v", "e"]
            },
            {
              posicao: 3,
              pontos: 7,
              time: {
                time_id: 20,
                nome_popular: "Boavista",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c989287e.svg"
              },
              jogos: 5,
              vitorias: 2,
              empates: 1,
              derrotas: 2,
              gols_pro: 5,
              gols_contra: 5,
              saldo_gols: 0,
              aproveitamento: 46.7,
              variacao_posicao: 0,
              ultimos_jogos: ["d", "v", "v", "e", "d"]
            },
            {
              posicao: 4,
              pontos: 7,
              time: {
                time_id: 24,
                nome_popular: "Bangu",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c9e3935a.svg"
              },
              jogos: 5,
              vitorias: 2,
              empates: 1,
              derrotas: 2,
              gols_pro: 4,
              gols_contra: 6,
              saldo_gols: -2,
              aproveitamento: 46.7,
              variacao_posicao: 1,
              ultimos_jogos: ["v", "d", "e", "d", "v"]
            },
            {
              posicao: 5,
              pontos: 5,
              time: {
                time_id: 15,
                nome_popular: "Portuguesa-RJ",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c916390f.svg"
              },
              jogos: 5,
              vitorias: 1,
              empates: 2,
              derrotas: 2,
              gols_pro: 5,
              gols_contra: 4,
              saldo_gols: 1,
              aproveitamento: 33.3,
              variacao_posicao: -1,
              ultimos_jogos: ["d", "v", "d", "e", "e"]
            },
            {
              posicao: 6,
              pontos: 0,
              time: {
                time_id: 25,
                nome_popular: "Cabofriense",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c9fabae8.svg"
              },
              jogos: 5,
              vitorias: 0,
              empates: 0,
              derrotas: 5,
              gols_pro: 4,
              gols_contra: 17,
              saldo_gols: -13,
              aproveitamento: 0,
              variacao_posicao: 0,
              ultimos_jogos: ["d", "d", "d", "d", "d"]
            }
          ],
          "grupo-b": [
            {
              posicao: 1,
              pontos: 10,
              time: {
                time_id: 26,
                nome_popular: "Fluminense",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
              },
              jogos: 5,
              vitorias: 3,
              empates: 1,
              derrotas: 1,
              gols_pro: 11,
              gols_contra: 4,
              saldo_gols: 7,
              aproveitamento: 66.7,
              variacao_posicao: 0,
              ultimos_jogos: ["v", "v", "v", "d", "e"]
            },
            {
              posicao: 2,
              pontos: 10,
              time: {
                time_id: 21,
                nome_popular: "Volta Redonda",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c99cab4a.svg"
              },
              jogos: 5,
              vitorias: 3,
              empates: 1,
              derrotas: 1,
              gols_pro: 7,
              gols_contra: 3,
              saldo_gols: 4,
              aproveitamento: 66.7,
              variacao_posicao: 0,
              ultimos_jogos: ["v", "e", "d", "v", "v"]
            },
            {
              posicao: 3,
              pontos: 8,
              time: {
                time_id: 23,
                nome_popular: "Vasco",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c9c703f0.svg"
              },
              jogos: 5,
              vitorias: 2,
              empates: 2,
              derrotas: 1,
              gols_pro: 5,
              gols_contra: 4,
              saldo_gols: 1,
              aproveitamento: 53.3,
              variacao_posicao: 1,
              ultimos_jogos: ["e", "e", "d", "v", "v"]
            },
            {
              posicao: 4,
              pontos: 6,
              time: {
                time_id: 17,
                nome_popular: "Madureira",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c93c8099.svg"
              },
              jogos: 5,
              vitorias: 2,
              empates: 0,
              derrotas: 3,
              gols_pro: 6,
              gols_contra: 9,
              saldo_gols: -3,
              aproveitamento: 40,
              variacao_posicao: -1,
              ultimos_jogos: ["d", "v", "v", "d", "d"]
            },
            {
              posicao: 5,
              pontos: 4,
              time: {
                time_id: 19,
                nome_popular: "Resende",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c96a8a14.svg"
              },
              jogos: 5,
              vitorias: 1,
              empates: 1,
              derrotas: 3,
              gols_pro: 4,
              gols_contra: 8,
              saldo_gols: -4,
              aproveitamento: 26.7,
              variacao_posicao: 0,
              ultimos_jogos: ["e", "d", "d", "v", "d"]
            },
            {
              posicao: 6,
              pontos: 4,
              time: {
                time_id: 14,
                nome_popular: "Macaé",
                escudo:
                  "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c8febd2d.svg"
              },
              jogos: 5,
              vitorias: 1,
              empates: 1,
              derrotas: 3,
              gols_pro: 2,
              gols_contra: 7,
              saldo_gols: -5,
              aproveitamento: 26.7,
              variacao_posicao: 0,
              ultimos_jogos: ["d", "d", "v", "d", "e"]
            }
          ]
        }
      }
    });
  }

  render() {
    if (this.state.teams.groupPhase)
      console.log(this.state.teams.groupPhase.groupA.map(r => r));
    return (
      <Table>
        <thead>
          <th />
          <th>Time</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>Recentes</th>
        </thead>
        <tbody>
          {this.state.teams.groupPhase &&
            this.state.teams.groupPhase.groupA &&
            this.state.teams.groupPhase.groupA.sort((a, b) => a.posicao - b.posicao).map((r, i) => (
              <RowTeamsInfo props={r} />
            ))}
        </tbody>
      </Table>
    );
  }
}

class RowTeamsInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  renderRecentes(result) {
    if (result === "v")
      return <span class="dot" style={{ backgroundColor: "#00ff00" }} />;
    if (result === "d")
      return <span class="dot" style={{ backgroundColor: "#ff0000" }} />;
    return <span class="dot" />;
  }
  render() {
    const team = this.props.props;
    console.log(team);
    if (this.props)
      return (
        <tr key={team.time.time_id}>
          <th><img alt='' src={team.time.escudo} style={{ width: '25px' }} /></th>
          <th>{team.time.nome_popular}</th>
          <th>{team.pontos}</th>
          <th>{team.jogos}</th>
          <th>{team.vitorias}</th>
          <th>{team.empates}</th>
          <th>{team.derrotas}</th>
          <th>{team.ultimos_jogos.map(r => <>{this.renderRecentes(r)}</>)}</th>
        </tr>
      );
    return <div />;
  }
}
